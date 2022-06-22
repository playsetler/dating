<template>
  <div class="search_filter page">
    <header class="search_filter__header">
      <div class="back" @click="this.$router.push('/search')"></div>
      <h1 class="title">Filter</h1>
      <div class="clear text-base">Clear</div>
    </header>
    <div class="search_filter__content">
      <p class="text-base search_filter__title">I am interested</p>
      <div class="search_filter__radio">
        <RadioBlock :values="radioBtnValues" />
      </div>
      <div class="search_filter__category">
        <p class="text-base search_filter__title">Category</p>
        <input-base
          type="select"
          :placeholder="category ? category : 'Serious relationship'"
          @click="isModalFilterShown = true"
        >
        </input-base>
      </div>
      <modal-filter
        v-if="isModalFilterShown"
        @selectFilter="onSelectFilter($event)"
      >
      </modal-filter>
      <div class="search_filter__distance">
        <div class="search_filter__slider-data">
          <p class="text-base search_filter__title">Distance</p>
          <div class="output text-base">{{ km }} km</div>
        </div>
        <Slider v-model="km" :step="stepKm" :tooltips="false" :lazy="false" />
      </div>
      <div class="search_filter__country">
        <p class="text-base search_filter__title">City</p>
        <input-base
          type="select"
          :placeholder="country ? country : 'Select a country'"
          @click="isModalCountryShown = true"
        >
        </input-base>
        <div class="inputdelete">
          <div class="delete"></div>
        </div>
      </div>
      <modal-city-select
        v-if="isModalCountryShown"
        @selectCountry="onSelectCountry($event)"
      >
      </modal-city-select>
      <div class="line"></div>
      <div class="search_filter__check">
        <span class="text-base">Within 300 m</span>
        <label class="checkbox">
          <input type="checkbox" class="checkbox__input" />
          <div class="checkbox__custom">
            <div class="check_icon"></div>
          </div>
        </label>
      </div>
      <div class="line"></div>
      <div class="search_filter__age">
        <div class="search_filter__slider-data">
          <p class="text-base search_filter__title">Age</p>
          <div class="output text-base">{{ age[0] }}-{{ age[1] }}</div>
        </div>
        <Slider
          v-model="age"
          :min="minAge"
          :max="maxAge"
          :tooltips="false"
          :lazy="false"
        />
      </div>
      <div class="line"></div>
      <div class="search_filter__check">
        <span class="text-base">Verified only</span>
        
        
      </div>
    </div>
    <button-base
      class="search_filter__button"
      :disabled="category === ''"
      @click="this.$router.push('/register/gender')"
    >
      Apply
    </button-base>
  </div>
</template>
<script>
import ButtonBase from "../components/UI/ButtonBase.vue";
import InputBase from "../components/UI/InputBase.vue";
import RadioBlock from "../components/RadioBlock.vue";
import ModalFilter from "../components/ModalFilter.vue";
import ModalCitySelect from "../components/ModalCitySelect.vue";
import Slider from "@vueform/slider";

export default {
  name: "PeopleSearchFilter",
  components: {
    InputBase,
    ButtonBase,
    RadioBlock,
    ModalFilter,
    ModalCitySelect,
    Slider,
  },
  data() {
    return {
      radioBtnValues: ["All", "Girls", "Men"],
      isModalFilterShown: false,
      isModalCountryShown: false,
      category: "",
      country: "",
      km: 20,
      stepKm: 5,
      age: [20, 35],
      minAge: 18,
      maxAge: 75,
    };
  },
  methods: {
    onSelectFilter(e) {
      this.category = e.selected;
      console.log(this.category);
      this.isModalFilterShown = false;
    },

    onSelectCountry(e) {
      this.country = e.selected;
      console.log(this.country);
      this.isModalCountryShown = false;
    },
  },
};
</script>
<style src="@vueform/slider/themes/default.css">
</style>
<style lang="scss" scoped>
.inputdelete {
  background-color: #dfddda;
  width: 19px;
  height: 19px;
  border-radius: 50%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  position: absolute;
  top: 47px;
  right: 49px;
}
.search_filter {
  padding: 7vh 4% 6vh;
  display: flex;
  flex-direction: column;

  .radio__button {
    border-radius: 76px;
  }

  &__header {
    display: flex;
    justify-content: space-between;
    margin-left: 0.8%;
    margin-right: 1.3%;
    margin-bottom: 9%;
    align-items: center;

    .text-base {
      font-size: 16px;
      color: #d89972;
    }

    .title {
      font-weight: 600;
      font-size: 20px;
    }
  }

  &__title {
    margin-bottom: 10px;
  }

  &__radio {
    margin-bottom: 15px;
  }

  &__category {
    margin-bottom: 24px;
  }

  &__distance {
    margin-bottom: 35px;
  }

  &__slider-data {
    display: flex;
    justify-content: space-between;
    margin-bottom: 16px;
  }

  &__age {
    margin: 17px 0 32px;
  }

  &__progress {
    width: 66vw;
    margin-top: 6px;
  }

  &__country {
    position: relative;
    margin-bottom: 17px;
  }

  .clear {
    margin-top: 1px;
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
    }
  }

  &__check {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 22px 0;

    .checkbox {
      margin: 0;
    }
  }
}

.line {
  border-bottom: 1px solid #e6e4e3;
}

.checkbox {
  position: relative;
  top: -2px;
  margin-right: 12px;

  &__custom {
    width: 20px;
    height: 20px;
    border: 1px solid #e6e4e3;
    border-radius: 50%;
    background-color: transparent;
    display: flex;
    justify-content: space-around;
    align-items: center;
  }

  &__input {
    opacity: 0;
    position: absolute;

    &:checked + .checkbox__custom {
      background-color: var(--color-main-extra-light);
      border: 1px solid transparent;
    }
  }
}

.output {
  &.text-base {
    text-align: end;
  }
}

#app .input {
  padding: 9px 12px;
  height: 48px;
}

#app .input .input__arrow {
  top: 30px;
}
</style>


