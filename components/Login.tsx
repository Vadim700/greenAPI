'use client';
import { z } from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useState } from 'react';

export const Login = () => {
  const [idInstance, setIdInstance] = useState('');
  const [apiTokenInstance, setApiTokenInstance] = useState('');
  // const setCredentials = useAuthStore((state) => state.setCredentials);

  const messageFormSchema = z.object({
    instance: z.string().trim().min(1, { message: 'At least 1 character' }),
    token: z.string().trim().min(1, { message: 'At least 1 character' }),
  });

  type AuthForm = z.infer<typeof messageFormSchema>;

  const form = useForm<AuthForm>({
    resolver: zodResolver(messageFormSchema),
    defaultValues: {
      instance: '',
      token: '',
    },
  });

  const onSubmit = (e: AuthForm) => {
		console.log(e);
  };

  return (
    <div className="min-h-screen w-screen  flex items-center justify-center p-4">
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
              name="instance"
              value={idInstance}
              onChange={(e) => setIdInstance(e.target.value)}
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
              name="token"
              value={apiTokenInstance}
              onChange={(e) => setApiTokenInstance(e.target.value)}
              className="mt-1 block w-full h-10 px-4 rounded-md border border-black shadow-sm focus:border-green-500 focus:ring-green-500"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-[#00a884] text-white py-2 px-4 rounded-md hover:bg-[#008f6f] transition-colors"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};
