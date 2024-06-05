import { ChangeEvent } from 'react';
import { ITextFieldProps, ITextFieldSettings } from './lib/types/TextFieldTypes';

const TextField = ({ value, 
    onChange, 
    placeholder,
    name,
    textfieldType="text",
    type="secondary",
    required=false,
    round="md",
    size="md",
    label,
    textSize="md",
    prevIcon,
    nextIcon,
    extraClass }:ITextFieldProps) => {

    const settings:ITextFieldSettings = {
      type: {
        primary:'ring-primary placeholder:text-primary focus:ring-primary border-0 ring-1 ring-inset focus:ring-2 focus:outline-none focus:ring-inset ',
        warning: 'ring-warning placeholder:text-warning focus:ring-primary border-0 ring-1 ring-inset focus:ring-2 focus:outline-none focus:ring-inset ',
        secondary: 'ring-secondary-200 placeholder:text-secondary focus:ring-primary border-0 ring-1 ring-inset focus:ring-2 focus:outline-none focus:ring-inset ',
        danger: 'ring-danger placeholder:text-danger focus:ring-primary border-0 ring-1 ring-inset focus:ring-2 focus:outline-none focus:ring-inset ',
        text: ''
      },
      round: {
        md: 'rounded-md',
        lg: 'rounded-lg',
        sm: 'rounded',
        full: 'rounded-full'
      },
      textSize: {
        md: 'text-md sm:text-sm',
        lg: 'text-lg sm:text-md',
        sm: 'text-sm sm:text-xs',
      },
      size: {
        md: 'px-4 py-2',
        lg: 'py-3 px-2',
        sm: 'py-0.5 px-1',
      },
      withIconSize: {
        prevIcon: {
          md: 'pl-8 pr-4 py-2',
          lg: 'pl-6 pr-3 px-1',
          sm: 'py-0.5 pl-5 pr-1',
        },
        nextIcon: {
          md: 'pl-4 pr-6 py-2',
          lg: 'pl-3 pr-6 px-1',
          sm: 'py-0.5 pl-1 pr-5',
        }
      }
    }
    
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    onChange(event.target.value);
  };

  return (
    <>
      {label && (
        <label
          htmlFor={name}
          className={`
          ${settings.textSize[textSize]}
          block text-sm font-medium leading-6 text-gray-900
          `}>
          {label}
        </label>
      )}
      <div className={`${label ? 'mt-2' : ''} relative ${extraClass}`}>
        {
          prevIcon || nextIcon ? 
          <div
          className={`h-full absolute flex items-center justify-center ${prevIcon ? 'left-2' : 'right-2'}`}
          >
            {
              prevIcon && prevIcon
            }
            {
              nextIcon && nextIcon
            }
          </div>
          :''
        }
        <input
          placeholder={placeholder}
          value={value}
          required={required}
          onChange={handleChange}
          id={name}
          name={name}
          type={textfieldType}
          className={`
            ${settings.round[round]}
            ${settings.type[type]}
            ${settings.textSize[textSize]}
            ${!prevIcon && !nextIcon ? settings.size[size] : prevIcon ? settings.withIconSize.prevIcon[size] : settings.withIconSize.nextIcon[size]}
            block w-full rounded-md shadow-sm sm:leading-6
          `}
        />
      </div>
    </>
  );
};

export default TextField;