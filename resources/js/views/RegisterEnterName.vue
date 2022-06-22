<template>
  <div class="name page">
    <header class="name__header">
      <div class="back" @click="this.$router.push('/register/gender')"></div>
      <progress-bar class="name__progress" :complete="36"></progress-bar>
      <div class="close"></div>
    </header>
    <div class="name__content">
      <h1 class="title">Enter your Name</h1>
      <p class="text-base">
        Please enter your real name.<br>
        It cannot be changed
      </p>
      <input-base
        type="text"
        title="Your Name"
        placeholder="Your Name"
        @input="onInput($event)">
      </input-base>
    </div>
    <button-base
      class="name__button"
      :disabled="name === ''"
      @click="this.$router.push('/register/birthday')">
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
  name: 'RegisterName',
  components: {
    ProgressBar,
    InputBase,
    ButtonBase
  },
  data() {
    return {
      name: ''
    }
  },
  methods: {
    onInput(e) {console.log(e.value);
      this.name = e.value
      this.$store.commit('setName', {name: e.value});
    }
  }
}
</script>
<style lang="scss" scoped>
.name {
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
      margin-bottom: 30px;
    }
  }
}
</style>