"use client";

import React from "react";
import WeddingTemplatePreview from "./wedding-template-preview";
import useMultiStep from "@/hooks/use-multi-step";
import WeddingInfoForm from "./wedding-info-form";
import { FormProvider, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import WeddingDesignForm from "./wedding-design-form";
import { Button } from "@/components/ui/button";
import {
  Step1Schema,
  Step2Schema,
  WeddingFormData,
  WeddingSchema,
} from "./validation";
import { useWeddingContentStore } from "@/store/wedding-content-store";

const stepSchemas = [Step1Schema, Step2Schema];

export default function WeddingTemplateForm() {
  const { step, next, back, isLastStep, isFirstStep, currentStep } =
    useMultiStep({
      steps: [
        <WeddingInfoForm key={"wif"} />,
        <WeddingDesignForm key={"wdf"} />,
      ],
    });
  const defaultValues = useWeddingContentStore.getState();
  const methods = useForm<WeddingFormData>({
    resolver: zodResolver(WeddingSchema),
    defaultValues: {
      ...defaultValues,
    },
    mode: "onChange",
  });

  const {
    formState: { errors },
  } = methods;

  const onSubmit = async () => {
    // 1. Determine which fields to validate based on the current step's schema
    const fieldsToValidate = Object.keys(stepSchemas[currentStep].shape);

    // 2. Trigger validation only for the fields in the current step
    const isValid = await methods.trigger(
      fieldsToValidate as (keyof WeddingFormData)[],
      {
        shouldFocus: true,
      }
    );

    if (isValid) {
      if (!isLastStep) {
        // All fields in the current step are valid, move to the next step
        next();
      } else {
        // Last step: Validation passed for all required fields
        const finalData = methods.getValues();
        console.log("FINAL SUBMISSION DATA:", finalData);
        alert("Invitation Submitted!");
        // Optionally, reset the form/store here
      }
    } else {
      // Validation failed; RHF handles displaying errors on the form fields
      console.log("Validation failed on step", currentStep);
    }
  };
  console.log(errors, "errors");
  return (
    <div>
      <div className=" grid grid-cols-1 lg:grid-cols-2 gap-5 my-5">
        <FormProvider {...methods}>
          <form action="" onSubmit={methods.handleSubmit(onSubmit)}>
            {step}
            <div className=" flex justify-end gap-3 my-5">
              {!isFirstStep && (
                <Button type="button" onClick={back}>
                  Back
                </Button>
              )}
              <Button type="submit">{isLastStep ? "Publish" : "Next"}</Button>
            </div>
          </form>
        </FormProvider>
        <div className="bg-gray-200 sm:py-3">
          <WeddingTemplatePreview />
        </div>
      </div>
    </div>
  );
}
