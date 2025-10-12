"use client";

import React from "react";
import WeddingTemplatePreview from "./wedding-template-preview";
import useMultiStep from "@/hooks/use-multi-step";
import WeddingInfoForm from "./wedding-info-form";
import { FormProvider, useForm } from "react-hook-form";
import WeddingDesignForm from "./wedding-design-form";
import { Button } from "@/components/ui/button";

export default function WeddingTemplateForm() {
  const { step, next, back, isLastStep, isFirstStep } = useMultiStep({
    steps: [<WeddingInfoForm key={"wif"} />, <WeddingDesignForm key={"wdf"} />],
  });
  const methods = useForm<WeddingInfoType>({
    mode: "onChange",
  });
  const handleSubmit = () => {
    if (!isLastStep) return next();
    alert("Published");
  };
  return (
    <div>
      <div className=" grid grid-cols-1 lg:grid-cols-2 gap-5">
        <FormProvider {...methods}>
          <form action="" onSubmit={methods.handleSubmit(handleSubmit)}>
            {step}
            <div className=" flex justify-end gap-3 mt-5">
              {!isFirstStep && (
                <Button type="button" onClick={back}>
                  Back
                </Button>
              )}
              <Button type="submit">{isLastStep ? "Publish" : "Next"}</Button>
            </div>
          </form>
        </FormProvider>
        <div>
          <WeddingTemplatePreview />
        </div>
      </div>
    </div>
  );
}
