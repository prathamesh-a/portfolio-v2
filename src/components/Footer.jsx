import {social} from "../constants/index.js";
import SocialIcon from "./items/SocialIcon.jsx";

export default function Footer() {
    return (
        <div className="">
            <div className="md:hidden flex justify-center">
                <ul className="cursor-pointer md:z-20 flex">
                    {social.icons.map(data => <div className="mx-4" key={Math.random()}><SocialIcon key={Math.random()} img={data.img} hover={data.hover} url={data.url}/></div>)}
                </ul>
            </div>
            <p className="text-[13px] font-spacemono text-gray-400 text-center mb-1">Built by Prathamesh Auti</p>
            <div className="flex justify-center font-spacemono mb-6">
                <p className="md:z-20 text-gray-400 text-[10px]">design inspired by <span className="cursor-pointer" onClick={() => window.open("https://brittanychiang.com/")}>Brittany Chiang</span></p>
            </div>
        </div>
    )
}