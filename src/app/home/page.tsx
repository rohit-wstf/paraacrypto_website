import Navbar from "@/components/header/Navbar";
import Hero from "@/components/home/Hero";
import ServiceCards from "@/components/home/ServiceCards";
import TopLabel from "@/components/home/TopLabel";
import CryptoBuying from "@/components/home/CryptoBuying";
import PlatformCard from "@/components/home/PlatformCard";
import CryptoPartners from "@/components/home/CryptoPartners";
import GlobalPartners from "@/components/home/GlobalPartners";
import TopCrypto from "@/components/home/TopCrypto";

const page = () => {
    return (
        <>
            <TopLabel />
            <div className="items-center justify-center">
                <div className="linearBg h-[648px] flex flex-col justify-between">
                    <Navbar />
                    <Hero />
                </div>
                <ServiceCards />
                <CryptoBuying />
                <PlatformCard />
                <CryptoPartners />
                <GlobalPartners />
                <TopCrypto />
            </div>
        </>
    )
}

export default page;


