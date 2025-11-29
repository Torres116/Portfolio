import {SkillTag, SkillTagProps} from "@/SkillTag";
import Image from "next/image";
import Link from "next/link";

export interface ProjectCardProps {
    title: string,
    description: string,
    tags: SkillTagProps[],
    codeLink: string
    demoLink?: string
}

export const ProjectCard = ({title, description, tags, codeLink, demoLink}: ProjectCardProps) => {

    return <div className={"flex flex-col gap-y-2 px-1 py-4 lg:w-5xl"}>

        <h1 className={"font-figtree font-semibold text-2xl"}>{title}</h1>
        <h2 className={"text-lg text-darkblue font-medium"}>{description}</h2>

        <div className={"flex flex-row flex-wrap justify-center items-center gap-4 py-2"}>
            {
                tags &&
                tags.map((val, idx) => (
                    <SkillTag title={val.title} image={val.image} key={idx} bgTransparent={true}/>
                ))
            }
        </div>

        <div className={"flex flex-row flex-wrap justify-end gap-4 p-4 "}>

            <Link href={codeLink ?? ""} target={"_blank"} rel={"noreferrer noopener"}
                  className={"flex flex-row items-end gap-2 hover:opacity-50 duration-300 transform-opacity"}>
                <p className={"text-lg font-semibold font-figtree underline underline-offset-2"}>Code</p>
                <Image src={"/github_logo.svg"} width={36} height={36} alt={"github logo"}/>
            </Link>

            <Link href={demoLink ?? ""} target={"_blank"} rel={"noreferrer noopener"}
                  className={"flex flex-row items-end gap-2 hover:opacity-50 duration-300 transform-opacity"}>
                <p className={"text-lg text-green font-semibold font-figtree underline underline-offset-2"}>Demo</p>
                <Image src={"/redirect_icon.svg"} width={36} height={36} alt={"redirect icon"}/>
            </Link>

        </div>
    </div>
}