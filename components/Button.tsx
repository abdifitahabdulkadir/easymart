interface ProsType {
  text: string;
}
export default function Button({ text }: ProsType) {
  return (
    <button className="px-4 mt-7 hover:shadow-lg shadow-white hover:bg-secondaryLightGraryColor hover:text-black transition-all duration-500 hover:-translate-y-[10px] cursor-pointer rounded-[4px] text-white py-3 text-center bg-teritiaryOrangeColor">
      {text}
    </button>
  );
}
