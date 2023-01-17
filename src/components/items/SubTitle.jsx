export default function SubTitle(props) {
    return (
        <>
            <div className={`sm:flex hidden text-boldWhite font-inter font-[800] text-[28px]`}>
                <p><span className={`text-secondary font-spacemono text-[24px] font-[100]`}>{props.no}</span> {props.title}</p>
                <div className={`w-[30%] mt-6 ml-4`}><hr className="bg-[#aba2b880] h-[1px] border-0"/></div>
            </div>

            <div className={`sm:hidden flex text-boldWhite font-inter font-[800] text-[22px]`}>
                <p><span className={`text-secondary font-spacemono text-[18px] font-[100]`}>{props.no}</span> {props.title}</p>
                <div className={`w-[30%] mt-4 ml-4`}><hr className="bg-[#aba2b880] h-[1px] border-0"/></div>
            </div>
        </>

    )
}