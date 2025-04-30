<template>
  <button class="button">
    <slot />
  </button>
</template>

<script setup lang="ts">

</script>

<style scoped>
.button-primary {
  @apply bg-neutral-950 text-white rounded-full px-8 py-4;
}

.pagination-button {
  @apply flex items-center rounded-xl justify-center p-0 w-11 h-11 bg-neutral-100;
  transition: background 0.2s ease;

  &--active {
    @apply text-neutral-100 bg-neutral-950 !important;
  }

  &__stepper {
    &:hover {
      @apply bg-neutral-300;
    }

    &:active {
      @apply text-neutral-100 bg-neutral-950;
    }
  }

  &__final {
    @apply bg-white  border-neutral-300;
    border-width: 0.5px;

    &:hover {
      @apply bg-neutral-300;
    }
  }
}
</style>