"use client";

import Image, { ImageProps } from "next/image";
import * as React from "react";

import { cn } from "@/lib/utils";

type BlurImageProps = {
  className?: string;
  alt: string;
} & ImageProps;

export default function BlurImage({ className, alt, ...rest }: BlurImageProps) {
  const [isLoading, setLoading] = React.useState(true);

  return (
    <Image
      className={cn(
        className,
        "duration-700 ease-in-out",
        isLoading
          ? "scale-110 blur-2xl grayscale"
          : "scale-100 blur-0 grayscale-0"
      )}
      onLoadingComplete={() => setLoading(false)}
      alt={alt}
      {...rest}
    />
  );
}
