import { useGenericQuery } from "../../useGenericQuery";
import { ProductType } from "./type";
export const useGetAllProducts = () => {
  return useGenericQuery(
    (data) => {
      const { data: dataResponse, ...rest } = data;
      return {
        data: dataResponse?.data || (null as ProductType[] | null),
        ...rest,
      };
    },
    "/api/admin/products",
    "list-of-products"
  );
};


