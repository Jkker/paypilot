'use client';
import { SubTitle } from '@/components/Text';
import articles from '@/data/kb';
import { Button, Input, Modal } from 'antd';
import { useState } from 'react';
import { FaBookAtlas } from 'react-icons/fa6';
import Markdown from 'react-markdown';

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
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  const filteredArticles = articles.filter(
    (article) =>
      article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      article.content.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (article.tags &&
        article.tags.some((tag) =>
          tag.toLowerCase().includes(searchQuery.toLowerCase()),
        )),
  );

  return (
    <>
      <div className='hero h-24 flex flex-col w-full gap-4 sticky top-0 bg-gray-100 pb-4 z-10'>
        <SubTitle icon={<FaBookAtlas />}>Knowledge Base</SubTitle>
        <Input.Search
          placeholder='Search for articles...'
          variant='outlined'
          value={searchQuery}
          onChange={handleSearchChange}
        />
      </div>
      <ul className='grid grid-cols-1 gap-4 '>
        {filteredArticles.map((article, index) => (
          <KnowledgeBaseArticleCard key={index} article={article} />
        ))}
      </ul>
    </>
  );
}

function KnowledgeBaseArticleCard({ article }: { article: Article }) {
  const [collapsed, setCollapsed] = useState(true);
  const [isModalVisible, setIsModalVisible] = useState(false);

  const toggleCollapse = () => setCollapsed(!collapsed);
  const showModal = () => setIsModalVisible(true);
  const handleCancel = () => setIsModalVisible(false);

  return (
    <li>
      <article className='p-4 border rounded-md flex flex-col gap-4 bg-white'>
        <h3 className='text-gray-950 font-semibold text-lg'>{article.title}</h3>
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
        <div
          className={`prose ${collapsed ? 'line-clamp-3 overflow-hidden' : ''}`}
          // style={{ maxHeight: collapsed ? '4.5rem' : 'none' }}
        >
          <Markdown>{article.content}</Markdown>
        </div>
        {/* <Button type='link' onClick={toggleCollapse}>
          {collapsed ? 'Read more' : 'Show less'}
        </Button> */}
        <Button onClick={showModal}>View Full Article</Button>
      </article>
      <Modal
        // title={article.title}
        open={isModalVisible}
        onCancel={handleCancel}
        footer={null}
        className='max-w-[90vw] max-h-[90vh] overflow-auto'
      >
        <article className='flex flex-col gap-4'>
          <h3 className='text-gray-950 font-semibold text-lg pr-2'>
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
          <div className={`prose`}>
            <Markdown>{article.content}</Markdown>
          </div>
        </article>
      </Modal>
    </li>
  );
}
