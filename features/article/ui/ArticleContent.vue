<template>
  <div class="article-content text-neutral-950">
    <h1 class="article__title">{{ article.title }}</h1>
    <div class="article__image">
      <img :src="article.image" alt="article preview">
    </div>
    <div class="article__content">
      <p>About</p>
      <p class="article__description">
        {{ article.description }}
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
import type {IArticle} from "~/entities/article/model/article.type";

const props = defineProps<{
  article: IArticle;
}>();
</script>

<style scoped>
.article-content {
  .article {
    &__title {
      margin-top: 7.5rem;
      margin-bottom: 4.5rem;
      font-size: 5.25rem;
      line-height: 1;
    }

    &__image {
      @apply bg-neutral-100;
      img {
        @apply object-cover h-[700px];
        object-fit: cover;
        width: 100%;
      }
    }

    &__content {
      @apply my-20;
      max-width: 43.5rem;
    }

    &__description {
      @apply mt-8 text-4xl;
    }
  }
}
</style>