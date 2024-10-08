'use client';
import { Button, Result } from 'antd';
import Link from 'next/link';
import React from 'react';

const NotFoundPage: React.FC = () => {
  return (
    <Result
      status='403'
      title='403'
      // subTitle='Sorry, the page you visited does not exist.'
      extra={
        <Link href='/'>
          <Button type='primary'>Back Home</Button>
        </Link>
      }
    />
  );
};

export default NotFoundPage;
