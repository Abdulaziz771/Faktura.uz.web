<template>
    <div id="videlessons">
        <div id="head-page-title">
            <headerComponent></headerComponent>
            <div class="page-title">
                <div class="page-title-block">
                    <h1> {{ translation.translate('videolessons', 'videolessonsTitle') }} </h1>
                    <h5> {{ translation.translate('videolessons', 'videolessonsDescription') }} </h5>
                </div>
            </div>
        </div>
        <div id="page-body">
            <div class="container-fluid">
                <videoComponent></videoComponent>
            </div>
        </div>
        <footerComponent></footerComponent>
    </div>
</template>

<script>
import headerComponent from "../components/headerComponent"
import videoComponent from "../components/videoComponent"
import footerComponent from "../components/footerComponent"

import translate from './../translation/translate'

export default {
  name: 'videLessons',
  data() {
      return {
          translation: translate,
      }
  },
  components: {
      headerComponent,
      videoComponent,
      footerComponent
  }
}
</script>

<style>

#videlessons #head-page-title {
    background-image: url("../assets/img/hero-bg-4.jpg");
}

</style>
