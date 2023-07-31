import React, { useState, useEffect } from 'react';

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
      <TextInput
        id={id}
        value={value}
        type="text"
        placeholder={placeholderText || 'Search'}
        onChange={(text: string) => setValue(text)}
        className="w-1/2 border-0 !bg-background-light pl-4"
        disableHelperText
        fullWidth={fullWidth}
      />
    </div>
  );
}
