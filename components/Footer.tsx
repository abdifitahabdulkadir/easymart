import { interFont, popois } from "@/lib/font";
import Image from "next/image";
import { FaFacebook, FaGooglePlay } from "react-icons/fa";
import { FaAppleWhole } from "react-icons/fa6";
import { GrLinkedinOption } from "react-icons/gr";
import { IoMdSend } from "react-icons/io";
import { LiaCopyrightSolid } from "react-icons/lia";
import { RiTwitterXFill } from "react-icons/ri";
import { RxInstagramLogo } from "react-icons/rx";
import FooterLinkItem from "./FooterLinkItem";

const supportLinks = [
  "Hodan, Mogadisho, Somalia",
  "easymart@gmail.com",
  "+88015-88888-9999",
];

const accountLinks = [
  "My Account",
  "Login / Register",
  "Cart",
  "Whislist",
  "Shop",
];
const quickLinks = ["Privacy Policy", "Terms Of Use", "FAQ", "Contact"];

export default function Footer() {
  return (
    <footer className="bg-black mt-20 w-full h-fit text-white px-10 flex items-center justify-center flex-col">
      <div className="w-full pt-5  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-x-2  pb-20 gap-y-3  border-b border-white/10">
        {/* first column */}
        <div className="flex flex-col w-full h-full  gap-y-2">
          <h2 className={`${interFont.className} font-bold text-[1.4rem]`}>
            EasyMart
          </h2>
          <h4 className={`${popois.className} font-light `}>Subscribe</h4>
          <p className={`${popois.className} font-extralight `}>
            Get 10% off your first order
          </p>
          <div className="w-fit group relative ">
            <input
              type="email"
              name=""
              id=""
              placeholder="Enter your Email"
              className="px-2 py-2 outline-none w-fit active:text-white font-normal rounded-[4px] border-2 focus:ring-1 focus:ring-white   placeholder:text-xs text-[0.8rem] placeholder:text-white/50 border-white/40 bg-transparent"
            />
            <IoMdSend className="absolute group-hover:text-teritiaryLightOrangeColor duration-300 transition-all right-3 top-1/2 -translate-y-[50%] group-hover:scale-[1.1]  group-hover:-skew-y-12" />
          </div>
        </div>
        <FooterLinkItem title="Support" links={supportLinks} />
        <FooterLinkItem title="Account" links={accountLinks} />
        <FooterLinkItem title="Quick Link" links={quickLinks} />
        <FooterLinkItem
          title="Download App"
          links={["Save $3 with App New User Only"]}
        >
          <div className="w-full flex gap-x-2 items-center justify-around">
            <Image
              src={"/footerImages/qrcode.svg"}
              width={100}
              height={100}
              priority
              loading="eager"
              alt="qr code image w-[76px] h-[76px]"
            />
            <div className="flex items-center gap-y-2 flex-col justify-around  ">
              <ItemBuilder
                primaryText="Get It on"
                secondaryText="Google Playstore"
              >
                <FaGooglePlay className=" scale-y-[1.3] group-hover:rotate-12 duration-300 transition-all" />
              </ItemBuilder>
              <ItemBuilder
                primaryText="Download on the"
                secondaryText="Apple Store"
              >
                <FaAppleWhole className="scale-[1.3]  group-hover:rotate-12 duration-300 transition-all" />
              </ItemBuilder>
            </div>
          </div>

          <div className="w-fit flex mt-4 items-center justify-around gap-x-6">
            <FaFacebook className="text-white hover:text-teritiaryLightOrangeColor duration-500 cursor-pointer hover:scale-[1.3] hover:-translate-y-1 transition-all" />
            <RiTwitterXFill className="text-white hover:text-teritiaryLightOrangeColor duration-500 cursor-pointer hover:scale-[1.3] hover:-translate-y-1 transition-all" />
            <RxInstagramLogo className="text-white hover:text-teritiaryLightOrangeColor duration-500 cursor-pointer hover:scale-[1.3] hover:-translate-y-1 transition-all" />
            <GrLinkedinOption className="text-white hover:text-teritiaryLightOrangeColor duration-500 cursor-pointer hover:scale-[1.3] hover:-translate-y-1 transition-all" />
          </div>
        </FooterLinkItem>
      </div>

      <p
        className={`flex items-center font-extralight gap-x-2 text-white/40 w-fit ${popois.className} pb-5 pt-6`}
      >
        <LiaCopyrightSolid />
        abdifitahabdulkadir. All rights reserved | 2024
      </p>
    </footer>
  );
}

function ItemBuilder({
  primaryText,
  secondaryText,
  children,
}: {
  primaryText: string;
  secondaryText: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex gap-x-1 items-center border border-white/60  px-2 rounded-[10px] w-full py-1 cursor-pointer hover:bg-white/20 transition-colors duration-300 group">
      {children}
      <div className="flex flex-col items-start">
        <span className="font-extralight text-[.4rem] ">{primaryText}</span>
        <h5 className="font-semibold text-[.5rem]">{secondaryText}</h5>
      </div>
    </div>
  );
}
