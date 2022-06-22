<template>
<!-- КОМПОНЕНТ БУДЕТ УДАЛЕН!!! -->
  <div class="photo-cards">
    <div
      v-for="i in 9"
      :key="i"
      class="photo-cards__item"
      @click="addPhoto()">
    </div>
  </div>
</template>
<script>
export default {
  name: 'PhotoCards',
  data() {
    return {}
  },
  methods: {
    addPhoto() {
      this.$emit('add-photo')
    }
  }
}
</script>
<style lang="scss" scoped>
.photo-cards {
  width: 100%;
  display: flex;
  flex-wrap: wrap;

  &__item {
    width: 32%;
    margin-right: 2%;
    margin-bottom: 2%;
    aspect-ratio: 109 / 117;
    border-radius: 12px;
    background: no-repeat center center var(--color-light-10) url('../assets/img/Plus.svg');

    &:nth-child(3n) {
      margin-right: 0;
    }
    
    &:first-child {
      background-image: url('../assets/img/register/pic1.png');
      background-size: cover;
    }

    &:nth-child(2) {
      background-image: url('../assets/img/register/pic2.png');
      background-size: cover;
    }

    &:nth-child(3) {
      background-image: url('../assets/img/register/pic3.png');
      background-size: cover;
    }

    &:nth-child(4) {
      background-image: url('../assets/img/register/pic4.png');
      background-size: cover;
    }
  }
}
</style>