import CodeMirror from '@uiw/react-codemirror';
import { javascript } from '@codemirror/lang-javascript';
import { tokyoNight } from '@uiw/codemirror-theme-tokyo-night';
import { TbPlayerPlayFilled } from 'react-icons/tb';
import { formatContent } from './formatContent';

export const handleTagContent = (tag) => {
  if (tag.type === 'p') {
    return <p dangerouslySetInnerHTML={{ __html: formatContent(tag.content)}} />
  }
  if (tag.type === 'hr') {
    return <hr className='h-px bg-neutral-400 border-0' />
  }
  if (tag.type === 'snippet') {
    return <CodeMirror
      editable={false}
      value={tag.content}
      theme={tokyoNight}
      extensions={[javascript()]}
    />
  }
  if (tag.type === 'code') {
    return (
      <div className='relative'>
        <CodeMirror
          className='mb-6'
          value={tag.content}
          theme={tokyoNight}
          extensions={[javascript()]}
        />
        <TbPlayerPlayFilled size={40} className='bg-terminal-yellow rounded-full p-1.5 absolute z-50 -right-2 -translate-y-12 cursor-pointer' />
        <div className='relative bg-terminal-black text-terminal-white p-4'>
          <span className='text-slate-500'>{'>'}</span> Run the code above to see your result
          <span className='fixed text-slate-500 text-xs right-2 bottom-1 select-none'>Console</span>
        </div>
      </div>
    );
  }
  return <p className='bg-red-500'>No tag detected</p>
}
