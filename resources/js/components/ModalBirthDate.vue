<template>
  <modal-base>
    <header class="header">
      <h2 class="title">BirthDate</h2>
      <div class="close"></div>
    </header>
    <div class="calendar">
      <div class="line"></div>
      <ul class="list">
        <li
          v-for="item in options"
          :key="item"
          class="list__option"
          @click="onClick(item)"
        >
          <p class="text-base">{{ item }}</p>
          <span v-if="selected === item" class="selected"></span>
        </li>
      </ul>
      <div class="calendar__img"></div>
      <input type="date" />
      <div class="line"></div>
      <div class="show">
        <span class="text-base">Hide a question from your profile</span>
        <div class="date_checbox">
          <CheckboxLong />
        </div>
      </div>
      <br />
      <div class="calendar__buttons">
        <button-base class="calendar__cancel">Cancel</button-base>
        <button-base class="calendar__apply">Apply</button-base>
      </div>
    </div>
  </modal-base>
</template>
<script>
import ModalBase from "./UI/ModalBase.vue";
import CheckboxLong from "./UI/CheckboxLong.vue";
import ButtonBase from "../components/UI/ButtonBase.vue";

export default {
  name: "ModalBirthDate",
  components: {
    ModalBase,
    CheckboxLong,
    ButtonBase,
  },
  data() {
    return {
      options: [],
      selected: "",
    };
  },
  methods: {
    onClick(option) {
      this.selected = option;
      this.$emit("select", { selected: option });
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

.calendar {
  padding: 0 16px;
  position: relative;

  &__buttons {
    display: flex;
  }

  &__cancel {
    background: var(--color-light-10);
    color: var(--color-main-dark);
    margin-right: 9px;
  }

  &__img {
    background: no-repeat center center
      url('../assets/img/myaccount/Calendar.png');
    position: absolute;
    width: 100%;
    height: 100%;
    top: -68px;
    left: -7px;
  }
}

.list {
  background: var(--color-white);
  margin-bottom: 30vh;
  background: var(--color-light-0);

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

.line {
  border-bottom: 1px solid #e6e4e3;
}

.show {
  display: flex;
  justify-content: space-between;
  padding: 12px 0;
  align-items: center;
}
</style>