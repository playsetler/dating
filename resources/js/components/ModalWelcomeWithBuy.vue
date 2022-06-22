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
            :key="item.title"
            class="list__option option"
            :class="{ disabled: !item.available }"
            @click="onClick(item)">
          <span class="option__icon" :class="{ 'selected': selected === item.title }"></span>
          <p class="text-base">{{ item.title }}</p>
          <span v-if="!item.available" class="option__buy">Купить</span>
        </li>
      </ul>
    </div>
  </modal-base>
</template>
<script>
import ModalBase from './UI/ModalBase.vue'

export default {
  name: 'ModalWelcomeWithBuy',
  components: {
    ModalBase
  },
  data() {
    return {
      options: [
        { title: 'Serious relationships', available: true },
        { title: 'Travel company', available: true },
        { title: 'Dating foreigners', available: true },
        { title: 'Networking', available: true },
        { title: 'Communication or friendship', available: false },
        { title: 'Content, material support', available: false },
        { title: 'Dating 50+', available: false },
        { title: 'Unorthodox orientation', available: false }
      ],
      selected: ''
    }
  },
  methods: {
    onClick(option) {
      if (option.available) this.selected = option.title
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
  }
}

.option {

  .text-base {
    flex-grow: 2;
  }

  &.disabled {
    .text-base {
      color: var(--color-secondary);
    }
  }

  &__icon {
    border: 1px solid var(--color-divider);
    border-radius: 50%;
    width: 22px;
    height: 22px;
    margin-right: 12px;

    &.selected {
      border-color: var(--color-main-light);
      background: no-repeat center center var(--color-main-light) url('../assets/img/Checked.svg');
    }
  }

  &__buy {
    border-radius: 76px;
    background-color: var(--color-light-10);
    font-family: var(--font-medium);
    font-size: 13px;
    letter-spacing: -0.08px;
    line-height: 28px;
    padding: 0 12px;
  }
}
</style>