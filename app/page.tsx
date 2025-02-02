'use client';
import { Chat } from '@/components/Chat';
import { Login } from '@/components/Login';
import { useAppSelector } from '@/lib/hooks';

export default function Home() {
  const isAuth = useAppSelector((state) => state.auth.isAuthenticated);

  return isAuth ? <Chat /> : <Login />;
}
