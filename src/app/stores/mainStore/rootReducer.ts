import { userReducer } from "@/entities/user/model"
import { combineReducers } from "@reduxjs/toolkit"

// Recebe todos os reducers do projeto e combina eles.

export const rootReducer = combineReducers({
    user: userReducer
})