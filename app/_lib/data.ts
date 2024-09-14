import React from "react";
// Icons
import { BiLogoPostgresql } from "react-icons/bi";
import { CgPerformance } from "react-icons/cg";
import { FaCss3, FaGithub, FaHtml5, FaNodeJs, FaReact } from "react-icons/fa";
import { GrGraphQl } from "react-icons/gr";
import { IoLogoJavascript } from "react-icons/io";
import { RiNextjsFill, RiTailwindCssFill } from "react-icons/ri";
import { SiExpress, SiGithubactions, SiJest, SiMongodb, SiPrisma, SiReactquery, SiRedux, SiStorybook, SiSupabase, SiTypescript, SiVite, SiWebpack } from "react-icons/si";
import { TbBrandFramerMotion } from "react-icons/tb";
import { IoAccessibilityOutline } from "react-icons/io5";
import { MdOutlineEngineering } from "react-icons/md";

// Images
import iProShopImg from "@/public/projects/ipro-shop.png";
import messengerCloneImg from "@/public/projects/messenger-clone.png";
import wildOasisDashboard from "@/public/projects/wild-oasis-dashboard.png";
import wildOasisWeb from "@/public/projects/wild-oasis-web.png";

import dungNguyen from "@/public/testimonial/dung-nguyen.png";
import longNguyen from "@/public/testimonial/long-nguyen.png";

export const links = [
    {
        name: "Home",
        hash: "#home",
    },
    {
        name: "About",
        hash: "#about",
    },
    {
        name: "Projects",
        hash: "#projects",
    },
    {
        name: "Skills",
        hash: "#skills",
    },
    {
        name: "Experience",
        hash: "#experience",
    },
    {
        name: "Services",
        hash: "#services",
    },
    {
        name: "Contact",
        hash: "#contact",
    },
] as const;

export const experiencesData = [
    {
        title: "Senior Frontend Software Engineer",
        company: "UK Parking Control",
        description:
            "",
        iconName: 'ukpc',
        date: "12/2023 - Present",
    },
    {
        title: "Senior Frontend Software Engineer",
        company: "Fpt Software",
        description:
            "",
        iconName: 'fsoft',
        date: "11-12/2023",
    },
    {
        title: "Middle Front-End Software Engineer",
        company: "Setel.com",
        description:
            "",
        iconName: 'setel',
        date: "9/2021 - 10/2023",
    },

    {
        title: "Frontend Developer Intern",
        company: "Pancake.vn",
        description:
            "",
        iconName: 'pancake',
        date: "2020",
    },
] as const;

export const projectsData = [
    {
        title: "Wild Oasis Website",
        description:
            "The guest website of a small hotel with authentication & reservation functionality.",
        tags: ["Next.js", "React", "Supabase", "Tailwind"],
        imageUrl: wildOasisWeb,
        githubSrc: 'https://github.com/howardsolutions/wild-oasis-web',
    },
    {
        title: "Wild Oasis Dashboard",
        description:
            "The internal app of a Boutique Hotel, used like an internal tools for hotel Employees.",
        tags: ["React", "Supabase", "Tailwind", "React Query", "Styled Component"],
        imageUrl: wildOasisDashboard,
        githubSrc: 'https://github.com/howardsolutions/wild-oasis-dashboard',
    },
    {
        title: "IProShop",
        description:
            "Fullstack Ecommerce website, with cart, checkout, create order, payment, admin,... functionality.",
        tags: ["React", "NodeJS", "MongoDB", "CSS", "Express", "Zustand"],
        imageUrl: iProShopImg,
        githubSrc: 'https://github.com/howardsolutions/mern-pro-shop',
    },
    {
        title: "Messenger Clone",
        description:
            "A clone version of messenger, a real time chat app.",
        tags: ["NextJS", "Typescript", "Tailwind", "Prisma", "MongoDB", "Pusher", "Zustand"],
        imageUrl: messengerCloneImg,
        githubSrc: 'https://github.com/howardsolutions/messenger-clone',
    },
] as const;

export const skillsData = [
    {
        label: "HTML",
        icon: React.createElement(FaHtml5)
    },
    {
        label: "CSS",
        icon: React.createElement(FaCss3)
    },
    {
        label: "JavaScript",
        icon: React.createElement(IoLogoJavascript)
    },
    {
        label: "TypeScript",
        icon: React.createElement(SiTypescript)
    },
    {
        label: "React",
        icon: React.createElement(FaReact)
    },
    {
        label: "Next.js",
        icon: React.createElement(RiNextjsFill)
    },
    {
        label: "Node.js",
        icon: React.createElement(FaNodeJs)
    },
    {
        label: "Tailwind",
        icon: React.createElement(RiTailwindCssFill)
    },
    {
        label: "Prisma",
        icon: React.createElement(SiPrisma)
    },
    {
        label: "Git",
        icon: React.createElement(FaGithub)
    },
    {
        label: "MongoDB",
        icon: React.createElement(SiMongodb)
    },
    {
        label: "Supabase",
        icon: React.createElement(SiSupabase)
    },
    {
        label: "Redux",
        icon: React.createElement(SiRedux)
    },
    {
        label: "GraphQL",
        icon: React.createElement(GrGraphQl)
    },
    {
        label: "Express",
        icon: React.createElement(SiExpress)
    },
    {
        label: "PostgreSQL",
        icon: React.createElement(BiLogoPostgresql)
    },
    {
        label: "Jest",
        icon: React.createElement(SiJest)
    },
    {
        label: "Vite",
        icon: React.createElement(SiVite)
    },
    {
        label: "Webpack",
        icon: React.createElement(SiWebpack)
    },
    {
        label: "React-Query",
        icon: React.createElement(SiReactquery)
    },
    {
        label: "Storybook",
        icon: React.createElement(SiStorybook)
    },
    {
        label: "Framer-Motion",
        icon: React.createElement(TbBrandFramerMotion)
    },
    {
        label: "Github-Actions",
        icon: React.createElement(SiGithubactions)
    },
    {
        label: "Performance",
        icon: React.createElement(CgPerformance)
    },
    {
        label: "Accessibility",
        icon: React.createElement(IoAccessibilityOutline)
    },
    {
        label: "Software-Engineering",
        icon: React.createElement(MdOutlineEngineering)
    }
] as const;

export const testimonialsData = [
    {
        id: 1,
        image: dungNguyen,
        name: 'Dung Nguyen - Backend Team Lead',
        text: 'I have worked with Howard as a software developer and can attest his coding and technical skills. Howard is highly skilled in Javascript Framework and has consistently developed high-quality, scalable software solutions for our team. Howard works well in a team and can effectively communicate technical information to non-technical stakeholders.Really sad when to leave this wonderful team and cannot have opportunity to work with Howard anymore but still recommended anyone to work with him!',
    },
    {
        id: 2,
        image: longNguyen,
        name: 'Long Nguyen - Solution Architecture',
        text: 'I worked directly with Howard Phung as a Team leader and Solution architecture at UK Parking Control project. I was impressed by his vast knowledge on Frontend development and his motivation to constantly improve and learn new things, he always try the best to figure out the efficient way to innovate and make frontend applications in the organization better and more performance. He has highly skilled with JavaScript, React, Vite, Tailwind CSS and consistently developed high-quality, scalable frontend solutions for our applications. I really hope we will work together in the future, he is a great asset to a development project.',
    },
    {
        id: 3,
        image:
            'https://images.unsplash.com/photo-1463453091185-61582044d556?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        name: 'Alex Johnson',
        text: 'The attention to detail in his work is impressive. Every aspect of the project was handled with precision and care. I highly recommend their services.',
    },
    {
        id: 4,
        image:
            'https://images.unsplash.com/photo-1564564321837-a57b7070ac4f?q=80&w=1776&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        name: 'David Miller',
        text: "The product not only met but exceeded my expectations. It's clear that he is dedicated to delivering high-quality work. I'm a satisfied customer.",
    },
] as const;