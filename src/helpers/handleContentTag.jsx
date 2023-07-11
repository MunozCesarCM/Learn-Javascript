import CodeMirror from '@uiw/react-codemirror';
import { javascript } from '@codemirror/lang-javascript';
import ExecuteCode from '../components/ExecuteCode';
import { formatContent } from './formatContent';
import { getTheme } from '../helpers/getTheme';

export const handleContentTag = (tag, setSolved, isActive) => {

  if (tag.type === 'h2') {
    return <h2 dangerouslySetInnerHTML={{ __html: formatContent(tag.content)}} />
  }
  if (tag.type === 'h3') {
    return <h3 dangerouslySetInnerHTML={{ __html: formatContent(tag.content)}} />
  }
  if (tag.type === 'p') {
    return <p dangerouslySetInnerHTML={{ __html: formatContent(tag.content)}} />
  }
  if (tag.type === 'ul') {
    return (
      <ul>
        {tag.children.map((item, index) => (
          <li key={index} dangerouslySetInnerHTML={{ __html: formatContent(item)}} />
        ))}
      </ul>
    );
  }
  if (tag.type === 'hr') {
    return <hr className='h-px bg-neutral-400 opacity-20 border-0' />
  }
  if (tag.type === 'snippet') {
    return <CodeMirror
      editable={false}
      value={tag.content}
      theme={getTheme()}
      extensions={[javascript()]}
      basicSetup={{
        foldGutter: false,
        highlightActiveLine: false,
        highlightActiveLineGutter: false,
      }}
    />
  }
  if (tag.type === 'code') {
    return <ExecuteCode
      codeObject={tag}
      setSolved={setSolved}
      isActive={isActive}
    />
  }
  return <p className='bg-red-500'>No tag detected</p>
}
