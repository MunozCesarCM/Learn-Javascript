import { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import Breadcrumb from '../components/Breadcrumb';
import { handleTagContent } from '../helpers/handleContentTag';

import { jsBasicsContent } from '../constants/lessons/jsBasics';


const Lesson = ({ lesson }) => {
  const lessonContent = jsBasicsContent;
  const [index, setIndex] = useState(0);
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
    <main className='lesson'>
      <article>
        <Breadcrumb />
        <h1>{lesson.label}</h1>
        {lessonContent[lesson.id].map((section, s_id) =>
          section.map((tag, t_id) => (
            <section
              key={`${s_id}${t_id}`}
              className={`${s_id > index ?
                'opacity-0 translate-y-20 h-0' :
                'opacity-100 translate-y-0'}
                duration-700`}
              >
              {handleTagContent(tag)}
            </section>
          ))
        )}
      </article>
      <div id='bottom' ref={bottomPage} />
      <button
        onClick={handleContinueClick}
        className='fixed right-10 bottom-10 bg-terminal-yellow active:bg-yellow-500 text-yellow-800 font-bold px-4 py-2 border-2 border-yellow-50 border-opacity-0 hover:border-opacity-100 rounded duration-50'
      >
        {index >= lessonContent[lesson.id].length - 1 ? 'Complete' : 'Continue'}
      </button>
    </main>
  );
};

export default Lesson;
