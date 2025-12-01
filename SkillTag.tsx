import Image, {StaticImageData} from "next/image";
import {useEffect, useState} from "react";

export interface SkillTagProps {
    title: string;
    bgTransparent?: boolean;
    image?: string;
    imageAlt?: string;
}

export const SkillTag = ({title, bgTransparent = false, image, imageAlt}: SkillTagProps) => {

    return (
        <div className="relative group inline-block">

            <div className={`
            ${
                bgTransparent
                    ? "border-2 bordbg-darkblue tebg-darkblue bg-transparent"
                    : "bg-darkblue text-white"
            }
              rounded-lg flex items-center justify-center p-2 text-center text-xl font-semibold
              font-figtree h-[40px] w-[135px] md:w-[190px] shadow-sm pointer-none font-figtree
    
              opacity-100 ${image ? "group-hover:opacity-0" : ""} 
              transition-opacity duration-500 ease-in-out`}>
                {title}
            </div>

            {
                image &&
                (
                    <div
                        className=" absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100
                 transition-opacity duration-500 ease-in-out  ">
                        <img
                            src={image}
                            alt={imageAlt ?? ""}
                            width={40}
                            height={40}
                            className={"hover:scale-110 duration-300 transform "}
                        />
                    </div>
                )
            }
        </div>
    );
};