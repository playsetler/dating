<template>
  <div class="chatMessages">
    <header class="chatMessages__header">
      <div class="back"></div>
      <div class="sear"></div>
    </header>
    <div class="chatMessages__content">
      <div class="title">Messages</div><br>
      <div class="feed__header">
        <div class="user-message">
          <div class="user-message__header">
            <img class="user-message__photo" src="../assets/img/feed/Liza.jpg" alt="">
            <p class="user-message__user-name">Liza, 21</p>
            <img src="../assets/img/feed/mark.svg" alt="" class="user-message__mark">
          </div>
          <p class="user-message__message">
            Hello everyone! Who wants to go to the park with me?
          </p>
        </div>
        <div class="user-message">
          <div class="user-message__header">
            <img class="user-message__photo" src="../assets/img/feed/Konstantin.jpg" alt="">
            <p class="user-message__user-name">Konstantin, 43</p>
          </div>
          <p class="user-message__message">
            I want to invite a nice girl on a romantic date to...
          </p>
        </div>
      </div>
      <div class="line"></div><br>
      <div class="menuButton">
        <div class="elementOne">
          <ButtonBaseSmall
              :color-background-a="true"
          >
            Messages
          </ButtonBaseSmall><br>
        </div>
        <div class="elementTwo">
          <ButtonBaseSmall
              :color-background-n="true"
          >
            <div @click="this.$router.push('/ChatMatches')">Matches</div>
          </ButtonBaseSmall><br>
        </div>
        <div class="elementThree">
          <ButtonBaseSmall
              :long="true"
          >
            <div @click="this.$router.push('/ChatDates')">Dates</div>
            <div class="figure"></div>
          </ButtonBaseSmall><br>

        </div>
      </div>
      <div class="chatViewMessages">
        <div class="lize">
          <div class="verified"></div>
          <div class="time">16:36</div>
          <div class="lize__content">
            Lise, 21
            <div class="status">
              Hello!
            </div>
          </div>
        </div>

      <div class="line"></div><br>
      <div class="kate" >
        <div class="verified"></div>
        <div class="time">Mo</div>
        <div class="kate__content">
          Kate, 21
          <div class="statusKate">
            <div class="tree"></div>typying
          </div>
        </div>
      </div>
      <div class="line"></div><br>
      <div class="nastya" >
        <div class="time">16:35</div>
        <div class="nastya__content">
          Nastya, 24
          <div class="statusKate">
            Hi!
          </div>
        </div>
      </div>
      <div class="line"></div><br>
      <div class="konstantin">
        <div class="time">16:36</div>
        <div class="konstantin__content">
          Konstantin, 43
          <div class="status">
            Requested a photo
          </div>
        </div>
      </div>
    </div>
    </div>
    <app-menu></app-menu>
  </div>

</template>

<script>
import AppMenu from '../components/AppMenu.vue'
import ButtonBaseSmall from "@/components/UI/ButtonBaseSmall";
export default {
  name: 'ChatMessages',
  components: {
    AppMenu,
    ButtonBaseSmall
  },
  data() {
    return {
    }
  },
}



</script>

<style lang="scss" scoped>

.chatMessages {
  padding-top: 7vh;
  padding-bottom: 6vh;
  display: flex;
  flex-direction: column;
  width: 100%;
  height: calc(102vh);
  background-color: var(--color-light-0);

  .kate {
    width: 70px;
    height: 70px;
    background: no-repeat center center url('../assets/img/profileView/kate.png');

    &__content {
      font-family: 'SF Pro Text';
      font-style: normal;
      font-weight: 500;
      font-size: 16px;
      line-height: 22px;letter-spacing: -0.408px;
      color: #362614;
      margin-left: 70px;
      padding-top: 10px;
      width: 100%;
    }
    .verified {
      position: absolute;
      width: 20px;
      height: 20px;
      background: no-repeat center center url('../assets/img/profileView/Verified.svg');
      margin-left: 134px;
      margin-top: 10px;
    }
    .status {
      font-family: 'Helvetica Neue';
      font-style: normal;
      font-weight: 400;
      font-size: 16px;
      line-height: 21px;
      letter-spacing: -0.32px;
      color: #D89972;
    }
    .statusKate {
      font-family: 'Helvetica Neue';
      font-style: normal;
      font-weight: 400;
      font-size: 16px;
      line-height: 21px;
      letter-spacing: -0.32px;
      color: #D89972;
      margin-left: 25px;

    }
    .time {
      position: absolute;
      font-family: 'Helvetica Neue';
      font-style: normal;
      font-weight: 400;
      font-size: 13px;
      line-height: 16px;
      text-align: right;
      color: #979491;
      margin-left: 300px;
      margin-top: 10px;
    }
    .tree {
      position: absolute;
      width: 20px;
      height: 20px;
      background: no-repeat center center url('../assets/img/profileView/Group182.png');
      margin-left: -25px;
      margin-top: 0px;
    }
  }
  .lize {
    width: 70px;
    height: 70px;
    background: no-repeat center center url('../assets/img/profileView/Ellipse10.png');


    &__content {
      font-family: 'SF Pro Text';
      font-style: normal;
      font-weight: 500;
      font-size: 16px;
      line-height: 22px;letter-spacing: -0.408px;
      color: #362614;
      margin-left: 70px;
      padding-top: 10px;
      width: 100%;
    }
    .verified {
      position: absolute;
      width: 20px;
      height: 20px;
      background: no-repeat center center url('../assets/img/profileView/Verified.svg');
      margin-left: 134px;
      margin-top: 10px;
    }
    .status {
      font-family: 'Helvetica Neue';
      font-style: normal;
      font-weight: 400;
      font-size: 16px;
      line-height: 21px;
      letter-spacing: -0.32px;
      color: #D89972;
    }
    .statusKate {
      font-family: 'Helvetica Neue';
      font-style: normal;
      font-weight: 400;
      font-size: 16px;
      line-height: 21px;
      letter-spacing: -0.32px;
      color: #D89972;
      margin-left: 25px;

    }
    .time {
      position: absolute;
      font-family: 'Helvetica Neue';
      font-style: normal;
      font-weight: 400;
      font-size: 13px;
      line-height: 16px;
      text-align: right;
      color: #979491;
      margin-left: 300px;
      margin-top: 10px;
    }
    .tree {
      position: absolute;
      width: 20px;
      height: 20px;
      background: no-repeat center center url('../assets/img/profileView/Group182.png');
      margin-left: -25px;
      margin-top: 0px;
    }
  }
  .nastya {
    width: 70px;
    height: 70px;
    background: no-repeat center center url('../assets/img/profileView/nastya.png');

    &__content {
      font-family: 'SF Pro Text';
      font-style: normal;
      font-weight: 500;
      font-size: 16px;
      line-height: 22px;letter-spacing: -0.408px;
      color: #362614;
      margin-left: 70px;
      padding-top: 10px;
      width: 100px;
    }
    .verified {
      position: absolute;
      width: 20px;
      height: 20px;
      background: no-repeat center center url('../assets/img/profileView/Verified.svg');
      margin-left: 134px;
      margin-top: 10px;
    }
    .status {
      font-family: 'Helvetica Neue';
      font-style: normal;
      font-weight: 400;
      font-size: 16px;
      line-height: 21px;
      letter-spacing: -0.32px;
      color: #D89972;
    }
    .statusKate {
      font-family: 'Helvetica Neue';
      font-style: normal;
      font-weight: 400;
      font-size: 16px;
      line-height: 21px;
      letter-spacing: -0.32px;
      color: #D89972;
      margin-left: 1px;

    }
    .time {
      position: absolute;
      font-family: 'Helvetica Neue';
      font-style: normal;
      font-weight: 400;
      font-size: 13px;
      line-height: 16px;
      text-align: right;
      color: #979491;
      margin-left: 300px;
      margin-top: 10px;
    }
    .tree {
      position: absolute;
      width: 20px;
      height: 20px;
      background: no-repeat center center url('../assets/img/profileView/Group182.png');
      margin-left: -25px;
      margin-top: 0px;
    }
  }
  .konstantin {
    width: 70px;
    height: 70px;
    background: no-repeat center center url('../assets/img/profileView/Konst.png');


    &__content {
      font-family: 'SF Pro Text';
      font-style: normal;
      font-weight: 500;
      font-size: 16px;
      line-height: 22px;letter-spacing: -0.408px;
      color: #362614;
      margin-left: 70px;
      padding-top: 10px;
      width: 150px;
    }
    .verified {
      position: absolute;
      width: 20px;
      height: 20px;
      background: no-repeat center center url('../assets/img/profileView/Verified.svg');
      margin-left: 134px;
      margin-top: 10px;
    }
    .status {
      font-family: 'Helvetica Neue';
      font-style: normal;
      font-weight: 400;
      font-size: 16px;
      line-height: 21px;
      letter-spacing: -0.32px;
      color: #D89972;
    }
    .statusKate {
      font-family: 'Helvetica Neue';
      font-style: normal;
      font-weight: 400;
      font-size: 16px;
      line-height: 21px;
      letter-spacing: -0.32px;
      color: #D89972;
      margin-left: 25px;

    }
    .time {
      position: absolute;
      font-family: 'Helvetica Neue';
      font-style: normal;
      font-weight: 400;
      font-size: 13px;
      line-height: 16px;
      text-align: right;
      color: #979491;
      margin-left: 300px;
      margin-top: 10px;
    }
    .tree {
      position: absolute;
      width: 20px;
      height: 20px;
      background: no-repeat center center url('../assets/img/profileView/Group182.png');
      margin-left: -25px;
      margin-top: 0px;
    }
  }


  .menuButton {
    display: flex;
    margin: 15px;
    padding: 15px;
    .elementOne {
      display: flex;
      margin: -30px;
    }
    .elementTwo {
      display: flex;
      margin-left: 37px;
      margin-top: -30px;
    }
    .elementThree {
      display: flex;
      margin-left: 80px;
      margin-top: -30px;
    }
    .figure {
      width: 20px;
      height: 20px;
      background: no-repeat center center url('../assets/img/profileView/Group358.png');
      margin-top: -2px;
    }
  }


  .user-message {
    width: 48.5%;
    padding: 13px 9px 13px 13px;
    box-shadow: 0px 4px 24px rgba(78, 60, 33, 0.08);
    border-radius: 12px;
    background-color: var(--color-white);

    &__header {
      display: flex;
      align-items: center;
      margin-bottom: 6px;
    }

    &__user-name {
      font-family: var(--font-medium);
      font-weight: 500;
      font-size: 13px;
      line-height: 16px;
      margin-left: 8px;
    }

    &__mark {
      margin-left: 10px;
    }

    &__message {
      height: 32px;
      overflow: hidden;
      text-overflow: ellipsis;
      font-family: var(--font-regular);
      font-weight: 400;
      font-size: 12px;
      line-height: 16px;
    }
  }

  &__header {
    display: flex;
    justify-content: space-between;
    margin-left: 4.8%;
    margin-right: 5.3%;
    margin-bottom: 6%;

  }
  .sear {
    background: no-repeat center center url('../assets/img/profileView/searchblack.png');
    background-size: contain;
    width: 34px;
    height: 28px;
  }
  .back {
    background: #ffffff;
  }
  &__content {
    text-align: left;
    flex-grow: 2;
    margin: 0 auto;
    width: 92%;
  }
  .line {
    border-bottom: 1px solid #F2F1F0; /* Параметры линии */
  }
  .feed {
    padding-top: 7vh;
    padding-bottom: 6vh;
    display: flex;
    flex-direction: column;

    &__content {
      width: 100%;
      padding: 0 4%;
    }

    &__header {
      display: flex;
      justify-content: space-between;
      margin-bottom: 13px;
    }
  }

}

</style>