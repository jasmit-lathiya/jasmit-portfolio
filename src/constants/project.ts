import { Project } from './types'

export const EXPERIANCES: Project[] = [
  {
    title: 'Tekion - Assosiate Software Engineer',
    desc: 'Intern → Full-Time',
    explanation: [
      'Developed and enhanced web applications using React, Redux, and SASS, translating Figma designs into pixel-perfect, functional webpages.',
      'During Internship built and maintained internal Leave Management System, enabling employees to apply for leave, managers to approve/reject requests, and admins to manage records. Implemented secure login authentication and role-based access control.',
      'Refactored and optimized existing features for reusability across multiple user roles, improving code maintainability and performance; additionally developed new features from scratch as per requirements.',
      'Integrated REST APIs to extend application functionality and connect frontend with backend services.',
      'Modified and improved existing screens based on business requirements while ensuring UI/UX consistency.',
    ],
  },
  {
    title: 'Tribe - Private Jet Charter Platform',
    desc: 'Frontend Developer - Freelancer',
    liveSiteURL: 'app.flytribe.ae',
    explanation: [
      'Developed pixel-perfect UI in React using MUI based on client-provided Figma designs.',
      'Built the Operator Dashboard to manage charter requests (accept/decline) with integrated real-time chat functionality.',
      'Implemented Itinerary module to display detailed route information for requested journeys.',
      'Designed and enhanced User Profile section including Media, Links, Documents and request history between operator and requester.',
      'Developed jet search and filtering functionality based on route, pricing, aircraft facilities and user preferences.',
      'Enabled quotation request workflow, allowing requesters to connect directly with operators.',
      'Improved existing screens by enhancing UI/UX, adding new features and incorporating continuous client feedback with multiple design solution options.',
    ],
  },
  {
    title: 'Sorted Account - Account Software',
    desc: 'Fullstack Developer - Freelancer',
    liveSiteURL: 'sorted-account.web.app',
    explanation: [
      'Developed a custom accounting web application tailored to client requirements using React.js, Material UI and Firebase.',
      'Implemented secure authentication system with login and signup functionality, including input validation and error handling.',
      'Designed and built a companies overview dashboard displaying multiple companies with aggregated financial balances. Created a dynamic company dashboard to manage individual financial data, supporting multiple bank accounts per user.',
      'Developed a bank details module to view, add and edit financial transactions through intuitive form-based interactions.',
      'Integrated Firebase into the application to enable backend services such as authentication and real-time database connectivity.',
      'Deployed web application using Firebase Hosting and set up GitHub Actions for automated builds and continuous deployment on code updates.',
    ],
  },
]

export const PROJECTS: Project[] = [
  {
    title: 'SforS: Security App For Society',
    desc: 'College Intership Project',
    explanation: [
      'Designed and built an Android application with Android Studio and Firebase to implement an efficient in-house security system for a gated community.',
      'The app acts as a mediator between residents and security guards. It also supports internal society operations, such as circulating common notices with a built-in notification feature.',
      'Designed the UI screens in Figma and then implemented it in Android.',
      'Developed and integrated key features including User and admin login, Daily visitor report, Pre-booking of common amenities, General announcement from secretory, Guest arrival notification feature etc.',
    ],
  },
]
