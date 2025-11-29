"use client";

import {motion} from 'framer-motion'
import Image from "next/image";
import Link from "next/link";
import {SkillTag} from "@/SkillTag";
import {ProjectCard, ProjectCardProps} from "@/ProjectCard";
import {EducationCard, EducationCardProps} from "@/EducationCard";

export default function Home() {

    // Skills Section
    const skills = [
        {title: "C#", image: "/skills/csharp.svg"},
        {title: "Typescript", image: "/skills/typescript.svg"},
        {title: "Javascript", image: "/skills/javascript.svg"},
        {title: "Golang", image: "/skills/golang.svg"},
        {title: "SQL", image: "/skills/postgresql.svg"},
        {title: "Git", image: "/skills/git.svg"},
        {title: "Docker", image: "/skills/docker.svg"},
        {title: "SQL Server", image: "/skills/sqlserver.svg"},
        {title: "Postgres admin", image: "/skills/pgadmin.svg"},
        {title: "MongoDB", image: "/skills/mongodb.svg"},
        {title: "Postman", image: "/skills/postman.svg"},
        {title: ".NET Framework", image: "/skills/netframework.svg"},
        {title: ".NET Core", image: "/skills/netcore.svg"},
        {title: "React", image: "/skills/react.svg"},
        {title: "Tailwind", image: "/skills/tailwind.svg"}
    ];

    const languages = [
        {title: "C#", image: "/skills/csharp.svg"},
        {title: "Typescript", image: "/skills/typescript.svg"},
        {title: "Javascript", image: "/skills/javascript.svg"},
        {title: "Golang", image: "/skills/golang.svg"},
        {title: "SQL", image: "/skills/postgresql.svg"}
    ];

    // Projects Section
    const eCommerceProject: ProjectCardProps = {
        title: "Fullstack E-Commerce Car Rental Shop",
        description: "Fullstack e-commerce web application for car rentals with the backend built" +
            " with DDD principles. Features include authentication, car management, and booking system",
        tags:
            [
                {title: "Typescript", image: "/skills/typescript.svg"},
                {title: "C#", image: "/skills/csharp.svg"},
                {title: "React", image: "/skills/react.svg"},
                {title: "Postgres Admin", image: "/skills/pgadmin.svg"},
                {title: "Supabase", image: "/skills/supabase.svg"},
                {title: "React Query", image: "/skills/reactquery.svg"},
                {title: "Tailwind", image: "/skills/tailwind.svg"},
                {title: "Fluent Validation"},
                {title: "Postman", image: "/skills/postman.svg"},
                {title: "AutoMapper"}
            ],
        codeLink: "https://github.com/Torres116/E-Commerce-CarRentShop"
    }

    const csharpTypescriptConverter: ProjectCardProps = {
        title: "C# to Typescript data model converter",
        description: "Developed a .NET tool that converts C# data models into TypeScript, " +
            "definitons while enabling type-safe shared models between backend and frontend.",
        tags: [
            {title: "C#", image: "/skills/csharp.svg"},
            {title: "Blazor", image: "/skills/blazor.svg"},
            {title: "Tailwind", image: "/skills/tailwind.svg"},
            {title: "Typescript", image: "/skills/typescript.svg"},
            {title: "HTML", image: "/skills/html.svg"}
        ],
        codeLink: "https://github.com/Torres116/CSharp2Typescript"
    }

    const projects: ProjectCardProps[] = [csharpTypescriptConverter,eCommerceProject];

    // Education Section
    const bachelor: EducationCardProps = {
        title: "Bachelor in Computer Science",
        description: "ISTEC - Instituto de Tecnologias avançadas de Lisboa",
        relevantCoursework: "Software Engineering, Web Development, Databases, Algorithms.",
        graduated: new Date().getMonth() == 7,
        graduationDate: "Summer 2026"
    }

    const education: EducationCardProps[] = [bachelor];

    return (
        <div className="flex min-h-screen items-center justify-center bg-light font-sans ">

            <header className={"fixed top-0 left-0 w-full bg-transparent z-50"}>
                <div className="max-w-7xl mx-auto flex justify-center md:justify-between items-center px-6 py-4 h-16">
                    <h1 className="hidden lg:flex lg:text-2xl font-bold">João Torres</h1>
                    <nav className="space-x-6 text-sm lg:text-lg  font-semibold font-figtree">
                        <a href="#skills" className="hover:text-brown">Skills</a>
                        <a href="#projects" className="hover:text-brown">Projects</a>
                        <a href="#education" className="hover:text-brown">Education</a>
                        <a href="#contact" className="hover:text-brown">Contact</a>
                    </nav>
                </div>
            </header>

            <main className="min-h-screen ">

                {/* Hero */}
                <motion.section
                    className="min-h-screen pt-16 flex flex-col justify-center items-center px-6 space-y-2"
                    initial={{opacity: 0, y: 50}}
                    whileInView={{opacity: 1, y: 0}}
                    viewport={{once: true, amount: 0.3}}
                    transition={{duration: 1.3}}
                >

                    <h1 className={'text-4xl md:text-6xl font-bold text-center'}>
                        Hi, I&#39;m <br className={"flex lg:hidden"}/> João Torres
                    </h1>

                    <motion.div
                        className="flex flex-col flex-wrap justify-center mt-2 space-x-2"
                        initial={{opacity: 0}}
                        whileInView={{opacity: 1}}
                        viewport={{once: true, amount: 0.3}}
                        transition={{duration: 2, delay: 1}}
                    >

                        <p className={'text-xl xl:text-2xl font-semibold text-center text-darkblue'}>
                            Software Developer
                        </p>

                        <div className={"flex flex-row flex-wrap justify-center mt-3  gap-4 py-2"}>

                            <a href={"#skills"}
                                className={"flex items-center justify-center bg-brown rounded-lg cursor-pointer " +
                                    "font-medium text-2xl text-white font-figtree h-[45px] w-[150px] " +
                                    "hover:opacity-70 duration-300 transform-opacity"}>
                                Skills
                            </a>

                            <a href={"#contact"}
                                className={"flex items-center justify-center h-[45px] w-[150px] py-2 px-4 cursor-pointer " +
                                    "border-2 border-brown rounded-lg font-medium text-2xl text-brown font-figtree " +
                                    "hover:opacity-70 duration-300 transform-opacity"}>
                                Contact
                            </a>

                        </div>

                        <div className={"flex flex-row flex-wrap justify-center mt-3 space-x-6"}>

                            <Link href={"https://github.com/Torres116"} target={"_blank"} rel={"noreferrer noopener"}
                                  className={"hover:opacity-50 hover:scale-125 duration-300 transform"}>
                                <Image src={"/github_logo.svg"} width={36} height={36} alt={"github logo"}/>
                            </Link>

                            <Link href={"https://www.linkedin.com/in/joao-carlos-torres/"} target={"_blank"}
                                  rel={"noreferrer noopener"}
                                  className={"hover:opacity-50 hover:scale-125 duration-300 transform"}>
                                <Image src={"/linkedin_logo.svg"} width={36} height={36} alt={"linkedin logo"}/>
                            </Link>

                            <Link href={"mailto:medinact111@gmail.com"} target={"_blank"} rel={"noreferrer noopener"}
                                  className={"hover:opacity-50 hover:scale-125 duration-300 transform"}>
                                <Image src={"/email_icon.svg"} width={36} height={36} alt={"email logo"}/>
                            </Link>

                        </div>

                    </motion.div>


                </motion.section>

                <motion.section
                    className="min-h-screen pt-16 flex flex-col justify-center items-center px-6 space-y-4"
                    initial={{opacity: 0, y: 50}}
                    whileInView={{opacity: 1, y: 0}}
                    viewport={{once: true, amount: 0.3}}
                    transition={{duration: 1.3}}
                    id="aboutme"
                >

                    <h2 className={'text-2xl xl:text-4xl font-bold text-center '}>
                        About Me
                    </h2>


                    <motion.div
                        className="flex flex-col flex-wrap justify-center mt-2 space-x-2"
                        initial={{opacity: 0}}
                        whileInView={{opacity: 1}}
                        viewport={{once: true, amount: 0.3}}
                        transition={{duration: 2, delay: 1}}
                    >
                        <p className={'text-lg xl:text-2xl md:max-w-[1000px] text-justify text-darkblue text-pretty'}>
                            I&#39;m a final-year Computer Science Engineering student that enjoys building web and
                            backend applications. <br className={"flex md:hidden mt-1"}/>
                            I&#39;m currently looking for an internship where I can learn and contribute with my
                            technical and
                            problem-solving skills.
                        </p>

                    </motion.div>

                </motion.section>

                <motion.section
                    className="min-h-screen pt-16 flex flex-col justify-center items-center px-6 space-y-4"
                    initial={{opacity: 0, y: 50}}
                    whileInView={{opacity: 1, y: 0}}
                    viewport={{once: true, amount: 0.3}}
                    transition={{duration: 1.3}}
                    id="skills"
                >

                    <h2 className={'text-2xl xl:text-4xl font-bold text-center font-figtree'}>
                        Skills
                    </h2>

                    <motion.div
                        className="flex flex-col flex-wrap justify-center mt-2 space-x-2"
                        initial={{opacity: 0, y: 50}}
                        whileInView={{opacity: 1, y: 0}}
                        viewport={{once: true, amount: 0.3}}
                        transition={{duration: 1, delay: 1}}
                    >


                        <div className="flex flex-col  justify-center gap-10 lg:gap-x-44 md:gap-y-20 py-10
                        ">
                            {
                                skills && (
                                    <div
                                        className="flex flex-row flex-wrap max-w-[1000px] justify-center gap-10 lg:gap-x-40 lg:gap-y-20 py-4">
                                        {skills.map((val, idx) => (
                                            <motion.div
                                                key={idx}
                                                className="inline-block"
                                                initial={{opacity: 0, x: 50}}
                                                animate={{opacity: 1, x: 0, y: ["0%", "-5%", "0%"]}}
                                                transition={{
                                                    opacity: {duration: 1, delay: idx * 0.3}, // fade sequence
                                                    y: {
                                                        duration: 1,
                                                        repeat: Infinity,
                                                        repeatType: "loop",
                                                        delay: idx * 0.3,
                                                        ease: "easeInOut",
                                                    },
                                                    x: {duration: 0.3, delay: idx * 0.3, ease: "easeOut"},
                                                }}
                                            >
                                                <Image
                                                    src={val.image}
                                                    alt="skill icon"
                                                    width={44}
                                                    height={44}
                                                    className="md:hover:scale-110 xl:hover:scale-150 duration-300 transform-origin-center"
                                                />
                                            </motion.div>
                                        ))}
                                    </div>
                                )
                            }

                            <div className={"flex flex-col gap-10"}>
                                <p className={'text-xl xl:text-2xl font-semibold text-center text-darkblue'}>
                                    Languages
                                </p>

                                <div className={"flex flex-row flex-wrap justify-center space-x-4 gap-y-1 pb-20"}>
                                    {
                                        languages &&
                                        languages.map((val, idx) => (
                                            <SkillTag title={val.title} image={val.image} key={idx}/>
                                        ))
                                    }
                                </div>
                            </div>

                        </div>
                    </motion.div>


                </motion.section>

                <motion.section
                    className="min-h-screen pt-16 flex flex-col justify-center items-center px-6 space-y-4"
                    initial={{opacity: 0, y: 50}}
                    whileInView={{opacity: 1, y: 0}}
                    viewport={{once: true, amount: 0.3}}
                    transition={{duration: 1.3}}
                    id="projects"
                >

                    <h2 className={'text-2xl xl:text-4xl font-bold text-center font-figtree'}>
                        Projects
                    </h2>

                    <motion.div
                        className="flex flex-col justify-center mt-6 space-y-2"
                        initial={{opacity: 0}}
                        whileInView={{opacity: 1}}
                        viewport={{once: true, amount: 0.3}}
                        transition={{duration: 2, delay: 1}}
                    >

                        <div className={"flex flex-row flex-wrap justify-center space-x-4 gap-y-1 py-1"}>
                            {
                                projects &&
                                projects.map((val, idx) => (
                                    <ProjectCard title={val.title} description={val.description} tags={val.tags}
                                                 key={idx} codeLink={val.codeLink}/>
                                ))
                            }
                        </div>

                    </motion.div>

                </motion.section>

                <motion.section
                    className="min-h-screen flex flex-col justify-center items-center px-6 space-y-4"
                    initial={{opacity: 0, y: 50}}
                    whileInView={{opacity: 1, y: 0}}
                    viewport={{once: true, amount: 0.3}}
                    transition={{duration: 1.3}}
                    id="education"
                >

                    <h2 className={'text-xl xl:text-4xl  font-bold text-center font-figtree'}>
                        Education
                    </h2>

                    <motion.div
                        className="flex flex-col justify-center space-y-2"
                        initial={{opacity: 0}}
                        whileInView={{opacity: 1}}
                        viewport={{once: true, amount: 0.3}}
                        transition={{duration: 2, delay: 1}}
                    >

                        <div className={"flex flex-row flex-wrap justify-center space-x-4 gap-y-1 py-1"}>
                            {
                                education &&
                                education.map((val, idx) => (
                                    <EducationCard title={val.title} description={val.description}
                                                   graduated={val.graduated} graduationDate={val.graduationDate}
                                                   relevantCoursework={val.relevantCoursework} key={idx}/>
                                ))
                            }

                        </div>

                    </motion.div>
                </motion.section>

                <motion.section
                    className="min-h-screen pt-16 flex flex-col justify-center items-center px-6 space-y-4"
                    initial={{opacity: 0, y: 50}}
                    whileInView={{opacity: 1, y: 0}}
                    viewport={{once: true, amount: 0.3}}
                    transition={{duration: 1.3}}
                    id="contact"
                >

                    <h2 className={'text-xl xl:text-4xl font-bold text-center font-figtree'}>
                        Contact
                    </h2>

                    <motion.div
                        className="flex flex-col justify-center mt-6 space-y-5"
                        initial={{opacity: 0}}
                        whileInView={{opacity: 1}}
                        viewport={{once: true, amount: 0.3}}
                        transition={{duration: 2, delay: 1}}
                    >

                        <div className={"flex flex-row items-center gap-4 "}>
                            <Image src={"/github_logo.svg"} width={36} height={36} alt={"github logo"}/>
                            <Link href={"https://github.com/Torres116"} target={"_blank"} rel={"noreferrer noopener"}
                                  className={"text-lg font-semibold font-figtree underline " +
                                      "hover:opacity-50 duration-300 transform-opacity"}>https://github.com/Torres116</Link>
                        </div>

                        <div className={"flex flex-row items-center gap-4 "}>
                            <Image src={"/linkedin_logo.svg"} width={36} height={36} alt={"linkedin logo"}/>
                            <Link href={"https://www.linkedin.com/in/joao-carlos-torres/"} target={"_blank"}
                                  rel={"noreferrer noopener"}
                                  className={"text-lg font-semibold font-figtree underline " +
                                      "hover:opacity-50 duration-300 transform-opacity"}>https://www.linkedin.com/in/joao-carlos-torres/</Link>
                        </div>

                        <div className={"flex flex-row items-center gap-4 "}>
                            <Image src={"/email_icon.svg"} width={36} height={36} alt={"email icon"}/>
                            <a target={"_blank"} rel={"noreferrer noopener"} href="mailto:medinact111@gmail.com"
                                  className={"text-lg font-semibold font-figtree underline " +
                                      "hover:opacity-50 duration-300 transform-opacity"}>medinact111@gmail.com</a>
                        </div>

                        <p className={'text-xl font-semibold text-center font-figtree text-pretty '}>
                            I&#39;m open to new opportunities. Feel free to reach out.
                        </p>

                        <a className={"flex flex-row gap-2 place-self-center font-bold text-xl bg-transparent font-figtree " +
                            "hover:opacity-70 duration-300 transform-origin-center cursor-pointer"}
                            href={"/João_Torres_CV.pdf"} download>
                            Download CV
                            <Image src={"/download.svg"} width={24} height={24} alt={"download icon"}/>
                        </a>

                    </motion.div>
                </motion.section>
            </main>
        </div>
    );
}
