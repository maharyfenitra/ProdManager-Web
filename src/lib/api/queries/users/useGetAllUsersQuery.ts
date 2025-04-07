import { useGenericQuery } from "../../useGenericQuery";
import { UserType } from "./type";
export const useGetAllUsersQuery = (page: number = 0) => {
  return useGenericQuery(
    (data) => {
      const { data: dataResponse, ...rest } = data;
      return {
        data: dataResponse?.data || (null as UserType[] | null),
        ...rest,
      };
    },
    "/api/admin/users",
    "list-of-users",
    { page }
  );
};
