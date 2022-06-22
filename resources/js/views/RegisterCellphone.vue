<template>
  <div class="cellphone page">
    <header class="cellphone__header">
      <div class="back" @click="this.$router.push('/register/email')"></div>
      <progress-bar class="cellphone__progress" :complete="61"></progress-bar>
      <div class="close"></div>
    </header>
    <div class="cellphone__content">
      <h1 class="title">Enter CellPhone Number</h1>
      <p class="text-base">
        We will send you an SMS with a confirmation code
      </p>
      <!-- TODO type="phone" -->
      <input-base
        type="phone"
        title="Phone"
        placeholder="XXX-XXX-XX-XX"
        @input="onInput($event)">
      </input-base>
    </div>
    <button-base
      class="cellphone__button"
      :disabled="cellphone === ''"
      @click="this.$router.push('/register/confirmnumber')">
      Continue
    </button-base>
    <div class="cellphone__link">
      <router-link to="/register/email" class="link">Registration By Email</router-link>
    </div>
    <div class="bottom-line"></div>
  </div>
</template>
<script>
import ProgressBar from '../components/ProgressBar.vue'
import ButtonBase from '../components/UI/ButtonBase.vue'
import InputBase from '../components/UI/InputBase.vue'

export default {
  name: 'RegisterCellphone',
  components: {
    ProgressBar,
    InputBase,
    ButtonBase
  },
  data() {
    return {
      cellphone: ''
    }
  },
  methods: {
    onInput(e) {
      this.cellphone = e.value
    }
  }
}
</script>
<style lang="scss" scoped>
.cellphone {
  padding-top: 7vh;
  padding-bottom: 6vh;
  display: flex;
  flex-direction: column;

  &__header {
    display: flex;
    justify-content: space-between;
    margin-left: 4.8%;
    margin-right: 5.3%;
    margin-bottom: 9%;
  }

  &__progress {
    width: 66vw;
    margin-top: 6px;
  }

  .close {
    margin-top: 1px;
  }

  &__content {
    text-align: center;
    flex-grow: 2;
    margin: 0 auto;
    width: 92%;

    .title {
      margin-bottom: 8px;
    }

    .text-base {
      margin-bottom: 32px;
    }
  }

  &__button {
    width: 92%;
    margin: 0 auto;
    margin-bottom: 18px;
  }

  &__link {
    width: 100%;
    height: 48px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-top: 1px solid var(--color-divider);
  }
}
</style>