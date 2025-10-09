import { RegisterForm } from "@/components/forms/register-form";
import { APP_DATA } from "@/constants/app.data";
import { ROUTES } from "@/constants/routes.data";
import { auth } from "@/lib/auth";
import { GalleryVerticalEnd } from "lucide-react";
import { headers } from "next/headers";
import { redirect } from "next/navigation";
import React from "react";

export default async function SignUpPage() {
  const session = await auth.api.getSession({
    headers: await headers(),
  });
  if (session) {
    redirect(ROUTES.dashboard);
  }
  return (
    <div className=" default-bg bg-muted flex min-h-svh flex-col items-center justify-center gap-6 p-6 md:p-10">
      <div className="flex w-full max-w-sm flex-col gap-6">
        <a href="#" className="flex items-center gap-2 self-center font-medium">
          <div className="bg-primary text-primary-foreground flex size-6 items-center justify-center rounded-md">
            <GalleryVerticalEnd className="size-4" />
          </div>
          {APP_DATA.app_title}
        </a>
        <RegisterForm />
      </div>
    </div>
  );
}
