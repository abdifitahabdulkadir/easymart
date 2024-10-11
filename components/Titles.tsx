export function PrimaryTitleGenerator({
  title,
  className,
}: {
  title: string;
  className?: string;
}) {
  return (
    <div className={`flex  flex-col   gap-x-3 ${className}`}>
      <div className="flex items-center gap-x-2 text-teritiaryOrangeColor">
        <div className="w-[20px] h-[40px] bg-teritiaryOrangeColor rounded-[4px]"></div>
        <h4 className=" leading-9 p-1 font-semibold">{title}</h4>
      </div>
    </div>
  );
}

export function SecondaryTitleGenerator({
  title,
  className,
}: {
  title: string;
  className?: string;
}) {
  return (
    <div
      className={`flex flex-col md:flex-row gap-x-3 items-center space-x-16  ${className}`}
    >
      <h2 className="font-semibold text-[2rem] lg:text-[2.4rem]">{title}</h2>
    </div>
  );
}

export default function SectionTitleGenerator({
  primaryText,
  secondaryText,
  children,
}: {
  primaryText: string;
  secondaryText: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col items-start w-full">
      <PrimaryTitleGenerator title={primaryText} className="px-3" />
      <div className="px-4 flex items-center justify-between  w-full">
        <SecondaryTitleGenerator title={secondaryText} />
        {children}
      </div>
    </div>
  );
}
