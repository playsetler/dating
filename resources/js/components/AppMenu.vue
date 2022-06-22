<template>
  <div class="app-menu">
    <div class="app-menu__item">
      <router-link to="/"><div class="app-menu__item-icon app-menu__item-icon_1"></div></router-link>
      
    </div>
    <div class="app-menu__item">
      <router-link to="/"><div class="app-menu__item-icon app-menu__item-icon_2"></div></router-link>
    </div>
    <div class="app-menu__item">
      <router-link to="/"><div class="app-menu__item-icon app-menu__item-icon_3"></div></router-link>
    </div>
    <div class="app-menu__item">
      <router-link to="/"><div class="app-menu__item-icon app-menu__item-icon_4"></div></router-link>
    </div>
    <div class="app-menu__item">
      <router-link to="/"><div class="app-menu__item-icon app-menu__item-icon_5"></div></router-link>
    </div>
  </div>
</template>
<script>
export default {
  name: 'AppMenu'
}
</script>
<style lang="scss" scoped>
.app-menu {
  width: 100%;
  display: flex;
  box-shadow: 0px -1px 0px rgba(0, 0, 0, 0.06);
  background-color: var(--color-light-0);

  &__item {
    width: 20%;
    height: 10.8vh;

    &-icon {
      height: 100%;

      &_1 {
        background: no-repeat center center url('../assets/img/feed/mouthpiece.svg');
      }

      &_2 {
        background: no-repeat center center url('../assets/img/feed/earth.svg');
      }

      &_3 {
        background: no-repeat center center url('../assets/img/feed/diamond.svg');
      }

      &_4 {
        background: no-repeat center center url('../assets/img/feed/Subtract.svg');
      }

      &_5 {
        background: no-repeat center center url('../assets/img/feed/profile_Icon.svg');
      }
    }
  }
}
</style>