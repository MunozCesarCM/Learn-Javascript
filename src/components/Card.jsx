import { Link } from 'react-router-dom';
import { TbSeeding, TbCode, TbCircleCheckFilled } from 'react-icons/tb';

const Card = ({ card }) => {
  return (
    <>
      <Link to={card.id}>
        <div className={`relative my-4 border-2 ${card.type === 'Lesson' ? 'border-secondary' : 'border-primary'} cursor-pointer duration-100 group`}>
          <div className="px-7 py-6 flex items-top justify-start space-x-6">
            {card.type === 'Lesson' ? (
              <TbSeeding className="w-8 h-8 text-secondary" />
            ) : (
              <TbCode className="w-8 h-8 text-primary" />
            )}
            <div className="space-y-2">
              <p className="text-slate-800">{card.label}</p>
              <span className={`text-gray-400 ${card.type === 'Lesson' ? 'group-hover:text-secondary' : 'group-hover:text-primary'} duration-50`}>Start {card.type} →</span>
            </div>
          </div>
          {true ? (
            <TbCircleCheckFilled className={`absolute top-2 right-2 opacity-90 ${card.type === 'Lesson' ? 'text-secondary' : 'text-primary'}`} />
          ) : null}
        </div>
      </Link>
    </>
  );
};

export default Card;
