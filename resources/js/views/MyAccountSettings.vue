<template>
  <div class="wrapper page">
    <header class="header">
      <div class="back" @click="this.$router.push('/myaccount')"></div>
      <h1 class="title">Settings</h1>
      <div></div>
    </header>
    <div class="settings">
      <div class="settings__content">
        <div class="setting__wrapper">
          <div class="setting">
            <div class="setting__main">
              <div class="setting__text text-base">About Us</div>
            </div>
            <div class="setting__arrow"></div>
          </div>
          <div class="line"></div>
        </div>
        <div class="setting__wrapper">
          <div class="setting">
            <div class="setting__main">
              <div class="setting__text text-base">Privacy Policy</div>
            </div>
            <div class="setting__arrow"></div>
          </div>
          <div class="line"></div>
        </div>
        <div class="setting__wrapper">
          <div class="setting">
            <div class="setting__main">
              <div class="setting__text text-base">Terms of use</div>
            </div>
            <div class="setting__arrow"></div>
          </div>
          <div class="line"></div>
        </div>
        <div class="setting__account">
          <div class="text-base head">Account</div>
          <div class="text-base head">s********@yandex.ru</div>
        </div>
        <div class="setting__wrapper">
          <div class="setting">
            <div class="setting__main">
              <div class="setting__text text-base">Allow notifications</div>
            </div>
            <div class="setting__checkbox">
              <CheckboxLong />
            </div>
          </div>
          <div class="line"></div>
        </div>
        <div class="setting__wrapper">
          <div class="setting">
            <div class="setting__main">
              <div class="setting__text text-base">Hide profile</div>
            </div>
            <div class="setting__checkbox">
              <CheckboxLong />
            </div>
          </div>
          <div class="line"></div>
        </div>
        <div class="setting__wrapper">
          <div class="setting">
            <div class="setting__main">
              <div class="setting__text text-base">Invisable mode</div>
            </div>
            <div class="setting__checkbox">
              <CheckboxLong />
            </div>
          </div>
          <div class="line"></div>
        </div>
        <div class="setting__wrapper">
          <div class="setting">
            <div class="setting__main">
              <div class="setting__text text-base">Log out</div>
            </div>
            <div class="setting__arrow"></div>
          </div>
          <div class="line"></div>
        </div>
        <div class="setting__wrapper">
          <div class="setting">
            <div class="setting__main">
              <div class="setting__text text-base">Change phone number</div>
            </div>
            <div class="setting__arrow"></div>
          </div>
          <div class="line"></div>
        </div>
        <div class="setting__wrapper">
          <div class="setting">
            <div class="setting__main">
              <div class="setting__text text-base">Change Email</div>
            </div>
            <div class="setting__arrow"></div>
          </div>
          <div class="line"></div>
        </div>
        <div class="setting__wrapper">
          <div class="setting">
            <div class="setting__main">
              <div class="setting__text text-base">Hide verification mark</div>
            </div>
            <div class="setting__checkbox">
              <CheckboxLong />
            </div>
          </div>
          <div class="line"></div>
        </div>
        <div class="setting__wrapper">
          <div class="setting">
            <div class="setting__main">
              <div class="setting__text text-base">Verification</div>
            </div>
            <div class="setting__arrow"></div>
          </div>
          <div class="line"></div>
        </div>
        <div class="delete_acc text-base" @click="this.$router.push('/myaccountdelete')">Delete account</div>
      </div>
    </div>
  </div>
</template>
<script>
import CheckboxLong from "../components/UI/CheckboxLong.vue";

export default {
  name: "MyAccountSettings",
  components: {
    CheckboxLong,
  },
  data() {
    return {};
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

.settings {
  padding: 0 4% 6vh;
  display: flex;
  flex-direction: column;

  &__content {
    text-align: center;
    flex-grow: 2;

    .text-base {
      text-align: left;
      color: var(--color-secondary);
    }

    .delete_acc {
      font-weight: 500;
      font-size: 16px;
      color: var(--color-danger);
      text-align: center;
    }
  }

  .setting {
    position: relative;
    display: flex;
    justify-content: space-between;

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
  }
}

.line {
  border-bottom: 1px solid #e6e4e3;
  margin-top: 13px;
}
</style>


