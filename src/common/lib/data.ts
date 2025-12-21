import React from 'react';

import portfolioImg from '@/../public/image/portfolio.png';
import {  BriefcaseBusinessIcon } from 'lucide-react';
import skyloovImg from "@/../public/image/skyloov-logo.png";
import FineHomeImg from "@/../public/image/Fine-Homee.png";
import AqaryInvestmentImg from "@/../public/image/AID.png";
import GreatFineImg from "@/../public/image/great-fine.jpg"

export const links = [
  {
    name: 'Home',
    id: 'home',
  },
  {
    name: 'About',
    id: 'about',
  },
  {
    name: 'Projects',
    id: 'projects',
  },
  {
    name: 'Experience',
    id: 'experience',
  },
  {
    name: 'Skills',
    id: 'skills',
  },
  {
    name: 'Contact',
    id: 'contact',
  },
] as const;

export const experiencesData = [
  {
    title: 'Aqary International Group',
    location: 'Abu Dhabi, UAE',
    description:
      'Front-end Developer. Specializing in building responsive, user-friendly web interfaces to support Aqary’s real estate platforms, with a focus on modern front-end technologies, seamless user experiences, and innovative digital solutions.',
    icon: React.createElement(BriefcaseBusinessIcon),
    date: 'Sep 2023 - Present',
  },
  {
    title: 'Skyloov Property Portal',
    location: 'Dubai, UAE',
    description:
      'Front-end Developer. Delivering flawless UI/UX, Frontend Workflow, Architecture & App Development.',
    icon: React.createElement(BriefcaseBusinessIcon),
    date: 'Oct 2022 - Aug 2023',
  },
  {
    title: 'Cloudtek',
    location: 'Islamabad, Pakistan',
    description:
      'Junior Front-end Developer. Skilled in building responsive interfaces, collaborating with senior developers to understand system flow, and actively solving client-side issues and test cases.',
    icon: React.createElement(BriefcaseBusinessIcon),
    date: 'Jun 2021 - Jul 2022',
  },
] as const;


export const projectsData = [
  {
    title: 'Skyloov Property Portal',
    description: `Skyloov is a modern property portal in the UAE that connects users with verified real estate listings. Whether you're buying, renting, or investing, Skyloov offers a simple and reliable way to find your perfect property.`,
    tags: ['React', 'TypeScript', 'Next.js', 'Scss'],
    imageUrl: skyloovImg,
    link: 'https://www.skyloov.com/',
  },
  {
    title: 'Fine Home Real Estate',
    description:
      'Fine Home Real Estate is a trusted real estate agency based in Abu Dhabi, offering a wide range of residential and commercial properties. With expert market knowledge and personalized service, Fine Home helps clients buy, sell, and rent with confidence across the UAE.',
    tags: ['TypeScript', 'React', 'Next.js', 'GraphQL'],
    imageUrl: FineHomeImg,
    link: 'https://finehomeint.com/en',
  },
  {
    title: 'Aqary Investment & Development',
    description:
      'Aqary Investment & Development is a leading real estate company in Abu Dhabi, offering expert services in property development, investment, and management across the UAE.',
      tags: ['TypeScript', 'React', 'Next.js', 'GraphQL'],
    imageUrl: AqaryInvestmentImg,
    link: 'https://aqaryaid.com/en',
  },
  {
    title: 'Great Fine Home',
    description:
      'Great Fine Home Real Estate is a Dubai-based real estate company offering buying, selling, and leasing services for residential and commercial properties, with a focus on professional client support.',
      tags: ['TypeScript', 'React', 'Next.js', 'GraphQL'],
    imageUrl: GreatFineImg,
    link: 'https://aqaryaid.com/en',
  },
  {
    title: 'Portfolio',
    description: `Portfolio that you're currently viewing! This project showcases my work and provides information about me.`,
    tags: [
      'React',
      'TypeScript',
      'Next.js',
      'Framer Motion',
      'Cloudinary',
      'React Email',
      'Tailwind',
    ],
    imageUrl: portfolioImg,
    link: 'https://www.haseeb-ul-hasan.com/',
  },

  
] as const;

export const skillsData = [
  ['HTML', '/svgs/file-type-html.svg'],
  ['CSS', '/svgs/file-type-css.svg'],
  ['JavaScript', '/svgs/javascript-js.svg'],
  ['TypeScript', '/svgs/typescript-icon.svg'],
  ['React', '/svgs/react.svg'],
  ['Next.js', '/svgs/nextjs.svg'],
  ['Tailwind', '/svgs/tailwind-css.svg'],
  ['Sass', '/svgs/Sass.svg'],
  ['Axios', '/svgs/axios.svg'],
  ['Redux', '/svgs/redux-original.svg'],
  ['Zustand', '/svgs/zustand.svg'],
  ['Shadcn', '/svgs/shadcnui.svg'],
  ["Material UI", "/svgs/mui.svg"],
  ['GitHub', '/svgs/github.svg'],
 
] as const;
