/* eslint-disable @next/next/no-img-element */
'use client';
import { ProCard, StatisticCard } from '@ant-design/pro-components';
import { Button } from 'antd';
import Link from 'next/link';
import { LuExternalLink, LuListChecks } from 'react-icons/lu';

const { Statistic, Divider } = StatisticCard;
const responsive = false;
export default function Page() {
  return (
    <main className='grid grid-cols-1 gap-4'>
      <h3 className='text-lg font-semibold text-gray-800 leading-none'>
        Welcome to PayPros MFM CRM!
      </h3>

      <ProCard>
        <StatisticCard.Group>
          <StatisticCard
            statistic={{
              title: 'Total Cases',
              tip: 'Help text',
              value: 10,
            }}
          />
          <Divider />
          <StatisticCard
            statistic={{
              title: 'Success',
              value: 5,
              status: 'success',
            }}
          />
          <StatisticCard
            statistic={{
              title: 'Pending',
              value: 3,
              status: 'warning',
            }}
          />
          <StatisticCard
            statistic={{
              title: 'Closed',
              value: 2,
              status: 'default',
            }}
          />
        </StatisticCard.Group>
      </ProCard>
      <ProCard split={responsive ? 'horizontal' : 'vertical'}>
        <StatisticCard
          colSpan={responsive ? 24 : 6}
          title='Fiscal Year Performance Target'
          statistic={{
            value: 82.6,
            suffix: 'Billion',
            description: (
              <Statistic title='Day-over-day' value='6.47%' trend='up' />
            ),
          }}
          chart={
            <img
              src='https://gw.alipayobjects.com/zos/alicdn/PmKfn4qvD/mubiaowancheng-lan.svg'
              alt='Progress bar'
              width='100%'
            />
          }
          footer={
            <>
              <Statistic
                value='70.98%'
                title='Fiscal Year Performance'
                layout='horizontal'
              />
              <Statistic
                value='86.98%'
                title='Same Period Last Year'
                layout='horizontal'
              />
              <Statistic
                value='88.98%'
                title='Two Years Ago'
                layout='horizontal'
              />
            </>
          }
        />
        <StatisticCard.Group
          colSpan={responsive ? 24 : 18}
          direction={responsive ? 'column' : undefined}
        >
          <StatisticCard
            statistic={{
              title: 'Fiscal Year Total Revenue',
              value: 601987768,
              description: (
                <Statistic title='Day-over-day' value='6.15%' trend='up' />
              ),
            }}
            chart={
              <img
                src='https://gw.alipayobjects.com/zos/alicdn/zevpN7Nv_/xiaozhexiantu.svg'
                alt='Line chart'
                width='100%'
              />
            }
          >
            <Statistic
              title='Market Total Revenue'
              value={1982312}
              layout='vertical'
              description={
                <Statistic title='Day-over-day' value='6.15%' trend='down' />
              }
            />
          </StatisticCard>
          <StatisticCard
            statistic={{
              title: 'Daily Ranking',
              value: 6,
              description: (
                <Statistic title='Day-over-day' value='3.85%' trend='down' />
              ),
            }}
            chart={
              <img
                src='https://gw.alipayobjects.com/zos/alicdn/zevpN7Nv_/xiaozhexiantu.svg'
                alt='Line chart'
                width='100%'
              />
            }
          >
            <Statistic
              title='Revenue Last 7 Days'
              value={17458}
              layout='vertical'
              description={
                <Statistic title='Day-over-day' value='6.47%' trend='up' />
              }
            />
          </StatisticCard>
          <StatisticCard
            statistic={{
              title: 'Fiscal Year Revenue Ranking',
              value: 2,
              description: (
                <Statistic title='Day-over-day' value='6.47%' trend='up' />
              ),
            }}
            chart={
              <img
                src='https://gw.alipayobjects.com/zos/alicdn/zevpN7Nv_/xiaozhexiantu.svg'
                alt='Line chart'
                width='100%'
              />
            }
          >
            <Statistic
              title='Monthly Paying Users'
              value={601}
              layout='vertical'
              description={
                <Statistic title='Day-over-day' value='6.47%' trend='down' />
              }
            />
          </StatisticCard>
        </StatisticCard.Group>
      </ProCard>
      <Link href='/case'>
        <Button type='primary' block size='large' icon={<LuExternalLink />}>
          Go to All Cases
        </Button>
      </Link>
    </main>
  );
}
