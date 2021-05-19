<template>
    <div id="videlessons">
        <div id="head-page-title">
            <headerComponent></headerComponent>
            <div class="page-title">
                <div class="page-title-block">
                    <h1>Новости</h1>
                    <h5>Новости электронного документооборота и обновления внутри системы Faktura.uz</h5>
                </div>
            </div>
        </div>
        <div id="blog">
            <div class="container">
                <!-- <div class="ads-place">
                    <div>
                        <a href="https://buxgalter.uz/tarifs/" target="_blank">
                            <img alt="buxgalter uz"  src="../assets/img/Banners/bux.png">
                        </a>
                    </div>
                </div> -->
                <div class="row">
                    <div class="col-12">
                        <div class="toggle-buttons-block d-flex justify-content-center">
                            <div class="updates-button " :class="{ 'activeButton': activeButton }" @click="switchPages('updates')">
                                Обновление
                            </div>
                            <div class="news-button" :class="{ 'activeButton': !activeButton }" @click="switchPages('news')">
                                Новости
                            </div>
                        </div>
                    </div>
                </div>
                <div v-show="activeButton">
                    <div class="row">
                        <div class="col-12" >
                            <div class="main-news">
                                <div class="dark-curtain"></div>
                                <router-link :to="{ name: mainUpdates[0].titleRoute }" class="main-link-to-article">
                                    <img :src="mainUpdates[0].imgMain" style="width: 100%; height: fit-content;" alt="">
                                </router-link>
                                <div class="main-news-text">
                                    <div class="main-news-text-cover">
                                        <router-link :to="{ name: mainUpdates[0].titleRoute }" class="main-link-to-article">
                                            <h2> {{ mainUpdates[0].title }}</h2>
                                        </router-link>
                                        <div class="main-data-text">
                                            <CalendarIcon/><span>{{ mainUpdates[0].data }}</span>
                                        </div>
                                    </div>    
                                </div>
                                
                            </div>
                        </div>
                    </div>
                    <div class="row secondary-news">
                        <div class="col-12 col-lg-6 mt-3" v-for="update in updates" :key="update.index">
                            <div class="d-flex">
                                <router-link :to="{ name: update.titleRoute }" class="link-to-article">
                                    <img :src="update.imgSecondary" alt="">
                                </router-link>
                                <div class="seccondary-block">
                                    <div class="seccondary-data-text">
                                        <CalendarIcon/><span>{{ update.data }}</span>
                                    </div>
                                    <router-link :to="{ name: update.titleRoute }" class="link-to-article">
                                        <h5 class="secondary-title">{{ update.title }}</h5>
                                    </router-link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div v-show="!activeButton">
                    <div class="row">
                        <div class="col-12">
                            <div class="main-news">
                                <div class="dark-curtain"></div>
                                 <router-link :to="{ name: mainNews[0].titleRoute }" class="main-link-to-article">
                                    <img :src="mainNews[0].imgMain" style="width: 100%; height: fit-content;" alt="">
                                 </router-link>
                                <div class="main-news-text">
                                    <div class="main-news-text-cover">
                                        <router-link :to="{ name: mainNews[0].titleRoute }" class="main-link-to-article">
                                            <h2> {{ mainNews[0].title }}</h2>
                                        </router-link>
                                        <div class="main-data-text">
                                            <CalendarIcon/><span>{{ mainNews[0].data }}</span>
                                        </div>
                                    </div>    
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="row secondary-news">
                        <div class="col-12 col-lg-6 mt-3" v-for="newsItem in news" :key="newsItem.index">
                            <div class="d-flex">
                                <router-link :to="{ name: newsItem.titleRoute }" class="link-to-article">
                                    <img :src="newsItem.imgSecondary" alt="">
                                </router-link>
                                <div class="seccondary-block">
                                    <div class="seccondary-data-text">
                                        <CalendarIcon/><span>{{ newsItem.data }}</span>
                                    </div>
                                    <router-link :to="{ name: newsItem.titleRoute }" class="link-to-article">
                                        <h5 class="secondary-title">{{ newsItem.title }}</h5>
                                    </router-link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <footerComponent></footerComponent>
    </div>
</template>

<script>
import headerComponent from "../components/headerComponent"
import footerComponent from "../components/footerComponent"

import { CalendarIcon } from 'vue-feather-icons'

import translate from './../translation/translate'

let news = require('../news').default
let updates = require('../updates').default

export default {
    /* eslint-disable no-debugger */

  name: 'blog',
  data() {
      return {
        translation: translate,
        news,
        updates,
        activeButton: null,
        mainNews: [
            {
                imgMain: require("./../assets/img/blog/Osnovnie Principi/osnovnie.png"), // 1052 x 372 разрешение
                imgSecondary: require("../assets/img/blog/Osnovnie Principi/osnovnie-mini.png"), // 165 x 104 разрешение
                title: "Основные принципы электронного документооборота",
                titleRoute: "основные-принципы-электронного-документооборота",
                data: "17:15 / 19.02.2021"
            }
        ],
        mainUpdates: [
            {
                imgMain: require("./../assets/img/blog/Versiya1812/Main-Blog-Photho.jpg"), // 1052 x 372 разрешение
                imgSecondary: require("./../assets/img/blog/Versiya1812/Mini-Blog-Photo.jpg"), // 165 x 104 разрешение
                title: "Список изменений и улучшений в версии 1.8.12",
                titleRoute: "Список изменений и улучшений в версии 1.8.12",
                data: "20:10 / 12.03.2021"
            }
        ]
      }
  },
  methods: {
    _onChangeLanguage(value) {
        translate.changeLocale(value);
    },
    switchPages(currentPage) {
        if (currentPage == 'updates') {
            this.activeButton = true
            localStorage.setItem("activeButton", true);
        } else {
            this.activeButton = false
            localStorage.setItem("activeButton", false);
        }
    }
  },
  components: {
      headerComponent,
      footerComponent,
      CalendarIcon
  },
  created() {
    let a = localStorage.getItem('activeButton')
    if (a == 'true' || a == undefined) {
        this.activeButton = true
        localStorage.setItem("activeButton", true);
    } else {
        this.activeButton = false
        localStorage.setItem("activeButton", false);
    }
    console.log(a)
  }
}
</script>

<style>
.main-link-to-article {
    color: white !important;
}

.main-link-to-article:hover {
    text-decoration: none;
    color: #b4b4b4 !important;
}

.link-to-article h5:hover {
    color: #3c99ba;
    transition: all 0.1s ease;
    text-decoration: none;
}

.link-to-article:hover {
    text-decoration: none;
}

.secondary-title {
    color: #666565;
    margin-top: 4px;
}

.secondary-news {
    margin-top: 20px; 
}

.main-data-text {
    color: #979797;
    font-weight: 600;
}
.main-data-text svg {
    width: 16px;
    position: relative;
    top: -1px;
    margin-right: 6px;
}
.main-news-text-cover {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    padding: 25px;
    color: white;
}
.main-news {
    position: relative;
    margin-top: 30px;
}
.main-news-text {
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    height: 100%;
    bottom: 0;
    background-image: linear-gradient( 180deg,transparent 25%,rgba(0,0,0,.7) 69%,rgba(0,0,0,.8)),linear-gradient(180deg,rgba(0,0,0,.1),rgba(0,0,0,.1));
}
.updates-button, .news-button {
    width: unset;
    text-align: center;
    margin-left: 10px;
    padding: 7px 20px;
    font-weight: 500;
    color: #5b5b5b;
    border-radius: 25px;
    cursor: pointer;
}

.updates-button.activeButton {
    background: #D1F1BF;
}

.news-button.activeButton {
    background: #D1F1BF;
}

.mobile-update h6 {
    background: red;
    display: initial;
    padding: 7px;
    position: relative;
    top: 10px;
    border-radius: 6px;
    font-size: 12px;
}
.mobile-update {
    position: absolute;
    bottom: 0;
    background: #000000ba;
    right: 0;
    color: white;
    left: 0;
    top: 0;
    padding: 30px;
}

#videlessons #head-page-title {
    background-image: url("../assets/img/hero-bg-4.jpg");
}


</style>
