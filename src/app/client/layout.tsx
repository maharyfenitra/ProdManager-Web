"use client";
import { ReactNode } from "react";
import { MainLayout } from "@/lib/layout/main_layout";
import { useToken } from "@/lib/api";

export default function Layout({ children }: { children: ReactNode }) {
  const { getToken } = useToken();
  const token = getToken();

  const links = [
    {
      label: "Product",
      href: "#",
    },
    // Ajout conditionnel
    ...(!token
      ? [
          { label: "Login", href: "/auth/login" },
          { label: "Signup", href: "/auth/signup" },
        ]
      : [{ label: "Logout", href: "/auth/logout" }]),
  ];

  return <MainLayout links={links}>{children}</MainLayout>;
}
