<template>
  <div class="wrapper page">
    <header class="header">
      <div class="back" @click="this.$router.push('/myaccountdelete')"></div>
      <h1 class="title">Delete your account</h1>
      <div></div>
    </header>
    <div class="reasons">
      <div class="reasons__content">
        <div class="reason__wrapper">
          <div class="reason">
            <label class="radio" @click="() => {isDisable = false}">
              <input type="radio" name="reason" class="radio__input" />
              <div class="radio__custom">
              </div>
              <div class="reason__main">
              <div class="reason__text text-base">I need a break from NiD</div>
            </div>
            </label>
          </div>
          <div class="line"></div>
        </div>
        <div class="reason__wrapper">
          <div class="reason">
            <label class="radio" @click="() => {isDisable = false}">
              <input type="radio" name="reason" class="radio__input" />
              <div class="radio__custom">
              </div>
              <div class="reason__main">
              <div class="reason__text text-base">I want to start from scratch</div>
            </div>
            </label>
          </div>
          <div class="line"></div>
        </div>
        <div class="reason__wrapper">
          <div class="reason">
            <label class="radio" @click="() => {isDisable = false}">
              <input type="radio" name="reason" class="radio__input" />
              <div class="radio__custom">
              </div>
              <div class="reason__main">
              <div class="reason__text text-base">I have a technical problem</div>
              </div>
            </label>
          </div>
          <div class="line"></div>
        </div>
        <div class="reason__wrapper">
          <div class="reason">
            <label class="radio" @click="() => {isDisable = false}">
              <input type="radio" name="reason" class="radio__input" />
              <div class="radio__custom">
              </div>
              <div class="reason__main">
                <div class="reason__text text-base">I don’t like NiD</div>
              </div>
            </label>
          </div>
          <div class="line"></div>
        </div>
        <div class="reason__wrapper">
          <div class="reason">
            <label class="radio" @click="() => {isDisable = false}">
              <input type="radio" name="reason" class="radio__input" />
              <div class="radio__custom">
              </div>
              <div class="reason__main">
              <div class="reason__text text-base">I have a new partner</div>
            </div>
            </label>
          </div>
          <div class="line"></div>
        </div>
        <div class="reason__wrapper">
          <div class="reason">
            <label class="radio" @click="() => {isDisable = false}">
              <input type="radio" name="reason" class="radio__input" />
              <div class="radio__custom">
              </div>
              <div class="reason__main">
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
      <button-base
        class="reasons__button"
        @click="this.$router.push('/myaccountconfirmdelete')"
        :disabled="isDisable"
      >
        Delete my account
      </button-base>
    </div>
  </div>
</template>
<script>
import ButtonBase from "../components/UI/ButtonBase.vue";
import InputBase from "../components/UI/InputBase.vue";

export default {
  name: "MyAccountReasonDelete",
  components: {
    ButtonBase,
    InputBase
  },
  data() {
    return {
      isDisable: true,
      val: ''
    };
  },
  methods: {},
};
</script>

<style lang="scss" scoped>
.page {
  height: 100%;
}

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 6vh 5.3% 6px;
  border-bottom: 2px solid var(--color-divider);
  margin-bottom: 27px;

  .text-base {
    font-size: 16px;
    color: #d89972;
  }

  .title {
    font-weight: 600;
    font-size: 20px;
  }
}

.button.disabled {
  background: var(--color-danger);
}

.reasons {
  padding: 0 4% 6vh;
  display: flex;
  flex-direction: column;
  height: calc(100vh - 91px);

  &__content {
    text-align: center;
    flex-grow: 2;

    .text-base {
      text-align: left;
      color: var(--color-secondary);
    }
  }

  &__button {
    background: var(--color-danger);
  }

  .reason {
    position: relative;
    display: flex;
    justify-content: flex-start;

    &__wrapper {
      margin-bottom: 21px;
    }

    &__arrow {
      background: no-repeat center center url("../assets/img/Arrow-right.svg");
      background-size: contain;
      width: 8px;
      height: 13px;
      position: absolute;
      right: 0;
      top: 1px;
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
    }
  }
}

.line {
  border-bottom: 1px solid #e6e4e3;
  margin-top: 13px;
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
</style>


