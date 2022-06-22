<template>
  <div class="swipe" v-show="showHints" :class="{ end: hintNum >= 4 }">
    <div class="swipe__content">
      <div class="swipe__start" v-if="showStart">
        <div class="swipe__logo"></div>
        <h1 class="title" :class="{ no_logo: hintNum >= 4 }">Привет!</h1>
        <p class="text-base">
          Давайте начнем, сейчас мы покажем вам как пользоваться нашим
          приложением
        </p>
      </div>
      <div
        class="swipe__start hide"
        v-else
        v-for="item of hintItems"
        :key="item"
        :class="{
          'hint show': hintNum === item.hintNum,
        }"
      >
        <div class="swipe__logo next" v-if="hintNum < 4"></div>
        <div class="swipe__logo none" v-show="hintNum >= 4"></div>
        <h1 class="title" :class="{no_logo: hintNum > 3}">{{ item.title }}</h1>
        <p class="text-base">{{ item.text }}</p>
      </div>
    </div>
    <button-base class="swipe__button" @click="goLearning()" v-show="showStart">
      Начать обучение
    </button-base>
    <div class="swipe__skip" @click="skip()">Пропустить</div>
  </div>
</template>
<script>
import ButtonBase from "./UI/ButtonBase.vue";
export default {
  components: { ButtonBase },
  name: "DisplaySwipe",
  data() {
    return {
      selected: "",
      showStart: true,
      showHints: true,
      hintItems: [
        {
          title: "Смахните вправо, чтобы поставить лайк",
          text: "Вы создадите пару, толко если оба поставите лайк. Попробуй!",
          hintNum: 1,
        },
        {
          title: "Смахните влево, чтобы пропустить",
          text: "Если тебе не понравился человек, пропусти его. Никто не узнает о твоем решении",
          hintNum: 2,
        },
        {
          title: "Свайпни вверх или вниз, чтобы сменить фотграфию",
          text: "Просматривайте фотографии из анкеты свайпами вверх или вниз",
          hintNum: 3,
        },
        {
          title: "И это еще не все",
          text: "Просматривайте фотографии из анкеты свайпами вверх или вниз",
          hintNum: 4,
        },
      ],
      hintNum: 1,
      x1: null,
      y1: null,
    };
  },
  methods: {
    skip() {
      this.showHints = false;
    },

    goLearning() {
      this.showStart = false;
    },

    handleTouchStart(e) {
      const ft = e.touches[0];
      this.x1 = ft.clientX;
      this.y1 = ft.clientY;
      // console.log(this.x1, this.y1);
    },

    handleTouchMove(e) {
      const move = e.touches[0];
      if (!this.x1 || !this.y1) {
        return false;
      }

      let x2 = move.clientX;
      let y2 = move.clientY;

      let xDiff = x2 - this.x1;
      let yDiff = y2 - this.y1;

      if (Math.abs(xDiff) > Math.abs(yDiff)) {
        //r - l
        if (xDiff > 0 && this.hintNum === 1) {
          // console.log("rigth");
          this.hintNum = 2;
        } else 
          if (xDiff < 0 && this.hintNum === 2) {
            // console.log("left");
            this.hintNum = 3;
        }
      } else {
        //t - b
        if (yDiff > 0 && this.hintNum === 3) {
          // console.log("down");
          this.hintNum = 4;
        } else {
          if (this.hintNum === 3) {
            // console.log("top");
            this.hintNum = 4;
          }
        }
      }
      this.x1 = null;
      this.y1 = null;
    },
  },

  mounted() {
    const area = document.querySelector(".swipe");
    if (area) {
      area.addEventListener("touchstart", this.handleTouchStart, false);
      area.addEventListener("touchmove", this.handleTouchMove, false);
    }
  },

  unmounted() {
    const area = document.querySelector(".swipe");
    if (area) {
      area.removeEventListener("touchstart", this.handleTouchStart, false);
      area.removeEventListener("touchmove", this.handleTouchMove, false);
    }
  },
};
</script>
<style lang="scss" scoped>
.swipe {
  width: 100%;
  display: flex;
  flex-direction: column;
  background: rgba(32, 23, 13, 0.72);
  border-radius: 12px;
  position: absolute;
  z-index: 1;
  top: 0;
  height: 100%;
  padding: 131px 13px 48px;

  &.end {
    padding: 64px 13px 48px;
  }

  &__start {
    .title {
      color: var(--color-white);
      margin-bottom: 9px;

      &.no_logo {
        margin-bottom: 82px;
      }
    }

    .text-base {
      color: var(--color-white);
    }

    &.hide {
      display: none;
    }

    &.show {
      display: block;
    }
  }

  &__content {
    text-align: center;
    flex-grow: 2;
  }

  &__logo {
    width: 56px;
    height: 56px;
    background: no-repeat center center
      url("../assets/img/firstStartHints/HelloSwipe.svg");
    background-size: contain;
    margin: 0 auto 19px;

    &.next {
      background: no-repeat center center
        url("../assets/img/firstStartHints/Swipe.svg");
    }

    &.none {
      display: none;
    }
  }

  &__button {
    border-radius: 12px;
    margin-right: 9px;
    margin-bottom: 28px;

    &:last-child {
      margin-right: 0;
    }

    &.selected {
      background: linear-gradient(
          0deg,
          var(--color-main-extra-light),
          var(--color-main-extra-light)
        ),
        var(--color-main-light);
      color: var(--color-white);
    }
  }

  &__skip {
    font-family: var(--font-medium);
    color: rgba(255, 255, 255, 0.72);
    text-align: center;
    letter-spacing: -0.408px;
  }
}
</style>