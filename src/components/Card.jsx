import { Link } from 'react-router-dom';
import {
  TbSeeding,
  TbTerminal2,
  TbTargetArrow,
  TbBulb,
  TbCircleCheckFilled,
} from 'react-icons/tb';

const getIcon = (type) => {
  if (type === 'Challenge') return <TbTerminal2 className="w-8 h-8 text-terminal-blue" />;
  if (type === 'Project') return <TbTargetArrow className="w-8 h-8 text-terminal-red" />;
  if (type === 'Quiz') return <TbBulb className="w-8 h-8 text-terminal-purple" />;
  return <TbSeeding className="w-8 h-8 text-terminal-green" />;
}

const getBorder = (type) => {
  if (type === 'Challenge') return 'border-blue';
  if (type === 'Project') return 'border-red';
  if (type === 'Quiz') return 'border-purple';
  return 'border-green';
}

const getText = (type) => {
  if (type === 'Challenge') return 'text-terminal-blue';
  if (type === 'Project') return 'text-terminal-red';
  if (type === 'Quiz') return 'text-terminal-purple';
  return 'text-terminal-green';
}

const getGroupHover = (type) => {
  if (type === 'Challenge') return 'group-hover:text-terminal-blue';
  if (type === 'Project') return 'group-hover:text-terminal-red';
  if (type === 'Quiz') return 'group-hover:text-terminal-purple';
  return 'group-hover:text-terminal-green';
}

const Card = ({ card }) => {
  return (
    <>
      <Link to={card.id}>
        <div className={`bg-terminal-alt relative my-4 border-2 ${getBorder(card.type)} cursor-pointer duration-100 group`}>
          <div className="px-7 py-6 flex items-top justify-start space-x-6">
            {getIcon(card.type)}
            <div className="space-y-2">
              <p className="text-header">{card.label}</p>
              <span className={`text-gray-400 ${getGroupHover(card.type)} duration-50`}>Start {card.type} →</span>
            </div>
          </div>
          {Math.random() > 0.45 ? (
            <TbCircleCheckFilled className={`absolute top-2 right-2 opacity-90 ${getText(card.type)}`} />
          ) : null}
        </div>
      </Link>
    </>
  );
};

export default Card;
