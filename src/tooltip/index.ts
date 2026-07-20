import { html, PropertyValues } from "lit";
import { property, query } from "lit/decorators.js";
import { DirectiveResult } from "lit/directive.js";
import { UnsafeHTMLDirective } from "lit/directives/unsafe-html.js";

import { unsafeHTMLConverter } from "../base/converter";
import { createStyleOnHeader, generateGUID, KucBase } from "../base/kuc-base";
import { isHTMLElement, validateProps } from "../base/validator";

import { TOOLTIP_CSS } from "./style";
import { TooltipPlacement, TooltipProps } from "./type";

type KeyBoardFunction = (event: KeyboardEvent) => void;

let exportTooltip;
(() => {
  exportTooltip = window.customElements.get("kuc-tooltip");
  if (exportTooltip) {
    return;
  }

  class KucTooltip extends KucBase {
    @property({ type: String, reflect: true, attribute: "class" }) className =
      "";
    @property({ type: String, reflect: true, attribute: "id" }) id = "";
    @property({ type: String }) placement: TooltipPlacement = "top";
    @property({ type: String }) title = "";
    @property() container: string | HTMLElement = "";
    @property({ type: Boolean }) describeChild = false;

    @query(".kuc-tooltip__group__container")
    private _groupContainerEL!: HTMLDivElement;
    @query(".kuc-tooltip__group__title__wrapper")
    private _titleWrapper!: HTMLDivElement;
    @query(".kuc-tooltip__group__container")
    private _containerEl!: HTMLDivElement;
    @query(".kuc-tooltip__group__title")
    private _titleEl!: HTMLDivElement;

    private _container:
      | HTMLElement
      | DirectiveResult<typeof UnsafeHTMLDirective> = "";
    private _firstChildEl!: HTMLElement;
    private _GUID: string;
    private _globalEscapeBound: KeyBoardFunction;
    private _setTooltipPositionBound: () => void;
    private _scrollTargets: Array<Window | Element> = [];
    private _timeoutID: number | null = null;

    constructor(props?: TooltipProps) {
      super();
      this._GUID = generateGUID();
      const validProps = validateProps(props);
      Object.assign(this, validProps);
      this._globalEscapeBound = this._globalEscape.bind(this);
      this._setTooltipPositionBound = this._setTooltipPosition.bind(this);
    }

    update(changedProperties: PropertyValues) {
      if (changedProperties.has("container")) {
        if (this.container && isHTMLElement(this.container)) {
          this._container = unsafeHTMLConverter(this.container);
        } else {
          this._container = this.container;
        }
      }
      super.update(changedProperties);
    }

    render() {
      return html`
        <div
          class="kuc-tooltip__group kuc-tooltip__group--${this._getPlacement()}"
        >
          <div
            class="kuc-tooltip__group__container"
            @focusin="${this._handleFocusinContainer}"
            @focusout="${this._handleFocusoutContainer}"
            @mouseenter="${this._handleMouseEnterContainer}"
            @mouseleave="${this._handleMouseLeaveContainer}"
            @touchstart="${this._handleTouchStartContainer}"
          >
            ${this._container}
          </div>
          ${this._getTitleTemplate()}
        </div>
      `;
    }

    protected updated() {
      this._initializeFirstChildElement();
      if (this.describeChild) {
        this._setChildTitleAttribute();
      } else {
        this._setChildAriaLabelAttribute();
      }
    }

    private _handleMouseEnterContainer() {
      this._openTooltip();
    }

    private _handleTouchStartContainer() {
      this._openTooltip();
    }

    private _handleMouseLeaveContainer(event: MouseEvent) {
      const relatedTargetEl = event.relatedTarget as HTMLElement;
      const isHoverTitle =
        this._titleWrapper && this._titleWrapper.contains(relatedTargetEl);
      if (isHoverTitle) return;

      this._closeTooltip();
    }

    private _initializeFirstChildElement() {
      if (typeof this._container !== "string") {
        const firstChildElement = this._groupContainerEL
          .firstElementChild as HTMLElement;

        if (
          firstChildElement &&
          !firstChildElement.getAttribute("aria-describedby")
        ) {
          this._firstChildEl = firstChildElement;
        }
      }
    }

    private _setChildTitleAttribute() {
      if (!this._firstChildEl) return;

      this._firstChildEl.setAttribute("title", this.title);
      this._firstChildEl.removeAttribute("aria-label");
    }

    private _setChildAriaLabelAttribute() {
      if (!this._firstChildEl) return;

      this._firstChildEl.setAttribute("aria-label", this.title);
      this._firstChildEl.removeAttribute("title");
    }

    private _getTitleTemplate() {
      if (!this.title) return html``;

      return html`
        <div
          id="${this._GUID}-title"
          popover="manual"
          class="kuc-tooltip__group__title"
          role="tooltip"
          @mouseleave="${this._handleMouseLeaveTitle}"
        >
          <div class="kuc-tooltip__group__title__wrapper">
            <div class="kuc-tooltip__group__title__wrapper__arrow"></div>
            <div class="kuc-tooltip__group__title__wrapper__text">
              ${this.title}
            </div>
          </div>
        </div>
      `;
    }

    private _handleMouseLeaveTitle(event: MouseEvent) {
      const relatedTargetEl = event.relatedTarget as HTMLElement;
      if (this._groupContainerEL.contains(relatedTargetEl)) return;

      this._closeTooltip();
    }

    private _handleFocusinContainer() {
      this._openTooltip();
    }

    private _handleFocusoutContainer() {
      this._closeTooltip();
    }

    private _openTooltip() {
      this._updateChildElementAttributes(true);
      const tooltipEl = this.querySelector(
        ".kuc-tooltip__group__title",
      ) as HTMLElement;
      if (tooltipEl) {
        tooltipEl.showPopover();
        requestAnimationFrame(() => {
          this._setTooltipPosition();
        });
      }
      this._attachGlobalListener();
    }

    private _closeTooltip() {
      this._updateChildElementAttributes(false);
      const tooltipEl = this.querySelector(
        ".kuc-tooltip__group__title",
      ) as HTMLElement;
      if (tooltipEl) {
        tooltipEl.hidePopover();
      }
      this._removeGlobalListener();
    }

    private _updateChildElementAttributes(open: boolean) {
      if (!this._firstChildEl || !this.describeChild) return;
      if (open) {
        this._firstChildEl.removeAttribute("title");
        this._firstChildEl.setAttribute(
          "aria-describedby",
          `${this._GUID}-title`,
        );
        return;
      }
      this._firstChildEl.removeAttribute("aria-describedby");
      this._firstChildEl.setAttribute("title", this.title);
    }

    private _attachGlobalListener() {
      document.addEventListener("keydown", this._globalEscapeBound);
      this._scrollTargets = this._getScrollableAncestors(this._containerEl);
      for (const targetEl of this._scrollTargets) {
        targetEl.addEventListener("scroll", this._handleScroll, {
          passive: true,
        });
      }
    }

    private _removeGlobalListener() {
      document.removeEventListener("keydown", this._globalEscapeBound);
      for (const targetEl of this._scrollTargets) {
        targetEl.removeEventListener("scroll", this._handleScroll);
      }
      this._scrollTargets = [];
      if (this._timeoutID !== null) {
        clearTimeout(this._timeoutID);
        this._timeoutID = null;
      }
    }

    private _handleScroll = () => {
      if (this._timeoutID !== null) {
        clearTimeout(this._timeoutID);
      }
      this._timeoutID = window.setTimeout(() => {
        this._setTooltipPositionBound();
        this._timeoutID = null;
      }, 20);
    };

    private _getScrollableAncestors(el: Element): Array<Window | Element> {
      const targets: Array<Window | Element> = [];
      let node: Element | null = el.parentElement;
      const overflowRegex = /(auto|scroll|overlay)/;
      while (
        node &&
        node !== document.body &&
        node !== document.documentElement
      ) {
        const style = getComputedStyle(node);
        const isScrollable =
          overflowRegex.test(style.overflowY) ||
          overflowRegex.test(style.overflowX);
        if (isScrollable) {
          targets.push(node);
        }
        node = node.parentElement;
      }
      targets.push(window);
      return targets;
    }

    private _globalEscape(event: KeyboardEvent) {
      if (event.key === "Escape" || event.key === "Esc") {
        this._closeTooltip();
      }
    }

    private _getPlacement() {
      const placement: TooltipPlacement[] = ["top", "bottom", "left", "right"];
      const isOfTypePlacement = placement.includes(this.placement);
      return isOfTypePlacement ? this.placement : "top";
    }

    private _setTooltipPosition() {
      if (!this._titleEl || !this._containerEl) return;

      const containerRect = this._containerEl.getBoundingClientRect();
      const titleRect = this._titleEl.getBoundingClientRect();

      let top: number, left: number;

      switch (this.placement) {
        case "bottom":
          top = containerRect.bottom;
          left =
            containerRect.left + containerRect.width / 2 - titleRect.width / 2;
          break;
        case "left":
          top =
            containerRect.top + containerRect.height / 2 - titleRect.height / 2;
          left = containerRect.left - titleRect.width;
          break;
        case "right":
          top =
            containerRect.top + containerRect.height / 2 - titleRect.height / 2;
          left = containerRect.right;
          break;
        case "top":
        default:
          top = containerRect.top - titleRect.height;
          left =
            containerRect.left + containerRect.width / 2 - titleRect.width / 2;
      }

      this._titleEl.style.position = "fixed";
      this._titleEl.style.top = `${Math.round(top)}px`;
      this._titleEl.style.left = `${Math.round(left)}px`;
      this._titleEl.style.transform = "none";
    }
  }
  window.customElements.define("kuc-tooltip", KucTooltip);
  createStyleOnHeader(TOOLTIP_CSS);
  exportTooltip = KucTooltip;
})();
const Tooltip = exportTooltip as any;
export { Tooltip };
