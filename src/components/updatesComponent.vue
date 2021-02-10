<template>
    <div id="videlessons">
        <div id="head-page-title">
            <headerComponent></headerComponent>
            <div class="page-title">
                <div class="page-title-block">
                    <h1>{{ translation.translate('update', 'updateTitle') }}</h1>
                    <h5>{{ translation.translate('update', 'updateTitle1') }} </h5>
                </div>
            </div>
        </div>
        <div id="updates">
            <div class="container">
                <div class="post-block row">
                    <div class="update-post col-sm-6 col-lg-4 p-0" v-for="(update, index) in updates" :key="index">
                        <div class="body-post">
                            <router-link :to="{ name: update.route, params: { blogPost: update.route } }">
                                <div class="position-relative">
                                    <img :src="update.img" class="w-100" alt="">
                                    <div class="mobile-update">
                                        <h5>{{ update.title }}</h5>
                                        <h6>{{ update.data }}</h6>
                                    </div>
                                </div>
                                <div class="post-text">
                                    <p class="paragraph">
                                       {{ update.description }}
                                    </p>
                                </div>
                            </router-link>
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

import translate from './../translation/translate'

let updates = require('../updatesBase')

export default {
  name: 'updates',
  data() {
      return {
          updates,
          translation: translate
      }
  },
  methods: {
    _onChangeLanguage(value) {
        translate.changeLocale(value);
    },
  },
  components: {
      headerComponent,
      footerComponent
  }
}
</script>

<style>
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

.update-post a:hover{
    text-decoration: none;
}

.update-post .body-post {
    background: #f4f4f4;
    margin: 10px;
    transition: 0.3s ease;
}

.update-post .body-post:hover {
    position: relative;
    top: -10px;
    box-shadow: 0 0 11px rgba(0,0,0,0.5);
}

.post-block {
    margin: 120px 0;
}

.update-post .post-text {
    margin-top: 22px;
    padding: 4px 28px;
    padding-bottom: 22px;
}

.update-post .post-text h3 {
    font-size: 24px;
    margin: 24px 0;
    font-weight: 700;
    color: #6c6c6c;
}

.update-post .post-text .status {
    background: #66c93e;
    color: white;
    padding: 4px;
    font-size: 11px;
    border-radius: 3px;
}

.update-post .post-text .paragraph {
    color: #a6a6a6;
}

.update-post .post-text .details {
    font-weight: 700;
    color: #858585;
}



</style>
