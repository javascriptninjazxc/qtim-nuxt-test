<template>
  <div class="article-view">
    <div v-if="isLoading || article === null" class="article-loading">
      Загрузка поста...
    </div>
    <article-content v-else :article="article" />
  </div>
</template>

<script setup lang="ts">
import ArticleContent from "~/features/article/ui/ArticleContent.vue";
import type {IArticle} from "~/entities/article/model/article.type";
import {useArticleStore} from "~/entities/article/model/article.model";

const isLoading = ref(false);
const route = useRoute();
const id = route.params.id as string;

const article: Ref<IArticle | null> = ref(null);

const articleStore = useArticleStore()

const fetchArticle = async () => {
  isLoading.value = true
  try {
    article.value = await articleStore.getArticleById(id)
  } catch (err) {
    console.error('Ошибка при загрузке статьи:', err)
  } finally {
    isLoading.value = false
  }
}

fetchArticle()
</script>

<style scoped>

</style>