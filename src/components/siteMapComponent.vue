<template>
    <div id="videlessons">
        <div id="head-page-title">
            <headerComponent></headerComponent>
            <div class="page-title">
                <div class="page-title-block">
                    <h1>{{ translation.translate('footer', 'siteMap') }}</h1>
                </div>
            </div>
        </div>
        <div id="page-body">
            <div class="container">
                <div class="row mt-5 mb-5">
                    <div class="col-4 faktura-info">
                        <h3>
                            {{ translation.translate('siteMap', 'aboutSystem') }}
                        </h3>
                        <ul class="pl-0">
                            <li><router-link :to="{ name: 'Главная' }">{{ translation.translate('header','aboutUs') }}</router-link></li>
                            <li><router-link :to="{ name: 'Видеоуроки' }">{{ translation.translate('header','videolessons') }}</router-link></li>
                            <li><router-link :to="{ name: 'Тарифы' }">{{ translation.translate('header','pricesItem') }}</router-link></li>
                            <li><router-link :to="{ name: 'Тех-поддержка' }">{{ translation.translate('header','tech') }}</router-link></li>
                            <li><router-link :to="{ name: 'Модули 1С' }">1C {{ translation.translate('footer','compareServices') }}</router-link></li>
                            <li><router-link :to="{ name: 'Сравнение' }">{{ translation.translate('header','compare') }}</router-link></li>
                            <li><router-link :to="{ name: 'Другие проэкты' }">{{ translation.translate('header','outOtherProjects') }}</router-link></li>
                            <li><router-link :to="{ name: 'Сравнение' }">{{ translation.translate('header','compare') }}</router-link></li>
                            <li><router-link :to="{ name: 'Системе' }">Faktura.uz</router-link></li>
                            <li><router-link :to="{ name: 'Вопросы-ответы' }">FAQ</router-link></li>
                        </ul>
                    </div>
                    <div class="col-4 faktura-info">
                        <h3>
                            {{ translation.translate('siteMap', 'aboutUpdates') }}
                        </h3>
                    </div>
                    <div class="col-4 faktura-info">
                        <h3>
                            {{ translation.translate('landingPageHome', 'documentation') }}
                        </h3>
                        <ul class="pl-0">
                            <li><router-link :to="{ name: 'Оферта' }">{{ translation.translate('footer','publicOfferta') }}</router-link></li>
                            <li><router-link :to="{ name: 'Нормативно правовая база' }">{{ translation.translate('footer','lexuzDocumentation') }}</router-link></li>
                        </ul>
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
  name: 'other-projects',
  data() {
      return {
        translation: translate
      }
  },
  components: {
      headerComponent,
      footerComponent,
  }
}
</script>

<style>


#videlessons #head-page-title {
    background-image: url("../assets/img/hero-bg-4.jpg");
}

.faktura-info h3 {
    font-size: 17px;
}

</style>
