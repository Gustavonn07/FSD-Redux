import type { User, LoginUser } from "./types"
import { checkAuth, login } from "./thunks"
import userReducer, { logout, setUser } from "./userSlice"

export type { User, LoginUser }
export { checkAuth, login, userReducer, logout, setUser }