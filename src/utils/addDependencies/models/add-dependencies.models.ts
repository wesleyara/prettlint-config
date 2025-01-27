import { dependenciesMap } from "../../constants";

export interface AddDependenciesProps {
  typeProject: string;
  isTypeScript: boolean;
  isTailwind: boolean;
  managerMessage: string;
}

export type DependenciesMapType = keyof typeof dependenciesMap;

export interface DependenciesTypes {
  dependencies: string[];
  dev_dependencies: string[];
}
