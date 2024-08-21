'use client';
import { Button, Card, Badge, List, Typography } from 'antd';
import Link from 'next/link';
import {
  FaEnvelope,
  FaPhone,
  FaBuilding,
  FaCheckCircle,
  FaArrowLeft,
  FaHandshake,
  FaBullhorn,
  FaLightbulb,
  FaShieldAlt,
  FaChartLine,
  FaUsers,
  FaCalendarAlt,
  FaTimesCircle,
} from 'react-icons/fa';

// Mock lead data
const leadData = {
  id: 'LD001',
  name: 'John Doe',
  company: 'Tech Corp',
  email: 'john@techcorp.com',
  phone: '+1 (555) 123-4567',
  status: 'Qualified',
  interest: 'Payment Processing',
  aiInsights:
    "John Doe shows high potential as a lead for our payment processing solutions. Tech Corp is likely looking to upgrade their current system to handle increased transaction volumes. Emphasize our platform's scalability and advanced fraud detection features.",
  interactionHistory: [
    {
      date: '2023-06-15',
      type: 'Email',
      summary: 'Sent initial outreach email introducing our payment solutions.',
    },
    {
      date: '2023-06-18',
      type: 'Phone Call',
      summary:
        'Discussed current pain points with their existing payment system.',
    },
    {
      date: '2023-06-22',
      type: 'Demo',
      summary:
        'Provided a virtual demo of our platform, focusing on scalability and fraud detection features.',
    },
  ],
  salesPitch: [
    {
      type: 'greeting',
      content:
        "Hello [Name], this is [Your Name] from [Your Company]. I hope this call finds you well. I understand you're interested in upgrading your payment processing system.",
    },
    {
      type: 'pain_point',
      content:
        'In our last conversation, you mentioned that your current system struggles with handling increased transaction volumes. Is that still a major concern for you?',
    },
    {
      type: 'solution',
      content:
        "I'm excited to share how our payment processing solution can address that challenge. Our platform is designed to scale seamlessly with your business growth, handling millions of transactions without breaking a sweat.",
    },
    {
      type: 'feature',
      content:
        'One of the standout features of our system is its advanced fraud detection capabilities. It uses AI and machine learning to identify and prevent fraudulent transactions in real-time, significantly reducing your risk.',
    },
    {
      type: 'benefit',
      content:
        'This means you can focus on growing your business without worrying about your payment system keeping up or falling victim to fraud. Our clients typically see a 30% reduction in fraud-related losses within the first three months.',
    },
    {
      type: 'social_proof',
      content:
        "In fact, TechGiant, a company similar to yours in size and industry, implemented our solution last year. They've since been able to expand into three new markets without any payment processing hiccups.",
    },
    {
      type: 'call_to_action',
      content:
        "I'd love to schedule a more in-depth demo tailored to your specific needs. How does your calendar look next Tuesday or Wednesday for a 30-minute session?",
    },
    {
      type: 'closing',
      content:
        "Thank you for your time today, [Name]. I'm looking forward to showing you how we can help Tech Corp streamline its payment processing and support your growth plans.",
    },
  ],
};

export default function Component() {
  return (
    <div className='container mx-auto space-y-4'>
      <Typography.Title level={2} className='mb-6'>
        Lead Details: {leadData.name}
      </Typography.Title>

      <Card title='Basic Information' className='mb-6'>
        <div className='grid gap-2'>
          <div>
            <FaBuilding className='inline-block mb-1' />{' '}
            <strong>Company:</strong> {leadData.company}
          </div>
          <div>
            <FaEnvelope className='inline-block mb-1' /> <strong>Email:</strong>{' '}
            {leadData.email}
          </div>
          <div>
            <FaPhone className='inline-block mb-1' /> <strong>Phone:</strong>{' '}
            {leadData.phone}
          </div>
          <div>
            <FaCheckCircle className='inline-block mb-1' />{' '}
            <strong>Status:</strong> <Badge>{leadData.status}</Badge>
          </div>
          <div>
            <FaLightbulb className='inline-block mb-1' />{' '}
            <strong>Interest:</strong> {leadData.interest}
          </div>
        </div>
      </Card>

      <Card title='AI Insights' className='mb-6'>
        <p>{leadData.aiInsights}</p>
      </Card>

      <Card title='Sales Pitch Transcript' className='mb-6'>
        <List
          dataSource={leadData.salesPitch}
          renderItem={(pitch) => (
            <List.Item>
              <div>
                <Typography.Title level={4} className='capitalize mb-1'>
                  {getPitchIcon(pitch.type)} {pitch.type.replace('_', ' ')}:
                </Typography.Title>
                <p>{pitch.content}</p>
              </div>
            </List.Item>
          )}
        />
      </Card>

      <Card title='Interaction History' className='mb-6'>
        <List
          dataSource={leadData.interactionHistory}
          renderItem={(interaction) => (
            <List.Item>
              <div className='flex justify-between items-start'>
                <div>
                  <Typography.Text strong>
                    {getInteractionIcon(interaction.type)} {interaction.type}
                  </Typography.Text>
                  <p className='text-sm text-muted-foreground'>
                    {interaction.summary}
                  </p>
                </div>
                <Badge>{interaction.date}</Badge>
              </div>
            </List.Item>
          )}
        />
      </Card>

      <Link href='/leads'>
        <Button className='mt-6' type='default'>
          <FaArrowLeft className='inline-block mb-1' /> Back to Leads List
        </Button>
      </Link>
    </div>
  );
}

function getPitchIcon(type) {
  return null;
  switch (type) {
    case 'greeting':
      return <FaHandshake className='inline-block mb-1' />;
    case 'pain_point':
      return <FaBullhorn className='inline-block mb-1' />;
    case 'solution':
      return <FaLightbulb className='inline-block mb-1' />;
    case 'feature':
      return <FaShieldAlt className='inline-block mb-1' />;
    case 'benefit':
      return <FaChartLine className='inline-block mb-1' />;
    case 'social_proof':
      return <FaUsers className='inline-block mb-1' />;
    case 'call_to_action':
      return <FaCalendarAlt className='inline-block mb-1' />;
    case 'closing':
      return <FaTimesCircle className='inline-block mb-1' />;
    default:
      return null;
  }
}

function getInteractionIcon(type) {
  switch (type) {
    case 'Email':
      return <FaEnvelope className='inline-block mb-1' />;
    case 'Phone Call':
      return <FaPhone className='inline-block mb-1' />;
    case 'Demo':
      return <FaLightbulb className='inline-block mb-1' />;
    default:
      return null;
  }
}
