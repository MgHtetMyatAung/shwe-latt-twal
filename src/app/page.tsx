import { Button } from "@/components/ui/button";
import Image from "next/image";
import React from "react";
import { Sparkles, Heart, Share2 } from "lucide-react";

export default function Home() {
  return (
    <div className=" relative w-full min-h-screen  bg-gradient-to-br from-rose-50 via-pink-50 to-rose-100">
      <div className=" relative z-10 w-full h-screen grid place-items-center">
        <div className=" space-y-7 max-w-[700px] 2xl:max-w-[900px] pt-20">
          <h1 className=" text-center text-rose-900 text-balance">
            Wedding Invitation Maker <br />
            <span className=" text-lg sm:text-2xl">
              ( မင်္ဂလာဆောင် ဖိတ်ကြားလွှာ ဖန်တီးမယ် )
            </span>
          </h1>
          <p className=" text-center text-lg md:text-xl 2xl:text-2xl text-rose-700 text-pretty">
            Design stunning, personalized wedding invitations and share them
            with your loved ones in minutes
          </p>
          <div className=" relative max-w-[200px] mx-auto">
            <Button
              className=" rounded-full block mx-auto cursor-pointer bg-rose-900 "
              size={"lg"}
            >
              Get Started
            </Button>
            <Image
              src={"/imgs/underline.png"}
              width={679}
              height={420}
              alt="circle"
              className=" w-full transform -translate-y-5"
            />
          </div>
        </div>
      </div>
      <div className="container relative z-10">
        <div className="grid md:grid-cols-3 gap-8 py-16">
          <div className="space-y-3 p-6 bg-white/50 rounded-lg backdrop-blur">
            <div className="w-12 h-12 bg-rose-100 rounded-full flex items-center justify-center mx-auto">
              <Sparkles className="w-6 h-6 text-rose-600" />
            </div>
            <h3 className="text-xl font-serif text-rose-900 text-center">
              Beautiful Templates
            </h3>
            <p className="text-rose-700 text-center">
              Choose from elegant designs and customize colors to match your
              wedding theme
            </p>
          </div>

          <div className="space-y-3 p-6 bg-white/50 rounded-lg backdrop-blur">
            <div className="w-12 h-12 bg-rose-100 rounded-full flex items-center justify-center mx-auto">
              <Heart className="w-6 h-6 text-rose-600" />
            </div>
            <h3 className="text-xl font-serif text-rose-900 text-center">
              Easy Customization
            </h3>
            <p className="text-rose-700 text-center">
              Personalize every detail with our intuitive editor
            </p>
          </div>

          <div className="space-y-3 p-6 bg-white/50 rounded-lg backdrop-blur">
            <div className="w-12 h-12 bg-rose-100 rounded-full flex items-center justify-center mx-auto">
              <Share2 className="w-6 h-6 text-rose-600" />
            </div>
            <h3 className="text-xl font-serif text-rose-900 text-center">
              Share Instantly
            </h3>
            <p className="text-rose-700 text-center">
              Send your invitations to friends and family with a simple link
            </p>
          </div>
        </div>
      </div>
      <div className=" w-full h-screen fixed top-0 left-0 flex">
        <Image
          src={"/imgs/plant.png"}
          width={229}
          height={400}
          alt="plant"
          className=" h-[200px] sm:h-[300px] w-auto mt-auto"
        />
        <div className=" grow">
          <Image
            src={"/imgs/heart-1.png"}
            width={389}
            height={422}
            alt="heart"
            className="opacity-[2%] w-[200px] md:w-[500px] h-auto mx-auto mt-[150px] md:mt-20"
          />
        </div>
      </div>
    </div>
  );
}
