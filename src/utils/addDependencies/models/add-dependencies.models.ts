export interface AddDependenciesProps {
  typeProject: string;
  isTypeScript: boolean;
  isTailwind: boolean;
  managerMessage: string;
}

export interface DependenciesTypes {
  dependencies: string[];
  dev_dependencies: string[];
}
