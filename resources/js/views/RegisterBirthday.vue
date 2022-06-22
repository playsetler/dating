<template>
  <div class="birthday page">
    <header class="birthday__header">
      <div class="back" @click="this.$router.push('/register/name')"></div>
      <progress-bar class="birthday__progress" :complete="48"></progress-bar>
      <div class="close"></div>
    </header>
    <div class="birthday__content">
      <h1 class="title">What is your date of birth</h1>
      <p class="text-base">
        Your age will be visible for all users
      </p>
      <!-- TODO type="date" -->
      <input-base
        type="text"
        title="Birth date"
        placeholder="DD/MM/YYYY"
        @input="onInput($event)">
      </input-base>
    </div>
    <button-base
      class="birthday__button"
      :disabled="birthday === ''"
      @click="this.$router.push('/register/email')">
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
  name: 'RegisterBirthday',
  components: {
    ProgressBar,
    InputBase,
    ButtonBase
  },
  data() {
    return {
      birthday: ''
    }
  },
  methods: {
    onInput(e) {
      this.birthday = e.value
      this.$store.commit('setDateOfBirth', {dateOfBirth: e.value});
    }
  }
}
</script>
<style lang="scss" scoped>
.birthday {
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
      margin-bottom: 53px;
    }
  }
}
</style>