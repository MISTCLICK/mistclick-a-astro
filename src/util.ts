import { createContext, useContext } from "react";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export const SectionContext = createContext(NaN);
export const useSectionContext = () => useContext(SectionContext);

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
