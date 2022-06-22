<template>
  <div class="wrapper page">
    <header class="header">
      <div class="back" @click="this.$router.push('/myaccountedit')"></div>
      <h1 class="title">Main questions</h1>
      <div></div>
    </header>
    <div class="questions">
      <div class="questions__content">
        <div class="questions__item">
          <select-base
            title="What gift would I prefer to receive for a holiday from a man?"
            :question="true"
            :approve="approve"
            :selected="q1"
            placeholder="Select answer..."
            @click="isModalQ1 = true"
          >
          </select-base>
        </div>
        <modal-answers v-if="isModalQ1" @select="onSelectQ1($event)">
        </modal-answers>
        <div class="questions__item">
          <select-base
            title="What gift would I prefer to receive for a holiday from a man?"
            :question="true"
            :approve="approve"
            :selected="q2"
            placeholder="Select answer..."
            @click="isModalQ2 = true"
          >
          </select-base>
        </div>
        <modal-answers v-if="isModalQ2" @select="onSelectQ2($event)">
        </modal-answers>
        <div class="questions__item" @click="this.$router.push('/myaccountaddquestions')">
          <div class="questions__add text-base">Add question</div>
        </div>
        <div class="questions__item" @click="this.$router.push('/myaccountaddquestions')">
          <div class="questions__add text-base">Add question</div>
        </div>
        <div class="questions__item" @click="this.$router.push('/myaccountaddquestions')">
          <div class="questions__add text-base">Add question</div>
        </div>
      </div>
      <button-base class="questions__button">
        Save
      </button-base>
    </div>
  </div>
</template>
<script>
import SelectBase from "../components/UI/SelectBase.vue";
import ButtonBase from "../components/UI/ButtonBase.vue";
import ModalAnswers from '../components/ModalAnswers.vue';

export default {
  name: "MyAccountQuestions",
  components: {
    SelectBase,
    ButtonBase,
    ModalAnswers,
  },
  data() {
    return {
      isModalQ1: false,
      isModalQ2: false,
      q1: "",
      q2: "",
      approve: true
    };
  },
  methods: {
    onSelectQ1(e) {
      this.q1 = e.selected;
      this.isModalQ1 = false;
    },
    onSelectQ2(e) {
      this.q2 = e.selected;
      this.isModalQ2 = false;
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

.questions {
  padding: 0 4% 6vh;
  display: flex;
  flex-direction: column;
  height: calc(100vh - 150px);

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
</style>


