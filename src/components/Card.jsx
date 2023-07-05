import { TbSeeding, TbCode } from 'react-icons/tb';

const Card = ({ title = 'No title', type = 'Lesson'}) => {
  return (
    <>
      <div className={`my-4 border-2 ${type === 'Lesson' ? 'border-terminal-green' : 'border-terminal-yellow'} cursor-pointer border-opacity-10 hover:border-opacity-100 duration-100 group`}>
        <div className="px-7 py-6 flex items-top justify-start space-x-6">
          {type === 'Lesson' ? (
            <TbSeeding className="w-8 h-8 text-terminal-green" />
          ) : (
            <TbCode className="w-8 h-8 text-terminal-yellow" />
          )}
          <div className="space-y-2">
            <p className="text-slate-800">{title}</p>
            <span className={`text-gray-400 ${type === 'Lesson' ? 'group-hover:text-terminal-green' : 'group-hover:text-terminal-yellow'} duration-50`}>Start {type} →</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
