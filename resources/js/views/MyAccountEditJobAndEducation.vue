<template>
  <div class="wrapper page">
    <header class="header">
      <div class="back" @click="this.$router.push('/myaccountedit')"></div>
      <h1 class="title">Job and education</h1>
      <div></div>
    </header>
    <div class="job_educ">
      <div class="job_educ__content">
        <div class="job_educ__item">
          <p class="text-base head">Position</p>
          <input-base
            type="text"
            :label="false"
            placeholder="What do you do?"
            @input="onInput($event)"
          >
          </input-base>
        </div>
        <div class="job_educ__item">
          <p class="text-base head">Company</p>
          <input-base
            type="text"
            :label="false"
            placeholder="Where do you work?"
            @input="onInput($event)"
          >
          </input-base>
        </div>
        <div class="job_educ__item">
          <p class="text-base head">Зарплата в месяц</p>
          <select-base
            :label="false"
            placeholder="Your salary"
            :selected="salary"
            @click="isModalSalary= true"
          >
          </select-base>
        </div>
        <modal-welcome v-if="isModalSalary" @select="onSelectSalary($event)">
        </modal-welcome>
        <div class="job_educ__item">
          <p class="text-base head">Annual salary/wage</p>
          <select-base
            :label="false"
            placeholder="Your salary"
            :selected="wage"
            @click="isModalWage = true"
          >
          </select-base>
        </div>
        <modal-welcome v-if="isModalWage" @select="onSelectWage($event)">
        </modal-welcome>
        <div class="job_educ__item">
          <p class="text-base head">Capital</p>
          <select-base
            :label="false"
            placeholder="Выберите свою зарплату"
            :selected="capital"
            @click="isModalCapital = true"
          >
          </select-base>
        </div>
        <modal-welcome v-if="isModalCapital" @select="onSelectCapital($event)">
        </modal-welcome>
        <div class="job_educ__item">
          <p class="text-base head">Educational organization</p>
          <input-base
            type="text"
            :label="false"
            placeholder="Where do you study or studied?"
            @input="onInput($event)"
          >
          </input-base>
        </div>
      </div>
      <button-base
          class="job_educ__button"
          @click="this.$router.push('#')">
        Save
      </button-base>
    </div>
  </div>
</template>
<script>
import InputBase from "../components/UI/InputBase.vue";
import SelectBase from "../components/UI/SelectBase.vue";
import ModalWelcome from "../components/ModalWelcome.vue";
import ButtonBase from '../components/UI/ButtonBase.vue'

export default {
  name: "MyAccountEditMainInfo",
  components: {
    InputBase,
    SelectBase,
    ModalWelcome,
    ButtonBase,
  },
  data() {
    return {
      isModalSalary: false,
      isModalWage: false,
      isModalCapital: false,
      salary: "",
      wage: "",
      capital: "",
    };
  },
  methods: {
    onSelectSalary(e) {
      this.salary = e.selected;
      this.isModalSalary = false;
    },
    onSelectWage(e) {
      this.wage = e.selected;
      this.isModalWage = false;
    },
    onSelectCapital(e) {
      this.capital = e.selected;
      this.isModalCapital = false;
    },
  },
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

.job_educ {
  padding: 0 4% 6vh;
  display: flex;
  flex-direction: column;
  height: calc(100vh - 112px);

  &__item {
    margin-bottom: 24px;
  }

  &__content {
    text-align: center;
    flex-grow: 2;

    .title {
      margin-bottom: 8px;
    }

    .text-base {
      text-align: left;
      color: var(--color-secondary);
      margin-bottom: 12px;
    }

    .input {
      height: 48px;
      padding: 13px 12px;

      &.textarea {
        height: 70px;
      }
    }

    .select {
      height: 48px;
      padding: 13px 12px;
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


