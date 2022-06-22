<template>
  <modal-base :fullScreen="true">
    <div class="select-country">
      <h1 class="title select-country__title">Select a country</h1>
      <input-base class="select-country__search" type="text" :label="false" placeholder="Search"></input-base>
      <ul v-if="selectingCountry" class="select-country__list">
        <li
            v-for="item in countries"
            :key="item"
            class="select-country__item country"
            @click="onSelectCountry(item)">
          <span class="country__icon" :class="{ 'country__icon_checked': selectedCountry === item }"></span>
          <span class="country__name">{{ item }}</span>
        </li>
      </ul>
      <ul v-if="selectingCity" class="select-country__list">
        <li
            v-for="item in cities"
            :key="item.name"
            class="select-country__item city"
            @click="onSelectCity(item)">
          <span class="city__icon" :class="{ 'city__icon_checked': selectedCity === item.name }"></span>
          <span class="city__name" :class="{ disabled: !item.available }">{{ item.name }}</span>
          <span v-if="!item.available" class="city__buy">Buy</span>
        </li>
      </ul>
    </div>
  </modal-base>
</template>
<script>
import ModalBase from "../components/UI/ModalBase";
import InputBase from "../components/UI/InputBase";
export default {
  name: 'ModalSelectCountry',
  components: {
    InputBase,
    ModalBase
  },
  data() {
    return {
      countries: [ 'Russia', 'Ukraine', 'USA', 'Germany' ],
      cities: [
        { name: 'Moscow', available: true },
        { name: 'Kiev', available: true },
        { name: 'New York', available: true },
        { name: 'Berlin', available: true },
        { name: 'Roma', available: false }
      ],
      selectingCountry: true,
      selectingCity: false,
      selectedCountry: '',
      selectedCity: ''
    }
  },
  beforeMount() {
    this.selectedCountry = this.countries[0]
    this.selectedCity = this.cities[0].name
  },
  methods: {
    onSelectCountry(country) {
      this.selectedCountry = country
      this.selectingCountry = false
      this.selectingCity = true
    },
    onSelectCity(city) {
      if (city.available) this.selectedCity = city.name
    }
  }
}
</script>
<style lang="scss" scoped>
.select-country {
  padding: 0 16px;

  &__title {
    font-size: 20px;
    line-height: 64px;
    letter-spacing: 0.38px;
  }

  &__search {
    height: 40px;
    margin-bottom: 16px;
  }

  &__list {

  }

  &__item {
    border-bottom: 1px solid var(--color-light-10);
  }
}

.country, .city {
  display: flex;
  padding: 17px 0;
  align-items: center;

  &__icon {
    border: 1px solid var(--color-divider);
    border-radius: 50%;
    width: 22px;
    height: 22px;
    margin-right: 12px;

    &_checked {
      border-color: var(--color-main-light);
      background: no-repeat center center var(--color-main-light) url('../assets/img/Checked.svg');
    }
  }

  &__name {
    font-family: var(--font-regular);
    font-size: 16px;
    line-height: 21px;
    color: var(--color-main-dark);
    letter-spacing: -0.32px;
    flex-grow: 2;
  }
}

.city {
  &__buy {
    width: 48px;
    border-radius: 76px;
    background-color: var(--color-light-10);
    font-family: var(--font-medium);
    font-size: 13px;
    letter-spacing: -0.08px;
    line-height: 28px;
    padding: 0 12px;
  }

  .disabled {
    color: var(--color-secondary);
  }
}
</style>