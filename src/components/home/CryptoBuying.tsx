const CryptoBuying = () => {
    return (
        <section className="w-full bg-primaryBackground">
            <div className="container-wrapper px-[60px] py-16 mx-auto">
                <div className="flex justify-between">
                    <div className="flex items-center">
                        <div className="w-[531px] flex flex-col gap-5">
                            <h2 className="text-primaryText text-[45px] leading-[52px]">
                                Buy Crypto with UPI,
                                Credit or Debit Card</h2>
                            <h6 className="text-secondaryText text-[16px] leading-6 tracking-[0.15px]">
                                We offer a variety of payment options to ensure a seamless transaction experience for our users. Payments can be made using Credit cards, Debit cards, UPI, or bank transfers (IMPS), providing flexibility and convenience. Our platform is designed to cater to the diverse needs of India&apos;s Crypto traders with secure and efficient payment processing.
                            </h6>
                        </div>

                    </div>
                    <div className="flex flex-wrap w-[650px] gap-5">
                        <Card />
                        <Card />
                        <Card />
                        <Card />
                        <Card />
                        <Card />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default CryptoBuying;

const Card = () => {
    return (
        <>
            <div className="w-[203px] p-4 flex flex-col gap-4 rounded-2xl bg-white">
                <div>Etherium</div>
                <div>
                    <div>2,987289473</div>
                    <div>0.00%</div>
                </div>
                <div>
                    <button className="px-3 py-1 bg-primaryText rounded-full text-[11px] leading-4 tracking-[0.5px] text-white">Buy Now</button>
                </div>
            </div>
        </>
    )
}