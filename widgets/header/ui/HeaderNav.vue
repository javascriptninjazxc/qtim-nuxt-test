<template>
  <nav class="header-nav">
    <ul class="header-nav__list">
      <li class="header-nav__item">
        <router-link to="/">Works</router-link>
      </li>
      <li class="header-nav__item">
        <router-link to="/">About</router-link>
      </li>
    </ul>
  </nav>
</template>

<script setup lang="ts">

</script>

<style lang="scss" scoped>
.header-nav {
  &__list {
    @apply flex gap-14;
  }
}
</style>