import { Github, Twitter, Figma } from 'lucide-react';

import LogoJavascript from '/public/images/logos/icon-javascript.svg';
import LogoTypescript from '/public/images/logos/icon-typescript.svg';
import LogoReact from '/public/images/logos/icon-react.svg';
import LogoNextjs from '/public/images/logos/icon-nextjs.svg';
import LogoNodejs from '/public/images/logos/icon-nodejs.svg';
import LogoExpress from '/public/images/logos/icon-express.svg';
import LogoExpressLight from '/public/images/logos/icon-express-light.svg';
import LogoNest from '/public/images/logos/icon-nest.svg';
import LogoSocket from '/public/images/logos/icon-socket.svg';
import LogoSocketLight from '/public/images/logos/icon-socket-light.svg';
import LogoPostgreSQL from '/public/images/logos/icon-postgresql.svg';
import LogoMongoDB from '/public/images/logos/icon-mongodb.svg';
import LogoSass from '/public/images/logos/icon-sass.svg';
import LogoTailwindcss from '/public/images/logos/icon-tailwindcss.svg';
import LogoFigma from '/public/images/logos/icon-figma.svg';
import LogoCypress from '/public/images/logos/icon-cypress.svg';
import LogoCypressLight from '/public/images/logos/icon-cypress-light.svg';
import LogoStorybook from '/public/images/logos/icon-storybook.svg';
import LogoGit from '/public/images/logos/icon-git.svg';
import LogoJava from '/public/images/logos/icon-java.svg';
import LogoDocker from '/public/images/logos/icon-docker.svg';
import LogoSQLserver from '/public/images/logos/logo-sql-server.svg';
import LogoUbuntu from '/public/images/logos/logo-ubuntu.svg';
import LogoExcel from '/public/images/logos/logo-excel.svg';
import LogoCPP from '/public/images/logos/logo-cpp.svg';

import LogoUpwork from '/public/images/logos/logo-upwork.svg';
import LogoGreenApex from '/public/images/logos/logo-greenapex.svg';
import LogoGreenApexLight from '/public/images/logos/logo-greenapex-light.svg';
import LogoDotnpixel from '/public/images/logos/logo-dotnpixel.svg';
import LogoDotnpixelLight from '/public/images/logos/logo-dotnpixel-light.svg';
import LogoPbs from '/public/images/logos/logo-pbs.png';

import ProjectFiskil from '/public/images/project-fiskil.png';
import ProjectWingie from '/public/images/project-wingie.png';
import ProjectPepehousing from '/public/images/project-pepehousing.png';

import ProjectSafeplace from '/public/images/project-safeplace.png';
import ProjectCRUD from '/public/images/project-crud.png';

import AvatarKrisztian from '/public/images/avatar-krisztian.png';
import AvatarEugen from '/public/images/avatar-eugen.png';
import AvatarDummy from '/public/images/avatar-dummy.svg';

import {
  ExperienceDetails,
  ProjectDetails,
  TechDetails,
  TestimonialDetails,
} from '@/lib/types';

export const EXTERNAL_LINKS = {
  GITHUB: 'https://github.com/diegoRecinos',
  GITHUB_REPO: 'https://github.com/diegoRecinos',
  TWITTER: 'https://twitter.com/',
  FIGMA: 'https://www.figma.com/@',
  FIGMA_FILE:
    'https://www.figma.com/',
};

export const NAV_LINKS = [
  {
    label: 'About',
    href: '#about',
  },
  {
    label: 'Work',
    href: '#work',
  },
  {
    label: 'Contact',
    href: '#contact',
  },
];

export const SOCIAL_LINKS = [
  {
    icon: Github,
    url: 'https://github.com/diegoRecinos',
  },
];

export const TECHNOLOGIES: TechDetails[] = [
  {
    label: 'Javascript',
    logo: LogoJavascript,
    url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript',
  },
  {
    label: 'C++',
    logo: LogoCPP,
    url: 'https://cpp.com/',
  },
  {
    label: 'React',
    logo: LogoReact,
    url: 'https://react.dev/',
  },
  {
    label: 'Next.js',
    logo: LogoNextjs,
    url: 'https://nextjs.org/',
  },
  {
    label: 'Node.js',
    logo: LogoNodejs,
    url: 'https://nodejs.org/en',
  },
  {
    label: 'Express.js',
    logo: LogoExpress,
    darkModeLogo: LogoExpressLight,
    url: 'https://expressjs.com/',
  },
  {
    label: 'MongoDB',
    logo: LogoMongoDB,
    url: 'https://www.mongodb.com/',
  },

  {
    label: 'Java',
    logo: LogoJava,
    url: 'https://www.java.com/',
  },
  {
    label: 'Git',
    logo: LogoGit,
    url: 'https://git-scm.com/',
  },
  {
    label: 'docker',
    logo: LogoDocker,
    url: 'https://docker.com/',
  },
  {
    label: 'sqlserver',
    logo: LogoSQLserver,
    url: 'https://www.microsoft.com/en/sql-server/sql-server-downloads',
  },
  {
    label: 'ubuntu',
    logo: LogoUbuntu,
    url: 'https://ubuntu.com/',
  },
  {
    label: 'excel',
    logo: LogoExcel,
    url: 'https://www.microsoft.com/en/microsoft-365/excel?market=af',
  },
  
];

export const EXPERIENCES: ExperienceDetails[] = [
  {
    logo: LogoPbs,
    logoAlt: 'pbs logo',
    position: 'Employee',
    startDate: new Date(2021, 8),
    endDate: new Date(2021, 10),
    summary: [
      'Installed the default software for government laptops thatll be used by students.',
      'Load inventory.',
    ],
  },
];

export const PROJECTS: ProjectDetails[] = [
  {
    name: 'Javafx CRUD',
    description:
      'Javafx app for purchase transactions using CRUD operations and generating reports using SQL queries  for the user.',
    url: 'https://github.com/diegoRecinos/CRUD-BancoCentral',
    previewImage: ProjectCRUD,
    technologies: [
      'Java',
      'Javafx',
      'SQL server',
      'JDB',
      'Maven',
      'Scene Builder',
      'IntelliJ',
    ],
  },
  {
    name: 'SafePlace',
    description:
      'Work with a team of 3 for a platform for filing complaints mainly aimed for internal use in an organization to keep track of complaints.',
    url: 'https://safeplace.site',
    previewImage: ProjectSafeplace,
    technologies: [
      'React',
      'JavaScript',
      'Antd',
      'Nginx',
      'Express.js',
      'MongoDB',
      'Docker',
      'Vite',
    ],
  },

];

export const TESTIMONIALS: TestimonialDetails[] = [
  {
    personName: 'Krisztian Gyuris',
    personAvatar: AvatarKrisztian,
    title: 'Founder - inboxgenie.io',
    testimonial:
      'Job well done! I am really impressed. He is very very good at what he does:) I would recommend Sagar and will rehire in the future for Frontend development.',
  },
  {
    personName: 'Eugen Esanu',
    personAvatar: AvatarEugen,
    title: 'Founder - shosho.design',
    testimonial:
      'Great guy, highly recommended for any COMPLEX front-end development job! His skills are top-notch and he will be an amazing addition to any team.',
  },
  {
    personName: 'Joe Matkin',
    personAvatar: AvatarDummy,
    title: 'Freelancer',
    testimonial:
      'Sagar was extremely easy and pleasant to work with and he truly cares about the project being a success. Sagar has a high level of knowledge and was able to work on my MERN stack application without any issues.',
  },
];
