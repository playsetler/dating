<template>
  <div class="presentation page">
    <header class="presentation__header">
      <div class="back" @click="this.$router.push('/register/addedphotos')"></div>
      <progress-bar class="presentation__progress" :complete="100"></progress-bar>
      <div class="close"></div>
    </header>
    <div class="presentation__content">
      <h1 class="title">Presentation video</h1>
      <p class="text-base">
        Record a one-minute video to help you verify your identity and verify your account. This video will be seen only by the moderator. You will also be able to attach this video to the message and send it to a person you talk to, if you wish.
      </p>
    </div>
    <button-base
      class="presentation__button"
      @click="registration($event)">
      Continue
    </button-base>
    <a href="#"
      class="link"
      @click="registration($event)">
      Skip
    </a>
    <div class="bottom-line"></div>
  </div>
</template>
<script>
import ProgressBar from '../components/ProgressBar.vue'
import ButtonBase from '../components/UI/ButtonBase.vue'

export default {
  name: 'RegisterPresentationVideo',
  components: {
    ProgressBar,
    ButtonBase
  },
  data() {
    return {}
  },
  methods: {
    registration() {
      this.$store.dispatch('registration').then(response => {
          this.$router.push('/feed');
      });
    }
  }
}
</script>
<style lang="scss" scoped>
.presentation {
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
  }

  &__button {
    margin-bottom: 24px;
  }

  .link {
    text-align: center;
  }
}
</style>