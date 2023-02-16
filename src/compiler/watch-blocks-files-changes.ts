import { compileAllSectionsFiles } from "./compile-all-sections-files";

/**
 * Watch any file change inside src/blocks folder, re-compile all
 * the files in the src/sections @see compileAllSectionsFiles
 * to sync them with the new changes of the block schema
 *
 * @param {fileName} fileName The name of the file that changed
 * from the src/blocks.
 */

export const watchBlocksFilesChanges = (fileName: string) => {
  if (fileName) {
    compileAllSectionsFiles();
    console.log(`blocks file ${fileName} changed `);
  } else {
    console.error("filename not provided");
  }
};
