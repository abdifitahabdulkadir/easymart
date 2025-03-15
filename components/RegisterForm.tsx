import { signUpWithCrendentials } from "@/lib/auth.action";
import { popois } from "@/lib/font";
import { SignUpSchema } from "@/lib/validations";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { useTransition } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { z } from "zod";
import FormInputWrapper from "./FormInputWrapper";
interface ProsType {
  handleClick: VoidFunction;
}

export default function RegisterForm({ handleClick }: ProsType) {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<z.infer<typeof SignUpSchema>>({
    resolver: zodResolver(SignUpSchema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
    },
  });
  const [isSubmitting, startTranstion] = useTransition();
  const router = useRouter();
  function handleFormSubmit(data: z.infer<typeof SignUpSchema>) {
    startTranstion(async () => {
      const result = await signUpWithCrendentials(data);
      if (result?.success) {
        toast("Account created successfully", { type: "success" });
        router.push("/");
        return;
      }
      toast(result.message, { type: "error" });
    });
  }
  return (
    <div
      className={`flex w-full flex-col gap-y-5 px-10 py-10 md:px-5 lg:w-[70%] lg:px-1 ${popois.className}`}
    >
      <h1 className={`text-[2rem] font-semibold text-black`}>
        Create an account
      </h1>
      <p className="text-[0.8rem] font-normal">Enter your details below</p>

      <form
        onSubmit={handleSubmit(handleFormSubmit)}
        className="flex w-full flex-col gap-y-4"
      >
        <FormInputWrapper message={errors.name?.message ?? ""}>
          <input
            type="text"
            {...register("name")}
            placeholder="Name"
            className="px-3ring-black/30 w-full border-b-2 border-black/30 py-2 text-black outline-none placeholder:text-sm placeholder:text-black/30"
          />
        </FormInputWrapper>
        <FormInputWrapper message={errors.email?.message ?? ""}>
          <input
            type="text"
            {...register("email")}
            placeholder="Email "
            className="px-3ring-black/30 w-full border-b-2 border-black/30 py-2 text-black outline-none placeholder:text-sm placeholder:text-black/30"
          />
        </FormInputWrapper>

        <FormInputWrapper message={errors.password?.message ?? ""}>
          <input
            type="text"
            {...register("password")}
            placeholder="Password"
            className="px-3ring-black/30 w-full border-b-2 border-black/30 py-2 text-black outline-none placeholder:text-sm placeholder:text-black/30"
          />
        </FormInputWrapper>

        <button
          disabled={isSubmitting}
          className="flex w-full cursor-pointer items-center justify-center rounded-[4px] bg-teritiaryOrangeColor py-4 text-white transition-all duration-300 hover:scale-[.99] hover:bg-secondaryLightGraryColor hover:text-black"
        >
          {isSubmitting ? "Creating Account..." : "Create Account"}
        </button>
      </form>
      <p className="flex w-full items-center justify-center gap-2">
        Already have account?
        <button
          onClick={handleClick}
          className="font-semibold transition-all duration-150 hover:text-sky-500 hover:underline"
        >
          Log in
        </button>
      </p>
    </div>
  );
}
