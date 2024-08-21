'use client';
import ClientOnly from '@/components/ClientOnly';
import { client } from '@/lib';
import { ProChat } from '@ant-design/pro-chat';
import { Avatar } from 'antd';
import type React from 'react';
import { FaRobot, FaUser } from 'react-icons/fa';

const delay = (text: string) =>
  new Promise<string>((resolve) => {
    setTimeout(() => {
      resolve(text);
    }, 1000);
  });

export default function ChatPage() {
  return (
    <div className='h-full'>
      <ClientOnly>
        <ProChat
          userMeta={{
            avatar: 'user',
          }}
          chatItemRenderConfig={{
            avatarRender: (props, arg) => {
              console.log(
                `🚀 ~ file: page.tsx:25 ~ ChatPage ~ props, arg:`,
                props,
                arg,
              );
              return (arg as React.ReactElement)?.props?.avatar.avatar ===
                '🤖' ? (
                arg
              ) : (
                <Avatar icon={<FaUser />} />
              );
            },
          }}
          style={{ height: '100%' }}
          locale='en-US'
          // className='max-h-full'
          placeholder='Type a message...'
          helloMessage="Hello, I'm your customer support copilot 🤖"
          request={async (messages) => {
            console.log(`chat req`, messages);

            const { data, error } = await client.POST('/chats', {
              body: {
                message: String(messages.at(-1).content),
              },
            });
            console.log(`chat res`, data);
            // const text = await delay(String(messages.at(-1).content));

            return new Response(data.message);
          }}
        />
      </ClientOnly>
    </div>
  );
}
