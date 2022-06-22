<template>
  <div v-if="show" class="modal-shadow" @click.self="closeModal">
    <div class="modal">
      <slot name="title">
        <div class="modal-close" @click="closeModal">&#10006;</div>
        <h3 class="modal-title">Remember!</h3>
      </slot>
      <slot name="body">
        <div class="line"></div>
        <div class="textCenter">Be respectful to everyone, don't overstep anyone's
          boundaries. Keep in mind that people can always
          complain about you. After five complaints, your account will be blocked.</div><br>
        <AuthButtonBase class="buttonDown">
          Good
        </AuthButtonBase><br>
        <div class="textButtonDown">
          Terms of use
        </div>

      </slot>
      <slot name="footer">
        <div class="modal-footer">
        </div>
      </slot>
    </div>
  </div>
</template>

<script>
import ButtonBase from '../components/UI/AuthButtonBase.vue'
import AuthButtonBase from "@/components/UI/AuthButtonBase";


export default {
  name: "ChatFirstRun",
  components: {AuthButtonBase},
  data: function () {
    return {
      show: true,
      ButtonBase
    }
  },
  methods: {
    closeModal () {
      this.show = false
    },
    buttonReplacement() {
      this.iconButtonApple="false"
      console.log("dsfgsdfgsdfg")
      this.show = false
    }
  }
}
</script>

<style lang="scss" scoped >
.modal-shadow {
  position: absolute;
  top: 0;
  left: 0;
  min-height: 100%;
  width: 100%;
  background: rgba(0, 0, 0, 0.39);

  .textCenter {

    font-family: 'Helvetica Neue';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 21px;
    text-align: center;
    letter-spacing: -0.32px;
    color: #362614;
    min-height: 70%;
    display: grid;
    align-items: flex-end;
  }

  .modal {
    background:#FCFCFC;
    border-radius: 8px 8px 0px 0px;
    padding: 15px;
    min-width: 100%;
    max-width: 100%;
    height: 90vh;
    position: absolute;
    top: 92%;
    left: 50%;
    transform: translate(-50%, -91%);
    z-index: 99999999;



    .textButtonDown {
      font-family: 'Helvetica Neue';
      font-style: normal;
      font-weight: 400;
      font-size: 16px;
      line-height: 21px;
      text-align: center;
      letter-spacing: -0.32px;
      color: #979491;
      top: 20px;
    }


    &-close {
      border-radius: 50%;
      color: #979491;
      background: #F2F1F0;
      display: flex;
      align-items: center;
      justify-content: center;
      position: absolute;
      top: 7px;
      right: 7px;
      width: 30px;
      height: 30px;
      cursor: pointer;
    }

    &-title {
      font-family: 'SF Pro Display';
      font-style: normal;
      font-weight: 600;
      font-size: 20px;
      line-height: 24px;
      padding: 0 0 30px 10px;
      letter-spacing: 0.38px;
      color: #362614;

    }

    &-content {
      font-family: "Helvetica Neue";
      font-style: normal;
      font-weight: 400;
      font-size: 16px;
      line-height: 21px;
      padding: 17px;
      letter-spacing: -0.32px;
      color: #362614;
      margin-left: 33px;

    }

    &-footer {
      &__button {
        background-color: #0971c7;
        color: #fff;
        border: none;
        text-align: center;
        padding: 8px;
        font-size: 17px;
        font-weight: 500;
        border-radius: 8px;
        min-width: 150px;
      }
    }
  }
}


.appleLogo {
  position: absolute;
  z-index: 99999999;
  width: 41px;
  height: 49px;
  background: no-repeat center center url('../assets/img/auth/Apple-ID.svg');
  background-size: 25px;
  margin-top: -15px;
  margin-left: -51px;
}

.appleLogoF {
  position: absolute;
  z-index: 99999999;
  width: 41px;
  height: 49px;
  background: no-repeat center center url('../assets/img/auth/Facebook.svg');
  background-size: 25px;
  margin-top: -15px;
  margin-left: -51px;
}
.appleLogoM {
  position: absolute;
  z-index: 99999999;
  width: 41px;
  height: 49px;
  background: no-repeat center center url('../assets/img/auth/Mail.svg');
  background-size: 25px;
  margin-top: -15px;
  margin-left: -51px;
}
.appleLogoP {
  position: absolute;
  z-index: 99999999;
  width: 41px;
  height: 49px;
  background: no-repeat center center url('../assets/img/auth/Phone.svg');
  background-size: 25px;
  margin-top: -15px;
  margin-left: -51px;
}
.appleLogoR {
  position: absolute;
  z-index: 99999999;
  width: 41px;
  height: 49px;
  background: no-repeat center center url('../assets/img/auth/Register.svg');
  background-size: 25px;
  margin-top: -15px;
  margin-left: -51px;
}

.line {
  border-bottom: 1px solid #F2F1F0; /* Параметры линии */
}
</style>