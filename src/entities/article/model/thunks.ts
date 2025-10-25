import { createAsyncThunk } from "@reduxjs/toolkit";
import type { Article, ArticleMeta } from "./types";
import { addArticleApi, deleteArticleApi, getArticleApi, getArticlesListApi, updateArticleApi } from "../api";
import { toast } from "sonner";

export const getArticlesList = createAsyncThunk<{ data: Article[]; total: number; }, ArticleMeta, { rejectValue: string }>(
    'articles/getArticlesList',
    async ({ page = 1, limit = 10, searchQuery = '' }: ArticleMeta, thunkAPI) => {
        try {
            const response = await getArticlesListApi({
                _page: page,
                _per_page: limit,
                _title_like: searchQuery
            })

            return response;
        } catch (err: unknown) {

            if (err instanceof Error) {
                toast.error(err.message);
                return thunkAPI.rejectWithValue(err.message);
            }

            toast.error("Unknown error");
            return thunkAPI.rejectWithValue("Unknown error");
        }
    }
)

export const getArticle = createAsyncThunk<Article, string, { rejectValue: string }>(
    'articles/getArticle',
    async (id, thunkAPI) => {
        try {
            const response = await getArticleApi(id)
            return response;
        } catch (err: unknown) {

            if (err instanceof Error) {
                toast.error(err.message);
                return thunkAPI.rejectWithValue(err.message);
            }

            toast.error("Unknown error");
            return thunkAPI.rejectWithValue("Unknown error");
        }
    }
)

export const addArticle = createAsyncThunk<Article, Omit<Article, "id">, { rejectValue: string }>(
    'article/addArticle',
    async (article: Omit<Article, "id">, thunkAPI) => {
        try {
            const newArticle = await addArticleApi(article);
            toast.success("Article created");
            return newArticle;
        } catch (err: unknown) {

            if (err instanceof Error) {
                toast.error(err.message);
                return thunkAPI.rejectWithValue(err.message);
            }

            toast.error("Unknown error");
            return thunkAPI.rejectWithValue("Unknown error");
        }
    }
)

export const editArticle = createAsyncThunk<Article, Article, { rejectValue: string }>(
    'article/editArticle',
    async (article: Article, thunkAPI) => {
        try {
            const updatedArticle = await updateArticleApi(article);
            toast.success("Article updated");
            return updatedArticle;
        } catch (err: unknown) {

            if (err instanceof Error) {
                toast.error(err.message);
                return thunkAPI.rejectWithValue(err.message);
            }

            toast.error("Unknown error");
            return thunkAPI.rejectWithValue("Unknown error");
        }
    }
)

export const deleteArticle = createAsyncThunk<string, string, { rejectValue: string }>(
    'article/deleteArticle',
    async (id, thunkAPI) => {
        try {
            await deleteArticleApi(id);
            toast.success("Article deleted");
            return id;
        } catch (err: unknown) {

            if (err instanceof Error) {
                toast.error(err.message);
                return thunkAPI.rejectWithValue(err.message);
            }

            toast.error("Unknown error");
            return thunkAPI.rejectWithValue("Unknown error");
        }
    }
)
