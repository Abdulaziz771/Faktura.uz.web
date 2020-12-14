<template>
  <!-- <header id="header" :class="{ 'fixed-header': scrollPosition }"> -->
  <header id="header" :class="{'headroom--unpinned': scrolled, 'headroom': isScrolled }"  >
    <div class="container-fluid">
        <nav class="row">
            <div class="logo-block justify-content-center d-flex col-5 col-sm-3 col-md-3 col-lg-2 col-xl-2">
                <router-link :to="{ name: 'home' }" class="logo">
                    <img src="../assets/img/newlogo-white-newYear.png" alt="faktura.uz logo">
                </router-link>
            </div>
            <div class="main-menu col-6 col-lg-7 col-xl-6">
                <ul class="nav d-flex justify-content-end main-menu-ul">
                    <li class="nav-item nav-item-1 position-relative d-flex">
                        <router-link :to='{ name: "home" }' class="nav-link font-weight-bold universal-transition">{{ translation.translate('header','aboutUs') }}</router-link>
                        <ChevronDownIcon class="chevron-down-header-menu cursor-pointer"/> 
                        <ul class="dropdown-item-1 universal-transition pl-0 bg-white universal-radius dark-brand-tx">
                            <li class="nav-item"><router-link class="t-n dark-brand-tx font-weight-bolder universal-transition" :to='{ name: "1с" }'>{{ translation.translate('header','1c') }}</router-link></li>
                            <li class="nav-item"><a class="t-n dark-brand-tx font-weight-bolder universal-transition" href="https://api.faktura.uz/help/" target="_blank" @click="callGtag('API переходы,api_href,click')">{{ translation.translate('header','apiDocumentation') }}</a></li>
                            <li class="nav-item"><router-link class="t-n dark-brand-tx font-weight-bolder universal-transition" :to='{ name: "compare" }'>{{ translation.translate('footer','compare') }}</router-link></li>
                            <li class="nav-item"><router-link class="t-n dark-brand-tx font-weight-bolder universal-transition" :to='{ name: "other-projects" }'>{{ translation.translate('footer','outOtherProjects') }}</router-link></li>
                            <li class="nav-item"><router-link class="t-n dark-brand-tx font-weight-bolder universal-transition" :to='{ name: "FAQ" }'>FAQ</router-link></li>
                            <li class="nav-item"><router-link class="t-n dark-brand-tx font-weight-bolder universal-transition" :to='{ name: "rukovodstvo-polzovatelya" }'>{{ translation.translate('header','documentation') }}</router-link></li>
                            <li class="nav-item"><router-link class="t-n dark-brand-tx font-weight-bolder universal-transition" :to='{ name: "about-faktura" }'>Faktura.uz </router-link></li>
                        </ul>
                    </li>
                    <li class="nav-item">
                        <router-link :to='{ name: "video-lessons" }' class="nav-link font-weight-bold universal-transition">{{ translation.translate('header','videolessons') }}</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link :to='{ name: "price" }' class="nav-link font-weight-bold universal-transition">{{ translation.translate('header','pricesItem') }}</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link :to='{ name: "updates" }' href="" class="nav-link font-weight-bold universal-transition">{{ translation.translate('header','updates') }}</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link :to='{ name: "tech-support" }' class="nav-link font-weight-bold universal-transition">{{ translation.translate('header','tech') }}</router-link>
                    </li>
                    <li v-if="$store.getters.valueofCurrentLanguage == 'uz'" class="nav-item nav-item-6 d-flex position-relative" @click="_onChangeLanguage('ru'), callGtag('Перевод на Узб,uzb_translate,click')">
                        <a href="" class="nav-link text-white font-weight-bold language-change universal-radius universal-transition">Ру</a>
                        <img src="../assets/img/rus-icon.png" class="cursor-pointer" alt="faktura.uz russian icon language">
                    </li>
                    <li v-else class="nav-item nav-item-6 d-flex position-relative" @click="_onChangeLanguage('uz'), callGtag('Перевод на Рус,rus_translation,click')">
                        <a href="" class="nav-link text-white font-weight-bold language-change universal-radius universal-transition">Уз</a>
                        <img src="../assets/img/uz-icon.png" class="cursor-pointer" alt="faktura.uz russian icon language">
                    </li>
                </ul>
            </div>
            <div class="authorization-block col-lg-3 col-xl-4">
                <ul class="nav d-flex justify-content-center">
                    <li class="nav-item">
                        <a href="https://account.faktura.uz/RegisterNew?ReturnUrl=http%3A%2F%2Faccount.faktura.uz%2FAuthorize%3Fresponse_type%3Dcode%26client_id%3D12379127389123%26redirect_uri%3Dhttps%253a%252f%252fapp.faktura.uz%252faccount%252fexternallogin%26state%3D%252f%26scope%3D0%252c1%252c2%252c3" target="_blank" class="nav-link text-white font-weight-bold log-in-link universal-transition" @click='callGtag("Нажатие на регистрацию,log_in,click")'>{{ translation.translate('header', 'registration') }}</a>
                    </li>
                    <li class="nav-item position-relative">
                        <a href="https://account.faktura.uz/Login?ReturnUrl=http%3a%2f%2faccount.faktura.uz%2fAuthorize%3fresponse_type%3dcode%26client_id%3d12379127389123%26redirect_uri%3dhttps%253a%252f%252fapp.faktura.uz%252faccount%252fexternallogin%26state%3d%252f%26scope%3d0%252c1%252c2%252c3" target="_blank" class="nav-link dark-brand-bg text-white font-weight-bold sign-in-link universal-radius universal-transition snow-roof1" @click='callGtag("Вошедшие в систему,sign_in,click")'>
                            {{ translation.translate('header', 'signin') }}
                        </a>
                    </li>
                </ul>
            </div>
            <div class="mobile-menu text-right col-7 col-sm-9 col-md-9">
                <MenuIcon @click="$store.commit('toggleSidebar', true)"/>
            </div>
        </nav>
    </div>
  </header>
</template>

<script>

import {
  MenuIcon,
  ChevronDownIcon
} from 'vue-feather-icons'
import translate from '../translation/translate'
import mixin from './../gtagMixin'
export default {
    name: 'headerComponent',
    data() {
        return {
            isScrolled: false,
            scrollPosition: null,
            limitPosition: 500,
            scrolled: false,
            lastPosition: 0,
            isSidebarOpen: false,
            translation: translate
        }
    },
    components: {
        MenuIcon,
        ChevronDownIcon
    },
    methods: {
        _onChangeLanguage(value) {
            translate.changeLocale(value);
        },
        updateScroll() {

            this.scrollPosition = window.scrollY
            if (this.scrollPosition > 100) {
                this.isScrolled = true;
            } else {
                this.isScrolled = false;
            }
        },
        handleScroll() {
            if (this.lastPosition < window.scrollY && this.limitPosition < window.scrollY) {
            this.scrolled = true;
            // move up!
            }

            if (this.lastPosition > window.scrollY) {
            this.scrolled = false;
            // move down
            }

            this.lastPosition = window.scrollY;
            // this.scrolled = window.scrollY > 250;
        },
        toggleSidebar() {
            this.isSidebarOpen = true
            this.$emit('toggleSidebar', this.isSidebarOpen)
        }
    },
    mixins: [mixin],
    mounted() {

        window.addEventListener('scroll', this.updateScroll);
    },
    created() {
        window.addEventListener("scroll", this.handleScroll);
    },
    destroyed() {
        window.removeEventListener("scroll", this.handleScroll);
    }
}
</script>

<style>

.chevron-down-header-menu {
    transition: all 0.1s ease;
    color: white;
    position: relative;
    top: 10px;
    left: -14px;
}

.headroom {
    position: fixed;
    left: 0;
    right: 0;
    z-index: 99999;
}

.headroom .sign-in-link {
    background-color: #72bd49;
}

#headroom .authorization-block {
    background-color: #3f5872 !important;
}

.headroom  .main-menu  {
    background-color: #3f5872 !important;
}

.headroom .logo-block  {
    background-color: #3f5872 !important;
}

.headroom--unpinned {
    transform: translateY(-100%);
}

.headroom--pinned {
    transform: translateY(0%);
}

#header {
    background-image: url('../assets/img/snow/gif.gif');
    will-change: transform;
    transition: transform 200ms linear;
    background-repeat: repeat-x;
}

</style>