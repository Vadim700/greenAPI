import classNames from 'classnames';

interface Props {
  className?: string;
}

export const Aside: React.FC<Props> = ({ className }) => {
  return (
    <aside
      className={classNames(className, 'border-r border-accentbg  bg-asidebg')}
    >
      <header className="flex items-center px-4 h-16 text-3xl">Чаты</header>
      Chat list
    </aside>
  );
};
