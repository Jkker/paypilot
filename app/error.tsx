'use client';
import { Button, Result } from 'antd';
import Link from 'next/link';
import React from 'react';

const NotFoundPage: React.FC = () => {
  return (
    <Result
      status='404'
      title='404'
      subTitle='Sorry, the page you visited does not exist.'
      extra={
        <Link href='/'>
          <Button type='primary'>Back Home</Button>
        </Link>
      }
    />
  );
};

export default NotFoundPage;
