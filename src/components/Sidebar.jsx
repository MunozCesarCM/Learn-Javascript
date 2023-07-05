import { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { SiteContext } from '../context/SiteContext';
import { IoIosArrowForward, IoIosArrowDown, IoMdPrint } from 'react-icons/io';
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
  TbX,
  TbMenu2,
} from 'react-icons/tb';
import { MdSmartButton } from 'react-icons/md';
import { RiJavascriptFill } from 'react-icons/ri';
import { sitemap } from '../constants/sitemap';

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
  const {sidebarActive, setSidebarActive} = useContext(SiteContext);
  const [caretStates, setCaretStates] = useState(Array(sitemap.length).fill(false));
  const navigate = useNavigate();

  const toggleCaret = (index) => {
    const updatedStates = [...caretStates];
    updatedStates[index] = !updatedStates[index];
    setCaretStates(updatedStates);
  };

  const handleClick = (item, index, hasChildren) => {
    if (hasChildren) toggleCaret(index);
    else navigate(`/${item}`);
  }

  return (
    <div className='relative'>
      {sidebarActive ? (
        <TbX
          className={`fixed ${sidebarActive ? 'left-[20.5rem]' : 'left-4'} top-4 text-white text-xl z-50 cursor-pointer block lg:hidden`}
          onClick={() => setSidebarActive(!sidebarActive)}
        />
      ) : (
        <TbMenu2
          className={`fixed ${sidebarActive ? 'left-[20.5rem]' : 'left-4'} top-4 text-white text-xl z-50 cursor-pointer block lg:hidden`}
          onClick={() => setSidebarActive(!sidebarActive)}
        />
      )}
      <aside className={`${sidebarActive ? 'block' : 'hidden'} lg:block bg-terminal-black text-neutral-100 h-screen w-80 pb-10 fixed z-20 overflow-y-scroll`}>
        <header className='heading py-4 px-5 h-16 flex justify-between items-center cursor-pointer'>
          <div className='flex items-center' onClick={() => navigate('/')}>
            <RiJavascriptFill className='text-terminal-yellow block w-8 h-8 text-primary' />
            <h1 className='pl-4 text-xl letter-wide font-bold'>Learn Javascript</h1>
          </div>
        </header>
        <ul className='list-none'>
          {sitemap.map((item, index) => (
            <li key={item.id}>
              <span
                className='my-2.5 mx-4 p-2 flex justify-between items-center rounded cursor-pointer select-none duration-50 hover:bg-terminal-grey'
                onClick={() => handleClick(item.id, index, item.children !== undefined)}
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
                <ul className={`list-none text-neutral-200 text-sm ${caretStates[index] ? 'visible' : 'hidden'}`}>
                  {item.children.map((child, childIndex) => (
                    <li
                      className='my-2.5 mr-4 ml-12 p-2 rounded cursor-pointer duration-50 hover:bg-terminal-grey'
                      key={childIndex}
                      onClick={() => navigate(`/${item.id}/${child.id}`)}
                    >
                      <span className={item.color}># </span>
                      {child.label}
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
      </aside>
    </div>
  );
};

export default Sidebar;
