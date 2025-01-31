import { cn } from '@/lib/utils';
import React from 'react';

interface Props {
  className?: string;
}

export const ChatBody: React.FC<Props> = ({ className }) => {
  return (
    <div
      className={cn(
        className,
        'flex flex-col gap-2 message-inner p-8 border-r border-accentbg bg-asidebg overflow-y-auto',
      )}
    >
      <div className="max-w-[75%] bg-messagebg p-2 pb-3 inline-block rounded-md rounded-t-none rounded-s-md">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eum, fugit et
        accusantium facilis laborum molestiae cupiditate quaerat impedit
        voluptatem debitis.
      </div>
      <div className="self-end max-w-[75%] text-right  bg-messagebg p-2 pb-3 inline-block mb-2 rounded-md rounded-e-none rounded-b-md">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eum, fugit et
        accusantium facilis laborum molestiae cupiditate quaerat impedit
        voluptatem debitis.
      </div>
      <div className="max-w-[75%] bg-messagebg p-2 pb-3 inline-block rounded-md rounded-t-none rounded-s-md">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eum, fugit et
        accusantium facilis laborum molestiae cupiditate quaerat impedit
        voluptatem debitis.
      </div>
      <div className="self-end max-w-[75%] text-right  bg-messagebg p-2 pb-3 inline-block mb-2 rounded-md rounded-e-none rounded-b-md">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eum, fugit et
        accusantium facilis laborum molestiae cupiditate quaerat impedit
        voluptatem debitis.
      </div>
      <div className="max-w-[75%] bg-messagebg p-2 pb-3 inline-block rounded-md rounded-t-none rounded-s-md">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eum, fugit et
        accusantium facilis laborum molestiae cupiditate quaerat impedit
        voluptatem debitis.
      </div>
      <div className="self-end max-w-[75%] text-right  bg-messagebg p-2 pb-3 inline-block mb-2 rounded-md rounded-e-none rounded-b-md">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eum, fugit et
        accusantium facilis laborum molestiae cupiditate quaerat impedit
        voluptatem debitis.
      </div>
      <div className="max-w-[75%] bg-messagebg p-2 pb-3 inline-block rounded-md rounded-t-none rounded-s-md">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eum, fugit et
        accusantium facilis laborum molestiae cupiditate quaerat impedit
        voluptatem debitis.
      </div>
      <div className="self-end max-w-[75%] text-right  bg-messagebg p-2 pb-3 inline-block mb-2 rounded-md rounded-e-none rounded-b-md">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eum, fugit et
        accusantium facilis laborum molestiae cupiditate quaerat impedit
        voluptatem debitis.
      </div>
      <div className="max-w-[75%] bg-messagebg p-2 pb-3 inline-block rounded-md rounded-t-none rounded-s-md">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eum, fugit et
        accusantium facilis laborum molestiae cupiditate quaerat impedit
        voluptatem debitis.
      </div>
      <div className="self-end max-w-[75%] text-right  bg-messagebg p-2 pb-3 inline-block mb-2 rounded-md rounded-e-none rounded-b-md">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eum, fugit et
        accusantium facilis laborum molestiae cupiditate quaerat impedit
        voluptatem debitis.
      </div>
      <div className="max-w-[75%] bg-messagebg p-2 pb-3 inline-block rounded-md rounded-t-none rounded-s-md">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eum, fugit et
        accusantium facilis laborum molestiae cupiditate quaerat impedit
        voluptatem debitis.
      </div>
      <div className="self-end max-w-[75%] text-right  bg-messagebg p-2 pb-3 inline-block mb-2 rounded-md rounded-e-none rounded-b-md">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eum, fugit et
        accusantium facilis laborum molestiae cupiditate quaerat impedit
        voluptatem debitis.
      </div>
    </div>
  );
};
