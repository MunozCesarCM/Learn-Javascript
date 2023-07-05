import Breadcrumb from '../../components/Breadcrumb';
import Card from '../../components/Card';

const Introduction = () => {
  return (
    <main className='topic-overview'>
      <article>
        <Breadcrumb />
        <h1>Variables</h1>
        <p>Welcome to the Variables section! This section is designed for beginners to learn about Javascript variables. You'll discover how variables act as containers to store and manipulate data and you'll learn how to declare, assign, and update them as needed.</p>
        <section>
          <h2>Section 01</h2>
          <Card title='Introduction to Variables' complete />
          <Card title='Assign a value to a variable' type='Practice' complete />
          <Card title='Assign a value to a new variable' type='Practice' />
          <Card title='Create the missing variable' type='Practice' />

          <h2>Section 02</h2>
          <Card title='Working with Constants' complete />
          <Card title='Accessing a constant' type='Practice' complete />
          <Card title='Declare a constant and assign a number' type='Practice' />
        </section>
      </article>
    </main>
  );
};

export default Introduction;
