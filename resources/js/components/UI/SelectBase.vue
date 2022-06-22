<template>
  <div
    class="select"
    :class="{ no_title: !label, personal: personal, heigth_approve: selected !== '' }"
  >
    <div class="select__label" v-show="label" :class="{ question: question }">
      {{ title }}
    </div>
    <div
      class="select__field text-base"
      :class="{ placeholder: selected === '', no_title: !label }"
    >
      {{ selected === "" ? placeholder : selected }}
    </div>
    <div class="select__arrow" :class="{ no_title: !label, hide: question }"></div>
    <div :class="{approve: approve}"  v-show="selected !== '' && approve">
      <div class="approve__time"></div>
      Your question is being moderated, it will be added after its approval
    </div>
  </div>
</template>
<script>
export default {
  name: "SelectBase",
  data() {
    return {

    }
  },
  props: {
    title: {
      type: String,
      required: true,
    },
    placeholder: {
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
    personal: {
      type: Boolean,
      default: true,
    },
    question: {
      type: Boolean,
      default: false,
    },
    approve: {
      type: Boolean,
      default: false,
    },
  },
};
</script>
<style lang="scss" scoped>
.select {
  position: relative;
  width: 100%;
  height: 60px;
  padding: 8px 12px;
  background: var(--color-light-10);
  border-radius: 12px;
  text-align: left;

  &.no_title {
    height: 48px;
    padding: 15px 12px;
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

    &.placeholder {
      color: var(--color-tretiary);
    }

    &.text-base {
      &.no_title {
        font-size: 16px;
      }
    }
  }

  &__arrow {
    background: no-repeat center center url("../../assets/img/Arrow-right.svg");
    background-size: contain;
    width: 8px;
    height: 13px;
    position: absolute;
    right: 20px;
    top: 23.33px;

    &.no_title {
      top: 18.33px;
    }

    &.hide {
      display: none;
    }
  }
}

.question {
  margin-bottom: 10px;
}

.approve {
  font-size: 12px;
  color: var(--color-main-light);
  display: flex;
  margin-top: 7px;

  &__time {
    background: no-repeat center center
      url("../../assets/img/myaccount/ApproveTime.svg");
    background-size: contain;
    width: 16px;
    height: 16px;
    margin-right: 6px;
  }
}

.heigth_approve {
  height: auto !important;
}
</style>