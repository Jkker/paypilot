import { Skeleton } from 'antd';
import React, { Suspense } from 'react';

export default function LayoutNavigation({
  children,
}: {
  children: React.ReactNode;
}) {
  return <Suspense fallback={<Skeleton />}>{children}</Suspense>;
}
