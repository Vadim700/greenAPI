'use client';
import { useAppSelector } from '@/lib/hooks';
import { cn } from '@/lib/utils';
import { checkWhatsapp } from '@/servises/user';
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
  const [isString, setIsString] = useState(false);
  const { idInstance, apiTokenInstance } = useAppSelector(
    (state) => state.auth,
  );
  const [, setDebouncedValue] = useDebounce(
    () => {
      if (value) {
        if (isNaN(Number(value)) || value.length > 12) {
          setIsString(true);
        } else {
          setIsString(false);
          fetchCheckUser(value);
        }
        setDebouncedValue();
      }
    },
    600,
    [value],
  );

  const fetchCheckUser = async (value: string) => {
    const data = await checkWhatsapp(idInstance, apiTokenInstance, value);
    console.log(data);
  };

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
