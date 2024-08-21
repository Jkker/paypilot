'use client';
import { useState } from 'react';
import {
  Input,
  Button,
  Table,
  Dropdown,
  Menu,
  Checkbox,
  Pagination,
} from 'antd';
import { FaSearch, FaFilter, FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import Link from 'next/link';

// Mock data for leads
const mockLeads = [
  {
    id: 'LD001',
    name: 'John Doe',
    company: 'Tech Corp',
    email: 'john@techcorp.com',
    phone: '+1 (555) 123-4567',
    status: 'New',
    interest: 'Payment Processing',
  },
  {
    id: 'LD002',
    name: 'Jane Smith',
    company: 'E-commerce Inc',
    email: 'jane@ecommerce.com',
    phone: '+1 (555) 987-6543',
    status: 'Contacted',
    interest: 'Fraud Prevention',
  },
  {
    id: 'LD003',
    name: 'Bob Johnson',
    company: 'Retail Solutions',
    email: 'bob@retailsol.com',
    phone: '+1 (555) 246-8135',
    status: 'Qualified',
    interest: 'Multi-Currency Support',
  },
  {
    id: 'LD004',
    name: 'Alice Brown',
    company: 'Global Traders',
    email: 'alice@globaltraders.com',
    phone: '+1 (555) 369-2580',
    status: 'Proposal',
    interest: 'Payment Processing',
  },
  {
    id: 'LD005',
    name: 'Charlie Wilson',
    company: 'Local Shop',
    email: 'charlie@localshop.com',
    phone: '+1 (555) 147-2589',
    status: 'New',
    interest: 'POS Integration',
  },
];

export default function Component() {
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState<string[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const leadsPerPage = 4;

  const filteredLeads = mockLeads.filter(
    (lead) =>
      (lead.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        lead.company.toLowerCase().includes(searchTerm.toLowerCase()) ||
        lead.email.toLowerCase().includes(searchTerm.toLowerCase())) &&
      (statusFilter.length === 0 || statusFilter.includes(lead.status)),
  );

  const indexOfLastLead = currentPage * leadsPerPage;
  const indexOfFirstLead = indexOfLastLead - leadsPerPage;
  const currentLeads = filteredLeads.slice(indexOfFirstLead, indexOfLastLead);

  const handleMenuClick = (status: string) => {
    setStatusFilter((prev) =>
      prev.includes(status)
        ? prev.filter((item) => item !== status)
        : [...prev, status],
    );
  };

  const menu = (
    <Menu>
      {['New', 'Contacted', 'Qualified', 'Proposal'].map((status) => (
        <Menu.Item key={status}>
          <Checkbox
            checked={statusFilter.includes(status)}
            onChange={() => handleMenuClick(status)}
          >
            {status}
          </Checkbox>
        </Menu.Item>
      ))}
    </Menu>
  );

  const columns = [
    {
      title: 'Lead ID',
      dataIndex: 'id',
      render: (text: string) => (
        <Link href={`/sales/leads/${text}`}>{text}</Link>
      ),
    },
    { title: 'Name', dataIndex: 'name' },
    { title: 'Company', dataIndex: 'company' },
    { title: 'Email', dataIndex: 'email' },
    { title: 'Phone', dataIndex: 'phone' },
    { title: 'Status', dataIndex: 'status' },
    { title: 'Interest', dataIndex: 'interest' },
  ];

  return (
    <div className='container mx-auto px-4 py-8'>
      <h1 className='text-2xl font-bold mb-6'>Leads List</h1>
      <div className='flex justify-between items-center mb-6'>
        <Input
          prefix={<FaSearch />}
          placeholder='Search leads...'
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          style={{ width: 300 }}
        />
        <Dropdown overlay={menu} trigger={['click']}>
          <Button icon={<FaFilter />}>Filter by Status</Button>
        </Dropdown>
      </div>
      <Table
        columns={columns}
        dataSource={currentLeads}
        pagination={false}
        rowKey='id'
      />
      <div className='flex justify-between items-center mt-4'>
        <div>
          Showing {indexOfFirstLead + 1} to{' '}
          {Math.min(indexOfLastLead, filteredLeads.length)} of{' '}
          {filteredLeads.length} leads
        </div>
        <Pagination
          current={currentPage}
          pageSize={leadsPerPage}
          total={filteredLeads.length}
          onChange={setCurrentPage}
          showSizeChanger={false}
          itemRender={(page, type, originalElement) => {
            if (type === 'prev') {
              return (
                <Button icon={<FaArrowLeft />} disabled={currentPage === 1} />
              );
            }
            if (type === 'next') {
              return (
                <Button
                  icon={<FaArrowRight />}
                  disabled={indexOfLastLead >= filteredLeads.length}
                />
              );
            }
            return originalElement;
          }}
        />
      </div>
    </div>
  );
}
