import React, { useEffect } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useWeddingContentStore } from "@/store/wedding-content-store";
import { useFormContext } from "react-hook-form";

type Step1Fields = Pick<
  WeddingInfoType,
  | "title"
  | "groomName"
  | "brideName"
  | "groomParents"
  | "brideParents"
  | "gregorianDate"
  | "receptionTime"
  | "receptionVenue"
>;

export default function WeddingInfoForm() {
  const syncContent = useWeddingContentStore((state) => state.syncContent);
  const { register, watch } = useFormContext<Step1Fields>();
  const watchedFields = watch();

  useEffect(() => {
    syncContent(watchedFields as WeddingInfoType);
  }, [watchedFields, syncContent]);
  return (
    <div className=" space-y-2 pt-10">
      <h3 className=" text-lg font-medium text-rose-900">Basic Information</h3>
      <p className=" text-rose-700">
        Enter the essential details for your invitation
      </p>
      <div className=" space-y-3">
        <div className="space-y-2">
          <Label className=" text-gray-500 font-normal" htmlFor="title">
            Invitation Title
          </Label>
          <Input id="title" {...register("title")} required />
        </div>

        <div className="grid md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label className=" text-gray-500 font-normal" htmlFor="groomName">
              {"Groom's Name"}
            </Label>
            <Input
              id="groomName"
              placeholder="John"
              {...register("groomName")}
              required
            />
          </div>
          <div className="space-y-2">
            <Label className=" text-gray-500 font-normal" htmlFor="brideName">
              {"Bride's Name"}
            </Label>
            <Input
              id="brideName"
              placeholder="Jane"
              {...register("brideName")}
              required
            />
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label className=" text-gray-500 font-normal" htmlFor="date">
              Wedding Date
            </Label>
            <Input
              id="date"
              type="date"
              {...register("gregorianDate")}
              required
            />
          </div>
          <div className="space-y-2">
            <Label className=" text-gray-500 font-normal" htmlFor="time">
              Time
            </Label>
            <Input
              id="time"
              type="time"
              {...register("receptionTime")}
              required
            />
          </div>
        </div>

        <div className="space-y-2">
          <Label className=" text-gray-500 font-normal" htmlFor="venue">
            Venue
          </Label>
          <Textarea
            id="venue"
            placeholder="e.g., Grand Ballroom, 123 Main Street, City"
            required
            rows={3}
            {...register("receptionVenue")}
          />
        </div>
      </div>
    </div>
  );
}
