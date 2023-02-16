import { Block } from "../../../blocks";
import { overrideCustomBlockProperties } from "./override-custom-block-properties";
import { removeBlockProperties } from "./remove-block-properties";

/**
 * Replace the schema block with the compiler blocks if there
 * and return block without modifications if it is not part of the compiler blocks
 *
 *  * Example:
 * const compilerUPetTextBlock = {
 *    "name": "upet-text",
 *    "type": "upet-text",
 *    "limit": 5
 *    "settings": [
 *    {
 *       type: "textarea",
 *       id: "text",
 *       default: "Lorem Ipsum is simply",
 *       label: "t:sections.all.text.label",
 *       info: "t:sections.all.text.info",
 *       }
 *     }
 *    ]
 * }
 * const uPetTextSchemaBlock = {
 *    "type": "uPetTextBlock",
 * }
 *
 * const newSchemaObject = replaceSchemaBlockWithCompilerBlock(compilerUPetTextBlock, "uPetTextBlock")
 *
 * newSchemaObject will be like this
 * const newSchemaObject = {
 *    "name": "upet-text",
 *    "type": "upet-text",
 *    "limit": 5
 *    "settings": [
 *    {
 *       type: "textarea",
 *       id: "text",
 *       default: "Lorem Ipsum is simply",
 *       label: "t:sections.all.text.label",
 *       info: "t:sections.all.text.info",
 *       }
 *     }
 *    ]
 * }
 *
 * @param {Block} block The block that comes from the schema
 * @param {string} blockName The name of the compiler block
 */

export const replaceSchemaBlockWithCompilerBlock = (
  block: Block,
  blockName: string
) => {
  if (block.type === blockName) {
    const configuredBlockSettings = overrideCustomBlockProperties(
      blockName,
      block?.properties
    );

    if (block.removePropertiesById) {
      removeBlockProperties(block, configuredBlockSettings);
    }
    return configuredBlockSettings;
  } else {
    return block;
  }
};
