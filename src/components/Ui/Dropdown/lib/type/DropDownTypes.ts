

export interface IDropdownProps {
  options: IDropdownOption[];
  onSelect: (value: string) => void;
  placeHolder?: string;
}

export interface IDropdownOption {
  value: string;
  label: string;
}