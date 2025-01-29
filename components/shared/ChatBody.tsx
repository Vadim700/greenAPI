import classNames from 'classnames';
import React from 'react';

interface Props {
  className?: string;
}

export const ChatBody: React.FC<Props> = ({ className }) => {
  return <div className={classNames(className, 'border-r border-accentbg bg-asidebg')}>Messages</div>;
};
