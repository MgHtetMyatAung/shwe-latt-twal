import { Card, CardContent } from "@/components/ui/card";
import { getColorClasses } from "@/lib/color";
import { getDateDetails } from "@/lib/date";
import { FONTS } from "@/lib/fonts";
import { convertToAmPm } from "@/lib/time";
import { useWeddingContentStore } from "@/store/wedding-content-store";
// import Image from "next/image";
import React from "react";

export default function TemplateClassic() {
  const weddingInfo = useWeddingContentStore();
  const dateDetail = getDateDetails(weddingInfo.gregorianDate?.toString());
  const headerFont = Object.values(FONTS).find(
    (f) => f.id === weddingInfo.headerFontId
  );
  const headerFontValue = headerFont ? headerFont.value : "sans-serif";

  return (
    <div className=" lg:px-10 mx-auto max-w-[500px] min-h-[500px]">
      <Card
        className={getColorClasses(
          weddingInfo.primaryColor,
          "rounded-none relative overflow-hidden"
        )}
      >
        <CardContent className="  min-h-[400px] space-y-4 py-5 px-0">
          <p
            className=" text-center text-sm "
            style={{ fontFamily: headerFontValue }}
          >
            {weddingInfo.title || "-------"}
          </p>
          <div className=" text-center">
            <h2 className=" uppercase text-2xl font-semibold">Wedding</h2>
            <p>Of</p>
          </div>
          <div className=" px-14 ">
            <h3
              className="text-xl font-semibold"
              style={{ fontFamily: headerFontValue }}
            >
              {weddingInfo.groomName || "-----"}
            </h3>
            <p className=" text-center">&</p>
            <h3
              className=" text-xl font-semibold text-end"
              style={{ fontFamily: headerFontValue }}
            >
              {weddingInfo.brideName || "-----"}
            </h3>
          </div>
          <p className=" uppercase  font-medium text-center">Save the date</p>
          <p className="text-center">{dateDetail.month || "---"}</p>
          <div className=" flex justify-center items-center gap-2 text-sm">
            <p className=" text-center space-x-2 underline">
              {dateDetail.day || "---"}, {dateDetail.count} {dateDetail.month}{" "}
            </p>
            <p>
              {weddingInfo.receptionTime
                ? convertToAmPm(weddingInfo.receptionTime)
                : "---"}
            </p>
          </div>
          <p className=" text-center  text-xs px-10 font-medium">
            {weddingInfo.receptionVenue || "-----------"}
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
