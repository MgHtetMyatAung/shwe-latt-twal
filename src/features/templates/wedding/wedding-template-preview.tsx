import { useWeddingContentStore } from "@/store/wedding-content-store";
import React from "react";
import TemplateElegance from "./template-elegance";
import MusicModalBox from "@/features/music/music-modal-box";
import TemplateClassic from "./template-classic";

export default function WeddingTemplatePreview() {
  const { layoutStyle } = useWeddingContentStore();
  return (
    <div className=" relative ">
      <MusicModalBox />
      {layoutStyle === "elegant" && <TemplateElegance />}
      {layoutStyle === "classic" && <TemplateClassic />}
    </div>
  );
}
