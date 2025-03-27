import { useGenericQuery } from "../../useGenericQuery";

export const useGetAllCategories = () => {
  return useGenericQuery(
    (data) => {
      const { data: dataResponse, ...rest } = data;
      return {
        data: dataResponse?.data || (null as CategoryType[] | null),
        ...rest,
      };
    },
    "/api/admin/categories",
    "list-of-categories"
  );
};

export type CategoryType = {
  id: number;
  parentId: number | null;
  name: string;
  description: string | null;
};
