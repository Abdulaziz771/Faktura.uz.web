<template>
    <div id="videlessons">
        <div id="head-page-title">
            <headerComponent></headerComponent>
            <div class="page-title">
                <div class="page-title-block">
                    <h1>{{ translation.translate('aboutFaktura', 'aboutFakturadescription31') }}</h1>
                </div>
            </div>
        </div>
        <div id="page-body">
            <div class="container mt-5 mb-5">
                <div>
                    <div class="ab-title">
                        <h2>{{ translation.translate('aboutFaktura', 'aboutFakturaTitle') }}</h2>
                    </div>
                    <div class="ab-desc">
                        <p class="pt-5 pb-3">{{ translation.translate('aboutFaktura', 'aboutFakturadescription1') }}</p>
                        <div class="d-flex">
                            <div>
                                <img class="ab-im-1" src="../assets/img/Cpq7FI15647448653510_b.jpg" alt="система faktura.uz, внутри системы, тех-помощь">
                            </div>
                            <div>
                                <img class="ab-im-2" src="../assets/img/13.gif" alt="интеграция с 1с, faktura.uz">
                                <img class="ab-im-3" src="../assets/img/153635_1c82964991935ba167f61a0f0bc6.jpg" alt="Наши молодые сотрудники в faktura.uz, внутри системы, тех-помощь">
                            </div>
                        </div>
                        <p class="pt-5 pb-3">{{ translation.translate('aboutFaktura', 'aboutFakturadescription2') }} {{ translation.translate('aboutFaktura', 'aboutFakturadescription3') }}</p>
                        <h4 class="mt-4 mb-4">{{ translation.translate('aboutFaktura', 'aboutFakturadescription4') }}</h4>
                        <p>{{ translation.translate('aboutFaktura', 'aboutFakturadescription5') }}</p>
                        <ul>
                            <ol class="mt-4">{{ translation.translate('aboutFaktura', 'aboutFakturadescription6') }}</ol>
                            <ol class="mt-4">{{ translation.translate('aboutFaktura', 'aboutFakturadescription7') }}</ol>
                            <ol class="mt-4">{{ translation.translate('aboutFaktura', 'aboutFakturadescription8') }}</ol>
                            <ol class="mt-4">{{ translation.translate('aboutFaktura', 'aboutFakturadescription9') }}</ol>
                        </ul>
                        <h4 class="mt-4 mb-4">{{ translation.translate('aboutFaktura', 'aboutFakturadescription10') }}</h4>
                        <div class="d-flex">
                            <img class="ab-im-4" src="../assets/img/tes.jpg" alt="Тулкин Якубов, To'lqin Yakubov, Основатель Faktura.uz, SPACE ONLINE GENESIS">
                            <img class="ab-im-5" src="../assets/img/e6d5cb37e0fd68af6a92b870a7d25201.jpg" alt="Логотип Faktura.uz">
                        </div>
                        <p>{{ translation.translate('aboutFaktura', 'aboutFakturadescription11') }}</p>
                        <h4>{{ translation.translate('aboutFaktura', 'aboutFakturadescription12') }}</h4>
                        <ul>
                            <ol class="mt-4">{{ translation.translate('aboutFaktura', 'aboutFakturadescription13') }}</ol>
                            <ol class="mt-4">{{ translation.translate('aboutFaktura', 'aboutFakturadescription14') }}</ol>
                            <ol class="mt-4">{{ translation.translate('aboutFaktura', 'aboutFakturadescription15') }}</ol>
                            <ol class="mt-4">{{ translation.translate('aboutFaktura', 'aboutFakturadescription16') }}</ol>
                        </ul>
                        <h4 class="mt-4 mb-4">{{ translation.translate('aboutFaktura', 'aboutFakturadescription17') }} </h4>
                        <ul>
                            <ol class="mt-4">{{ translation.translate('aboutFaktura', 'aboutFakturadescription18') }}</ol>
                            <ol class="mt-4">{{ translation.translate('aboutFaktura', 'aboutFakturadescription19') }}</ol>
                            <ol class="mt-4">{{ translation.translate('aboutFaktura', 'aboutFakturadescription20') }}</ol>
                            <ol class="mt-4">{{ translation.translate('aboutFaktura', 'aboutFakturadescription21') }}</ol>
                            <ol class="mt-4">{{ translation.translate('aboutFaktura', 'aboutFakturadescription22') }}</ol>
                            <ol class="mt-4">{{ translation.translate('aboutFaktura', 'aboutFakturadescription23') }}</ol>
                        </ul>
                        <h4 class="mt-4 mb-4">{{ translation.translate('aboutFaktura', 'aboutFakturadescription24') }} </h4>
                        <img class="ab-im-6" src="../assets/img/OloAp015661583645089_b.jpg" alt="Наша комманда">
                        <p class="pt-5 pb-3">{{ translation.translate('aboutFaktura', 'aboutFakturadescription25') }}</p>
                        <p class="pt-5 pb-3">{{ translation.translate('aboutFaktura', 'aboutFakturadescription26') }}</p>
                        <div class="d-flex">
                            <img class="ab-im-8" src="../assets/img/WN8VqQ15665655981898_b.jpg" alt="Наша комманда">
                            <img class="ab-im-9" src="../assets/img/R5oEIH15665655823668_b.jpg" alt="Наша комманда">
                        </div>
                        <p class="pt-5 pb-3">{{ translation.translate('aboutFaktura', 'aboutFakturadescription27') }}</p>
                        <p class="pt-5 pb-3">{{ translation.translate('aboutFaktura', 'aboutFakturadescription28') }}</p>
                        <div class="text-center pt-5 pb-5">
                            <img class="ab-im-7" src="../assets/img/map.png" alt="Число пользователей Faktura.uz">
                        </div>
                        <p class="pt-5 pb-3">{{ translation.translate('aboutFaktura', 'aboutFakturadescription29') }}</p>
                        <p class="pt-5 pb-3">{{ translation.translate('aboutFaktura', 'aboutFakturadescription30') }}</p>
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
// import { ChevronDownIcon } from 'vue-feather-icons'

export default {
  name: 'faq',
  data() {
      return {
          translation: translate
      }
  },
  components: {
      headerComponent,
      footerComponent
  },
  metaInfo() {
        return { 
            title: "Система электронного документооборота - внедрение СЭД в Узбекистане",
            meta: [
                { name: 'description', content:  'Внедрение СЭД в Узбекистане. ⏩   Faktura - система автоматизации электронного документооборота. ⏩   Электронная отправка 35 видов типовых документов. ☎️: +998 (71) 200-00-13'},
            ]
        }
    },
}
</script>

<style>


#videlessons #head-page-title {
    background-image: url("../assets/img/hero-bg-4.jpg");
}

.ab-title {
    width: 700px;
    margin: 0 auto;
    margin-top: 50px;
}

.ab-title h2 {
    font-size: 29px;
    text-align: center;
    font-weight: 700;
}

.ab-desc  p {
    font-size: 21px;
    margin: 17px 0;
}

.ab-im-1 {
    padding-right: 10px;
    width: 730px;
}
.ab-im-2 {
    height: 240px;
    padding-bottom: 10px;
}
.ab-im-3 {
    height: 240px;
}

.ab-im-4 {
    height: 432px;
    padding-right: 10px;
}
.ab-im-5 {
    height: 432px;
}
.ab-im-6 {
    width: 98%;;
}

.ab-im-7 {
    width: 50%;
}

.ab-im-8 {
    height: 358px;
    padding-right: 10px;
}

.ab-im-9 {
    height: 358px;
}

</style>
