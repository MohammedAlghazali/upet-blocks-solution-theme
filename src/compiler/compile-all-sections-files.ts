import fs from "fs";
import { compileSectionFile } from "./compile-section-file";

/**
 * Get all the files in the src/section folder,
 * loop over each file and compile it using @see compileSectionFile
 *
 * In case of an error, a console will logged with this error.
 */

export const compileAllSectionsFiles = () => {
  fs.readdir("src/sections", (err, files) => {
    if (err) {
      console.error("error while reading the files in src/sections folder");
      return;
    }
    files.forEach((file) => compileSectionFile(file));
  });
};
