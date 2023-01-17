import anime from 'animejs/lib/anime.es.js';
import {useEffect} from "react";

export default function Loader(props) {

    function animate() {
        const anim = anime.timeline({
            direction: 'infinite',
        });

        anim
            .add({
                targets: '#hexagon path',
                strokeDashoffset: [anime.setDashoffset, 0],
                easing: 'easeInOutQuart',
                duration: 2000,
                delay: 100,
            })
            .add({
                targets: '#hexagon #B',
                duration: 1000,
                opacity: 1,
                easing: 'easeInOutQuart'
            })
            .add({
                targets: '#hexagon',
                duration: 1000,
                opacity: 0,
                scale: 0,
                easing: 'easeInOutQuart'
            })

        anim.finished.then(() => props.setLoader(true))

    }

    useEffect(animate, [])

    return (

        <div className="absolute left-[50%] top-[40%]">
            <div className="relative -left-[50%] h-[100px] w-[100px]">

                <div className="">
                    <svg id="hexagon" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg"
                         >
                        <g>
                            <g className="fill-secondary opacity-0 text-[50px]" id="B" transform="translate(36, 33)">
                                <text>
                                    <tspan x="0.141666985" y="33">P</tspan>
                                </text>
                            </g>

                            <path
                                stroke="#A159FF"
                                strokeWidth="5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M 50, 5 L 5, 50 z"/>

                            <path
                                stroke="#A159FF"
                                strokeWidth="5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M 5, 50 L 50, 95 z"/>

                            <path
                                stroke="#A159FF"
                                strokeWidth="5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M 50, 95 L 95, 50 z"/>

                            <path
                                stroke="#A159FF"
                                strokeWidth="5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M 95, 50 L 50, 5 z"/>
                        </g>
                    </svg>
                </div>

            </div>
        </div>


    )
}