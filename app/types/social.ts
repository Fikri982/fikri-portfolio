import type { ReactNode } from "react";

export interface SocialLink {
  label: string;
  href: string;
  username: string;
  icon: ReactNode;
  colorClass: string;
}
