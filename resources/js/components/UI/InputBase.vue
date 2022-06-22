<template>
  <div
    class="input"
    :class="{ textarea: area, bckgrndNone: bckgrndNone, }"
  >
    <div class="input__label" v-show="label">{{ title }}</div>
    <div v-if="type === 'phone'" class="text-base input__phone">
      <span class="text-base input__phone-code">RU +7</span>
      <input
        class="input__field"
        type="text"
        :placeholder="placeholder"
        :value="value"
        @input.prevent="onInput($event)"
      />
    </div>
    <input
      v-if="type === 'text'"
      class="input__field"
      :class="{ no_label: !label }"
      type="text"
      :placeholder="placeholder"
      :value="value"
      @input.prevent="onInput($event)"
    />
    <textarea
      class="input__field text-base"
      v-if="type === 'textarea'"
      :class="{ no_label: !label }"
      :placeholder="placeholder"
      :value="value"
      @input.prevent="onInput"
    >
    </textarea>
    <input
      v-if="type === 'password'"
      class="input__field"
      type="password"
      :placeholder="placeholder"
      :value="value"
      @input.prevent="onInput"
    />
    <input
      v-if="type === 'select'"
      disabled
      :placeholder="placeholder"
      class="input__field text-base plaseholder-as-text"
    />
    <div v-if="type === 'select'" class="input__arrow"></div>
    <div class="counter text-base" v-show="bckgrndNone">
      {{ 160 - value.length }}
    </div>
  </div>
</template>

<script>
export default {
  name: "InputBase",
  props: {
    title: {
      type: String,
      required: false,
    },
    placeholder: {
      type: String,
      required: true,
    },
    type: {
      // text, date, select, phone, email, password
      type: String,
      required: true,
    },
    selected: {
      type: String,
      default: "",
    },
    label: {
      type: Boolean,
      default: true,
    },
    area: {
      type: Boolean,
      default: false,
    },
    bckgrndNone: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      value: "",
      approve: false,
    };
  },
  computed: {
    className() {
      return this.selected === "" ? "placeholder-as-text" : "";
    },
  },
  methods: {
    onInput(event) {
      event.preventDefault();
      event.stopPropagation();
      this.$emit("input", { value: event.target.value });
    },
  },
};
</script>

<style lang="scss">
textarea {
  height: 70px;
  resize: none;
}

.counter {
  font-weight: 400;
  font-size: 10px;
  color: var(--color-secondary);
  position: absolute;
  right: -148px;
  top: 16px;
}

.input {
  width: 100%;
  height: 60px;
  padding: 8px 12px;
  background: var(--color-light-10);
  border-radius: 12px;
  text-align: left;

  &.bckgrndNone {
    height: 24px;
    padding: 0;
    background: none;

    .input__field {
      background: none;
    }
  }

  &__label {
    font-family: var(--font-regular);
    font-weight: 400;
    font-size: 12px;
    line-height: 16px;
    color: var(--color-secondary);
    margin-bottom: 6px;
  }

  &__field {
    font-size: 18px;
    line-height: 24px;
    width: 100%;
    background: var(--color-light-10);
    border: none;

    &.no_label {
      font-size: 16px;
    }

    &::placeholder {
      color: var(--color-tretiary);
    }

    &:focus-visible {
      outline: none;
    }
  }

  &__phone {
    width: 100%;

    &-code {
      font-size: 18px;
      line-height: 24px;
      color: var(--color-main-light);

      &::after {
        content: "";
        display: inline-block;
        vertical-align: sub;
        margin-left: 7px;
        margin-right: 8px;
        width: 1px;
        height: 20px;
        background-color: var(--color-secondary);
        opacity: 0.3;
      }
    }

    .input__field {
      width: calc(100% - 66px);
    }
  }
}
</style>