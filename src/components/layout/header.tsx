import React from "react";
import { Button } from "../ui/button";
import Link from "next/link";

export default function Header() {
  return (
    <div className=" fixed top-0 left-0 w-full bg-rose-50/30 backdrop-blur z-20">
      <nav className=" container flex justify-between items-center h-[80px]">
        <div className="">
          <p className=" text-lg font-semibold text-rose-900 italic">
            Shwe Latt Twal
          </p>
        </div>

        <Button
          variant={"outline"}
          className=" uppercase bg-transparent rounded-full"
          asChild
        >
          <Link href={"/sign-in"}>Login</Link>
        </Button>
      </nav>
    </div>
  );
}
