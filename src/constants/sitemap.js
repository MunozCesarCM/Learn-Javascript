export const sitemap = [
  {
    id: 'overview',
    label: 'Overview',
    color: 'text-terminal-yellow',
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
              id: 'number-type',
              label: 'Number Data Type',
              type: 'Lesson',
            },
            {
              id: 'assign-value-to-variable',
              label: 'Assign a value to a variable',
              type: 'Challenge',
            },
          ],
        ],
      },
    ],
  },
];
