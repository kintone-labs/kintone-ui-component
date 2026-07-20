import { PropertyValues } from "lit";

import { KucBase } from "../base/kuc-base";

export declare type FileItem =
  | File
  | { name: string; size: string; [key: string]: any };
export declare type AttachmentProps = {
  accept?: string;
  className?: string;
  error?: string;
  id?: string;
  label?: string;
  maxFiles?: number;
  message?: string;
  disabled?: boolean;
  requiredIcon?: boolean;
  visible?: boolean;
  files?: FileItem[];
  language?: "ja" | "en" | "zh" | "zh-TW" | "es" | "auto";
};
export declare type AttachmentChangeEventDetail = {
  files?: FileItem[];
  oldFiles?: FileItem[];
  fileIndex?: number[];
  type?: string;
};
export declare class Attachment extends KucBase {
  accept: string;
  className: string;
  error: string;
  id: string;
  label: string;
  language: string;
  maxFiles: number | undefined;
  message: string;
  disabled: boolean;
  requiredIcon: boolean;
  visible: boolean;
  files: FileItem[];
  constructor(props?: AttachmentProps);
  update(changedProperties: PropertyValues): void;
  render(): import("lit").TemplateResult<1>;
}
