export function PrimaryTitleGenerator({ title }: { title: string }) {
  return (
    <div className={`flex  flex-col   gap-x-3  w-full`}>
      <div className="flex items-center gap-x-2 text-teritiaryOrangeColor">
        <div className="w-[20px] h-[40px] bg-teritiaryOrangeColor rounded-[4px]"></div>
        <h4 className=" leading-9 p-1 font-normal md:font-semibold">{title}</h4>
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
    <h2
      className={` ${className}  font-semibold text-[1.3rem] md:text-[2rem] lg:text-[2.4rem]`}
    >
      {title}
    </h2>
  );
}
