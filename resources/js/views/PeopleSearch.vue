<template>
  <div class="search page">
    <header class="search__header">
      <div class="filter" @click="this.$router.push('/filter')"></div>
    </header>
    <div class="search__content">
      <h1 class="title">People Search</h1>
      <!-- scroll start -->
      <div class="scroll-dating">
        <div class="scroll-dating__item">
          <div class="scroll-dating__header">
            <div class="scroll-dating__img">
              <img src="../assets/img/photos/Lisa_min.jpg" />
            </div>
            <div class="scroll-dating__bio title">
              <span class="scroll-dating__name">Lisa</span>
              <span>, </span>
              <span class="scroll-dating__age">21</span>
            </div>
            <div class="scroll-dating__confirmed">
              <div class="confirm"></div>
            </div>
          </div>
          <div class="scroll-dating__content text-base">
            Hello everyone! Who wants to go to the park with me?
          </div>
        </div>
        <div class="scroll-dating__item">
          <div class="scroll-dating__header">
            <div class="scroll-dating__img">
              <img src="../assets/img/photos/Konstantin_mini.jpg" />
            </div>
            <div class="scroll-dating__bio title">
              <span class="scroll-dating__name">Konstantin</span>
              <span>, </span>
              <span class="scroll-dating__age">43</span>
            </div>
            <div class="scroll-dating__confirmed">
              <div class="confirm"></div>
            </div>
          </div>
          <div class="scroll-dating__content text-base">
            I want to invite a nice girl on a romantic date to...
          </div>
        </div>
      </div>
      <!-- scroll finish -->

      <div class="line"></div>

      <!-- filters start -->
      <div class="filters">
        <div class="filters__item">
          <div class="filters__title text-base">Girls</div>
          <div class="filters__delete">
            <div class="delete"></div>
          </div>
        </div>
        <div class="filters__item">
          <div class="filters__title text-base">from 18 to 26 years</div>
          <div class="filters__delete">
            <div class="delete"></div>
          </div>
        </div>
      </div>
      <!-- filters finish -->
    </div>
    <!-- users_list start -->
    <div class="users_list">
      <div class="users_list__item" v-for="item of users_list" :key="item.id">
        <div class="users_list__photo">
          <img :src="item.img" />
        </div>
        <div class="users_list__bio">
          <span class="users_list__name text-base">{{ item.name }}</span>
          <span>, </span>
          <span class="users_list__age">{{ item.age }}</span>
        </div>
      </div>
    </div>
    <!-- users_list finish -->
  </div>
</template>
<script>
export default {
  name: "PeopleSearch",
  data() {
    return {
      users_list: [
        {
          id: 1,
          name: "Liza",
          age: 21,
          img: require("../assets/img/photos/Liza.jpg"),
        },
        {
          id: 2,
          name: "Nastya",
          age: 24,
          img: require("../assets/img/photos/Nastya.jpg"),
        },
        {
          id: 3,
          name: "Kate",
          age: 21,
          img: require("../assets/img/photos/Kate.jpg"),
        },
        {
          id: 4,
          name: "Louise",
          age: 21,
          img: require("../assets/img/photos/Louise.jpg"),
        },
        {
          id: 5,
          name: "Marine",
          age: 21,
          img: require("../assets/img/photos/Liza.jpg"),
        },
        {
          id: 6,
          name: "Alex",
          age: 21,
          img: require("../assets/img/photos/Girl2.jpg"),
        },
        {
          id: 7,
          name: "Girl1",
          age: 21,
          img: require("../assets/img/photos/Girl1.jpg"),
        },
        {
          id: 8,
          name: "Girl2",
          age: 21,
          img: require("../assets/img/photos/Girl2.jpg"),
        },
        {
          id: 9,
          name: "Girl3",
          age: 21,
          img: require("../assets/img/photos/Louise.jpg"),
        },
      ],
      barMinValue: 22,
      barMaxValue: 37,
    };
  },
  methods: {
    UpdateValues(e) {
      this.barMinValue = e.minValue;
      this.barMaxValue = e.maxValue;
    },
  },
};
</script>
<style lang="scss" scoped>
.search {
  padding: 7vh 4% 6vh;
  display: flex;
  flex-direction: column;

  &__header {
    display: flex;
    justify-content: flex-end;
    margin-left: 0.8%;
    margin-right: 1.3%;
    margin-bottom: 5%;
  }

  .filter {
    margin-top: 1px;
  }

  &__content {
    text-align: left;

    .title {
      margin-bottom: 8px;
      font-size: 32px;
    }
  }
}

.scroll-dating {
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin: 22px 0px 15px;

  &__item {
    background: #ffffff;
    box-shadow: 0px 4px 24px rgba(78, 60, 33, 0.08);
    border-radius: 12px;
    padding: 12px 8px 12px 11px;
    max-width: 48%;
  }

  &__header {
    display: flex;
    align-items: center;
    margin-bottom: 4px;
  }

  &__img {
    width: 24px;
    height: 24px;
    border-radius: 50%;
    background-color: #f2f1f0;
  }

  &__content {
    font-size: 12px;

    &.text-base {
      line-height: 15px;
    }
  }

  &__bio {
    margin: auto 8px !important;
  }

  .title {
    font-size: 13px;
    margin: 0;
  }
}

.line {
  border-bottom: 1px solid #e6e4e3;
}

.users_list {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;

  &__item {
    min-height: 168px;
    max-width: 30%;
    display: flex;
    flex-direction: column;
    margin-bottom: 24px;
  }

  &__bio {
    text-align: center;
    font-size: 13px;
  }

  &__photo {
    background-color: #f2f1f0;
    min-height: 140px;
    border-radius: 12px;
    margin-bottom: 12px;

    img {
      background-size: contain;
      width: 100%;
      height: 100%;
    }
  }

  &__name {
    &.text-base {
      font-size: 13px;
    }
  }
}

.filters {
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
  align-items: center;
  margin: 17px 0 15px;

  &__item {
    background: #f2f1f0;
    border-radius: 16px;
    padding: 5px 8px 0px;
    display: flex;
    justify-content: space-between;
    margin-right: 9px;
    margin-bottom: 6px;
  }

  &__delete {
    background-color: #dfddda;
    width: 19px;
    height: 19px;
    border-radius: 50%;
    display: flex;
    justify-content: space-around;
    align-items: center;
    top: 21px;
    right: 35px;
  }

  &__title {
    min-width: 60px;
    margin-right: 8px;

    &.text-base {
      font-size: 13px;
      line-height: 25px;
    }
  }
}
</style>