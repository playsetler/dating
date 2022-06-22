<template>
  <modal-base>
    <header class="header">
      <h2 class="title">What are you looking for?</h2>
      <div class="close"></div>
    </header>
    <div class="line"></div>
    <p class="answers text-base">Choose one answer</p>
    <div class="content">
      <div
        class="answers__wrapper"
        v-for="item in options"
        :key="item"
        @click="onClick(item)"
      >
        <div class="answer">
          <label
            class="radio"
            @click="
              () => {
                isDisable = false;
              }
            "
          >
            <input type="radio" name="reason" class="radio__input" />
            <div class="radio__custom"></div>
            <div class="answer__main">
              <div class="answer__text text-base">{{ item }}</div>
            </div>
          </label>
        </div>
        <div class="line"></div>
      </div>
      <div class="answers__wrapper write" @click="this.$router.push('/myaccountaddquestionsanswer')">
          <div class="answer">
            <label class="radio" @click="() => {isDisable = false}">
              <input type="radio" name="reason" class="radio__input" />
              <div class="radio__custom">
              </div>
              <div class="answer__main">
                <input-base
                  type="text"
                  :label="false"
                  placeholder="Write your answer..."
                  :bckgrndNone="true"
                >
               </input-base>
              </div>
            </label>
          </div>
          <div class="line"></div>
        </div>
      
    </div>
    <button-base class="answers__button" :disabled="isDisable" @click="onSave">
      Save
    </button-base>
  </modal-base>
</template>
<script>
import ModalBase from "./UI/ModalBase.vue";
import ButtonBase from "../components/UI/ButtonBase.vue";
import InputBase from "../components/UI/InputBase.vue";

export default {
  name: "ModalWelcome",
  components: {
    ModalBase,
    ButtonBase,
    InputBase
  },
  data() {
    return {
      options: [
        "Family idyll",
        "Career",
        "Enjoy your life",
        "Creative development",
        "Money and status",
        "Regular travel around the world",
      ],
      select: [],
      selected: "",
    };
  },
  methods: {
    onClick(option) {
      this.select[0] = option;
      console.log(this.select);
    },

    onSave() {
      this.$emit("select", { selected: this.select[0] });
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
  }
}

.content {
  padding: 0 4% 6vh;
}

.content {
  flex-grow: 2;
}

.radio {
  position: relative;
  top: -2px;
  margin-right: 12px;
  display: flex;

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

    &:checked + .radio__custom {
      border: 5px solid var(--color-danger);
    }
  }
}

.line {
  border-bottom: 1px solid #e6e4e3;
  margin-top: 13px;
}

.answers {
  margin: 16px 0 32px;
  text-align: left;
  padding: 0 16px;
  color: var(--color-secondary);
}

.answer {
  position: relative;
  display: flex;
  justify-content: flex-start;
  margin-top: 16px;

  &__wrapper {
    margin-bottom: 21px;
  }

  &__text {
    color: var(--color-main-dark);
  }

  &__account {
    display: flex;
    justify-content: space-between;
    margin-bottom: 20px;
  }

  &__main {
    margin-left: 12px;
    position: relative;
    top: 2px;
  }
}
</style>