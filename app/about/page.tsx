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
      <PiStorefront className="scale-[1.3] group-hover:rotate-6 transition-rotate duration-200" />
    ),
    number: "10.5k ",
    des: "Sallers active our site",
  },
  {
    icon: (
      <BiDollarCircle className="scale-[1.3] group-hover:-rotate-6 transition-rotate duration-200" />
    ),
    number: "33k",
    des: "Mopnthly Produduct Sale",
  },
  {
    icon: (
      <RiShoppingBag4Line className="scale-[1.3] group-hover:rotate-6 transition-rotate duration-200" />
    ),
    number: "45.5k",
    des: "Customer active in our site",
  },
  {
    icon: (
      <FaSackDollar className="scale-[1.3] group-hover:-rotate-6 transition-rotate duration-200" />
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
    <div className="w-full pl-20  py-20 grid grid-cols-1 md:grid-cols-2 gap-x-5 gap-y-6 overflow-hidden">
      <div className="w-[60%] pt-10 flex flex-col gap-y-5">
        <h2 className={`${interFont.className} font-semibold text-[2rem]`}>
          Our Story
        </h2>
        <p
          className={`${popois.className} text-[.8rem] font-normal leading-6 text-justify`}
        >
          Launced in 2015, Exclusive is South Asia’s premier online shopping
          makterplace with an active presense in Bangladesh. Supported by wide
          range of tailored marketing, data and service solutions, Exclusive has
          10,500 sallers and 300 brands and serves 3 millioons customers across
          the region.
        </p>
        <p
          className={`${popois.className} text-[.8rem] font-normal leading-6 text-justify`}
        >
          Exclusive has more than 1 Million products to offer, growing at a very
          fast. Exclusive offers a diverse assotment in categories ranging from
          consumer.
        </p>
      </div>
      <div className="w-[32rem]   bg-[#EB7EA8] h-[28rem] rounded-tr-[4px]  rounded-br-[4px] flex relative justify-center  px-5 overflow-hidden">
        <Image
          src={"/aboutImages/girls.svg"}
          width={100}
          height={100}
          alt="image in the about page"
          className="h-full w-full absolute -left-[8%] -bottom-[50px] object-bottom "
        />
      </div>

      <div className="grid grid2 md:grid-cols-3 lg:grid-cols-4 gap-x-2 w-full col-span-full pr-10 mt-10 gap-y-4">
        {aboutAchievments.map(({ icon, number, des }, index) => {
          return (
            <div
              key={index}
              className={`flex flex-col gap-y-2  border border-black/30 items-center justify-center py-4 w-[270px] h-[230px] ${interFont.className} rounded-[4px] cursor-pointer hover:bg-teritiaryOrangeColor hover:text-white transition-all duration-300  group `}
            >
              <div className="bg-[#2F2E30]/30 group-hover:bg-white/30 flex items-center justify-center px-3 py-3 rounded-full text-white">
                <div className="bg-black group-hover:bg-white  flex items-center justify-center group-hover:text-black px-3 py-3 rounded-full text-white">
                  {icon}
                </div>
              </div>

              <span className={`font-bold text-[1.4rem]`}>{number}</span>
              <p className="font-light text-[.9rem]">{des}</p>
            </div>
          );
        })}
      </div>

      <div className="w-full flex items-center justify-center flex-col col-span-full  mt-10 md:mt-[10rem]">
        <div className="w-full grid  grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-x-10   gap-y-6 pr-14">
          {employess.map(
            ({ imageUrl, name, profision, x, instagram, linkedIn }, index) => {
              return (
                <div
                  key={index}
                  className="w-full  flex items-start flex-col gap-y-2"
                >
                  <div className="bg-secondaryWhiteColorOne flex  rounded-[4px] w-full h-[20rem]  items-center justify-center ">
                    <div className="w-full h-[90%] self-end">
                      <Image
                        src={imageUrl}
                        width={100}
                        height={100}
                        alt="image of employee"
                        loading="eager"
                        priority
                        className="w-full h-full"
                      />
                    </div>
                  </div>
                  <div>
                    <h5
                      className={`${interFont.className} font-medium text-[1.6rem]`}
                    >
                      {name}
                    </h5>
                    <p
                      className={`${interFont.className} font-normal text-black/80`}
                    >
                      {profision}
                    </p>
                    <div className="w-full flex items-center gap-x-3 mt-2 ">
                      {x}
                      {instagram}
                      {linkedIn}
                    </div>
                  </div>
                </div>
              );
            }
          )}
        </div>
        <div className="flex h-[5rem] mt-10  items-end gap-x-3 w-full   justify-center">
          {Array.from({ length: 5 }, (index: number) => {
            return (
              <div
                key={index}
                className="w-[24px] h-[24px] rounded-full bg-black/30    transition-all hover:bg-black/30  duration-500  hover:scale-[2] group cursor-pointer flex items-center justify-center"
              >
                <div className="hidden group-hover:block group-hover:border-2 group-hover:border-white group-hover:bg-teritiaryOrangeColor transition-colors w-[80%] h-[80%] rounded-full "></div>
              </div>
            );
          })}
        </div>
      </div>
      <div className="w-[90%]  mt-10 col-span-full px-20 flex items-center ">
        <SupportAndDeliveryInfo showArrow={false} />
      </div>
    </div>
  );
}
