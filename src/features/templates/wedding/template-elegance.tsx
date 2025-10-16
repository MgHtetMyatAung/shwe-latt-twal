import { Card, CardContent } from "@/components/ui/card";
import { getColorClasses } from "@/lib/color";
import { getDateDetails } from "@/lib/date";
import { FONTS } from "@/lib/fonts";
import { convertToAmPm } from "@/lib/time";
import { useWeddingContentStore } from "@/store/wedding-content-store";
import Image from "next/image";
import React from "react";

export default function TemplateElegance() {
  const weddingInfo = useWeddingContentStore();
  const dateDetail = getDateDetails(weddingInfo.gregorianDate?.toString());
  const headerFont = Object.values(FONTS).find(
    (f) => f.id === weddingInfo.headerFontId
  );
  const headerFontValue = headerFont ? headerFont.value : "sans-serif";
  return (
    <div className=" xl:px-10 mx-auto max-w-[700px]">
      <Card
        className={getColorClasses(
          weddingInfo.primaryColor,
          "rounded-none relative overflow-hidden"
        )}
      >
        <CardContent className="  min-h-[400px] space-y-4 2xl:space-y-8 py-5 px-0">
          <p
            className=" text-center text-sm 2xl:text-2xl"
            style={{ fontFamily: headerFontValue }}
          >
            {weddingInfo.title || "-------"}
          </p>
          <div className=" px-14 2xl:px-20 ">
            <h3
              className="text-xl lg:text-2xl 2xl:text-4xl font-semibold"
              style={{ fontFamily: headerFontValue }}
            >
              {weddingInfo.groomName || "-----"}
            </h3>
            <p
              className=" text-center 2xl:text-3xl"
              style={{ fontFamily: headerFontValue }}
            >
              &
            </p>
            <h3
              className=" text-xl lg:text-2xl 2xl:text-4xl font-semibold text-end"
              style={{ fontFamily: headerFontValue }}
            >
              {weddingInfo.brideName || "-----"}
            </h3>
          </div>
          <Image
            src={"/temps/wedding/ribbon.png"}
            alt="ribbon"
            width={731}
            height={341}
          />
          <p
            className="  font-medium text-center 2xl:text-2xl"
            style={{ fontFamily: headerFontValue }}
          >
            Save The Date
          </p>
          <p className="text-center">{dateDetail.month || "---"}</p>
          <div className=" flex justify-center items-center gap-2 text-sm 2xl:text-lg">
            <p className=" text-center space-x-2">{dateDetail.day || "---"} </p>
            <p className=" rounded-full w-7 h-7 flex justify-center items-center font-semibold border">
              {dateDetail.count || "---"}
            </p>
            <p className=" text-center space-x-2">
              {weddingInfo?.receptionTime
                ? convertToAmPm(weddingInfo.receptionTime)
                : "---"}
            </p>
          </div>
          <p className=" text-center  text-xs 2xl:text-xl px-10 font-medium">
            {weddingInfo.receptionVenue || "-----------"}
          </p>
        </CardContent>
        <Image
          src={"/temps/wedding/top_flower_1.png"}
          alt="flower-top"
          width={266}
          height={429}
          className=" absolute -top-6 right-0 w-16 h-auto rotate-180"
        />
        <Image
          src={"/temps/wedding/top_flower_1.png"}
          alt="flower-top"
          width={266}
          height={429}
          className=" absolute -bottom-6 left-0 w-16 h-auto"
        />
      </Card>
    </div>
  );
}
