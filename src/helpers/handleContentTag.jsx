import CodeMirror from '@uiw/react-codemirror';
import { javascript } from '@codemirror/lang-javascript';
import { tokyoNight } from '@uiw/codemirror-theme-tokyo-night';
import ExecuteCode from '../components/ExecuteCode';
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
    return <ExecuteCode code={tag.content} />
  }
  return <p className='bg-red-500'>No tag detected</p>
}
