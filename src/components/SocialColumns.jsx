import SocialIcon from "./items/SocialIcon.jsx"
import { motion } from "framer-motion"
import { social } from "../constants/index.js"

export default function SocialColumns() {
    return (
        <motion.div initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4, duration: 0.5 }}
                    className="md:block hidden">

            <div className="w-[100%] fixed left-0 bottom-0 h-1/2">
                <div className={`flex justify-between h-full`}>
                    <div className=" ml-[5%] w-[5%]">
                        <div className=" text-center">
                            {social.icons.map(data => <SocialIcon key={Math.random()} img={data.img} hover={data.hover} url={data.url}/>)}
                        </div>
                        <div className="">
                            <hr className="origin-top-left h-[2px] w-56 bg-[#aba2b8] border-0 rotate-90 ml-[50%]"/>
                        </div>
                    </div>
                    <div className="mr-[5%] w-[5%]">
                        <div className="transition ease-in-out duration-500 text-center hover:-translate-y-1">
                            <p onClick={() => window.open("https://mail.google.com/mail/?view=cm&fs=1&to=prathamesh16.auti@gmail.com")} className="text-[15px] transition ease-in-out duration-500 font-spacemono text-[#aba2b8] rotate-90 hover:text-secondary cursor-pointer">
                                {social.email}
                            </p>
                        </div>
                        <div className="mt-56">
                            <hr className="origin-top-left h-[2px] w-56 bg-[#aba2b8] border-0 rotate-90 ml-[50%]"/>
                        </div>
                    </div>
                </div>
            </div>
        </motion.div>
    )
}