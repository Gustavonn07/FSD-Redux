import { configureStore } from "@reduxjs/toolkit";
import { rootReducer } from "./rootReducer";

// Serve como arquivo de configuração da STORE (armazenamento) do redux.

export const mainStore = configureStore({
    reducer: rootReducer
})

export type RootState = ReturnType<typeof mainStore.getState>;
export type AppDispatch = typeof mainStore.dispatch;