<template>
  <div>
<!--    <button-base-->
<!--        title="Кнопочка спокойная"-->
<!--        @click="clickBtn"-->
<!--    /> <br><br><br>-->
<!--    <button-base-->
<!--        title="Не активная"-->
<!--        @click="clickBtn"-->
<!--        :disabled="true"-->
<!--    /><br><br><br>-->
    <div class="centerImgOne">
      <div class="centerImgOne__content">
        <img class="displayed" src="1450829233933958453855" alt="Картинка">
      </div>
      <h1 class="h1Text">NID</h1>
      <h2 class="h2Text">Meet interesting people
      </h2>

    </div>
    <button-base
        title="Login with Apple ID"
        @click="clickBtn"
        :iconButtonApple="true"
        icon-button-start=""
    />
    <br><br><br>
    <button-base
        title="Other options"
        @click="showModal"
        :icon-button-apple-optical="true"
    />
    <modal-window ref="modal"></modal-window>
    <br><br><br>
<!--    <button-base-->
<!--        title="Войти через Google"-->
<!--        @click="clickBtn"-->
<!--        icon-button-start="G"-->
<!--        :icon-button-google="true"-->
<!--    /><br><br><br>-->
<!--    <InputBase-->
<!--        title="Cellphone Number" presholder="Password"-->
<!--    />-->

    <span class="txtOneDisplay">
      By Logging In, You Agree with
      <a data-link="link.html" class="link q">our terms and conditions</a>
        Terms,Conditions and
      <span data-link="link.html" class="q">Privacy Policy</span>
    </span>
  </div>
  <ModalWindow />


</template>
<script>
  import ButtonBase from '@/components/UI/ButtonBase.vue';
  import ModalWindow from "@/components/ModalWindow";
  // import AuthorizationG from "@/components/AuthorizationG";
  //import InputBase from "@/components/UI/InputBase.vue";




  export default {
    name: 'TestView',
    components: {
      ButtonBase,
      ModalWindow,

      // AuthorizationG
      //InputBase,
    },

    methods: {
      clickBtn() {
        console.log("Нажал")
      },
      showModal () {
        this.$refs.modal.show = true
      }
    }
  }
</script>

<style lang="scss">
  .txtOneDisplay {
    position: absolute;
    width: 343px;
    height: 32px;
    left: 16px;
    top: 600px;
    font-family: 'Helvetica Neue';
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 16px;
    text-align: center;
    color: #979491;
  }

  .centerImgOne {
    width: 90vw;
    height: 70vh;
    margin: auto;
  }
  IMG.displayed {
    position: absolute;
    left: 50%;
    right: 11.54%;
    top: 23.08%;
    bottom: 0%;
  }

  .h1Text {
    position: absolute;
    width: 41px;
    height: 32px;
    left: 168px;
    top: 200px;

    font-family: 'SF Pro Display';
    font-style: normal;
    font-weight: 600;
    font-size: 24px;
    line-height: 32px;
    /* identical to box height, or 133% */

    text-align: center;
    letter-spacing: 0.36px;

    /* Dark */

    color: #362614;

  }
  .h2Text {
    position: absolute;
    width: 311px;
    height: 42px;
    left: 32px;
    top: 230px;

    font-family: 'Helvetica Neue';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 21px;
    /* or 131% */

    text-align: center;
    letter-spacing: -0.32px;

    /* Dark */

    color: #362614;

  }
  .q {
    cursor: pointer;
    color: #E3B687;
  }


</style>