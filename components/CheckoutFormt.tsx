export default function CheckoutForm() {
  return (
    <form className="flex flex-col gap-y-7  py-2 mt-6">
      <label
        htmlFor="name"
        className="font-extralight text-sm flex flex-col gap-y-1 "
      >
        <span>
          FirstName
          <span className="text-teritiaryOrangeColor font-bold">*</span>
        </span>
        <input
          type="text"
          id="name"
          className="rounded-[4px]  outline-none border-2 border-secondaryWhiteColorOne hover:border-teritiaryOrangeColor/50  px-2 py-2 text-[.9rem] font-normal w-full md:w-[80%] bg-secondaryWhiteColorOne"
        />
      </label>
      <label
        htmlFor="name"
        className="font-extralight text-sm  flex flex-col 
      gap-y-1"
      >
        Company Name
        <input
          type="text"
          id="name"
          className="rounded-[4px]  outline-none border-2 border-secondaryWhiteColorOne hover:border-teritiaryOrangeColor/50  px-2 py-2 text-[.9rem] font-normal w-full md:w-[80%] bg-secondaryWhiteColorOne"
        />
      </label>
      <label
        htmlFor="name"
        className="font-extralight text-sm flex flex-col gap-y-1 "
      >
        <span>
          Street Address
          <span className="text-teritiaryOrangeColor font-bold">*</span>
        </span>
        <input
          type="text"
          id="name"
          className="rounded-[4px]  outline-none border-2 border-secondaryWhiteColorOne hover:border-teritiaryOrangeColor/50  px-2 py-2 text-[.9rem] font-normal w-full md:w-[80%] bg-secondaryWhiteColorOne"
        />
      </label>
      <label
        htmlFor="name"
        className="font-extralight text-sm flex flex-col gap-y-1"
      >
        Apartment, floor, etc. (optional)
        <input
          type="text"
          id="name"
          className="rounded-[4px]  outline-none border-2 border-secondaryWhiteColorOne hover:border-teritiaryOrangeColor/50  px-2 py-2 text-[.9rem] font-normal w-full md:w-[80%] bg-secondaryWhiteColorOne"
        />
      </label>
      <label
        htmlFor="name"
        className="font-extralight text-sm flex flex-col gap-y-1"
      >
        <span>
          Town/City
          <span className="text-teritiaryOrangeColor font-bold">*</span>
        </span>
        <input
          type="text"
          id="name"
          className="rounded-[4px]  outline-none border-2 border-secondaryWhiteColorOne hover:border-teritiaryOrangeColor/50  px-2 py-2 text-[.9rem] font-normal w-full md:w-[80%] bg-secondaryWhiteColorOne"
        />
      </label>
      <label htmlFor="name" className="font-extralight text-sm ">
        Phone Number
        <span className="text-teritiaryOrangeColor font-bold">*</span>
      </label>
      <input
        type="text"
        id="name"
        className="rounded-[4px]  outline-none border-2 border-secondaryWhiteColorOne hover:border-teritiaryOrangeColor/50  px-2 py-2 text-[.9rem] font-normal w-full md:w-[80%] bg-secondaryWhiteColorOne"
      />
      <label
        htmlFor="name"
        className="font-extralight text-sm flex flex-col gap-y-1 "
      >
        <span>
          Email Address
          <span className="text-teritiaryOrangeColor font-bold">*</span>
        </span>
        <input
          type="text"
          id="name"
          className="rounded-[4px]  outline-none border-2 border-secondaryWhiteColorOne hover:border-teritiaryOrangeColor/50  px-2 py-2 text-[.9rem] font-normal w-full md:w-[80%] bg-secondaryWhiteColorOne"
        />
      </label>
      <label
        htmlFor="save"
        className="flex items-center gap-x-2  text-[.6rem] md:text-[.8rem] font-medium"
      >
        <input
          type="checkbox"
          id="save"
          className="rounded-[4px] scale-[2] cursor-pointer accent-teritiaryOrangeColor "
        />
        Save this information for faster check-out next time
      </label>
    </form>
  );
}
