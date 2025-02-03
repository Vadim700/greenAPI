'use client';
import { cn } from '@/lib/utils';
// import { checkWhatsapp } from '@/servises/user';
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
  const [isString, setIsString] = useState(false);
  const [, setDebouncedValue] = useDebounce(
    () => {
      if (isNaN(Number(value)) || value.length > 12) {
        setIsString(true); // if not a number, or length < 12 chars
      } else {
        setIsString(false);
        filterChats(value);
      }
      setDebouncedValue();
    },
    600,
    [value],
  );

  return (
    <div className="relative w-full">
      <input
        type={type}
        className={cn(className, 'w-full bg-transparent border-0 outline-none')}
        value={value}
        onChange={(e) => setValue(e.currentTarget.value)}
        placeholder={placeholder}
      />
      <span className="absolute right-0 -bottom-8 text-sm">
        {isString && 'incorrect phone number'}
      </span>
    </div>
  );
};
