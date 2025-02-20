import SupportAndDeliveryInfo from "@/components/SupportAndDeliveryInfo";
import { interFont, popois } from "@/lib/font";
import Image from "next/image";
import { BiDollarCircle } from "react-icons/bi";
import { FaLinkedinIn, FaSackDollar, FaXTwitter } from "react-icons/fa6";
import { IoLogoInstagram } from "react-icons/io";
import { PiStorefront } from "react-icons/pi";
import { RiShoppingBag4Line } from "react-icons/ri";

const aboutAchievments = [
  {
    icon: (
      <PiStorefront className="transition-rotate scale-[1.3] duration-200 group-hover:rotate-6" />
    ),
    number: "10.5k ",
    des: "Sallers active our site",
  },
  {
    icon: (
      <BiDollarCircle className="transition-rotate scale-[1.3] duration-200 group-hover:-rotate-6" />
    ),
    number: "33k",
    des: "Mopnthly Produduct Sale",
  },
  {
    icon: (
      <RiShoppingBag4Line className="transition-rotate scale-[1.3] duration-200 group-hover:rotate-6" />
    ),
    number: "45.5k",
    des: "Customer active in our site",
  },
  {
    icon: (
      <FaSackDollar className="transition-rotate scale-[1.3] duration-200 group-hover:-rotate-6" />
    ),
    number: "25k",
    des: "Anual gross sale in our site",
  },
];
const socialMediaIconStyle =
  "hover:text-teritiaryLightOrangeColor  transition-all duration-300 cursor-pointer hover:scale-[1.2] text-black/60";
const employess = [
  {
    name: "Tom Cruise",
    imageUrl: "/aboutImages/man-one.svg",
    x: <FaXTwitter className={socialMediaIconStyle} />,
    instagram: <IoLogoInstagram className={socialMediaIconStyle} />,
    linkedIn: <FaLinkedinIn className={socialMediaIconStyle} />,
    profision: "Founder & Chairman",
  },
  {
    name: "Emma Watson",
    imageUrl: "/aboutImages/wamen.svg",
    x: <FaXTwitter className={socialMediaIconStyle} />,
    instagram: <IoLogoInstagram className={socialMediaIconStyle} />,
    linkedIn: <FaLinkedinIn className={socialMediaIconStyle} />,
    profision: "Managing Director",
  },
  {
    name: "Will Smith",
    imageUrl: "/aboutImages/man-two.svg",
    x: <FaXTwitter className={socialMediaIconStyle} />,
    instagram: <IoLogoInstagram className={socialMediaIconStyle} />,
    linkedIn: <FaLinkedinIn className={socialMediaIconStyle} />,
    profision: "Product Designer",
  },
];
export default function page() {
  return (
    <div className="grid w-full grid-cols-1 gap-x-5 gap-y-6 overflow-hidden py-20 pl-20 md:grid-cols-2">
      <div className="flex w-[60%] flex-col gap-y-5 pt-10">
        <h2 className={`${interFont.className} text-[2rem] font-semibold`}>
          Our Story
        </h2>
        <p
          className={`${popois.className} text-justify text-[.8rem] font-normal leading-6`}
        >
          Launced in 2015, Exclusive is South Asia’s premier online shopping
          makterplace with an active presense in Bangladesh. Supported by wide
          range of tailored marketing, data and service solutions, Exclusive has
          10,500 sallers and 300 brands and serves 3 millioons customers across
          the region.
        </p>
        <p
          className={`${popois.className} text-justify text-[.8rem] font-normal leading-6`}
        >
          Exclusive has more than 1 Million products to offer, growing at a very
          fast. Exclusive offers a diverse assotment in categories ranging from
          consumer.
        </p>
      </div>
      <div className="relative flex h-[28rem] w-[32rem] justify-center overflow-hidden rounded-br-[4px] rounded-tr-[4px] bg-[#EB7EA8] px-5">
        <Image
          src={"/aboutImages/girls.svg"}
          width={100}
          height={100}
          alt="image in the about page"
          className="absolute -bottom-[50px] -left-[8%] h-full w-full object-bottom"
        />
      </div>

      <div className="grid2 col-span-full mt-10 grid w-full gap-x-2 gap-y-4 pr-10 md:grid-cols-3 lg:grid-cols-4">
        {aboutAchievments.map(({ icon, number, des }, index) => {
          return (
            <div
              key={index}
              className={`flex h-[230px] w-[270px] flex-col items-center justify-center gap-y-2 border border-black/30 py-4 ${interFont.className} group cursor-pointer rounded-[4px] transition-all duration-300 hover:bg-teritiaryOrangeColor hover:text-white`}
            >
              <div className="flex items-center justify-center rounded-full bg-[#2F2E30]/30 px-3 py-3 text-white group-hover:bg-white/30">
                <div className="flex items-center justify-center rounded-full bg-black px-3 py-3 text-white group-hover:bg-white group-hover:text-black">
                  {icon}
                </div>
              </div>

              <span className={`text-[1.4rem] font-bold`}>{number}</span>
              <p className="text-[.9rem] font-light">{des}</p>
            </div>
          );
        })}
      </div>

      <div className="col-span-full mt-10 flex w-full flex-col items-center justify-center md:mt-[10rem]">
        <div className="grid w-full grid-cols-1 gap-x-10 gap-y-6 pr-14 md:grid-cols-2 lg:grid-cols-3">
          {employess.map(
            ({ imageUrl, name, profision, x, instagram, linkedIn }, index) => {
              return (
                <div
                  key={index}
                  className="flex w-full flex-col items-start gap-y-2"
                >
                  <div className="flex h-[20rem] w-full items-center justify-center rounded-[4px] bg-secondaryWhiteColorOne">
                    <div className="h-[90%] w-full self-end">
                      <Image
                        src={imageUrl}
                        width={100}
                        height={100}
                        alt="image of employee"
                        loading="eager"
                        priority
                        className="h-full w-full"
                      />
                    </div>
                  </div>
                  <div>
                    <h5
                      className={`${interFont.className} text-[1.6rem] font-medium`}
                    >
                      {name}
                    </h5>
                    <p
                      className={`${interFont.className} font-normal text-black/80`}
                    >
                      {profision}
                    </p>
                    <div className="mt-2 flex w-full items-center gap-x-3">
                      {x}
                      {instagram}
                      {linkedIn}
                    </div>
                  </div>
                </div>
              );
            },
          )}
        </div>
        <div className="mt-10 flex h-[5rem] w-full items-end justify-center gap-x-3">
          {Array.from({ length: 5 }, (_, index: number) => {
            return (
              <div
                key={index}
                className="group flex h-[24px] w-[24px] cursor-pointer items-center justify-center rounded-full bg-black/30 transition-all duration-500 hover:scale-[2] hover:bg-black/30"
              >
                <div className="hidden h-[80%] w-[80%] rounded-full transition-colors group-hover:block group-hover:border-2 group-hover:border-white group-hover:bg-teritiaryOrangeColor"></div>
              </div>
            );
          })}
        </div>
      </div>
      <div className="col-span-full mt-10 flex w-[90%] items-center px-20">
        <SupportAndDeliveryInfo showArrow={false} />
      </div>
    </div>
  );
}
