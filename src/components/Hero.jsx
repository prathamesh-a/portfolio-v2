import {buttons, hero} from "../constants/index.js";
import { motion } from "framer-motion"
import CButton from "./items/CButton.jsx";

export default function Hero() {
    return (
        <div className="">
            {/*BIG SCREEN*/}
            <motion.div initial={{ opacity: 0, translateY: 20 }}
                        whileInView={{ opacity: 1, translateY: 0 }}
                        viewport={{ once: true }} transition={{ delay: 0.7, duration: 0.5 }} className={`md:block hidden mt-16 pb-44`}>
                <p className={`font-spacemono text-secondary text-[20px]`}>{hero.intro}</p>
                <p className={`font-inter text-boldWhite font-black text-[66px] tracking-wide mt-4`}>{hero.name}</p>
                <p className={`font-inter text-dimWhite text-[56px] font-bold -mt-6`}>{hero.title}</p>
                <div className={`w-2/3 text-gray-400 mt-6`}>
                    <p className={`text-[18px]`}>{hero.desc}</p>
                </div>
                <div onClick={() => location.href = "#about"} className="mt-12">
                    <CButton name="Know More"/>
                </div>
            </motion.div>

            {/*SMALL SCREEN*/}
            <motion.div initial={{  translateY: 10 }}
                        whileInView={{  translateY: 0 }}
                        viewport={{ once: true }} transition={{ delay: 0.7, duration: 0.5 }} className={`md:hidden block mt-6 pb-24`}>
                <p className={`font-spacemono text-secondary text-[16px]`}>{hero.intro}</p>
                <p className={`font-inter text-boldWhite font-black text-[30px]`}>{hero.name}</p>
                <p className={`font-inter text-dimWhite font-bold text-[28px] -mt-2`}>{hero.title}</p>
                <div className={`text-gray-400 mt-6`}>
                    <p>{hero.desc}</p>
                </div>
                <div onClick={() => location.href = "#about"} className="mt-12">
                    <CButton name={buttons.know_more}/>
                </div>
            </motion.div>
        </div>

    )
}