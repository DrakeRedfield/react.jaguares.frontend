
import { LOGIN_USER } from "~/graphql/mutations/auth";
import { useMutation } from "@apollo/client";
import { useCallback, useEffect } from "react";

export default function useLogin({email, password}: {email: string, password: string}) {
    const [loginUser, { data, loading, error }] = useMutation(LOGIN_USER);
    

    const handleLogin = useCallback(async ()=> {

    },[])
    
    useEffect(() => {

    },[]);
}