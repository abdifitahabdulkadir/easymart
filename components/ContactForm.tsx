export default function ContactForm() {
  return (
    <form className="w-full py-10 min-h-[30rem] max-h-full  bg-white drop-shadow-lg shadow-black/5 flex items-center gap-y-6 px-5 flex-col">
      <div className="flex items-center justify-between w-full gap-x-2 flex-wrap gap-y-3 md:flex-nowrap">
        <input
          type="text"
          placeholder="Your Name*"
          className="rounded-[4px]  outline-none border-2 border-secondaryWhiteColorOne hover:border-teritiaryOrangeColor/50  px-2 py-2 text-[.9rem] font-normal w-full bg-secondaryWhiteColorOne"
        />
        <input
          type="text"
          placeholder="Your Email*"
          className="rounded-[4px]  outline-none border-2 border-secondaryWhiteColorOne hover:border-teritiaryOrangeColor/50  px-2 py-2 text-[.9rem] font-normal w-full bg-secondaryWhiteColorOne"
        />
        <input
          type="text"
          placeholder="Your Phone*"
          className="rounded-[4px]  outline-none border-2 border-secondaryWhiteColorOne hover:border-teritiaryOrangeColor/50  px-2 py-2 text-[.9rem] font-normal w-full bg-secondaryWhiteColorOne"
        />
      </div>
      <textarea
        placeholder="Your Message"
        rows={10}
        className="rounded-[4px] resize-none  outline-none border-2 border-secondaryWhiteColorOne hover:border-teritiaryOrangeColor/50  px-2 py-2 text-[.9rem] font-normal w-full bg-secondaryWhiteColorOne"
      />

      <button className="px-4 py-3 bg-teritiaryOrangeColor text-white flex items-center justify-center rounded-[4px] hover:bg-teritiaryGreenColor  transition-all duration-300 self-end">
        Send Message
      </button>
    </form>
  );
}
