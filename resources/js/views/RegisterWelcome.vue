<template>
  <div class="welcome page">
    <header class="welcome__header">
      <div class="back"></div>
      <progress-bar class="welcome__progress" :complete="6.4"></progress-bar>
      <div class="close" :class="{ hidden: isModalShown }"></div>
    </header>
    <div class="welcome__content">
      <h1 class="title">Welcome</h1>
      <p class="text-base">
        What are you looking for in this App?<br>
        Select Category
      </p>
      <select-base
        title="Category"
        placeholder="Category"
        :selected="category"
        @click="isModalShown = true">
      </select-base>
    </div>
    <button-base
      class="welcome__button"
      :disabled="category === ''"
      @click="this.$router.push('/register/gender')">
      Continue
    </button-base>
    <div class="bottom-line"></div>
    <modal-welcome
      v-if="isModalShown"
      @select="onSelect($event)">
    </modal-welcome>
  </div>
</template>
<script>
import ModalWelcome from '../components/ModalWelcome.vue'
import ProgressBar from '../components/ProgressBar.vue'
import ButtonBase from '../components/UI/ButtonBase.vue'
import SelectBase from '../components/UI/SelectBase.vue'

export default {
  name: 'RegisterWelcome',
  components: {
    ProgressBar,
    ButtonBase, 
    ModalWelcome,
    SelectBase
  },
  data() {
    return {
      isModalShown: false,
      category: ''
    }
  },
  methods: {
    onSelect(e) {
      this.category = e.selected
      this.isModalShown = false
      this.$store.commit('setTarget', {target: e.selected});
    }
  }
}
</script>
<style lang="scss" scoped>
.welcome {
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

    &.hidden {
      opacity: 0;
    }
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