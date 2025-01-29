import classNames from 'classnames';
import React from 'react';

interface Props {
  className?: string;
}

export const Chat: React.FC<Props> = ({ className }) => {
  return (
    <main
      className={classNames(
        className,
        'h-[90vh] min-w-[90vw] grid grid-cols-[1fr_2fr] grid-rows-[auto_1fr]  overflow-hidden',
      )}
    >
      <aside className="border border-e-yellow-400 row-span-2 bg-asidebg">Aside</aside>
      <header className="border border-red-600 bg-accentbg">Header</header>
      <section className="border border-blue-400">Messages</section>
    </main>
  );
};
