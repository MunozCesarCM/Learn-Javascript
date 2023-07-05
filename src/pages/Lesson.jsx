import Breadcrumb from '../components/Breadcrumb';

const SectionOverview = ({ lesson }) => {
  return (
    <main className='topic-overview'>
      <article>
        <Breadcrumb />
        <h1>{lesson.label}</h1>
      </article>
    </main>
  );
};

export default SectionOverview;
