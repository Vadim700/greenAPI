import { cn } from '@/lib/utils';
import { User } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

type Props = {
  name: string;
  avatar: string;
  text: string;
  active: boolean;
};

export const ChatItem: React.FC<Props> = ({ name, avatar, text, active }) => {
  return (
    <Link
      href={'#'}
      className={cn(
        'grid grid-cols-[50px_auto] gap-x-4 items-center grid-rows-2 hover:bg-actionbg max-h-20 pl-4',
        active && 'bg-actionbg',
      )}
    >
      <div className="grid place-content-center row-span-2 bg-[#6B7175] rounded-full aspect-square">
        {avatar ? <Image src={avatar} alt="avatar" /> : <User size={40} />}
      </div>
      <span className="overflow-hidden text-ellipsis text-nowrap pt-4 border-accentbg border-t">
        {name}
      </span>
      <span className="overflow-hidden text-ellipsis text-nowrap pb-4">
        {text}
      </span>
    </Link>
  );
};
