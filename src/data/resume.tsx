import { Icons } from '@/components/icons';
import { HomeIcon, NotebookIcon } from 'lucide-react';

export const DATA = {
  name: 'Raqib Rasheed',
  initials: 'MA',
  url: 'https://raqibabdulrasheed.com/',
  location: 'Hyderabad, India',
  locationLink: 'https://www.google.com/maps/place/Hyderabad',
  description:
    'Software Engineer who loves to build web applications and help people.',
  summary: `After graduating in Business Administration in 2020, I developed a passion for digital marketing and website development. I began by building simple landing pages and quickly transitioned into a full-time role as a Junior Frontend Developer in 2021. Over the past ${
    new Date().getFullYear() - 2019
  } years, I've specialized in React.js, TypeScript, and modern web tools, working on projects ranging from interactive user interfaces to server-side rendering and API integration. I'm committed to writing clean, scalable code and continuously learning to build impactful web experiences.`,
  avatarUrl: '/avatar.jpeg',
  skills: [
    'React',
    'Next.js',
    'Typescript',
    'Node.js',
    'Python',
    'Go',
    'Postgres',
    'Docker',
    'Kubernetes',
    'Java',
  ],
  navbar: [
    { href: '/', icon: HomeIcon, label: 'Home' },
    { href: '/blog', icon: NotebookIcon, label: 'Blog' },
  ],
  contact: {
    email: 'raqib.dev@gmail.com',
    tel: '+91 9961123488',
    social: {
      GitHub: {
        name: 'GitHub',
        url: 'https://github.com/raqib-rasheed/',
        icon: Icons.github,
        navbar: true,
      },
      LinkedIn: {
        name: 'LinkedIn',
        url: 'https://www.linkedin.com/in/raqib-abdul-rasheed/',
        icon: Icons.linkedin,
        navbar: true,
      },
      X: {
        name: 'X',
        url: 'https://x.com/raqib__rasheed',
        icon: Icons.x,
        navbar: true,
      },
      email: {
        name: 'Send Email',
        url: '#',
        icon: Icons.email,
        navbar: false,
      },
    },
  },

  work: [
    {
      company: 'Medline India',
      badges: [],
      href: 'https://www.medline.com/',
      location: 'Pune, Maharashtra, India',
      title: 'Software Consultant',
      logoUrl: '/medline.svg',
      start: 'Oct 2023',
      end: 'Nov 2024',
      description: `Software consultant at medline, manufacturer, distributor of medical supplies providing products, clinical services and operations across 125 countries and ranked #15 on the Forbes 2022.Foundational team member who developed business-critical feature, including a patients-per-day census management system that improved billing evaluation accuracy and reduced processing hands-on effort. Used NextJS, webpack-module-federation, Styled-components and more to build performant micro-frontend applications.`,
    },
    {
      company: 'Growfin',
      href: 'https://www.growfin.ai/',
      badges: [],
      location: 'Santa Clara, CA',
      title: 'Software Engineer',
      logoUrl: '/growfin-logo.webp',
      start: 'Mar 2023',
      end: 'Oct 2023',
      description: `Account receivable automation Software for accelerating cash inflow and reduce DSO. Core member of innovative accounts receivable B2B software with active thousands of users, purpose-built for streamlining and automating the receivables process across teams. Developed strategies for automated email delivery, resulting increase in efficiency, and optimised the rich text editor to improve email/template management. Used ReactJS, Typescript, react-query, Redux-toolkit, Springboot/Java.`,
    },
    {
      company: 'Turbolab Technologies',
      href: '',
      badges: [],
      location: 'San Jose, CA',
      title: 'Frontend Developer',
      logoUrl: '/turbolab.jpeg',
      start: 'Feb 2021',
      end: 'Mar 2023',
      description: `Introduced team practices that helped us move faster, such as Pair Reviews and Stop and Fix. Organised and led weekly learning sessions where knowledge is shared. Documented usage of performance APIs in React, which increased the code quality. Helped with organisational tasks such as moderating our monthly UI Dev meeting.`,
    },
  ],
  education: [
    {
      school: 'SRM IST',
      href: 'https://www.srmist.edu.in/',
      degree: 'Masters in computer application',
      logoUrl: '/srm.png',
      start: '2023',
      end: '2025',
    },
    {
      school: 'OSSU',
      href: 'https://github.com/ossu',
      degree:
        "Bachelor's Degree of Computer Science (BCS) Open Source Society University",
      logoUrl: '/ossu.jpeg',
      start: '2020',
      end: '2023',
    },
    {
      school: 'Calicut University',
      href: 'https://uoc.ac.in/',
      degree: "Bachelor's Degree of Business Administration (BBA)",
      logoUrl: '/calicut-university.png',
      start: '2017',
      end: '2020',
    },
  ],
  projects: [
    {
      title: 'YepiCor',
      href: 'https://62e6881ddefb8a00076554eb--cozy-cascaron-6d6d5b.netlify.app/',
      dates: 'Jan 2023 - Feb 2024',
      active: true,
      description:
        'software that helps businesses manage their day-to-day activities, such as accounting, finance, supply chain, and human resources.',
      technologies: ['React.js', 'Typescript', 'TailwindCSS'],
      links: [
        {
          type: 'Website',
          href: 'https://62e6881ddefb8a00076554eb--cozy-cascaron-6d6d5b.netlify.app',
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: 'Source',
          href: 'https://github.com/raqib-rasheed/zphere-react',
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: '',
      video: './yepicor.mp4',
    },
    {
      title: 'Intell',
      href: 'https://intell.me/',
      dates: 'Apr 2021 - May 2023',
      active: true,
      description:
        'A business intelligence solution that can be rapidly deployed within days to provide tangible benefits and actionable insights immediately. Intell will find business intelligence for you and deliver just the relevant ones to your inbox daily.',
      technologies: [
        'React.js',
        'Typescript',
        'Django',
        'PostgreSQL',
        'Ant design',
      ],
      links: [],
      image: '',
      video: './newsreader.mp4',
    },
    {
      title: 'slice-me',
      href: 'https://epic-ride-dda931.netlify.app/',
      dates: 'Apr 2020 - Sep 2023',
      active: true,
      description:
        'An SSG powered landing screen for restuarant built using gatsby.',
      technologies: [
        'Gatsby',
        'Typescript',
        'Graphql',
        'Sanity',
        'Styled-components',
      ],
      links: [
        {
          type: 'Website',
          href: 'https://epic-ride-dda931.netlify.app/',
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: 'Source',
          href: 'https://github.com/raqib-rasheed/gatsby-pizza-menu-project',
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: '',
      video: './slick.mp4',
    },
    {
      title: 'NA Tours',
      href: 'https://ecstatic-carson-45cb80.netlify.app/',
      dates: 'Apr 2023 - Mar 2024',
      active: true,
      description:
        'Developed an AI Customer Support Chatbot which automatically responds to customer support tickets using the latest GPT models.',
      technologies: [
        'Next.js',
        'Typescript',
        'PostgreSQL',
        'Prisma',
        'TailwindCSS',
        'Shadcn UI',
        'Magic UI',
        'Stripe',
        'Cloudflare Workers',
      ],
      links: [
        {
          type: 'Website',
          href: 'https://ecstatic-carson-45cb80.netlify.app/',
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: '',
      video: './natours.mp4',
    },
  ],
  hackathons: [],
} as const;
