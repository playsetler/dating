<template>
  <div class="wrapper page">
    <header class="header">
      <div class="back" @click="this.$router.push('/myaccountedit')"></div>
      <h1 class="title">Personal Information</h1>
      <div></div>
    </header>
    <div class="personal_info">
      <div class="personal_info__content">
        <div class="personal_info__item">
          <p class="text-base head">Hometown</p>
          <select-base
            :label="false"
            :personal="true"
            placeholder="Your hometown"
            :selected="hometown"
            @click="isModalHometown = true"
          >
          </select-base>
          <div class="personal_info__img img-hometown"></div>
        </div>
        <modal-welcome
          v-if="isModalHometown === true"
          @select="onSelectHometown($event)"
        >
        </modal-welcome>
        <div class="personal_info__item">
          <p class="text-base head">Education</p>
          <select-base
            :label="false"
            :personal="true"
            placeholder="What is your education?"
            :selected="education"
            @click="isModalEducation = true"
          >
          </select-base>
          <div class="personal_info__img img-education"></div>
        </div>
        <modal-welcome
          v-if="isModalEducation === true"
          @select="onSelectEducation($event)"
        >
        </modal-welcome>
        <div class="personal_info__item">
          <p class="text-base head">Languages</p>
          <select-base
            :label="false"
            :personal="true"
            placeholder="What is your languages?"
            :selected="languages"
            @click="isModalLanguages = true"
          >
          </select-base>
          <div class="personal_info__img img-languages"></div>
        </div>
        <modal-welcome
          v-if="isModalLanguages === true"
          @select="onSelectLanguages($event)"
        >
        </modal-welcome>
        <div class="personal_info__item">
          <p class="text-base head">Height</p>
          <select-base
            :label="false"
            :personal="true"
            placeholder="What is your languages?"
            :selected="height"
            @click="isModalHeight = true"
          >
          </select-base>
          <div class="personal_info__img img-height"></div>
        </div>
        <modal-welcome
          v-if="isModalHeight === true"
          @select="onSelectHeight($event)"
        >
        </modal-welcome>
        <div class="personal_info__item">
          <p class="text-base head">Orientation</p>
          <select-base
            :label="false"
            :personal="true"
            placeholder="What is your languages?"
            :selected="orientation"
            @click="isModalOrientation = true"
          >
          </select-base>
          <div class="personal_info__img img-orientation"></div>
        </div>
        <modal-welcome
          v-if="isModalOrientation === true"
          @select="onSelectOrientation($event)"
        >
        </modal-welcome>
        <div class="personal_info__item">
          <p class="text-base head">Relation</p>
          <select-base
            :label="false"
            :personal="true"
            placeholder="What is your languages?"
            :selected="relation"
            @click="isModalRelation = true"
          >
          </select-base>
          <div class="personal_info__img img-relation"></div>
        </div>
        <modal-welcome
          v-if="isModalRelation === true"
          @select="onSelectRelation($event)"
        >
        </modal-welcome>
        <div class="personal_info__item">
          <p class="text-base head">Children</p>
          <select-base
            :label="false"
            :personal="true"
            placeholder="What is your languages?"
            :selected="children"
            @click="isModalChildren = true"
          >
          </select-base>
          <div class="personal_info__img img-children"></div>
        </div>
        <modal-welcome
          v-if="isModalChildren === true"
          @select="onSelectChildren($event)"
        >
        </modal-welcome>
        <div class="personal_info__item">
          <p class="text-base head">Family Plans</p>
          <select-base
            :label="false"
            :personal="true"
            placeholder="What is your languages?"
            :selected="family_plans"
            @click="isModalFamilyPlans = true"
          >
          </select-base>
          <div class="personal_info__img img-family_plans"></div>
        </div>
        <modal-welcome
          v-if="isModalFamilyPlans === true"
          @select="onSelectFamilyPlans($event)"
        >
        </modal-welcome>
        <div class="personal_info__item">
          <p class="text-base head">Religion</p>
          <select-base
            :label="false"
            :personal="true"
            placeholder="What is your languages?"
            :selected="religion"
            @click="isModalReligion = true"
          >
          </select-base>
          <div class="personal_info__img img-religion"></div>
        </div>
        <modal-welcome
          v-if="isModalReligion === true"
          @select="onSelectReligion($event)"
        >
        </modal-welcome>
        <div class="personal_info__item">
          <p class="text-base head">Political Views</p>
          <select-base
            :label="false"
            :personal="true"
            placeholder="What is your languages?"
            :selected="political_views"
            @click="isModalPoliticalViews = true"
          >
          </select-base>
          <div class="personal_info__img img-political_views"></div>
        </div>
        <modal-welcome
          v-if="isModalPoliticalViews === true"
          @select="onSelectPoliticalViews($event)"
        >
        </modal-welcome>
        <div class="personal_info__item">
          <p class="text-base head">Animals</p>
          <select-base
            :label="false"
            :personal="true"
            placeholder="What is your languages?"
            :selected="animals"
            @click="isModalAnimals = true"
          >
          </select-base>
          <div class="personal_info__img img-animals"></div>
        </div>
        <modal-welcome
          v-if="isModalAnimals === true"
          @select="onSelectAnimals($event)"
        >
        </modal-welcome>
        <div class="personal_info__item">
          <p class="text-base head">Alcohol</p>
          <select-base
            :label="false"
            :personal="true"
            placeholder="What is your languages?"
            :selected="alcohol"
            @click="isModalAlcohol = true"
          >
          </select-base>
          <div class="personal_info__img img-alcohol"></div>
        </div>
        <modal-welcome
          v-if="isModalAlcohol === true"
          @select="onSelectAlcohol($event)"
        >
        </modal-welcome>
        <div class="personal_info__item">
          <p class="text-base head">Smoking</p>
          <select-base
            :label="false"
            :personal="true"
            placeholder="What is your languages?"
            :selected="smoking"
            @click="isModalSmoking = true"
          >
          </select-base>
          <div class="personal_info__img img-smoking"></div>
        </div>
        <modal-welcome
          v-if="isModalSmoking === true"
          @select="onSelectSmoking($event)"
        >
        </modal-welcome>
      </div>
      <button-base
        class="personal_info__button"
        @click="this.$router.push('#')"
      >
        Save
      </button-base>
    </div>
  </div>
</template>
<script>
import SelectBase from "../components/UI/SelectBase.vue";
import ModalWelcome from "../components/ModalWelcome.vue";
import ButtonBase from "../components/UI/ButtonBase.vue";

export default {
  name: "MyAccountEditPersonalInformation",
  components: {
    SelectBase,
    ModalWelcome,
    ButtonBase,
  },
  data() {
    return {
      isModalHometown: false,
      isModalEducation: false,
      isModalLanguages: false,
      isModalHeight: false,
      isModalOrientation: false,
      isModalRelation: false,
      isModalChildren: false,
      isModalFamilyPlans: false,
      isModalReligion: false,
      isModalPoliticalViews: false,
      isModalAnimals: false,
      isModalAlcohol: false,
      isModalSmoking: false,
      hometown: "",
      education: "",
      languages: "",
      height: "",
      orientation: "",
      relation: "",
      children: "",
      family_plans: "",
      religion: "",
      political_views: "",
      animals: "",
      alcohol: "",
      smoking: "",
    };
  },
  methods: {
    onSelectHometown(e) {
      this.hometown = e.selected;
      this.isModalHometown = false;
    },
    onSelectEducation(e) {
      this.education = e.selected;
      this.isModalEducation = false;
    },
    onSelectLanguages(e) {
      this.languages = e.selected;
      this.isModalLanguages = false;
    },
    onSelectHeight(e) {
      this.height = e.selected;
      this.isModalHeight = false;
    },
    onSelectOrientation(e) {
      this.orientation = e.selected;
      this.isModalOrientation = false;
    },
    onSelectRelation(e) {
      this.relation = e.selected;
      this.isModalRelation = false;
    },
    onSelectChildren(e) {
      this.children = e.selected;
      this.isModalChildren = false;
    },
    onSelectFamilyPlans(e) {
      this.education = e.selected;
      this.isModalHometown = false;
    },
    onSelectReligion(e) {
      this.family_plans = e.selected;
      this.isModalFamilyPlans = false;
    },
    onSelectPoliticalViews(e) {
      this.political_views = e.selected;
      this.isModalPoliticalViews = false;
    },
    onSelectAnimals(e) {
      this.animals = e.selected;
      this.isModalAnimals = false;
    },
    onSelectAlcohol(e) {
      this.alcohol = e.selected;
      this.isModalAlcohol = false;
    },
    onSelectSmoking(e) {
      this.smoking = e.selected;
      this.isModalSmoking = false;
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

.personal_info {
  padding: 0 4% 6vh;
  display: flex;
  flex-direction: column;
  height: calc(100vh - 112px);

  &__item {
    margin-bottom: 24px;
    position: relative;
  }

  &__img {
    position: absolute;
    top: 54%;
    left: 11px;
    width: 24px;
    height: 24px;

    &.img-hometown {
      background: no-repeat url("../assets/img/myaccount/Hometown.svg");
    }

    &.img-education {
      background: no-repeat url("../assets/img/myaccount/Education.svg");
    }

    &.img-languages {
      background: no-repeat url("../assets/img/myaccount/Languages.svg");
    }

    &.img-height {
      background: no-repeat url("../assets/img/myaccount/Height.svg");
    }

    &.img-orientation {
      background: no-repeat url("../assets/img/myaccount/Orientation.svg");
    }

    &.img-relation {
      background: no-repeat url("../assets/img/myaccount/Relation.svg");
    }

    &.img-children {
      background: no-repeat url("../assets/img/myaccount/Children.svg");
    }

    &.img-family_plans {
      background: no-repeat url("../assets/img/myaccount/FamilyPlans.svg");
    }

    &.img-religion {
      background: no-repeat url("../assets/img/myaccount/Religion.svg");
    }

    &.img-political_views {
      background: no-repeat url("../assets/img/myaccount/PoliticalViews.svg");
    }

    &.img-animals {
      background: no-repeat url("../assets/img/myaccount/Animals.svg");
    }

    &.img-alcohol {
      background: no-repeat url("../assets/img/myaccount/Alcohol.svg");
    }

    &.img-smoking {
      background: no-repeat url("../assets/img/myaccount/Smoking.svg");
    }
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

      &.personal {
        padding: 13px 12px 13px 46px;
      }
    }
  }
}

.line {
  border-bottom: 1px solid #e6e4e3;
}
</style>


