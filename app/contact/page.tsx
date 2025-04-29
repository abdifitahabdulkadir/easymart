import ContactForm from "@/components/ContactForm";
import { popois } from "@/lib/font";
import { IoCallSharp } from "react-icons/io5";
import { MdEmail } from "react-icons/md";

export default function ContactPage() {
  return (
    <div className="mt-20 grid w-full grid-cols-1 place-items-center gap-x-5 gap-y-6 pl-20 pr-10 md:grid-cols-[1fr_2fr]">
      <div className="max-h-full min-h-[30rem] w-full rounded-[4px] bg-white px-5 py-6 shadow-black/5 drop-shadow-lg">
        <div
          className={`flex w-full flex-col justify-between gap-x-1 gap-y-4 $${popois.className}`}
        >
          <div className="flex w-full items-center gap-x-2">
            <div className="w-fit rounded-full bg-[#DB4444] px-3 py-3 text-white">
              <IoCallSharp className="scale-[1.7]" />
            </div>
            <span className={`${popois.className} text-[1rem] font-medium`}>
              Call To Us
            </span>
          </div>

          <p className="text-black/80">We are available 24/7, 7 days a week.</p>
          <p className="text-black/80">Phone: +91 1234567890</p>
          {/* separator */}
          <div className="mt-7 w-full border-b-2 border-black/40"></div>
          <div className="mt-10 flex w-full items-center gap-x-2">
            <div className="w-fit rounded-full bg-[#DB4444] px-3 py-3 text-white">
              <MdEmail className="scale-[1.7]" />
            </div>
            <span className={`${popois.className} text-[1rem] font-medium`}>
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
