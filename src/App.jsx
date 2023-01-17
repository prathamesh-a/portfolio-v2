import styles from "./style.js";
import { Navbar, Hero, About, Projects, Contact } from './components/index'
import SocialColumns from "./components/SocialColumns.jsx";
import Loader from "./components/items/Loader.jsx";
import {useState} from "react";
import Footer from "./components/Footer.jsx";

const App = () => {

    const [loader, setLoader] = useState(false)

    return (
        <div className="bg-primary w-full overflow-hidden">

            <Loader setLoader={setLoader}/>

            { loader && <div className={`${styles.paddingX} ${styles.flexCenter}`}>
                <div className={`${styles.boxWidth}`}>
                    <Navbar/>
                </div>
                <div className="">
                    <SocialColumns/>
                </div>

            </div>}

            { loader && <div className={`bg-primary ${styles.flexStart}`}>
                <div className={`${styles.boxWidth} md:px-44 sm:px-20 px-6 lg:px-64`}>
                    <div id="home"><Hero/></div>
                    <div id="about"><About/></div>
                    <div id="projects"><Projects/></div>
                    <div id="contact"><Contact/></div>
                    <Footer/>
                </div>
            </div>}
        </div>
    )
}

export default App

// hero
// About Me / Intro -> Skills
// Internships
// Projects
// Extra Curricular
// Contact


{/*<Triangle*/}
{/*    color="#A159FF"*/}
{/*    height="500"*/}
{/*    width="500"*/}
{/*    visible={true}*/}
{/*/>*/}