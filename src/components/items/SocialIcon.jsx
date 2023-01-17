export default function SocialIcon(props) {
    return (
        <div className="flex justify-center h-[30px] mb-5">
            <img
                 onClick={() => window.open(props.url)}
                 src={props.img}
                 alt="socialicon--linkedin"
                 onMouseOver={e => (e.currentTarget.src = props.hover)}
                 onMouseOut={e => (e.currentTarget.src = props.img)}
                 className="hover:-translate-y-1 cursor-pointer transition ease-in-out duration-500"
            />
        </div>
    )
}