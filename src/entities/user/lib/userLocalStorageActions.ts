import type { User } from "../model";

export const getUserFromLocalStorage = (): User | null => {
    const user = localStorage.getItem("user");
    return user ? JSON.parse(user) : null    
}

export const removeUserFromLocalStorage = () => {
    localStorage.removeItem("user");
}

export const setUserToLocalStorage = (user: User) => {
    localStorage.setItem("user", JSON.stringify(user));
}