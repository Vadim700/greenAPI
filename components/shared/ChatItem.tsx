'use client';
import { setChatHistory } from '@/lib/features/messageSlice';
import { setSelectedUser } from '@/lib/features/userSlice';
import { useAppDispatch, useAppSelector } from '@/lib/hooks';
import { cn } from '@/lib/utils';
import { getChatHystory } from '@/servises/chats';
import { User } from 'lucide-react';
import Link from 'next/link';
import React, { useState } from 'react';

type Props = {
  name: string;
  id: string;
};

export const ChatItem: React.FC<Props> = ({ name, id }) => {
  const [, setMessages] = useState();
  const dispatch = useAppDispatch();
  const { idInstance, apiTokenInstance } = useAppSelector(
    (state) => state.auth,
  );

  const onClickChat = () => {
    const getChat = async () => {
      const data = await getChatHystory(idInstance, apiTokenInstance, id, 30);
      dispatch(setChatHistory(data));
      setMessages(data);
    };
    getChat();

    dispatch(setSelectedUser({ name, id }));
  };

  return (
    <Link
      href={'#'}
      data-number={id}
      className={cn(
        'grid grid-cols-[50px_auto] gap-x-4 items-center grid-rows-2 hover:bg-actionbg max-h-20 pl-4',
      )}
      onClick={onClickChat}
    >
      <div className="grid place-content-center row-span-2 bg-[#6B7175] rounded-full aspect-square">
        <User size={40} />
      </div>
      <span className="overflow-hidden text-ellipsis text-nowrap pt-4 border-accentbg border-t">
        {name || id}
      </span>
      <span className="overflow-hidden text-ellipsis text-nowrap pb-4">
        Строка
      </span>
    </Link>
  );
};
