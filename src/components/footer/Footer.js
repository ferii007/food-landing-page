import { InstagramFilled, FacebookFilled, TwitterOutlined, SendOutlined } from "@ant-design/icons"

const Footer = () => {
    return(
        <footer className="bg-white w-full px-10 lg:px-28 pt-44 pb-20">
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-10 lg:gap-0">
                <div className="col-span-2">
                    <h3 className="text-colorPrimary font-bold text-xl leading-[3rem]">Eatscape</h3>
                    <p className="text-[#333] font-medium leading-8">Our job is to filling your tummy with delicious food and with fast and free delivery.</p>

                    <div className="flex gap-12 text-colorSecondary text-2xl mt-6 lg:mt-20">
                        <InstagramFilled />
                        <FacebookFilled />
                        <TwitterOutlined />
                    </div>
                </div>

                <div>
                    <h3 className="text-colorPrimary font-bold text-xl leading-[3rem]">About</h3>
                    <a href="#" className="block text-[#333] font-medium leading-8">About Us</a>
                    <a href="#" className="block text-[#333] font-medium leading-8">Features</a>
                    <a href="#" className="block text-[#333] font-medium leading-8">News</a>
                    <a href="#" className="block text-[#333] font-medium leading-8">Menu</a>
                </div>

                <div>
                    <h3 className="text-colorPrimary font-bold text-xl leading-[3rem]">Company</h3>
                    <a href="#" className="block text-[#333] font-medium leading-8">Why Eatscape?</a>
                    <a href="#" className="block text-[#333] font-medium leading-8">Partner With Us</a>
                    <a href="#" className="block text-[#333] font-medium leading-8">FAQ</a>
                </div>

                <div>
                    <h3 className="text-colorPrimary font-bold text-xl leading-[3rem]">Support</h3>
                    <a href="#" className="block text-[#333] font-medium leading-8">Feedback</a>
                    <a href="#" className="block text-[#333] font-medium leading-8">Contact Us</a>
                    <a href="#" className="block text-[#333] font-medium leading-8">Support Center</a>
                </div>

                <div>
                    <h3 className="text-colorPrimary font-bold text-xl leading-[3rem]">Get in Touch</h3>
                    <a href="#" className="block text-[#333] font-medium leading-8">Question or feedback</a>

                    <div className="mt-8 hidden lg:block">
                        <form action="#" className="flex items-center rounded-full border border-black pl-4 py-3">
                            <input type="email" placeholder="Email Address" className="bg-transparent focus:outline-none text-black w-10/12 pr-4" />
                            <SendOutlined className="text-colorSecondary text-lg" />
                        </form>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer