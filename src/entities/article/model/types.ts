import type { State } from "@/shared/api"

export interface Article {
    id: string
    title: string
    body: string
}

export interface ArticleMeta {
    page?: number
    limit?: number
    searchQuery?: string
}

export interface ArticleState extends State {
    articles: Article[];
    page: number
    total: number
    searchQuery: string
}