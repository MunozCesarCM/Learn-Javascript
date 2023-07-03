import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { SiAbstract } from 'react-icons/si';
import { IoIosArrowForward, IoIosArrowDown } from 'react-icons/io';
import {
  TbFileFilled,
} from 'react-icons/tb';
import { MdSmartButton } from 'react-icons/md';

const data = [
  {
    label: 'Overview',
    icon: 'TbFileFilled',
  },
  {
    label: 'Fundamentals Part 1',
    icon: 'TbTypography',
    children: [
      'Introduction',
      'Hello World',
      'Javascript Linking',
      'Variables',
      'Data Types',
      'Let, Const, Var',
      'Basic Operators',
      'Operator Precedence',
      'Coding Challenge 1',
      'Strings, Template Literals',
      'if else statements',
      'Coding Challenge 2',
      'Type Conversion',
      'Truthy Falsy Values',
      'Equality Operators',
      'Boolean Logic',
      'Logical Operators',
      'Coding Challenge 3',
      'Switch Statement',
      'Statements Expressions',
      'Ternary Operator',
      'Coding Challenge 4',
    ],
  },
];

function getTitleIcon (name) {
  if ( name === 'TbFileFilled' ) return <TbFileFilled className='icon' />
  return <MdSmartButton className='icon' />
}

const Overview = () => {
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
    <aside className='h-screen w-72 pb-10 fixed z-20 overflow-y-scroll'>
      <header className='heading py-4 px-5 h-16 flex justify-between items-center cursor-pointer'>
        <div className='flex items-center' onClick={() => navigate('/')}>
          <SiAbstract className='block w-8 h-8 text-primary' />
          <h1 className='pl-4 text-xl letter-wide'>Flexcore</h1>
        </div>
      </header>
      <ul className='list-none'>
        {data.map((item, index) => (
          <li key={index}>
            <span
              className='my-1 mx-4 p-2 flex justify-between items-center rounded cursor-pointer select-none duration-50 hover:bg-blue-50'
              onClick={() => handleClick(item.label, index, item.children !== undefined)}
            >
              <div className='flex items-center'>
                {getTitleIcon(item.icon)}
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
              <ul className={`list-none ${caretStates[index] ? 'visible' : 'hidden'}`}>
                {item.children.map((child, childIndex) => (
                  <li
                    className='my-1 mr-4 ml-12 p-2 rounded cursor-pointer duration-50 hover:bg-blue-50'
                    key={childIndex}
                    onClick={() => navigate(`/${item.label.toLowerCase().replaceAll(' ', '-')}/${child.toLowerCase().replaceAll(' ', '-')}`)}
                  >
                    {child}
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

export default Overview;
