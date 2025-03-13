import AuthForm from "@/components/AuthForm";
import FormSideImage from "@/components/FormSideImage";

export default async function page() {
  return (
    <div className="w-ful grid h-[60rem] max-h-full grid-cols-1 gap-x-[5rem] py-10 lg:h-[35rem] lg:grid-cols-2">
      <FormSideImage />
      <AuthForm />
    </div>
  );
}
