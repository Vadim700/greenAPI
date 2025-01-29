'use client';
import classNames from 'classnames';
import React, { useState } from 'react';

interface Props {
  className?: string;
  type: string;
}

export const Search: React.FC<Props> = ({ className, type = 'text∂' }) => {
  const [value, setValue] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  return (
    <input
      type={type}
      className={classNames(className, '')}
      value={value}
      onChange={handleChange}
    />
  );
};
