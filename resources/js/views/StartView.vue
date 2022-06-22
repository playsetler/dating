<template>
  <div
    class="start page"
    @click="onClick"
    :class="{ 'bgImg-1': imgNum === 1, 
              'bgImg-2': imgNum === 2,
              'bgImg-3': imgNum === 3,
              'bgImg-4': imgNum === 4,
              'bgImg-5': imgNum === 5,
              'bgImg-6': imgNum === 6,
              'bgImg-7': imgNum === 7,
              'bgImg-8': imgNum === 8}">

    <div class="bottom-line"></div>
  </div>
</template>
<script>
export default {
  name: 'StartView',
  components: {
  },
  data() {
    return {
      imgNum: 1
    }
  },
  methods: {
    onClick() {
      if (this.imgNum + 1 <= 8) {
        this.imgNum++
      } else {
        this.$router.push('/auth')
      }
    }
  }
}
</script>
<style lang="scss" scoped>
.start {
  background: no-repeat center center rgb(227, 182, 135, 0.5);
  background-size: cover;
}

.bgImg- {
  &1, &2, &3, &4, &5, &6, &7, &8 {
    transition: all 1s linear;
  }

  &1 {
    background-image: url('../assets/img/start/1.png');
  }
  
  &2 {
    background-image: url('../assets/img/start/2.png');
  }

  &3 {
    background-image: url('../assets/img/start/3.png');
  }

  &4 {
    background-image: url('../assets/img/start/4.png');
  }

  &5 {
    background-image: url('../assets/img/start/5.png');
  }

  &6 {
    background-image: url('../assets/img/start/6.png');
  }

  &7 {
    background-image: url('../assets/img/start/7.png');
  }

  &8 {
    background-image: url('../assets/img/start/8.png');
  }
}
</style>