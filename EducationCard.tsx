import Image from "next/image";

export interface EducationCardProps {
    title: string,
    description: string,
    relevantCoursework?: string,
    graduationDate: string,
    graduated: boolean
}

export const EducationCard = ({
                                  title,
                                  description,
                                  relevantCoursework,
                                  graduationDate,
                                  graduated
                              }: EducationCardProps) => {

    return <div
        className={"flex flex-row items-center gap-10 max-w-[750px] rounded-lg border-2 border-green shadow-sm p-4"}>

        <div className={"hidden md:flex items-center justify-center w-[54px] h-[54px] rounded-xl bg-green "}>
            <Image src={"/student_icon.svg"} width={36} height={36} alt={"student logo"}/>
        </div>

        <div className={"block"}>

            <h1 className={"font-figtree font-semibold text-xl"}>{title}</h1>
            <h2 className={"md:text-lg text-darkblue "}>{description}</h2>

            {
                relevantCoursework &&
                <h2 className={" py-1 text-base text-darkblue"}><span
                    className={"text-bold md:text-lg text-black text-wrap"}>Relevant coursework:<br
                    className={"flex md:hidden"}/> </span> {relevantCoursework}
                </h2>
            }

            <h1 className={"font-figtree font-semibold md:text-xl text-center py-2"}>
                {
                    graduated ?
                        `graduated in ${graduationDate}` : `Expected to graduate in ${graduationDate}`
                }
            </h1>
        </div>
    </div>
}