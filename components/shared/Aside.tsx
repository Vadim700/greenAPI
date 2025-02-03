import { LogOut, Search } from 'lucide-react';
import { SearchInput } from '../ui/SearchInput';
import { Label } from '../ui/Label';
import { cn } from '@/lib/utils';
import { ChatList } from './ChatList';
import { useAppDispatch } from '@/lib/hooks';
import { logout } from '@/lib/features/authSlice';

interface Props {
  className?: string;
}

export const Aside: React.FC<Props> = ({ className }) => {
  const dispatch = useAppDispatch();

  // const setAvatar = async () => getAvatar(instanse, token, '79085728793').then((i) => i.urlAvatar);

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
        <SearchInput placeholder="Example: 79991234567" />
      </Label>
      <ChatList />
    </aside>
  );
};
