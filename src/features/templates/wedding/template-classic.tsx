import { Card, CardContent } from "@/components/ui/card";
import { getColorClasses } from "@/lib/color";
import { getDateDetails } from "@/lib/date";
import { convertToAmPm } from "@/lib/time";
import { useWeddingContentStore } from "@/store/wedding-content-store";
import Image from "next/image";
import React from "react";

export default function TemplateClassic() {
  const weddingInfo = useWeddingContentStore();
  const dateDetail = getDateDetails(weddingInfo.gregorianDate?.toString());
  return (
    <div className=" lg:px-10 mx-auto max-w-[450px] min-h-[400px]">
      <Card
        className={getColorClasses(
          weddingInfo.primaryColor,
          "rounded-none relative overflow-hidden"
        )}
      >
        <CardContent className="  min-h-[400px] space-y-4 py-5 px-0">
          <p className=" text-center text-sm ">
            {weddingInfo.title || "-------"}
          </p>
          <div className=" text-center">
            <h2 className=" uppercase text-2xl font-semibold">Wedding</h2>
            <p>Of</p>
          </div>
          <div className=" px-14 ">
            <h3 className="text-xl font-semibold">
              {weddingInfo.groomName || "-----"}
            </h3>
            <p className=" text-center">&</p>
            <h3 className=" text-xl font-semibold text-end">
              {weddingInfo.brideName || "-----"}
            </h3>
          </div>
          <p className=" uppercase  font-medium text-center">Save the date</p>
          <p className="text-center">{dateDetail.month || "---"}</p>
          <div className=" flex justify-center items-center gap-2 text-sm">
            <p className=" text-center space-x-2 underline">
              {dateDetail.day || "---"}, {dateDetail.count} {dateDetail.month}{" "}
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
