'use client';
import { APP_NAME } from '@/CONSTNATS';
import { toTitleCase } from '@/lib/text';
import Logo from '@/public/logo.png';
import { Avatar, Button, Dropdown, Input, Layout, Menu, Tooltip } from 'antd';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import React, { Fragment, useState } from 'react';
import {
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
  FaRegBell,
  FaRobot,
  FaSignOutAlt,
  FaUser,
  FaUserAlt,
  FaUsers,
} from 'react-icons/fa';
import { FaUserGroup } from 'react-icons/fa6';
import CopilotDrawer from './chat/Modal';
const navItems = [
  {
    key: '',
    label: 'Dashboard',
    icon: <FaDesktop />,
  },
  {
    key: 'case',
    label: 'Case Management',
    icon: <FaList />,
  },
  {
    key: 'inbox',
    label: 'Ticket Inbox',
    icon: <FaInbox />,
  },
  {
    key: 'chat',
    label: 'Service Copilot',
    icon: <FaRobot />,
  },
  {
    key: 'sales',
    label: 'Sales Intelligence',
    icon: <FaChartLine />,
    children: [
      {
        key: 'leads',
        label: 'Leads',
        icon: <FaUserGroup />,
      },
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
  {
    key: 'settings',
    label: 'Setting',
    icon: <FaCog />,
  },
];

const localeOptions = [
  {
    key: 'en',
    label: 'English',
    icon: '🇺🇸',
  },
  {
    key: 'es',
    label: 'Spanish',
    icon: '🇪🇸',
  },
  {
    key: 'fr',
    label: 'French',
    icon: '🇫🇷',
  },
  {
    key: 'de',
    label: 'German',
    icon: '🇩🇪',
  },
];
const App = ({ children }: { children: React.ReactNode }) => {
  const pathname = usePathname();
  const router = useRouter();

  const basePath = pathname.split('/')[1];

  const basePathLabel =
    navItems.find((item) => item.key === basePath)?.label ||
    toTitleCase(basePath);
  const title = basePath ? `${basePathLabel} - ${APP_NAME}` : APP_NAME;

  const [locale, setLocale] = useState('en');

  return (
    <Layout className='h-screen w-screen overflow-hidden relative'>
      <title>{title}</title>
      <header className='flex items-center w-full justify-between bg-white px-4 py-2 shadow-md z-10'>
        <Link
          href='/'
          className='text-white hover:text-gray-50 text-xl flex items-center justify-normal whitespace-nowrap text-ellipsis leading-none gap-2'
        >
          <Image src={Logo} alt={APP_NAME} height={36} className='-mb-2' />
        </Link>
        <Input.Search
          placeholder='Search...'
          variant='filled'
          className='max-w-96 min-w-max h-8 min-h-8'
        />
        <div className='flex gap-2'>
          <Dropdown
            menu={{
              items: localeOptions,
              selectable: true,
              onSelect: (key) => {
                setLocale(key.key);
              },
            }}
          >
            <Button
              icon={
                <span>
                  {localeOptions.find((item) => item.key === locale)?.icon}
                </span>
              }
            />
          </Dropdown>
          <Button
            aria-label='Notification'
            icon={<FaRegBell />}
            type='default'
            className='text-gray-600'
          />
          <Dropdown
            className='cursor-pointer'
            menu={{
              items: [
                {
                  key: 'profile',
                  label: 'Profile',
                  icon: <FaUserAlt />,
                },
                {
                  key: 'settings',
                  label: 'Settings',
                  icon: <FaCog />,
                },
                {
                  key: 'logout',
                  label: 'Logout',
                  icon: <FaSignOutAlt />,
                },
              ],
            }}
          >
            <Avatar>
              <FaUser />
            </Avatar>
          </Dropdown>
        </div>
        {/* <nav className='flex items-center gap-2'>
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
        </nav> */}
      </header>
      <Layout>
        <Layout.Sider theme='light' className='pt-2'>
          <Menu
            mode='vertical'
            selectedKeys={[pathname.replace('/', '')]}
            items={navItems}
            onClick={(e) => {
              console.log(`🚀 ~ file: AppLayout.tsx:152 ~ App ~ e:`, e);
              router.push('/' + e.keyPath.toReversed().join('/'));
            }}
          />
        </Layout.Sider>
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
      {pathname !== '/chat' && <CopilotDrawer />}
    </Layout>
  );
};

export default App;
