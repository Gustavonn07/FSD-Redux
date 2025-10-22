import type { State } from "@/shared/api";

export interface User {
    id: string,
    email: string,
    password: string,
}

export type LoginUser = Omit<User, "id">

export interface UserState extends State {
  user: User | null;
}
