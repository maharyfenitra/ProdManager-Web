"use client";
import { useEffect } from "react";
import { useGetAllCategories } from "@/lib/api/queries/products/useGetAllCategories";
const Page = () => {
  const { data, isLoading } = useGetAllCategories();

  useEffect(() => {
    console.log(data);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isLoading]);
  return <></>;
};

export default Page;
