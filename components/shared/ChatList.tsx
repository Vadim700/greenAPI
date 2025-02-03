'use client';

import React, { useEffect } from 'react';
import { ChatItem } from './ChatItem';
import { cn } from '@/lib/utils';
import { useAppDispatch, useAppSelector } from '@/lib/hooks';
import { fetchChats } from '@/lib/thunks/chatsThunk';

interface Props {
  className?: string;
  fiteredChats: string;
}

export const ChatList: React.FC<Props> = ({ className, fiteredChats }) => {
  // const [chatData, setChatData] = useState([]);
  const dispatch = useAppDispatch();
  const chatList = useAppSelector((state) => state.chats.chats);
  const phoneNumber = useAppSelector((state) => state.user.user.phone);
  const { idInstance, apiTokenInstance } = useAppSelector(
    (state) => state.auth,
  );

  useEffect(() => {
    dispatch(fetchChats({ idInstance, apiTokenInstance, phoneNumber }));
  }, [apiTokenInstance, dispatch, idInstance, phoneNumber]);

  return (
    <div className={cn('max-h-[746px] overflow-y-auto chatList', className)}>
      {chatList ? (
        chatList
          .filter((item) => item.id.includes(fiteredChats))
          .map((data) => (
            <ChatItem key={data.id} name={data.name} id={data.id} />
          ))
      ) : (
        <p className="h-full grid place-content-center">Chat list is empty</p>
      )}
    </div>
  );
};
