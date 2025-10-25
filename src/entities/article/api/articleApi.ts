import { axiosInstance, type Meta } from "@/shared/api";
import type { Article } from "../model";

export const getArticlesListApi = async (params: Meta): Promise<{ data: Article[], total: number }> => {
    const res = await axiosInstance.get<Article[]>("articles", { params });

    return {
        data: res.data,
        total: Number(res.headers['x-total-count'])
    };
}

export const getArticleApi = async (id: string): Promise<Article> => {
    const res = await axiosInstance.get<Article>(`articles/${id}`);
    return res.data;
}

export const addArticleApi = async (article: Omit<Article, "id">): Promise<Article> => {
    const res = await axiosInstance.post<Article>("articles", article);
    return res.data;
}

export const updateArticleApi = async (article: Article): Promise<Article> => {
    const res = await axiosInstance.put<Article>(`articles/${article.id}`, article);
    return res.data;
}

export const deleteArticleApi = async (id: string): Promise<void> => {
    await axiosInstance.delete<void>(`articles/${id}`);
    return;
}