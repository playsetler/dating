<template>
  <div class="wrapper page">
    <header class="header">
      <div class="back" @click="this.$router.push('/myaccountedit')"></div>
      <h1 class="title">Main information</h1>
      <div></div>
    </header>
    <div class="main_info">
      <div class="main_info__content">
        <div class="main_info__item">
          <p class="text-base head">Your Name</p>
          <input-base
            type="text"
            :label="false"
            placeholder="Edit name"
            @input="onInput($event)"
          >
          </input-base>
        </div>
        <div class="main_info__item">
          <p class="text-base head">Birth date</p>
          <select-base
            :label="false"
            placeholder="Edit birth date"
            :selected="date"
            @click="isModalDatepicker = true"
          >
          </select-base>
        </div>
        <modal-birth-date v-if="isModalDate" @select="onSelectDate($event)">
        </modal-birth-date>
        <div class="main_info__item">
          <p class="text-base head">Sex</p>
          <select-base
            :label="false"
            placeholder="Edit sex"
            :selected="sex"
            @click="isModalSex = true"
          >
          </select-base>
        </div>
        <modal-welcome v-if="isModalSex" @select="onSelectSex($event)">
        </modal-welcome>
        <div class="main_info__item">
          <p class="text-base head">About me</p>
          <input-base
            type="text"
            :label="false"
            :area="true"
            placeholder="Add text..."
          >
          </input-base>
        </div>
        <div class="main_info__item">
          <p class="text-base head">Who am I looking for?</p>
          <input-base
            type="textarea"
            :label="false"
            :area="true"
            placeholder="Add text..."
            @input="onInput($event)"
          >
          </input-base>
        </div>
      </div>
      <button-base class="main_info__button" @click="this.$router.push('#')">
        Save
      </button-base>
    </div>
    <modal-datepicker v-if="isModalDatepicker"></modal-datepicker>
  </div>
</template>
<script>
import InputBase from "../components/UI/InputBase.vue";
import SelectBase from "../components/UI/SelectBase.vue";
import ModalWelcome from "../components/ModalWelcome.vue";
import ButtonBase from "../components/UI/ButtonBase.vue";
import ModalBirthDate from "../components/ModalBirthDate.vue";
import ModalDatepicker from "../components/ModalDatepicker.vue";

export default {
  name: "MyAccountEditMainInfo",
  components: {
    InputBase,
    SelectBase,
    ModalWelcome,
    ButtonBase,
    ModalBirthDate,
    ModalDatepicker
  },
  data() {
    return {
      isModalDate: false,
      isModalSex: false,
      isModalDatepicker: false,
      date: "",
      sex: "",
    };
  },
  methods: {
    onSelectDate(e) {
      this.date = e.selected;
      this.isModalDate = false;
    },
    onSelectSex(e) {
      this.sex = e.selected;
      this.isModalSex = false;
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

.main_info {
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
        height: 85px;
        padding: 14px 16px 7px;
      }
    }

    .select {
      height: 48px;
      padding: 13px 12px;
    }
  }
}

.line {
  border-bottom: 1px solid #e6e4e3;
}
</style>


