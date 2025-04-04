import { useGenericQuery } from "../../useGenericQuery";
import { UserType } from "./type";
export const useGetUserQuery = (id: number) => {
  return useGenericQuery(
    (data) => {
      const { data: dataResponse, ...rest } = data;
      return {
        data: dataResponse?.data || (null as UserType | null),
        ...rest,
      };
    },
    `/api/admin/users/${id}`,
    "details-user"
  );
};
