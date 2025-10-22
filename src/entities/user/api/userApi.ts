import { axiosInstance } from "@/shared/api";
import type { LoginUser, User } from "../model";

export const loginUser = async ({
    email,
    password
}: LoginUser): Promise<User> => {
    const res = await axiosInstance.get<User>('/users', {
        params: { email, password }
    })
    
    const user = res.data;
    if(!user) throw new Error("Wrong email or password")

    return user;
}