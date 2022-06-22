<template>
  <div class="wrapper page">
    <header class="header">
      <div class="back" @click="this.$router.push('/myaccountquestions')"></div>
      <h1 class="title">Add question</h1>
      <div class="text-base">Further</div>
    </header>
    <div class="question">
      <div class="question__content">
        <div class="question__item text-base">
          For me, the manifestation of true love on the part of a man is
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "MyAccountAddQuestion",
  components: {},
  data() {
    return {
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

}

.question {
  padding: 0 4% 6vh;
  display: flex;
  flex-direction: column;
  height: calc(100vh - 112px);

  &__item {
    margin-bottom: 24px;

    .text-base {
      color: var(--color-main-dark);
    }
  }
}

</style>


