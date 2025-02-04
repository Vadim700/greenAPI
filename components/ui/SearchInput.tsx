'use client';
import { cn } from '@/lib/utils';
import { X } from 'lucide-react';
import React, { useState } from 'react';
import { useDebounce } from 'react-use';

interface Props {
  className?: string;
  type?: string;
  placeholder?: string;
  filterChats: (arg0: string) => void;
}

export const SearchInput: React.FC<Props> = ({
  className,
  type = 'text',
  placeholder,
  filterChats,
}) => {
  const [value, setValue] = useState('');
  const [, setDebouncedValue] = useDebounce(
    () => {
      filterChats(value);
      setDebouncedValue();
    },
    400,
    [value],
  );

  return (
    <div className="flex w-full">
      <input
        type={type}
        className={cn(className, 'w-full bg-transparent border-0 outline-none')}
        value={value}
        onChange={(e) => setValue(e.currentTarget.value)}
        placeholder={placeholder}
      />
      {value && (
        <button className="hover:text-red-700" onClick={() => setValue('')}>
          <X />
        </button>
      )}
    </div>
  );
};
