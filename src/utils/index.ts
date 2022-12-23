export * from "./addDependencies";
export * from "./addFiles";
export * from "./download";
export * from "./existsFile";
export * from "./makeQuestions";
export * from "./packageManager";
export * from "./vsCodeSettings";

export const deepClone = (obj: any) => {
  return JSON.parse(JSON.stringify(obj));
};
