import clsx from 'clsx';
import { FocusEvent, memo, MouseEvent, useCallback, useMemo, useState } from 'react';
import { Dropdown } from 'root/shared/uikit/Dropdown';
import { useInputState, UseInputStateOptions } from 'root/shared/uikit/Input';
import { Input } from 'root/shared/uikit/Input/Input';
import { List, ListItemButton } from 'root/shared/uikit/List';

export interface AutocompleteProps extends UseInputStateOptions {
  id?: string;
  open?: boolean;
  name?: string;
  value: AutocompleteValue | null;
  options: AutocompleteOption[];
  disabled?: boolean;
  placeholder?: string;

  onChange(value: AutocompleteValue | null): void;
}

export type AutocompleteValue = string | number;

export interface AutocompleteOption {
  value: string | number;
  label?: string;
  description?: string;
}

export const Autocomplete = memo(
  ({
    open,
    name,
    options,
    disabled,
    placeholder,
    onFocus,
    onBlur,
    value,
    onChange
  }: AutocompleteProps) => {
    const selectedOption = useMemo(
      () => options.find(option => option.value === value),
      [options, value]
    );

    const [inputValue, setInputValue] = useState(() =>
      selectedOption ? getOptionText(selectedOption) : ''
    );
    const [inputValueChanged, setInputValueChanged] = useState(false);
    const [expanded, setExpanded] = useState(false);
    const { ref, focus, focused, handleFocus, handleBlur } = useInputState({
      onFocus: useCallback(
        (event: FocusEvent<HTMLInputElement>) => {
          setExpanded(true);
          if (onFocus) onFocus(event);
        },
        [onFocus]
      ),
      onBlur: useCallback(
        (event: FocusEvent<HTMLInputElement>) => {
          setExpanded(false);
          setInputValueChanged(false);
          if (selectedOption) {
            setInputValue(getOptionText(selectedOption));
          }
          if (onBlur) onBlur(event);
        },
        [onBlur, selectedOption]
      )
    });

    const handleInputChange = useCallback(e => {
      setExpanded(true);
      setInputValue(e.target.value);
      setInputValueChanged(true);
    }, []);

    const handleArrowClick = useCallback(
      (e: MouseEvent) => {
        e.preventDefault();
        if (focused) {
          setExpanded(prev => !prev);
        } else {
          focus();
        }
      },
      [focus, focused]
    );

    const filteredOptions = useMemo(
      () =>
        inputValueChanged
          ? options.filter(
              option =>
                option.value.toString().toLowerCase().includes(inputValue.toLowerCase()) ||
                option.label?.toString().toLowerCase().includes(inputValue.toLowerCase())
            )
          : options,
      [options, inputValue]
    );

    const handleOptionSelect = useCallback(
      (option: AutocompleteOption) => {
        setInputValue(option.label?.toString() ?? option.value.toString());
        setInputValueChanged(false);
        onChange(selectedOption === option ? null : option.value);
      },
      [selectedOption, onChange]
    );

    const finallyOpen = open || expanded;

    return (
      <Dropdown
        open={finallyOpen}
        target={
          <Input
            ref={ref}
            name={name}
            disabled={disabled}
            placeholder={placeholder}
            value={inputValue}
            onFocus={handleFocus}
            onBlur={handleBlur}
            onChange={handleInputChange}
            endNode={
              <div
                className={clsx(
                  'border-l-2 border-gray-300 self-stretch w-12 inline-flex items-center justify-center',
                  focused && 'border-purple-500'
                )}
                onClick={handleArrowClick}
                onMouseDown={e => {
                  e.preventDefault();
                }}
              >
                {finallyOpen ? '-' : '+'}
              </div>
            }
          />
        }
      >
        <div className="rounded-lg shadow-xl bg-white">
          <List>
            {filteredOptions.map(option => (
              <ListItemButton
                key={option.value}
                selected={option === selectedOption}
                label={option.label ?? option.value}
                onClick={() => handleOptionSelect(option)}
                onMouseDown={event => event.preventDefault()}
              />
            ))}
          </List>
        </div>
      </Dropdown>
    );
  }
);

Autocomplete.displayName = 'Autocomplete';

const getOptionText = ({ value, label }: AutocompleteOption) => label ?? value.toString();
