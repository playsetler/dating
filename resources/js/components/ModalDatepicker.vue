<template>
  <modal-base>
    <div class="content">
      <h1 class="title">Birth Date</h1>
      <div class="datepicker">
        <scroll-picker
            :options="options"
            v-model="selections"
            style="background: transparent; height: 285px; font-family: var(--font-regular);"
        >
          <template v-slot:option="prop" >
            <div class="custom-option" :class="{ active: prop.active }">
              {{ prop.item.label }}
            </div>
          </template>
          <template v-slot:center-overlay>
            <div class="center-overlay"></div>
          </template>
          <template v-slot:top-overlay>
            <div class="top-overlay"></div>
          </template>
          <template v-slot:bottom-overlay>
            <div class="bottom-overlay"></div>
          </template>
        </scroll-picker>
      </div>
      <div class="toggle">
        <p class="text-base">Hide a question from your profile</p>
        <checkbox-long></checkbox-long>
      </div>
      <div class="buttons">
        <button-base class="buttons__cancel">Cancel</button-base>
        <button-base>Apply</button-base>
      </div>
    </div>
  </modal-base>
</template>
<script>
import ModalBase from './UI/ModalBase.vue'
import ScrollPicker from 'vue3-scroll-picker'
import CheckboxLong from "@/components/UI/CheckboxLong";
import ButtonBase from "@/components/UI/ButtonBase";

export default {
  name: 'ModalDatepicker',
  components: {
    ButtonBase,
    CheckboxLong,
    ScrollPicker,
    ModalBase
  },
  data() {
    return{
      options: [
          [
            { label: 'Январь', value: 1 },
            { label: 'Февраль', value: 2 },
            { label: 'Март', value: 3 },
            { label: 'Апрель', value: 4 },
            { label: 'Май', value: 5 },
            { label: 'Июнь', value: 6 },
            { label: 'Июль', value: 7 },
            { label: 'Август', value: 8 },
            { label: 'Сентябрь', value: 9 },
            { label: 'Октябрь', value: 0 },
            { label: 'Ноябрь', value: 11 },
            { label: 'Декабрь', value: 12 },
          ],
          [
            { label: 2022, value: 2022 },
            { label: 2021, value: 2021 },
            { label: 2020, value: 2020 },
            { label: 2019, value: 2019 },
            { label: 2018, value: 2018 },
            { label: 2017, value: 2017 },
            { label: 2016, value: 2016 },
            { label: 2015, value: 2015 },
            { label: 2014, value: 2014 },
            { label: 2013, value: 2013 },
          ]
      ],
      selections: [ 6, 2022 ]
    }
  }
}
</script>
<style lang="scss" scoped>
.content {
  padding: 20px 16px 53px;

  .title {
    padding-bottom: 20px;
    border-bottom: 1px solid var(--color-divider);
  }

  .datepicker {
    padding: 29px 0;
    border-bottom: 1px solid var(--color-divider);
  }

  .toggle {
    padding: 12px 0;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 24px;
  }

  .buttons {
    display: flex;
    justify-content: space-between;

    &__cancel {
      margin-right: 9px;
      background: var(--color-light-10);
      color: var(--color-black);
    }
  }
}

.center-overlay {
  background: var(--color-main-dark);
  opacity: 0.1;
  width: 100%;
  height: 34px;
  border-radius: 12px;
}

.top-overlay {
  height: 100%;
  background: linear-gradient(0deg, hsla(0, 0%, 100% ,0), var(--color-light-0));
}

.bottom-overlay {
  height: 100%;
  background: linear-gradient(180deg, hsla(0, 0%, 100%, 0), var(--color-light-0));
}

.custom-option {
  color: var(--color-secondary);
  font-size: 19px;
  line-height: 23px;
  letter-spacing: 0.58px;
  padding: 5px;
  width: 35vw;
  text-align: center;

  &.active {
    color: var(--color-main-dark);
    font-size: 23px;
    line-height: 27px;
    letter-spacing: 0.7px;
  }
}
</style>