import { Block } from "../../../blocks";

/**
 * Remove some properties from the settings of the compiler block by the setting id
 *
 * Example:
 * const uPetTextBlock = {
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
 *
 * const uPetTextSchemaBlock = {
 *    "type": "uPetTextBlock",
 *    "properties": {
 *      "type": "title",
 *      "name": "title",
 *     },
 *    "removePropertiesById": ["text"]
 * }
 *
 * const newSchemaObject = removeBlockProperties(uPetTextBlock, uPetTextSchemaBlock)
 *
 * newSchemaObject will be like this
 * const uPetTextBlock = {
 *    "name": "title",
 *    "type": "title",
 *    "limit": 5,
 *    "settings": []
 * }
 *
 * @param {Block} block The block that comes from the schema
 * @param {Block} configuredBlockSettings The block object with the new settings
 */

export const removeBlockProperties = (
  block: Block,
  configuredBlockSettings: Block
) => {
  const filteredSettings = configuredBlockSettings?.settings?.filter(
    (setting) => {
      if (!block.removePropertiesById?.includes(setting?.id || "")) {
        return setting;
      }
    }
  );
  configuredBlockSettings.settings = filteredSettings;
};
