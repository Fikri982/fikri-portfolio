"use client";

import { useState, useEffect } from "react";

const SESSION_KEY = "portfolio-visited";

/**
 * Shows the full branded loading screen only once per browser session
 * (first page ever visited this session). Later in-session navigations
 * skip it entirely so repeat clicks around the site don't get blocked
 * by an artificial delay — content just renders with its own reveal
 * animations instead.
 *
 * Starts as `false` on every render (server and first client render)
 * to stay hydration-safe; the session check only runs inside the
 * effect, after hydration has already committed.
 */
export function usePageLoader(delay: number = 800) {
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const alreadyVisited = sessionStorage.getItem(SESSION_KEY);
    if (alreadyVisited) {
      return;
    }

    sessionStorage.setItem(SESSION_KEY, "1");
    const showTimer = setTimeout(() => setIsLoading(true), 0);
    const hideTimer = setTimeout(() => setIsLoading(false), delay);

    return () => {
      clearTimeout(showTimer);
      clearTimeout(hideTimer);
    };
  }, [delay]);

  return isLoading;
}
