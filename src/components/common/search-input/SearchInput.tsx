import React, { useState, useEffect } from 'react';

import { HiOutlineSearch } from 'react-icons/hi';
import { HiOutlineAdjustmentsHorizontal } from 'react-icons/hi2';

import { TextInput } from 'components/common';
import { useDebounce } from 'hooks/useDebounce';

type SearchInputProps = {
  onSearch: (value: string) => void;
  id?: string;
  placeholderText?: string;
  fullWidth?: boolean;
};

export function SearchInput({
  onSearch,
  id,
  placeholderText,
  fullWidth,
}: SearchInputProps) {
  const [value, setValue] = useState<string>('');
  const debouncedValue = useDebounce<string>(value, 500);

  useEffect(() => {
    onSearch(value);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [debouncedValue]);

  return (
    <div id={id} className="relative flex w-full items-center">
      <div
        id={id}
        className="pointer-events-none absolute inset-y-0 left-0 ml-6 flex  items-center text-background-contrastText">
        <HiOutlineSearch
          className="fill-text-background-contrastText stroke-text-background-contrastText"
          size={16}
        />
      </div>
      <TextInput
        id={id}
        value={value}
        type="text"
        placeholder={placeholderText || 'Search'}
        onChange={(text: string) => setValue(text)}
        className="w-1/2 border-0 !bg-background-light pl-12"
        disableHelperText
        fullWidth={fullWidth}
      />
      <div
        id={id}
        className={`pointer-events-none absolute inset-y-0 mr-6 flex  items-center text-background-contrastText ${
          fullWidth ? 'right-0' : 'right-1/2'
        }`}>
        <HiOutlineAdjustmentsHorizontal size={16} />
      </div>
    </div>
  );
}
