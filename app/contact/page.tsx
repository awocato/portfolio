import Link from "next/link";
export default function Contact() {
  return (
    <div className="flex flex-col text-5xl leading-normal  font-bold py-2  lg:mx-40 md:mx-20  mt-10 mx-5">
        <h1 className="mb-5">wanna contact?</h1>
      <div className="flex flex-col space-y-6">
        <div className="flex items-center hover:dark:text-pinkish hover:text-greenish space-x-5">
          <Link className="group" href="mailto:minikhanov.talgat@gmail.com">
            send me an email
            <div className="dark:bg-[#f0696e] bg-[#4f772d] h-[2px] w-0 group-hover:w-full mt-2 transition-all duration-500" />
          </Link>
        </div>
        <div className="flex hover:dark:text-pinkish items-center hover:text-greenish space-x-5">
          <Link className="group" href="https://t.me/minikhanov_t">
            or text me on telegram
            <div className="dark:bg-[#f0696e] bg-[#4f772d] h-[2px] w-0 group-hover:w-full mt-2  transition-all duration-500" />
          </Link>
        </div>
        <div className="flex items-center hover:dark:text-pinkish hover:text-greenish space-x-5">
          <Link className="group" href="tel:+998335310501">
            if it's urgent,then call me *
            <div className="dark:bg-[#f0696e] bg-[#4f772d] h-[2px] w-0 group-hover:w-full mt-2 transition-all duration-500" />
          </Link>
        </div>
        <div><p className="text-xs">*this option is not recomended</p></div>
      </div>
    </div>
  );
}
