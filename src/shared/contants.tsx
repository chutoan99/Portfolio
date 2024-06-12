export const EXPERIENCES = [
  {
    label: 'Y TE SO GIA AN (A Company under HOA LÂM Group):',
    time: 'Aug 2022 – May 2024',
    position: 'Front End Developer',
    contents: [
      '- Develop & implement projects for CIH International Hospital and Gia An 155 Hospital:',
      'HRM: Human resource management. Manage all employee information with multiple modules, including personnel, leave, insurance, salary & personal income tax, and labor equipment.',
      'ERP: Enterprise resource planning. Handle Electronic Medical Records, storing comprehensive medical data for each patient, including medical history, diagnosis, and treatment.',
      'EMR: Electronic medical record. Handle Electronic Medical Records, storing comprehensive medical data for each patient, including medical history, diagnosis, and treatment.',
      'Team size: 18 and the main tasks:',
      '+ Work with TypeScript, Angular, Rxjs, TailwindCss and DevExpress, SQL Server…',
      '+ Create an API using ASP.NET in C#(C Sharp), and Document with Swagger for the FE.',
      '+ Collaborate with BA and QC to ensure alignment with business team objectives and requirements.',
      '+ Create report templates use "report designer DevExpress"',
      '+ Participate in project development meets, contribute innovative solutions, and address potential risks.',
      '+ Work with the agile scrum methodology.',
    ],
    contents2: [
      '- Developed outsource projects:',
      'iOki: Objectives & Key Results. Manage and scor OKR of employees every quarter.',
      'Team size: 20 and the main tasks:',
      '+ Work with TypeScript, Angular, Jquery, Rxjs, Ngrx, Scss, Bootstrap…',
      '+ Ensure precise conversion of Figma designs to web format with pixel-perfect accuracy and responsiveness.',
      'iSecurity: The system consolidates all security features within an area, integrates facial recognition, records, camera management, identification of passenger vehicles upon entry and exit, suggests intrusive behavior, object track on maps…',
      'Team size: 10 and the main tasks:',
      '+ Work with AngularJs, Javascript, Fabricjs, Bootstrap…',
      '+ Responsible for maintain, develop new features, and manage source code versions of the company previously.',
      '+ Support and guidance to students during their internship on various projects.',
      'iWater: Main features include management water usage history, payment records, employee…',
      'Team size: 8 and the main tasks:',
      '+ Work with TypeScript, React, Redux, Material UI….',
      '+ Read and comprehend BA documents to align with project requirements.',
    ],
  },
  {
    label: 'STECH VIET NAM:',
    time: 'May 2022 - Jul 2022',
    position: 'Intern Backend Developer',
    contents: [
      'Develop web application "Social Network for Blockchain":',
      'Team size: 20 and the main tasks:',
      '+ Work with Nodejs, Typescript, Sequelize, MySql, RESTfull api…',
      '+ Create Api (accord to restful standard) and integrate with Fe.',
    ],
  },
];
export const MENULINKS = [
  {
    name: 'Home',
    ref: 'home',
  },
  {
    name: 'Works',
    ref: 'works',
  },
  {
    name: 'Skills',
    ref: 'skills',
  },
  {
    name: 'Timeline',
    ref: 'timeline',
  },
  {
    name: 'Contact',
    ref: 'contact',
  },
];

export const PROJECTS = [
  {
    name: '01. Shopee',
    description:
      "A meticulously cloned e-commerce platform inspired by Shopee. Packed with a comprehensive suite of functions, it hosts tens of thousands of categories, shops, and products, continuously updated to keep pace with market trends. We've harnessed the latest cutting-edge technologies to drive its development, resulting in a user-friendly interface that promises an intuitive and enjoyable shopping experience, currently optimized for laptop usage.",
    technologies: [
      'React',
      'Vite',
      'Node',
      'Typescript',
      'Express.js',
      'Mongodb',
      'Mysql',
      'Taiwindcss',
      'Sequelize',
      'Swagger',
      'Rest full',
      'Redux toolkit query',
      'Socket.io',
      'Winston',
      'Redis',
      'Passport',
      'Cloudinary',
      'Jsonwebtoken',
      'Nodemailer',
    ],
    demo: 'shopee-client.vercel.app',
    ref: 'https://shopee-client.vercel.app',
    link: [
      {
        ref: 'https://bitbucket.org/chutoan99/shopee-client',
        content: 'View in bitbucket',
      },
      {
        ref: 'https://server-shopee3.onrender.com/api/client/docs',
        content: 'View swagger api',
      },
    ],
  },
  {
    name: '02. Shopee Admin',
    description:
      "Presenting our Shopee-like project dashboard: a comprehensive toolkit for seamless process management. Powered by the latest technologies, it features a user-friendly interface inspired by the trending design style of glassmorphism. Currently tailored for laptops during its developmental phase, we're dedicated to introducing more features in the near future to enhance your experience.",
    technologies: [
      'Angular',
      'Node',
      'Express',
      'Typescript',
      'Ngrx',
      'Rxjs',
      'Taiwindcss',
      'Ant Design',
      'Leaflet',
      'Sass',
      'Chartjs',
      'Sequelize',
      'Mysql',
      'Rest full',
      'Swagger',
      'Socket.io',
      'Cloudinary',
      'Jsonwebtoken',
      'Nodemailer',
    ],
    demo: 'shopee-admin.vercel.app',
    ref: 'https://shopee-admin.vercel.app',
    link: [
      {
        ref: 'https://bitbucket.org/chutoan99/shopee-admin',
        content: 'View in bitbucket',
      },
      {
        ref: 'https://server-shopee3.onrender.com/api/admin/docs',
        content: 'View swagger api',
      },
    ],
  },
  {
    name: '03. Nespresso Vietnam',
    description:
      'My freelance project, crafted for a Vietnamese client, involving the transformation of a Figma design into a fully functional website. I have reimagined the Nespresso website exclusively for the Vietnamese market, incorporating the latest cutting-edge  technologies to ensure its development. This creation is designed to seamlessly adapt across a wide range of contemporary devices, providing a modern and accessible experience for users.',
    technologies: ['Vue', 'Typescript', 'Pug', 'Sass', 'Storybook', 'Swiper', 'Figma'],
    demo: 'nespresso-client.vercel.app',
    ref: 'https://nespresso-client.vercel.app',
    link: [
      {
        ref: 'https://github.com/chutoan99/Nespresso',
        content: 'View in github',
      },
    ],
  },
  {
    name: '04. PhongTro',
    description:
      'A complete revamp of a room rental website. This undertaking encompasses a full range of functionalities, underpinned by a constant influx of listing data collected through the use of "puppeteer" technology, resulting in a continuously updated collection of thousands of listings. Fueled by the latest cutting-edge technologies, the development focuses on laptop compatibility. As we look  ahead, you can expect a steady stream of innovative features to enhance user experience.',
    technologies: ['Next.js', 'Nest.js', 'Typescript', 'Graphql', 'React query', 'Css', 'Styled Components', 'Material', 'Postgresql', 'Cloudinary', 'Typeorm', 'Puppeteer'],
    demo: 'phongtro-client.vercel.app',
    ref: 'https://phongtro-client.vercel.app',
    link: [
      {
        ref: 'https://gitlab.com/chutoan99/phongtro',
        content: 'View in gitlab',
      },
      {
        ref: 'https://server-phongtro.onrender.com/graphql',
        content: 'View in graphql',
      },
    ],
  },
];
