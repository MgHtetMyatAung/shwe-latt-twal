import { Card, CardContent } from "@/components/ui/card";
import { getDateDetails } from "@/lib/date";
import { useWeddingContentStore } from "@/store/wedding-content-store";
import Image from "next/image";
import React from "react";

export default function TemplateElegance() {
  const weddingInfo = useWeddingContentStore();
  const dateDetail = getDateDetails(weddingInfo.gregorianDate?.toString());
  return (
    <div className=" lg:px-10 mx-auto max-w-[460px] min-h-[600px]">
      <Card className=" rounded-none default-bg relative overflow-hidden">
        <CardContent className="  min-h-[400px] space-y-4 py-5 px-0">
          <p className=" text-center text-sm text-rose-900">
            {weddingInfo.title}
          </p>
          <div className=" px-14 text-rose-900">
            <h3 className="text-xl font-semibold">{weddingInfo.groomName}</h3>
            <p className=" text-center">&</p>
            <h3 className=" text-xl font-semibold text-end">
              {weddingInfo.brideName}
            </h3>
          </div>
          <Image
            src={"/temps/wedding/ribbon.png"}
            alt="ribbon"
            width={731}
            height={341}
          />
          <p className=" uppercase text-rose-900 font-medium text-center">
            Save the date
          </p>
          <p className="text-center">{dateDetail.month}</p>
          <div className=" flex justify-center items-center gap-2 text-sm">
            <p className=" text-center space-x-2">{dateDetail.day} </p>
            <p className=" rounded-full w-7 h-7 text-center bg-gray-50">
              {dateDetail.count}
            </p>
            <p className=" text-center space-x-2">
              {weddingInfo.receptionTime} AM
            </p>
          </div>
          <p className=" text-center text-rose-900 text-xs px-10 font-medium">
            {weddingInfo.receptionVenue}
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
