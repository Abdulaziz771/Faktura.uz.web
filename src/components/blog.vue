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
                            <div class="main-news main_post" v-for="(mainUpdate, index) in mainUpdates" :key="index">
                                <div class="dark-curtain"></div>
                                    <router-link :to="'/blog/' + mainUpdate.link" class="main-link-to-article">
                                        <img :src="'https://dev.faktura.uz'+mainUpdate.mainPhoto" style="width: 100%; height: fit-content;" alt="">
                                    </router-link>
                                    <div class="main-news-text">
                                        <div class="main-news-text-cover">
                                        <router-link :to="'/blog/' + mainUpdate.link" class="main-link-to-article">
                                            <h2> {{ mainUpdate.title }}</h2>
                                        </router-link>
                                        <div class="main-data-text">
                                            <CalendarIcon/><span>{{moment(mainUpdate.created_date).fromNow().replace("Бир неча ", "").replace("фурсат олдин", "Хозиргина")}}</span>
                                        </div>
                                    </div>    
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="row secondary-news">
                        <div class="col-12 col-lg-6 mt-3" v-for="update in updates" :key="update.index">
                            <div class="d-flex">
                                <router-link :to="'/blog/' + update.link" class="link-to-article">
                                    <img style="width: 206px; height: 103px" :src="'https://dev.faktura.uz' + update.mainPhoto" alt="">
                                </router-link>
                                <div class="seccondary-block">
                                    <div class="seccondary-data-text">
                                        <CalendarIcon stroke-width="3"/><span style="margin-left: 4px">{{moment(update.created_date).fromNow().replace("Бир неча ", "").replace("фурсат олдин", "Хозиргина")}}</span>
                                    </div>
                                    <router-link :to="'/blog/' + update.link" class="link-to-article">
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
                            <div class="main-news main_post" v-for="(mainNews, index) in mainNews" :key="index">
                                <div class="dark-curtain"></div>
                                 <router-link :to="'/blog/' + mainNews.link" class="main-link-to-article">
                                    <img :src="'https://dev.faktura.uz'+ mainNews.mainPhoto" style="width: 100%; height: fit-content;" alt="">
                                 </router-link>
                                <div class="main-news-text">
                                    <div class="main-news-text-cover">
                                        <router-link :to="'/blog/' + mainNews.link" class="main-link-to-article">
                                            <h2> {{ mainNews.title }}</h2>
                                        </router-link>
                                        <div class="main-data-text">
                                            <CalendarIcon/><span>{{moment(mainNews.created_date).fromNow().replace("Бир неча ", "").replace("фурсат олдин", "Хозиргина")}}</span>
                                        </div>
                                    </div>    
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="row secondary-news">
                        <div class="col-12 col-lg-6 mt-3" v-for="newsItem in news" :key="newsItem._id">
                            <div class="d-flex">
                                <router-link :to="'/blog/' + newsItem.link" class="link-to-article">
                                    <img style="width: 206px; height: 103px" :src="'https://dev.faktura.uz' + newsItem.mainPhoto" alt="">
                                </router-link>
                                <div class="seccondary-block">
                                    <div class="seccondary-data-text">
                                        <CalendarIcon stroke-width="3"/><span style="margin-left: 4px">{{moment(newsItem.created_date).fromNow().replace("Бир неча ", "").replace("фурсат олдин", "Хозиргина")}}</span>
                                    </div>
                                    <router-link :to="'/blog/' + newsItem.link" class="link-to-article">
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
import headerComponent from "../components/headerComponent.vue"
import footerComponent from "../components/footerComponent"
import translate from './../translation/translate'
import { CalendarIcon } from 'vue-feather-icons'
import moment from "moment"


export default {
    /* eslint-disable no-debugger */
  name: 'blog',
  data() {
      return {
        translation: translate,
        news: [],
        updates: [],
        lang: JSON.parse(localStorage.getItem("translation")).localeName || "uz",
        activeButton: null,
        mainNews: [],
        mainUpdates: []
        
      }
  },
  components: {
        headerComponent,
        footerComponent,
        CalendarIcon
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
    },
    moment(date){
        moment.locale(this.lang)
        return moment(date)
    },
    getAllPost(lang = "uz", category){
        return fetch("https://dev.faktura.uz/api/get/newsAndUpdates", {
            method: "POST",
            credentials: "omit",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({
                find: {lang, category, isActive: true},
                need: {title: 1, created_date: 1, link: 1, position: 1, mainPhoto: 1, isMain: 1}
            })
        })
        .then(res => res.json())
        .then(async res =>{
            let posts = res.data
            if(res.success){
                for(let index in posts){    
                    if(posts[index].isMain){
                        category == await "news" ? this.mainNews.push(posts[index])  : this.mainUpdates.push(posts[index]) 
                        posts.splice(index, 1) 
                    }
                }
                return posts 
            } 
        })
    }
  },
  async created() {
    let a = localStorage.getItem('activeButton')
    if (a == 'true' || a == undefined) {
        this.activeButton = true
        localStorage.setItem("activeButton", true);
    } else {
        this.activeButton = false
        localStorage.setItem("activeButton", false);
    }
    this.news = await this.getAllPost(this.lang, "news")
    this.updates = await this.getAllPost(this.lang, "updates")
    console.log(this.news);
    console.log(this.updates);
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
.main_post a img{
    width: 1030px !important;
    height: 515px !important;
}
.secondary-title {
    color: #666565;
    margin-top: 4px;
}
.secondary-news {
    margin-top: 20px; 
}
.secondary-news .seccondary-block{
    width: 100%; 
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
