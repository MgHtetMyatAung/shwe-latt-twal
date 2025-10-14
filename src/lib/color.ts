import { cn } from "./utils";

type valueType =
  | "pink"
  | "emerald"
  | "rose"
  | "orange"
  | "navy"
  | "purple"
  | "violet"
  | "fuchsia";

export function getColorClasses(value: valueType, baseClasses = "") {
  return cn(baseClasses, "bg-gradient-to-br", {
    " from-pink-50 via-rose-50 to-pink-100 text-pink-700": value === "pink",
    " from-emerald-50 via-blue-50 to-emerald-100 text-emerald-700":
      value === "emerald",
    "from-rose-50 via-pink-50 to-rose-100 text-rose-700": value === "rose",
    "from-orange-50 via-yellow-50 to-orange-100 text-orange-700":
      value === "orange",
    "from-blue-50 via-sky-50 to-blue-100 text-blue-700": value === "navy",
    "from-purple-50 via-blue-50 to-purple-100 text-purple-700":
      value === "purple",
    "from-violet-50 via-purple-50 to-violet-100 text-violet-700":
      value === "violet",
    "from-fuchsia-50 via-rose-50 to-fuchsia-100 text-fuchsia-700":
      value === "fuchsia",
  });
}
