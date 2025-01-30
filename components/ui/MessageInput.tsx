'use client';
import { cn } from '@/lib/utils';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { Label } from './Label';
import { useState } from 'react';
import { Loader, Send } from 'lucide-react';

interface Props {
  className?: string;
  placeholder?: string;
  sendMessage: (values: { message: string }) => Promise<void>;
}

export const MessageForm: React.FC<Props> = ({
  className,
  placeholder,
  sendMessage,
}) => {
  const [rowsSum, setRowsSum] = useState(1);
  const [isSending, setIsSending] = useState(false);
  const messageFormSchema = z.object({
    message: z.string().trim().min(1, { message: 'Хотябы один символ' }),
  });

  type MessageForm = z.infer<typeof messageFormSchema>;

  const form = useForm<MessageForm>({
    resolver: zodResolver(messageFormSchema),
    defaultValues: {
      message: '',
    },
  });

  const onSubmit = async (values: MessageForm) => {
    setIsSending(true);
    try {
      await sendMessage(values);
    } catch (e) {
      console.log(e, 'Не получилось отправить сообщение');
    } finally {
      form.reset();
      setIsSending(false);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Enter') {
      if (e.shiftKey) {
        setRowsSum((rows) => Math.min(rows + 1, 6));
        return;
      } else {
        e.preventDefault();
        setRowsSum(1);
        form.handleSubmit(onSubmit)();
      }
    }
  };

  return (
    <form
      onSubmit={form.handleSubmit(onSubmit)}
      className={cn('w-full flex justify-between gap-6 pr-6', className)}
    >
      <Label className="bg-actionbg min-h-10 w-full">
        <textarea
          {...form.register('message')}
          className={cn(
            'w-full bg-transparent border-0 outline-none text-base resize-none',
          )}
          placeholder={placeholder}
          rows={rowsSum}
          onKeyDown={handleKeyDown}
        />
      </Label>
      <button type="submit" className="">
        {isSending ? <Loader className="animate-spin" /> : <Send />}
      </button>
    </form>
  );
};
