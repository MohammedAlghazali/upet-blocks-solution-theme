import { Block } from "../../../blocks";

type SchemaObject = {
  name: string;
  tag: string;
  class: string;
  settings: object[];
  blocks: Block[];
  presets: object[];
};

/**
 * Extract the schema object from the given file
 * by getting the object between the schema tags
 *
 * Example:
 *
 * ... other file content
 * {% schema %}
 *  {
 *    "name": "t:sections.main-product.name",
 *    "tag": "section",
 *     "class": "section",
 *     "blocks": [
 *      ...
 *     ]
 *  }
 * {% endschema %}
 *
 * running the function on this file will return the object like this:
 *   schemaObject = {
 *    "name": "t:sections.main-product.name",
 *    "tag": "section",
 *     "class": "section",
 *     "blocks": [
 *      ...
 *     ]
 *  }
 *
 *
 * @param {string} fileContent The file content as a string that we need to get the schema object from.
 * @returns {SchemaObject} The schema as a javascript object
 */

export const getSchemaObjectFromLiquidFile = (
  fileContent: string
): SchemaObject => {
  const fileCopy = fileContent;
  const stringStartingBySchemaTag = fileCopy.substring(
    fileCopy.indexOf("{% schema %}")
  );
  const textBetweenSchemaTags = stringStartingBySchemaTag?.replace(
    /{% schema %}([\s\S]*?){% endschema %}/,
    "$1"
  );

  const schemaObject: SchemaObject = JSON.parse(textBetweenSchemaTags);
  return schemaObject;
};
