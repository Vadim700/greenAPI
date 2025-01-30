'use client';
// import useDebounce from '@/hooks/useDebounce';
import { cn } from '@/lib/utils';
import React, { useState } from 'react';
import { useDebounce } from 'react-use';

interface Props {
  className?: string;
  type?: string;
  placeholder?: string;
}

export const SearchInput: React.FC<Props> = ({
  className,
  type = 'text',
  placeholder,
}) => {
  const [value, setValue] = useState('');
  const [, setDebouncedValue] = useDebounce(
    () => {
      if (value) {
        console.log(value);
        setDebouncedValue();
      }
    },
    400,
    [value],
  );

  return (
    <input
      type={type}
      className={cn(className, 'w-full bg-transparent border-0 outline-none')}
      value={value}
      onChange={(e) => setValue(e.currentTarget.value)}
      placeholder={placeholder}
    />
  );
};
