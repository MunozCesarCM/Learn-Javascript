import { TbQuestionMark } from 'react-icons/tb';

const Question = ({ questionObject, setSolved, isActive }) => {
  console.log(questionObject, isActive);

  return (
    <>
      <strong>{questionObject.title}</strong>
      <ol className="relative">
        {questionObject.questions.map((item, index) => (
          <li key={item} className="flex items-center">
            <input
              id={`default-radio-${index}`}
              type="radio"
              name="default-radio"
              class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500"
            />
            <label for={`default-radio-${index}`} class="ml-4">{item}</label>
          </li>
        ))}
        <TbQuestionMark
          size={40}
          className='bg-terminal-blue text-white rounded-full p-2 absolute z-50 -right-2 -translate-y-2 cursor-pointer duration-50'
        />
      </ol>
    </>
  );
};

export default Question;
