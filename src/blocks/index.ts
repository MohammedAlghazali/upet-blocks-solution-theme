import { uPetTextBlock } from "./upet-text";

type BlockSetting = {
  type?: string;
  id?: string;
  default?: string | number | boolean;
  label?: string;
  info?: string;
  options?: object[];
  group?: object[];
  content?: string;
  min?: number;
  max?: number;
  step?: number;
  unit?: string;
};

export type Block = {
  type?: string;
  name?: string;
  limit?: number;
  settings?: BlockSetting[];
  properties?: object[]; // This is custom properties we used, not supported by Shopify
  removePropertiesById?: string[]; // This is custom properties we used, not supported by Shopify
};

export const blocks: {
  [key: string]: Block;
} = {
  uPetTextBlock,
};
