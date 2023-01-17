export default function CButton(props) {
    return (
        <button className="transition ease-in-out duration-500 hover:bg-[#FFFFFF30] border-secondary border-2 rounded-md px-3 py-1 text-secondary font-spacemono">
            {props.name}
        </button>
    )
}