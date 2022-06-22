<template>
  <div class="wrapper page">
    <header class="header">
      <div class="back" @click="this.$router.push('/myaccountsettings')"></div>
      <h1 class="title">Delete yor account</h1>
      <div></div>
    </header>
    <div class="delete_account">
      <div class="delete_account__content">
        <br />
        <div class="functions">
          <div class="functions__img">
            <img src="../assets/img/myaccount/Freeze.svg" />
          </div>
          <div class="functions__desc text-base">
            <div class="functions__title">Freeze account</div>
            <div class="functions__text text-base">
              If you want to keep your account, but hide it from others, you can
              freeze it. You can return to the app at any time
            </div>
          </div>
        </div>
      </div>
      <div class="delete_account__category">
        <button-base class="delete_account__button freeze">
          Freeze account
        </button-base>
        <button-base
          class="delete_account__button del"
          @click="this.$router.push('/myaccountreasondeletion')"
        >
          Delete my account
        </button-base>
      </div>
    </div>
  </div>
</template>

<script>
import ButtonBase from "../components/UI/ButtonBase.vue";

export default {
  name: "MyAccountDelete",
  components: {
    ButtonBase,
  },
  data() {
    return {};
  },
  methods: {},
};
</script>

<style lang="scss" scoped>
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 6vh 5.3% 6px;
  border-bottom: 2px solid var(--color-divider);
  margin-bottom: 27px;

  .text-base {
    font-size: 16px;
    color: #d89972;
  }

  .title {
    font-weight: 600;
    font-size: 20px;
  }
}

.delete_account {
  display: flex;
  flex-direction: column;
  padding: 7vh 4% 6vh;
  height: calc(100vh - 56px);

  &__button {
    &.freeze {
      background: var(--color-danger);
      margin-bottom: 14px;
    }

    &.del {
      background: var(--color-light-0);
      color: var(--color-secondary);
    }
  }

  &__content {
    text-align: left;
    flex-grow: 2;
    margin: 0 auto;

    .text-base {
      &.head {
        margin-bottom: 12px;
        color: var(--color-secondary);
      }
    }
  }

  .line {
    border-bottom: 1px solid #f2f1f0;
  }
}

.functions {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 12px;
  margin-bottom: 25px;
  border-radius: 12px;
  padding: 21px 16px 26px;

  &__img {
    margin-bottom: 19px;

    img {
      width: 56px;
      height: 56px;
    }
  }

  &__desc {
    display: flex;
    flex-direction: column;
    text-align: center;
  }

  &__title {
    font-weight: 600;
    font-size: 20px;
    margin-bottom: 9px;
  }

  &__text {
    font-size: 16px;
    color: #393939;
    margin-bottom: 21px;
  }

  &__button {
    background: var(--color-light-10);
    color: var(--color-main-dark);
    font-weight: 400;
    font-size: 16px;
    letter-spacing: -0.32px;
  }
}
</style>
