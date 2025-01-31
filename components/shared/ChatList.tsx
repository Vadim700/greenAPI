import { mockData } from '@/public/mockData';
import React from 'react';
import { ChatItem } from './ChatItem';
import { cn } from '@/lib/utils';

interface Props {
  className?: string;
}

export const ChatList: React.FC<Props> = ({ className }) => {
  return (
    <div className={cn('max-h-[746px] overflow-y-auto chatList', className)}>
      {mockData.map((data) => (
        <ChatItem
          key={data.id}
          name={data.name}
          avatar={data.avatar}
          text={data.text}
          active={data.active}
        />
      ))}
    </div>
  );
};
