import React from 'react';
import { Aside } from './shared/Aside';
import { Header } from './shared/Header';
import { ChatBody } from './shared/ChatBody';
import { Footer } from './shared/Footer';
import { cn } from '@/lib/utils';

interface Props {
  className?: string;
}

export const Chat: React.FC<Props> = ({ className }) => {
  return (
    <main
      className={cn(
        className,
        'h-[90vh] min-w-[90vw] grid grid-cols-[1fr_2fr] grid-rows-[auto_1fr] overflow-hidden',
      )}
    >
      <Aside className="row-span-3" />
      <Header />
      <ChatBody />
      <Footer className="col-start-2" />
    </main>
  );
};
