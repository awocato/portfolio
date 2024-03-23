"use client";

import Link from "next/link";

import { CgMenuRight } from "react-icons/cg";
import {
  Sheet,
  SheetContent,
  SheetTitle,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet";
// import DarkToggle from "./DarkToggle";

function Header() {
  return (
    <header className="">
      <div className=" transition-position duration-500 flex justify-between items-center lg:mx-40 md:mx-20 md:mt-10 mx-5 mt-5">
        <Link
          className="group text-lg lg:text-3xl md:text-2xl font-bold"
          href="/"
        >
          TM.
          <div className="dark:bg-[#f0696e] bg-[#4f772d] h-[2px] w-0 group-hover:w-full transition-all duration-500" />
        </Link>
        <div className="flex items-center gap-5">
          <ul className="hidden md:flex gap-5 ">
            <li>
              <Link className="group" href="/projects">
                projects
                <div className="dark:bg-[#f0696e] bg-[#4f772d] h-[2px] w-0 group-hover:w-full transition-all duration-500" />
              </Link>
            </li>
            <li>
              <Link className="group" href="/skills">
                skills
                <div className="dark:bg-[#f0696e] bg-[#4f772d] h-[2px] w-0 group-hover:w-full transition-all duration-500" />
              </Link>
            </li>
            <li>
              <Link className="group" href="/contact">
                contact
                <div className="dark:bg-[#f0696e] bg-[#4f772d] h-[2px] w-0 group-hover:w-full transition-all duration-500" />
              </Link>
            </li>
          </ul>

          <div className="flex md:hidden">
            <Sheet>
              <SheetTrigger className="flex text-lg md:hidden">
                <CgMenuRight />
              </SheetTrigger>
              <SheetContent className=" flex flex-col gap-10 w-full md:w-1/2 dark:bg-[#16212e] ">
                <SheetTitle>
                  <SheetClose asChild>
                    <Link href="/">TM.</Link>
                  </SheetClose>
                </SheetTitle>
                <ul className=" flex flex-col lg:hidden gap-5  ">
                  <li>
                    <SheetClose asChild>
                      <Link className="group" href="/projects">
                        projects
                        <div className="dark:bg-[#f0696e] bg-[#4f772d] h-[2px] w-0 group-hover:w-full transition-all duration-500" />
                      </Link>
                    </SheetClose>
                  </li>
                  <li>
                    <SheetClose asChild>
                      <Link className="group" href="/skills">
                        skills
                        <div className="dark:bg-[#f0696e] bg-[#4f772d] h-[2px] w-0 group-hover:w-full transition-all duration-500" />
                      </Link>
                    </SheetClose>
                  </li>
                  <li>
                    <SheetClose asChild>
                      <Link className="group" href="/contact">
                        contact
                        <div className="dark:bg-[#f0696e] bg-[#4f772d] h-[2px] w-0 group-hover:w-full transition-all duration-500" />
                      </Link>
                    </SheetClose>
                  </li>
                </ul>
              </SheetContent>
            </Sheet>
          </div>

          {/* <DarkToggle /> */}
        </div>
      </div>
    </header>
  );
}

export default Header;
