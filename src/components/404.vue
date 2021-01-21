<template>
    <div id="videlessons">
        <div id="head-page-title">
            <headerComponent></headerComponent>
            <!-- <div class="page-title">
                <div class="page-title-block">
                    <h1>404</h1>
                    <h5>333</h5>
                </div>
            </div> -->
        </div>
        <div id="updates">
            <div class="container">
                <div style="padding-top: 15px;padding-bottom: 20px;" class="text-center">
                    <img style="width: 60%" src="./../assets/img/404.jpg" alt="">
                    <div>
                        <h1 class="p404-title">{{ translation.translate('landingPageHome', '404title') }}</h1>
                        <h4 class="p404-desc">{{ translation.translate('landingPageHome', '404Desc') }}</h4>
                    </div>
                    <div style="padding: 50px 0;">
                        <router-link :to='{ name: "Главная" }'>
                            <button type="button" class="btn btn-success btn-lg">{{ translation.translate('landingPageHome', '404Button') }}</button>
                        </router-link>
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

export default {
  name: '303',
  data() {
      return {
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

#videlessons #head-page-title {
    background-image: url("../assets/img/hero-bg-4.jpg");
}


</style>
