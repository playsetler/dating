<template>
  <modal-base :fullScreen="true">
    <div class="tags">
      <h1 class="title tags__title">Подробнее</h1>
      <ul class="tags__list">
        <li
            v-for="tag in tags"
            :key="tag.name"
            class="tags__item tag">
        <span class="tag__icon"
              :class="{ 'tag__icon_smoking':         tag.name === 'Smoking',
                        'tag__icon_alcohol':         tag.name === 'Alcohol',
                        'tag__icon_animals':         tag.name === 'Animals',
                        'tag__icon_religion':        tag.name === 'Religion',
                        'tag__icon_orientation':     tag.name === 'Orientation',
                        'tag__icon_education':       tag.name === 'Education',
                        'tag__icon_family-plans':    tag.name === 'Family plans',
                        'tag__icon_hometown':        tag.name === 'Hometown',
                        'tag__icon_political-views': tag.name === 'Political views' }"></span>
          <span class="text-base tag__name">{{ tag.name }}</span>
          <span class="tag__value">{{ tag.value }}</span>
        </li>
      </ul>
    </div>
  </modal-base>
</template>
<script>
import ModalBase from './UI/ModalBase.vue'

export default {
  name: 'ModalTags',
  components: {
    ModalBase
  },
  data() {
    return {
      tags: [
        {
          name: 'Smoking',
          value: 'I don\'t smoke',
        },
        {
          name: 'Alcohol',
          value: 'Rarely',
        },
        {
          name: 'Animals',
          value: 'There are animals',
        },
        {
          name: 'Religion',
          value: 'Atheism',
        },
        {
          name: 'Orientation',
          value: 'Heterosexual',
        },
        {
          name: 'Education',
          value: 'Higher, Bachelor',
        },
        {
          name: 'Family plans',
          value: 'I want kids',
        },
        {
          name: 'Hometown',
          value: 'Moscow',
        },
        {
          name: 'Political views',
          value: 'Conservative',
        }
      ]
    }
  }
}
</script>
<style lang="scss" scoped>
.tags {
  padding: 0 16px;

  &__title {
    font-size: 20px;
    line-height: 64px;
    letter-spacing: 0.38px;
    border-bottom: 1px solid var(--color-light-10);
  }

  &__list {
    padding-top: 30px;
  }

  &__item {
    margin-bottom: 27px;
  }
}

.tag {
  display: flex;
  align-items: center;

  &__name {
    flex-grow: 2;
  }

  &__icon {
    width: 32px;
    height: 32px;
    margin-right: 12px;
    background: no-repeat center center;

    &_smoking {
      background-image: url('../assets/img/myaccount/Smoking.svg');
    }

    &_alcohol {
      background-image: url('../assets/img/myaccount/Alcohol.svg');
    }

    &_animals {
      background-image: url('../assets/img/myaccount/Animals.svg');
    }

    &_religion {
      background-image: url('../assets/img/myaccount/Religion.svg');
    }

    &_orientation {
      background-image: url('../assets/img/myaccount/Orientation.svg');
    }

    &_education {
      background-image: url('../assets/img/myaccount/Education.svg');
    }

    &_family-plans {
      background-image: url('../assets/img/myaccount/FamilyPlans.svg');
    }

    &_hometown {
      background-image: url('../assets/img/myaccount/Hometown.svg');
    }

    &_political-views {
      background-image: url('../assets/img/myaccount/PoliticalViews.svg');
    }
  }

  &__value {
    font-family: var(--font-regular);
    font-size: 16px;
    line-height: 21px;
    color: var(--color-secondary);
    letter-spacing: -0.32px;
  }
}
</style>