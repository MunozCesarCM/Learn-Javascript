import Breadcrumb from '../components/Breadcrumb';
import Card from '../components/Card';

const SectionOverview = ({ section }) => {
  return (
    <main className='topic-overview'>
      <article>
        <Breadcrumb />
        <h1>{section.label}</h1>
        <p>{section.content}</p>
        <section>
          {section.cards.map((card, index) => (
            <div key={index}>
              <h2>Section 0{index + 1}</h2>
              {card.map((child) => (
                <Card key={child.id} card={child} />
              ))}
            </div>
          ))}
        </section>
      </article>
    </main>
  );
};

export default SectionOverview;
