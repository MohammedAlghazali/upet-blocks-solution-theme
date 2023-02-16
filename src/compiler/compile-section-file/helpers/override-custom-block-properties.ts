import { Block, blocks as compilerBlocks } from "../../../blocks";

/**
 * Override a compiler block properties with the properties comes from the schema object
 *
 * Example:
 * const uPetTextBlock = {
 *    "name": "upet-text",
 *    "type": "upet-text",
 *    "limit": 5
 * }
 *
 * const uPetTextSchemaBlock = {
 *    "type": "uPetTextBlock",
 *    "properties": {
 *      "type": "title",
 *      "name": "title",
 *     },
 * }
 *
 * const newSchemaObject = overrideCustomBlockProperties(uPetTextBlock, uPetTextSchemaBlock)
 *
 * newSchemaObject will be like this
 * const uPetTextBlock = {
 *    "name": "title",
 *    "type": "title",
 *    "limit": 5
 * }
 *
 * @param {string} blockName The name of the block we need to inject
 * @param {Block["properties"]} blockProperties The new properties we need to override
 * @returns {Block} The block with the new properties
 */

export const overrideCustomBlockProperties = (
  blockName: string,
  blockProperties: Block["properties"]
): Block => {
  const propertiesToOverride = { ...blockProperties } || {};
  const configuredBlockSettings = {
    ...compilerBlocks?.[blockName],
    ...propertiesToOverride,
  };

  return configuredBlockSettings;
};
