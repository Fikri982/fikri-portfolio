"use client";

import { usePageLoader } from "@/app/hooks/usePageLoader";
import PageLoader from "@/app/components/ui/PageLoader";

export default function HomeLoader() {
  const isLoading = usePageLoader();

  return <PageLoader isLoading={isLoading} />;
}
