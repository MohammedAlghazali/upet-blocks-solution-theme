import { compileSectionFile } from "./compile-section-file";

/**
 * Watch any file change inside src/sections folder, re-compile
 * this file @see compileSectionFile to update the root sections
 * folder with the new changes
 *
 * @param {fileName} fileName The name of the file that changed
 * from the src/blocks.
 */

export const watchSectionsFilesChanges = (fileName: string) => {
  if (fileName) {
    compileSectionFile(fileName);
    console.log(`sections file ${fileName} changed `);
  } else {
    console.error("filename not provided");
  }
};
