import React, { useCallback, useMemo } from 'react';

import classNames from 'classnames';
import { Controller, Control, FieldValues, useWatch } from 'react-hook-form';
import { HiOutlineChevronDown, HiListBullet } from 'react-icons/hi2';

import { Button } from 'components/common';
import { ControllerOnChangeType } from 'types/input-types';

// type ColorType = 'primary' | 'secondary' | 'error' | 'info' | 'success';

type Size = 'small' | 'medium' | 'large' | 'extraLarge';

type MultilineProps =
  | {
      multiline?: true;
      rows: number;
    }
  | {
      multiline?: false;
      rows?: never;
    };

type ControlProps =
  | {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      control?: Control<any, any>;
      name: string;
    }
  | {
      control?: false | undefined;
      name?: never;
    };

type TextStyleProps = {
  setBold?: () => void;
  setItalic?: () => void;
  setUnderlined?: () => void;
  setListBullet?: () => void;
};

type InputProps = {
  className?: string;
  helperText?: string;
  placeholder?: string;
  value?: string;
  onChange?: (value: string) => void;
  disabled?: boolean;
  error?: boolean;
  fullWidth?: boolean;
  disableHelperText?: boolean;
  defaultValue?: string;
  id?: string;
  size?: Size;
} & MultilineProps &
  TextStyleProps &
  ControlProps;

const sizeClasses: { [S in Size]: string } = {
  small: 'w-1/5',
  medium: 'w-1/4',
  large: 'w-2/5',
  extraLarge: 'w-1/2',
};

export function TextArea({
  className,
  helperText,
  error,
  placeholder,
  value,
  onChange,
  disabled,
  fullWidth,
  rows = 6,
  control,
  name,
  disableHelperText,
  defaultValue,
  id,
  size = 'medium',
  setBold,
  setItalic,
  setUnderlined,
  setListBullet,
}: InputProps) {
  const getError = useCallback(() => {
    if (control) {
      if (control._formState.errors) {
        if (name.includes('.')) {
          const splittedArray = name.split('.');

          return splittedArray.reduce(
            // eslint-disable-next-line
            (acc: any, i) => acc?.[i],
            control._formState.errors
          );
        }

        return control._formState.errors?.[name];
      }
    }

    return undefined;
  }, [control, name]);

  const fieldError = getError();

  const classes = useMemo(
    () =>
      classNames(
        'px-2 py-2 shadow-sm focus:outline-none placeholder:text-zinc-400 placeholder:text-md text-md bg-transparent w-full text-background-contrastText border-x border-b rounded-t-none rounded-b border-background-contrastText focus:border focus:border-primary-main ',
        className,
        {
          'opacity-60 cursor-not-allowed': disabled,
        },
        {
          'border !border-error-main': !!fieldError?.message,
        }
      ),

    [className, disabled, fieldError]
  );

  const getInput = useCallback(
    (
      controlChange?: ControllerOnChangeType,
      formValue?: FieldValues['value']
    ) => (
      <textarea
        id={id}
        className={`${classes} resize-none`}
        placeholder={placeholder}
        value={control ? formValue : value}
        onChange={
          control
            ? controlChange
            : (e) => {
                onChange?.(e.target.value);
              }
        }
        disabled={disabled}
        rows={rows}
        defaultValue={defaultValue}
      />
    ),

    [
      id,
      classes,
      placeholder,
      control,
      value,
      disabled,
      rows,
      defaultValue,
      onChange,
    ]
  );

  const formValue = useWatch({
    control: control as Control,
    name: name as string,
  });

  return (
    <>
      <div
        className={`m-0 flex flex-col justify-start p-0 ${
          fullWidth ? 'w-full' : sizeClasses[size]
        }`}>
        <div className="text-style-buttons flex justify-start gap-2 rounded-b-none rounded-t border-x border-t border-background-contrastText bg-background-light focus:border focus:border-primary-main">
          <Button size="small" variant="text" color="secondary">
            Paragraph{' '}
            <span>
              <HiOutlineChevronDown />
            </span>
          </Button>
          <Button
            size="small"
            variant="text"
            color="secondary"
            onClick={setBold}>
            B
          </Button>
          <Button
            size="small"
            variant="text"
            color="secondary"
            onClick={setItalic}>
            I
          </Button>
          <Button
            size="small"
            variant="text"
            color="secondary"
            onClick={setUnderlined}>
            U
          </Button>
          <Button
            size="small"
            variant="text"
            color="secondary"
            onClick={setListBullet}>
            <HiListBullet />
          </Button>
        </div>
        <div className="m-0 w-full p-0">
          {control ? (
            <Controller
              name={name as string}
              control={control as Control}
              render={({
                field: { onChange: controlChange, value: fieldValues },
              }) => getInput(controlChange, fieldValues)}
            />
          ) : (
            getInput()
          )}
          {!disableHelperText && (
            <p
              className={classNames(
                'mx-0 my-0 text-left text-sm text-background-contrastText ',
                {
                  '!text-error-main': !!fieldError?.message || error,
                }
              )}>
              {fieldError?.message || helperText}
            </p>
          )}
        </div>
      </div>
      <div
        className={`m-0 min-w-[12rem] rounded px-0 py-0 ${
          fullWidth ? 'w-full' : sizeClasses[size]
        }`}>
        <div className="flex h-full w-full items-center justify-center rounded bg-background-light p-0 text-background-contrastText">
          <p className="text-center text-md">{formValue || placeholder}</p>
        </div>
      </div>
    </>
  );
}
