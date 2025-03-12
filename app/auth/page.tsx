import { auth } from "@/auth";
import AuthForm from "@/components/AuthForm";
import FormSideImage from "@/components/FormSideImage";
import { redirect } from "next/navigation";

export default async function page() {
  const session = await auth();

  if (session) redirect("/home");
  return (
    <div className="w-ful grid h-[60rem] max-h-full grid-cols-1 gap-x-[5rem] py-10 lg:h-[35rem] lg:grid-cols-2">
      <FormSideImage />
      <AuthForm />
    </div>
  );
}
