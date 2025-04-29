<template>
  <header class="header py-9 px-10 flex items-center justify-between">
    <div class="header-brand">
        <router-link to="/">
          <img src="/logo.svg" alt="Qtim logo">
        </router-link>
      </div>

    <div class="header-content flex items-center gap-[5.68rem]">
      <nav class="header-nav">
        <ul class="header-nav__list flex gap-14">
          <li class="header-nav__item">
            <router-link to="/works">Works</router-link>
          </li>

          <li class="header-nav__item">
            <router-link to="/about">About</router-link>
          </li>
        </ul>
      </nav>

      <div class="header-actions h-[3.25rem] flex gap-4 items-center">
        <div class="header-actions__lang flex justify-center items-center rounded-full border border-black border-opacity-10 h-[3.25rem] w-[3.25rem]">
          <Icon name="custom:uk" class="text-2xl" />
        </div>

        <button class="header-actions__btn bg-neutral-950 text-white rounded-full px-8 py-4">
          Let's Work
        </button>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">

</script>

<style scoped>

</style>