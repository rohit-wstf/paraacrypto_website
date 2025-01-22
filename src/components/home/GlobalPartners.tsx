import universityCrest from "../../../public/university crest.png";
import Image from "next/image";

const GlobalPartners = () => {
    return (
        <section className="w-full">
            <div className="container-wrapper py-16 px-[60px] mx-auto flex flex-col gap-12">
                <div className="flex flex-col gap-2 items-center justify-center">
                    <h2 className="text-[45px] leading-[52px] text-primaryText">
                        Our Global Partners
                    </h2>
                    <h6 className="text-[16px] leading-6 tracking-[0.15px] text-center">Sumsub, TRM labs, and AWS are key partners in risk management, providing advanced solutions for KYT (Know Your Transaction) and KYC (Know Your Customer) checks. These companies help ensure a high level of security and regulatory compliance for our platform.</h6>
                </div>
                <div className="flex flex-wrap justify-between">
                    <Card />
                    <Card />    
                    <Card />
                    <Card />
                </div>
            </div>


        </section>
    )
}

export default GlobalPartners;

const Card = () => {
    return (
        <>
            <div className="flex flex-col gap-4 bg-white w-[306px]">
                <div className="bg-secondaryBackground rounded-xl flex items-center justify-center h-[142px]">
                    <div>
                        <Image src={universityCrest} alt="" className="h-[90px] w-[90px]"></Image>
                    </div>
                </div>
                <div className="flex flex-col gap-2">
                    <h4 className="text-[28px] leading-9 text-primaryText">
                        Sumsub
                    </h4>
                    <p className="text-[14px] leading-5 tracking-[0.25px]">Provides comprehensive solutions for KYC and AML (Anti-Money Laundering) checks, allowing for quick and efficient customer identification and fraud prevention.</p>
                </div>
            </div>
        </>
    )
}

