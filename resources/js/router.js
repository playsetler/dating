import { createRouter, createWebHistory } from 'vue-router';
import StartView from './views/StartView.vue';
import AuthView from './views/AuthView.vue';
import AuthViewG from './views/AuthViewG.vue';
import RegisterWelcome from './views/RegisterWelcome.vue';
import RegisterSelectGender from './views/RegisterSelectGender.vue';
import RegisterEnterName from './views/RegisterEnterName.vue';
import RegisterBirthday from './views/RegisterBirthday.vue';
import RegisterEmail from './views/RegisterEmail.vue';
import RegisterCellphone from './views/RegisterCellphone.vue';
import RegisterConfirmNumber from './views/RegisterConfirmNumber.vue';
import RegisterEnterPassword from './views/RegisterEnterPassword.vue';
import RegisterAddPhotos from './views/RegisterAddPhotos.vue';
import FirstStartHints from './views/FirstStartHints.vue';
import LoginByPhone from './views/LoginByPhone.vue';
import LoginByEmail from "./views/LoginByEmail.vue";
import RegisterAddedPhotos from './views/RegisterAddedPhotos.vue';
import RegisterPresentationVideo from './views/RegisterPresentationVideo.vue';
import FeedView from './views/FeedView.vue'
import ProfileView from "./views/ProfileView.vue";
import MyAccount from "./views/MyAccount.vue";
import MyAccountEdit from "./views/MyAccountEdit.vue";

const routes = [
  {
    path: '/',
    name: 'StartView',
    component: StartView
  },
  {
    path: '/auth',
    name: 'AuthView',
    component: AuthView
  },
  {
    path: '/authG',
    name: 'AuthViewG',
    component: AuthViewG
  },
  {
    path: '/LoginByPhone',
    name: 'LoginByPhone',
    component: LoginByPhone
  },
  {
    path: '/login',
    name: 'LoginByEmail',
    component: LoginByEmail
  },
  {
    path: '/register',
    name: 'RegisterWelcome',
    component: RegisterWelcome
  },
  {
    path: '/register/gender',
    name: 'RegisterSelectGender',
    component: RegisterSelectGender
  },
  {
    path: '/register/name',
    name: 'RegisterEnterName',
    component: RegisterEnterName
  },
  {
    path: '/register/birthday',
    name: 'RegisterBirthday',
    component: RegisterBirthday
  },
  {
    path: '/register/email',
    name: 'RegisterEmail',
    component: RegisterEmail
  },
  {
    path: '/register/cellphone',
    name: 'RegisterCellphone',
    component: RegisterCellphone
  },
  {
    path: '/register/confirmnumber',
    name: 'RegisterConfirmNumber',
    component: RegisterConfirmNumber
  },
  {
    path: '/register/password',
    name: 'RegisterEnterPassword',
    component: RegisterEnterPassword
  },
  {
    path: '/register/addphotos',
    name: 'RegisterAddPhotos',
    component: RegisterAddPhotos
  },
  {
    path: '/hints',
    name: 'FirstStartHints',
    component: FirstStartHints
  },
  {
    path: '/register/addedphotos',
    name: 'RegisterAddedPhotos',
    component: RegisterAddedPhotos
  },
  {
    path: '/register/presentationvideo',
    name: 'RegisterPresentationVideo',
    component: RegisterPresentationVideo
  },
  {
    path: '/profileview',
    name: 'ProfileView',
    component: ProfileView
  },
  {
    path: '/feed',
    name: 'FeedView',
    component: FeedView
  },
  {
    path: '/myaccount',
    name: 'MyAccount',
    component: MyAccount
  },
  {
    path: '/myaccountedit',
    name: 'MyAccountEdit',
    component: MyAccountEdit
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

router.beforeEach((to, from, next) => {
  const token = localStorage.getItem('token');
  if (!token) {
      if(to.name == 'LoginByEmail' ||
        to.name == 'RegisterWelcome' ||
        to.name == 'RegisterSelectGender' ||
        to.name == 'RegisterEnterName' ||
        to.name == 'RegisterBirthday' ||
        to.name == 'RegisterEmail' ||
        to.name == 'RegisterEnterPassword' ||
        to.name == 'RegisterAddPhotos' ||
        to.name == 'RegisterAddedPhotos' ||
        to.name == 'RegisterPresentationVideo') {
          return next();
      } else {
          return next({name: 'LoginByEmail', params: { referer: from.name }});
      }
  }

  if((to.name == 'LoginByEmail' ||
    to.name == 'RegisterWelcome' ||
    to.name == 'RegisterSelectGender' ||
    to.name == 'RegisterEnterName' ||
    to.name == 'RegisterBirthday' ||
    to.name == 'RegisterEmail' ||
    to.name == 'RegisterEnterPassword' ||
    to.name == 'RegisterAddPhotos' ||
    to.name == 'RegisterAddedPhotos' ||
    to.name == 'RegisterPresentationVideo') && token) {
      return next({ name: from.name || 'MyAccount' });
  }

  next();
});

export default router
