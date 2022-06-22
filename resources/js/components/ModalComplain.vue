<template>
  <modal-base>
    <header class="header">
      <h2 class="title">Send request</h2>
      <div class="close" @click="this.$emit('close', false)"></div>
    </header>
    <div class="reveal">
      <div class="reveal__content">
        <br />
        <div class="reveal__main">
          <div class="reveal__img">
            <img src="../assets/img/profileView/Complane.svg" />
          </div>
          <div class="reveal__desc text-base">
            <div class="reveal__title">Send a complaint</div>
            <div class="reveal__text text-base">
              You can file a complaint against this person
            </div>
          </div>
        </div>
        <div>
          <button-base class="reveal__button send"> Send a complaint</button-base>
          <button-base class="reveal__button term"> Terms of use </button-base>
        </div>
      </div>
    </div>
  </modal-base>
</template>
<script>
import ModalBase from "./UI/ModalBase.vue";
import ButtonBase from "../components/UI/ButtonBase.vue";

export default {
  name: "ModalRequestPhoto",
  components: {
    ModalBase,
    ButtonBase
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
  padding: 16px;

  .title {
    font-size: 20px;
    line-height: 24px;
  }
}

.close {
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background: no-repeat center center var(--color-light-10)
    url("../assets/img/Close-light.svg");
}

.reveal {
  display: flex;
  flex-direction: column;
  padding: 7vh 4% 6vh;
  height: calc(100vh - 87px);

  &__content {
    text-align: left;
    flex-grow: 2;
    margin: 0 auto;
  }

  .line {
    border-bottom: 1px solid #f2f1f0;
  }

  &__img {
    margin-bottom: 19px;

    img {
      width: 64px;
      height: 64px;
    }
  }

  &__main {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 12px;
    margin-bottom: 25px;
    border-radius: 12px;
    padding: 21px 16px 26px;
    position: relative;
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
    font-weight: 400;
    font-size: 16px;
    letter-spacing: -0.32px;

    &.send {
      background: var(--color-danger);
    }

    &.term {
      background: transparent;
      color: var(--color-secondary);
    }
  }
}
</style>