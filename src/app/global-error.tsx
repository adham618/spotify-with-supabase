"use client";

import { useEffect } from "react";

import EmptyState from "@/components/ui/EmptyState";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    // eslint-disable-next-line no-console
    console.error(error);
  }, [error]);

  return (
    <html>
      <body>
        <EmptyState
          title="An error occurred"
          subTitle="Something went wrong. Please try again later."
          showReset
          onClick={() => reset()}
        />
      </body>
    </html>
  );
}
