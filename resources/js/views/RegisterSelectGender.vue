<template>
  <div class="gender page">
    <header class="gender__header">
      <div class="back" @click="this.$router.push('/register/welcome')"></div>
      <progress-bar class="gender__progress" :complete="6.4"></progress-bar>
      <div class="close"></div>
    </header>
    <div class="gender__content">
      <h1 class="title">You...</h1>
      <p class="text-base">
        What is your gender
      </p>
      <radio-block
        :values="options"
        @select="onSelect($event)"></radio-block>
    </div>
    <button-base
        class="gender__button"
        :disabled="gender === ''"
        @click="this.$router.push('/register/name')">
        Continue
      </button-base>
      <div class="bottom-line"></div>
  </div>
</template>
<script>
import ProgressBar from '../components/ProgressBar.vue'
import RadioBlock from '../components/RadioBlock.vue'
import ButtonBase from '../components/UI/ButtonBase.vue'

export default {
  name: 'RegisterSelectGender',
  components: {
    ProgressBar,
    ButtonBase,
    RadioBlock
  },
  data() {
    return {
      gender: '',
      options: [ 'Man', 'Woman' ]
    }
  },
  methods: {
    onSelect(e) {
      this.gender = e.selected
      this.$store.commit('setSex', {sex: e.selected});
    }
  }
}
</script>
<style lang="scss" scoped>
.gender {
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
      margin-bottom: 59px;
    }
  }
}
</style>