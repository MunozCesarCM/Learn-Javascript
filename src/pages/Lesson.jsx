import { useState, useRef } from 'react';
import Breadcrumb from '../components/Breadcrumb';

const lessonContent = {
  'what-is-javascript': [
    [
      {
        type: 'p',
        content: 'Donec **ex** augue, tempor ac scelerisque non, blandit nec tellus. ',
      },
      {
        type: 'p',
        content: 'Sed nec urna at ex ornare placerat quis nec enim. Lorem ipsum dolor sit amet, consectetur **adipiscing elit**. ',
      },
    ],
    [
      {
        type: 'p',
        content: 'Aliquam vitae magna non quam eleifend pharetra. Nunc placerat fringilla laoreet. Fusce porta sem vel tortor semper iaculis. Suspendisse sit amet nisi vel lorem sodales molestie eu commodo nunc. Ut eu tortor euismod, auctor sapien eget, luctus libero.',
      },
    ],
    [
      {
        type: 'p',
        content: 'Donec ex augue, tempor ac scelerisque non, blandit nec tellus. ',
      },
      {
        type: 'p',
        content: 'Sed nec urna at ex ornare placerat quis nec enim. Lorem ipsum dolor sit amet, consectetur adipiscing elit. ',
      },
    ],
    [
      {
        type: 'p',
        content: 'Donec ex augue, tempor ac scelerisque non, blandit nec tellus. ',
      },
      {
        type: 'p',
        content: 'Sed nec urna at ex ornare placerat quis nec enim. Lorem ipsum dolor sit amet, consectetur adipiscing elit. ',
      },
    ],
    [
      {
        type: 'p',
        content: 'Aliquam vitae magna non quam eleifend pharetra. Nunc placerat fringilla laoreet. Fusce porta sem vel tortor semper iaculis. Suspendisse sit amet nisi vel lorem sodales molestie eu commodo nunc. Ut eu tortor euismod, auctor sapien eget, luctus libero.',
      },
    ],
    [
      {
        type: 'p',
        content: 'Donec ex augue, tempor ac scelerisque non, blandit nec tellus. ',
      },
      {
        type: 'p',
        content: 'Sed nec urna at ex ornare placerat quis nec enim. Lorem ipsum dolor sit amet, consectetur adipiscing elit. ',
      },
    ],
    [
      {
        type: 'p',
        content: 'Donec ex augue, tempor ac scelerisque non, blandit nec tellus. ',
      },
      {
        type: 'p',
        content: 'Sed nec urna at ex ornare placerat quis nec enim. Lorem ipsum dolor sit amet, consectetur adipiscing elit. ',
      },
    ],
    [
      {
        type: 'p',
        content: 'Aliquam vitae magna non quam eleifend pharetra. Nunc placerat fringilla laoreet. Fusce porta sem vel tortor semper iaculis. Suspendisse sit amet nisi vel lorem sodales molestie eu commodo nunc. Ut eu tortor euismod, auctor sapien eget, luctus libero.',
      },
    ],
    [
      {
        type: 'p',
        content: 'Donec ex augue, tempor ac scelerisque non, blandit nec tellus. ',
      },
      {
        type: 'p',
        content: 'Sed nec urna at ex ornare placerat quis nec enim. Lorem ipsum dolor sit amet, consectetur adipiscing elit. ',
      },
    ],
  ],
};

const handleTagContent = (tag) => {
  const modifiedContent = tag.content.replace(/\*\*(.*?)\*\*/g, '<mark>$1</mark>')
  if (tag.type === 'p') {
    return <p dangerouslySetInnerHTML={{ __html: modifiedContent}} />
  }
  return <p className='bg-red-500'>No tag detected</p>;
}

const SectionOverview = ({ lesson }) => {
  const [index, setIndex] = useState(0);
  const bottomPage = useRef(null);

  const scrollToBottom = () => {
    bottomPage?.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <main className='lesson'>
      <article>
        <Breadcrumb />
        <h1>{lesson.label}</h1>
        <button onClick={() => {setIndex(index + 1); scrollToBottom()}} className='bg-orange-600 px-4 py-2 rounded'>
          +1
        </button>
        {lessonContent[lesson.id].map((section, s_id) =>
          section.map((tag, t_id) => (
            <section
              key={`${s_id}${t_id}`}
              className={`${s_id > index ?
                'opacity-0 translate-y-60 h-0' :
                'opacity-100 translate-y-0'}
                duration-700`}
              >
              {handleTagContent(tag)}
            </section>
          ))
        )}
        <div ref={bottomPage} />
      </article>
    </main>
  );
};

export default SectionOverview;
