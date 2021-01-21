<template>
    <div id="videlessons">
        <div id="head-page-title">
            <headerComponent></headerComponent>
            <div class="page-title">
                <div class="page-title-block">
                    <h1>Система электронного документооборота Faktura</h1>
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
                        <p class="pt-5 pb-3">{{ translation.translate('aboutFaktura', 'aboutFakturadescription2') }}, <a target="_blank" href="https://korzinka.uz/">Korzinka.uz</a> , <a target="_blank" href="https://uztelecom.uz/">Uztelecom</a> — {{ translation.translate('aboutFaktura', 'aboutFakturadescription3') }}</p>
                        <div class="d-flex">
                            <img class="ab-im-4" src="../assets/img/tes.jpg" alt="Тулкин Якубов, To'lqin Yakubov, Основатель Faktura.uz, SPACE ONLINE GENESIS">
                            <img class="ab-im-5" src="../assets/img/e6d5cb37e0fd68af6a92b870a7d25201.jpg" alt="Логотип Faktura.uz">
                        </div>
                        <p class="pt-5 pb-3">{{ translation.translate('aboutFaktura', 'aboutFakturadescription4') }} </p>
                        <img class="ab-im-6" src="../assets/img/OloAp015661583645089_b.jpg" alt="Наша комманда">
                        <p class="pt-5 pb-3">{{ translation.translate('aboutFaktura', 'aboutFakturadescription5') }}</p>
                        <div class="d-flex">
                            <img class="ab-im-8" src="../assets/img/WN8VqQ15665655981898_b.jpg" alt="Наша комманда">
                            <img class="ab-im-9" src="../assets/img/R5oEIH15665655823668_b.jpg" alt="Наша комманда">
                        </div>
                        <p class="pt-5 pb-3">{{ translation.translate('aboutFaktura', 'aboutFakturadescription6') }}</p>
                        <p class="pt-5 pb-3">{{ translation.translate('aboutFaktura', 'aboutFakturadescription7') }}<a href="https://account.faktura.uz/RegisterNew?ReturnUrl=http%3A%2F%2Faccount.faktura.uz%2FAuthorize%3Fresponse_type%3Dcode%26client_id%3D12379127389123%26redirect_uri%3Dhttps%253a%252f%252fapp.faktura.uz%252faccount%252fexternallogin%26state%3D%252f%26scope%3D0%252c1%252c2%252c3" target="_blank" >{{ translation.translate('landingPageHome', 'tolink') }}</a></p>
                        <div class="text-center pt-5 pb-5">
                            <img class="ab-im-7" src="../assets/img/map.png" alt="Число пользователей Faktura.uz">
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
