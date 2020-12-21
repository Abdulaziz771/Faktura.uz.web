<template>
    <div id="videlessons">
        <div id="head-page-title">
            <headerComponent></headerComponent>
            <div class="page-title">
                <div class="page-title-block">
                    <h1>1C</h1>
                    <h5>{{ translation.translate('1cModulesPage', '1cModulesPageDescription') }}</h5>
                </div>
            </div>
        </div>
        <div id="page-body">
            <div class="container mt-4 mb-5">
                <div class="main-c-block">
                    <div class="row">
                        <div class="col-lg-4 col-md-6 col-12">
                             <div class="c-block">
                                <img src="../assets/img/1c.png" alt="1с в faktura.uz, версии, конфигурация">
                                <h4 class="mt-3">{{ translation.translate('1cModulesPage', 'moduleVersion') }}: 3.4</h4>
                                <h5 class="mt-4">{{ translation.translate('1cModulesPage', 'configuration') }}:</h5><h6>Бухгалтерия. Хозрасчет, редакция 1.3 (1.3)</h6>
                                <h5 class="mt-4">{{ translation.translate('1cModulesPage', 'mouleDescription') }}:</h5>
                                <h6>
                                    {{ translation.translate('1cModulesPage', 'moduleDescriptionData') }}
                                </h6>
                                <div class="c-download mt-5">
                                    <a href="https://yadi.sk/d/a8BtLdZDfDeBxg" target="_blank" @click='callGtag("Загрузка 1с модуля,1c_module_download,click")'>{{ translation.translate('1cModulesPage', 'downloadButton') }}
                                        <DownloadIcon class="c-DownloadIcon"/> 
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-4 col-md-6 col-12">
                             <div class="c-block">
                                <img src="../assets/img/1c.png" alt="1с в faktura.uz, версии, конфигурация">
                                <h4 class="mt-3">{{ translation.translate('1cModulesPage', 'moduleVersion') }}: 3.3</h4>
                                <h5 class="mt-4">{{ translation.translate('1cModulesPage', 'configuration') }}:</h5><h6>Бухгалтерия. Хозрасчет, редакция 1.3 (1.3)</h6>
                                <h5 class="mt-4">{{ translation.translate('1cModulesPage', 'mouleDescription') }}:</h5>
                                <h6>
                                    {{ translation.translate('1cModulesPage', 'moduleDescriptionData') }}
                                </h6>
                                <div class="c-download mt-5">
                                    <a href="https://yadi.sk/d/gG4oxDcv2Cm6_Q" target="_blank" @click='callGtag("Загрузка 1с модуля,1c_module_download,click")'>{{ translation.translate('1cModulesPage', 'downloadButton') }}
                                        <DownloadIcon class="c-DownloadIcon"/> 
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-4 col-md-6 col-12">
                             <div class="c-block">
                                <img src="../assets/img/1c.png" alt="1с в faktura.uz, версии, конфигурация">
                                <h4 class="mt-3">{{ translation.translate('1cModulesPage', 'moduleVersion') }}: 3.3</h4>
                                <h5 class="mt-4">{{ translation.translate('1cModulesPage', 'configuration') }}:</h5><h6>Управление торговлей, редакция 11 (11.4.12.61)</h6>
                                <h5 class="mt-4">{{ translation.translate('1cModulesPage', 'mouleDescription') }}:</h5>
                                <h6>
                                     {{ translation.translate('1cModulesPage', 'moduleDescriptionData') }}
                                </h6>
                                <div class="c-download mt-5">
                                    <a href="https://yadi.sk/d/nlzm91fxdJcHCw" target="_blank" @click='callGtag("Загрузка 1с модуля,1c_module_download,click")'>{{ translation.translate('1cModulesPage', 'downloadButton') }}
                                        <DownloadIcon class="c-DownloadIcon"/> 
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <h6 class="text-center light mt-5 rate-list link-c">{{ translation.translate('1cModulesPage', 'sendToTechLink') }} <router-link :to="{ name: 'tech-support' }">{{ translation.translate('landingPageHome', 'tolink') }}</router-link></h6>
                </div>
            </div>
        </div>
        <footerComponent></footerComponent>
    </div>
</template>

<script>
import headerComponent from "../components/headerComponent"
import footerComponent from "../components/footerComponent"
import { DownloadIcon } from 'vue-feather-icons'
import translate from './../translation/translate'

import mixin from './../gtagMixin'

export default {
  name: 'IntegrationComponent',
  data() {
      return {
          publicPath: process.env.BASE_URL,
          translation: translate
      }
  },
  mixins: [mixin],
  components: {
      headerComponent,
      footerComponent,
      DownloadIcon
  }
}
</script>

<style>

#videlessons #head-page-title {
    background-image: url("../assets/img/hero-bg-4.jpg");
}

.main-c-block {
    margin: 90px 0;
}

.c-block img {
    width: 80px;
}

.c-block {
    text-align: center;
    background: #FFE421;
    border-radius: 35px;
    padding: 20px 10px;
    margin: 25px;
    box-shadow: 0px 0px 30px 0px rgb(255 228 33);
}

.link-c {
    width: 400px;
    margin: 0 auto;
    margin-bottom: 115px;
    margin-top: 100px !important;
}

.c-block h4 {
    font-weight: 700;
}

.c-block h5 {
    font-weight: 700;
}

.c-block h6 {
    font-weight: 600;
    color: #610000;
    width: 80%;
    margin: 0 auto;
}

.c-download {
    background: #D91920;
    padding: 7px 29px;
    width: fit-content;
    margin: 0 auto;
    border-radius: 13px;
    cursor: pointer;
}

.c-download a {
    color: white;
    font-weight: 600;
    text-decoration: none;
}

.c-DownloadIcon {
    width: 20px;
    height: 20px;
    color: white;
    position: relative;
    top: 2px;
    left: 8px;
}

.c-download:active {
    background: #aa0d12;
}

</style>
