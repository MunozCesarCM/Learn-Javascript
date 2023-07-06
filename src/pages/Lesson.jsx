import { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import Breadcrumb from '../components/Breadcrumb';

const lessonContent = {
  'what-is-javascript': [
    [
      { type: 'p', content: 'JavaScript is a computer language that is commonly used to make websites more interactive and dynamic. It was created in the mid-1990s and has since become an essential part of web development.', },
    ],
    [
      { type: 'p', content: 'When you visit a website and click on buttons, see animations, or fill out forms, JavaScript is often responsible for making those things happen.', },
      { type: 'p', content: 'It allows developers to add functionalities like showing or hiding elements, validating user inputs, updating content without refreshing the page, and much more.', },
    ],
    [
      { type: 'hr', },
      { type: 'p', content: 'Think of JavaScript as the language that helps websites come to life and respond to your actions. It\'s like the behind-the-scenes magic that makes web pages interactive.', },
      { type: 'hr', },
    ],
    [
      { type: 'p', content: 'To use JavaScript, developers write lines of code using specific rules and syntax. These lines of code tell the computer what to do. Think of it as giving instructions to the computer, just like you would give instructions to a person.' },
      { type: 'p', content: 'These instructions can include things like performing calculations, displaying messages, or making decisions based on certain conditions.' },
    ],
  ],

  'getting-started': [
    [
      { type: 'p', content: 'Usually when building frontend applications, JavaScript is attached to web pages in the HTML document.', },
      { type: 'p', content: 'This involves writing JavaScript code inside the head of the HTML document. To do that, we can use the dedicated ##<script>## element.', },
    ],
    [
      { type: 'p', content: 'When you visit a website and click on buttons, see animations, or fill out forms, JavaScript is often responsible for making those things happen.', },
      { type: 'p', content: 'It allows developers to add functionalities like showing or hiding elements, validating user inputs, updating content without refreshing the page, and much more.', },
    ],
    [
      { type: 'hr', },
      { type: 'p', content: 'Think of JavaScript as the language that helps websites come to life and respond to your actions. It\'s like the behind-the-scenes magic that makes web pages interactive.', },
      { type: 'hr', },
    ],
    [
      { type: 'p', content: 'To use JavaScript, developers write lines of code using specific rules and syntax. These lines of code tell the computer what to do. Think of it as giving instructions to the computer, just like you would give instructions to a person.' },
      { type: 'p', content: 'These instructions can include things like performing calculations, displaying messages, or making decisions based on certain conditions.' },
    ],
  ],
};

const handleTagContent = (tag) => {
  if (tag.type === 'p') {
    let modifiedContent = tag.content;
    console.log(modifiedContent)
    modifiedContent = modifiedContent.replace(/</g, '&lt;')
    modifiedContent = modifiedContent.replace(/>/g, '&gt;')
    modifiedContent = modifiedContent.replace(/\#\#(.*?)\#\#/g, '<mark>$1</mark>')
    return <p dangerouslySetInnerHTML={{ __html: modifiedContent}} />
  }
  if (tag.type === 'hr') {
    return <hr className='h-px bg-neutral-400 border-0' />
  }
  return <p className='bg-red-500'>No tag detected</p>;
}

const SectionOverview = ({ lesson }) => {
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
        <div id='bottom' ref={bottomPage} />
      </article>
      <button
        onClick={handleContinueClick}
        className='fixed right-10 bottom-10 bg-terminal-yellow active:bg-yellow-500 text-yellow-900 font-bold px-4 py-2 rounded'
      >
        {index >= lessonContent[lesson.id].length - 1 ? 'Complete' : 'Continue'}
      </button>
    </main>
  );
};

export default SectionOverview;
