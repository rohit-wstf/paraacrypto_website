import Image from "next/image";
import unversityCrest from "../../../public/university crest.png";

const PlatformCard = () => {
    return (
        <section className="w-full">
            <div className="container-wrapper px-[60px] py-16 mx-auto">
                <div className="flex justify-between items-center">
                    <div className="flex flex-col w-[427px] gap-12 ">
                        <div className="text-primaryText text-[45px] leading-[52px]">
                            One platform,
                            <br />
                            endless possibilities
                        </div>
                        <div className="flex flex-col gap-5 text-[22px] leading-[28px] text-primaryText">
                            <div>Buy / Sell</div>
                            <div className="text-tertiaryText">Trade</div>
                            <div className="text-tertiaryText">P2P</div>
                        </div>

                    </div>
                    <div className="h-[352px] w-[572px] p-[60px] rounded-2xl border-[1px]  border-black flex items-center justify-center">
                        <div className="flex items-center justify-center">
                            <Image src={unversityCrest} alt="" className="h-[90px] w-[90px]"></Image>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default PlatformCard