import { useState, useEffect } from 'react';
import CodeMirror from '@uiw/react-codemirror';
import { javascript } from '@codemirror/lang-javascript';
import { TbPlayerPlayFilled } from 'react-icons/tb';
import { getTheme } from '../helpers/getTheme';

const ExecuteCode = ({ codeObject, setSolved, isActive }) => {
  const [result, setResult] = useState('Run the code above to see your result');
  const [source, setSource] = useState(codeObject.content);

  const testCode = () => {
    const logs = [];

    // Override console.log to capture logs in the array
    // const originalConsoleLog = console.log;
    console.log = function(message) {
      logs.push(message); // Store the log message in the array
      // originalConsoleLog.apply(console, arguments); // Invoke the original console.log
    };

    let codeResult = '';
    try {
      eval(source); // Execute the code
      console.log(logs); // Output the captured logs

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
    } catch (e) {
      codeResult = `<span class="text-terminal-red">${e}</span>`;
    }

    setResult(codeResult);
  }

  useEffect(() => {
    if (isActive && codeObject.required) setSolved(false);
    if (isActive && codeObject.expected == result) {
      setSolved(true);
    }
  }, [result, isActive]);

  return (
    <div className='relative'>
      <CodeMirror
        className='mb-6'
        value={source}
        theme={getTheme()}
        extensions={[javascript()]}
        onChange={(e) => setSource(e)}
        basicSetup={{
          foldGutter: false,
          autocompletion: false,
        }}
      />
      <TbPlayerPlayFilled
        size={40}
        onClick={testCode}
        className='bg-terminal-blue text-white rounded-full p-2 absolute z-50 -right-2 -translate-y-12 cursor-pointer duration-50'
      />
      <div className='codeResult relative py-4 px-6'>
        <span dangerouslySetInnerHTML={{ __html: result}} />
        <span className='consoleText fixed text-xs right-2 bottom-5 select-none opacity-50'>Console</span>
      </div>
    </div>
  );
};

export default ExecuteCode;
