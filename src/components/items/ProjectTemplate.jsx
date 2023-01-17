import SocialIcon from "./SocialIcon.jsx";

export default function ProjectTemplate(props) {
    return (
        <>
            {/*BIG SCREEN*/}
            <div className="h-[350px] md:flex hidden text-gray-400 mt-24">
                {/*LEFT*/}
                { props.align === "left" && <div className="w-[60%] h-full flex flex-col justify-center z-20">
                    <img className="rounded-sm block cursor-pointer"
                         alt=""
                         src={props.img}
                         onMouseOver={e => (e.currentTarget.src = props.imgHover)}
                         onMouseOut={e => (e.currentTarget.src = props.img)}
                         onClick={() => window.open(props.url)}
                    />
                </div>}
                { props.align === "left" && <div className=" w-[60%] h-full pr-12 z-20">
                    <p className="text-secondary text-[16px] font-spacemono text-right">Featured Project</p>
                    <p onClick={() => window.open(props.url)} className="transition ease-in-out duration-500 cursor-pointer hover:text-secondary text-dimWhite font-inter font-bold text-[24px] text-right tracking-wide">{props.title}</p>
                    <div className="bg-dimBlue -ml-12 px-6 py-8 mt-4 rounded-sm">
                        <p className="text-[18px] font-inter text-right">{props.desc}</p>
                    </div>
                    <div className="flex justify-end mt-4 text-[14px]">
                        <ul className="flex font-spacemono right-0">
                            {props.techStack.map(data => <li key={Math.random()} className="ml-4">{data}</li>)}
                        </ul>
                    </div>
                    <div className="flex justify-end mt-4">
                        { props.playBtn && <div className="mr-4">
                            <SocialIcon
                                img="https://img.icons8.com/ios-glyphs/30/aba2b8/play--v1.png"
                                hover="https://img.icons8.com/ios-glyphs/30/A159FF/play--v1.png"
                                url={props.url}
                            />
                        </div>}
                        <SocialIcon
                            img={props.git.img}
                            hover={props.git.hover}
                            url={props.git.url}
                        />
                    </div>
                </div>}
                {/*RIGHT*/}
                { props.align === "right" && <div className=" w-[60%] h-full pl-12 z-20">
                    <p className="text-secondary text-[16px] font-spacemono text-left">Featured Project</p>
                    <p onClick={() => window.open(props.url)} className="transition ease-in-out duration-500 cursor-pointer hover:text-secondary text-dimWhite font-inter font-bold text-[24px] text-left tracking-wide">{props.title}</p>
                    <div className="bg-dimBlue -mr-12 px-6 py-8 mt-4 rounded-sm">
                        <p className="text-[18px] font-inter text-left">{props.desc}</p>
                    </div>
                    <div className="flex justify-start mt-4 text-[14px]">
                        <ul className="flex font-spacemono left-0">
                            {props.techStack.map(data => <li className="mr-4" key={Math.random()}>{data}</li>)}
                        </ul>
                    </div>
                    <div className="flex justify-start mt-4">
                        { props.playBtn && <div className="mr-4">
                            <SocialIcon
                                img="https://img.icons8.com/ios-glyphs/30/aba2b8/play--v1.png"
                                hover="https://img.icons8.com/ios-glyphs/30/A159FF/play--v1.png"
                                url={props.url}
                            />
                        </div>}
                        <SocialIcon
                            img={props.git.img}
                            hover={props.git.hover}
                            url={props.git.url}
                        />
                    </div>
                </div>}
                { props.align === "right" && <div className="w-[60%] h-full flex flex-col justify-center z-10">
                    <img className="rounded-sm block cursor-pointer"
                         alt=""
                         src={props.img}
                         onMouseOver={e => (e.currentTarget.src = props.imgHover)}
                         onMouseOut={e => (e.currentTarget.src = props.img)}
                         onClick={() => window.open(props.url)}
                    />
                </div>}
            </div>

            {/*SMALL SCREEN*/}
            <div className={`mt-12 md:hidden p-6 rounded-sm bg-[url('${props.imgBg}')] bg-cover`}>
                <p className="text-secondary text-[13px] font-spacemono text-left">Featured Project</p>
                <p onClick={() => window.open(props.url)} className="transition ease-in-out duration-500 cursor-pointer hover:text-secondary text-dimWhite font-inter font-bold text-[22px] tracking-wide">{props.title}</p>
                <p className="mt-4 text-gray-400 font-inter">{props.desc}</p>
                <ul className="flex mt-4 font-spacemono text-gray-400 text-[14px]">
                    {props.techStack.map(data => <li key={Math.random()} className="mr-4">{data}</li>)}
                </ul>
                <div className="flex justify-start mt-4">
                    { props.playBtn && <div className="mr-4">
                        <SocialIcon
                            img="https://img.icons8.com/ios-glyphs/30/aba2b8/play--v1.png"
                            hover="https://img.icons8.com/ios-glyphs/30/A159FF/play--v1.png"
                            url={props.url}
                        />
                    </div>}
                    <SocialIcon
                        img={props.git.img}
                        hover={props.git.hover}
                        url={props.git.url}
                    />
                </div>
            </div>
        </>

    )
}