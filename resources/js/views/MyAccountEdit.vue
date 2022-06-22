<template>
  <div class="wrapper page">
    <header class="header">
      <div class="back" @click="this.$router.push('/myaccount')"></div>
      <h1 class="title">Edit</h1>
      <div class="viewing text-base">Viewing</div>
    </header>
    <div class="edit">
      <div class="edit__content">
        <div class="edit__photo-cards">
          <div v-for="i in 9" :key="i" class="photo-card"></div>
        </div>
        <div class="line"></div>
        <div class="edit__settings">
          <div class="setting" v-for="item in settings" :key="item.id"
          @click="this.$router.push(`/${item.link}`)">
            <div class="setting__main">
              <div class="setting__img"></div>
              <div class="setting__text text-base">{{ item.name }}</div>
            </div>
            <div class="setting__arrow"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "MyAccountEdit",
  data() {
    return {
      settings: [
        {
          id: 1,
          name: "Main information",
          link: "myaccounteditmaininfo",
        },
        {
          id: 2,
          name: "Job and education",
          link: "myaccounteditjobandeducation",
        },
        {
          id: 3,
          name: "Personal information",
          link: "myaccounteditpersonalinformation",
        },
        {
          id: 4,
          name: "Main questions",
          link: "myaccountquestions",
        },
        {
          id: 5,
          name: "My Instagram account",
          link: "myaccountinstagram",
        },
      ],
    };
  },
  methods: {},
};
</script>

<style lang="scss" scoped>
.page {
  height: 100%;
}

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 6vh 5.3% 6px;
  border-bottom: 2px solid var(--color-divider);
  margin-bottom: 22px;

  .text-base {
    font-size: 16px;
    color: #d89972;
  }

  .title {
    font-weight: 600;
    font-size: 20px;
  }

  .viewing {
    margin-top: 1px;
  }
}

.edit {
  padding: 0 4% 6vh;
  display: flex;
  flex-direction: column;

  &__content {
    text-align: center;
    flex-grow: 2;

    .title {
      margin-bottom: 8px;
    }

    .text-base {
      text-align: left;
      color: var(--color-secondary);
    }
  }

  &__photo-cards {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    margin-bottom: 16px;

    .photo-card {
      width: 32%;
      margin-right: 2%;
      margin-bottom: 2%;
      aspect-ratio: 109 / 117;
      border-radius: 12px;
      background: no-repeat center center var(--color-light-10)
        url("../assets/img/Plus.svg");

      &:nth-child(3n) {
        margin-right: 0;
      }

      &:first-child {
        background-image: url("../assets/img/register/pic1.png");
        background-size: cover;
      }

      &:nth-child(2) {
        background-image: url("../assets/img/register/pic2.png");
        background-size: cover;
      }

      &:nth-child(3) {
        background-image: url("../assets/img/register/pic3.png");
        background-size: cover;
      }

      &:nth-child(4) {
        background-image: url("../assets/img/register/pic4.png");
        background-size: cover;
      }
    }
  }

  &__settings {
    margin-top: 25px;

    .setting {
      position: relative;
      display: flex;
      align-items: center;
      margin-bottom: 20px;

      &__main {
        display: flex;
        align-items: center;
      }

      &__img {
        margin-right: 12px;
      }

      &:nth-child(1) {
        .setting__img {
          background: no-repeat center center
            url("../assets/img/myaccount/MainInfo.svg");
          width: 32px;
          height: 32px;
          background-size: contain;
        }
      }

      &:nth-child(2) {
        .setting__img {
          background: no-repeat center center
            url("../assets/img/myaccount/Job&Educ.svg");
          width: 32px;
          height: 32px;
          background-size: contain;
        }
      }

      &:nth-child(3) {
        .setting__img {
          background: no-repeat center center
            url("../assets/img/myaccount/PersonalInfo.svg");
          width: 32px;
          height: 32px;
          background-size: contain;
        }
      }

      &:nth-child(4) {
        .setting__img {
          background: no-repeat center center
            url("../assets/img/myaccount/MainQuest.svg");
          width: 32px;
          height: 32px;
          background-size: contain;
        }
      }

      &:nth-child(5) {
        .setting__img {
          background: no-repeat center center
            url("../assets/img/myaccount/MyInst.svg");
          width: 32px;
          height: 32px;
          background-size: contain;
        }
      }

      &__arrow {
        background: no-repeat center center url("../assets/img/Arrow-right.svg");
        background-size: contain;
        width: 8px;
        height: 13px;
        position: absolute;
        right: 0;
        top: 8px;
      }
    }
  }
}

.line {
  border-bottom: 1px solid #e6e4e3;
}
</style>


