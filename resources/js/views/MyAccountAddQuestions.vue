<template>
  <div class="wrapper page">
    <header class="header">
      <div class="back" @click="this.$router.push('/myaccountquestions')"></div>
      <h1 class="title">Add questions</h1>
      <div></div>
    </header>
    <div class="questions">
      <div class="questions__content">
        <div class="questions__item">
          <div class="questions__add text-base" @click="this.$router.push('/myaccountaddquestion')">
            Add your question and answer
          </div>
        </div>
        <div class="answer text-base" v-for="(item, idx) of answers" :key="idx">
          {{ item }}
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "MyAccountAddQuestions",
  components: {},
  data() {
    return {
      answers: [
        "If I could change something in the world, I would change",
        "I can never come to terms with this quality in a woman",
        "On the first date, it's unacceptable for me",
        "For me, the manifestation of true love on the part of a man is",
        "For me, a true friend has three main qualities",
        "My ideal romantic dinner is",
        "When I meet new people",
      ],
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

  .viewing {
    margin-top: 1px;
  }
}

.questions {
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

    &.question {
      min-height: 70px;
      padding: 10px 12px;
    }

    .select {
      height: 70px;
      padding: 13px 12px;
    }
  }

  &__add {
    border: 1px dashed #c9c6bf;
    border-radius: 12px;
    padding: 24px 20px;

    &.text-base {
      font-size: 16px;
      color: var(--color-secondary);
      text-align: center;
    }
  }
}

.line {
  border-bottom: 1px solid #e6e4e3;
}

.answer {
  &.text-base {
    padding: 12px 16px;
    background: var(--color-light-10);
    border-radius: 12px;
    color: var(--color-main-dark);
  }
}
</style>


