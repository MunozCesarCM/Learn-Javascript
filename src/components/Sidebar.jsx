import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { IoIosArrowForward, IoIosArrowDown } from 'react-icons/io';
import {
  TbFileFilled,
  TbTriangleSquareCircle,
  TbArrowLeftRight,
  TbExchange,
  TbSchema,
  TbBracketsContain,
  TbCodeDots,
  TbVectorBezier,
  TbSitemap,
} from 'react-icons/tb';
import { MdSmartButton } from 'react-icons/md';
import { RiJavascriptFill } from 'react-icons/ri';

const data = [
  {
    label: 'Overview',
    color: 'text-[#FFCB6B]',
    icon: 'TbFileFilled',
  },
  {
    label: 'Javascript Basics',
    icon: 'TbTriangleSquareCircle',
    color: 'text-[#C3E88D]',
    children: [
      'Variables',
      'Booleans',
      'Arithmetic Operators',
      'Strings',
      'Arrays',
      'Objects',
    ],
  },
  {
    label: 'Control Flow',
    icon: 'TbArrowLeftRight',
    color: 'text-[#89DDFF]',
    children: [
      'Conditionals',
      'Comparison Operators',
      'Logical Operators',
      'Switch Statements',
      'Exception Handling',
    ],
  },
  {
    label: 'Loops',
    icon: 'TbExchange',
    color: 'text-[#C792EA]',
    children: [
      'for Loop',
      'while Loop',
      'do-while Loop',
      'Nested Loops',
      'Control Statements',
    ],
  },
  {
    label: 'Functions',
    icon: 'TbSchema',
    color: 'text-[#FF5370]',
    children: [
      'Introduction',
      'Parameters',
      'Function Scope',
      'Arrow Functions',
      'Closures',
    ],
  },
  {
    label: 'Arrays',
    icon: 'TbBracketsContain',
    color: 'text-[#FFCB6B]',
    children: [
      'Introduction',
      'Array Methods',
    ],
  },
  {
    label: 'Objects',
    icon: 'TbCodeDots',
    color: 'text-[#C3E88D]',
    children: [
      'Introduction',
      'Properties',
      'Constructors',
      'Prototypes',
      'ES6 Classes',
    ],
  },
  {
    label: 'Asynchronous JS',
    icon: 'TbVectorBezier',
    color: 'text-[#89DDFF]',
    children: [
      'Introduction',
      'Callback Functions',
      'Promises',
      'Async / Await',
      'Fetch API',
      'Error Handling',
    ],
  },
  {
    label: 'Javascript DOM',
    icon: 'TbSitemap',
    color: 'text-[#C792EA]',
    children: [
      'Introduction',
      'Accessing DOM Elements',
      'Modifying DOM Elements',
      'DOM Traversal',
      'Event Handling',
      'Creating DOM Elements',
    ],
  },
];

function getTitleIcon (name) {
  if ( name === 'TbFileFilled' ) return <TbFileFilled className='icon' />
  if ( name === 'TbTriangleSquareCircle' ) return <TbTriangleSquareCircle className='icon' />
  if ( name === 'TbArrowLeftRight' ) return <TbArrowLeftRight className='icon' />
  if ( name === 'TbExchange' ) return <TbExchange className='icon' />
  if ( name === 'TbSchema' ) return <TbSchema className='icon' />
  if ( name === 'TbBracketsContain' ) return <TbBracketsContain className='icon' />
  if ( name === 'TbCodeDots' ) return <TbCodeDots className='icon' />
  if ( name === 'TbVectorBezier' ) return <TbVectorBezier className='icon' />
  if ( name === 'TbSitemap' ) return <TbSitemap className='icon' />
  return <MdSmartButton className='icon' />
}

const Sidebar = () => {
  const [caretStates, setCaretStates] = useState(Array(data.length).fill(false));
  const navigate = useNavigate();

  const toggleCaret = (index) => {
    const updatedStates = [...caretStates];
    updatedStates[index] = !updatedStates[index];
    setCaretStates(updatedStates);
  };

  const handleClick = (item, index, hasChildren) => {
    if (hasChildren) toggleCaret(index);
    else navigate(`/${item.toLowerCase().replaceAll(' ', '-')}`);
  }

  return (
    <aside className='bg-[#0F111A] text-white h-screen w-72 pb-10 fixed z-20 overflow-y-scroll'>
      <header className='heading py-4 px-5 h-16 flex justify-between items-center cursor-pointer'>
        <div className='flex items-center' onClick={() => navigate('/')}>
          <RiJavascriptFill className='text-[#FFCB6B] block w-8 h-8 text-primary' />
          <h1 className='pl-4 text-xl letter-wide'>Learn Javascript</h1>
        </div>
      </header>
      <ul className='list-none'>
        {data.map((item, index) => (
          <li key={index}>
            <span
              className='my-1 mx-4 p-2 flex justify-between items-center rounded cursor-pointer select-none duration-50 hover:bg-[#313855]'
              onClick={() => handleClick(item.label, index, item.children !== undefined)}
            >
              <div className='flex items-center'>
                <span className={item.color}>
                {getTitleIcon(item.icon)}
                </span>
                <span className='ml-4'>
                  {item.label}
                </span>
              </div>
              {item.children && item.children.length > 0 && caretStates[index] ? (
                <IoIosArrowDown />
              ) : (
                  item.children && item.children.length > 0 && <IoIosArrowForward />
                )}
            </span>
            {item.children && (
              <ul className={`list-none text-sm ${caretStates[index] ? 'visible' : 'hidden'}`}>
                {item.children.map((child, childIndex) => (
                  <li
                    className='my-1 mr-4 ml-12 p-2 rounded cursor-pointer duration-50 hover:bg-[#313855]'
                    key={childIndex}
                    onClick={() => navigate(`/${item.label.toLowerCase().replaceAll(' ', '-')}/${child.toLowerCase().replaceAll(' ', '-')}`)}
                  >
                    # {child}
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default Sidebar;
