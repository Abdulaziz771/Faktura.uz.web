<template>
    <div id="videlessons">
        <div id="head-page-title">
            <headerComponent></headerComponent>
            <div class="page-title">
                <div class="page-title-block">
                    <h1>{{ translation.translate('header', 'blog') }}</h1>
                </div>
            </div>
        </div>
        <div id="blog">
            <div class="container">
                <div class="row">
                    <div class="col-lg-4 col-md-6 col-12 blog" v-for="(blog, index) in blogs" :key="index">
                        <div>
                            <div>
                                <img :src="blog.img" class="w-100" alt="">
                            </div>
                            <div class="blog-text">
                                <div class="d-flex"><CalendarIcon style="width: 17px"/><h6>{{ blog.data }}</h6></div>
                                <h5><router-link :to="{ name: 'Блог', params: { titleRoute: blog.titleRoute, blogIndex: index } }">{{ blog.title }}</router-link></h5>
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

let blogs = require('../blog')

export default {
  name: 'blog',
  data() {
      return {
          translation: translate,
          blogs
      }
  },
  methods: {
    _onChangeLanguage(value) {
        translate.changeLocale(value);
    },
  },
  components: {
      headerComponent,
      footerComponent,
      CalendarIcon
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


</style>
