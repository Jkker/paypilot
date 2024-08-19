'use client';
import { AntdRegistry } from '@ant-design/nextjs-registry';
import React from 'react';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { App, ConfigProvider } from 'antd';
import AppLayout from './AppLayout';
import Head from 'next/head';
import enUS from 'antd/locale/en_US';

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <Head>
        <title>PayPros MFM CRM</title>
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
