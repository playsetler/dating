<template>
  <div class="auth page">
    <div class="auth__content">
      <div class="auth__logo"></div>
      <h1 class="title">NiD</h1>
      <p class="text-base">Meet interesting people</p>
    </div>

    <button-base
      class="welcome__button"
      :colorBackgroundA="true"
      :disabled="false">
      <a class="appleLogo"></a>
    Login with Apple ID

  </button-base><br>

    <button-base
        class="welcome__button"
        @click="showModal"
        :colorBackgroundG="true"
        :disabled="false">
      Other options
    </button-base><br>
    <modal-window ref="modal"></modal-window>


    <span class="textPolicy">
      By Logging In, You Agree with
      <a data-link="link.html" class="link q">our terms and conditions</a>
        Terms,Conditions and
      <span data-link="link.html" class="q">Privacy Policy</span>
    </span>
    <div class="bottom-line" data-v-71c87875=""></div>

  </div>
</template>
<script>
import ButtonBase from '../components/UI/AuthButtonBase.vue'
import ModalWindow from "../components/ModalWindowG";

export default {
  name: 'AuthView',
  components: {
    ButtonBase,
    ModalWindow
  },
  data() {
    return {
      isModalShown: false,
      category: ''
    }
  },
  methods: {
    onSelect(e) {
      this.category = e.selected
      this.isModalShown = false
    },
    showModal () {
      this.$refs.modal.show = true
    }
  }
}
</script>
<style lang="scss" scoped>
.auth {
  padding: 23vh 4% 5vh;
  display: flex;
  flex-direction: column;

  &__info {
    text-align: center;
  }

  &__logo {
    width: 80px;
    height: 80px;
    background: no-repeat center center url('../assets/img/auth/App-Icon.svg');
    background-size: contain;
    margin: 0 auto 24px;

  }

  .appleLogo {
    width: 30px;
    height: 18px;
    background: no-repeat center center url('../assets/img/auth/Apple-ID.svg');
    background-size: 35px;

  }

  &__content {
    text-align: center;
    flex-grow: 2;
  }

  .title {
    margin-bottom: 8px;
  }

  .textPolicy {
    top: 50%;
    text-align: center;
    font-family: 'Helvetica Neue';
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 16px;
    text-align: center;
    color: #979491;
  }
}
</style>