<template>
  <div class="articles">
    <div v-if="isLoading" class="articles__loading">
      Загрузка статей...
    </div>

    <div v-else class="articles__list">
      <div v-for="article in paginatedItems" :key="article.id" class="articles__item">
        <ArticleCard :article="article" />
      </div>
    </div>

    <the-pagination
        class="articles__paginator"
        :total="items.length"
        :current-page="currentPage"
        :page-size="pageSize"
        @set-page="setPage"
    />
  </div>
</template>

<script setup lang="ts">
import {useArticlesList} from "~/features/article-list/model/useArticlesList";
import type {IArticle} from "~/entities/article/model/article.type";
import {usePagination} from "#shared/lib/usePagination";

const articles: Ref<IArticle[]> = ref([]);
const isLoading = ref(false)

const { items, currentPage, pageSize, setPage, setItems, paginatedItems } = usePagination<IArticle>();
const {fetchArticlesList} = useArticlesList();

const fetchArticles = async () => {
  isLoading.value = true;

  try {
    const response = await fetchArticlesList();

    if(!response.data.value) return;

    setItems(response.data.value);

    articles.value = response.data.value;
  } catch(err) {
    console.error(err);
  } finally {
    isLoading.value = false
  }
}

fetchArticles();
</script>

<style lang="scss" scoped>
.articles {
  &__list {
    @apply grid grid-cols-4 mt-14 mb-12 gap-x-8 gap-y-10;
  }

  &__paginator {
    @apply mb-36;
  }
}
</style>