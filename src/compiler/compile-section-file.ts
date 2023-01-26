import fs from "fs";
import { blocks } from "../blocks";

/**
 * Read a file from the src/sections folder, Replace the blocks schema
 * we injected them (write the equivalent files in the root sections)
 * with the objects we defined in src/blocks
 *
 * Example:
 * Replace uPetTextBlock in src/sections/rich-text.liquid
 * ```liquid
 * {% schema %}
 * {
 *    "name": "t:sections.rich-text.name",
 *    "settings": [...],
 *    "blocks": [
 *       "uPetTextBlock",
 *    ]
 * }
 * ```
 *
 * @param {fileName} fileName The name of the file we need to compile,
 * This file should be exist inside the src/sections folder.
 */

export const compileSectionFile = (fileName: string) => {
  const file = fs.readFileSync(`src/sections/${fileName}`, "utf-8");
  let updateFile = file;

  const blocksArray = Object.getOwnPropertyNames(blocks);
  blocksArray.forEach((blockName) => {
    updateFile = updateFile.replace(
      `"${blockName}"`,
      JSON.stringify(blocks?.[blockName], null, 3)
    );
  });

  fs.writeFileSync(`sections/${fileName}`, updateFile, "utf-8");
};
