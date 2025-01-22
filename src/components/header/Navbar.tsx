
export const Navbar = () => {
    const navItems = ["About Us", "Trade", "Learn", "Swap", "Support"]
    return (
        <section className="w-full">
            <div className="container-wrapper mx-auto h-[80px] py-5 flex justify-between items-center px-[60px]">
                <div>Paraa Crypto</div>
                <div>
                    <ul className="gap-8 flex">
                        {
                            navItems.map((item, index) => {
                                return <li key={index} className="px-5 py-2 text-tertiaryText text-center">{item}</li>
                            })
                        }
                    </ul>
                </div>
                <div>
                    <button className="py-2 px-5 bg-primaryText rounded-full text-white">Sign In</button>
                </div>
            </div>
        </section>
    )
}

export default Navbar;

