import { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import Breadcrumb from '../components/Breadcrumb';
import { handleContentTag } from '../helpers/handleContentTag';

import { jsBasicsContent } from '../constants/lessons/jsBasics';


const Lesson = ({ lesson }) => {
  const lessonContent = jsBasicsContent;

  const [index, setIndex] = useState(0);
  const [currentSolved, setCurrentSolved] = useState(true);
  const navigate = useNavigate();
  const bottomPage = useRef(null);

  const scrollToBottom = () => {
    bottomPage?.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleContinueClick = () => {
    setIndex(index + 1);
    scrollToBottom();

    if (index >= lessonContent[lesson.id].length - 1) {
      navigate(`/${window.location.href.split('/').slice(3, 5).join('/')}`);
    }
  };

  return (
    <>
      <main className='lesson'>
        <article>
          <Breadcrumb />
          <h1>{lesson.label}</h1>
          {lessonContent[lesson.id].map((section, s_id) =>
            section.map((tag, t_id) => (
              <section
                key={`${s_id}${t_id}`}
                className={`
                  ${s_id > index + 1 ? 'hidden' : 'h-full'}
                  ${s_id > index ? 'translate-y-20 opacity-0 block' : 'translate-y-0 opacity-100'}
                  duration-200
                `}

              >
                {handleContentTag(tag, setCurrentSolved, s_id === index)}
              </section>
            ))
          )}
        </article>
        <button
          onClick={() => currentSolved ? handleContinueClick() : null}
          className={`
            fixed right-10 bottom-10 font-bold px-4 py-2 rounded duration-50 text-white
            ${index >= lessonContent[lesson.id].length - 1 && currentSolved ?
              'bg-secondary':
              'bg-primary'}
            ${!currentSolved ?
              'opacity-50': ''}
          `}
        >
          {index >= lessonContent[lesson.id].length - 1 ? 'Complete' : 'Continue'}
        </button>
      </main>
      <div ref={bottomPage} />
    </>
  );
};

export default Lesson;
