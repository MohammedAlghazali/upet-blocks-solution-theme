import { uPetTextBlock } from "./upet-text";

export const blocks: {
  [key: string]: {
    type: string;
    name: string;
    limit: number;
    settings: object[];
  };
} = { uPetTextBlock };
