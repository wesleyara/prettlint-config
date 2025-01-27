export interface DependenciesTypes {
  dependencies: string[];
  dev_dependencies: string[];
}

export interface AddDependenciesProps {
  typeProject: string;
  isTypeScript: boolean;
  isTailwind: boolean;
  managerMessage: string;
}
