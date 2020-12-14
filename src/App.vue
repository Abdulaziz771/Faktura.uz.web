
<template>
  <div id="app">
      <router-view></router-view>
      <transition name="slide-fade1">
          <div id="sidebar-menu"  v-show="$store.getters.isSidebaerOpen" :class="{ active : $store.getters.isSidebaerOpen }">
              <div class="sidebar-top">
                <img src="./assets/img/logo-faktura-center.png" alt="Faktura.uz, Faktura, Роуминг оператор, электронный документооборот">
                <div class="x-icon-block">
                  <XIcon @click="$store.commit('toggleSidebar', false)"/>
                </div>
              </div>
              <div class="sidebar-body">
                <ul>
                  <li>
                    <a data-toggle="collapse" href="#collapseExample" class="li-text">{{ translation.translate('header', 'aboutUs') }}<ChevronDownIcon style="width: 25px;"/></a>
                    <div class="collapse" id="collapseExample">
                        <ul class="mt-2 pl-4">
                          <li class="p-0" @click="$store.commit('toggleSidebar', false)">
                            <router-link class="li-text-1" :to='{ name: "1с" }'>{{ translation.translate('header', '1c') }}</router-link>
                          </li>
                          <li class="p-0"  @click="$store.commit('toggleSidebar', false)">
                            <a class="li-text-1" href="https://api.faktura.uz/help/" target="_blank" @click="callGtag('API переходы,api_href,click')">{{ translation.translate('header', 'apiDocumentation') }}</a>
                          </li>
                          <li class="p-0"  @click="$store.commit('toggleSidebar', false)">
                            <router-link class="li-text-1" :to='{ name: "compare" }'>{{ translation.translate('footer', 'compare') }}</router-link>
                          </li>
                          <li class="p-0"  @click="$store.commit('toggleSidebar', false)">
                            <router-link class="li-text-1" :to='{ name: "other-projects" }'>{{ translation.translate('footer', 'outOtherProjects') }}</router-link>
                          </li>
                          <li class="p-0"  @click="$store.commit('toggleSidebar', false)">
                            <router-link class="li-text-1" :to='{ name: "FAQ" }'>FAQ</router-link>
                          </li>
                          <li class="p-0" @click="$store.commit('toggleSidebar', false)">
                            <router-link class="li-text-1" :to='{ name: "rukovodstvo-polzovatelya" }'>{{ translation.translate('header','documentation') }}</router-link>
                          </li>
                          <li class="p-0"  @click="$store.commit('toggleSidebar', false)">
                            <router-link class="li-text-1" :to='{ name: "about-faktura" }'>Faktura.uz </router-link>
                          </li>
                        </ul>
                    </div>
                  </li>
                  <li  @click="$store.commit('toggleSidebar', false)">
                    <router-link class="li-text" :to="{ name: 'video-lessons' }">{{ translation.translate('footer', 'videoLessons') }}</router-link>
                  </li>
                  <li  @click="$store.commit('toggleSidebar', false)">
                    <router-link class="li-text" :to='{ name: "price" }'>{{ translation.translate('header', 'pricesItem') }}</router-link>
                  </li>
                  <li  @click="$store.commit('toggleSidebar', false)">
                    <router-link class="li-text" :to='{ name: "updates" }'>{{ translation.translate('header', 'updates') }}</router-link>
                  </li>
                  <li  @click="$store.commit('toggleSidebar', false)">
                    <router-link class="li-text" :to='{ name: "tech-support" }'>{{ translation.translate('header', 'tech') }}</router-link>
                  </li>
                  <li v-if="$store.getters.valueofCurrentLanguage == 'uz'" class="nav-item nav-item-6 d-flex position-relative" @click="_onChangeLanguage('ru'), callGtag('Перевод на Рус,rus_translation,click')">
                      <a href="" class="nav-link font-weight-bold language-change universal-radius universal-transition" style="font-size: 18px; padding: 0; padding-right: 8px;">Ру</a>
                      <img src="./assets/img/rus-icon.png" class="cursor-pointer" alt="faktura.uz russian icon language" style="height: 23px; width: 23px">
                  </li>
                  <li v-else class="nav-item nav-item-6 d-flex position-relative" @click="_onChangeLanguage('uz'), callGtag('Перевод на Узб,uzb_translate,click')">
                      <a href="" class="nav-link font-weight-bold language-change universal-radius universal-transition" style="font-size: 18px; padding: 0; padding-right: 8px;">Уз</a>
                      <img src="./assets/img/uz-icon.png" class="cursor-pointer" alt="faktura.uz russian icon language" style="height: 23px; width: 23px">
                  </li>
                </ul>
              </div>
          </div>
      </transition>
      <div class="social-btn">
          <!-- click here @click="toggleSmmfeatures" -->
          <div id="btn"  class="all-btn " :class="{ 'play-img' : !smmFeaturesCondition }">
             <a href="https://t.me/fakturauz"><img style="width: 55px" src="./assets/img/smm-telegram-logo-circle.png" alt=""></a>
          </div>
          <div>
          </div>
          <div id="telelgram_btn" class="all-btn soc_btn" @click='callGtag("Телеграм переходы,telegram_smm,click")' :class="{ hoverBtn : smmFeaturesCondition }" >
            <a href="https://t.me/fakturauz" target="_blank"><img src="./assets/img/smm-telegram-logo-circle.png" alt=""></a>
          </div>
          <div id="instagram_btn" class="all-btn soc_btn" :class="{ hoverBtn : smmFeaturesCondition }" >
            <a href="https://www.instagram.com/faktura.uz/" target="_blank"><img src="./assets/img/instagram-circle.png" alt=""></a>
          </div>
          <div id="facebook_btn" class="all-btn soc_btn" :class="{ hoverBtn : smmFeaturesCondition }" @click='callGtag("Facebook переходы,facebook_smm,click")'>
              <a href="https://www.facebook.com/faktura.uz/" target="_blank"><img src="./assets/img/facebok-circle.png" alt=""></a>
          </div>
      </div>
      <div class="winter-is-coming">
        <div class="snow snow--near"></div>
        <div class="snow snow--near snow--alt"></div>
        
        <div class="snow snow--mid"></div>
        <div class="snow snow--mid snow--alt"></div>
        
        <div class="snow snow--far"></div>
        <div class="snow snow--far snow--alt"></div>
      </div>
  </div>
</template>

<script>

import {
  XIcon,
  ChevronDownIcon
} from 'vue-feather-icons'
import mixin from './gtagMixin'
import translate from './translation/translate'
import tgFunc from './tgFunction'
export default {
  name: 'App',
  mixins: [mixin],
  data() {
    return {
      tgFunc,
      translation: translate,
      smmFeaturesCondition: false
    }
  },
  methods: {
    toggleSmmfeatures() {
      this.smmFeaturesCondition = !this.smmFeaturesCondition
    },
    _onChangeLanguage(value) {
        translate.changeLocale(value);
    },
  },
  components: {
    XIcon,
    ChevronDownIcon,
  }
}

</script>

<style>
.snow, .winter-is-coming {
  z-index: 100;
  pointer-events: none;
}

.winter-is-coming {
  overflow: hidden;
  position: absolute;
  top: 0;
  height: 100%;
  width: 100%;
  max-width: 100%;
}

.snow {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  animation: falling linear infinite both;
  transform: translate3D(0, -100%, 0);
}
.snow--near {
  animation-duration: 10s;
  background-image: url("assets/img/snow/abd38.png");
  background-size: contain;
}
.snow--near + .snow--alt {
  animation-delay: 5s;
}
.snow--mid {
  animation-duration: 20s;
  background-image: url("assets/img/snow/abd39.png");
  background-size: auto;
}
.snow--mid + .snow--alt {
  animation-delay: 10s;
}
.snow--far {
  animation-duration: 30s;
  background-image: url("assets/img/snow/abd40.png");
  background-size: auto;
}
.snow--far + .snow--alt {
  animation-delay: 15s;
}

@keyframes falling {
  0% {
    transform: translate3D(-7.5%, -100%, 0);
  }
  100% {
    transform: translate3D(7.5%, 100%, 0);
  }
}

</style>

<style >

#btn {
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 75px;
  background: linear-gradient(200deg, rgba(5,142,223,1) 0%, rgba(16,191,248,1) 100%) !important;
}
#telelgram_btn, #instagram_btn, #facebook_btn {
  display: flex;
  justify-content: center;
  align-items: center;
}
#telelgram_btn img {
  width: 45px;
}
#facebook_btn img {
  width: 37px;
}
#instagram_btn img {
  width: 43px;
}

#btn img {
  width: 40px;
}
.social-btn {
    position: fixed;
    width: 60px;
    height: 60px;
    border-radius: 50%;
    bottom: 80px;
    left: 100px;
    z-index: 1000;
    display: flex;
    justify-content: center;
    align-items: center;
}

#telelgram_btn.hoverBtn {
    transform: translate(57px, -56px);
}

#instagram_btn.hoverBtn {
    transform: translate(75px, 7px);
}

#facebook_btn.hoverBtn {
    transform: translate(-9px, -74px);
}

.all-btn {
    box-shadow: 0 0 29px rgb(255 255 255 / 45%);
    position: absolute;
    width: 75px;
    height: 75px;
    border-radius: 50%;
    background: linear-gradient(200deg, rgba(5,142,223,1) 0%, rgba(16,191,248,1) 100%) !important;
    transition: all ease 150ms;
    cursor: pointer;
}

.soc_btn {
    width: 55px !important;
    height: 55px !important;
}

.soc_btn::after {
    content: "";
    position: absolute;
    background: chartreuse;
    width: 0 !important;
    height: 5px !important;
    transition: all ease 150ms;
}

.soc_btn.hoverBtn::after {
    content: "";
    position: absolute;
    width: 19px !important;
    background: #0db0f0;
    opacity: 1;
}

#instagram_btn.hoverBtn::after {
    content: "";
    position: absolute;
    height: 20px !important;
    background: #0eb3ef;
    opacity: 1;
}

#telelgram_btn::after {
    bottom: -9px;
    left: -6px;
    transform: rotate(-47deg);
    transform-origin: 1% 0%;
}

#instagram_btn::after {
    top: 23px;
    left: 1px;
    transform: rotate(93deg);
    transform-origin: 1% 0%;
    width: 5px !important;
    height: 0px !important;
}

#facebook_btn::after {
    bottom: -4px;
    left: 32px;
    transform-origin: 1% 0%;
    transform: rotate(84deg);
}



#btn {
    background: chartreuse;
    z-index: 100 !important;
}

</style>
