import { PropertyValues } from "lit";
import { KucBase } from "../../kuc-base";
import { BaseDateTimeListBox } from "../listbox";
export { BaseDateTimeListBox };

export declare class BaseTime extends KucBase {
  value: string;
  disabled: boolean;
  hour12: boolean;
  /**
   * Please consider name again and change @state to @property when publishing the function.
   */
  // eslint-disable-next-line kuc-v1/super-update
  update(changedProperties: PropertyValues): void;
  render(): import("lit").TemplateResult<1>;
  updated(changedProperties: PropertyValues): void;
}
