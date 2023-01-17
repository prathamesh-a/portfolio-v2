import {navLinks, menuIconLinks, buttons, social} from "../constants/index.js"
import {useState} from "react"
import "animate.css"
import { motion } from "framer-motion"
import CButton from "./items/CButton.jsx"

export default function Navbar() {

    const [toggle, setToggle] = useState(false)

    function closeMenu() {
        setToggle(prev => !prev)
    }

    return (
        <motion.nav initial={{ opacity: 0, translateY: 20 }}
                    whileInView={{ opacity: 1, translateY: 0 }}
                    viewport={{ once: true }} transition={{ delay: 0, duration: 0.5 }} className="w-full flex py-6 justify-between items-center">
            <img onClick={() => window.location.reload()} src="../assets/logo.png" alt="logo" className="transition ease-in-out duration-500 cursor-pointer w-[48px] h-[48px] hover:bg-[#341A5C]"/>

            <ul className="list-none md:flex hidden justify-end items-center flex-1">
                {navLinks.map((nav, index) => (
                    <li key={nav.id} className={`transition ease-in-out duration-500 hover:text-secondary font-spacemono cursor-pointer text-[16px] text-white mr-10`}>
                        <a onClick={() => closeMenu()} href={`#${nav.id}`}><span className="text-secondary">{`${index+1}.`}</span>{nav.title}</a>
                    </li>
                ))}
                <div onClick={() => window.open(social.resume)}><CButton name={buttons.resume}/></div>

            </ul>

            <div className="md:hidden flex flex-1 justify-end items-center">
                { !toggle && <img
                    src={menuIconLinks.open}
                    alt="menu"
                    className="w-[34px] h-[34px] z-20 absolute"
                    onClick={() => setToggle(prev => !prev)}
                />}
                <div className={`overflow-hidden ${toggle ? "block" : "hidden"} p-6 bg-dimBlue fixed right-0 top-0 min-w-[200px] w-[60%] sidebar`}>
                    <img
                        src={menuIconLinks.close}
                        alt="menu"
                        className="w-[34px] h-[34px] z-20"
                        onClick={() => closeMenu()}
                    />
                    <ul className="h-screen list-none flex flex-col justify-start items-center flex-1 pt-20">
                        {navLinks.map((nav, index) => (
                            <li key={nav.id} className={`hover:text-secondary font-spacemono cursor-pointer text-[16px] text-white ${index === navLinks.length-1 ? "" : "mb-10"}`}>
                                <a onClick={closeMenu} href={`#${nav.id}`}><span className="text-secondary">{`${index+1}.`}</span>{nav.title}</a>
                            </li>
                        ))}
                        <button onClick={() => window.open(social.resume)} className="border-secondary border-2 rounded-md px-3 py-1 text-secondary font-spacemono mt-12 mx-auto">{buttons.resume}</button>
                    </ul>

                </div>
            </div>
        </motion.nav>
    )
}