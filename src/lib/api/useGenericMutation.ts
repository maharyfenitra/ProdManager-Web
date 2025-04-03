import { useFetch } from "./useFetch";
import { useMutation } from "@tanstack/react-query";
import { useToken } from "./useToken";

export const useGenericMutation = <TVariables>(
  endpoint: string,
  method = "POST"
) => {
  const sendRequest = useFetch();
  const { getToken } = useToken()
  const mutation = useMutation({
    mutationFn: (variables: TVariables) => {
      return sendRequest(
        method,
        `http://localhost:8081${endpoint}`,
        variables,
        {
          Authorization: `Bearer ${getToken()}`,
        }
      )
        .then((data) => data?.data)
        .catch((error) => {
          throw error;
        });
    },
  });

  return mutation;
};
