import { useWeddingContentStore } from "@/store/wedding-content-store";
import React from "react";
import TemplateElegance from "./template-elegance";

export default function WeddingTemplatePreview() {
  const { layoutStyle } = useWeddingContentStore();
  return <div>{layoutStyle === "elegance" && <TemplateElegance />}</div>;
}
