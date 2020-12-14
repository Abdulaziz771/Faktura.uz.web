<template>
    <div id="videlessons">
        <div id="head-page-title">
            <headerComponent></headerComponent>
            <div class="page-title">
                <div class="page-title-block">
                    <h1>{{ translation.translate('footer','publicOfferta') }}</h1>
                </div>
            </div>
        </div>
        <div id="page-body">
            <div class="container mt-5 mb-5">
                <div>
                    <p><a href="http://lex.uz/Pages/GetAct.aspx?lact_id=64424" target="_blank">Закон Республики Узбекистан «Об электронной цифровой подписи»</a></p>
                    <p><a href="http://lex.uz/Pages/GetAct.aspx?lact_id=165074" target="_blank">Закон Республики Узбекистан «Об электронном документообороте»</a></p>
                    <p><a href="http://lex.uz/pages/getpage.aspx?lact_id=165497" target="_blank">Закон Республики Узбекистан «Об электронной коммерции»</a></p>
                    <p><a href="http://lex.uz/pages/getpage.aspx?lact_id=1286689" target="_blank">Налоговый кодекс Республики Узбекистан</a></p>
                    <p>Постановление Министерства внешних экономических связей, инвестиций и торговли Республики Узбекистан,<br> Государственного Таможенного комитета Республики Узбекистан, Государственного Налогового комитета Республики Узбекистан «об утверждении положения о порядке подготовки контрактов в электронной форме и других типовых форм документов, применяемых в электронной коммерции»<br> <a href="http://lex.uz/pages/getpage.aspx?lact_id=1275423#1275446" target="_blank">Подробнее</a></p>
                    <p><a href="http://www.faktura.uz/wp-content/uploads/2016/02/Soliq-Konsalting-Markazi-javobi.pdf" target="_blank">Разъяснение</a>&nbsp;Республиканского информационно-консультационного центра при ГНК Узбекистана</p>
                    <p><a href="http://www.faktura.uz/wp-content/uploads/2016/02/pismo-soliq-shahar.pdf" target="_blank">Разъяснение</a> Министерства финансов Узбекистана</p>
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
      footerComponent
  }
}
</script>

<style>


#videlessons #head-page-title {
    background-image: url("../assets/img/hero-bg-4.jpg");
}

</style>
