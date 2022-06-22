<template>
  <div class='button' :class="className">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'AuthButtonBase',
  props: {
    colorBackgroundA: {
      type: Boolean,
      default: false
    },
    colorBackgroundN: {
      type: Boolean,
      default: false
    },
    long: {
      type: Boolean,
      default: false
    }

  },
  data(){
    return {
    }
  },
  methods: {
    click(){
      this.$emit('click')
    }
  },
  computed: {
    className(){
      return {
        'colorBackgroundA': this.colorBackgroundA,
        'colorBackgroundN': this.colorBackgroundN,
        'long': this.long,
      }
    }
  },
}
</script>

<style lang="scss" scoped>
.button {
  width: 100%;
  height: 48px;
  display: flex;
  justify-content: center;
  background: linear-gradient(0deg, var(--color-main-extra-light), var(--color-main-extra-light)), var(--color-main-light);
  border-radius: 12px;
  padding: 13px 0;
  cursor: pointer;
  font-family: var(--font-medium);
  color: var(--color-white);

  &.colorBackgroundN {
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    padding: 7px 12px;
    gap: 10px;
    position: absolute;
    width: 74px;
    height: 32px;
    font-family: 'Helvetica Neue';
    font-style: normal;
    font-weight: 400;
    font-size: 13px;
    line-height: 18px;
    background: #F2F1F0;
    border-radius: 16px;
    color: #362614;
  }
  &.long {
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    padding: 7px 12px;
    gap: 10px;
    position: absolute;
    width: 90px;
    height: 32px;
    font-family: 'Helvetica Neue';
    font-style: normal;
    font-weight: 400;
    font-size: 13px;
    line-height: 18px;
    background: #F2F1F0;
    border-radius: 16px;
    color: #362614;
    justify-content: left;
  }
  &.colorBackgroundA {
    width: 87px;
    height: 32px;
    background: linear-gradient(0deg, #E3B687, #E3B687), #D89972;
    border-radius: 16px;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    padding: 7px 12px;
    gap: 10px;
    font-family: 'Helvetica Neue';
    font-style: normal;
    font-weight: 400;
    font-size: 13px;
    line-height: 18px;
    letter-spacing: -0.078px;
    color: #FFFFFF;
    flex: none;
    order: 0;
    flex-grow: 0;
  }
}

</style>
