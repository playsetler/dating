<template>
  <div class="confirm page">
    <header class="confirm__header">
      <div class="back" @click="this.$router.push('/register/cellphone')"></div>
      <progress-bar class="confirm__progress" :complete="61"></progress-bar>
      <div class="close"></div>
    </header>
    <div class="confirm__content">
      <h1 class="title">Confirm the Number</h1>
      <p class="text-base">
        An SMS with a code was sent to the number {$}.  Enter it here.
      </p>
      <input-base
        type="text"
        title="Confirmation code"
        placeholder="XXXXXX"
        @input="onInput($event)">
      </input-base>
    </div>
    <button-base
      class="confirm__button"
      :disabled="confirmationCode.length < 6"
      @click="this.$router.push('/register/password')">
      Continue
    </button-base>
    <div class="confirm__link">
      <router-link to="/register/cellphone" class="link">I didn't receive the code</router-link>
    </div>
    <div class="bottom-line"></div>
  </div>
</template>
<script>
import ProgressBar from '../components/ProgressBar.vue'
import ButtonBase from '../components/UI/ButtonBase.vue'
import InputBase from '../components/UI/InputBase.vue'

export default {
  name: 'RegisterConfirmNumber',
  components: {
    ProgressBar,
    InputBase,
    ButtonBase
  },
  data() {
    return {
      confirmationCode: ''
    }
  },
  methods: {
    onInput(e) {
      this.confirmationCode = e.value
    }
  }
}
</script>
<style lang="scss" scoped>
.confirm {
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