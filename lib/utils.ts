import { clsx, type ClassValue } from "clsx";
import { useMemo } from "react";
import { twMerge } from "tailwind-merge";
import { UserRepository } from "./api/github/types";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatReadableDate(dateString: string): string {
  const date = new Date(dateString);

  const options: Intl.DateTimeFormatOptions = {
    day: "numeric",
    month: "long",
    year: "numeric",
    hour12: false,
  };

  return date.toLocaleDateString("en-US", options);
}

export function getLanguagesStatistic(
  query: UserRepository[]
): { name: string; value: number }[] {
  if (query && query.length > 0) {
    const languageCounts = query.reduce<Record<string, number>>((acc, rep) => {
      if (rep.language) {
        acc[rep.language] = (acc[rep.language] || 0) + 1;
      }
      return acc;
    }, {});

    return Object.entries(languageCounts).map(([key, value]) => ({
      name: key,
      value: Math.round((value / query.length) * 100 * 100) / 100,
    }));
  }

  return [];
}
