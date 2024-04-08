import { useEffect, useRef, useState } from "react";
import { IDropdownOption, IDropdownProps } from "./lib/type/DropDownTypes"
import { HiChevronDown } from "react-icons/hi2";


const DropDown = ({options,onSelect,placeHolder="Выберите"}:IDropdownProps) => {
  const [selectedOption, setSelectedOption] = useState<IDropdownOption | null>(null);
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);


  const handleClick = (option: IDropdownOption) => {
    setSelectedOption(option);
    onSelect(option.value);
    setIsOpen(false);
  };

  const handleOutsideClick = (event: MouseEvent) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleOutsideClick);

    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  }, []);

  return (
    <div 
    className="relative inline-block text-left" 
    ref={dropdownRef}>
      <div>
        <span className="rounded-md shadow-sm">
          <button
            type="button"
            className="text-secondary bg-secondary-300 inline-flex items-center justify-center w-full rounded-md ring-secondary-300 placeholder:text-secondary focus:ring-primary border-0 ring-1 ring-inset focus:ring-2 focus:outline-none focus:ring-inset px-4 py-2 transition ease-in-out duration-150"
            id="options-menu"
            aria-haspopup="true"
            aria-expanded="true"
            onClick={() => setIsOpen(!isOpen)}
          >
            {selectedOption ? selectedOption.label : placeHolder}
            <span 
            className={`ml-1 ${isOpen ? 'rotate-180' : 'rotate-0'} duration-200`}>
              <HiChevronDown />
            </span>
          </button>
        </span>
      </div>
      {isOpen && (
        <div className="origin-top-right absolute left-0 mt-2 w-56 rounded-md shadow-lg">
          <div className="rounded-md bg-white shadow-xs">
            <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
              {options.map((option) => (
                <button
                  key={option.value}
                  className="block w-full text-left px-4 py-2 text-sm leading-5 text-secondary-400 hover:bg-gray-100 hover:text-secondary focus:outline-none focus:bg-secondary-50 focus:text-secondary"
                  role="menuitem"
                  onClick={() => handleClick(option)}
                >
                  {option.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default DropDown