<template>
  <header class="header">
    <header-brand />

    <div class="header-content">
      <header-nav />

      <header-actions />
    </div>
  </header>
</template>

<script setup lang="ts">
</script>

<style lang="scss" scoped>
.header {
  @apply py-9 px-10 flex items-center justify-between sticky top-0 bg-white z-10;

  &-content {
    @apply flex items-center gap-[5.68rem];
  }
}
</style>