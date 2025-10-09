"use server";

import { ROUTES } from "@/constants/routes.data";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import { redirect } from "next/navigation";

export const signUp = async (name: string, email: string, password: string) => {
  const result = await auth.api.signUpEmail({
    body: {
      name,
      email,
      password,
      callbackURL: "/dashboard",
    },
  });
  return result;
};

export const signIn = async (email: string, password: string) => {
  const result = await auth.api.signInEmail({
    body: {
      email,
      password,
      callbackURL: "/dashboard",
    },
  });
  return result;
};

export const googleSignIn = async (provider: "google") => {
  const { url } = await auth.api.signInSocial({
    body: {
      provider,
    },
  });
  if (url) {
    redirect(ROUTES.dashboard);
  }
};

export const signOut = async () => {
  const result = await auth.api.signOut({
    headers: await headers(),
  });
  return result;
};
