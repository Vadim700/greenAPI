import { cn } from '@/lib/utils';
import React from 'react';

interface Props {
  className?: string;
}

export const ChatBody: React.FC<Props> = ({ className }) => {
  return (
    <div className={cn(className, 'border-r border-accentbg bg-asidebg')}>
      Messages
    </div>
  );
};
