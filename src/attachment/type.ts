import { PropertyValues } from "lit";
import { KucBase } from "../base/kuc-base";

export declare type FileItem =
  | File
  | { name: string; size: string; [key: string]: any };
export declare type AttachmentProps = {
  className?: string;
  disabled?: boolean;
  error?: string;
  files?: FileItem[];
  id?: string;
  label?: string;
  language?: "ja" | "en" | "zh" | "zh-TW" | "auto";
  requiredIcon?: boolean;
  visible?: boolean;
};
export declare type AttachmentChangeEventDetail = {
  files?: FileItem[];
  oldFiles?: FileItem[];
  fileIndex?: number[];
  type?: string;
};
export declare class Attachment extends KucBase {
  className: string;
  disabled: boolean;
  error: string;
  files: FileItem[];
  id: string;
  label: string;
  language: string;
  requiredIcon: boolean;
  visible: boolean;
  constructor(props?: AttachmentProps);
  update(changedProperties: PropertyValues): void;
  render(): import("lit").TemplateResult<1>;
}
