import Navbar from "@/components/header/Navbar";
import TopLabel from "@/components/header/TopLabel";
import Hero from "@/components/about/Hero";
import Description from "@/components/about/Description";

const page = () => {
    return (
        <section className="w-full">
            <TopLabel />
            <Navbar />
            <Hero />
            <Description />
        </section>
    )
}

export default page