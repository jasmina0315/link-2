export const userProfile = {
  id: 'u-001',
  fullName: 'Amina Karimova',
  role: 'Student',
  email: 'amina@eduspark.app',
  grade: 'Grade 10',
  streak: 12,
  bio: 'Creative learner focused on STEM, design, and building useful digital products.',
  avatar: 'AK',
};

export const courses = [
  {
    id: 'web-design',
    title: 'Creative Web Design',
    category: 'Design',
    level: 'Beginner',
    duration: '6 weeks',
    instructor: 'Sardor Rahimov',
    rating: 4.9,
    students: 1840,
    color: 'purple',
    image: '🎨',
    description:
      'Learn modern UI design systems, visual hierarchy, wireframing, and user-friendly design thinking.',
    lessons: [
      { id: 'wd-1', title: 'Design Fundamentals', duration: '14 min', summary: 'Learn visual principles and interface structure.', content: 'Good design starts with balance, contrast, visual rhythm, and clarity. Every screen should guide attention to the most important information.' },
      { id: 'wd-2', title: 'Color Psychology', duration: '18 min', summary: 'Choose color palettes that improve clarity and emotion.', content: 'Colors evoke emotion and help organize content. Use contrast carefully, maintain consistency, and pick accessible combinations.' },
      { id: 'wd-3', title: 'Responsive Layouts', duration: '22 min', summary: 'Create layouts that adapt beautifully across devices.', content: 'Responsive design emphasizes flexible grids, scalable typography, and predictable spacing across mobile, tablet, and desktop.' },
      { id: 'wd-4', title: 'UX Writing Basics', duration: '16 min', summary: 'Write helpful copy that supports users.', content: 'Microcopy creates trust. Use clear labels, calm language, and action-oriented words that reduce uncertainty.' }
    ]
  },
  {
    id: 'math-foundations',
    title: 'Math Foundations',
    category: 'Mathematics',
    level: 'Intermediate',
    duration: '8 weeks',
    instructor: 'Nargiza Yusupova',
    rating: 4.8,
    students: 2150,
    color: 'orange',
    image: '📐',
    description:
      'Strengthen algebra, geometry, and problem-solving skills with guided examples and practice challenges.',
    lessons: [
      { id: 'mf-1', title: 'Algebra Essentials', duration: '19 min', summary: 'Solve equations with confidence.', content: 'Algebra helps model relationships with variables and constants. Understand structure before manipulating expressions.' },
      { id: 'mf-2', title: 'Geometry in Real Life', duration: '15 min', summary: 'Recognize patterns and shapes around you.', content: 'Geometry is the language of space and structure. Use proofs and formulas to reason about measurement and properties.' },
      { id: 'mf-3', title: 'Functions & Graphs', duration: '21 min', summary: 'Interpret slopes, intersections, and curves.', content: 'Functions describe how one quantity changes with another. Graphs make those relationships visible and meaningful.' },
      { id: 'mf-4', title: 'Problem Solving', duration: '17 min', summary: 'Break complex tasks into practical steps.', content: 'Step-by-step reasoning helps you approach problems systematically and reduce mistakes.' }
    ]
  },
  {
    id: 'python-starter',
    title: 'Python Programming',
    category: 'Technology',
    level: 'Beginner',
    duration: '10 weeks',
    instructor: 'Diyorbek Mamatov',
    rating: 5.0,
    students: 3200,
    color: 'blue',
    image: '🐍',
    description:
      'Explore Python syntax, logic, variables, loops, and mini projects to build real programming confidence.',
    lessons: [
      { id: 'py-1', title: 'Variables & Data Types', duration: '16 min', summary: 'Store and manipulate information efficiently.', content: 'Python data types include integers, strings, lists, and booleans. Each one supports different operations and structures.' },
      { id: 'py-2', title: 'Conditionals', duration: '18 min', summary: 'Build logic into your programs.', content: 'If statements and comparisons let your app respond to different situations and data values.' },
      { id: 'py-3', title: 'Loops', duration: '20 min', summary: 'Automate repetitive tasks.', content: 'Loops help you iterate over data and perform repeated work without duplicating code.' },
      { id: 'py-4', title: 'Mini Project', duration: '25 min', summary: 'Apply Python to a small real-world task.', content: 'Projects connect syntax to purpose. Build small apps to reinforce logic, structure, and debugging.' }
    ]
  },
  {
    id: 'science-lab',
    title: 'Science Lab Basics',
    category: 'Science',
    level: 'Intermediate',
    duration: '5 weeks',
    instructor: 'Malika Tursunova',
    rating: 4.7,
    students: 960,
    color: 'green',
    image: '🧪',
    description:
      'Investigate scientific methods, experiments, observations, and evidence-based reasoning in engaging lab activities.',
    lessons: [
      { id: 'sl-1', title: 'Scientific Method', duration: '13 min', summary: 'Ask questions and test hypotheses.', content: 'Observation leads to questions, and experiments help answer them with evidence instead of assumptions.' },
      { id: 'sl-2', title: 'Lab Safety', duration: '12 min', summary: 'Work responsibly in the lab environment.', content: 'Protecting yourself and others ensures a safe learning environment when carrying out experiments.' },
      { id: 'sl-3', title: 'Data Collection', duration: '18 min', summary: 'Record observations carefully and consistently.', content: 'Collecting reliable data is crucial because conclusions depend on accurate patterns and measurements.' },
      { id: 'sl-4', title: 'Conclusion Writing', duration: '14 min', summary: 'Summarize findings and explain evidence.', content: 'A good conclusion connects the hypothesis, evidence, and result in a clear, evidence-based narrative.' }
    ]
  }
];

export const quizBank = [
  {
    id: 'quiz-web',
    title: 'Web Design Quick Quiz',
    description: 'Test your understanding of visual hierarchy and user-friendly layouts.',
    questions: [
      {
        id: 'q1',
        prompt: 'What is the main role of contrast in UI design?',
        options: ['To make the interface larger', 'To help important elements stand out', 'To remove spacing', 'To hide content'],
        correctIndex: 1
      },
      {
        id: 'q2',
        prompt: 'Which of these improves readability?',
        options: ['Too much text in one color', 'Strong contrast between text and background', 'Tiny font sizes', 'No spacing'],
        correctIndex: 1
      },
      {
        id: 'q3',
        prompt: 'What does responsive design help with?',
        options: ['Only desktop screens', 'Design consistency across devices', 'Increasing code length', 'Removing navigation', 'No change'],
        correctIndex: 1
      },
      {
        id: 'q4',
        prompt: 'What is a good design principle?',
        options: ['Keep unrelated elements close', 'Show clear hierarchy', 'Use random colors', 'Ignore spacing'],
        correctIndex: 1
      }
    ]
  },
  {
    id: 'quiz-math',
    title: 'Math Challenge',
    description: 'Check your algebra and graph problem-solving skills.',
    questions: [
      {
        id: 'mq1',
        prompt: 'What is x in 2x + 6 = 14?',
        options: ['2', '3', '4', '5'],
        correctIndex: 2
      },
      {
        id: 'mq2',
        prompt: 'Which graph property shows how steep a line is?',
        options: ['Area', 'Slope', 'Diameter', 'Volume'],
        correctIndex: 1
      },
      {
        id: 'mq3',
        prompt: 'A triangle has 3 sides. What is it called?',
        options: ['Rectangle', 'Triangle', 'Circle', 'Line'],
        correctIndex: 1
      },
      {
        id: 'mq4',
        prompt: 'Which expression shows a function?',
        options: ['y = 2x + 1', '5 + 3', 'Notebook', 'Blue'],
        correctIndex: 0
      }
    ]
  }
];

export const leaderboard = [
  { id: 1, name: 'Nodira', points: 1280, streak: 21 },
  { id: 2, name: 'Amina', points: 1220, streak: 12 },
  { id: 3, name: 'Samandar', points: 1190, streak: 16 },
  { id: 4, name: 'Diana', points: 1150, streak: 10 },
  { id: 5, name: 'Jasur', points: 1115, streak: 9 }
];

export const dailyGoals = [
  { id: 'goal-1', title: 'Complete one lesson', done: true },
  { id: 'goal-2', title: 'Practice 20 minutes', done: true },
  { id: 'goal-3', title: 'Finish a quiz', done: false },
  { id: 'goal-4', title: 'Review notes', done: false }
];

export const accountStats = {
  enrolledCourses: 4,
  lessonsCompleted: 14,
  weeklyGoal: 75,
  totalXp: 1250,
};
