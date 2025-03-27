import { useGenericMutation } from "../../useGenericMutation";

export const useUpdateCategoryMutation = (id: number) =>{
    return useGenericMutation(`/api/admin/categories/${id}`, "PUT")
}