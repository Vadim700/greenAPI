'use client';
import { useAppSelector } from '@/lib/hooks';
import { cn } from '@/lib/utils';
import React from 'react';

interface Props {
  className?: string;
}

export const ChatBody: React.FC<Props> = ({ className }) => {
  const messanges = useAppSelector((state) => state.messages.messanges);
  return (
    <div
      className={cn(
        className,
        'flex flex-col gap-2 message-inner p-8 border-r border-accentbg bg-asidebg overflow-y-auto',
      )}
    >
      {messanges?.length > 0 &&
        messanges.map((message, index) => (
          <article
            key={message.chatId + index}
            className={cn(
              'max-w-[75%] bg-messagebg p-2 pb-3 inline-block rounded-md rounded-t-none empty:p-0',
              message.type === 'outgoing' ? 'self-end rounded-l-md' : 'rounded-r-md',
            )}
          >
            {message.textMessage}
          </article>
        ))}
      <p></p>
    </div>
  );
};
