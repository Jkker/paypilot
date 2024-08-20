"use client"

import type { Case } from '@/lib';
import { Avatar, Card } from 'antd';
import Meta from 'antd/es/card/Meta';
import React from "react";

export function MessageHistory({
  messages,
  data,
}: {
  messages: { sender: string; message: string }[];
  data: Case;
}) {
  return (
    <div className='grid grid-cols-1 gap-4'>
      {messages.map((message, index) => (
        <Card
          key={index}
          // title={message.sender}
          // subTitle={currcases.solicitorId}
        >
          <Meta
            avatar={<Avatar>{message.sender[0]}</Avatar>}
            title={message.sender}
            description={data.solicitorId}
          />
          <p className='text-md text-gray-900 py-4 whitespace-pre-wrap'>
            {message.message}
          </p>
        </Card>
      ))}
    </div>
  );
}