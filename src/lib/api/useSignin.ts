import { useGenericMutation } from "."
export const useSignin = () =>{
    return useGenericMutation("/api/auth/login")
}