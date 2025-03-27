"use client"
import { ReactNode } from "react";
import { MainLayout } from "@/lib/layout/main_layout";


export default function Layout({ children }: { children: ReactNode }) {
  return (
    <>
      <MainLayout links={[
        {
          label: "Product",
          href: "#"
        },
        
      ]}>
        {children}
        </MainLayout>
    </>
  );
}
