import { popois } from "@/lib/font";

export default function AccountPage() {
  return (
    <div className=" w-full lg:w-fit flex flex-col  h-full  py-5 ">
      <h4 className="text-center md:text-right  w-full ">
        welcome! ,
        <span className="text-teritiaryOrangeColor">Abdifitah Abdulkadir</span>
      </h4>
      <div className="w-full mt-10 bg-white shadow-lg shadow-black/5 px-5 py-10 h-full">
        <h3
          className={`text-teritiaryOrangeColor font-medium ${popois.className} text-[1.2rem]`}
        >
          Edit Your Profile
        </h3>
        <form action="" className="w-full mt-7 flex flex-col  gap-y-7 h-full">
          {/* firstName and lastName */}
          <div className="w-full flex-col flex lg:flex-row gap-y-2 items-center gap-x-3">
            <label
              htmlFor="firstName"
              className="font-normal  text-sm flex flex-col gap-y-1  w-full"
            >
              FirstName
              <input
                type="text"
                id="firstName"
                placeholder="Abdifitah"
                className="rounded-[4px]  outline-none border-2 border-secondaryWhiteColorOne hover:border-teritiaryOrangeColor/50  px-2 py-2 text-[.9rem] font-normal w-full  bg-secondaryWhiteColorOne placeholder:text-black/40"
              />
            </label>
            <label
              htmlFor="LastName"
              className="font-normal text-sm flex flex-col gap-y-1 w-full"
            >
              LastName
              <input
                type="text"
                id="lastName"
                placeholder="Abdulkadir"
                className="rounded-[4px]  outline-none border-2 border-secondaryWhiteColorOne hover:border-teritiaryOrangeColor/50  px-2 py-2 text-[.9rem] font-normal w-full bg-secondaryWhiteColorOne placeholder:text-black/40"
              />
            </label>
          </div>

          {/* email and address */}
          <div className="w-full flex-col flex lg:flex-row gap-y-2 items-center gap-x-3">
            <label
              htmlFor="email"
              className="font-normal text-sm flex flex-col gap-y-1  w-full"
            >
              Email
              <input
                type="text"
                id="email"
                placeholder="abdifitah11@gmail.com"
                className="rounded-[4px]  outline-none border-2 border-secondaryWhiteColorOne hover:border-teritiaryOrangeColor/50  px-2 py-2 text-[.9rem] font-normal w-full  bg-secondaryWhiteColorOne placeholder:text-black/40"
              />
            </label>
            <label
              htmlFor="address"
              className="font-normal text-sm flex flex-col gap-y-1 w-full"
            >
              Address
              <input
                type="text"
                id="address"
                placeholder="Kingston, 5236, United State"
                className="rounded-[4px]  outline-none border-2 border-secondaryWhiteColorOne hover:border-teritiaryOrangeColor/50  px-2 py-2 text-[.9rem] font-normal w-full bg-secondaryWhiteColorOne placeholder:text-black/40"
              />
            </label>
          </div>

          {/* password changes */}
          <div className="w-full flex flex-col gap-y-3">
            <span className="font-normal">Password Changes</span>
            <input
              type="text"
              placeholder="Current Password"
              className="rounded-[4px]  outline-none border-2 border-secondaryWhiteColorOne hover:border-teritiaryOrangeColor/50  px-2 py-2 text-[.9rem] font-normal w-full bg-secondaryWhiteColorOne placeholder:text-black/40"
            />
            <input
              type="text"
              placeholder="New Password"
              className="rounded-[4px]  outline-none border-2 border-secondaryWhiteColorOne hover:border-teritiaryOrangeColor/50  px-2 py-2 text-[.9rem] font-normal w-full bg-secondaryWhiteColorOne placeholder:text-black/40"
            />
            <input
              type="text"
              placeholder="Confirm New Password"
              className="rounded-[4px]  outline-none border-2 border-secondaryWhiteColorOne hover:border-teritiaryOrangeColor/50  px-2 py-2 text-[.9rem] font-normal w-full bg-secondaryWhiteColorOne placeholder:text-black/40"
            />
          </div>
          <div className="w-full flex items-center  justify-between md:justify-end gap-x-2">
            <button className="px-2  py-1 md:py-3 hover:bg-secondaryLightGraryColor transition-all duration-150 rounded-[4px] w-fit self-center md:self-start text-[.7rem] md:text-[1rem]">
              Cancel
            </button>

            <button className="px-2 py-3 bg-teritiaryOrangeColor text-white flex items-center justify-center rounded-[4px] hover:bg-teritiaryGreenColor  transition-all duration-300 w-fit self-center md:self-start">
              Save Changes
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
