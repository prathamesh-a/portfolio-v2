import SubTitle from "./items/SubTitle.jsx";
import {contact} from "../constants/index.js";
import CButton from "./items/CButton.jsx";

export default function Contact() {
    return (
        <div className="pt-24 mb-32">
            <SubTitle no="04." title="Get In Touch"/>
            <div className="flex">
                <div className="md:z-20">
                    <p className="text-gray-400 md:p-12 p-6">{contact.desc}</p>
                    <div onClick={() => window.open("https://mail.google.com/mail/?view=cm&fs=1&to=prathamesh16.auti@gmail.com")} className="flex justify-center"><CButton name={contact.btn}/></div>
                </div>
            </div>
        </div>
    )
}