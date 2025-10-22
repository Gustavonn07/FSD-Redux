import { createAsyncThunk } from "@reduxjs/toolkit";
import { loginUser } from "../api";
import { getUserFromLocalStorage, setUserToLocalStorage } from "../lib";
import { toast } from "sonner";
import type { User, LoginUser } from "./types";

// THUNKS são funções do redux assíncronas, já que o redux não aceita por padrão async o thunk supre essa necessidade

// Assinatura esperada do createAsyncThunk: (payload: ThunkArg, thunkAPI: ThunkAPI<ThunkApiConfig>) => Promise<Returned> | Returned

export const login = createAsyncThunk<User, LoginUser, { rejectValue: string }>('auth/login', async (payload, thunkAPI) => {
    try {
        const user = await loginUser({ email: payload.email, password: payload.password })
        setUserToLocalStorage(user)
        return user;

    } catch (err: unknown) {
        if (err instanceof Error) {
            toast.error(err.message);
            return thunkAPI.rejectWithValue(err.message);
        }

        toast.error("Unknown error");
        return thunkAPI.rejectWithValue("Unknown error");
    }
})


export const checkAuth = createAsyncThunk<{ user: User }, void, { rejectValue: string }>('auth/checkAuth', (_, thunkAPI) => {
    try {
        const user = getUserFromLocalStorage();
        if (!user) throw new Error('Not authenticated');
        return { user };

    } catch (err: unknown) {
        if (err instanceof Error) {
            toast.error(err.message);
            return thunkAPI.rejectWithValue(err.message);
        }
        toast.error("Unknown error")
        return thunkAPI.rejectWithValue("Unknown error");
    }
})
