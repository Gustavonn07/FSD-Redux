import type { AppDispatch, RootState } from "@/app/stores/mainStore"
import { login, logout, type LoginUser } from "@/entities/user/model";
import { useDispatch, useSelector } from "react-redux"

export const useAuth = () => {
    const dispatch: AppDispatch = useDispatch();
    const { isLoading, user } = useSelector((state: RootState) => state.user);

    const loginUser = ({ email, password }: LoginUser) => {
        dispatch(login({ email, password }))
    }

    const logoutUser = () => {
        dispatch(logout())
    }

    return { loginUser, logoutUser, isLoading, user }
}