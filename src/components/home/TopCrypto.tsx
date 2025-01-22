import Image from "next/image";
import universityCrest from "../../../public/university crest.png";

const TopCrypto = () => {
    return (
        <section className="w-full">
            <div className="container-wrapper py-16 px-[60px] mx-auto flex flex-col gap-16">
                <div className="flex items-center justify-between">
                    <h2 className="text-[45px] leading-[52px] text-primaryText">
                        Top Crypto Today
                    </h2>
                    <h6 className="text-[16px] leading-6 tracking-[0.15px]">
                        View all Assets
                    </h6>
                </div>
                <div className="h-[87px]">
                    <div>
                        <Card />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default TopCrypto;

const Card = () => {
    return (
        <>
            <div className="px-3 py-4 flex gap-16 items-center">
                <div className="flex gap-2">
                    <div>
                        <Image src={universityCrest} alt="" className="h-[32px] w-[32px]"></Image>
                    </div>
                    <div>
                        
                    </div>
                </div>
                <div>

                </div>
            </div>
        </>
    )
}