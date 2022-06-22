<template>
  <div class='button' :class="className">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'AuthButtonBase',
  props: {
    disabled: {
      type: Boolean,
      default: false
    },
    error: {
      type:Boolean,
      default: false
    },

    colorBackgroundA: {
      type: Boolean,
      default: false
    },

    colorBackgroundG: {
      type: Boolean,
      default: false
    }
  },

  data(){
    return {}
  },

  methods: {
    click(){
      this.$emit('click')
    }
  },
  computed: {
    className(){
      return {
        'disabled': this.disabled,
        'ButtonBase__error': this.error,
        'ButtonBase__success': this.success,
        'colorBackgroundA': this.colorBackgroundA,
        'colorBackgroundG': this.colorBackgroundG,

      }
    }
  },
}
</script>

<style lang="scss" scoped>
.button {
  width: 100%;
  height: 48px;
  display: flex;
  justify-content: center;
  background: linear-gradient(0deg, var(--color-main-extra-light), var(--color-main-extra-light)), var(--color-main-light);
  border-radius: 12px;
  padding: 13px 0;
  cursor: pointer;
  font-family: var(--font-medium);
  color: var(--color-white);

  &.disabled {
    pointer-events: none;
    background: var(--color-main-extra-light);
    opacity: .5;
  }

  &__error {
    background: lightcoral;
  }

  &__success {
    background: green;
    opacity: .6
  }
  &.colorBackgroundA {
    background: black;
  }
  &.colorBackgroundG {
    background: var(--color-light-10);
    color: var(--color-black);
  }
}

</style>
