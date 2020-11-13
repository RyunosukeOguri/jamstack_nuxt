<template>
  <header class="c-header">
    <n-link :to="'/'">
      <Logo />
    </n-link>
    <nav class="c-header-nav">
      <n-link class="c-header-nav__item" :to="'#'">Blog</n-link>
      <n-link class="c-header-nav__item" :to="'#'">Work</n-link>
      <n-link class="c-header-nav__item" :to="'#'">Member</n-link>
      <n-link class="c-header-nav__item" :to="'#'">Contact</n-link>
    </nav>
  </header>
</template>

<style lang="scss">
.c-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 15px 20px;
  background: #000;
  &-nav {
    margin-left: 30px;
    font-size: 1.1rem;
    &__item {
      margin: 0 10px;
    }
  }
}
</style>
