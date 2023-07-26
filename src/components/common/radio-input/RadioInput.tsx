import React, { useCallback, useMemo } from 'react';

import classNames from 'classnames';
import { Controller, Control, useWatch } from 'react-hook-form';

import { Typography } from 'components/common';
import { ControllerOnChangeType } from 'types/input-types';

type Size = 'small' | 'medium' | 'large' | 'extraLarge';

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

type RadioButtonProps = {
  className?: string;
  helperText?: string;
  label?: string;
  options?: { value: number; label: string }[];
  onChange?: (value: number) => void;
  disabled?: boolean;
  error?: boolean;
  fullWidth?: boolean;
  disableHelperText?: boolean;
  defaultValue?: string;
  id?: string;
  size?: Size;
} & ControlProps;

const sizeClasses: { [S in Size]: string } = {
  small: 'h-2 w-2',
  medium: 'h-3 w-3',
  large: 'h-4 w-4',
  extraLarge: 'h-5 w-5',
};

export function RadioInput({
  className,
  helperText,
  label,
  options,
  onChange,
  disabled,
  error,
  control,
  name,
  fullWidth,
  defaultValue,
  disableHelperText,
  id,
  size = 'medium',
}: RadioButtonProps) {
  const formValue = useWatch({
    control: control as Control,
    name: name as string,
  });
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
        'px-2 py-2 rounded-[50%] appearance-none border-2 bg-primary border-primary-contrastText grid place-content-center scale-100 checked:border-primary-main checked:scale-50 checked:bg-primary-main checked:outline checked:outline-4 checked:outline-primary-main checked:outline-offset-8',
        className,
        sizeClasses[size],
        {
          'opacity-60 cursor-not-allowed': disabled,
        },
        {
          'border border-error-main': !!fieldError?.message,
        }
      ),

    [className, disabled, fieldError, size]
  );

  const getRadioInput = useCallback(
    (controlChange?: ControllerOnChangeType) => (
      <fieldset name={name} defaultValue={defaultValue} id={id}>
        <legend className="">
          <Typography variant="subtitle1">{label}</Typography>
        </legend>
        <div className="px-2 py-2">
          {options?.map((option) => (
            <label
              key={option.label}
              htmlFor={option.label}
              className="flex items-center space-x-2 px-1 py-1">
              <input
                type="radio"
                id={option.label}
                name={name}
                className={`${classes}`}
                value={option.value}
                onChange={
                  control
                    ? controlChange
                    : (e) => {
                        onChange?.(Number(e.target.value));
                      }
                }
                checked={Number(formValue) === option.value}
              />
              <Typography variant="subtitle1">{option.label}</Typography>
            </label>
          ))}
        </div>
      </fieldset>
    ),
    [
      name,
      defaultValue,
      id,
      label,
      options,
      classes,
      control,
      onChange,
      formValue,
    ]
  );

  return (
    <div
      className={`min-w-[12rem] ${fullWidth ? 'w-full' : sizeClasses[size]}`}>
      {control ? (
        <Controller
          name={name as string}
          control={control as Control}
          render={({ field: { onChange: controlChange } }) =>
            getRadioInput(controlChange)
          }
        />
      ) : (
        getRadioInput()
      )}
      {!disableHelperText && (
        <p
          style={{ minHeight: '1rem' }}
          className={classNames(
            'm-1 text-left text-sm text-background-contrastText ',
            {
              '!text-error-main': !!fieldError?.message || error,
            }
          )}>
          {(fieldError?.message as string) || helperText}
        </p>
      )}
    </div>
  );
}
