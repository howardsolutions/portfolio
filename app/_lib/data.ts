import React from "react";
// Icons
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
// Images
import wildOasisWeb from "@/public/projects/wild-oasis-web.png";
import wildOasisDashboard from "@/public/projects/wild-oasis-dashboard.png";
import iProShopImg from "@/public/projects/ipro-shop.png";
import messengerCloneImg from "@/public/projects/messenger-clone.png";
import priceScraper from "@/public/projects/price-wise-scrapper.png";

export const links = [
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
        name: "Services",
        hash: "#services",
    },
    {
        name: "Experience",
        hash: "#experience",
    },
    {
        name: "Testimonial",
        hash: "#testimonial",
    },
    {
        name: "Contact",
        hash: "#contact",
    },
] as const;

export const experiencesData = [
    {
        title: "Graduated bootcamp",
        location: "Miami, FL",
        description:
            "I graduated after 6 months of studying. I immediately found a job as a front-end developer.",
        icon: React.createElement(LuGraduationCap),
        date: "2019",
    },
    {
        title: "Front-End Developer",
        location: "Orlando, FL",
        description:
            "I worked as a front-end developer for 2 years in 1 job and 1 year in another job. I also upskilled to the full stack.",
        icon: React.createElement(CgWorkAlt),
        date: "2019 - 2021",
    },
    {
        title: "Full-Stack Developer",
        location: "Houston, TX",
        description:
            "I'm now a full-stack developer working as a freelancer. My stack includes React, Next.js, TypeScript, Tailwind, Prisma and MongoDB. I'm open to full-time opportunities.",
        icon: React.createElement(FaReact),
        date: "2021 - present",
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
            "A Scraping site is designed to assist users in making informed decisions. It notifies users when a product drops in price and helps competitors by alerting them when the product is out of stock, all managed through cron jobs.",
        tags: ["NextJS", "Typescript", "Tailwind", "Prisma", "MongoDB", "CRON"],
        imageUrl: priceScraper,
    },
] as const;

export const skillsData = [
    "HTML",
    "CSS",
    "JavaScript",
    "TypeScript",
    "React",
    "Next.js",
    "Node.js",
    "Git",
    "Tailwind",
    "Prisma",
    "MongoDB",
    "Redux",
    "GraphQL",
    "Apollo",
    "Express",
    "PostgreSQL",
    "Python",
    "Django",
    "Framer Motion",
] as const;
