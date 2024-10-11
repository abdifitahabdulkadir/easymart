interface ProsType {
  text: string;
  className?: string;
}
export default function Button({ text, className }: ProsType) {
  return (
    <button
      className={`px-4  shadow-white  cursor-pointer rounded-[4px] text-white py-2 text-center  ${className}`}
    >
      {text}
    </button>
  );
}
