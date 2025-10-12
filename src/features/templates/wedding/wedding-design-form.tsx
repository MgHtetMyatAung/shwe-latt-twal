import { COLORS, WEDDING_TEMPLATES } from "@/constants/template.data";
import { cn } from "@/lib/utils";
import { useWeddingContentStore } from "@/store/wedding-content-store";
import React, { useEffect } from "react";
import { useFormContext } from "react-hook-form";

type DesignFields = Pick<WeddingInfoType, "layoutStyle" | "primaryColor">;

export default function WeddingDesignForm() {
  const layoutStyle = useWeddingContentStore((state) => state.layoutStyle);
  const syncContent = useWeddingContentStore((state) => state.syncContent);
  const { setValue, watch } = useFormContext<DesignFields>();
  const watchedFields = watch();
  const handleTemplateSelect = (style: DesignFields["layoutStyle"]) => {
    setValue("layoutStyle", style, { shouldValidate: true, shouldDirty: true });
  };

  const handleColorSelect = (colorValue: DesignFields["primaryColor"]) => {
    setValue("primaryColor", colorValue, {
      shouldValidate: true,
      shouldDirty: true,
    });
  };

  useEffect(() => {
    syncContent(watchedFields as WeddingInfoType);
  }, [watchedFields, syncContent]);
  return (
    <div className=" space-y-3 mt-5">
      <div className=" space-y-3">
        <h4 className=" text-rose-900 text-lg font-medium">Choose Template</h4>
        <p>Select a design style for your invitation</p>
        <div className="grid grid-cols-2 md:grid-cols-3 2xl:grid-cols-4 gap-2">
          {WEDDING_TEMPLATES.map((template) => (
            <button
              key={template.id}
              type="button"
              className={cn(
                "p-4 rounded-lg border-2 transition-all text-left cursor-pointer",
                {
                  "border-rose-900 bg-rose-50": template.id === layoutStyle,
                }
              )}
              onClick={() =>
                handleTemplateSelect(template.id as DesignFields["layoutStyle"])
              }
            >
              <div className=" text-rose-900 font-medium">{template.name}</div>
              <div className="text-sm text-rose-600 mt-1">
                {template.description}
              </div>
            </button>
          ))}
        </div>
      </div>
      <div className=" space-y-3">
        <h4 className=" text-rose-900 text-lg font-medium">Choose Color</h4>
        <p>Pick a color scheme for your invitation</p>
        <div className="grid grid-cols-3 md:grid-cols-4 2xl:grid-cols-6 gap-4">
          {COLORS.map((color) => (
            <button key={color.id} type="button">
              <div
                className="w-12 h-12 mx-auto rounded-full border-2 border-white shadow-md cursor-pointer"
                style={{ backgroundColor: color.value }}
                onClick={() => handleColorSelect(color.value)}
              />
              <span className="text-sm text-rose-900">{color.name}</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
