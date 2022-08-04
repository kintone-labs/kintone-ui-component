import { KucBase } from "../kuc-base";

export declare type BasePaginationProps = {
  className: string;
  id: string;
  visible: boolean;
};
export declare class BasePagination extends KucBase {
  className: string;
  id: string;
  visible: boolean;
  constructor(props?: BasePaginationProps);
  render(): import("lit-html").TemplateResult<1>;
}
