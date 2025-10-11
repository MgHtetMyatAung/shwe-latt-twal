import { Button } from "@/components/ui/button";
import Image from "next/image";
import React from "react";
import { Sparkles, Heart, Share2 } from "lucide-react";
import { RotatingText } from "@/components/ui/shadcn-io/rotating-text";
import HeroImgCarousel from "@/features/home/hero-img-carousel";
import Link from "next/link";
import { ROUTES } from "@/constants/routes.data";

export const metadata = {
  openGraph: {
    images: "/imgs/meta-img.png",
  },
};

const services = ["Wedding", "Birthday", "Religious Ceremony"];

export default function Home() {
  return (
    <div className=" relative w-full min-h-screen  default-bg py-[90px] lg:pt-[80px]">
      <div className="relative container z-10 w-full min-page-h flex items-center">
        <div className="grid grid-cols-1 lg:grid-cols-2 lg:mx-16">
          <div className=" space-y-7 max-w-[700px] 2xl:max-w-[900px] h-fit my-auto py-20 lg:py-0">
            <h4 className=" text-xl text-center lg:text-start xl:text-2xl font-medium text-rose-900 space-y-3">
              Invitation Maker For{" "}
              <RotatingText
                text={services}
                duration={3000}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className=" font-semibold text-center lg:text-start text-2xl sm:text-3xl lg:text-4xl 2xl:text-5xl text-rose-700"
                containerClassName=" py-2"
              />
              <span className=" font-normal text-center lg:text-start text-lg text-pretty text-rose-700">
                Design stunning, personalized invitations and share them with
                your loved ones in minutes
              </span>
            </h4>
            {/* <p className=" text-base sm:text-xl text-center">
            ( ဖိတ်ကြားလွှာ ဖန်တီးမယ် )
          </p> */}

            <div className=" relative max-w-[150px] mx-auto lg:mx-0">
              <Link href={ROUTES.dashboard}>
                <Button
                  className=" rounded-full block mx-auto lg:mx-0  cursor-pointer bg-rose-900 "
                  size={"lg"}
                >
                  Get Started
                </Button>
              </Link>
              <Image
                src={"/imgs/underline.png"}
                width={679}
                height={420}
                alt="circle"
                className=" w-full"
              />
            </div>
          </div>
          <div>
            <HeroImgCarousel />
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
          className=" h-[100px] sm:h-[200px] w-auto mt-auto"
        />
        <div className=" grow">
          <Image
            src={"/imgs/heart-1.png"}
            width={389}
            height={422}
            alt="heart"
            className="opacity-[3%] w-[200px] md:w-[500px] h-auto mx-auto mt-[150px] lg:mt-20"
          />
        </div>
      </div>
    </div>
  );
}
