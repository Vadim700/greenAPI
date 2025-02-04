'use client';

import React, { useEffect } from 'react';
import { ChatItem } from './ChatItem';
import { cn } from '@/lib/utils';
import { useAppDispatch, useAppSelector } from '@/lib/hooks';
import { fetchContacts } from '@/lib/thunks/chatsThunk';

interface Props {
  className?: string;
  fiteredChats: string;
}

export const ChatList: React.FC<Props> = ({ className, fiteredChats }) => {
  const dispatch = useAppDispatch();
  const chatList = useAppSelector((state) => state.chats.chats);
  const { idInstance, apiTokenInstance } = useAppSelector(
    (state) => state.auth,
  );

  useEffect(() => {
    dispatch(fetchContacts({ idInstance, apiTokenInstance }));
  }, [apiTokenInstance, dispatch, idInstance]);

  return (
    <div className={cn('max-h-[746px] overflow-y-auto chatList', className)}>
      {chatList ? (
        chatList
          .filter(
            (contact) =>
              contact.name.toLowerCase().includes(fiteredChats.toLowerCase()) ||
              contact.id.toLowerCase().includes(fiteredChats.toLowerCase()),
          )
          .map((contact) => (
            <ChatItem key={contact.id} name={contact.name} id={contact.id} />
          ))
      ) : (
        <p className="h-full grid place-content-center">Chat list is empty</p>
      )}
    </div>
  );
};
