'use client';

import React, { useEffect, useState } from 'react';
import { ChatItem } from './ChatItem';
import { cn } from '@/lib/utils';
import { getChats } from '@/servises/chats';

interface Props {
  className?: string;
  token: string;
  instanse: string;
}

type ChatBody = {
  archive: boolean;
  id: string;
  notSpam: boolean;
  ephemeralExpiration: number;
  ephemeralSettingTimestamp: number;
  name: string;
};

type ChatsList = ChatBody[];

export const ChatList: React.FC<Props> = ({ className, token, instanse }) => {
  const [chatsList, setChatsList] = useState<ChatsList>([]);

  useEffect(() => {
    const fetchChatsList = async () => {
      const data = await getChats(instanse, token, '79085728793');
      setChatsList(data);
    };

    fetchChatsList();
  }, [instanse, token]);

  return (
    <div className={cn('max-h-[746px] overflow-y-auto chatList', className)}>
      {chatsList ? (
        chatsList?.map((data) => (
          <ChatItem key={data.id} name={data.name} id={data.id} />
        ))
      ) : (
        <p>Ooops...</p>
      )}
    </div>
  );
};
