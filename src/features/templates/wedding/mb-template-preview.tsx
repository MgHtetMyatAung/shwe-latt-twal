import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { useWeddingContentStore } from "@/store/wedding-content-store";
import TemplateElegance from "./template-elegance";
import TemplateClassic from "./template-classic";
import TemplateFloral from "./template-floral";

export default function MbTemplatePreview() {
  const layoutStyle = useWeddingContentStore((state) => state.layoutStyle);
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline" className=" xl:hidden">
          Preview
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        {layoutStyle === "elegant" && <TemplateElegance />}
        {layoutStyle === "classic" && <TemplateClassic />}
        {layoutStyle === "floral" && <TemplateFloral />}
      </DialogContent>
    </Dialog>
  );
}
