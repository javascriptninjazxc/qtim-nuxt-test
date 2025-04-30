import type {IArticle} from "~/entities/article/model/article.type";
import baseFetch from "#shared/api/baseFetch";

export function useArticle() {
    const fetchArticleById = (id: string) => {
        return useAsyncData<IArticle[]>(`posts/${id}`, () => baseFetch('posts'), {
            server: true,
            immediate: true,
        })
    }

    return {
        fetchArticleById,
    }
}