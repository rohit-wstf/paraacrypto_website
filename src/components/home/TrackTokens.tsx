import universityCrest from "../../../public/university crest.png";
import Image from "next/image";

const TrackTokens = () => {
    return (
        <div className="w-full">
            <div className="container-wrapper py-[100px] px-[60px]  mx-auto">
                <div className="px-[60px] py-10 flex justify-between items-center bg-tertiaryBackground rounded-2xl">
                    <div className="w-[478px] flex flex-col gap-5">
                        <h5 className="text-[45px] leading-[52px] text-primaryText">Track Your Tokens and Manage Your Positions</h5>
                        <p className="text-secondaryText text-[14px] leading-5 tracking-[0.25px]">
                            Download the app to manage your projects, keep track of the progress and complete tasks without procrastinating. Stay on track and complete on time!</p>
                    </div>
                    <div>
                        <Image src={universityCrest} alt="" className="w-[370px] h-[251px]"></Image>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TrackTokens