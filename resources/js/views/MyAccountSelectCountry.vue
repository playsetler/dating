<template>
  <div class="page">
    <modal-select-country @counry-select="onCountrySelect($event)"></modal-select-country>
  </div>
</template>
<script>
import ModalSelectCountry from "@/components/ModalSelectCountry";

export default {
  name: 'MyAccountSelectCountry',
  components: {
    ModalSelectCountry
  },
  data() {
    return {
      selected: ''
    }
  },
  methods: {
    onCountrySelect(e) {
      this.selected = e.selected
    }
  }
}
</script>
<style lang="scss" scoped>

</style>