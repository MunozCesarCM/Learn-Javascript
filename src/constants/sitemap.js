export const sitemap = [
  {
    id: 'overview',
    label: 'Overview',
    color: 'text-[#FFD767]',
    icon: 'TbFileFilled',
  },
  {
    id: 'javascript-basics',
    label: 'Javascript Basics',
    color: 'text-terminal-green',
    icon: 'TbTriangleSquareCircle',

    children: [
      {
        id: 'introduction',
        label: 'Introduction',
        content: 'This chapter introduces Javascript and discusses some of its fundamental concepts.',

        cards: [
          [
            {
              id: 'what-is-javascript',
              label: 'What is Javascript?',
              type: 'Lesson',
            },
            {
              id: 'basic-grammar',
              label: 'Basic Grammar',
              type: 'Lesson',
            },
            {
              id: 'hello-world',
              label: 'Hello World',
              type: 'Lesson',
            },
            {
              id: 'write-hello-world',
              label: 'Write a "Hello World"',
              type: 'Challenge',
            },
            {
              id: 'comments',
              label: 'Comments',
              type: 'Lesson',
            },
          ],
        ],
      },
      {
        id: 'variables',
        label: 'Variables',
        content: 'This section is designed to learn about Javascript variables. You\'ll discover how variables act as containers to store and manipulate data and you\'ll learn how to declare, assign, and update them as needed.',

        cards: [
          [
            {
              id: 'introduction-to-variables',
              label: 'Introduction to Variables',
              type: 'Lesson',
            },
            {
              id: 'naming-conventions',
              label: 'Naming Conventions',
              type: 'Lesson',
            },
            {
              id: 'assign-value-to-variable',
              label: 'Assign a value to a variable',
              type: 'Challenge',
            },
          ],
          [
            {
              id: 'declaring-variables',
              label: 'Declaring Variables',
              type: 'Lesson',
            },
            {
              id: 'declaring-variable',
              label: 'Declaring a Variable',
              type: 'Challenge',
            },
            {
              id: 'var-keyword',
              label: 'Var Keyword',
              type: 'Lesson',
            },
          ],
        ],
      },
      {
        id: 'data-types',
        label: 'Data Types',
        content: 'In this section, you will learn about the Javascript data types and their unique characteristics.',

        cards: [
          [
            {
              id: 'types-overview',
              label: 'Types Overview',
              type: 'Lesson',
            },
            {
              id: 'variables-types',
              label: 'Variables and Types',
              type: 'Quiz',
            },
            {
              id: 'types-of-numbers',
              label: 'Types of Numbers',
              type: 'Lesson',
            },
            {
              id: 'number-type',
              label: 'Number Data Type',
              type: 'Lesson',
            },
            {
              id: 'reassign-number',
              label: 'Reassign a Number',
              type: 'Challenge',
            },
          ],
          [
            {
              id: 'string-type',
              label: 'String Data type',
              type: 'Lesson',
            },
            {
              id: 'modify-string',
              label: 'Modify a String',
              type: 'Challenge',
            },
            {
              id: 'creating-and-logging',
              label: 'Creating and Logging',
              type: 'Challenge',
            },
          ],
          [
            {
              id: 'boolean-type',
              label: 'Boolean Data Type',
              type: 'Lesson',
            },
            {
              id: 'assign-boolean',
              label: 'Assign a Boolean',
              type: 'Challenge',
            },
            {
              id: 'undefined-type',
              label: 'Undefined Data Type',
              type: 'Lesson',
            },
            {
              id: 'null-type',
              label: 'Null Data Type',
              type: 'Lesson',
            },
          ],
          [
            {
              id: 'symbol-type',
              label: 'Symbol Data Type',
              type: 'Lesson',
            },
            {
              id: 'bigint-type',
              label: 'BigInt Data Type',
              type: 'Lesson',
            },
            {
              id: 'object-type',
              label: 'Object Data Type',
              type: 'Lesson',
            },
          ],
        ],
      },
      {
        id: 'basic-operators',
        label: 'Basic Operators',
        content: 'At this point in the course, we discuss math in JavaScript — how we can use operators and other features to successfully manipulate numbers to do our bidding.',

        cards: [
          [
            {
              id: 'arithmetic-operators',
              label: 'Arithmetic Operators',
              type: 'Lesson',
            },
            {
              id: 'operator-precedence',
              label: 'Operator Precedence',
              type: 'Lesson',
            },
            {
              id: 'arithmetic-calculations',
              label: 'Arithmetic Calculations',
              type: 'Challenge',
            },
            {
              id: 'even-more-calculations',
              label: 'Even More Calculations',
              type: 'Challenge',
            },
            {
              id: 'increment-decrement-operators',
              label: 'Increment Decrement Operators',
              type: 'Lesson',
            },
          ],
          [
            {
              id: 'assignment-operators',
              label: 'Assignment Operators',
              type: 'Lesson',
            },
            {
              id: 'assignment-calculations',
              label: 'Assignment Calculations',
              type: 'Challenge',
            },
            {
              id: 'comparison-operators',
              label: 'Comparison Operators',
              type: 'Lesson',
            },
          ],
        ],
      },
    ],
  },
  {
    id: 'control-flow',
    label: 'Control Flow',
    color: 'text-terminal-blue',
    icon: 'TbArrowLeftRight',

    children: [
      {
        id: 'conditional-operations',
        label: 'Conditional Operations',
        content: 'This chapter introduces Javascript and discusses some of its fundamental concepts.',

        cards: [
          [
            {
              id: 'conditionals',
              label: 'Conditionals',
              type: 'Lesson',
            },
            {
              id: 'logical-operators',
              label: 'Logical Operators',
              type: 'Lesson',
            },
          ],
          [
            {
              id: 'strings-arithmetic-operators',
              label: 'Strings and Arithmetic Operators',
              type: 'Lesson',
            },
            {
              id: 'strings-comparison-operators',
              label: 'Strings and Comparison Operators',
              type: 'Lesson',
            },
          ],
        ],
      },
    ],
  },
];
