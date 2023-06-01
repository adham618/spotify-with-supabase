"use client";

import React from "react";

import Header from "@/components/layout/Header";
import TailwindIndicator from "@/components/TailwindIndictor";
import DismissableToast from "@/components/ui/DismissableToast";
import NProgress from "@/components/ui/NProgress";

type ProvidersProps = {
  children: React.ReactNode;
};

export default function Providers({ children }: ProvidersProps) {
  return (
    <>
      <NProgress />
      <Header />
      {children}
      <DismissableToast />
      {/* <Footer /> */}
      <TailwindIndicator />
    </>
  );
}
