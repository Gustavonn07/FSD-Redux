import type { User, LoginUser } from "./types"
import { checkAuth, login } from "./thunks"
import userReducer from "./userSlice"

export type { User, LoginUser }
export { checkAuth, login, userReducer }