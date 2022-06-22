<template>
  <div class="photos page">
    <header class="photos__header">
      <div class="back" @click="this.$router.push('/register/password')"></div>
      <progress-bar class="photos__progress" :complete="86"></progress-bar>
      <div class="close"></div>
    </header>
    <div class="photos__content">
      <h1 class="title">Add photos</h1>
      <p class="text-base">
        Add at least 3 photos to continue
      </p>
      <photo-cards @add-photo="this.$router.push('/register/addedphotos')"></photo-cards>
    </div>
    <button-base
      class="photos__button"
      :disabled="photos.length <= 3"
      @click="this.$router.push('/register/addedphotos')">
      Continue
    </button-base>
    <div class="bottom-line"></div>
  </div>
</template>
<script>
import ProgressBar from '../components/ProgressBar.vue'
import ButtonBase from '../components/UI/ButtonBase.vue'
import PhotoCards from '../components/PhotoCards.vue'

export default {
  name: 'RegisterAddPhotos',
  components: {
    ProgressBar,
    ButtonBase,
    PhotoCards
  },
  data() {
    return {
      photos: []
    }
  },
  methods: {

  }
}
</script>
<style lang="scss" scoped>
.photos {
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