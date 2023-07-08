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
  'basic-grammar': [
    [
      { type: 'p', content: 'Javascript is **case-sensitive** and uses the Unicode character set. For example, the word Früh could be used as a variable name.', },
      { type: 'snippet', content: 'const Früh = "foobar";', },
    ],
    [
      { type: 'p', content: 'But, the variable ##früh## is not the same as ##Früh## because Javascript is case sensitive.', },
    ],
    [
      { type: 'hr', },
      { type: 'p', content: 'In Javascript, instructions are called statements and are separated by semicolons ##;## .', },
      { type: 'p', content: 'A semicolon is not necessary after a statement if it is written on its own line. But if more than one statement on a line is desired, then they **must** be separated by semicolons.', },
    ],
    [
      { type: 'p', content: 'It is considered best practice, however, to always write a semicolon after a statement, even when it is not strictly needed. This practice reduces the chances of bugs getting into the code.', },
    ],
    [
      { type: 'h2', content: 'Comments', },
      { type: 'p', content: 'The syntax of comments is the same as in C++ and in many other languages:', },
      { type: 'snippet', content: '// a one line comment\n\n/* this is a longer,\n * multi-line comment\n */', },
    ],
    [
      { type: 'p', content: 'You can\'t nest block comments. This often happens when you accidentally include a ##*/## sequence in your comment, which will terminate the comment:', },
      { type: 'snippet', content: '/* You can\'t, however, /* nest comments */ SyntaxError */', },
    ],
    [
      { type: 'p', content: 'In this case, you need to break up the ##*/## pattern. For example, by inserting a backslash:', },
      { type: 'snippet', content: '/* You can /* nest comments *\\/ by escaping slashes */', },
    ],
    [
      { type: 'p', content: 'Comments behave like whitespace, and are discarded during script execution.', },
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
      { type: 'p', content: 'In the code above, we have a container ##firstName## and this container stores a value of ##Cesar##.', },
      { type: 'p', content: 'If we want to use this value, all we have to do is use the variable name:', },
    ],
    [
      { type: 'code', content: 'let firstName = "Cesar";\n\nconsole.log(firstName);', required: false, },
      { type: 'p', content: 'You can use this variable multiple times in your code, and anytime Javascript sees the variable ##firstName##, it\'ll replace it with the value we assigned to it.', },
    ],
    [
      { type: 'p', content: 'This is extremely useful because if you want to change the value of the variable, you only have to do it in one place.', },
    ],
    [
      { type: 'hr', },
      { type: 'p', content: '**@blue@Example:@@** If we change the variable value from ##Cesar## to ##John##, everywhere we referenced the variable will automatically get changed as well.', },
      { type: 'code', content: 'let firstName = "John";\n\nconsole.log(firstName);\nconsole.log(firstName);\nconsole.log(firstName);', required: false, },
    ],
  ],
  'naming-conventions': [
    [
      { type: 'p', content: 'Now we have know what a variable is, we need to understand the rules and conventions for naming variables because we shouldn\'t use random names for variables.', },
      { type: 'p', content: 'Variable names are called identifiers and can be short names (like ##x## and ##y##) or more descriptive ( ##firstName##, ##countNumber##, ##selectMainUser##).', },
    ],
    [
      { type: 'p', content: 'There are also some strict rules in JavaScript on how you can name variables:', },
      { type: 'p', content: 'A Javascript variable usually starts with a letter, underscore ##_##, or dollar sign ##$##. Subsequent characters can also be digits ##0 – 9##.',}
    ],
    [
      { type: 'p', content: 'Because JavaScript is case sensitive, letters include the characters A through Z (uppercase) as well as ##a## through ##z## (lowercase).', },
    ],
    [
      { type: 'hr', },
      { type: 'p', content: 'Another rule is to not start a variable name with an uppercase letter.', },
      { type: 'snippet', content: 'let Person = "Cesar";', },
      { type: 'p', content: 'Though this is not illegal to do, it is just that upper case letters are reserved for a specific use case in Javascript Object Oriented Programming.', },
    ],
    [
      { type: 'p', content: 'Starting a variable with uppercase are also reserved for constants that we know will never change',},
      { type: 'snippet', content: 'let PI = 3.1415;', },
      { type: 'p', content: 'We know the value of PI will never change, which makes it a constant and the convention for writing constants is using uppercase.',},
    ],
    [
      { type: 'hr', },
      { type: 'p', content: 'Writing descriptive variable names When writing Javascript, it is good practice to write our variable names are descriptive.', },
      { type: 'p', content: 'This helps the code to be more readable and will be easy to understand what the variable does just by reading the name. For example:', },
    ],
    [
      { type: 'snippet', content: 'let myFirstJob = "Programmer";\nlet myCurrentJob = "Teacher";', },
      { type: 'p', content: 'is more descriptive than:',},
      { type: 'snippet', content: 'let job1 = "Programmer";\nlet job2 = "Teacher";', },
    ],
  ],
  'assign-value-to-variable': [
    [
      { type: 'p', content: '**Challenge:** change this code so the result is ##Cesar##:', },
      { type: 'code', content: 'let firstName = "";\n\nconsole.log(firstName);', required: true, expected: 'Cesar' },
    ],
  ],
  'declaring-variables': [
    [
      { type: 'p', content: 'You can declare a variable in two ways:', },
      { type: 'p', content: '* With the keyword ##var##. For example, ##var x = 42##.' },
      { type: 'p', content: '* With the keyword ##const## or ##let##. For example, ##let y = 13##.' },
    ],
    [
      { type: 'p', content: '##let## and ##const## were both introduced in ES6 so they are modern Javascript while the ##var## keyword is the old way of declaring variables.', },
      { type: 'p', content: 'Let\'s learn the differences and which one to use in which situation:', },
    ],
    [
      { type: 'h2', content: 'When to use Javascript var?', },
    ],
  ],

};

