<template>
  <div class="subscribe page">
    <header class="subscribe__header">
      <div class="back" @click="this.$router.push('/myaccount')"></div>
    </header>
    <div class="subscribe__content">
      <div class="title">Diamonds Premium</div>
      <br />
      <div class="functions">
        <div class="functions__img">
          <img src="../assets/img/myaccount/DiamondsPremium.png" />
        </div>
        <div class="functions__desc text-base">
          <div class="functions__title">Premium functions</div>
          <div class="functions__text text-base">
            Write to everyone first in the selected category
          </div>
        </div>
        <div class="functions__dots">
          <div class="dot"></div>
          <div class="dot"></div>
          <div class="dot"></div>
        </div>
      </div>
      <div class="line"></div>
      <div class="subscribe__category">
        <p class="text-base head">Premium Category</p>
        <select-base
          :label="false"
          placeholder="Category"
          :selected="category"
          @click="isModalShown = true"
        >
        </select-base>
      </div>
      <modal-welcome v-if="isModalShown" @select="onSelect($event)">
      </modal-welcome>
      <div class="subscribe__tariff">
        <p class="text-base head">Choose a tariff</p>
        <div class="tariff">
          <div class="tariff__desc text-base">
            <div class="tariff__monthes text-base">1 month</div>
            <div class="tariff__every-month text-base">649,00 $/month</div>
            <div class="tariff__total text-base">329,00 ₽</div>
          </div>
        </div>
      </div>
    </div>
    <button-base class="subscribe__button" @click="this.$router.push('#')">
      Continue
    </button-base>
  </div>
</template>

<script>
import ButtonBase from "../components/UI/ButtonBase.vue";
import SelectBase from "../components/UI/SelectBase.vue";
import ModalWelcome from "../components/ModalWelcome.vue";

export default {
  name: "MyAccountSubscribe",
  components: {
    ButtonBase,
    SelectBase,
    ModalWelcome,
  },
  data() {
    return {
      isModalShown: false,
      category: "",
    };
  },
  methods: {
    onSelect(e) {
      this.category = e.selected;
      this.isModalShown = false;
    },
  },
};
</script>

<style lang="scss" scoped>
.subscribe {
  display: flex;
  flex-direction: column;
  padding: 7vh 4% 6vh;

  &__header {
    display: flex;
    justify-content: space-between;
    margin-bottom: 6%;
  }

  &__content {
    text-align: left;
    flex-grow: 2;
    margin: 0 auto;

    .title {
      font-size: 32px;
    }

    .text-base {
      &.head {
        margin-bottom: 7px;
        color: var(--color-secondary);
      }
    }
  }

  &__category {
    margin: 26px 0 27px;
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
  background: var(--color-white);
  box-shadow: 0px 4px 24px rgba(78, 60, 33, 0.08);
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

  &__dots {
    display: flex;

    .dot {
      width: 7px;
      height: 7px;
      background: #e6e4e3;
      border-radius: 50%;
      margin-right: 8px;

      &:nth-child(1) {
        background: linear-gradient(0deg, #e3b687, #e3b687), #d89972;
      }
    }
  }
}

.tariff {
  background: #faf2ec;
  border-radius: 12px;
  border: 1px solid #d89972;
  padding: 20px 0 16px;
  text-align: center;

  &__every-month {
    font-weight: 400;
    font-size: 12px;
    margin: 4px 0 12px;
  }

  &__total {
    font-size: 18px;
  }
}
</style>
