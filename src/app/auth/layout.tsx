"use client"
import { ReactNode } from "react";
import { MainLayout } from "@/lib/layout/main_layout";


export default function Layout({ children }: { children: ReactNode }) {
  return (
    <>
      <MainLayout links={[
        {
          label: "Login",
          href: "/auth/login"
        },

        {
          label: "Signup",
          href: "/auth/signup"
        },
        
      ]}>
        {children}
        </MainLayout>
    </>
  );
}
