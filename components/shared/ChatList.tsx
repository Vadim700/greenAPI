'use client';

import React, { useEffect } from 'react';
import { ChatItem } from './ChatItem';
import { cn } from '@/lib/utils';
import { useAppDispatch, useAppSelector } from '@/lib/hooks';
import { fetchChats } from '@/lib/thunks/chatsThunk';

interface Props {
  className?: string;
}

export const ChatList: React.FC<Props> = ({ className }) => {
  const dispatch = useAppDispatch();
  const chaсрфе = useAppSelector((state) => state.chats.chats);
  const { idInstance, apiTokenInstance } = useAppSelector(
    (state) => state.auth,
  );

  useEffect(() => {
    dispatch(
      fetchChats({ idInstance, apiTokenInstance, phoneNumber: '79085728793' }),
    );
  }, [apiTokenInstance, dispatch, idInstance]);

  return (
    <div className={cn('max-h-[746px] overflow-y-auto chatList', className)}>
      {chaсрфе ? (
        chaсрфе?.map((data) => (
          <ChatItem key={data.id} name={data.name} id={data.id} />
        ))
      ) : (
        <p className="h-full grid place-content-center">Chat list is empty</p>
      )}
    </div>
  );
};
