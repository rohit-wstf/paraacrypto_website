import Image from "next/image";
import creditCardImg from "../../../public/creditcard.png";

const ServiceCards = () => {
    return (
        <section className="w-full">
            <div className='container-wrapper px-[60px] flex py-16 mx-auto'>
                <div className='flex flex-wrap gap-10'>
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                </div>
            </div>
        </section>
    )
}

export default ServiceCards;

const Card = () => {
    return (
        <>
            <div className='w-[630px]'>
                <div className="w-full">
                    <div className="h-[85px] w-[85px]">
                        <div className="h-[60px] w-[60px]">
                            <Image src={creditCardImg} alt="" className="h-[45px] w-[60px]"></Image>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col gap-2">
                    <h4 className="text-[28px] leading-[36px]">
                        Transparency in FIU Compliance
                    </h4>
                    <div className="w-[555px]">
                        <p className="text-[16px] leading-[24px] tracking-[0.15px]">
                            Ensuring full transparency in handling FIU-related Compliance, providing users with clear updates and resolutions to maintain trust and compliance.
                        </p>
                    </div>
                </div>
            </div>
        </>
    )
}