import { cn } from '@/lib/utils';
import { User } from 'lucide-react';
import React from 'react';

interface Props {
  className?: string;
}

export const Header: React.FC<Props> = ({ className }) => {
  return (
    <header
      className={cn(
        className,
        'flex items-center gap-4 grid-rows-2 py-2.5 px-4 min-h-[64px] bg-accentbg ',
      )}
    >
      <div className="w-14 aspect-square grid place-content-center row-span-2 bg-[#6B7175] rounded-full">
        {<User size={40} />}
      </div>
      <div className="flex flex-col gap-2 max-h-11">
        <span className="overflow-hidden text-ellipsis text-nowrap">John</span>
        <span className="overflow-hidden text-ellipsis text-nowrap">
          Excepteur sint occaecat cupidatat non proident
        </span>
      </div>
    </header>
  );
};
