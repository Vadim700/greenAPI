import { cn } from '@/lib/utils';
import React from 'react';

interface Props {
  className?: string;
}

export const Footer: React.FC<Props> = ({ className }) => {
  return (
    <footer
      className={cn(
        className,
        'flex items-center py-2.5 px-4 min-h-[64px] bg-accentbg text-3xl',
      )}
    >
      Footer
    </footer>
  );
};
