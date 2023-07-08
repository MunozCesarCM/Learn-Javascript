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
                  ${s_id > index + 1 ? 'h-px' : 'h-full'}
                  ${s_id > index ? 'translate-y-20 opacity-0' : 'translate-y-0 opacity-100'}
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
            fixed right-10 bottom-10 font-bold px-4 py-2 border-2 border-opacity-0 hover:border-opacity-100 rounded duration-50
            ${index >= lessonContent[lesson.id].length - 1 && currentSolved ?
              'bg-terminal-green active:bg-lime-500 text-lime-800 border-lime-50':
              'bg-terminal-yellow active:bg-yellow-500 text-yellow-800 border-yellow-50'}
            ${!currentSolved ?
              'opacity-50 bg-neutral-300 active:bg-neutral-300 text-neutral-500 border-neutral-50 hover:border-opacity-0': ''}
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
