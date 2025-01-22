import React from "react";
import Image from "next/image";
import Link from "next/link";
import Instagram from "../../../public/footer/social-media-logos/Instagram.svg";
import Twitter from "../../../public/footer/social-media-logos/Twitter.svg";
import Facebook from "../../../public/footer/social-media-logos/Facebook.svg";
import Linkedin from "../../../public/footer/social-media-logos/Linkedin.svg";
import UPI from "../../../public/footer/payment-systems/Upi.svg";

const socialIcons = [
  { name: "Instagram", link: "", src: Instagram },
  { name: "Twitter", link: "", src: Twitter },
  { name: "Facebook", link: "", src: Facebook },
  { name: "Linkedin", link: "", src: Linkedin },
];

const quickLinks = [
  { item: "Support", link: "/" },
  { item: "Terms", link: "/" },
  { item: "Tutorials", link: "/" },
  { item: "Affiliates", link: "/" },
];

const company = [
  { item: "About Us", link: "/" },
  { item: "Contact", link: "/" },
  { item: "Blogs", link: "/" },
];
const buyCryptos = [
  { item: "Buy Bitcoin", link: "/" },
  { item: "Buy Dogecoin", link: "/" },
  { item: "Buy BTC", link: "/" },
  { item: "Buy Ethereum", link: "/" },
  { item: "Buy Solana", link: "/" },
];
const products = [
  { item: "Trading", link: "/" },
  { item: "Market", link: "/" },
  { item: "Spot", link: "/" },
  { item: "Transfer", link: "/" },
  { item: "Convert", link: "/" },
];
const support = [
  { item: "24/7 Chat Support", link: "/" },
  { item: "Support Centre", link: "/" },
  { item: "Terms of Use", link: "/" },
];
const navlinks = [company, buyCryptos, products, support];

const Footer: React.FC = () => {
  return (
    <footer className=" bg-[#FFFFFF] flex flex-col gap-10  sm:py-16 px-2 sm:px-[60px]  lg:px-20">
      <div className="flex gap-9 ">
        {/* Company Section */}
        <div className="flex justify-center gap-9 flex-wrap text-center sm:text-start">
          {navlinks.map((link) => (
            <div className="min-w-[109px] max-w-[210px] w-[203px]">
              <h5 className="font-medium  text-[18px] md:text-[22px]  text-primaryText  mb-2">
                {link === company
                  ? "Company"
                  : link === buyCryptos
                  ? "Buy Cryptos"
                  : link === products
                  ? "Products"
                  : "Support"}
              </h5>
              <ul className="flex flex-col gap-2">
                {link.map((item) => (
                  <li
                    className="text-secondaryText font-medium text-[16px] "
                    key={item.link}
                  >
                    <Link href={item.link}>{item.item}</Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <hr className="my-6 border-[#E2E2E2]" />
      <div className="flex flex-col gap-4 md:flex-row items-center justify-between ">
        {/* Coming Soon */}
        <div className="mb-6 space-y-3 md:mb-0">
          <h4 className="font-medium text-[18px] md:text-[22px]  text-primaryText">
            Coming Soon
          </h4>
          <div className="flex gap-4">
            <div className="w-32 h-12 bg-black rounded-lg flex justify-center  items-center text-white">
              Google Play
            </div>
            <div className="w-32 h-12 bg-black rounded-lg flex justify-center  items-center text-white">
              Apple Store
            </div>
          </div>
        </div>

        {/* Newsletter */}
        <div className="space-y-3">
          <h4 className="font-medium text-[18px] md:text-[22px]  text-primaryText">
            Subscribe to our Newsletter
          </h4>
          <div className="flex flex-col sm:flex-row gap-4 ">
            <input
              type="email"
              placeholder="Enter Email"
              className="border border-[#C8D4D9] text-tertiaryText p-2 rounded-[4px] sm:rounded-l-[4px] focus:outline-none"
            />
            <button className="bg-[#00B073] text-white px-5 py-2 rounded-[4px] sm:rounded-r-[4px] hover:bg-[#2d9e77]">
              Sign Up
            </button>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-4 md:flex-row items-center justify-between ">
        {/* Payment Systems */}
        <div className="flex flex-col gap-3">
          <h4 className="font-medium text-[18px] md:text-[22px]  text-primaryText">
            We accept following payment systems
          </h4>
          <div className="flex gap-4 ">
            <div className="rounded-[4px] p-[6px]">
              <Image src={UPI} width={80} height={50} alt="UPI" />
            </div>
            <div className="rounded-[4px] p-[6px]">
              <Image src={UPI} width={80} height={50} alt="UPI" />
            </div>
            <div className="rounded-[4px] p-[6px]">
              <Image src={UPI} width={80} height={50} alt="UPI" />
            </div>
           
          </div>
        </div>
        <div className="flex flex-col gap-3">
            <h4 className="font-medium text-center md:text-start text-[18px] md:text-[22px]  text-primaryText">
                Follow Us
            </h4>
        <div className="flex gap-5">
          {socialIcons.map((icon) => {
            return (
              <Link href="icon.link" key={icon.link} className="">
                <Image src={icon.src} width={30} height={30} alt={icon.name} />
              </Link>
            );
          })}
        </div>
        </div>

      </div>
      <div className="text-tertiaryText font-normal text-[14px] flex flex-col md:flex-row items-center justify-between ">
        <p>© 2025 Paraa Crypto. All Rights Reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
