import type {IArticle} from "~/entities/article/model/article.type";
import baseFetch from "#shared/api/baseFetch";

export function useArticlesList() {
    return useAsyncData<IArticle[]>('posts', () => baseFetch('posts'), {
        server: true,
        lazy: true,
        immediate: true,
    })
}