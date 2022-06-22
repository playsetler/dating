<template>
  <modal-base>
    <header class="header">
      <h2 class="title">What are you looking for?</h2>
      <div class="close"></div>
    </header>
    <div class="content">
      <ul class="list">
        <li
          v-for="item of options"
          :key="item.id"
          class="list__option"
          @click="onClick(item.category, item.isChecked, item.id)"
        >
          <label class="checkbox">
            <input
              type="checkbox"
              class="checkbox__input"
              v-model="item.isChecked"
              :value="item.category"
            />
            <div class="checkbox__custom">
              <div class="check_icon"></div>
            </div>
          </label>
          <p class="text-base">{{ item.category }}</p>
          <span v-if="selected === item" class="selected"></span>
        </li>
      </ul>
    </div>
  </modal-base>
</template>
<script>
import ModalBase from "./UI/ModalBase.vue";

export default {
  name: "ModalFilter",
  components: {
    ModalBase,
  },
  data() {
    return {
      options: [
        { id: 1, category: "Serious relationships", isChecked: true },
        { id: 2, category: "Travel company", isChecked: false },
        { id: 3, category: "Dating foreigners", isChecked: false },
        { id: 4, category: "Networking", isChecked: false },
        { id: 5, category: "Communication or friendship", isChecked: false },
        { id: 6, category: "Content, material support", isChecked: false },
        { id: 7, category: "Dating 50+", isChecked: false },
        { id: 8, category: "Unorthodox orientation", isChecked: false },
      ],
      selected: "",
    };
  },
  methods: {
    onClick(category, isChecked, id) {
      this.allCheckedsFalse();
      this.selected = category;
      this.$emit("selectFilter", { selected: category });
      this.options[id - 1].isChecked = !isChecked;
      console.log(this.options);
    },

    allCheckedsFalse() {
      return [...this.options].map((item) => (item.isChecked = false));
    },
  },
};
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
  background: no-repeat center center var(--color-light-10)
    url("../assets/img/Close-light.svg");
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
      background: no-repeat center center url("../assets/img/check.svg");
      background-size: contain;
      margin-right: 4px;
    }
  }
}

.checkbox {
  position: relative;
  top: -2px;
  margin-right: 12px;

  &__custom {
    width: 20px;
    height: 20px;
    border: 1px solid #e6e4e3;
    border-radius: 50%;
    background-color: transparent;
    display: flex;
    justify-content: space-around;
    align-items: center;
  }

  &__input {
    opacity: 0;
    position: absolute;

    &:checked + .checkbox__custom{
      background-color: #E3B687;
      border: 1px solid transparent;
    }
  }
}
</style>