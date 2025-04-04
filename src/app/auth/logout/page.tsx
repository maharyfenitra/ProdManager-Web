"use client"
import { useEffect } from "react";
import { useToken } from "@/lib/api";
import { useRouter } from "next/navigation";

export default function Page() {
  const { removeToken } = useToken();
  const { push } = useRouter();

  useEffect(() => {
    removeToken();         // effet de bord
    push("/client");       // redirection
  }, []);

  return null; // ou <div>Déconnexion en cours...</div>
}
