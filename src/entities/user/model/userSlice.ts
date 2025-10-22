import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import { getUserFromLocalStorage, removeUserFromLocalStorage, setUserToLocalStorage } from "../lib";
import type { User, UserState } from "./types";
import { checkAuth, login } from "./thunks";

const initialState: UserState = {
    isLoading: false,
    user: getUserFromLocalStorage()
}

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        logout(state) {
            state.user = null;
            removeUserFromLocalStorage()
        },
        setUser(state, action: PayloadAction<User | null>) {
            state.user = action.payload;
            if(action.payload) {
                setUserToLocalStorage(action.payload)
                return
            }
            removeUserFromLocalStorage()
        }
    },
    extraReducers: builder => {
        builder
            .addCase(login.fulfilled, (state, action) => {
                state.isLoading = false;
                state.user = action.payload;
            })
            .addCase(login.rejected, state => {
                state.isLoading = false;
                state.user = null;
            })
            .addCase(checkAuth.fulfilled, (state, action) => {
                state.isLoading = false;
                state.user = action.payload.user;
            })
            .addCase(checkAuth.rejected, state => {
                state.isLoading = false;
                state.user = null;
            })
            .addMatcher(
                (action) => action.type.endsWith('/pending'),
                (state) => { state.isLoading = true; }
            )
            .addDefaultCase((_, action) => {
                console.error('Ação não tratada:', action.type);
            });
    }
})

export const { logout, setUser } = userSlice.actions;
export default userSlice.reducer;
