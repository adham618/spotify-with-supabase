"use client";

import Link from "next/link";
import * as React from "react";

import { cn } from "@/lib/utils";

import SiteLogo from "@/assets/logo.svg";

type indexProps = {
  className?: string;
} & React.ComponentPropsWithoutRef<"svg">;

export default function Logo({ className }: indexProps) {
  return (
    <Link href="/" aria-label="logo">
      <SiteLogo className={cn(className)} />
    </Link>
  );
}
