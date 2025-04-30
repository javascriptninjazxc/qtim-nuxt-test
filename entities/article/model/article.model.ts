import { defineStore } from 'pinia';
import type {IArticle} from "~/entities/article/model/article.type";
import {useArticleApi} from "~/entities/article/api/article.api";

interface State {
    articles: IArticle[];
}

export const useArticleStore = defineStore('article-store', {
    state: (): State => {
        return {
            articles: [],
        };
    },
    actions: {
        async fetchArticles(): Promise<IArticle[]> {
            try {
                const response = await useArticleApi().getList();

                if(!response.data.value) return [];

                this.articles = response.data.value;

                return response.data.value;
            } catch(err) {
                console.error(err);
                throw err;
            }
        },
        async getArticleById(id: string) {
            const cached = this.getCachedArticleById(id);
            if (cached) return cached;

            return await this.fetchArticleById(id);
        },
        async fetchArticleById(id: string): Promise<IArticle | null> {
            try {
                const response = await useArticleApi().getArticleById(id);
                const article = response.data.value;
                if (article) {
                    this.articles.push(article);
                }
                return article ?? null;
            } catch (err) {
                console.error(err);
                throw err;
            }
        },
        getCachedArticleById(id: string) {
            return this.articles.find(article => article.id === id);
        }
    }
})