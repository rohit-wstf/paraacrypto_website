
const Blogs = () => {
    
    return (
        <section className="w-full">
            <div className="container-wrapper py-16 px-[60px] mx-auto flex flex-col gap-16">
                <div className="flex items-center justify-between">
                    <h2 className="text-[45px] leading-[52px] text-primaryText">
                        Read our Blogs
                    </h2>
                    <h6 className="text-[16px] leading-6 tracking-[0.15px]">
                        View all
                    </h6>
                </div>
                <div className="flex flex-wrap justify-between gap-y-4">
                    <Card />
                    <Card />
                    <Card />
                </div>
            </div>
        </section>
    )
}

export default Blogs;

const Card = () => {
    return (
        <>
            <div className="w-[427px] h-[412px] rounded-2xl pb-4 flex flex-col gap-4 overflow-hidden blog-card-shadow">
                <div className="h-[240px] bg-[#B1B5C0]"></div>
                <div className="px-4 gap-2 flex flex-col">
                    <p className="text-[14px] leading-5 tracking-[0.25px] text-tertiaryText">
                        Date • Time To Read
                    </p>
                    <h5 className="text-primaryText text-[22px] leading-[28px]">
                        Lorem Ipsum Dolor Sit Amet, Lorem Ipsum Dolor Sit Amet
                    </h5>
                    <h6 className="text-secondaryText text-[16px] leading-6 tracking-[0.15px]">
                        One line hook/ brief of the article.
                    </h6>
                </div>
            </div>
        </>
    )
}