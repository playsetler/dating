<template>
  <div class="modal">
    <div class="modal__overlay"></div>
    <div class="modal__window" :class="{ 'modal__window_fullscreen': fullScreen }">
      <div class="modal__close close" @click="onClose"></div>
      <slot></slot>
    </div>
  </div>
</template>
<script>
export default {
  name: 'ModalBase',
  props: {
    fullScreen: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    onClose() {
      this.$emit('close')
    }
  }
}
</script>
<style lang="scss" scoped>
.modal {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;

  &__overlay {
    width: 100%;
    height: 100%;
    position: absolute;
    background: var(--color-main-dark);
    opacity: 0.3;
  }

  &__window {
    position: absolute;
    bottom: 0;
    width: 100%;
    max-height: 95%;
    background: var(--color-light-0);
    border-radius: 12px 12px 0 0;
    z-index: 10;
    overflow: hidden;

    &_fullscreen {
      height: 100%;
    }
  }

  &__close {
    z-index: 100;
    width: 32px;
    height: 32px;
    position: absolute;
    right: 16px;
    top: 16px;
    border-radius: 50%;
    background: no-repeat center center var(--color-light-10) url("../../assets/img/Close-light.svg");
  }
}
</style>