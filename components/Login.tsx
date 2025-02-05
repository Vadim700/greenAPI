'use client';
import { z } from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useAppDispatch } from '@/lib/hooks';
import { setCredentials } from '@/lib/features/authSlice';
import { fetchUser } from '@/lib/thunks/userThunk';
import { useState } from 'react';
import { Loader } from 'lucide-react';
import Link from 'next/link';

export const Login = () => {
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useAppDispatch();

  const messageFormSchema = z.object({
    idInstance: z.string(),
    apiTokenInstance: z.string(),
  });

  type AuthForm = z.infer<typeof messageFormSchema>;

  const form = useForm<AuthForm>({
    resolver: zodResolver(messageFormSchema),
    defaultValues: {
      idInstance: '',
      apiTokenInstance: '',
    },
  });

  const onSubmit = async (data: AuthForm) => {
    setIsLoading(true);
    try {
      dispatch(setCredentials(data));
      dispatch(fetchUser(data));
      form.reset();
    } catch (e) {
      console.log(e);
      setIsLoading(false);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen w-screen  flex flex-col gap-4 items-center justify-center p-4">
      <div className="bg-white rounded-lg p-8 w-full max-w-md shadow-lg">
        <h1 className="text-2xl font-bold text-gray-800 mb-6 text-center">
          Authorisation
        </h1>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          <div>
            <label
              htmlFor="idInstance"
              className="block text-sm font-medium text-gray-700"
            >
              ID Instance
            </label>
            <input
              type="text"
              id="idInstance"
              {...form.register('idInstance')}
              className="mt-1 block w-full h-10 px-4 rounded-md border border-black shadow-sm text-black focus:border-green-500 focus:ring-green-500"
            />
          </div>
          <div>
            <label
              htmlFor="apiTokenInstance"
              className="block text-sm font-medium text-gray-700"
            >
              API Token Instance
            </label>
            <input
              type="password"
              id="apiTokenInstance"
              {...form.register('apiTokenInstance')}
              className="mt-1 block w-full h-10 px-4 rounded-md border border-black shadow-sm text-black focus:border-green-500 focus:ring-green-500"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-[#00a884] text-white py-2 px-4 rounded-md hover:bg-[#008f6f] transition-colors"
          >
            {isLoading ? <Loader /> : 'Autharisation'}
          </button>
        </form>
      </div>
      <div className="">
        Firstly, create your own instance in
        <br />
        <Link
          href={'https://console.green-api.com/instanceList'}
          target="_blank"
          className="hover:underline"
        >
          https://console.green-api.com/instanceList
        </Link>
      </div>
    </div>
  );
};
