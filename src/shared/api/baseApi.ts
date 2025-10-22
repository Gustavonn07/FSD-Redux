import axios from "axios";

export const axiosInstance = axios.create({
    baseURL: "https://localhost:5000",
    headers: {
        "Content-type": "application/json"
    }
})