import Image from "next/image";
import animatedImg from "../../../public/animation_.svg"
const CryptoPartners = () => {
    return (
        <section className="w-full ">
            <div className="pt-16 pb-9  mx-auto flex flex-col gap-16">
                <div className="container-wrapper mx-auto px-[60px] flex flex-col gap-2 items-center justify-center">
                    <div className="text-[45px] leading-[52px] text-primaryText">
                        100+ Crypto Partners
                    </div>
                    <div className="text-[16px] text-secondaryText">Partnered with trusted organizations to provide a robust and seamless trading ecosystem.</div>
                </div>
                <div className="h-[381px] w-full bg-[#E9FFF5]">
                    <Image src={animatedImg} alt="" className="h-full w-full"></Image>
                </div>
            </div>
        </section>
    )
}

export default CryptoPartners