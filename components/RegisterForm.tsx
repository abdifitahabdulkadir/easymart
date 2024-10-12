import { popois } from "@/lib/font";
import { FcGoogle } from "react-icons/fc";
interface ProsType {
  handleClick: VoidFunction;
}
export default function RegisterForm({ handleClick }: ProsType) {
  return (
    <div
      className={`lg:w-[70%] w-full py-10 flex flex-col gap-y-5 px-10 md:px-5 lg:px-1  ${popois.className}`}
    >
      <h1 className={` font-semibold text-[2rem] text-black `}>
        Create an account
      </h1>
      <p className="font-normal text-[0.8rem]">Enter your details below</p>

      <form action="" className="w-full flex flex-col gap-y-4">
        <input
          type="text"
          placeholder="Name"
          className="border-b-2 border-black/30 py-2 px-3ring-black/30 text-black placeholder:text-black/30  placeholder:text-sm  outline-none w-full"
        />
        <input
          type="text"
          placeholder="Email or Phone Number"
          className="border-b-2 border-black/30 py-2 px-3ring-black/30 text-black placeholder:text-black/30 placeholder:text-sm  outline-none w-full"
        />
        <input
          type="password"
          placeholder="Password"
          className="border-b-2 border-black/30 py-2 px-3ring-black/30 text-black placeholder:text-black/30 placeholder:text-sm  outline-none w-full"
        />
        <button className="w-full py-4 flex items-center justify-center text-white bg-teritiaryOrangeColor rounded-[4px] hover:bg-secondaryLightGraryColor hover:text-black hover:scale-[0.99] transition-all duration-300 cursor-pointer">
          Create Account
        </button>
        <button className="w-full py-3 flex items-center justify-center text-black  rounded-[4px] border border-black/30 gap-x-2 hover:bg-secondaryLightGraryColor cursor-pointer transition-all duration-200 hover:border-none hover:scale-[0.99]">
          <FcGoogle className="scale-[1.4]" />
          Sign up with Google
        </button>
      </form>
      <p className="flex gap-2 items-center w-full  justify-center">
        Already have account?
        <button
          onClick={handleClick}
          className="font-semibold hover:underline hover:text-sky-500 transition-all duration-150"
        >
          Log in
        </button>
      </p>
    </div>
  );
}
