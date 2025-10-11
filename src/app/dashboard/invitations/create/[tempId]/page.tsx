import WeddingTemplateForm from "@/features/templates/wedding/wedding-template-form";
import React from "react";

export default async function TemplateCreate({
  params,
}: {
  params: Promise<{ tempId: string }>;
}) {
  const { tempId } = await params;
  return <div>{tempId === "1" && <WeddingTemplateForm />}</div>;
}
