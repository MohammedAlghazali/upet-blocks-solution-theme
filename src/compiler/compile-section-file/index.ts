import fs from "fs";
import { blocks as compilerBlocks } from "../../blocks";
import { getSchemaObjectFromLiquidFile } from "./helpers/get-schema-object-from-liquid-file";
import { replaceSchemaBlockWithCompilerBlock } from "./helpers/replace-schema-block-with-compiler-block";

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
 *       {
 *         "type": "uPetTextBlock",
 *         "properties": {
 *           "type": "price",
 *           "name": "price"
 *         },
 *         "removePropertiesById": ["text", "text_size_desktop", "text_color"]
 *       }
 *    ]
 * }
 * ```
 *
 * @param {fileName} fileName The name of the file we need to compile,
 * This file should be exist inside the src/sections folder.
 */

export const compileSectionFile = (fileName: string) => {
  const file = fs.readFileSync(`src/sections/${fileName}`, "utf-8");
  const isFileContainSchema = file.indexOf("{% schema %}") !== -1;

  if (isFileContainSchema) {
    let schemaObject = getSchemaObjectFromLiquidFile(file);
    const compilerBlocksArray = Object.getOwnPropertyNames(compilerBlocks);

    compilerBlocksArray.forEach((blockName) => {
      const newBlocks = schemaObject.blocks?.map((block) =>
        replaceSchemaBlockWithCompilerBlock(block, blockName)
      );

      const newSchemaObject = { ...schemaObject, blocks: newBlocks };
      schemaObject = newSchemaObject;
    });

    const fileWithNewSchema = file.replace(
      /{% schema %}([\s\S]*?){% endschema %}/,
      `{% schema %}\n ${JSON.stringify(schemaObject, null, 2)}\n{% endschema %}`
    );

    fs.writeFileSync(`sections/${fileName}`, fileWithNewSchema, "utf-8");
  }
};
