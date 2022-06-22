<template>
  <div class="myaccount page">
    <header class="myaccount__header">
      <div class="settings" @click="this.$router.push('/myaccountsettings')"></div>
      <div class="edit" @click="this.$router.push('/myaccountedit')"></div>
    </header>
    <div class="myaccount__content">
      <div class="title">My account</div>
      <div class="myaccount__bio">
        <div class="myaccount__filled text-base">Filled 56%</div>
        <div class="myaccount__photo">
          <img src="../assets/img/myaccount/Main.jpg" />
        </div>
        <div class="myaccount__plate">
          <div class="myaccount__name">
            <div class="text-base">{{ user.name }}, {{ user.dateOfBirth.getDate() }}</div>
            <div class="verified"></div>
          </div>
        </div>
      </div>
      <div class="myaccount__category">
        <p class="text-base head">Application category</p>
        <select-base
          :label="false"
          placeholder="Category"
          :selected="user.target"
          @click="isModalShown = true"
        >
        </select-base>
      </div>
      <modal-welcome v-if="isModalShown" @select="onSelect($event)">
      </modal-welcome>
      <div class="myaccount__subscriptions">
        <p class="text-base head">My subscriptions</p>
        <div class="subsc" v-for="item in subscriptions" :key="item.id">
          <div class="subsc__img">
            <img :src="item.img" />
          </div>
          <div class="subsc__desc text-base">
            <div class="subsc__title">
              {{ item.title }}
            </div>
            <div class="subsc__text text-base">
              {{ item.text }}
            </div>
          </div>
        </div>
      </div>
      <div class="line"></div>
      <div class="myaccount__abilities">
        <p class="text-base head">Special abilities</p>
        <div class="abil" v-for="item in abilities" :key="item.id">
          <div class="abil__img">
            <img :src="item.img" />
          </div>
          <div class="abil__desc text-base">
            <div class="abil__title">
              {{ item.title }}
            </div>
            <div class="abil__text text-base">
              {{ item.text }}
            </div>
          </div>
          <button-base class="abil__button" @click="this.$router.push('/myaccountsubscribe')">
            Learn more
          </button-base>
        </div>
      </div>
    </div>
    <app-menu></app-menu>
  </div>
</template>

<script>
import SelectBase from "../components/UI/SelectBase.vue";
import ModalWelcome from "../components/ModalWelcome.vue";
import ButtonBase from "../components/UI/ButtonBase.vue";
import AppMenu from "../components/AppMenu.vue";

export default {
  name: "MyAccount",
  components: {
    SelectBase,
    ModalWelcome,
    ButtonBase,
    AppMenu,
  },
  data() {
    return {
      isModalShown: false,
      category: "",
      subscriptions: [
        {
          id: 1,
          title: "Match Premium",
          text: "«Serious relationship» to 15.04.2022",
          img: require("../assets/img/myaccount/DiamondsPremium.png"),
        },
        {
          id: 2,
          title: "Match Premium",
          text: "«Networking» to 15.04.2022",
          img: require("../assets/img/myaccount/DiamondsPremium.png"),
        },
      ],
      abilities: [
        {
          id: 1,
          title: "Diamonds Premium",
          text: "Write to everyone first in the selected category",
          img: require("../assets/img/myaccount/DiamondsPremium.png"),
        },
        {
          id: 2,
          title: "Diamonds Vip",
          text: "Write to everyone first in the selected category",
          img: require("../assets/img/myaccount/DiamondsVip.png"),
        },
      ],
    };
  },

  mounted() {
    if(!this.$store.getters.user.init) this.$store.dispatch('getUser');
  },

  methods: {
    onSelect(e) {
      this.category = e.selected;
      this.isModalShown = false;
    },
  },

  computed: {
    user() {
      return this.$store.getters.user;
    },
  }
};
</script>

<style lang="scss" scoped>
.myaccount {
  padding-top: 7vh;
  padding-bottom: 6vh;
  display: flex;
  flex-direction: column;

  &__header {
    display: flex;
    justify-content: space-between;
    margin-left: 4.8%;
    margin-right: 5.3%;
    margin-bottom: 6%;
  }

  .text-base {
    &.head {
      color: var(--color-secondary);
      margin-bottom: 11px;
    }
  }

  &__bio {
    width: 100%;
    border-radius: 12px;
    position: relative;
    border: 4px solid #e3b687;
    border-radius: 17px;
    height: 257px;
    margin-bottom: 21px;

    img {
      width: 100%;
      border-radius: 12px;
    }
  }

  &__photo {
    padding: 3px 4px 0px;
  }

  &__plate {
    position: absolute;
    background: rgba(54, 38, 20, 0.5);
    backdrop-filter: blur(20px);
    height: 58px;
    bottom: 3px;
    width: 97.5%;
    left: 4px;
    border-radius: 0px 0px 12px 12px;
    padding: 20px 10px 0;

    .text-base {
      display: flex;
      letter-spacing: 0.38px;
      color: var(--color-white);
      font-size: 20px;
      font-weight: 600;
      margin-right: 5px;
    }
  }

  &__name {
    display: flex;
  }

  &__filled {
    width: 83px;
    background: linear-gradient(0deg, #e3b687, #e3b687), #d89972;
    border-radius: 16px;
    color: var(--color-white);
    display: flex;
    padding: 4px 12px 2px;
    font-size: 13px;
    position: absolute;
    left: 50%;
    top: -16px;
    transform: translateX(-50%);
    z-index: 10;
  }

  &__category {
    margin-bottom: 27px;
  }

  .settings {
    background: no-repeat center center
      url("../assets/img/myaccount/Settings.svg");
    background-size: contain;
    width: 22px;
    height: 22px;
  }

  .edit {
    background: no-repeat center center url("../assets/img/myaccount/Edit.svg");
    background-size: contain;
    width: 18px;
    height: 18px;
  }

  .verified {
    display: inline-block;
    background: no-repeat center center
      url("../assets/img/myaccount/Verificated.svg");
    background-size: contain;
    width: 17px;
    height: 17px;
  }

  &__content {
    text-align: left;
    flex-grow: 2;
    margin: 0 auto;
    width: 92%;
    padding-bottom: 50%;

    .title {
      font-size: 32px;
      margin-bottom: 26px;
    }
  }

  &__subscriptions {
    & + .line {
      margin-bottom: 27px;
    }
  }
}

.line {
  border-bottom: 1px solid var(--color-divider);
}

.subsc {
  display: flex;
  justify-content: flex-start;
  margin-bottom: 26px;

  &__img {
    margin-right: 13px;

    img {
      width: 40px;
      height: 40px;
    }
  }

  &__desc {
    display: flex;
    flex-direction: column;
  }

  &__title {
    font-weight: 500;
    font-size: 16px;
  }

  &__text {
    font-size: 13px;
    color: var(--color-secondary);
  }
}

.abil {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 16px;
  background: var(--color-white);
  box-shadow: 0px 4px 24px rgba(78, 60, 33, 0.08);
  border-radius: 12px;
  padding: 24px 16px 22px;

  &__img {
    margin-right: 13px;
    margin-bottom: 19px;

    img {
      width: 56px;
      height: 56px;
    }
  }

  &__desc {
    display: flex;
    flex-direction: column;
    text-align: center;
  }

  &__title {
    font-weight: 600;
    font-size: 20px;
    margin-bottom: 9px;
  }

  &__text {
    font-size: 16px;
    color: #393939;
    margin-bottom: 21px;
  }

  &__button {
    background: var(--color-light-10);
    color: var(--color-main-dark);
    font-weight: 400;
    font-size: 16px;
    letter-spacing: -0.32px;
  }
}

.app-menu {
  position: fixed;
  bottom: 0;
}
</style>
