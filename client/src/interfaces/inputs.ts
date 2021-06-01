export interface IDashFileInput {
  label: string;
  required?: boolean;
  accept?: string;
  icon: string;
}

export interface IDashSelectInput {
  label: string;
  required?: boolean;
  options: string[];
  name: string;
}

export interface IDashTextInput {
  label: string;
  required?: boolean;
  name: string;
}
