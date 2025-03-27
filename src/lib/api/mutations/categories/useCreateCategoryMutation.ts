import { useGenericMutation } from "../../useGenericMutation";

export const useCreateCategoryMutation = () =>{
    return useGenericMutation("/api/admin/categories", "POST")
}