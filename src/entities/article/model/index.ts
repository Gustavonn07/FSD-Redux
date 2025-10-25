import type { Article, ArticleMeta, ArticleState } from './types'
import { addArticle, deleteArticle, editArticle, getArticle, getArticlesList } from './thunks'
import articleReducer, { setPage, setSearchQuery } from './articleSlice'

export type { Article, ArticleMeta, ArticleState };
export { addArticle, deleteArticle, editArticle, getArticle, getArticlesList, articleReducer, setPage, setSearchQuery };