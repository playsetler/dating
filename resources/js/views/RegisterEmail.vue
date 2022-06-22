<template>
  <div class="email page">
    <header class="email__header">
      <div class="back" @click="this.$router.push('/register/birthday')"></div>
      <progress-bar class="email__progress" :complete="61"></progress-bar>
      <div class="close"></div>
    </header>
    <div class="email__content">
      <h1 class="title">Enter your Email</h1>
      <p class="text-base">
        We will send you an email to confirm your registration
      </p>
      <!-- TODO type="email" -->
      <input-base
        type="text"
        title="Email"
        placeholder="example@example.com"
        @input="onInput($event)">
      </input-base>
    </div>
    <button-base
      class="email__button"
      :disabled="email === ''"
      @click="this.$router.push('/register/password')">
      Continue
    </button-base>
    <div class="email__link">
      <router-link to="/register/cellphone" class="link">Registration By CellPhone Number</router-link>
    </div>
    <div class="bottom-line"></div>
  </div>
</template>
<script>
import ProgressBar from '../components/ProgressBar.vue'
import ButtonBase from '../components/UI/ButtonBase.vue'
import InputBase from '../components/UI/InputBase.vue'

export default {
  name: 'RegisterEmail',
  components: {
    ProgressBar,
    InputBase,
    ButtonBase
  },
  data() {
    return {
      email: ''
    }
  },
  methods: {
    onInput(e) {
      this.email = e.value
      this.$store.commit('setEmail', {email: e.value});
    }
  }
}
</script>
<style lang="scss" scoped>
.email {
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