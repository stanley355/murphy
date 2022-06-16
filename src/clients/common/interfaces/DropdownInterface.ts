export interface DropdownInterface {
  fieldName: string;
  options?: [{ value: any; label: any }];
  onChange: (option: any) => void;
}
