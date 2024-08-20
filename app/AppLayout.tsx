import { cn } from '@/utils';
import type { MenuProps } from 'antd';
import { Layout, Tooltip } from 'antd';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React, { Fragment } from 'react';
import {
  FaBolt,
  FaBook,
  FaBookOpen,
  FaBullhorn,
  FaChartLine,
  FaClipboard,
  FaCog,
  FaDesktop,
  FaFile,
  FaFolderOpen,
  FaHome,
  FaInbox,
  FaList,
  FaRobot,
  FaUsers,
} from 'react-icons/fa';

const { Header, Content, Sider } = Layout;
const navItems = [
  {
    key: '',
    label: 'Dashboard',
    icon: <FaDesktop />,
  },
  {
    key: 'case',
    label: 'Case',
    icon: <FaList />,
  },
  {
    key: 'inbox',
    label: 'Inbox',
    icon: <FaInbox />,
  },
  {
    key: 'chat',
    label: 'Assistant',
    icon: <FaRobot />,
  },
  {
    key: 'settings',
    label: 'Setting',
    icon: <FaCog />,
  },
];
const sideMenuItems: MenuProps['items'] = [
  {
    key: 'sales',
    label: 'Sales Intelligence',
    icon: <FaChartLine />,
    children: [
      {
        key: 'customers',
        label: 'Customers',
        icon: <FaUsers />,
      },
      {
        key: 'marketing',
        label: 'Marketing',
        icon: <FaBullhorn />,
      },
      {
        key: 'reports',
        label: 'Reports',
        icon: <FaFile />,
      },
    ],
  },
  {
    key: 'service',
    label: 'Service AI',
    icon: <FaFolderOpen />,
    children: [
      {
        key: 'case-management',
        label: 'Case Management',
        icon: <FaClipboard />,
      },
      {
        key: 'knowledge-base',
        label: 'Knowledge Base',
        icon: <FaBook />,
      },
      {
        key: 'service-reports',
        label: 'Service Reports',
        icon: <FaBookOpen />,
      },
    ],
  },
];

const App = ({ children }: { children: React.ReactNode }) => {
  const pathname = usePathname();

  return (
    <Layout
      style={{
        height: '100vh',
      }}
    >
      <header className='flex items-center w-full justify-between bg-gray-800 px-4 py-2'>
        <Link
          href='/'
          className='text-white hover:text-gray-50 text-xl flex items-center justify-normal whitespace-nowrap text-ellipsis leading-none gap-2'
        >
          <FaBolt />
          PayPros CRM
        </Link>
        <nav className='flex items-center gap-2'>
          {navItems.map((item) => (
            <Link
              href={`/${item.key}`}
              key={item.key}
              className={cn(
                'text-white hover:text-gray-300 hover:bg-white/10 transition-all px-2 py-1 rounded-md flex items-center gap-2 justify-center',
                {
                  'bg-white/10': pathname === `/${item.key}`,
                },
              )}
            >
              {item.icon}
              {item.label}
            </Link>
          ))}
        </nav>
      </header>
      <Layout>
        {/* <Sider>
          <Menu
            mode='inline'
            defaultSelectedKeys={['1']}
            defaultOpenKeys={['sub1']}
            style={{ height: '100%', borderRight: 0 }}
            items={sideMenuItems}
          />
        </Sider> */}
        <div className='p-4 bg-gray-100 flex flex-col w-full h-full max-h-full overflow-auto '>
          {pathname !== '/' && (
            <nav className='breadcrumb flex items-center gap-2 justify-start mb-4'>
              <Tooltip title='Home'>
                <Link href='/' className='text-gray-600 hover:text-gray-800'>
                  <FaHome />
                </Link>
              </Tooltip>
              {pathname
                .split('/')
                .filter(Boolean)
                .map((path, index) => (
                  <Fragment key={path}>
                    <span className='select-none'>/</span>
                    <Link
                      className='text-gray-600 hover:text-gray-800 capitalize'
                      key={index}
                      href={`#`}
                    >
                      {path}
                      {/* {`/${pathname
                      .split('/')
                      .slice(0, index + 1)
                      .join('/')}`} */}
                    </Link>
                  </Fragment>
                ))}
            </nav>
          )}
          {children}
        </div>
      </Layout>
    </Layout>
  );
};

export default App;
