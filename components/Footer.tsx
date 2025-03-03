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
    <footer className="mt-20 flex h-fit w-full flex-col items-center justify-center bg-black px-10 text-white">
      <div className="grid w-full grid-cols-1 gap-x-2 gap-y-3 border-b border-white/10 pb-20 pt-5 md:grid-cols-2 lg:grid-cols-5">
        {/* first column */}
        <div className="flex h-full w-full flex-col gap-y-2">
          <h2 className={`${interFont.className} text-[1.4rem] font-bold`}>
            EasyMart
          </h2>
          <h4 className={`${popois.className} font-light`}>Subscribe</h4>
          <p className={`${popois.className} font-extralight`}>
            Get 10% off your first order
          </p>
          <div className="group relative w-fit">
            <input
              type="email"
              name=""
              id=""
              placeholder="Enter your Email"
              className="w-fit rounded-[4px] border-2 border-white/40 bg-transparent px-2 py-2 text-[0.8rem] font-normal outline-none placeholder:text-xs placeholder:text-white/50 focus:ring-1 focus:ring-white active:text-white"
            />
            <IoMdSend className="absolute right-3 top-1/2 -translate-y-[50%] transition-all duration-300 group-hover:-skew-y-12 group-hover:scale-[1.1] group-hover:text-teritiaryLightOrangeColor" />
          </div>
        </div>
        <FooterLinkItem title="Support" links={supportLinks} />
        <FooterLinkItem title="Account" links={accountLinks} />
        <FooterLinkItem title="Quick Link" links={quickLinks} />
        <FooterLinkItem
          title="Download App"
          links={["Save INR. 10 with App New User Only"]}
        >
          <div className="flex w-full items-center justify-around gap-x-2">
            <Image
              src={"/footerImages/qrcode.svg"}
              width={100}
              height={100}
              priority
              loading="eager"
              alt="qr code image w-[76px] h-[76px]"
            />
            <div className="flex flex-col items-center justify-around gap-y-2">
              <ItemBuilder
                primaryText="Get It on"
                secondaryText="Google Playstore"
              >
                <FaGooglePlay className="scale-y-[1.3] transition-all duration-300 group-hover:rotate-12" />
              </ItemBuilder>
              <ItemBuilder
                primaryText="Download on the"
                secondaryText="Apple Store"
              >
                <FaAppleWhole className="scale-[1.3] transition-all duration-300 group-hover:rotate-12" />
              </ItemBuilder>
            </div>
          </div>

          <div className="mt-4 flex w-fit items-center justify-around gap-x-6">
            <FaFacebook className="cursor-pointer text-white transition-all duration-500 hover:-translate-y-1 hover:scale-[1.3] hover:text-teritiaryLightOrangeColor" />
            <RiTwitterXFill className="cursor-pointer text-white transition-all duration-500 hover:-translate-y-1 hover:scale-[1.3] hover:text-teritiaryLightOrangeColor" />
            <RxInstagramLogo className="cursor-pointer text-white transition-all duration-500 hover:-translate-y-1 hover:scale-[1.3] hover:text-teritiaryLightOrangeColor" />
            <GrLinkedinOption className="cursor-pointer text-white transition-all duration-500 hover:-translate-y-1 hover:scale-[1.3] hover:text-teritiaryLightOrangeColor" />
          </div>
        </FooterLinkItem>
      </div>

      <p
        className={`flex w-fit items-center gap-x-2 font-extralight text-white/40 ${popois.className} pb-5 pt-6`}
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
    <div className="group flex w-full cursor-pointer items-center gap-x-1 rounded-[10px] border border-white/60 px-2 py-1 transition-colors duration-300 hover:bg-white/20">
      {children}
      <div className="flex flex-col items-start">
        <span className="text-[.4rem] font-extralight">{primaryText}</span>
        <h5 className="text-[.5rem] font-semibold">{secondaryText}</h5>
      </div>
    </div>
  );
}
