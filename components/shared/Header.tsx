import classNames from 'classnames';
import React from 'react';

interface Props {
  className?: string;
}

export const Header: React.FC<Props> = ({ className }) => {
  return (
    <header
      className={classNames(className, 'flex items-center py-2.5 px-4 min-h-[64px] bg-accentbg text-3xl')}
    >
      Header
    </header>
  );
};
