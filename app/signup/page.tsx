import AuthForm from "@/components/AuthForm";
import FormSideImage from "@/components/FormSideImage";

export default function page() {
  return (
    <div className="w-ful py-10 h-full grid grid-cols-1  lg:grid-cols-2 gap-x-[5rem]">
      <FormSideImage />
      <AuthForm />
    </div>
  );
}
