import React, { useCallback, useEffect, useMemo, useState } from 'react';

import classNames from 'classnames';
import { Controller, Control, FieldValues } from 'react-hook-form';

import { ControllerOnChangeType } from 'types/input-types';
// type ColorType = 'primary' | 'secondary' | 'error' | 'info' | 'success';
type InputType = 'text' | 'email' | 'number' | 'password';
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
      // eslint-disable-next-line
      control?: Control<any, any>;
      name: string;
    }
  | {
      control?: false | undefined;
      name?: never;
    };

type InputProps = {
  className?: string;
  helperText?: string;
  placeholder?: string;
  value?: string;
  onChange?: (value: string) => void;
  type?: InputType;
  disabled?: boolean;
  error?: boolean;
  fullWidth?: boolean;
  disableHelperText?: boolean;
  defaultValue?: string;
  id?: string;
} & MultilineProps &
  ControlProps;

export function TextInput({
  type = 'text',
  className,
  helperText,
  error,
  placeholder,
  value,
  onChange,
  disabled,
  fullWidth,
  multiline,
  rows = 6,
  control,
  name,
  disableHelperText,
  defaultValue,
  id,
}: InputProps) {
  const [showPassword, setShowPassword] = useState<string>();
  useEffect(() => {
    if (type) {
      setShowPassword(type);
    }
  }, [type]);

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
        'px-2 py-2 rounded shadow-sm focus:outline-none placeholder:text-zinc-400 bg-transparent placeholder:text-md text-md w-full text-background-contrastText border border-background-contrastText focus:border focus:border-primary-main ',
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
    ) =>
      multiline ? (
        <textarea
          id={id}
          className={classes}
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
      ) : (
        <div className="relative">
          <input
            id={id}
            name={name ?? ''}
            type={showPassword ?? type}
            className={classes}
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
            defaultValue={defaultValue}
          />
          {/* {type === 'password' &&
            (showPassword === 'password' ? (
              <EyeSlashIcon
                onClick={() => setShowPassword('text')}
                className="absolute top-3 right-4 h-[20px] cursor-pointer text-zinc-400"
              />
            ) : (
              <EyeIcon
                onClick={() => setShowPassword('password')}
                className="absolute top-3 right-4 h-[20px] cursor-pointer text-zinc-400"
              />
            ))} */}
        </div>
      ),
    [
      classes,
      disabled,
      multiline,
      onChange,
      placeholder,
      rows,
      type,
      value,
      control,
      defaultValue,
      id,
      name,
      showPassword,
    ]
  );

  return (
    <div className={fullWidth ? 'w-full' : 'w-60'}>
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
