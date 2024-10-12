import { interFont, popois } from "@/lib/font";
interface ProsType {
  title: string;
  links: string[];
  children?: React.ReactNode;
}
export default function FooterLinkItem({ title, links, children }: ProsType) {
  return (
    <div className="flex flex-col   gap-y-2 h-full w-full">
      <h2 className={`${interFont.className} font-medium text-[1.4rem]`}>
        {title}
      </h2>
      {links.map((item, index) => {
        return (
          <p
            key={index}
            className={`${popois.className} text-white/80 font-extralight text-[0.8rem]`}
          >
            {item}
          </p>
        );
      })}
      {children}
    </div>
  );
}
