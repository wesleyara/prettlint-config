import { fileRequest } from "down-git-files";

export const download = async (repoPath: string, filename?: string) => {
  const req = filename
    ? {
        user: "wesleyara",
        repo: "prettlint-config",
        branch: "main",
        path: repoPath,
        file: filename,
      }
    : {
        user: "wesleyara",
        repo: "prettlint-config",
        branch: "main",
        path: repoPath,
      };

  const file = await fileRequest(req);

  return file;
};
