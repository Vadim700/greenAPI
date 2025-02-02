'use client';
import { cn } from '@/lib/utils';
import React from 'react';
import { MessageForm } from '../ui/MessageForm';
import { sendMessage } from '@/servises/messages';
// import { getAvatar } from '@/servises/user';

interface Props {
  className?: string;
}

export const Footer: React.FC<Props> = ({ className }) => {
  const instanse = process.env.ID_INSTANCE || '';
  const token = process.env.API_TOKEN_INSTANCE || '';

  const sendingMessage = async (values: { message: string }) => {
    // 'use server';
    await sendMessage(instanse, token, '79085728793', values.message);

    console.log(
      await sendMessage(instanse, token, '79085728793', values.message),
      ' => ',
      values.message,
    );

    // console.log(await getAvatar(instanse, token, '79085728793'));
  };
  return (
    <footer
      className={cn(
        className,
        'flex items-center py-2.5 px-4 min-h-[64px] bg-accentbg text-3xl',
      )}
    >
      <MessageForm
        placeholder="Введите сообщение"
        sendMessage={sendingMessage}
      />
    </footer>
  );
};
