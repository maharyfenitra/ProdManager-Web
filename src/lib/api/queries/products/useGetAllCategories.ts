import { useGenericQuery } from "../../useGenericQuery";

export const useGetAllCategories = () => {
  return useGenericQuery((data) => data, "/api/admin/categories", "list-of-categories");
};
