"use client";
import { ROUTES } from "@/constants/routes.data";
import { INVITATION_TYPES } from "@/constants/template.data";
import { useRouter } from "next/navigation";
import React from "react";

export default function InvitationTypes() {
  const router = useRouter();
  const chooseType = (id: number) => {
    router.push(ROUTES.invitation.create + "/" + id);
  };
  return (
    <div className=" space-y-2">
      <h4 className=" text-lg text-rose-900 font-medium">Invitation Type</h4>
      <p className=" text-rose-700 mb-5">
        Choose the type of invitation you want to create
      </p>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {INVITATION_TYPES.map((item) => (
          <button
            key={item.name}
            type="button"
            onClick={() => chooseType(item.id)}
            className={`p-6 rounded-lg border-2 transition-all cursor-pointer hover:border-rose-700`}
          >
            <div className="text-3xl mb-2">💒</div>
            <div className="font-serif text-rose-900 font-medium">
              {item.name}
            </div>
          </button>
        ))}
      </div>
    </div>
  );
}
