import { useState , useEffect } from 'react';
import { TbCheck, TbX, TbQuestionMark } from 'react-icons/tb';
import { formatContent } from '../helpers/formatContent';

const Question = ({ questionObject, setSolved, isActive }) => {
  const [selectedOption, setSelectedOption] = useState(null);
  const [isCorrect, setIsCorrect] = useState(null);

  const handleQuestionAnswered = () => {
    setIsCorrect(selectedOption + 1 === questionObject.correctIndex);
  }

  const commonButtonStyles = {
    size: 40,
    onClick: handleQuestionAnswered,
    className: 'rounded-full p-2 absolute z-50 -right-2 -translate-y-2 cursor-pointer duration-50 text-white',
  }

  const getButton = (isCorrect) => {
    if (isCorrect === true) {
      return <TbCheck
        {...commonButtonStyles}
        className={`${commonButtonStyles.className} bg-terminal-green`}
      />
    }
    if (isCorrect === false) {
      return <TbX
        {...commonButtonStyles}
        className={`${commonButtonStyles.className} bg-terminal-red`}
      />
    }
    return <TbQuestionMark
      {...commonButtonStyles}
      className={`${commonButtonStyles.className} bg-terminal-blue`}
    />
  }

  useEffect(() => {
    if (isActive && questionObject.required) setSolved(false);
    if (isActive && isCorrect) setSolved(true);
  }, [isCorrect, isActive]);

  return (
    <>
      <strong>Question: </strong>
      <span dangerouslySetInnerHTML={{ __html: formatContent(questionObject.title)}} />
      <ol className="relative mt-2">
        {questionObject.questions.map((item, index) => (
          <li key={item} className="flex items-start">
            <input
              id={`${questionObject.title}-radio-${index}`}
              type="radio"
              name="question"
              onChange={() => setSelectedOption(index)}
              className="w-4 h-4 text-terminal-blue bg-terminal-alt focus:ring-terminal-blue"
            />
            <label
              htmlFor={`${questionObject.title}-radio-${index}`}
              className="ml-4"
              dangerouslySetInnerHTML={{ __html: formatContent(item)}}
            />
          </li>
        ))}
        {getButton(isCorrect)}
      </ol>
    </>
  );
};

export default Question;
