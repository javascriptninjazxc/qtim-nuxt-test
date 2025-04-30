import baseFetch from "#shared/api/baseFetch";
import type {IArticle} from "~/entities/article/model/article.type";

export function useArticleApi() {
    const getList = () => {
        return useAsyncData<IArticle[]>('posts', () => baseFetch('posts'), {
            server: true,
            immediate: true,
        })
    }

    const getArticleById = (id: string) => {
        if(!id) {
            throw new Error("id is missing");
        }

        console.log(id);

        return useAsyncData<IArticle>(`post`, () => baseFetch(`posts/${id}`, {
        }), {
            server: true,
            immediate: true,
        })
    }

    return {
        getList,
        getArticleById,
    }
}