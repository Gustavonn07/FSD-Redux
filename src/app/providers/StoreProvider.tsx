import { Provider } from "react-redux";
import type { ReactNode } from "react";
import { mainStore } from "../stores/mainStore";

export const StoreProvider = ({ children }: {children: ReactNode}) => {
    return <Provider store={mainStore}>{children}</Provider>
}