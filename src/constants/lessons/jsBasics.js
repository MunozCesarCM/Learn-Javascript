export const jsBasicsContent = {
  'what-is-javascript': [
    [
      { type: 'p', content: 'JavaScript is a computer language that is commonly used to make websites more interactive and dynamic. It was created in the mid-1990s and has since become an essential part of web development.', },
    ],
    [
      { type: 'p', content: 'When you visit a website and click on buttons, see animations, or fill out forms, JavaScript is often responsible for making those things happen.', },
      { type: 'p', content: 'It allows developers to add functionalities like showing or hiding elements, validating user inputs, updating content without refreshing the page, and much more.', },
    ],
    [
      { type: 'hr', },
      { type: 'p', content: 'Think of JavaScript as the language that helps websites come to life and respond to your actions. It\'s like the behind-the-scenes magic that makes web pages interactive.', },
      { type: 'hr', },
    ],
    [
      { type: 'p', content: 'To use JavaScript, developers write lines of code using specific rules and syntax. These lines of code tell the computer what to do. Think of it as giving instructions to the computer, just like you would give instructions to a person.' },
      { type: 'p', content: 'These instructions can include things like performing calculations, displaying messages, or making decisions based on certain conditions.' },
    ],
  ],

  'getting-started': [
    [
      { type: 'p', content: 'Usually when building frontend applications, JavaScript is attached to web pages in the HTML document.', },
      { type: 'p', content: 'This involves writing JavaScript code inside the head of the HTML document. To do that, we can use the dedicated ##<script>## element.', },
    ],
    [
      { type: 'p', content: 'For example:', },
      { type: 'code', content: 'console.log("Hello World");', },
    ],
  ],


  'introduction-to-variables': [
    [
      { type: 'p', content: 'A variable is a container to store a piece of data.' },
      { type: 'p', content: 'In JavaScript, you can store a value in a variable with the assignment operator: ##=##' },
    ],
    [
      { type: 'p', content: 'For example:', },
      { type: 'snippet', content: 'let firstName = "Cesar";', },
    ],
    [
      { type: 'hr', },
      { type: 'p', content: '**@green@Note:@@** In JavaScript, you usually add a semi-colon ##;## at the end of each line, this will let JavaScript know we are done with that line.', },
      { type: 'p', content: 'Sometimes you might see people omit this semi-colon because it is not mandatory, but it is good practice to add it, plus it makes your code look neat.', },
      { type: 'hr', },
    ],
    [
      { type: 'p', content: 'In the code above, we have a container ##firstName## and this container stores a value of ##Cesar##.', },
    ],
    [
      { type: 'p', content: 'If we want to use this value, all we have to do is use the variable name:', },
      { type: 'code', content: 'let firstName = "Cesar";\n\nconsole.log(firstName);', },
    ],
  ],
};

