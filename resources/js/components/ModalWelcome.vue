<template>
  <modal-base>
    <header class="header">
      <h2 class="title">What are you looking for?</h2>
      <div class="close"></div>
    </header>
    <div class="content">
      <ul class="list">
        <li
          v-for="item in options"
          :key="item"
          class="list__option"
          @click="onClick(item)">
          <p class="text-base">{{ item }}</p>
          <span v-if="selected === item" class="selected"></span>
        </li>
      </ul>
    </div>
  </modal-base>
</template>
<script>
import ModalBase from './UI/ModalBase.vue'

export default {
  name: 'ModalWelcome',
  components: {
    ModalBase
  },
  data() {
    return {
      options: [
        'Serious relationships',
        'Travel company',
        'Dating foreigners',
        'Networking',
        'Communication or friendship',
        'Content, material support',
        'Dating 50+',
        'Unorthodox orientation'
      ],
      selected: ''
    }
  },
  methods: {
    onClick(option) {
      this.selected = option
      this.$emit('select', { selected: option })
    }
  }
}
</script>
<style lang="scss" scoped>
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px;


  .title {
    font-size: 20px;
    line-height: 24px;
  }
}

.close {
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background: no-repeat center center var(--color-light-10) url('../assets/img/Close-light.svg');
}

.list {
  background: var(--color-white);
  padding: 0 16px;
  margin-bottom: 20vh;

  &__option {
    height: 56px;
    border-bottom: 1px solid var(--color-divider);
    display: flex;
    justify-content: space-between;
    align-items: center;

    &:last-child {
      border: none;
    }

    .selected {
      width: 15px;
      height: 15px;
      background: no-repeat center center url('../assets/img/check.svg');
      background-size: contain;
      margin-right: 4px;
    }
  }
}
</style>