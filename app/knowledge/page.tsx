'use client';
import { Title } from '@/components/Text';
import { Input, Tag } from 'antd';
import Markdown from 'react-markdown';
import articles from '@/data/kb';

export interface Article {
  title: string;
  /**
   * A font-awesome icon name. e.g. FaReact, FaVueJs, FaAngular
   */
  icon: string;
  /**
   * The content of the article in markdown format.
   */
  content: string;
  tags?: string[];
}

export default function Page() {
  return (
    <div>
      <div className='hero h-64 grid place-items-center w-full gap-5'>
        <Title>Knowledge Base</Title>
        <Input.Search
          placeholder='Search for articles...'
          variant='outlined'
          size='large'
        />
      </div>
      <ul className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
        {articles.map((article, index) => (
          <li
            key={index}
            className='p-4 border rounded-md flex flex-col gap-4 bg-white'
          >
            <h3 className='text-gray-950 font-semibold text-2xl'>
              {article.title}
            </h3>
            <ul className='flex max-w-full flex-wrap gap-2'>
              {article.tags?.map((tag) => (
                <li
                  key={tag}
                  className='px-1 py-0.5 bg-gray-100 rounded-md leading-none border text-gray-700 select-none'
                >
                  {tag}
                </li>
              ))}
            </ul>
            <Markdown className='prose'>{article.content}</Markdown>
          </li>
        ))}
      </ul>

      <p>This is the knowledge base page.</p>
    </div>
  );
}
