import React from "react";
// Icons
import { CgPerformance, CgWorkAlt } from "react-icons/cg";
import { FaReact, FaHtml5, FaCss3, FaNodeJs, FaGithub } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import { IoLogoJavascript } from "react-icons/io";
import { SiExpress, SiGithubactions, SiJest, SiMongodb, SiPrisma, SiReactquery, SiRedux, SiStorybook, SiSupabase, SiTypescript, SiVite, SiWebpack } from "react-icons/si";
import { RiNextjsFill, RiTailwindCssFill } from "react-icons/ri";
import { GrGraphQl } from "react-icons/gr";
import { BiLogoPostgresql } from "react-icons/bi";
import { TbBrandFramerMotion } from "react-icons/tb";
// Images
import wildOasisWeb from "@/public/projects/wild-oasis-web.png";
import wildOasisDashboard from "@/public/projects/wild-oasis-dashboard.png";
import iProShopImg from "@/public/projects/ipro-shop.png";
import messengerCloneImg from "@/public/projects/messenger-clone.png";
import priceScraper from "@/public/projects/price-wise-scrapper.png";
import { IoAccessibilityOutline } from "react-icons/io5";
import { MdOutlineEngineering } from "react-icons/md";

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
    },
    {
        title: "Wild Oasis Dashboard",
        description:
            "The internal app of a Boutique Hotel, used like an internal tools for hotel Employees.",
        tags: ["React", "Supabase", "Tailwind", "React Query", "Styled Component"],
        imageUrl: wildOasisDashboard,
    },
    {
        title: "IProShop",
        description:
            "Fullstack Ecommerce website, with cart, checkout, create order, payment, admin,... functionality.",
        tags: ["React", "NodeJS", "MongoDB", "CSS", "Express", "Zustand"],
        imageUrl: iProShopImg,
    },
    {
        title: "Messenger Clone",
        description:
            "A clone version of messenger, a real time chat app.",
        tags: ["NextJS", "Typescript", "Tailwind", "Prisma", "MongoDB", "Pusher", "Zustand"],
        imageUrl: messengerCloneImg,
    },
    {
        title: "Wise Price Scrapper",
        description:
            "A Scraping site, designed to assist users making informed decisions. Notifies users when a product drops in price. Helps competitors by alerting them when the product is out of stock, managed through cron jobs.",
        tags: ["NextJS", "Typescript", "Tailwind", "Prisma", "MongoDB", "CRON"],
        imageUrl: priceScraper,
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
        image:
            'https://media.licdn.com/dms/image/C5603AQHzEHP2A1vn1A/profile-displayphoto-shrink_800_800/0/1664276127152?e=1725494400&v=beta&t=lMOen522_co6out4Zej1--W8a-eRjFKmSYYO4_GQJAM',
        name: 'Dung Nguyen - Backend Team Lead',
        text: 'I have worked with Howard as a software developer and can attest his coding and technical skills. Howard is highly skilled in Javascript Framework and has consistently developed high-quality, scalable software solutions for our team. Howard works well in a team and can effectively communicate technical information to non-technical stakeholders.Really sad when to leave this wonderful team and cannot have opportunity to work with Howard anymore but still recommended anyone to work with him!',
    },
    {
        id: 2,
        image:
            'https://media.licdn.com/dms/image/D5635AQEZzsgZXoTcVw/profile-framedphoto-shrink_800_800/0/1686352811576?e=1720584000&v=beta&t=mCxI7kK1lYtoajP4lLaax_7a1nI5F3erSE_LBIZmWtM',
        name: 'Long Nguyen - Solution Architecture',
        text: 'I worked directly with Howard Phung as a Team leader and Solution architecture at UK Parking Control project. I was impressed by his vast knowledge on Frontend development and his motivation to constantly improve and learn new things, he always try the best to figure out the efficient way to innovate and make frontend applications in the organization better and more performance. He has highly skilled with JavaScript, React, Vite, Tailwind CSS and consistently developed high-quality, scalable frontend solutions for our applications. I really hope we will work together in the future, he is a great asset to a development project.',
    },
    {
        id: 3,
        image:
            'https://images.unsplash.com/photo-1463453091185-61582044d556?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        name: 'Alex Johnson',
        text: 'The attention to detail in their work is impressive. Every aspect of the project was handled with precision and care. I highly recommend their services.',
    },
    {
        id: 4,
        image:
            'https://plus.unsplash.com/premium_photo-1671823917954-dc943c1bd9df?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        name: 'Emily Davis',
        text: 'The team demonstrated a deep understanding of my requirements. They were able to capture the essence of my vision and deliver a product that exceeded my expectations.',
    },
    {
        id: 5,
        image:
            'https://images.unsplash.com/photo-1564564321837-a57b7070ac4f?q=80&w=1776&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        name: 'David Miller',
        text: "The product not only met but exceeded my expectations. It's clear that the team is dedicated to delivering high-quality work. I'm a satisfied customer.",
    },
] as const;