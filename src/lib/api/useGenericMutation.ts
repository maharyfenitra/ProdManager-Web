import { useFetch } from "./useFetch";
import { useMutation } from "@tanstack/react-query";

export const useGenericMutation = <TVariables>(
  endpoint: string,
  method = "POST"
) => {
  const sendRequest = useFetch();
  const mutation = useMutation({
    mutationFn: (variables: TVariables) => {
      return sendRequest(
        method,
        `http://localhost:8081${endpoint}`,
        variables,
        {
          //Authorization: `Bearer ${token}`,
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
