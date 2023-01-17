export const navLinks = [
    {
        id: "home",
        title: "Home"
    },
    {
        id: "about",
        title: "About"
    },
    {
        id: "projects",
        title: "Projects"
    },
    {
        id: "contact",
        title: "Contact"
    }
]

export const menuIconLinks = {
    open: "https://img.icons8.com/windows/32/A159FF/menu--v1.png",
    close: "https://img.icons8.com/ios-filled/100/A159FF/right--v1.png"
}

export const social = {
    resume: "https://placement.vit.ac.in/public-profile?u_id=26867bd31cdb85c42001240e2139de5fc14a27bd",
    email: "prathamesh16.auti@gmail.com",
    icons: [
        {
            img: "https://img.icons8.com/windows/50/aba2b8/linkedin-2.png",
            hover: "https://img.icons8.com/windows/50/A159FF/linkedin-2.png",
            url: "https://www.linkedin.com/in/prathamesh-auti-a02280221/"
        },
        {
            img: "https://img.icons8.com/windows/50/aba2b8/github.png",
            hover: "https://img.icons8.com/windows/50/A159FF/github.png",
            url: "https://github.com/prathamesh-a"
        },
        {
            img: "https://img.icons8.com/external-tal-revivo-bold-tal-revivo/24/aba2b8/external-level-up-your-coding-skills-and-quickly-land-a-job-logo-bold-tal-revivo.png",
            hover: "https://img.icons8.com/external-tal-revivo-bold-tal-revivo/24/A159FF/external-level-up-your-coding-skills-and-quickly-land-a-job-logo-bold-tal-revivo.png",
            url: "https://leetcode.com/inix-a/"
        }
    ]
}

export const buttons = {
    resume: "Resume",
    know_more: "Know More"
}

export const hero = {
    intro: "Hi, my name is",
    name: "Prathamesh Auti.",
    title: "I am Computer Engineer.",
    desc: "I’m a final-year engineering student specializing in computer science and engineering at the Vellore Institute of Technology."
}

export const about = {
    intro: "Hello! My name is Prathamesh Auti and I am a passionate software developer and a computer science engineering student, who knows problem-solving, data structures, and software development.",
    about_1: "Currently, I am learning Spring Boot for the backend and ReactJS for the front end. I am also learning about Cloud Computing with Microsoft Azure. I also have an interest in Blockchain Technology.",
    about_2: "",
    techIntro: "Technologies that I have been working with recently: ",
    techStack1: ["Java", "JavaScrip (ES6+)", "HTML/CSS"],
    techStack2: ["Spring", "React", "Tailwind"],
    techStack3: ["MySQL", "Firebase", "Postman"]
}
export const projects = [
    {
        title: "Uppvit API",
        desc: "RESTful API for Uppvit Social Network. Uppvit is a social media network that allows users to create guilds and write posts.",
        techStack : ["Java", "Spring-Boot", "MySQL"],
        git: {
            img: "https://img.icons8.com/windows/50/aba2b8/github.png",
            hover: "https://img.icons8.com/windows/50/A159FF/github.png",
            url: "https://github.com/prathamesh-a/uppvit-api"
        },
        img: "./assets/project-uppvit-overlay.jpg",
        hover: "./assets/project-uppvit.jpg",
        bg: "./assets/project-uppvit-bg.jpg",
        playBtn: false,
        url: "https://github.com/prathamesh-a/uppvit-api",
        align: "left"
    },
    {
        title: "Super Combat",
        desc: "Super Combat is a multiplayer combat game where two players can play on the same device, available for all kinds of browsers.",
        techStack : ["JavaScript", "HTML/CSS", "HTML-Canvas"],
        git: {
            img: "https://img.icons8.com/windows/50/aba2b8/github.png",
            hover: "https://img.icons8.com/windows/50/A159FF/github.png",
            url: "https://github.com/prathamesh-a/super-combat"
        },
        img: "./assets/project-supercombat-overlay.jpg",
        hover: "./assets/project-supercombat.jpg",
        bg: "./assets/project-supercombat-bg.jpg",
        playBtn: true,
        url: "https://prathamesh-a.github.io/super-combat/",
        align: "right"
    },
    {
        title: "Spynix",
        desc: "Spynix is a keylogger application implemented in Java. Logs keystrokes, screenshots and webcam captures.",
        techStack : ["Java", "Native-Hook", "SMTP-Server"],
        git: {
            img: "https://img.icons8.com/windows/50/aba2b8/github.png",
            hover: "https://img.icons8.com/windows/50/A159FF/github.png",
            url: "https://github.com/prathamesh-a/spynix-logger"
        },
        img: "./assets/project-spynix-overlay.jpg",
        hover: "./assets/project-spynix.jpg",
        bg: "./assets/project-spynix-bg.jpg",
        playBtn: false,
        url: "https://github.com/prathamesh-a/spynix-logger",
        align: "left"
    }
]

export const contact = {
    title: "Get In Touch",
    desc: "I am currently open to new opportunities and eager to explore possibilities for growth and development. I would love to hear about any entry-level or intern positions that may be available. Please don't hesitate to reach out to me for more information about my qualifications. Thank you for your time.",
    btn: "Send Message"
}