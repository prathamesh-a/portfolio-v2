import SubTitle from "./items/SubTitle.jsx";
import ProjectTemplate from "./items/ProjectTemplate.jsx";
import {projects} from "../constants/index.js";
import {data} from "autoprefixer";

export default function Projects() {
    return (
        <div className="mt-32 mb-40">
            <SubTitle no="03." title="My Projects"/>
            <div className="mt-12">
                {
                    projects.map(data =>
                        <ProjectTemplate
                            key={Math.random()}
                            img={data.img}
                            imgHover={data.hover}
                            imgBg={data.bg}
                            title={data.title}
                            desc={data.desc}
                            git={data.git}
                            techStack={data.techStack}
                            align={data.align}
                            playBtn={data.playBtn}
                            url={data.url}
                            className={data.className}
                        />
                    )
                }
            </div>

            <div className="text-[14px] text-gray-400 mt-12 font-spacemono flex">
                <p className="md:z-20">check my all projects on <span onClick={() => window.open("https://github.com/prathamesh-a?tab=repositories")} className="text-secondary cursor-pointer hover:underline">github</span></p>
            </div>
        </div>
    )
}