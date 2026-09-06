"use client";

import { useState, useEffect } from "react";

const SESSION_KEY = "portfolio-visited";

/**
 * Shows the full branded loading screen from the very first paint (server
 * and client render both start `true`, so there's no flash of raw content
 * before it appears). Once mounted, the effect decides how long it stays:
 * the full `delay` on the first page visited this browser session, or an
 * effectively instant hide on later in-session navigations, so repeat
 * clicks around the site don't get blocked by the artificial delay again.
 */
export function usePageLoader(delay: number = 800) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const alreadyVisited = sessionStorage.getItem(SESSION_KEY);

    if (alreadyVisited) {
      const hideTimer = setTimeout(() => setIsLoading(false), 0);
      return () => clearTimeout(hideTimer);
    }

    sessionStorage.setItem(SESSION_KEY, "1");
    const hideTimer = setTimeout(() => setIsLoading(false), delay);
    return () => clearTimeout(hideTimer);
  }, [delay]);

  return isLoading;
}
