<template>
  <div class="feed page">
    <div class="feed__content">
      <header class="feed__header">
        <div class="user-message">
          <div class="user-message__header">
            <img
              class="user-message__photo"
              src="../assets/img/feed/Liza.jpg"
              alt=""
            />
            <p class="user-message__user-name">Liza, 21</p>
            <img
              src="../assets/img/feed/mark.svg"
              alt=""
              class="user-message__mark"
            />
          </div>
          <p class="user-message__message">
            Hello everyone! Who wants to go to the park with me?
          </p>
        </div>
        <div class="user-message">
          <div class="user-message__header">
            <img
              class="user-message__photo"
              src="../assets/img/feed/Konstantin.jpg"
              alt=""
            />
            <p class="user-message__user-name">Konstantin, 43</p>
          </div>
          <p class="user-message__message">
            I want to invite a nice girl on a romantic date to...
          </p>
        </div>
      </header>
      <div class="profile-card">
        <div class="profile-card__photo-block">
          <img
            src="../assets/img/firstStartHints/photo.jpg"
            alt=""
            class="profile-card__photo photo_hint"
          />
          <div class="profile-card__actions">
            <div class="round-icon profile-card__btn-arrow"></div>
            <div class="reactions">
              <div
                class="round-icon reactions__button"
                @click="reactionsShown = !reactionsShown"
                :class="{ shown: reactionsShown }"
              ></div>
              <ul v-if="reactionsShown" class="reactions__list">
                <li
                  v-for="item in reactions"
                  :key="item"
                  class="round-icon reactions__item"
                  :class="'reactions__item_' + item"
                  @click="onReact(item)"
                ></li>
              </ul>
            </div>
          </div>
          <div class="profile-card__carousel">
            <div class="profile-card__photo-wrapper">
              <div class="profile-card__photo-mini photo_1"></div>
              <div class="profile-card__photo-mini photo_2"></div>
              <div class="profile-card__photo-mini photo_3"></div>
            </div>
          </div>
        </div>
        <div class="profile-card__caption-block">
          <h2 class="title">Margarita, 18</h2>
          <p class="text-base">Moscow, 5 km away from you</p>
        </div>
        <DisplaySwipe />
      </div>
    </div>
    <app-menu></app-menu>
  </div>
</template>
<script>
import AppMenu from "../components/AppMenu.vue";
import DisplaySwipe from "../components/DisplaySwipe.vue";

export default {
  name: "FirstStartHints",
  components: {
    AppMenu,
    DisplaySwipe,
  },
  data() {
    return {
      profileCard: {
        visible: true,
        name: "",
        verifyed: true,
        location: "",
        reaction: "",
      },
      reactions: ["rose", "glasses", "dance", "hot-coffee", "heart"],
      reactionsShown: true,
    };
  },
  methods: {
    onReact(reaction) {
      this.profileCard.reaction = reaction;
      this.reactionsShown = false;
    },
  },
};
</script>
<style lang="scss" scoped>
.round-icon {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: no-repeat center center;
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

.profile-card {
  width: 100%;
  box-shadow: 0px 4px 24px rgba(78, 60, 33, 0.08);
  border-radius: 12px;
  overflow: hidden;
  position: relative;

  &__photo-block {
    position: relative;
    width: 100%;

    .photo_hint {
      position: relative;
      top: -70px;
    }
  }

  &__photo {
    width: 100%;
  }

  &__actions {
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
    display: flex;
    justify-content: space-between;
    padding: 16px 12px 0;
  }

  &__btn-arrow {
    background-color: rgba(0, 0, 0, 0.2);
    background-image: url("../assets/img/feed/arrow.svg");
  }

  &__caption-block {
    width: 100%;
    padding: 20px 16px;

    .title {
      font-size: 20px;
      line-height: 24px;
      margin-bottom: 4px;
      letter-spacing: 0.38px;

      &::after {
        content: "";
        display: inline-block;
        width: 18px;
        height: 18px;
        background: no-repeat center center url("../assets/img/feed/mark.svg");
        background-size: contain;
        margin-left: 6px;
        margin-top: 3px;
        vertical-align: baseline;
      }
    }
  }

  &__carousel {
    position: absolute;
    bottom: 0;
    background: #fff;
    height: 23vh;
    width: 100%;
    padding: 18px 0 7px 16px;
  }

  &__photo-wrapper {
    display: flex;
    position: absolute;
  }

  &__photo-mini {
    width: 109px;
    height: 117px;
    border-radius: 12px;
    margin-right: 10px;

    &.photo_1 {
      background: no-repeat url("../assets/img/firstStartHints/photo_1.jpg");
    }

    &.photo_2 {
      background: no-repeat url("../assets/img/firstStartHints/photo_2.jpg");
    }

    &.photo_3 {
      background: no-repeat url("../assets/img/firstStartHints/photo_3.jpg");
    }
  }
}

.reactions {
  &__button {
    background-color: rgba(0, 0, 0, 0.2);
    background-image: url("../assets/img/feed/fire.svg");
    margin-bottom: 8px;

    &.shown {
      background-image: url("../assets/img/feed/fire-shown.svg");
    }
  }

  &__item {
    background-color: var(--color-white);
    margin-bottom: 8px;
    border: 1px solid rgba(229, 228, 227, 0.5);

    &_rose {
      background-image: url("../assets/img/feed/rose.svg");
    }

    &_glasses {
      background-image: url("../assets/img/feed/glasses.svg");
    }

    &_dance {
      background-image: url("../assets/img/feed/dance.svg");
    }

    &_hot-coffee {
      background-image: url("../assets/img/feed/hot-coffee.svg");
    }

    &_heart {
      background-image: url("../assets/img/feed/heart.svg");
    }
  }
}
</style>