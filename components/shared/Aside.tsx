import { Search } from 'lucide-react';
import { SearchInput } from '../ui/Search';
import { Label } from '../ui/Label';
import { cn } from '@/lib/utils';

interface Props {
  className?: string;
}

export const Aside: React.FC<Props> = ({ className }) => {
  return (
    <aside className={cn(className, 'border-r border-accentbg  bg-asidebg')}>
      <header className="flex items-center px-4 h-16 text-3xl">Чаты</header>
      <Label>
        <Search />
        <SearchInput placeholder='Search...'/>
      </Label>
      Chat list
    </aside>
  );
};
