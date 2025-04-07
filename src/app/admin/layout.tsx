"use client";
import { ReactNode } from "react";
import { MainLayout } from "@/lib/layout/main_layout";
import { useToken } from "@/lib/api";
import { useRouter } from "next/navigation";

export default function Layout({ children }: { children: ReactNode }) {
  const { getToken } = useToken();
  const token = getToken();
  const { push } = useRouter();
  if (!token) {
    push("/client");
  }
  return (
    <>
      <MainLayout
        links={[
          {
            label: "Product",
            href: "/admin/products",
          },
          {
            label: "Category",
            href: "/admin/categories",
          },
          {
            label: "User",
            href: "/admin/users",
          },
          {
            label: "Logout",
            href: "/auth/logout",
          },
        ]}
      >
        {children}
      </MainLayout>
    </>
  );
}
