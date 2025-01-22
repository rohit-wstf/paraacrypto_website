const Hero = () => {
    return (
        <section className="w-full">
            <div className="container-wrapper mx-auto px-[60px]">
                <div className="w-[597px] mb-[64px] flex flex-col gap-8">
                    <div className="flex gap-4 flex-col">
                        <div className="text-[57px] font-extrabold text-primaryText leading-[64px] tracking-[-0.25px]">
                            Empowering Your Crypto Journey with Paraacrypto
                        </div>
                        <div>
                            <button className="text-primaryText px-5 py-1 bg-white rounded-full">
                                First In CEX platform
                            </button>
                        </div>
                        <div>With the credibility of an FIU license, our platform combines security and simplicity to meet the needs of both beginners and professional traders in India.</div>
                    </div>
                    <div>
                        <button className="py-2 px-5 bg-primaryText text-white rounded-full">Start Trading</button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero