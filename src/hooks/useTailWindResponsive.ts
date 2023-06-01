/**
 * @param {defaultScreenSize} query
 * @async
 * @param {defaultScreenConstraint} screenConstraint
 * @returns {boolean}
 * @example const isLarge = useTailWindResponsive('lg');
 * @example const match = useTailWindResponsive('sm', 'max');
 * @description This hook is used to determine if the current screen size matches the query.
 * @see https://tailwindcss.com/docs/breakpoints
 */

import { useEffect, useState } from "react";
import resolveConfig from "tailwindcss/resolveConfig";

import tailwindConfig from "../../tailwind.config.js";
type defaultScreenSize = "xs" | "sm" | "md" | "lg" | "xl" | "2xl";
type defaultScreenConstraint = "min" | "max";
type Screens = {
  [key in defaultScreenSize]: string;
};
const tailwindConfigResolved = resolveConfig(tailwindConfig);
const screenSizes = tailwindConfigResolved.theme?.screens as unknown as Screens;

export default function useTailWindResponsive(
  query: defaultScreenSize,
  screenConstraint: defaultScreenConstraint = "min"
): boolean {
  const inputQueryMapped = screenSizes[query];
  const inputMediaQuery = `(${screenConstraint}-width: ${inputQueryMapped})`;
  const [matches, setMatches] = useState<boolean>(false);
  useEffect(() => {
    function handleChange(e: MediaQueryListEvent) {
      setMatches(e.matches);
    }
    const matchQueryList = window.matchMedia(inputMediaQuery);
    setMatches(matchQueryList.matches);

    matchQueryList.addEventListener("change", handleChange);

    return () => {
      matchQueryList.removeEventListener("change", handleChange);
    };
  }, [inputMediaQuery, query]);
  return matches;
}
