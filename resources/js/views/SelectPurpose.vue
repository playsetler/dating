<template>
  <div class="search_filter page">
    <header class="search_filter__header">
      <div class="back"></div>
      <h1 class="title">Filter</h1>
      <div class="clear text-base">Clear</div>
    </header>
    <p class="text-base search_filter__title">I am interested</p>
    <modal-welcome-with-buy></modal-welcome-with-buy>
  </div>
</template>
<script>
import ModalWelcomeWithBuy from "../components/ModalWelcomeWithBuy";
export default {
  name: 'SelectPurpose',
  components: {
    ModalWelcomeWithBuy
  }
}
</script>
<style lang="scss" scoped>
.search_filter {
  padding: 7vh 0 6vh;
  display: flex;
  flex-direction: column;

  &__header {
    display: flex;
    justify-content: space-between;
    padding-left: 4.8%;
    padding-right: 5.3%;
    padding-bottom: 10px;
    margin-bottom: 24px;
    align-items: center;
    box-shadow: 0px 1px 0px var(--color-divider);

    .text-base {
      font-size: 16px;
      color: #d89972;
    }
  }

  .clear {
    margin-top: 1px;
  }

  &__title {
    padding: 0 4%;
    color: var(--color-secondary);
  }
}
</style>