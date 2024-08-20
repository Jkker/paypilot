'use client';
import { AntdRegistry } from '@ant-design/nextjs-registry';
import { App, ConfigProvider } from 'antd';
import enUS from 'antd/locale/en_US';
import { Inter } from 'next/font/google';
import Head from 'next/head';
import React from 'react';
import AppLayout from './AppLayout';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <Head>
        <meta charSet='utf-8' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <body className={inter.className}>
        <AntdRegistry>
          <ConfigProvider locale={enUS}>
            <App>
              <AppLayout>{children}</AppLayout>
            </App>
          </ConfigProvider>
        </AntdRegistry>
      </body>
    </html>
  );
}
