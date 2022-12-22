import fs from "fs";

export const existsFile = async (files: string[]) => {
  for (let i = 0; i < files.length; i++) {
    const file = files[i];

    if (fs.existsSync(file)) {
      fs.unlinkSync(file);
    }
  }
};
