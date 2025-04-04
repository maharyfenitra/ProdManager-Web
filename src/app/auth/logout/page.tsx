"use client"
import { useEffect } from "react";
import { useToken } from "@/lib/api";
import { useRouter } from "next/navigation";

export default function Page() {
  const { removeToken } = useToken();
  const { push } = useRouter();

  useEffect(() => {
    removeToken();
    push("/client");
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return null;
}
