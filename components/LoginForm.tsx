import { popois } from "@/lib/font";
import { signInWithCredentials } from "@/lib/handleCrendentials";
import { SignInSchema } from "@/lib/validations";
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useTransition } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { z } from "zod";
import FormInputWrapper from "./FormInputWrapper";
interface ProsType {
  handleClick: VoidFunction;
}
export default function LoginForm({ handleClick }: ProsType) {
  const {
    handleSubmit,
    register,

    formState: { errors },
  } = useForm<z.infer<typeof SignInSchema>>({
    resolver: zodResolver(SignInSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });
  const [isSubmitting, startTranstion] = useTransition();
  const router = useRouter();
  function handleFormSubmit(data: z.infer<typeof SignInSchema>) {
    startTranstion(async () => {
      const result = await signInWithCredentials(data);
      if (result?.success) {
        router.push("/");
        return;
      }
      toast(result.message, { type: "error" });
    });
  }

  console.log("current ", process.env.AUTH_API_URL);
  return (
    <div
      className={`flex w-full flex-col gap-y-5 px-10 py-10 md:px-5 lg:w-[70%] lg:px-1 ${popois.className}`}
    >
      <h1 className={`text-[1.8rem] font-semibold text-black`}>
        Login Into EasyMart
      </h1>
      <p className="text-[0.8rem] font-normal">Enter your details below</p>

      <form
        onSubmit={handleSubmit(handleFormSubmit)}
        className="flex w-full flex-col gap-y-4"
      >
        <FormInputWrapper message={errors.email?.message ?? ""}>
          <input
            type="text"
            {...register("email")}
            placeholder="Email "
            className="px-3ring-black/30 w-full border-b-2 border-black/30 py-2 text-black outline-none placeholder:text-sm placeholder:text-black/30 lg:w-[70%]"
          />
        </FormInputWrapper>

        <FormInputWrapper message={errors.password?.message ?? ""}>
          <input
            type="password"
            {...register("password")}
            placeholder="Password"
            className="px-3ring-black/30 w-full border-b-2 border-black/30 py-2 text-black outline-none placeholder:text-sm placeholder:text-black/30 lg:w-[70%]"
          />
        </FormInputWrapper>

        <div className="flex w-full flex-wrap items-center justify-between gap-x-4 gap-y-3 lg:flex-nowrap">
          <button
            disabled={isSubmitting}
            className="flex w-full cursor-pointer items-center justify-center rounded-[4px] bg-teritiaryOrangeColor py-4 text-white transition-all duration-300 hover:scale-[.89] hover:bg-secondaryLightGraryColor hover:text-black"
          >
            {isSubmitting ? "Loging...." : "Login"}
          </button>
        </div>
      </form>
      <div className="flex w-full flex-col items-center gap-2">
        <p className="flex w-full items-center justify-center gap-2 md:text-left">
          Dont have an account yet?
          <button
            onClick={handleClick}
            className="font-semibold transition-all duration-150 hover:text-sky-500 hover:underline"
          >
            Register here
          </button>
        </p>

        <Link
          href={""}
          onClick={handleClick}
          className="font-semibold transition-all duration-150 hover:text-sky-500 hover:underline"
        >
          Forget Password?
        </Link>
      </div>
    </div>
  );
}
