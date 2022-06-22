<template>
  <router-view />
</template>

<style lang="scss">
@font-face {
  font-family: "SF Pro Display";
  src: local("San Francisco Pro Display Semibold"),
    local("San-Francisco-Pro-Display-Semibold"),
    url("./assets/fonts/SFProDisplay-Semibold.woff2") format("woff2"),
    url("./assets/fonts/SFProDisplay-Semibold.woff") format("woff"),
    url("./assets/fonts/SFProDisplay-Semibold.ttf") format("truetype");
  font-weight: 600;
  font-style: normal;
}

@font-face {
  font-family: "SF Pro Text";
  src: local("San Francisco Pro Text Medium"),
    local("San-Francisco-Pro-Text-Medium"),
    url("./assets/fonts/SFProText-Medium.woff2") format("woff2"),
    url("./assets/fonts/SFProText-Medium.woff") format("woff"),
    url("./assets/fonts/SFProText-Medium.ttf") format("truetype");
  font-weight: 500;
  font-style: normal;
}

@font-face {
  font-family: "Helvetica Neue";
  src: local("Helvetica Neue Roman"), local("Helvetica-Neue-Roman"),
    url("./assets/fonts/HelveticaNeueCyr-Roman.woff2") format("woff2"),
    url("./assets/fonts/HelveticaNeueCyr-Roman.woff") format("woff"),
    url("./assets/fonts/HelveticaNeueCyr-Roman.ttf") format("truetype");
  font-weight: 400;
  font-style: normal;
}

* {
  // Colors
  --color-main-dark: #362614;
  --color-main-light: #d89972;
  --color-main-extra-light: #e3b687;
  --color-secondary: #979491;
  --color-tretiary: #c9c6bf;
  --color-light-0: #fcfcfc;
  --color-light-10: #f2f1f0;
  --color-divider: #e6e4e3;
  --color-white: #ffffff;
  --color-black: #000000;
  --color-facebook: #3b5998;
  --color-danger: #d76d75;

  // Fonts
  --font-semibold: "SF Pro Display", sans-serif;
  --font-medium: "SF Pro Text", sans-serif;
  --font-regular: "Helvetica Neue", sans-serif;

  // Reset default styles
  margin: 0;
  padding: 0;

  box-sizing: border-box;
  color: var(--color-main-dark);
}

:root {
  --slider-connect-bg: var(--color-main-extra-light);
  --slider-height: 2px;
  --slider-handle-height: 22px;
  --slider-handle-width: 22px;
  --slider-handle-border: 2px solid var(--color-main-extra-light);
  --slider-handle-shadow: none;
}

li {
  list-style: none;
}

.page {
  width: 100%;
  height: calc(100vh - 56px);
  background-color: var(--color-light-0);
}

.bottom-line {
  width: 36%;
  height: 5px;
  margin: 0 auto;
  background: var(--color-main-dark);
  border-radius: 100px;

  position: absolute;
  left: 32%;
  bottom: 10px;
  z-index: 1000;
}

.link {
  font-family: var(--font-regular);
  font-weight: 400;
  font-size: 16px;
  line-height: 21px;
  letter-spacing: -0.32px;
  color: var(--color-main-extra-light);
  text-decoration: none;
}

.title {
  font-family: var(--font-semibold);
  font-weight: 600;
  font-size: 24px;
  line-height: 32px;
  letter-spacing: 0.36px;
}

.text-base {
  font-family: var(--font-regular);
  font-weight: 400;
  font-size: 16px;
  line-height: 21px;
  letter-spacing: -0.32px;
}

.back {
  background: no-repeat center center url("./assets/img/Back.svg");
  background-size: contain;
  width: 16px;
  height: 16px;
}

.close {
  background: no-repeat center center url("./assets/img/Close.svg");
  background-size: contain;
  width: 14px;
  height: 14px;
}

.delete {
  background: no-repeat center center url("./assets/img/Delete.svg");
  background-size: contain;
  width: 7px;
  height: 7px;
}

.filter {
  background: no-repeat center center url("./assets/img/Filter.svg");
  background-size: contain;
  width: 24px;
  height: 24px;
}

.check_icon {
  background: no-repeat center center url("./assets/img/Checked.svg");
  background-size: contain;
  width: 12px;
  height: 9px;
}

.confirm {
  background: no-repeat center center url("./assets/img/Сonfirm.svg");
  background-size: contain;
  width: 15px;
  height: 15px;
}
</style>