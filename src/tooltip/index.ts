import { html, PropertyValues } from "lit";
import { property, query, queryAll } from "lit/decorators.js";
import { DirectiveResult } from "lit/directive";
import { UnsafeHTMLDirective } from "lit/directives/unsafe-html";

import { unsafeHTMLConverter } from "../base/converter";
import { createStyleOnHeader, generateGUID, KucBase } from "../base/kuc-base";
import { validateProps } from "../base/validator";

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
    @queryAll(".kuc-tooltip__group__title")
    private _tooltips!: HTMLDivElement[];

    private _container:
      | HTMLElement
      | DirectiveResult<typeof UnsafeHTMLDirective> = "";
    private _firstChildEl!: HTMLElement;
    private _GUID: string;
    private _globalEscapeBound: KeyBoardFunction;

    constructor(props?: TooltipProps) {
      super();
      this._GUID = generateGUID();
      const validProps = validateProps(props);
      Object.assign(this, validProps);
      this._globalEscapeBound = this._globalEscape.bind(this);
    }

    update(changedProperties: PropertyValues) {
      if (changedProperties.has("container")) {
        this._container = unsafeHTMLConverter(this.container);
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
          class="kuc-tooltip__group__title kuc-tooltip__group__title--hidden"
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
      this._showTooltip();
      this._attachGlobalListener();
    }

    private _closeTooltip() {
      this._updateChildElementAttributes(false);
      this._hideTooltip();
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

    private _showTooltip() {
      if (this._tooltips.length === 0) return;
      this._tooltips.forEach((tooltip) => {
        if (tooltip!.id === `${this._GUID}-title`) {
          tooltip.classList.remove("kuc-tooltip__group__title--hidden");
        }
      });
    }

    private _hideTooltip() {
      if (this._tooltips.length === 0) return;
      this._tooltips.forEach((tooltip) => {
        if (tooltip!.id === `${this._GUID}-title`) {
          tooltip.classList.add("kuc-tooltip__group__title--hidden");
        }
      });
    }

    private _attachGlobalListener() {
      document.addEventListener("keydown", this._globalEscapeBound);
    }

    private _removeGlobalListener() {
      document.removeEventListener("keydown", this._globalEscapeBound);
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
  }
  window.customElements.define("kuc-tooltip", KucTooltip);
  createStyleOnHeader(TOOLTIP_CSS);
  exportTooltip = KucTooltip;
})();
const Tooltip = exportTooltip as any;
export { Tooltip };
