<template>
  <div class="main">
    <div class="back"></div>
    <div class="nameUser">
      Kate, 21
      <div class="status"><div class="tree"></div>typing</div>
    </div>
    <div class="sear"></div>
  </div>
  <div class="line"></div><br>
  <div class="contentChat">
    <div class="pic"></div>
    <div class="textStatus">
      Kate sent you a reaction!
    </div>
    <div class="textData">
      Today, 16:35
    </div><br>
    <div class="die">
      <div class="dieContent">
        I’m a John from New York City!
        Here is my photo <div class="time">16:35<div class="commas"></div></div>
      </div>
    </div>
  </div>
  <div class="line"></div><br>
  <div class="blockDown">
    <input class="message" placeholder="Message" />
  </div>
</template>

<script>

</script>

<style lang="scss" scoped>
.home {
  background: #FCFCFC;
}
  .main {
    display: flex;
    width: 100vw;
    padding: 35px 15px 15px 15px;
    background: #FCFCFC;

    .status {
      display: flex;
      font-family: 'Helvetica Neue';
      font-style: normal;
      font-weight: 400;
      font-size: 11px;
      line-height: 12px;
      letter-spacing: -0.078px;
      color:#D89972;
      margin-left: 40%;

      .tree {
        width: 32px;
        height: 14px;
        background: no-repeat center center url('../assets/img/profileView/Group182.png');
        text-align: center;
      }


    }


    .back {
      background: no-repeat center center url('../assets/img/Back.svg');
      background-size: contain;
      width: 16px;
      height: 40px;
    }

    .sear {
      background: no-repeat right center url('../assets/img/profileView/kate.png');
      background-size: contain;
      width: 43px;
      height: 43px;
    }
    .nameUser {
      width: 90%;
      font-family: 'SF Pro Text';
      font-style: normal;
      font-weight: 500;
      font-size: 16px;
      line-height: 22px;
      text-align: center;
      letter-spacing: -0.408px;
      color: #362614;
    }
  }
  .line {
    border-bottom: 1px solid #F2F1F0; /* Параметры линии */
  }

    input {
      display:block;
      width:80%;
      padding:10px;
      border-radius:10px;
      border: 1px solid #eee;
      transition: .3s border-color;
      position: relative;
      margin-left:10%;
      background: #F2F1F0;



    }
.blockDown {
  display: flex;
  width: 90%;
  height: 30px;
  background: no-repeat right center url('../assets/img/profileView/Group112.png');

}

  .contentChat {

    min-height: calc(80vh - 80px);

  }
.pic {
  width: 100%;
  height: 72px;
  background: no-repeat center center url('../assets/img/profileView/MessageR.png');
  text-align: center;
}
.textStatus {
  font-family: 'Helvetica Neue';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 21px;
  text-align: center;
  letter-spacing: -0.32px;
  color: #362614;

}
.textData {
  font-family: 'Helvetica Neue';
  font-style: normal;
  font-weight: 400;
  font-size: 11px;
  line-height: 16px;
  text-align: center;
  letter-spacing: -0.078px;
  color: #979491;

}
.die {
  width: 255px;
  height: 53px;
  margin-left: 30%;
  background: linear-gradient(0deg, #F2E0D0, #F2E0D0), #F2E0D0;
  border-radius: 16px 16px 6px 16px;

  .dieContent {
    width: 90%;
    height: 90%;
    margin-left: 10px;
    padding-top: 5px;
    justify-content: center;
    font-family: 'Helvetica Neue';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 21px;
    letter-spacing: -0.32px;
    color: #362614;

    .time {
      font-size: 11px;
      line-height: 16px;
      text-align: right;
      letter-spacing: -0.078px;
      color: #362614;
      margin-top: -10px;
    }
    .commas {
      width: 10px;
      height: 10px;
      background: no-repeat center center url('../assets/img/profileView/Group107.png');
      margin-top: -14px;
      margin-left: 232px;

    }
  }
}


</style>