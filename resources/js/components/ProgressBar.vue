<template>
  <div class="progress">
    <div class="complete" :style="style"></div>
  </div>
</template>
<script>
export default {
  name: 'ProgressBar',
  props: {
    complete: {
      type: Number,
      default: 0 // TODO: добавить проверку (>= 0 && <= 100)
    }
  },
  computed: {
    style() {
      return `width: ${ this.complete }%;`
    }
  }
}
</script>
<style lang="scss" scoped>
.progress {
  width: 100%;
  border-radius: 34px;
  height: 4px;
  background-color: var(--color-light-10);
}

.complete {
  background-color: var(--color-main-light);
  height: 100%;
  border-radius: 34px;
}
</style>