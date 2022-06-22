<template>
  <label class="checbox">
    <input type="checkbox" class="checkbox__input" />
    <div class="checkbox__custom">
      <div class="checkbox__oval"></div>
    </div>
  </label>
</template>

<script>
export default {
  name: "CheckboxLong",
  props: {},

  data() {
    return {};
  },
};
</script>

<style lang="scss" scoped>
.checkbox {
  position: relative;
  top: -2px;
  margin: 0;

  &__input {
    opacity: 0;
    position: absolute;

    &:checked {
      & + .checkbox__custom {
        background-color: var(--color-main-extra-light);
        border: 1px solid transparent;

        .checkbox__oval {
          left: 21px;
          transition: right 0.7s ease-in-out;
        }
      }
    }
  }

  &__custom {
    width: 51px;
    height: 31px;
    border-radius: 17px;
    background-color: #f2f1f0;
    display: flex;
    justify-content: space-around;
    align-items: center;
    position: relative;
  }

  &__oval {
    background: #ffffff;
    border: 0.5px solid rgba(0, 0, 0, 0.04);
    box-shadow: 0px 3px 8px rgba(0, 0, 0, 0.15), 0px 3px 1px rgba(0, 0, 0, 0.06);
    width: 27px;
    height: 27px;
    border-radius: 50%;
    position: absolute;
    left: 3px;
  }
}
</style>
