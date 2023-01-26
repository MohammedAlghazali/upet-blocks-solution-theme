import fs from "fs";
import { compileAllSectionsFiles } from "./src/compiler/compile-all-sections-files";
import { compileSectionFile } from "./src/compiler/compile-section-file";

// compile the files when the once app start
compileAllSectionsFiles();

// if the src/sections files changes, sync these changes with the root sections files
fs.watch("src/sections", (_, fileName) => compileSectionFile(fileName));

// if blocks files changes update, sync these changes to update the root sections files
fs.watch("src/blocks", (_, fileName) => compileAllSectionsFiles());
