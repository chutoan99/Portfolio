export const EXPERIENCES = [
  {
    label: 'ITD GROUP',
    time: 'August/2022 - July/2023',
    position: 'Fresher Frontend Developer',
    contents: [
      'Fresher Frontend Developer',
      'I am currently involved in building and developing websites using angular.',
      "Maintain, develop new features, and manage source code versions of the company's previous projects built with angularjs.",
      'Participate in meetings to discuss project development, contribute solutions, and address risks.',
      'Convert design interfaces from figma into projects.',
      "Read and understand BA's documents.",
      'Support to student during their internship on various projects.',
    ],
  },
  {
    label: 'STECH VN',
    time: 'May/2022 - July/2023',
    position: 'Intern Frontend Developer',
    contents: [
      'I participated in building the features and user interfaces for a web application “social network for blockchain" using next.js',
      'Explore and utilize the Next.js library, a framework for React.',
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
      'Node',
      'Typescript',
      'Express.js',
      'Mysql',
      'Taiwindcss',
      'Sequelize',
      'Swagger',
      'Rest full',
      'Redux toolkit query',
      'Socket.io',
      'Cloudinary',
      'Jsonwebtoken',
      'Nodemailer',
    ],
    link: [
      {
        icon: (
          <svg xmlns="http://www.w3.org/2000/svg" width={20} height={21} viewBox="0 0 20 21" fill="none">
            <path
              d="M11.2867 9.15352C10.6041 8.47121 9.67846 8.08792 8.71334 8.08792C7.74821 8.08792 6.82259 8.47121 6.14 9.15352L3.56584 11.7269C2.88324 12.4095 2.49976 13.3353 2.49976 14.3006C2.49976 15.2659 2.88324 16.1918 3.56584 16.8744C4.24844 17.557 5.17424 17.9404 6.13959 17.9404C7.10493 17.9404 8.03074 17.557 8.71334 16.8744L10 15.5877"
              stroke="#7D11F9"
              strokeWidth="1.66667"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M8.71338 11.7269C9.39597 12.4092 10.3216 12.7925 11.2867 12.7925C12.2518 12.7925 13.1775 12.4092 13.86 11.7269L16.4342 9.15352C17.1168 8.47092 17.5003 7.54512 17.5003 6.57977C17.5003 5.61443 17.1168 4.68862 16.4342 4.00602C15.7516 3.32342 14.8258 2.93994 13.8605 2.93994C12.8951 2.93994 11.9693 3.32342 11.2867 4.00602L10 5.29269"
              stroke="#7D11F9"
              strokeWidth="1.66667"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        ),
        ref: 'https://shopee-client.vercel.app',
        content: 'Link demo web',
      },
      {
        icon: (
          <svg xmlns="http://www.w3.org/2000/svg" width={20} height={21} viewBox="0 0 20 21" fill="none">
            <path
              d="M11.2867 9.15352C10.6041 8.47121 9.67846 8.08792 8.71334 8.08792C7.74821 8.08792 6.82259 8.47121 6.14 9.15352L3.56584 11.7269C2.88324 12.4095 2.49976 13.3353 2.49976 14.3006C2.49976 15.2659 2.88324 16.1918 3.56584 16.8744C4.24844 17.557 5.17424 17.9404 6.13959 17.9404C7.10493 17.9404 8.03074 17.557 8.71334 16.8744L10 15.5877"
              stroke="#7D11F9"
              strokeWidth="1.66667"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M8.71338 11.7269C9.39597 12.4092 10.3216 12.7925 11.2867 12.7925C12.2518 12.7925 13.1775 12.4092 13.86 11.7269L16.4342 9.15352C17.1168 8.47092 17.5003 7.54512 17.5003 6.57977C17.5003 5.61443 17.1168 4.68862 16.4342 4.00602C15.7516 3.32342 14.8258 2.93994 13.8605 2.93994C12.8951 2.93994 11.9693 3.32342 11.2867 4.00602L10 5.29269"
              stroke="#7D11F9"
              strokeWidth="1.66667"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        ),
        ref: 'https://server-shopee3.onrender.com/api/client/docs',
        content: 'Link swagger api',
      },
      {
        icon: (
          <svg xmlns="http://www.w3.org/2000/svg" width={20} height={21} viewBox="0 0 20 21" fill="none">
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M10 0.68689C4.475 0.68689 0 5.16189 0 10.6869C0 15.1119 2.8625 18.8494 6.8375 20.1744C7.3375 20.2619 7.525 19.9619 7.525 19.6994C7.525 19.4619 7.5125 18.6744 7.5125 17.8369C5 18.2994 4.35 17.2244 4.15 16.6619C4.0375 16.3744 3.55 15.4869 3.125 15.2494C2.775 15.0619 2.275 14.5994 3.1125 14.5869C3.9 14.5744 4.4625 15.3119 4.65 15.6119C5.55 17.1244 6.9875 16.6994 7.5625 16.4369C7.65 15.7869 7.9125 15.3494 8.2 15.0994C5.975 14.8494 3.65 13.9869 3.65 10.1619C3.65 9.07439 4.0375 8.17439 4.675 7.47439C4.575 7.22439 4.225 6.19939 4.775 4.82439C4.775 4.82439 5.6125 4.56189 7.525 5.84939C8.325 5.62439 9.175 5.51189 10.025 5.51189C10.875 5.51189 11.725 5.62439 12.525 5.84939C14.4375 4.54939 15.275 4.82439 15.275 4.82439C15.825 6.19939 15.475 7.22439 15.375 7.47439C16.0125 8.17439 16.4 9.06189 16.4 10.1619C16.4 13.9994 14.0625 14.8494 11.8375 15.0994C12.2 15.4119 12.5125 16.0119 12.5125 16.9494C12.5125 18.2869 12.5 19.3619 12.5 19.6994C12.5 19.9619 12.6875 20.2744 13.1875 20.1744C15.1726 19.5042 16.8976 18.2283 18.1197 16.5264C19.3418 14.8244 19.9994 12.7821 20 10.6869C20 5.16189 15.525 0.68689 10 0.68689Z"
              fill="#7D11F9"
            />
          </svg>
        ),
        ref: 'https://github.com/chutoan99/shopee-client',
        content: 'Link source code frontend',
      },
      {
        icon: (
          <svg xmlns="http://www.w3.org/2000/svg" width={20} height={21} viewBox="0 0 20 21" fill="none">
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M10 0.68689C4.475 0.68689 0 5.16189 0 10.6869C0 15.1119 2.8625 18.8494 6.8375 20.1744C7.3375 20.2619 7.525 19.9619 7.525 19.6994C7.525 19.4619 7.5125 18.6744 7.5125 17.8369C5 18.2994 4.35 17.2244 4.15 16.6619C4.0375 16.3744 3.55 15.4869 3.125 15.2494C2.775 15.0619 2.275 14.5994 3.1125 14.5869C3.9 14.5744 4.4625 15.3119 4.65 15.6119C5.55 17.1244 6.9875 16.6994 7.5625 16.4369C7.65 15.7869 7.9125 15.3494 8.2 15.0994C5.975 14.8494 3.65 13.9869 3.65 10.1619C3.65 9.07439 4.0375 8.17439 4.675 7.47439C4.575 7.22439 4.225 6.19939 4.775 4.82439C4.775 4.82439 5.6125 4.56189 7.525 5.84939C8.325 5.62439 9.175 5.51189 10.025 5.51189C10.875 5.51189 11.725 5.62439 12.525 5.84939C14.4375 4.54939 15.275 4.82439 15.275 4.82439C15.825 6.19939 15.475 7.22439 15.375 7.47439C16.0125 8.17439 16.4 9.06189 16.4 10.1619C16.4 13.9994 14.0625 14.8494 11.8375 15.0994C12.2 15.4119 12.5125 16.0119 12.5125 16.9494C12.5125 18.2869 12.5 19.3619 12.5 19.6994C12.5 19.9619 12.6875 20.2744 13.1875 20.1744C15.1726 19.5042 16.8976 18.2283 18.1197 16.5264C19.3418 14.8244 19.9994 12.7821 20 10.6869C20 5.16189 15.525 0.68689 10 0.68689Z"
              fill="#7D11F9"
            />
          </svg>
        ),
        ref: 'https://github.com/chutoan99/shopee-server',
        content: 'Link source code backend',
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
      'Taiwindcss',
      'Ant Design',
      'Leaflet',
      'Sass',
      'Sequelize',
      'Mysql',
      'Rest full',
      'Swagger',
      'Socket.io',
      'Cloudinary',
      'Jsonwebtoken',
      'nodemailer',
    ],
    link: [
      {
        icon: (
          <svg xmlns="http://www.w3.org/2000/svg" width={20} height={21} viewBox="0 0 20 21" fill="none">
            <path
              d="M11.2867 9.15352C10.6041 8.47121 9.67846 8.08792 8.71334 8.08792C7.74821 8.08792 6.82259 8.47121 6.14 9.15352L3.56584 11.7269C2.88324 12.4095 2.49976 13.3353 2.49976 14.3006C2.49976 15.2659 2.88324 16.1918 3.56584 16.8744C4.24844 17.557 5.17424 17.9404 6.13959 17.9404C7.10493 17.9404 8.03074 17.557 8.71334 16.8744L10 15.5877"
              stroke="#7D11F9"
              strokeWidth="1.66667"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M8.71338 11.7269C9.39597 12.4092 10.3216 12.7925 11.2867 12.7925C12.2518 12.7925 13.1775 12.4092 13.86 11.7269L16.4342 9.15352C17.1168 8.47092 17.5003 7.54512 17.5003 6.57977C17.5003 5.61443 17.1168 4.68862 16.4342 4.00602C15.7516 3.32342 14.8258 2.93994 13.8605 2.93994C12.8951 2.93994 11.9693 3.32342 11.2867 4.00602L10 5.29269"
              stroke="#7D11F9"
              strokeWidth="1.66667"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        ),
        ref: 'https://shopee-admin.vercel.app',
        content: 'Link demo web',
      },
      {
        icon: (
          <svg xmlns="http://www.w3.org/2000/svg" width={20} height={21} viewBox="0 0 20 21" fill="none">
            <path
              d="M11.2867 9.15352C10.6041 8.47121 9.67846 8.08792 8.71334 8.08792C7.74821 8.08792 6.82259 8.47121 6.14 9.15352L3.56584 11.7269C2.88324 12.4095 2.49976 13.3353 2.49976 14.3006C2.49976 15.2659 2.88324 16.1918 3.56584 16.8744C4.24844 17.557 5.17424 17.9404 6.13959 17.9404C7.10493 17.9404 8.03074 17.557 8.71334 16.8744L10 15.5877"
              stroke="#7D11F9"
              strokeWidth="1.66667"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M8.71338 11.7269C9.39597 12.4092 10.3216 12.7925 11.2867 12.7925C12.2518 12.7925 13.1775 12.4092 13.86 11.7269L16.4342 9.15352C17.1168 8.47092 17.5003 7.54512 17.5003 6.57977C17.5003 5.61443 17.1168 4.68862 16.4342 4.00602C15.7516 3.32342 14.8258 2.93994 13.8605 2.93994C12.8951 2.93994 11.9693 3.32342 11.2867 4.00602L10 5.29269"
              stroke="#7D11F9"
              strokeWidth="1.66667"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        ),
        ref: 'https://server-shopee3.onrender.com/api/admin/docs',
        content: 'Link swagger api',
      },
      {
        icon: (
          <svg xmlns="http://www.w3.org/2000/svg" width={20} height={21} viewBox="0 0 20 21" fill="none">
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M10 0.68689C4.475 0.68689 0 5.16189 0 10.6869C0 15.1119 2.8625 18.8494 6.8375 20.1744C7.3375 20.2619 7.525 19.9619 7.525 19.6994C7.525 19.4619 7.5125 18.6744 7.5125 17.8369C5 18.2994 4.35 17.2244 4.15 16.6619C4.0375 16.3744 3.55 15.4869 3.125 15.2494C2.775 15.0619 2.275 14.5994 3.1125 14.5869C3.9 14.5744 4.4625 15.3119 4.65 15.6119C5.55 17.1244 6.9875 16.6994 7.5625 16.4369C7.65 15.7869 7.9125 15.3494 8.2 15.0994C5.975 14.8494 3.65 13.9869 3.65 10.1619C3.65 9.07439 4.0375 8.17439 4.675 7.47439C4.575 7.22439 4.225 6.19939 4.775 4.82439C4.775 4.82439 5.6125 4.56189 7.525 5.84939C8.325 5.62439 9.175 5.51189 10.025 5.51189C10.875 5.51189 11.725 5.62439 12.525 5.84939C14.4375 4.54939 15.275 4.82439 15.275 4.82439C15.825 6.19939 15.475 7.22439 15.375 7.47439C16.0125 8.17439 16.4 9.06189 16.4 10.1619C16.4 13.9994 14.0625 14.8494 11.8375 15.0994C12.2 15.4119 12.5125 16.0119 12.5125 16.9494C12.5125 18.2869 12.5 19.3619 12.5 19.6994C12.5 19.9619 12.6875 20.2744 13.1875 20.1744C15.1726 19.5042 16.8976 18.2283 18.1197 16.5264C19.3418 14.8244 19.9994 12.7821 20 10.6869C20 5.16189 15.525 0.68689 10 0.68689Z"
              fill="#7D11F9"
            />
          </svg>
        ),
        ref: 'https://github.com/chutoan99/shopee-admin',
        content: 'Link source code frontend',
      },
      {
        icon: (
          <svg xmlns="http://www.w3.org/2000/svg" width={20} height={21} viewBox="0 0 20 21" fill="none">
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M10 0.68689C4.475 0.68689 0 5.16189 0 10.6869C0 15.1119 2.8625 18.8494 6.8375 20.1744C7.3375 20.2619 7.525 19.9619 7.525 19.6994C7.525 19.4619 7.5125 18.6744 7.5125 17.8369C5 18.2994 4.35 17.2244 4.15 16.6619C4.0375 16.3744 3.55 15.4869 3.125 15.2494C2.775 15.0619 2.275 14.5994 3.1125 14.5869C3.9 14.5744 4.4625 15.3119 4.65 15.6119C5.55 17.1244 6.9875 16.6994 7.5625 16.4369C7.65 15.7869 7.9125 15.3494 8.2 15.0994C5.975 14.8494 3.65 13.9869 3.65 10.1619C3.65 9.07439 4.0375 8.17439 4.675 7.47439C4.575 7.22439 4.225 6.19939 4.775 4.82439C4.775 4.82439 5.6125 4.56189 7.525 5.84939C8.325 5.62439 9.175 5.51189 10.025 5.51189C10.875 5.51189 11.725 5.62439 12.525 5.84939C14.4375 4.54939 15.275 4.82439 15.275 4.82439C15.825 6.19939 15.475 7.22439 15.375 7.47439C16.0125 8.17439 16.4 9.06189 16.4 10.1619C16.4 13.9994 14.0625 14.8494 11.8375 15.0994C12.2 15.4119 12.5125 16.0119 12.5125 16.9494C12.5125 18.2869 12.5 19.3619 12.5 19.6994C12.5 19.9619 12.6875 20.2744 13.1875 20.1744C15.1726 19.5042 16.8976 18.2283 18.1197 16.5264C19.3418 14.8244 19.9994 12.7821 20 10.6869C20 5.16189 15.525 0.68689 10 0.68689Z"
              fill="#7D11F9"
            />
          </svg>
        ),
        ref: 'https://github.com/chutoan99/shopee-server',
        content: 'Link source code backend',
      },
    ],
  },
  {
    name: '03. Nespresso Vietnam',
    description:
      'My freelance project, crafted for a Vietnamese client, involving the transformation of a Figma design into a fully functional website. I have reimagined the Nespresso website exclusively for the Vietnamese market, incorporating the latest cutting-edge  technologies to ensure its development. This creation is designed to seamlessly adapt across a wide range of contemporary devices, providing a modern and accessible experience for users.',
    technologies: ['Vue', 'Typescript', 'Sass', 'Storybook', 'Figma'],
    link: [
      {
        icon: (
          <svg xmlns="http://www.w3.org/2000/svg" width={20} height={21} viewBox="0 0 20 21" fill="none">
            <path
              d="M11.2867 9.15352C10.6041 8.47121 9.67846 8.08792 8.71334 8.08792C7.74821 8.08792 6.82259 8.47121 6.14 9.15352L3.56584 11.7269C2.88324 12.4095 2.49976 13.3353 2.49976 14.3006C2.49976 15.2659 2.88324 16.1918 3.56584 16.8744C4.24844 17.557 5.17424 17.9404 6.13959 17.9404C7.10493 17.9404 8.03074 17.557 8.71334 16.8744L10 15.5877"
              stroke="#7D11F9"
              strokeWidth="1.66667"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M8.71338 11.7269C9.39597 12.4092 10.3216 12.7925 11.2867 12.7925C12.2518 12.7925 13.1775 12.4092 13.86 11.7269L16.4342 9.15352C17.1168 8.47092 17.5003 7.54512 17.5003 6.57977C17.5003 5.61443 17.1168 4.68862 16.4342 4.00602C15.7516 3.32342 14.8258 2.93994 13.8605 2.93994C12.8951 2.93994 11.9693 3.32342 11.2867 4.00602L10 5.29269"
              stroke="#7D11F9"
              strokeWidth="1.66667"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        ),
        ref: 'https://nespresso-client.vercel.app',
        content: 'Link demo web',
      },
      {
        icon: (
          <svg xmlns="http://www.w3.org/2000/svg" width={20} height={21} viewBox="0 0 20 21" fill="none">
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M10 0.68689C4.475 0.68689 0 5.16189 0 10.6869C0 15.1119 2.8625 18.8494 6.8375 20.1744C7.3375 20.2619 7.525 19.9619 7.525 19.6994C7.525 19.4619 7.5125 18.6744 7.5125 17.8369C5 18.2994 4.35 17.2244 4.15 16.6619C4.0375 16.3744 3.55 15.4869 3.125 15.2494C2.775 15.0619 2.275 14.5994 3.1125 14.5869C3.9 14.5744 4.4625 15.3119 4.65 15.6119C5.55 17.1244 6.9875 16.6994 7.5625 16.4369C7.65 15.7869 7.9125 15.3494 8.2 15.0994C5.975 14.8494 3.65 13.9869 3.65 10.1619C3.65 9.07439 4.0375 8.17439 4.675 7.47439C4.575 7.22439 4.225 6.19939 4.775 4.82439C4.775 4.82439 5.6125 4.56189 7.525 5.84939C8.325 5.62439 9.175 5.51189 10.025 5.51189C10.875 5.51189 11.725 5.62439 12.525 5.84939C14.4375 4.54939 15.275 4.82439 15.275 4.82439C15.825 6.19939 15.475 7.22439 15.375 7.47439C16.0125 8.17439 16.4 9.06189 16.4 10.1619C16.4 13.9994 14.0625 14.8494 11.8375 15.0994C12.2 15.4119 12.5125 16.0119 12.5125 16.9494C12.5125 18.2869 12.5 19.3619 12.5 19.6994C12.5 19.9619 12.6875 20.2744 13.1875 20.1744C15.1726 19.5042 16.8976 18.2283 18.1197 16.5264C19.3418 14.8244 19.9994 12.7821 20 10.6869C20 5.16189 15.525 0.68689 10 0.68689Z"
              fill="#7D11F9"
            />
          </svg>
        ),
        ref: 'https://github.com/chutoan99/Nespresso',
        content: 'Link source code frontend',
      },
    ],
  },
  {
    name: '04. PhongTro',
    description:
      'A complete revamp of a room rental website. This undertaking encompasses a full range of functionalities, underpinned by a constant influx of listing data collected through the use of "puppeteer" technology, resulting in a continuously updated collection of thousands of listings. Fueled by the latest cutting-edge technologies, the development focuses on laptop compatibility. As we look  ahead, you can expect a steady stream of innovative features to enhance user experience.',
    technologies: ['Next.js', 'Nest.js', 'Typescript', 'Graphql', 'React query', 'Css', 'Postgresql', 'Cloudinary', 'Typeorm', 'Puppeteer'],
    link: [
      {
        icon: (
          <svg xmlns="http://www.w3.org/2000/svg" width={20} height={21} viewBox="0 0 20 21" fill="none">
            <path
              d="M11.2867 9.15352C10.6041 8.47121 9.67846 8.08792 8.71334 8.08792C7.74821 8.08792 6.82259 8.47121 6.14 9.15352L3.56584 11.7269C2.88324 12.4095 2.49976 13.3353 2.49976 14.3006C2.49976 15.2659 2.88324 16.1918 3.56584 16.8744C4.24844 17.557 5.17424 17.9404 6.13959 17.9404C7.10493 17.9404 8.03074 17.557 8.71334 16.8744L10 15.5877"
              stroke="#7D11F9"
              strokeWidth="1.66667"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M8.71338 11.7269C9.39597 12.4092 10.3216 12.7925 11.2867 12.7925C12.2518 12.7925 13.1775 12.4092 13.86 11.7269L16.4342 9.15352C17.1168 8.47092 17.5003 7.54512 17.5003 6.57977C17.5003 5.61443 17.1168 4.68862 16.4342 4.00602C15.7516 3.32342 14.8258 2.93994 13.8605 2.93994C12.8951 2.93994 11.9693 3.32342 11.2867 4.00602L10 5.29269"
              stroke="#7D11F9"
              strokeWidth="1.66667"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        ),
        ref: 'https://phongtro-client.vercel.app',
        content: 'Link demo web',
      },
      {
        icon: (
          <svg xmlns="http://www.w3.org/2000/svg" width={20} height={21} viewBox="0 0 20 21" fill="none">
            <path
              d="M11.2867 9.15352C10.6041 8.47121 9.67846 8.08792 8.71334 8.08792C7.74821 8.08792 6.82259 8.47121 6.14 9.15352L3.56584 11.7269C2.88324 12.4095 2.49976 13.3353 2.49976 14.3006C2.49976 15.2659 2.88324 16.1918 3.56584 16.8744C4.24844 17.557 5.17424 17.9404 6.13959 17.9404C7.10493 17.9404 8.03074 17.557 8.71334 16.8744L10 15.5877"
              stroke="#7D11F9"
              strokeWidth="1.66667"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M8.71338 11.7269C9.39597 12.4092 10.3216 12.7925 11.2867 12.7925C12.2518 12.7925 13.1775 12.4092 13.86 11.7269L16.4342 9.15352C17.1168 8.47092 17.5003 7.54512 17.5003 6.57977C17.5003 5.61443 17.1168 4.68862 16.4342 4.00602C15.7516 3.32342 14.8258 2.93994 13.8605 2.93994C12.8951 2.93994 11.9693 3.32342 11.2867 4.00602L10 5.29269"
              stroke="#7D11F9"
              strokeWidth="1.66667"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        ),
        ref: 'https://server-phongtro.onrender.com/graphql',
        content: 'Link graphql api',
      },
      {
        icon: (
          <svg xmlns="http://www.w3.org/2000/svg" width={20} height={21} viewBox="0 0 20 21" fill="none">
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M10 0.68689C4.475 0.68689 0 5.16189 0 10.6869C0 15.1119 2.8625 18.8494 6.8375 20.1744C7.3375 20.2619 7.525 19.9619 7.525 19.6994C7.525 19.4619 7.5125 18.6744 7.5125 17.8369C5 18.2994 4.35 17.2244 4.15 16.6619C4.0375 16.3744 3.55 15.4869 3.125 15.2494C2.775 15.0619 2.275 14.5994 3.1125 14.5869C3.9 14.5744 4.4625 15.3119 4.65 15.6119C5.55 17.1244 6.9875 16.6994 7.5625 16.4369C7.65 15.7869 7.9125 15.3494 8.2 15.0994C5.975 14.8494 3.65 13.9869 3.65 10.1619C3.65 9.07439 4.0375 8.17439 4.675 7.47439C4.575 7.22439 4.225 6.19939 4.775 4.82439C4.775 4.82439 5.6125 4.56189 7.525 5.84939C8.325 5.62439 9.175 5.51189 10.025 5.51189C10.875 5.51189 11.725 5.62439 12.525 5.84939C14.4375 4.54939 15.275 4.82439 15.275 4.82439C15.825 6.19939 15.475 7.22439 15.375 7.47439C16.0125 8.17439 16.4 9.06189 16.4 10.1619C16.4 13.9994 14.0625 14.8494 11.8375 15.0994C12.2 15.4119 12.5125 16.0119 12.5125 16.9494C12.5125 18.2869 12.5 19.3619 12.5 19.6994C12.5 19.9619 12.6875 20.2744 13.1875 20.1744C15.1726 19.5042 16.8976 18.2283 18.1197 16.5264C19.3418 14.8244 19.9994 12.7821 20 10.6869C20 5.16189 15.525 0.68689 10 0.68689Z"
              fill="#7D11F9"
            />
          </svg>
        ),
        ref: 'https://github.com/chutoan99/phongtro-client',
        content: 'Link source code frontend',
      },
      {
        icon: (
          <svg xmlns="http://www.w3.org/2000/svg" width={20} height={21} viewBox="0 0 20 21" fill="none">
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M10 0.68689C4.475 0.68689 0 5.16189 0 10.6869C0 15.1119 2.8625 18.8494 6.8375 20.1744C7.3375 20.2619 7.525 19.9619 7.525 19.6994C7.525 19.4619 7.5125 18.6744 7.5125 17.8369C5 18.2994 4.35 17.2244 4.15 16.6619C4.0375 16.3744 3.55 15.4869 3.125 15.2494C2.775 15.0619 2.275 14.5994 3.1125 14.5869C3.9 14.5744 4.4625 15.3119 4.65 15.6119C5.55 17.1244 6.9875 16.6994 7.5625 16.4369C7.65 15.7869 7.9125 15.3494 8.2 15.0994C5.975 14.8494 3.65 13.9869 3.65 10.1619C3.65 9.07439 4.0375 8.17439 4.675 7.47439C4.575 7.22439 4.225 6.19939 4.775 4.82439C4.775 4.82439 5.6125 4.56189 7.525 5.84939C8.325 5.62439 9.175 5.51189 10.025 5.51189C10.875 5.51189 11.725 5.62439 12.525 5.84939C14.4375 4.54939 15.275 4.82439 15.275 4.82439C15.825 6.19939 15.475 7.22439 15.375 7.47439C16.0125 8.17439 16.4 9.06189 16.4 10.1619C16.4 13.9994 14.0625 14.8494 11.8375 15.0994C12.2 15.4119 12.5125 16.0119 12.5125 16.9494C12.5125 18.2869 12.5 19.3619 12.5 19.6994C12.5 19.9619 12.6875 20.2744 13.1875 20.1744C15.1726 19.5042 16.8976 18.2283 18.1197 16.5264C19.3418 14.8244 19.9994 12.7821 20 10.6869C20 5.16189 15.525 0.68689 10 0.68689Z"
              fill="#7D11F9"
            />
          </svg>
        ),
        ref: 'https://github.com/chutoan99/shopee-server',
        content: 'Link source code backend',
      },
    ],
  },
];
