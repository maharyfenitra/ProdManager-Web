import { useSearchParams, useRouter } from "next/navigation";
import { useGetAllProducts } from "@/lib/api";
import { useEffect } from "react";
export const useDashboard = () => {
  const searchParams = useSearchParams();

  const { push } = useRouter();

  const pageFromUrl = parseInt(searchParams.get("page") || "0", 10);
  const { data, refetch } = useGetAllProducts(pageFromUrl);

  useEffect(() => {
    refetch();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pageFromUrl]);

  const handlePageChange = (newPage: number) => {
    push(`?page=${newPage}`);
  };

  return {
    data,
    handlePageChange,
    pageFromUrl
  };
};
