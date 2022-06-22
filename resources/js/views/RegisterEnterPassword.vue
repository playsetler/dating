<template>
  <div class="password page">
    <header class="password__header">
      <div class="back" @click="this.$router.push('/register/confirmnumber')"></div>
      <progress-bar class="password__progress" :complete="73"></progress-bar>
      <div class="close"></div>
    </header>
    <div class="password__content">
      <h1 class="title">Enter password</h1>
      <p class="text-base">
        Choose something that is easy to remember, but difficult to guess.
      </p>
      <input-base
        type="password"
        title="Password"
        placeholder="Use minimum 8 characters"
        @input="onInput($event)">
      </input-base>
    </div>
    <button-base
      class="password__button"
      :disabled="password === ''"
      @click="this.$router.push('/register/addphotos')">
      Continue
    </button-base>
    <div class="bottom-line"></div>
  </div>
</template>
<script>
import ProgressBar from '../components/ProgressBar.vue'
import ButtonBase from '../components/UI/ButtonBase.vue'
import InputBase from '../components/UI/InputBase.vue'

export default {
  name: 'RegisterPassword',
  components: {
    ProgressBar,
    InputBase,
    ButtonBase
  },
  data() {
    return {
      password: ''
    }
  },
  methods: {
    onInput(e) {
      this.password = e.value
      this.$store.commit('setPassword', {password: e.value});
    }
  }
}
</script>
<style lang="scss" scoped>
.password {
  padding: 7vh 4% 6vh;
  display: flex;
  flex-direction: column;

  &__header {
    display: flex;
    justify-content: space-between;
    margin-left: 0.8%;
    margin-right: 1.3%;
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

    .title {
      margin-bottom: 8px;
    }

    .text-base {
      margin-bottom: 32px;
    }
  }
}
</style>