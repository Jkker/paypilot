import React, { useState } from 'react';
import { FloatButton, Drawer } from 'antd';
import { FaRobot } from 'react-icons/fa';
import ChatPage from './page';

export const CopilotDrawer = () => {
  const [isDrawerVisible, setIsDrawerVisible] = useState(false);

  const showDrawer = () => {
    setIsDrawerVisible(true);
  };

  const onClose = () => {
    setIsDrawerVisible(false);
  };

  return (
    <>
      <FloatButton
        icon={<FaRobot />}
        type='primary'
        style={{ insetInlineEnd: 24 }}
        onClick={showDrawer}
      />
      <Drawer
        title='Customer Support Copilot'
        placement='left'
        onClose={onClose}
        open={isDrawerVisible}
        footer={null}
        className='bg-gray-100'
      >
        <ChatPage />
      </Drawer>
    </>
  );
};

export default CopilotDrawer;
