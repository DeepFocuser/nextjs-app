'use client';

import {memo, useState} from "react";
import Projectcard from "@/app/about/structure/projectcard";
import ProjectsNavbar from "../structure/projectsnavbar";
import {projects as projectsData} from "../data";
import {Category, IProject} from "../structure/types";
import {motion} from "framer-motion";

function Home() {

    const [projects, setProjects] = useState<IProject[]>(projectsData);
    const [active, setActive] = useState<string>("All");

    const handlerFilterCategory = (category: Category | "All") => {
        if (category === "All") {
            setProjects(projectsData);
            setActive(category);
            return;
        }
        const newArray = projectsData.filter((project) => project.category.includes(category));
        setProjects(newArray);
        setActive(category);
    };
    // projects-scrollbar는 custom class globals.css 보면됨
    return (<div
        className="projects-scrollbar px-4 py-2 overflow-y-scroll h-[28rem] max-[1535px]:h-[33rem] max-[1535px]:mt-2.5 max-[1279px]:mb-12">
        <ProjectsNavbar
            handlerFilterCategory={handlerFilterCategory}
            active={active}
        />
        <div className="relative grid grid-cols-12 gap-6 my-3">
            {projects.map((project, index) => (
                <motion.div
                    className="col-span-12 p-1 bg-base-300 rounded-lg sm:col-span-6 lg:col-span-4 max-[1279px]:my-0.5 border"
                    key={project.name}
                    initial={{opacity: 0.0, scale: 0.7}}
                    animate={{
                        scale: [1, 1, 1],
                        opacity: [0.0, 0.0, 1],
                        y: [70, 0],
                    }}
                    transition={{type: 'spring', duration: 0.5 + index / projects.length,}}
                >
                    <Projectcard {...project}/>
                </motion.div>))}
        </div>
    </div>);
}

export default memo(Home);
