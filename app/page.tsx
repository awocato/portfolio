import { FaGithub, FaTelegram } from "react-icons/fa";
import { Button } from "@/components/ui/button";
import Link from "next/link";
// import { IconsCarousel } from "@/components/IconsCarousel";

export default function HomePage() {
  return (
    <div className="flex flex-col justify-center items-center gap-10 md:mt-24 mt-10 ">
      <div className="flex flex-col gap-5 justify-center lg:mx-40 mx-5 mt-5">
        <h1 className="text-5xl leading-snug md:text-center justify-center transition-all duration-300 black lg:text-6xl ">
          <span className="dark:text-pinkish text-greenish ">Hi, I’m </span>
          Talgat Minikhanov
        </h1>
        <h1 className="text-greenish dark:text-pinkish md:text-center font-bold text-4xl">
          A Full-stack Engineer
        </h1>
        <h2 className=" md:mx-44">
          Hey there! I’m a full-stack wizard who loves to create beautiful and
          responsive websites. I kinda know HTML, CSS, JavaScript, React, NextJS, MERN-stack
          and couple other stuff. Oh and I’m always hungry to learn more. Let’s
          work together to create something amazing. 😊
        </h2>
        <div className="flex lg:flex-col gap-5 md:justify-center items-center">
          <Button className="relative overflow-hidden transition-all duration-500 ease-in-out hover:dark:bg-pinkish hover:bg-greenish">
            <Link href="https://drive.google.com/file/d/14cgV6B5l3490BdIJNeNOfpD6z1XOhNlf/view?usp=sharing">
              Check out my Resume
            </Link>
          </Button>

          <div className="flex lg:mt-5 gap-5">
            <Link href="https://github.com/awocato">
              <FaGithub className="text-4xl transition-all duration-500 ease-in-out hover:dark:text-pinkish hover:text-greenish " />
            </Link>
            <Link
              className="text-4xl transition-all duration-500 ease-in-out hover:dark:text-pinkish hover:text-greenish "
              href="https://t.me/minikhanov_t"
            >
              <FaTelegram />
            </Link>
          </div>
        </div>
      </div>
      {/* <IconsCarousel /> */}
    </div>
  );
}
