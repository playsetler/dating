<template>
  <div class="radio">
    <div
      v-for="val in values"
      :key="val"
      class="radio__btn">

    </div>
    <button-base
      v-for="val in values"
      :key="val"
      class="radio__button"
      :class="{ selected: selected === val }"
      @click="onClick(val)">
      {{ val }}
    </button-base>
  </div>
</template>
<script>
import ButtonBase from './UI/ButtonBase.vue'
export default {
  components: { ButtonBase },
  name: 'RadioBase',
  props: {
    values: {
      type: Array,
      required: true
    }
  },
  data() {
    return {
      selected: ''
    }
  },
  methods: {
    onClick(value) {
      this.selected = value
      this.$emit('select', { selected: value })
    }
  }
}
</script>
<style lang="scss" scoped>
.radio {
  width: 100%;
  display: flex;

  &__button {
    border-radius: 97px;
    background: var(--color-light-10);
    color: var(--color-main-dark);
    margin-right: 9px;

    &:last-child {
      margin-right: 0;
    }

    &.selected {
      background: linear-gradient(0deg, var(--color-main-extra-light), var(--color-main-extra-light)), var(--color-main-light);
      color: var(--color-white);
    }
  }
}
</style>