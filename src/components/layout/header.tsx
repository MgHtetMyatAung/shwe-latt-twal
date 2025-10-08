import React from "react";
import { Button } from "../ui/button";

export default function Header() {
  return (
    <div className=" fixed top-0 left-0 w-full bg-rose-50/30 backdrop-blur z-20">
      <nav className=" container flex justify-between items-center h-[70px]">
        <div className="">
          <p className=" text-lg font-semibold text-rose-900 italic">
            Shwe Latt Twal
          </p>
        </div>

        <Button
          variant={"outline"}
          className=" uppercase bg-transparent rounded-full"
        >
          Login
        </Button>
      </nav>
    </div>
  );
}
