import { CategoryType } from "./type";
import { useGenericQuery } from "../../useGenericQuery";

export const useGetCategoryQuery = (id: number) =>{
    return useGenericQuery(
        (data) => {
          const { data: dataResponse, ...rest } = data;
          return {
            data: dataResponse?.data || (null as CategoryType[] | null),
            ...rest,
          };
        },
        `/api/admin/categories/${id}`,
        "details-categories"
      );
}

