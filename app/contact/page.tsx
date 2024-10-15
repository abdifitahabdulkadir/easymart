import ContactForm from "@/components/ContactForm";
import { popois } from "@/lib/font";
import { IoCallSharp } from "react-icons/io5";
import { MdEmail } from "react-icons/md";

export default function ContactPage() {
  return (
    <div className="grid grid-cols-1 pl-20 pr-10 md:grid-cols-[1fr_2fr] w-full mt-20 place-items-center gap-x-5 gap-y-6">
      <div className="min-h-[30rem] max-h-full w-full rounded-[4px] bg-white drop-shadow-lg shadow-black/5 px-5 py-6">
        <div
          className={`w-full flex flex-col gap-y-4 justify-between gap-x-1 $${popois.className}`}
        >
          <div className="w-full flex gap-x-2 items-center">
            <div className="bg-[#DB4444] text-white w-fit px-3 py-3 rounded-full">
              <IoCallSharp className="scale-[1.7]" />
            </div>
            <span className={`${popois.className} font-medium text-[1rem]`}>
              Call To Us
            </span>
          </div>

          <p className="text-black/80">We are available 24/7, 7 days a week.</p>
          <p className="text-black/80">Phone: +8801611112222</p>
          {/* separator */}
          <div className="w-full border-b-2 border-black/40 mt-7"></div>
          <div className="w-full flex gap-x-2 items-center mt-10">
            <div className="bg-[#DB4444] text-white w-fit px-3 py-3 rounded-full">
              <MdEmail className="scale-[1.7]" />
            </div>
            <span className={`${popois.className} font-medium text-[1rem]`}>
              Write To US
            </span>
          </div>
          <p className="text-black/80">
            Fill out our form and we will contact you within 24 hours.
          </p>
          <p className="text-black/80">Emails: customer@easymart.com</p>
          <p className="text-black/80">Emails: support@easymart.com</p>
        </div>
      </div>
      <ContactForm />
    </div>
  );
}
