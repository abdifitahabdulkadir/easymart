import Image from "next/image";

export default function FormSideImage() {
  return (
    <div className="w-full h-[25rem] rounded-tr-md rounded-br-md bg-[#CBE4E8] flex items-center justify-end ">
      <Image
        src={"/form-img.svg"}
        height={100}
        width={100}
        alt="form image"
        priority
        loading="eager"
        className="w-full h-full rounded-tr-md rounded-br-md"
      />
    </div>
  );
}
