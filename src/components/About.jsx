import SubTitle from "./items/SubTitle.jsx";
import {about} from "../constants/index.js";
import { motion } from "framer-motion";

export default function About() {
    return (
        <div className="mt-12 mb-24">
            <SubTitle no="02." title="About Me"/>

            {/*BIG SCREEN*/}
            <motion.div initial={{ opacity: 0, translateY: 20 }}
                        whileInView={{ opacity: 1, translateY: 0 }}
                        viewport={{ once: true }} transition={{ delay: 0.7, duration: 0.5 }} className="md:flex hidden font-inter justify-around font-inter text-[16px]">
                <div>
                    <p className="text-gray-400 mt-12 font-inter">{about.intro}</p>
                    <p className="text-gray-400 mt-6 font-inter">{about.about_1}</p>
                    <p className="text-gray-400 mt-6 font-inter">{about.techIntro}</p> <br/>
                    <div className="font-spacemono text-gray-400 flex">
                        <ul className="w-[30%]">
                            {about.techStack1.map(data => <li key={Math.random()} className="text-[14px]" ><div className="flex mb-1"><p className="text-secondary mr-1">▹</p>{data}</div></li>)}
                        </ul>
                        <ul className=" w-[25%]">
                            {about.techStack2.map(data => <li key={Math.random()} className="text-[14px]" ><div className="flex mb-1"><p className="text-secondary mr-1">▹</p>{data}</div></li>)}
                        </ul>
                        <ul className=" w-[30%]">
                            {about.techStack3.map(data => <li key={Math.random()} className="text-[14px]" ><div className="flex mb-1"><p className="text-secondary mr-1">▹</p>{data}</div></li>)}
                        </ul>
                    </div>
                </div>
                <div className="min-w-[40%] mt-12 z-20">
                    <div className=" ml-12 w-[75%] hover:bg-secondary bg-dimWhite hover:scale-105 transition ease-in-out duration-500 rounded-lg">
                        <img className="" src="../assets/profile.png" alt="profile"/>
                    </div>
                </div>
            </motion.div>

            {/*SMALL SCREEN*/}
            <motion.div initial={{  translateY: 10 }}
                        whileInView={{  translateY: 0 }}
                        viewport={{ once: true }} transition={{ delay: 0.7, duration: 0.5 }} className="md:hidden flex flex-col font-inter text-[14px] sm:text-[16px] items-center">
                <div>
                    <p className="text-gray-400 mt-12 font-inter">{about.intro}</p>
                    <p className="text-gray-400 mt-6 font-inter">{about.about_1}</p>
                    <p className="text-gray-400 mt-6 font-inter">{about.techIntro}</p> <br/>
                    <div className="font-spacemono text-gray-400 flex justify-around">
                        <ul className="w-[30%]">
                            {about.techStack1.map(data => <li key={Math.random()} className="sm:text-[14px] text-[13px]" ><div className="flex mb-1"><p className="text-secondary mr-1">▹</p>{data}</div></li>)}
                        </ul>
                        <ul className=" w-[25%]">
                            {about.techStack2.map(data => <li key={Math.random()} className="sm:text-[14px] text-[13px]" ><div className="flex mb-1"><p className="text-secondary mr-1">▹</p>{data}</div></li>)}
                        </ul>
                        <ul className=" w-[30%]">
                            {about.techStack3.map(data => <li key={Math.random()} className="sm:text-[14px] text-[13px]" ><div className="flex mb-1"><p className="text-secondary mr-1">▹</p>{data}</div></li>)}
                        </ul>
                    </div>
                </div>
                <div className="sm:max-w-[30%] min-w-[50%] flex justify-center mt-6">
                    <div className="flex justify-center w-[75%] hover:bg-secondary bg-dimWhite hover:scale-105 transition ease-in-out duration-500 rounded-lg">
                        <img className="" src="../assets/profile.png" alt="profile"/>
                    </div>
                </div>
            </motion.div>
        </div>
    )
}