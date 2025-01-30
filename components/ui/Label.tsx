import { cn } from '@/lib/utils';
import React from 'react';

interface Props {
  className?: string;
  children: React.ReactNode;
}

export const Label: React.FC<Props> = ({ className, children }) => {
  return (
    <label
      className={cn(className, 'flex items-center gap-2 min-h-9 px-3 mx-3 rounded-lg bg-accentbg')}
    >
      {children}
    </label>
  );
};
