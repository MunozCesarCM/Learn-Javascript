import Breadcrumb from '../components/Breadcrumb';

const lessonContent = {
  'what-is-javascript': [
    {
      type: 'p',
      content: 'This is p 1',
    },
    {
      type: 'p',
      content: 'This is p 2',
    },
  ],
};

const handleTagContent = (tag) => {
  if (tag.type === 'p') return <p>{tag.content}</p>;
  return <p className='bg-red-500'>No tag detected</p>;
}

const SectionOverview = ({ lesson }) => {
  return (
    <main className='lesson'>
      <article>
        <Breadcrumb />
        <h1>{lesson.label}</h1>
        {lessonContent[lesson.id].map((tag) =>
          handleTagContent(tag)
        )}
      </article>
    </main>
  );
};

export default SectionOverview;
