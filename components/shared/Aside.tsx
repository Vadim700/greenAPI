import { LogOut, Search } from 'lucide-react';
import { SearchInput } from '../ui/Search';
import { Label } from '../ui/Label';
import { cn } from '@/lib/utils';
import { ChatList } from './ChatList';
import { useAppDispatch, useAppSelector } from '@/lib/hooks';
import { logout } from '@/lib/features/authSlise';
// import { getAvatar } from '@/servises/user';

interface Props {
  className?: string;
}

export const Aside: React.FC<Props> = ({ className }) => {
  // const instanse = process.env.ID_INSTANCE || '';
  // const token = process.env.API_TOKEN_INSTANCE || '';
  const instanse = useAppSelector(state => state.auth.idInstance);
  const token = useAppSelector(state => state.auth.apiTokenInstance);
  const dispatch = useAppDispatch();

  // const setAvatar = async () => getAvatar(instanse, token, '79085728793').then((i) => i.urlAvatar);

  return (
    <aside className={cn(className, 'border-r border-accentbg  bg-asidebg')}>
      <header className="flex items-center justify-between px-4 text-3xl h-[76px]">
        {/* <Image src={avatar} alt="avatar" width={56} height={56} /> */}
        <button
          className="hover:text-messagebg"
          title="logout"
          onClick={() => dispatch(logout())}
        >
          {' '}
          <LogOut className="rotate-180" size={32}/>
        </button>
        Chats
      </header>
      <Label className=" bg-accentbg mb-4">
        <Search />
        <SearchInput placeholder="Search..." />
      </Label>
      <ChatList token={token} instanse={instanse} />
    </aside>
  );
};
