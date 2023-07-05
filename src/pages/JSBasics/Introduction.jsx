import Breadcrumb from '../../components/Breadcrumb';
import Card from '../../components/Card';

const Introduction = () => {
  return (
    <main className='topic-overview'>
      <article>
        <Breadcrumb />
        <h1>Introduction</h1>
        <p>Welcome to the JavaScript Basics section! This section lays the foundation for your JavaScript journey. We&apos;ll guide you through fundamental concepts and you&apos;ll learn how to store data and work with different types of information. Get ready to embark on your JavaScript journey and start building a strong foundation!</p>
        <section>
          <Card title='What is Javascript?' complete />
          <Card title='What do we use JavaScript for?' />
        </section>
      </article>
    </main>
  );
};

export default Introduction;
