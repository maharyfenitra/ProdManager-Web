import { CategoryType } from "./type";
import { useGenericQuery } from "../../useGenericQuery";

export const useGetAllCategories = (page: number = 0) => {
  return useGenericQuery(
    (data) => {
      const { data: dataResponse, ...rest } = data;
      return {
        data: dataResponse?.data || (null as CategoryType[] | null),
        ...rest,
      };
    },
    "/api/admin/categories",
    "list-of-categories",
    { page }
  );
};
