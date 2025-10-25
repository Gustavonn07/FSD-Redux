import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { ArticleState } from "./types";
import { addArticle, deleteArticle, editArticle, getArticle, getArticlesList } from "./thunks";

const initialState: ArticleState = {
    isLoading: false,
    articles: [],
    total: 0,
    page: 1,
    searchQuery: ''
}

const articleSlice = createSlice({
    name: 'article',
    initialState,
    reducers: {
        setPage: (state, action: PayloadAction<number>) => {
            state.page = action.payload;
        },
        setSearchQuery: (state, action: PayloadAction<string>) => {
            state.searchQuery = action.payload;
            state.page = 1;
        },
    },
    extraReducers: builder => {
        builder
            .addCase(getArticlesList.fulfilled, (state, action) => {
                state.isLoading = false;
                state.articles = action.payload.data;
                state.total = action.payload.total;
            })
            .addCase(getArticlesList.rejected, state => {
                state.isLoading = false;
                state.articles = [];
            })
            .addCase(getArticle.fulfilled, (state, action) => {
                state.isLoading = false;
                state.articles[0] = action.payload;
                state.total = 1;
            })
            .addCase(getArticle.rejected, state => {
                state.isLoading = false;
                state.articles = [];
            })
            .addCase(addArticle.fulfilled, (state, action) => {
                state.isLoading = false;
                state.articles.push(action.payload)
            })
            .addCase(addArticle.rejected, state => {
                state.isLoading = false;
            })

            .addCase(editArticle.fulfilled, (state, action) => {
                state.isLoading = false;
                const index = state.articles.findIndex((a) => a.id === action.payload.id);
                if (index !== -1) {
                    state.articles[index] = action.payload;
                }
                state.total++;
            })
            .addCase(editArticle.rejected, state => {
                state.isLoading = false;
            })
            .addCase(deleteArticle.fulfilled, (state, action) => {
                state.isLoading = false;
                state.articles = state.articles.filter((a) => a.id !== action.payload);
                state.total -= 1;
            })
            .addCase(deleteArticle.rejected, (state) => {
                state.isLoading = false;
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

export const { setPage, setSearchQuery } = articleSlice.actions;
export default articleSlice.reducer;