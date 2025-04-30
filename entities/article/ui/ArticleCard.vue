<template>
  <div @click="navigateTo(`/article/${article.id}`)" class="article-card">
    <div class="article-card__image bg-neutral-100">
      <img :src="article.image" alt="article preview image">
    </div>
    <div class="article-card__content">
      <p class="article-card__description">{{ article.preview }}</p>
      <div class="article-card__more">
        <nuxt-link :to="`/article/${article.id}`">
          Read more
        </nuxt-link>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type {IArticle} from "../model/article.type";

defineProps<{
  article: IArticle;
}>();
</script>

<style lang="scss" scoped>
.article-card {
  @apply relative text-xl cursor-pointer w-[17.5rem];
  transition: transform 0.3s, z-index 0.3s;

  &__image {
    img {
      @apply object-cover w-[17.5rem] h-[17.5rem];
    }
  }

  &__content {
    @apply mt-6;
  }

  &__more {
    @apply hidden text-primary-100;
  }

  &:hover {
    @apply -translate-y-10 z-[1];

    .article-card__more {
      @apply absolute block pt-[0.75rem];
    }
  }
}
</style>