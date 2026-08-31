"use client";

import { useState, useEffect } from "react";
import PageLoader from "@/app/components/ui/PageLoader";

export default function HomeLoader() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 800);
    return () => clearTimeout(timer);
  }, []);

  return <PageLoader isLoading={isLoading} />;
}
