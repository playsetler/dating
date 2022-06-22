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
    <div class="die">
      <div class="dieContent">
        Hi! How are you? <div class="time">16:35<div class="commas"></div></div>
      </div>
    </div><br>
    <div class="dieLeft">
      <div class="dieContent">
        Hello, I am fine! <div class="time">16:35<div class="commas"></div></div>
      </div>
    </div><br>
    <div class="dieHome">
      <div class="dieContent">
        I’m a John from New York City!
        Here is my photo <div class="time">16:35<div class="commas"></div></div>
      </div>
    </div>
    <div class="photoMen"></div>
    <div class="die">
      <div class="dieContent">
        Let’s go for a date today? <div class="time">16:35<div class="commas"></div></div>
      </div>
    </div><br>
    <div class="dieHomeBig">
      <div class="iconOrange"><div class="frame"></div>
        <div class="textFrameUp">Date</div>
        <div class="textFrameUpData">5 June, 8:00 PM</div></div>
      <div class="dieContent">
        Cinema Star, Marvel, Amazing Spider Man
        <div class="time">16:35<div class="commas"></div></div><br>
        <div class="buttonDown">
          <div class="buttonDown__content">Invitation declined</div>
        </div>
      </div>

    </div><br>
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
.dieHomeBig {
  width: 280px;
  height: 200px;
  margin-left: 25%;
  background: #f3d3d5;

  border-radius: 16px 4px 4px 16px;

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
      margin-left: 254px;
    }
  }

}
.die {
  width: 255px;
  height: 35px;
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

.dieLeft {
  width: 255px;
  height: 35px;
  margin-left: 1%;
  background: #F2F1F0;
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
.photoMen {
  background-size: contain;
  width: 239px;
  height: 253px;
  margin-left: 36%;
  background: no-repeat center center url('../assets/img/profileView/RectangleMan.svg');

}

.textFrameUp {
  margin-top: -49px;
  padding-left: 47px;
  display: flex;
  font-family: 'SF Pro Text';
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 22px;
  letter-spacing: -0.408px;
  color: #362614;

}
.textFrameUpData {
  margin-left: 45px;
  width: 150px;
  display: flex;
}
.buttonDown {
  border: 1px solid #C14851;;
  border-radius: 12px;
  height: 40px;
  .buttonDown__content {
    margin-top: 10px;
    font-family: 'Helvetica Neue';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 21px;
    text-align: center;
    letter-spacing: -0.32px;
    justify-content: center;
    color:  #C14851;;

  }
}

.iconOrange {
  width: 40px;
  height: 60px;
  background: no-repeat center center url('../assets/img/profileView/Ellipse33.svg');
  margin-left: 10px;

  .frame {
    width: 24px;
    height: 60px;
    background: no-repeat center center url('../assets/img/profileView/Frame.svg');
    margin-left: 10px;
  }



}
.dieHome {
  width: 255px;
  height: 55px;
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