<template>
  <div class="pagination">
    <div v-show="!isStartList" class="pagination__final">
      <BaseButton
          class="pagination-button pagination-button__final"
          @click="$emit('setPage', Math.max(currentPage - 3, 1))"
      >
        <Icon name="local:chevron-right" />
      </BaseButton>
      <BaseButton class="pagination-button pagination-button__stepper" @click="$emit('setPage', 1)"> 1 </BaseButton>
    </div>

    <template v-for="page in displayPages" :key="page">
      <BaseButton
          class="pagination-button pagination-button__stepper"
          :class="{ 'pagination-button--active': currentPage === page }"
          @click="$emit('setPage', page)"
      >
        {{ page }}
      </BaseButton>
    </template>

    <div v-show="!isEndList" class="pagination__final">
      <BaseButton class="pagination-button" disabled> ... </BaseButton>
      <BaseButton class="pagination-button pagination-button__stepper" @click="$emit('setPage', totalPages)">
        {{ totalPages }}
      </BaseButton>
      <BaseButton
          class="pagination-button pagination-button__final"
          @click="$emit('setPage', Math.min(currentPage + 3, totalPages))"
      >
        <Icon name="local:chevron-left" />
      </BaseButton>
    </div>
  </div>
</template>


<script setup lang="ts">
const props = withDefaults(defineProps<
    {
      total: number;
      currentPage: number;
      pageSize?: number,
    }
>(), {
  pageSize: 1,
});

const emit = defineEmits<{
  (event: "setPage", value: number): void;
}>();

const totalPages = computed(() => {
  return Math.ceil(props.total / props.pageSize);
});

const isStartList = computed(() => {
  return props.currentPage < 4;
});

const isMiddleList = computed(() => {
  return props.currentPage >= 4 && props.currentPage <= totalPages.value - 3;
});

const isEndList = computed(() => {
  return props.currentPage > totalPages.value - 3;
});

const displayPages = computed(() => {
  if (isStartList.value) {
    return Array.from({ length: 4 }, (_, i) => i + 1)
  }

  if (isMiddleList.value) {
    const current = props.currentPage
    return [current - 1, current, current + 1]
  }

  if (isEndList.value) {
    return Array.from({ length: 4 }, (_, i) => totalPages.value - 3 + i)
  }

  return []
})
</script>

<style scoped>
.pagination {
  @apply flex gap-x-2;

  &__final {
    @apply flex gap-x-2;
  }
}
</style>