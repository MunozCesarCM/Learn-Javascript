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
        content: 'Welcome to the Javascript Basics section! This section lays the foundation for your Javascript journey. We\'ll guide you through fundamental concepts and you\'ll learn how to store data and work with different types of information. Get ready to embark on your Javascript journey and start building a strong foundation!',

        cards: [
          [
            {
              id: 'what-is-javascript',
              label: 'What is Javascript?',
              type: 'Lesson',
            },
            {
              id: 'getting-started',
              label: 'Getting Started',
              type: 'Lesson',
            },
          ],
        ],
      },
      {
        id: 'variables',
        label: 'Variables',
        content: 'Welcome to the Variables section! This section is designed for beginners to learn about Javascript variables. You\'ll discover how variables act as containers to store and manipulate data and you\'ll learn how to declare, assign, and update them as needed.',

        cards: [
          [
            {
              id: 'introduction-to-variables',
              label: 'Introduction to Variables',
              type: 'Lesson',
            },
            {
              id: 'reassign-value-to-variable',
              label: 'Reassign a value to a variable',
              type: 'Challenge',
            },
            {
              id: 'assign-value-to-variable',
              label: 'Assign a value to a variable',
              type: 'Challenge',
            },
          ],
          [
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
];
