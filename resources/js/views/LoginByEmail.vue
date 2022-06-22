<template>
  <div class="cellphone page">
    <header class="cellphone__header">
      <div class="back" @click="this.$router.push('/auth')" ></div>
      <!--      <progress-bar class="cellphone__progress" :complete="61"></progress-bar>-->
      <div class="registration">
        <a href="#"
          class="link"
          @click="$router.push('/register')">
          Registration
        </a>
      </div>
    </header>
    <div class="cellphone__content">
      <h1 class="title">Вход по Email</h1>
      <p class="text-base">
        Введите Email и пароль, указанный при регистрации
      </p>
      <!-- TODO type="phone" -->
      <input-base
          type="text"
          title="Email"
          placeholder="example@example.com"
          @input="onInputEmail($event)">
      </input-base><br>
      <input-base
          type="password"
          title="Password"
          placeholder="Use minimum 8 characters"
          @input="onInputPassword($event)">
      </input-base>
    </div>
    <button-base
        class="cellphone__button"
        :disabled="email === ''"
        @click="login($event)">
      Log Into your Account
    </button-base>
    <div class="cellphone__link">
      <router-link to="" class="link">Login By Cellphone Number</router-link>
    </div>
    <div class="bottom-line"></div>
  </div>
</template>
<script>
// import ProgressBar from '../components/ProgressBar.vue'
import ButtonBase from '../components/UI/ButtonBase.vue'
import InputBase from '../components/UI/InputBase.vue'

export default {
  name: 'LoginByEmail',
  components: {
    // ProgressBar,
    InputBase,
    ButtonBase
  },
  data() {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    onInputEmail(e) {
      this.email = e.value
    },

    onInputPassword(e) {
      this.password = e.value
    },

    login() {
      this.$store.dispatch('login', {
        email: this.email,
        password: this.password
      }).then((response) => {
        this.$router.push('/myaccount');
      });
      
    }
  }
}
</script>
<style lang="scss" scoped>
.cellphone {
  padding-top: 7vh;
  padding-bottom: 6vh;
  display: flex;
  flex-direction: column;

  .registration {
    font-family: 'SF Pro Text';
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 22px;
    /* identical to box height, or 138% */

    text-align: right;
    letter-spacing: -0.408px;

    color: #D89972;

  }

  &__header {
    display: flex;
    justify-content: space-between;
    margin-left: 4.8%;
    margin-right: 5.3%;
    margin-bottom: 9%;
  }

  &__progress {
    width: 66vw;
    margin-top: 6px;
  }

  .close {
    margin-top: 1px;
  }

  &__content {
    text-align: center;
    flex-grow: 2;
    margin: 0 auto;
    width: 92%;

    .title {
      margin-bottom: 8px;
    }

    .text-base {
      margin-bottom: 32px;
    }
  }

  &__button {
    width: 92%;
    margin: 0 auto;
    margin-bottom: 18px;
  }

  &__link {
    width: 100%;
    height: 48px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-top: 1px solid var(--color-divider);
  }
}
</style>