import { cn } from '@/lib/utils';
import React from 'react';
import { MessageForm } from '../ui/MessageForm';

interface Props {
  className?: string;
}

export const Footer: React.FC<Props> = ({ className }) => {
  const sendMessage = async (values: unknown) => {
    'use server';
    console.log(values);
  };
  return (
    <footer
      className={cn(
        className,
        'flex items-center py-2.5 px-4 min-h-[64px] bg-accentbg text-3xl',
      )}
    >
      <MessageForm placeholder="Введите сообщение" sendMessage={sendMessage} />
    </footer>
  );
};
