<template>
  <div class="instagram page">
    <header class="instagram__header">
      <div class="back" @click="this.$router.push('/myaccountedit')"></div>
      <h1 class="title">Instagram</h1>
      <div></div>
    </header>
    <div class="instagram__content">
      <br />
      <div class="functions">
        <div class="functions__img">
          <img src="../assets/img/myaccount/MyInst.svg" />
        </div>
        <div class="functions__desc text-base">
          <div class="functions__title">Photos from Instagram</div>
          <div class="functions__text text-base">
            Your profile shows 24 recent photos from your Instagram account
          </div>
        </div>
      </div>
      <div class="line"></div>
      <div class="instagram__category" v-show="isShow">
        <p class="text-base head">My account</p>
        <button-base class="instagram__button" @click="linkAccount()">
          Link your account
        </button-base>
      </div>
      <div class="instagram__category" v-show="!isShow">
        <div class="instagram__item">
          <p class="text-base head">My account</p>
          <input-base
            type="text"
            :label="false"
            placeholder="@account"
            @input="onInput($event)"
          >
          </input-base>
        </div>
        <div class="instagram__item">
          <p class="text-base head">Photos</p>
          <div class="instagram__carousel">
            <div class="instagram__photo-wrapper">
              <div class="instagram__row">
                <div class="instagram__photo-mini photo_1"></div>
                <div class="instagram__photo-mini photo_2"></div>
                <div class="instagram__photo-mini photo_3"></div>
                <div class="instagram__photo-mini photo_2"></div>
              </div>
              <div class="instagram__row">
                <div class="instagram__photo-mini photo_1"></div>
                <div class="instagram__photo-mini photo_2"></div>
                <div class="instagram__photo-mini photo_3"></div>
                <div class="instagram__photo-mini photo_2"></div>
              </div>
            </div>
          </div>
        </div>
        <div class="instagram__item">
          <p class="text-base head">Settings</p>
          <div class="instagram__show">
            <span class="text-base">Show in profile</span>
            <div class="instagram__checbox">
              <CheckboxLong/>
            </div>
          </div>
        </div>
        <button-base class="instagram__button unlink" @click="unlinkAccount()">
          Unlink account
        </button-base>
      </div>
    </div>
  </div>
</template>

<script>
import ButtonBase from "../components/UI/ButtonBase.vue";
import InputBase from "../components/UI/InputBase.vue";
import CheckboxLong from "../components/UI/CheckboxLong.vue"

export default {
  name: "MyAccountSubscribe",
  components: {
    ButtonBase,
    InputBase,
    CheckboxLong
  },
  data() {
    return {
      isShow: true,
    };
  },
  methods: {
    linkAccount() {
      this.isShow = false;
    },

    unlinkAccount() {
      this.isShow = true;
    },
  },
};
</script>

<style lang="scss" scoped>
.instagram {
  display: flex;
  flex-direction: column;
  padding: 7vh 4% 6vh;
  height: 100vh;

  &__header {
    display: flex;
    justify-content: space-between;
    margin-bottom: 6%;
    align-items: center;

    .title {
      font-size: 20px;
    }
  }

  &__button {
    &.unlink {
      background: var(--color-danger);
    }
  }

  &__content {
    text-align: left;
    flex-grow: 2;
    margin: 0 auto;

    .text-base {
      &.head {
        margin-bottom: 12px;
        color: var(--color-secondary);
      }
    }
  }

  &__category {
    margin: 26px 0 27px;
        overflow: hidden;
    position: relative;

    .input {
      height: 48px;
      padding: 12px;
    }
  }

  .line {
    border-bottom: 1px solid #f2f1f0;
  }

  &__row {
    display: flex;

    &:nth-child(1) {
      margin-bottom: 8px;
    }
  }

  &__item {
    margin-bottom: 24px;
  }

  &__carousel {
    height: 221px;
  }

  &__photo-wrapper {
    display: flex;
    flex-direction: column;
    position: absolute;
  }

  &__checkbox {
    top: -6px;
    position: relative;
  }

  &__photo-mini {
    width: 104px;
    height: 106px;
    border-radius: 12px;
    margin-right: 7px;

    &.photo_1 {
      background: no-repeat url("../assets/img/firstStartHints/photo_1.jpg");
    }

    &.photo_2 {
      background: no-repeat url("../assets/img/firstStartHints/photo_2.jpg");
    }

    &.photo_3 {
      background: no-repeat url("../assets/img/firstStartHints/photo_3.jpg");
    }
  }

  &__show {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
}

.functions {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 12px;
  margin-bottom: 25px;
  background: var(--color-white);
  box-shadow: 0px 4px 24px rgba(78, 60, 33, 0.08);
  border-radius: 12px;
  padding: 21px 16px 26px;

  &__img {
    margin-bottom: 19px;

    img {
      width: 56px;
      height: 56px;
    }
  }

  &__desc {
    display: flex;
    flex-direction: column;
    text-align: center;
  }

  &__title {
    font-weight: 600;
    font-size: 20px;
    margin-bottom: 9px;
  }

  &__text {
    font-size: 16px;
    color: #393939;
    margin-bottom: 21px;
  }

  &__button {
    background: var(--color-light-10);
    color: var(--color-main-dark);
    font-weight: 400;
    font-size: 16px;
    letter-spacing: -0.32px;
  }
}

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
