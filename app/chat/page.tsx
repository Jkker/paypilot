'use client';
import ClientOnly from '@/component/ClientOnly';
import { ProChat } from '@ant-design/pro-chat';

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
          locale='en-US'
          // className='max-h-full'
          placeholder='Type a message...'
          helloMessage="Hello, I'm your customer support copilot 🤖"
          request={async (messages) => {
            console.log(
              `🚀 ~ file: page.tsx:19 ~ request={ ~ messages:`,
              messages,
            );
            const text = await delay(String(messages.at(-1).content));

            return new Response(text);
          }}
        />
      </ClientOnly>
    </div>
  );
}
