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
      { type: 'p', content: 'JavaScript is **case-sensitive** and uses the Unicode character set. For example, the word Früh could be used as a variable name.', },
      { type: 'snippet', content: 'const Früh = "foobar";', },
    ],
    [
      { type: 'p', content: 'But, the variable ##früh## is not the same as ##Früh## because JavaScript is case sensitive.', },
    ],
    [
      { type: 'hr', },
      { type: 'p', content: 'In JavaScript, instructions are called statements and are separated by semicolons ##;## .', },
      { type: 'p', content: 'A semicolon is not necessary after a statement if it is written on its own line. But if more than one statement on a line is desired, then they **must** be separated by semicolons.', },
    ],
    [
      { type: 'p', content: 'It is considered best practice, however, to always write a semicolon after a statement, even when it is not strictly needed. This practice reduces the chances of bugs getting into the code.', },
    ],
  ],
  'hello-world': [
    [
      { type: 'p', content: 'The “Hello, World!” program is a classic and time-honored tradition in computer programming.' },
      { type: 'p', content: 'To write the "Hello World" program, we will be using ##console.log()##.' },
    ],
    [
      { type: 'p', content: 'All modern browsers have a web console for debugging. The console.log() method is used to write messages to these consoles. For example:' },
      { type: 'code', content: 'console.log("Hello World");', required: false, },
    ],
  ],
  'comments': [
    [
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
  'write-hello-world': [
    [
      { type: 'p', content: '**Challenge:** change this code so the result is ##Hello World##:', },
      { type: 'code', content: 'console.log();', required: true, expected: 'Hello World', },
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
      { type: 'p', content: 'You can use this variable multiple times in your code, and anytime JavaScript sees the variable ##firstName##, it\'ll replace it with the value we assigned to it.', },
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
      { type: 'p', content: 'A JavaScript variable usually starts with a letter, underscore ##_##, or dollar sign ##$##. Subsequent characters can also be digits ##0 – 9##.',}
    ],
    [
      { type: 'p', content: 'Because JavaScript is case sensitive, letters include the characters A through Z (uppercase) as well as ##a## through ##z## (lowercase).', },
    ],
    [
      { type: 'hr', },
      { type: 'p', content: 'Another rule is to not start a variable name with an uppercase letter.', },
      { type: 'snippet', content: 'let Person = "Cesar";', },
      { type: 'p', content: 'Though this is not illegal to do, it is just that upper case letters are reserved for a specific use case in JavaScript Object Oriented Programming.', },
    ],
    [
      { type: 'p', content: 'Starting a variable with uppercase are also reserved for constants that we know will never change',},
      { type: 'snippet', content: 'let PI = 3.14;', },
      { type: 'p', content: 'We know the value of PI will never change, which makes it a constant and the convention for writing constants is using uppercase.',},
    ],
    [
      { type: 'hr', },
      { type: 'p', content: 'Writing descriptive variable names When writing JavaScript, it is good practice to write our variable names are descriptive.', },
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
      { type: 'ul', children:[
        'With the keyword ##const## or ##let##. For example, ##let y = 13##.',
        'With the keyword ##var##. For example, ##var x = 42##.',
      ]},
    ],
    [
      { type: 'p', content: '##let## and ##const## were both introduced in ES6 so they are modern JavaScript while the ##var## keyword is the old way of declaring variables.', },
      { type: 'p', content: 'Let\'s learn the differences and which one to use in which situation:', },
    ],
    [
      { type: 'h2', content: 'When to use JavaScript keywords?', },
      { type: 'p', content: 'Use the ##let## keyword to declare variables that can change later. For example:', },
      { type: 'snippet', content: 'let age = 50;\n\nage = 51;', },
    ],
    [
      { type: 'p', content: 'In the code above, we have a variable with a value of 50 which was later changed to 51. This is known as re-assigning a variable or mutating a variable.', },
      { type: 'p', content: 'So when we need to mutate a variable, ##let## is the perfect use case. This also counts in declaring empty variables.', },
    ],
    [
      { type: 'p', content: 'Declaring empty variables can sometimes be useful in a case where we want to declare all the variables at the top of the file but only assign actual values to them later in the program based on some condition or issue:', },
      { type: 'snippet', content: 'let age;\n\nage = 30;', },
    ],
    [
      { type: 'hr', },
      { type: 'p', content: 'The ##const## (constant) keyword is used to declare variables that are not supposed to change at any point in the future.', },
      { type: 'snippet', content: 'const PI = 3.14;', },
      { type: 'p', content: 'In math, we know that the value of ##PI## is 3.14... so we use ##const## to declare this variable because it is a constant that cannot be changed.', },
    ],
    [
      { type: 'p', content: 'If we try to use the const keyword to declare a mutable variable, it will give an error in our code. Like so:', },
      { type: 'code', content: 'const dateOfBirth = 1957;\n\ndateOfBirth = 1958;', required: false, },
    ],
    [
      { type: 'p', content: 'If we run this code, we will get an error because the ##const## keywords cannot be mutated or reassigned a new value.', },
      { type: 'p', content: 'Now the fact that variables created with the ##const## keywords are immutable, also means that it can not be used to assign empty variables:', },
      { type: 'snippet', content: 'const job;', },
    ],
    [
      { type: 'h3', content: '##let## or ##const##', },
      { type: 'p', content: 'Now having talked about the differences between the ##let## and ##const## keywords the question is, which one should we use and in what situation?', },
      { type: 'p', content: 'It is best practice to use the ##const## keyword by default and only use let when you are really sure that the variable needs to change at some point in the future.', },
    ],
    [
      { type: 'p', content: 'The reason that makes this a good practice is that we want to have as little variable mutations or changes as possible because changing variables introduces a potential to create bugs.', },
      { type: 'p', content: 'So by default, always use ##const## and if you think the variable will have to change in the future, use ##let##.', },
    ],
    [
      { type: 'hr', },
      { type: 'p', content: 'In the next lesson we will go over the keyword ##var##.', },
    ],
  ],
  'declaring-variable': [
    [
      { type: 'p', content: '**Challenge:** declare a variable so the result is ##30##:', },
      { type: 'code', content: '\n\nconsole.log(myAge);', required: true, expected: '30' },
    ],
  ],
  'var-keyword': [
    [
      { type: 'p', content: 'This was the old way of declaring variables before (ES6) was introduced in 2015.', },
      { type: 'p', content: 'Even though it is not recommended to use the ##var## keyword in this time, it is still good to understand how it works for legacy reasons because you may see this in older codebases or tutorials online.', },
    ],
    [
      { type: 'code', content: 'var job = "Programmer";\n\njob = "Technical Writer";\nconsole.log(job);', required: false },
      { type: 'p', content: 'If we run this code, the result will give us ##Technical Writer## because the ##var## keywords accepts mutating of variables', },
    ],
    [
      { type: 'p', content: 'The ##var## keyword might look pretty similar to let on the surface but they are actually very different under the hood which we will dive deeper into in further sections.', },
      { type: 'hr', },
      { type: 'p', content: 'It\'s good to know that you can use a variable without using one of the keywords we\'ve talked about:', },
    ],
    [
      { type: 'code', content: 'name = "Cesar";\n\nconsole.log(name);', required: false },
    ],
    [
      { type: 'p', content: 'If we run this code, it will give us the name value of ##Cesar##. In as much as this works, it is a terrible idea and not a good practice.', },
      { type: 'p', content: 'You should always declare your variables properly using the ##let##, ##const## or ##var## keywords.', },
    ],
  ],

  'types-overview': [
    [
      { type: 'p', content: 'In every programming language, values can have different types depending on the type of data we want them to hold.', },
      { type: 'p', content: 'In JavaScript, every value is either an **object** or **primitive** data type.', },
    ],
    [
      { type: 'p', content: 'The latest ECMAScript standard defines eight data types.', },
      { type: 'p', content: 'Seven data types that are primitives:', },
    ],
    [
      { type: 'ul', children:[
        '@green@String@@',
        '@green@Number@@',
        '@green@Boolean@@',
        '@green@undefined@@',
        '@green@null@@',
        '@green@Symbol@@',
        '@green@BigInt@@',
      ]},
      { type: 'p', content: 'and the @green@Object@@ data type.', },
    ],
    [
      { type: 'hr', },
      { type: 'p', content: 'JavaScript is a **dynamically typed** language. It means that a variable doesn\’t associate with a type. In other words, a variable can hold a value of different types. For example:', },
      { type: 'snippet', content: 'let variable = 123; // variable is a number\nvariable = false;   // variable is now a boolean\nvariable = "Cesar"; // variable is now a string', },
    ],
    [
      { type: 'p', content: 'To get the current type of the value that the variable stores, you use the typeof operator:', },
      { type: 'code', content: 'let variable = 123;\nconsole.log(typeof(variable)); // "number"\n\nvariable = false;\nconsole.log(typeof(variable)); // "boolean"\n\nvariable = "Cesar";\nconsole.log(typeof(variable)); // "string"', required: false },
    ],
  ],
  'types-of-numbers': [
    [
      { type: 'p', content: 'In programming, even the decimal number system that we all know so well is more complicated than you might think.', },
      { type: 'p', content: 'We use different terms to describe different types of decimal numbers:', },
    ],
    [
      { type: 'ul', children:[
        '**Integers** are floating-point numbers without a fraction. They can either be positive or negative (##10##, ##400##, ##-50##).',
        '**Floating point numbers** (floats) have decimal points and decimal places (##12.5##, ##-26.3301##).',
        '**Doubles** are a specific type of floating point number that have greater precision than standard floating point numbers.',
      ]},
    ],
    [
      { type: 'p', content: 'We even have different types of number systems. Decimal is base 10 (meaning it uses ##0–9## in each column), but we also have things like:', },
      { type: 'ul', children:[
        '**Binary** — The lowest level language of computers; ##0## and ##1##.',
        '**Octal** — Base 8, uses ##0-7## in each column.',
        '**Hexadecimal** — Base 16, uses ##0-9## and then ##A-F## in each column. You may have encountered these numbers when setting colors in CSS.',
      ]},
    ],
    [
      { type: 'hr', },
      { type: 'p', content: 'Before you start to get worried about your brain melting, stop right there!', },
      { type: 'p', content: 'For a start, we are just going to stick to decimal numbers throughout this course; you\'ll rarely come across a need to start thinking about other types, if ever.', },
    ],
    [
      { type: 'p', content: 'The second bit of good news is that unlike some other programming languages, JavaScript only has one data type for numbers, both integers and decimals (##number##).', },
      { type: 'p', content: 'This means that whatever type of numbers you are dealing with in JavaScript, you handle them in exactly the same way.', },
    ],
  ],
  'number-type': [
    [
      { type: 'p', content: 'JavaScript uses the ##number## type to represent both integer and floating-point numbers.', },
      { type: 'p', content: 'The following statement declares a variable and initializes its value with an integer:', },
      { type: 'snippet', content: 'let myNumber = 100;', },
    ],
    [
      { type: 'p', content: 'To represent a floating-point number, you include a decimal point followed by at least one number. For example:', },
      { type: 'snippet', content: 'let myFloat = 100.05;', },
    ],
    [
      { type: 'hr', },
      { type: 'p', content: 'JavaScript automatically converts a floating-point number into an integer if the number appears to be a whole number.', },
      { type: 'p', content: 'The reason is that JavaScript always wants to use less memory since a floating-point value uses twice as much memory as an integer:', },
      { type: 'snippet', content: 'let price = 200.00 // interpreted as an integer 200', },
    ],
    [
      { type: 'hr', },
      { type: 'p', content: 'To get the range of the number type, you use ##Number.MIN_VALUE## and ##Number.MAX_VALUE##. For example:', },
      { type: 'code', content: 'console.log(Number.MAX_VALUE); // 1.7976931348623157e+308\nconsole.log(Number.MIN_VALUE); // 5e-324', required: false, },
    ],
    [
      { type: 'p', content: 'Also, you can use ##Infinity## and ##-Infinity## to represent the infinite number. For example:', },
      { type: 'code', content: 'console.log(Infinity);\nconsole.log(-Infinity);', required: false, },
    ],
    [
      { type: 'h2', content: '##NaN##', },
      { type: 'p', content: '##NaN## stands for @red@Not a Number@@. It is a special numeric value that indicates an invalid number. For example, the division of a string by a number returns ##NaN##:', },
      { type: 'code', content: 'console.log("string" / 2); // NaN', required: false, },
    ],
    [
      { type: 'p', content: '##NaN## has two special characteristics:', },
      { type: 'ul', children:[
        'Any operation with ##NaN## returns ##NaN##',
        '##NaN## does not equal any value, including itself',
      ]},
    ],
    [
      { type: 'p', content: 'Here are some examples:', },
      { type: 'code', content: 'console.log(NaN / 2); // NaN\nconsole.log(NaN == NaN); // false', required: false, },
    ],
  ],
  'reassign-number': [
    [
      { type: 'p', content: '**Challenge:** assign a value to the variable ##number##. The code does not work the way it is. Fix the second line to the result is ##2##.', },
      { type: 'code', content: 'let number = 1;\nlet number = 2; // Fix me\n\nconsole.log(number);', required: true, expected: '2' },
    ],
  ],
  'string-type': [
    [
      { type: 'p', content: 'In JavaScript, a string is a sequence of zero or more characters. A string literal begins and ends with either a single quote ##\'## or a double quote ##"##.', },
    ],
    [
      { type: 'p', content: 'A string that begins with a double quote must end with a double quote. Likewise, a string that begins with a single quote must also end with a single quote:', },
      { type: 'snippet', content: 'let greeting = \'Hello\';\nlet message = "Bye";', },
    ],
    [
      { type: 'p', content: 'If you want to single quote or double quotes in a literal string, you need to use the backslash to escape it. For example:', },
      { type: 'snippet', content: 'let message = \'I\\\'m also a valid string\';', },
    ],
    [
      { type: 'h2', content: 'Template Literal', },
      { type: 'p', content: 'String literals can be specified using single or double quotes, which are treated identically, or using the backtick character ##`##.', },
      { type: 'p', content: 'This last form specifies a template literal, allowing for multi-line strings:', },
      { type: 'code', content: 'const sentence = `Hello\nEveryone!\nNice to meet you.`;\n\nconsole.log(sentence);', required: false },
    ],
  ],
  'modify-string': [
    [
      { type: 'p', content: '**Challenge:** modify the string so the result is ##I\'m Happy## while using single quotes ##\'##.', },
      { type: 'code', content: 'const message = "I\'m Happy";\n\nconsole.log(message)', required: true, expected: 'I\'m Happy' },
    ],
  ],
  'creating-and-logging': [
    [
      { type: 'p', content: '**Challenge:** create and declare a variable so the result is ##I Love JS##:', },
      { type: 'code', content: '', required: true, expected: 'I Love JS' },
    ],
  ],
  'boolean-type': [
    [
      { type: 'p', content: 'The ##boolean## type has two values: ##true## and ##false##, both written in lowercase.', },
      { type: 'code', content: 'const completed = true;\n\nconsole.log(completed); // true\nconsole.log(typeof completed); // boolean', required: false, },
    ],
    [
      { type: 'p', content: 'Booleans are mostly used in making decisions and are one of the main types you\'ll use the most.', },
    ],
  ],
  'assign-boolean': [
    [
      { type: 'p', content: '**Challenge:** create and declare a ##boolean## so the result is ##true##:', },
      { type: 'code', content: '', required: true, expected: 'true' },
    ],
  ],
  'undefined-type': [
    [
      { type: 'p', content: 'The ##undefined## only has one value: ##undefined##.', },
      { type: 'p', content: 'By default, when a variable is declared but not initialized, it is assigned the value of ##undefined##:', },
      { type: 'code', content: 'let name;\n\nconsole.log(name); // undefined\nconsole.log(typeof name); // undefined', required: false, },
    ],
    [
      { type: 'p', content: 'In the example, ##name## is a variable. Since ##name## hasn\'t been initialized, it is assigned the value of ##undefined##.', },
      { type: 'p', content: 'It\'s important to note that the ##typeof## operator also returns ##undefined## when you call it on a variable that hasn\'t been declared:', },
      { type: 'code', content: 'console.log(typeof undeclaredVariable); // undefined', required: false, },
    ],
  ],
  'null-type': [
    [
      { type: 'p', content: 'The ##null## type is the second data type that also only has one value: ##null##:', },
      { type: 'code', content: 'let obj = null;\n\nconsole.log(obj); // null\nconsole.log(typeof obj); // object', required: false, },
    ],
    [
      { type: 'hr', },
      { type: 'p', content: '##typeof null## returns an object. This is a known bug in JavaScript.', },
      { type: 'p', content: 'A proposal to fix this was proposed but rejected. The reason was that the fix would break a lot of existing sites.', },
    ],
    [
      { type: 'hr', },
      { type: 'p', content: 'A JavaScript ##null is equal to ##undefined##:', },
      { type: 'code', content: 'console.log(null == undefined); // true', },
    ],
  ],
  'symbol-type': [
    [
      { type: 'p', content: 'JavaScript added the ##symbol## data type in ES6. This data type means that you can have an unique value that cannot be changed.', },
      { type: 'p', content: 'Note that this data type is not useful to us for now and you\'ll learn more about it in the advanced symbol.', },
      { type: 'code', content: 'const symbol1 = Symbol(); // create first symbol\nconst symbol2 = Symbol(); // create second symbol\n\nconsole.log(symbol1 == symbol2); // false', },
    ],
  ],
  'bigint-type': [
    [
      { type: 'p', content: 'The ##bigint## type represents whole numbers larger that. To create a ##bigint## number, you append the letter ##n## at the end of the number:', },
      { type: 'code', content: 'let largeNumber = 9007199254740991n\n\nconsole.log(typeof largeNumber); // bigint', },
      { type: 'p', content: 'Again, this data type is not useful for the moment and you\'ll learn more about it in the advanced bigint section.', },
    ],
  ],
  'object-type': [
    [
      { type: 'p', content: 'In JavaScript, an object is a collection of properties, where each property is defined with a ##key## and a ##value##:', },
      { type: 'snippet', content: 'let person = {\n  firstName: "Cesar",\n  age: 40,\n};', },
      { type: 'p', content: 'Once again, this data type is not useful for the moment and you\'ll learn more about it in the object section.', },
    ],
  ],

  'arithmetic-operators': [
    [
      { type: 'p', content: 'Arithmetic operators are the basic operators that we use to do math in JavaScript:', },
    ],
    [
      { type: 'h2', content: 'Addition ##+##', },
      { type: 'p', content: 'Adds two numbers together.', },
      { type: 'code', content: 'console.log(2 + 2);', },
    ],
    [
      { type: 'h2', content: 'Subtraction ##-##', },
      { type: 'p', content: 'Subtracts the right number from the left.', },
      { type: 'code', content: 'console.log(20 - 15);', },
    ],
    [
      { type: 'h2', content: 'Multiplication ##*##', },
      { type: 'p', content: 'Multiplies two numbers together.', },
      { type: 'code', content: 'console.log(3 * 7);', },
    ],
    [
      { type: 'h2', content: 'Division ##/##', },
      { type: 'p', content: 'Divides the left number by the right.', },
      { type: 'code', content: 'console.log(10 / 5);', },
    ],
    [
      { type: 'h2', content: 'Remainder ##%##', },
      { type: 'p', content: '(sometimes called modulo) Returns the remainder left over after you\'ve divided the left number into a number of integer portions equal to the right number.', },
      { type: 'code', content: 'console.log(8 % 3);', },
      { type: 'p', content: 'This returns ##2##, as three goes into 8 twice, leaving 2 left over.', },
    ],
    [
      { type: 'h2', content: 'Exponent ##**##', },
      { type: 'p', content: 'Raises a ##base## number to the ##exponent## power. The ##base## number is multiplied by itself ##exponent## times.', },
      { type: 'code', content: 'console.log(5 ** 3);', },
      { type: 'p', content: 'This returns ##125##, which is the same as ##5 * 5 * 5##', },
    ],
    [
      { type: 'hr', },
      { type: 'p', content: 'You may sometimes see exponents expressed using the older ##Math.pow()## method, which works in a very similar way.', },
      { type: 'p', content: 'For example, in ##Math.pow(7, 3)##, ##7## is the base and ##3## is the exponent, so the result of the expression is ##343##. ##Math.pow(7, 3)## is equivalent to ##7 ** 3##.', },
    ],
  ],
  'operator-precedence': [
    [
      { type: 'p', content: 'Let\'s look at the following example:', },
      { type: 'code', content: 'console.log(50 + 10 / 8 + 2);', },
      { type: 'p', content: 'As a human being, you may read this as ##50 + 10 = 60##, then ##8 + 2 = 10##, and finally ##60 / 10 = 6##.', },
      { type: 'p', content: 'But the browser does ##10 / 8 = 1.25##, then ##50 + 1.25 + 2 = 53.25##.', },
    ],
    [
      { type: 'hr', },
      { type: 'p', content: 'This is because of operator precedence — some operators are applied before others when calculating the result of a calculation.', },
      { type: 'p', content: 'Operator precedence in JavaScript is the same as is taught in math classes in school — multiply and divide are always done first, then add and subtract.', },
      { type: 'p', content: 'The calculation is always evaluated from left to right.', },
    ],
    [
      { type: 'hr', },
      { type: 'p', content: 'If you want to override operator precedence, you can put parentheses around the parts that you want to be explicitly dealt with first. So to get a result of 6, we could do this:', },
      { type: 'code', content: 'console.log((50 + 10) / (8 + 2));', },
    ],
  ],
  'arithmetic-calculations': [
    [
      { type: 'p', content: '**Challenge:** change the value of the variables so the final result is ##55##:', },
      { type: 'code', content: 'const num1 = 12;\nconst num2 = 20;\n\nconsole.log(num1 + num1 - num2);', required: true, expected: '55' },
    ],
    [
      { type: 'p', content: '**Challenge:** change the value of the variables so the final result is ##10##:', },
      { type: 'code', content: 'const num1 = 5;\nconst num2 = 10;\n\nconsole.log((num1 * 2) / num2);', required: true, expected: '10' },
    ],
    [
      { type: 'p', content: '**Challenge:** change the value of the variables so the final result is ##3##:', },
      { type: 'code', content: 'const num1 = 15;\nconst num2 = 5;\n\nconsole.log(num1 % num2);', required: true, expected: '3' },
    ],
    [
      { type: 'p', content: '**Challenge:** change the value of the variables so the final result is ##16##:', },
      { type: 'code', content: 'const num1 = 3;\nconst num2 = 4;\n\nconsole.log(num1 ** num2);', required: true, expected: '16' },
    ],
  ],
  'increment-decrement-operators': [
    [
      { type: 'p', content: 'Sometimes you\'ll want to repeatedly add or subtract one to or from a numeric variable value. This can be conveniently done using the increment ##++## and decrement ##--## operators:', },
      { type: 'code', content: 'let number = 10;\nnumber++;\n\nconsole.log(number);', required: false, },
    ],
    [
      { type: 'p', content: 'Note that you can\'t apply these directly to a number, which might seem strange, but we are assigning a variable a new updated value, not operating on the value itself. The following will return an error:', },
      { type: 'code', content: 'console.log(5++);', required: false, },
    ],
    [
      { type: 'p', content: 'So, you can only increment an existing variable. Try this:', },
      { type: 'code', content: 'let number = 4;\n\nconsole.log(number++);', required: false, },
    ],
    [
      { type: 'p', content: 'When you do this, you\'ll see a value of 4 returned — this is because the browser returns the current value, then increments the variable.', },
      { type: 'p', content: 'You can see that it\'s been incremented if you log the variable value again:', },
      { type: 'code', content: 'let number = 4;\n\nconsole.log(number++);\nconsole.log(number);', required: false, },
    ],
    [
      { type: 'p', content: 'The same is true of ##--## :', },
      { type: 'code', content: 'let number = 4;\n\nconsole.log(number--);\nconsole.log(number);', required: false, },
    ],
    [
      { type: 'hr', },
      { type: 'p', content: 'You can make the browser do it the other way round — increment/decrement the variable then return the value — by putting the operator at the start of the variable instead of the end:', },
      { type: 'code', content: 'let number = 4;\n\nconsole.log(++number);', required: false, },
    ],
  ],
  'assignment-operators': [
    [
      { type: 'p', content: 'Assignment operators are operators that assign a value to a variable. We have already used the most basic one, ##=##, loads of times — it assigns the variable on the left the value stated on the right:', },
      { type: 'code', content: 'let x = 3; // x contains the value 3\nlet y = 4; // y contains the value 4\n\n// x now contains the same value y contains, 4\nx = y;\n\nconsole.log(x); // 4', },
    ],
    [
      { type: 'p', content: 'But there are some more complex types, which provide useful shortcuts to keep your code neater and more efficient. These are the most common:', },
      { type: 'h2', content: 'Addition Assignment ##+=##', },
      { type: 'p', content: 'Adds the value on the right to the variable value on the left, then returns the new variable value.', },
      { type: 'code', content: 'let x = 5;\nx += 5;\n\nconsole.log(x); // 10', },
    ],
    [
      { type: 'h2', content: 'Subtraction Assignment ##-=##', },
      { type: 'p', content: 'Subtracts the value on the right from the variable value on the left, and returns the new variable value.', },
      { type: 'code', content: 'let x = 5;\nx -= 2;\n\nconsole.log(x); // 3', },
    ],
    [
      { type: 'h2', content: 'Multiplication Assignment ##*=##', },
      { type: 'p', content: 'Multiplies the variable value on the left by the value on the right, and returns the new variable value.', },
      { type: 'code', content: 'let x = 5;\nx *= 3;\n\nconsole.log(x); // 15', },
    ],
    [
      { type: 'h2', content: 'Division Assignment ##/=##', },
      { type: 'p', content: 'Divides the variable value on the left by the value on the right, and returns the new variable value.', },
      { type: 'code', content: 'let x = 15;\nx /= 3;\n\nconsole.log(x); // 5', },
    ],
    [
      { type: 'hr', },
      { type: 'p', content: 'You can also use other variables on the right-hand side of each expression, for example:', },
      { type: 'code', content: 'let x = 3; // x contains the value 3\nlet y = 4; // y contains the value 4\n\n// x now contains the value 12\nx *= y;\n\nconsole.log(x); // 12', },
    ],
  ],
  'assignment-calculations': [
    [
      { type: 'p', content: '**Challenge:** assign the variables a value so the result is ##30##:', },
      { type: 'code', content: 'let num1 = 0; // Give me a value\nlet num2 = 0; // Give me a value\n\nnum1 += num2;\nconsole.log(num1 + num2);', required: true, expected: '30', },
    ],
  ],
  'comparison-operators': [
    [
      { type: 'p', content: 'Sometimes we will want to run ##true## / ##false## tests, then act accordingly depending on the result of that test — to do this we use comparison operators:', },
    ],
    [
      { type: 'h2', content: 'Strict equality ##===##', },
      { type: 'p', content: 'Tests whether the left and right values are identical to one another.', },
      { type: 'code', content: 'console.log(5 === (2 + 3)); // true', required: false, },
    ],
    [
      { type: 'h2', content: 'Strict non-equality ##!==##', },
      { type: 'p', content: 'Tests whether the left and right values are **NOT** identical to one another.', },
      { type: 'code', content: 'console.log(5 !== (2 + 3)); // false', required: false, },
    ],
    [
      { type: 'h2', content: 'Less than ##<##', },
      { type: 'p', content: 'Tests whether the left value is smaller than the right one.', },
      { type: 'code', content: 'console.log(10 < 5); // false', required: false, },
    ],
    [
      { type: 'h2', content: 'Greater than ##>##', },
      { type: 'p', content: 'Tests whether the left value is greater than the right one.', },
      { type: 'code', content: 'console.log(10 > 5); // true', required: false, },
    ],
    [
      { type: 'h2', content: 'Less than or equal to ##<=##', },
      { type: 'p', content: 'Tests whether the left value is smaller than or equal to the right one.', },
      { type: 'code', content: 'console.log(10 <= 5); // false', required: false, },
    ],
    [
      { type: 'h2', content: 'Greater than or equal to ##>=##', },
      { type: 'p', content: 'Tests whether the left value is greater than or equal to the right one.', },
      { type: 'code', content: 'console.log(5 >= 5); // true', required: false, },
    ],
    [
      { type: 'hr', },
      { type: 'p', content: 'You may see some people using ##==## and ##!=## in their tests for equality and non-equality.', },
      { type: 'p', content: 'These are valid operators in JavaScript, but they differ from ##===## and ##!==##.', },
    ],
    [
      { type: 'p', content: '##==## and ##!=## test whether the values are the same but not whether the values\' datatypes are the same.', },
      { type: 'p', content: '##===## and ##!==## test the equality of both the values and their datatypes.', },
      { type: 'code', content: 'console.log(5 == "5"); // true\nconsole.log(5 === "5"); // false', required: false, },
    ],
  ],
};

