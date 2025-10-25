import { login, logout, type LoginUser } from "@/entities/user/model";
import { useAppDispatch, useAppSelector } from "@/shared/lib";

export const useAuth = () => {
    const dispatch = useAppDispatch();
    const { isLoading, user } = useAppSelector((state) => state.user);

    const loginUser = ({ email, password }: LoginUser) => {
        dispatch(login({ email, password }))
    }

    const logoutUser = () => {
        dispatch(logout())
    }

    return { loginUser, logoutUser, isLoading, user }
}