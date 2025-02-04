import { LogOut, Search } from 'lucide-react';
import { SearchInput } from '../ui/SearchInput';
import { Label } from '../ui/Label';
import { cn } from '@/lib/utils';
import { ChatList } from './ChatList';
import { useAppDispatch } from '@/lib/hooks';
import { logout } from '@/lib/features/authSlice';
import { useState } from 'react';

interface Props {
  className?: string;
}

export const Aside: React.FC<Props> = ({ className }) => {
  const dispatch = useAppDispatch();
  const [filteredChats, setFilteredChats] = useState('');

  // const setAvatar = async () => getAvatar(instanse, token, '79085728793').then((i) => i.urlAvatar);

  const onFilterChats = (value: string) => {
    setFilteredChats(value);
  };

  return (
    <aside className={cn(className, 'border-r border-accentbg  bg-asidebg')}>
      <header className="flex items-center justify-between px-4 text-3xl h-[76px]">
        <button
          className="hover:text-messagebg"
          title="logout"
          onClick={() => dispatch(logout())}
        >
          {' '}
          <LogOut className="rotate-180" size={32} />
        </button>
        Chats
      </header>
      <Label className=" bg-accentbg mb-4">
        <Search />
        <SearchInput
          placeholder="Search..."
          filterChats={onFilterChats}
        />
      </Label>
      <ChatList fiteredChats={filteredChats} />
    </aside>
  );
};
