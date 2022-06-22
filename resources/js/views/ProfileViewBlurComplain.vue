<template>
  <div class="profileView page">
    <header class="profileView__header">
      <div class="back"></div>
      <div class="three__dots"></div>
    </header>
    <div class="profileView__content">
      <div class="title">
        Margarita, 18
        <div class="verified"></div>
      </div>
      <br />
      <input-base
        :disabled="true"
        type="text"
        title="Life motto"
        placeholder="Be positive forever!"
        @input="onInput($event)"
      >
      </input-base
      ><br />
      <div class="photoIndex">
        <div class="photoIndex__wrapper">
          <div class="photoIndex__blur" @click="isModalShown = true">
            <div class="photoIndex__reveal text-base">
              Click to reveal photos
            </div>
          </div>
          <div
            class="start page"
            @click="onClick"
            :class="{
              'bgImg-1': imgNum === 1,
              'bgImg-2': imgNum === 2,
              'bgImg-3': imgNum === 3,
              'bgImg-4': imgNum === 4,
              'bgImg-5': imgNum === 5,
              'bgImg-6': imgNum === 6,
              'bgImg-7': imgNum === 7,
              'bgImg-8': imgNum === 8,
              blur_photo: blur_photo,
            }"
          ></div>
        </div>
      </div>
      <div class="geolocation">
        <span class="geolocation__content"
          >Rostov-on-Don, 5 km away from you</span
        >
      </div>
      <div class="line"></div>
      <div class="mood">
        <div class="f368"></div>
        <div class="f369"></div>
        <div class="f370"></div>
        <div class="f371"></div>
        <div class="f372"></div>
      </div>
      <div class="line"></div>
      <div class="looking">
        <div class="headerLook">
          Looking for travel company
          <div class="looking__content">
            Who wants to come with me for the New Year holidays
            <div class="buttonLook">
              <div class="b293"></div>
              <div class="b300"></div>
              <div class="b316"></div>
            </div>
          </div>
        </div>
      </div>
      <div class="line"></div>
      <input-base
        type="text"
        title="For me, happiness is"
        placeholder="BFamily idyll"
        @input="onInput($event)"
      >
      </input-base
      ><br />
      <input-base
        type="text"
        title="My ideal romantic dinner is"
        placeholder="BGourmet dinner in a restaurant"
        @input="onInput($event)"
      >
      </input-base
      ><br />
      <input-base
        type="text"
        title="I am one of those who"
        placeholder="BAlways plans everything in advance"
        @input="onInput($event)"
      >
      </input-base
      ><br />
      <div class="line"></div>
      <div class="jobSalaryEdu">
        <div class="job">
          Job
          <div class="job__content">Product manager in Accenture</div>
        </div>
      </div>
      <div class="jobSalaryEdu">
        <div class="job">
          Salary
          <div class="job__content">from $50 000 — $100 000</div>
        </div>
      </div>
      <div class="jobSalaryEdu">
        <div class="job">
          Educational institution
          <div class="job__content">SFEDU</div>
        </div>
      </div>
      <div class="personalInfo">Personal information</div>
      <div class="jobSalaryEdu">
        <div class="job">
          About Me
          <div class="job__content">
            I am looking for a kind and responsive man to start a family
          </div>
        </div>
      </div>
      <div class="jobSalaryEdu">
        <div class="job">
          Who am I looking for?
          <div class="job__content">
            Looking for a handsome man to start a family
          </div>
        </div>
      </div>
      <br />
      <div class="line"></div>
      <div class="instagram">
        <div class="jobSalaryEdu">
          <div class="job">
            Instagram

            <div class="job__content"></div>
          </div>
        </div>
        <br />
        <div class="instagramPhoto1"></div>
        <div class="instagramPhoto2"></div>
        <!--        <div class="instagramPhoto3"></div>-->
      </div>
      <button-base
        class="cellphone__button"
        :disabled="cellphone === ''"
        @click="this.$router.push('#')"
      >
        Send message
      </button-base>
      <div class="complain" @click="isModalComplain = true">Complain</div>
    </div>
    <modal-request-photo v-if="isModalShown" @close="closeModal"> </modal-request-photo>
    <modal-complain v-if="isModalComplain">
    </modal-complain>
  </div>
</template>

<script>
import InputBase from "../components/UI/InputBase.vue";
import ButtonBase from "../components/UI/ButtonBase.vue";
import ModalRequestPhoto from "../components/ModalRequestPhoto.vue";
import ModalComplain from "../components/ModalComplain.vue";

export default {
  name: "ProfileView",
  components: {
    // ProgressBar,
    InputBase,
    ButtonBase,
    ModalRequestPhoto,
    ModalComplain
  },
  data() {
    return {
      imgNum: 1,
      blur_photo: true,
      isModalShown: false,
      isModalComplain: true,
    };
  },
  methods: {
    onClick() {
      if (this.imgNum + 1 <= 3) {
        this.imgNum++;
      } else {
        (this.imgNum = 1), this.onClick();
      }
    },

    closeModal(bool) {
      this.isModalShown = bool
    }
  },
};
</script>

<style lang="scss" scoped>
.profileView {
  padding-top: 7vh;
  padding-bottom: 6vh;
  display: flex;
  flex-direction: column;

  .instagramPhoto1 {
    display: inline-table;
    flex-wrap: wrap;
    justify-content: space-between;
    background-size: 180px;
    width: 180px;
    height: 180px;
    background-image: url("../assets/img/profileView/Rectangle8.png");
    margin-top: 3px;
    margin-right: 10px;
  }
  .instagramPhoto2 {
    display: inline-table;
    flex-wrap: wrap;
    justify-content: space-between;
    background-size: 180px;
    width: 180px;
    height: 180px;
    background-image: url("../assets/img/profileView/Rectangle9.png");
    margin-top: 3px;
    margin-right: 10px;
  }
  //.instagramPhoto3 {
  //  display: inline-table;
  //  flex-wrap: wrap;
  //  justify-content: space-between;
  //  background-size: 150px;
  //  width: 150px;
  //  height: 150px;
  //  background-image: url('../assets/img/profileView/Rectangle10.png');
  //  margin-top: 3px;
  //  margin-right: 10px;
  //}

  .complain {
    font-family: "Helvetica Neue";
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 21px;
    letter-spacing: -0.32px;
    color: #eb5454;
    margin-top: 50px;
    margin-bottom: 50px;
    text-align: center;
  }
  .cellphone__button {
    margin-top: 30px;
  }

  .personalInfo {
    font-family: "Helvetica Neue";
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 21px;
    letter-spacing: -0.32px;
    color: #979491;
    padding-top: 47px;
  }

  .job {
    font-family: "Helvetica Neue";
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 21px;
    letter-spacing: -0.32px;
    color: #979491;
    padding-top: 17px;
  }
  .job__content {
    font-family: "Helvetica Neue";
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 21px;
    padding-top: 17px;
    letter-spacing: -0.32px;
    color: #362614;
  }

  .b293 {
    display: inline-table;
    flex-wrap: wrap;
    justify-content: space-between;
    background-size: 75px;
    width: 74px;
    height: 36px;
    background-image: url("../assets/img/profileView/Group316.png");
    margin-top: 3px;
    margin-right: 10px;
  }
  .b300 {
    display: inline-table;
    flex-wrap: wrap;
    justify-content: space-between;
    background-size: 75px;
    width: 74px;
    height: 36px;
    background-image: url("../assets/img/profileView/Group300.png");
    margin-top: 3px;
    margin-right: 10px;
  }
  .b316 {
    display: inline-table;
    flex-wrap: wrap;
    justify-content: space-between;
    background-size: 75px;
    width: 74px;
    height: 36px;
    background-image: url("../assets/img/profileView/Group293.png");
    margin-top: 3px;
    margin-right: 10px;
  }

  .headerLook {
    font-family: "Helvetica Neue";
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 16px;
    color: rgba(20, 54, 23, 0.5);
    margin-left: 10px;
    padding-top: 15px;
  }
  .looking__content {
    font-family: "Helvetica Neue";
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 24px;
    letter-spacing: -0.32px;
    color: #362614;
    padding-top: 13px;
  }

  .registration {
    font-family: "SF Pro Text";
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 22px;
    text-align: right;
    letter-spacing: -0.408px;
    color: #d89972;
  }

  &__header {
    display: flex;
    justify-content: space-between;
    margin-left: 4.8%;
    margin-right: 5.3%;
    margin-bottom: 6%;
  }
  .three__dots {
    background: no-repeat center center
      url("../assets/img/profileView/Moreh.svg");
    background-size: contain;
    width: 34px;
    height: 28px;
  }

  .verified {
    display: inline-block;
    background: no-repeat center center
      url("../assets/img/profileView/Verified.svg");
    background-size: contain;
    width: 20px;
    height: 20px;
  }
  .headingMain {
    font-family: "SF Pro Display";
    font-style: normal;
    font-weight: 600;
    font-size: 32px;
    line-height: 32px;
    letter-spacing: 0.36px;
    color: #362614;
  }
  &__content {
    text-align: left;
    flex-grow: 2;
    margin: 0 auto;
    width: 92%;
  }
  .mood {
    text-align: center;
    flex-grow: 2;
    margin: 0 auto;
    width: 92%;
  }
  .start {
    background: no-repeat center center rgb(227, 182, 135, 0.5);
    background-size: cover;
    height: 375px;
  }

  .bgImg- {
    &1,
    &2,
    &3 {
      transition: all 1s linear;
    }

    &1 {
      background-image: url("../assets/img/profileView/Rectangle.svg");
    }

    &2 {
      background-image: url("../assets/img/profileView/Rectangle1.svg");
    }

    &3 {
      background-image: url("../assets/img/profileView/Rectangle.svg");
    }
  }
  .f368 {
    display: inline-block;
    background-size: 75px;
    width: 62px;
    height: 68px;
    background-image: url("../assets/img/profileView/Group368.png");
  }
  .f369 {
    display: inline-block;
    background-size: 75px;
    width: 62px;
    height: 68px;
    background-image: url("../assets/img/profileView/Group369.png");
  }
  .f370 {
    display: inline-block;
    background-size: 75px;
    width: 62px;
    height: 68px;
    background-image: url("../assets/img/profileView/Group370.png");
  }
  .f371 {
    display: inline-block;
    background-size: 75px;
    width: 62px;
    height: 68px;
    background-image: url("../assets/img/profileView/Group371.png");
  }
  .f372 {
    display: inline-block;
    background-size: 75px;
    width: 62px;
    height: 68px;
    background-image: url("../assets/img/profileView/Group372.png");
  }

  .geolocation {
    padding-top: 2vh;
    padding-bottom: 2vh;
    display: flex;
    flex-direction: column;
  }

  .geolocation__content {
    font-family: "Helvetica Neue";
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 21px;
    letter-spacing: -0.32px;
    color: #362614;
  }
  .line {
    border-bottom: 1px solid #f2f1f0;
  }
  .looking {
    width: 92vw;
    height: 140px;
    background: #e5f1e5;
    border-radius: 12px;
    margin-top: 15px;
    margin-bottom: 15px;
  }

  .blur_photo {
    filter: blur(34px);
  }

  .photoIndex {
    &__wrapper {
      position: relative;
      overflow: hidden;
    }

    &__blur {
      position: absolute;
      width: 53px;
      height: 50px;
      background-image: url("../assets/img/profileView/Blur.png");
      z-index: 1;
      transform: translate(-50%, -50%);
      top: 50%;
      left: 50%;
      cursor: pointer;

      &:hover .photoIndex__reveal {
        opacity: 1;
        transition: all .4s linear;
      }
    }

    &__reveal {
      position: absolute;
      top: 55px;
      left: 50%;
      transform: translateX(-50%);
      min-width: 150px;
      opacity: 0;
    }
  }
}
</style>
