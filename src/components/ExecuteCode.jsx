import { useState } from 'react';
import CodeMirror from '@uiw/react-codemirror';
import { javascript } from '@codemirror/lang-javascript';
import { tokyoNight } from '@uiw/codemirror-theme-tokyo-night';
import { TbPlayerPlayFilled } from 'react-icons/tb';

const ExecuteCode = ({ code }) => {
  const [result, setResult] = useState('Run the code above to see your result');
  const [source, setSource] = useState(code);

  const testCode = () => {
    const logs = [];

    // Override console.log to capture logs in the array
    // const originalConsoleLog = console.log;
    console.log = function(message) {
      logs.push(message); // Store the log message in the array
      // originalConsoleLog.apply(console, arguments); // Invoke the original console.log
    };

    eval(source); // Execute the code
    console.log(logs); // Output the captured logs

    let codeResult = '';
    for (const index in logs) {

      // Set results and not arguments
      if (index < logs.length - 1) {
        codeResult += logs[index];

        // Add line break if not the last line
        if (index < logs.length - 2) {
          codeResult += '<br />';
        }
      }
    }

    setResult(codeResult);
  }

  return (
    <div className='relative'>
      <CodeMirror
        className='mb-6'
        value={source}
        theme={tokyoNight}
        extensions={[javascript()]}
        onChange={(e) => setSource(e)}
      />
      <TbPlayerPlayFilled
        size={40}
        onClick={() => testCode()}
        className='bg-terminal-yellow active:bg-yellow-500 border-2 border-yellow-50 border-opacity-0 hover:border-opacity-100 rounded-full p-1.5 absolute z-50 -right-2 -translate-y-12 cursor-pointer duration-50'
      />
      <div className='relative bg-terminal-black text-terminal-white py-4 px-6'>
        <span dangerouslySetInnerHTML={{ __html: result}} />
        <span className='fixed text-slate-500 text-xs right-2 bottom-1 select-none'>Console</span>
      </div>
    </div>
  );
};

export default ExecuteCode;
