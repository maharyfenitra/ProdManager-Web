import { useGenericMutation } from "./useGenericMutation";

export const useSignup = () =>{
    return useGenericMutation("/api/auth/signup")
}