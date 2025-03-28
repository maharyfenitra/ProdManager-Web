import { useGenericMutation } from "../../useGenericMutation";
export const useCreateProductMutation = () => {
    return useGenericMutation(
        "/api/admin/products",
         "POST",
    );
};