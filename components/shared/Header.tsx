'use client';
import { useAppSelector } from '@/lib/hooks';
import { cn } from '@/lib/utils';
// import { getAvatar } from '@/servises/user';
import { User } from 'lucide-react';
import React from 'react';

interface Props {
  className?: string;
}

export const Header: React.FC<Props> = ({ className }) => {
  const currentUser = useAppSelector((state) => state.user.currentUser);
  // const { apiTokenInstance, idInstance } = useAppSelector(
  //   (state) => state.auth,
  // );

  // console.log(currentUser);

  // const ava = async () =>
  //   console.log(await getAvatar(apiTokenInstance, idInstance, '79085728793@c.us'));
  // ava();

  return (
    <header
      className={cn(
        'flex items-center gap-4 grid-rows-2 py-2.5 px-4 min-h-[64px] bg-accentbg',
        className,
      )}
    >
      <div className="w-14 aspect-square grid place-content-center row-span-2 bg-[#6B7175] rounded-full">
        {<User size={40} />}
      </div>
      <div className="flex flex-col gap-2 max-h-11">
        <span className="overflow-hidden text-ellipsis text-nowrap">
          {currentUser.name ? currentUser.name : ''}
        </span>
        <span className="overflow-hidden text-ellipsis text-nowrap">
          Excepteur sint occaecat cupidatat non proident
        </span>
      </div>
    </header>
  );
};
