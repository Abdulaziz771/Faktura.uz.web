<template>
    <div id="videlessons">
        <div id="head-page-title">
            <headerComponent></headerComponent>
            <div class="page-title">
                <div class="page-title-block">
                    <h1>FAQ</h1>
                    <h5>{{ translation.translate('faq', 'faqTitle') }}</h5>
                </div>
            </div>
        </div>
        <div id="page-body">
            <div class="container mt-5 mb-5">
                <div class="faq-container">
                    <h6 class="mt-3">{{ translation.translate('faq', 'generalQuestions') }}</h6>
                    <div class="faq-block d-flex"  data-toggle="collapse" href="#collapseExample7" @click='callGtag("FAQ нажатия,faq_clicks,click")'>
                        <div class="faq-title">
                            <h5>{{ translation.translate('faq', '6pointDescription1') }}</h5>
                        </div>
                    </div>
                     <div class="collapse" id="collapseExample7" @click='callGtag("FAQ нажатия,faq_clicks,click")'>
                        <div class="card card-body">
                            <p>{{ translation.translate('faq', '6pointDescription2') }}</p>
                            <iframe width="inherit" height="315" :src="this.translation.translate('faq', '6pointDescription3')" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                        </div>
                    </div>
                    <div class="faq-block d-flex"  data-toggle="collapse" href="#collapseExample9" @click='callGtag("FAQ нажатия,faq_clicks,click")'>
                        <div class="faq-title">
                            <h5>{{ translation.translate('faq', '7pointDescription1') }}</h5>
                        </div>
                    </div>
                    <div class="collapse" id="collapseExample9" @click='callGtag("FAQ нажатия,faq_clicks,click")'>
                        <div class="card card-body">
                            <p>{{ translation.translate('faq', '7pointDescription2') }}</p>
                            <iframe width="inherit" height="315" :src="this.translation.translate('faq', '7pointDescription3')" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                        </div>
                    </div>
                    <div class="faq-block d-flex"  data-toggle="collapse" href="#collapseExample10" @click='callGtag("FAQ нажатия,faq_clicks,click")'>
                        <div class="faq-title">
                            <h5>{{ translation.translate('faq', '8pointDescription1') }}</h5>
                        </div>
                    </div>
                    <div class="collapse" id="collapseExample10" @click='callGtag("FAQ нажатия,faq_clicks,click")'>
                        <div class="card card-body">
                            <p>{{ translation.translate('faq', '8pointDescription2') }}</p>
                            <iframe width="inherit" height="315" :src="this.translation.translate('faq', '8pointDescription3')" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                        </div>
                    </div>
                    <div class="faq-block d-flex"  data-toggle="collapse" href="#collapseExample11" @click='callGtag("FAQ нажатия,faq_clicks,click")'>
                        <div class="faq-title">
                            <h5>{{ translation.translate('faq', '9pointDescription1') }}</h5>
                        </div>
                    </div>
                    <div class="collapse" id="collapseExample11" @click='callGtag("FAQ нажатия,faq_clicks,click")'>
                        <div class="card card-body">
                            <p>{{ translation.translate('faq', '9pointDescription2') }}</p>
                            <iframe width="inherit" height="315" :src="this.translation.translate('faq', '9pointDescription3')" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                        </div>
                    </div>
                    <div class="faq-block d-flex"  data-toggle="collapse" href="#collapseExample12" @click='callGtag("FAQ нажатия,faq_clicks,click")'>
                        <div class="faq-title">
                            <h5>{{ translation.translate('faq', '10pointDescription1') }}</h5>
                        </div>
                    </div>
                    <div class="collapse" id="collapseExample12" @click='callGtag("FAQ нажатия,faq_clicks,click")'>
                        <div class="card card-body">
                            <p>{{ translation.translate('faq', '10pointDescription2') }}</p>
                        </div>
                    </div>
                    <div class="faq-block d-flex"  data-toggle="collapse" href="#collapseExample13" @click='callGtag("FAQ нажатия,faq_clicks,click")'>
                        <div class="faq-title">
                            <h5>{{ translation.translate('faq', '11pointDescription1') }}</h5>
                        </div>
                    </div>
                    <div class="collapse" id="collapseExample13" @click='callGtag("FAQ нажатия,faq_clicks,click")'>
                        <div class="card card-body">
                            <p>{{ translation.translate('faq', '11pointDescription2') }}</p>
                            <iframe width="inherit" height="315" :src="this.translation.translate('faq', '11pointDescription3')" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                        </div>
                    </div>
                    <div class="faq-block d-flex"  data-toggle="collapse" href="#collapseExample14" @click='callGtag("FAQ нажатия,faq_clicks,click")'>
                        <div class="faq-title">
                            <h5>{{ translation.translate('faq', '12pointDescription1') }}</h5>
                        </div>
                    </div>
                    <div class="collapse" id="collapseExample14" @click='callGtag("FAQ нажатия,faq_clicks,click")'>
                        <div class="card card-body">
                            <p>{{ translation.translate('faq', '12pointDescription2') }}</p>
                            <img src="./../assets/img/faq/faq1.jpg" alt="">
                            <img class="mt-4" src="./../assets/img/faq/faq2.jpg" alt="">
                            <iframe width="inherit" height="315" :src="this.translation.translate('faq', '12pointDescription3')" class="mt-4" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                        </div>
                    </div>
                    <div class="faq-block d-flex"  data-toggle="collapse" href="#collapseExample15" @click='callGtag("FAQ нажатия,faq_clicks,click")'>
                        <div class="faq-title">
                            <h5>{{ translation.translate('faq', '13pointDescription1') }}</h5>
                        </div>
                    </div>
                    <div class="collapse" id="collapseExample15" @click='callGtag("FAQ нажатия,faq_clicks,click")'>
                        <div class="card card-body">
                            <p>{{ translation.translate('faq', '13pointDescription2') }}</p>
                            <img src="./../assets/img/faq/faq3.jpg" alt="">
                            <img class="mt-4" src="./../assets/img/faq/faq4.jpg" alt="">
                            <img class="mt-4" src="./../assets/img/faq/faq5.jpg" alt="">
                            <img class="mt-4" src="./../assets/img/faq/faq6.jpg" alt="">
                            <iframe width="inherit" height="315" :src="this.translation.translate('faq', '13pointDescription3')" class="mt-4" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                        </div>
                    </div>
                    <div class="faq-block d-flex"  data-toggle="collapse" href="#collapseExample16" @click='callGtag("FAQ нажатия,faq_clicks,click")'>
                        <div class="faq-title">
                            <h5>{{ translation.translate('faq', '14pointDescription1') }}</h5>
                        </div>
                    </div>
                    <div class="collapse" id="collapseExample16" @click='callGtag("FAQ нажатия,faq_clicks,click")'>
                        <div class="card card-body">
                            <p>{{ translation.translate('faq', '14pointDescription2') }}</p>
                            <iframe width="inherit" height="315" :src="this.translation.translate('faq', '14pointDescription3')" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                        </div>
                    </div>
                    <div class="faq-block d-flex"  data-toggle="collapse" href="#collapseExample1" @click='callGtag("FAQ нажатия,faq_clicks,click")'>
                        <div class="faq-title">
                            <h5>{{ translation.translate('faq', '1pointTitle') }}</h5>
                        </div>
                    </div>
                    <div class="collapse" id="collapseExample1">
                        <div class="card card-body">
                            <div class="card-body-points">
                                <b>1.</b>  {{ translation.translate('faq', '1pointDescription1') }}
                            </div>
                            <div class="card-body-points">
                                <b>2.</b> {{ translation.translate('faq', '1pointDescription2') }}
                                <img class="w-100" src="../assets/img/faq/photo_2020-09-09_22-19-09.jpg" alt="ЭЦП, Электронный Ключ">
                            </div>
                            <div class="card-body-points">
                                <b>3.</b> {{ translation.translate('faq', '1pointDescription3') }}
                                <img class="w-100" src="../assets/img/faq/photo_2020-09-09_22-13-15.jpg" alt="ЭЦП, Электронный Ключ">
                            </div>
                            <div class="card-body-points">
                                <b>4.</b> {{ translation.translate('faq', '1pointDescription4') }} 
                            </div>
                            <div class="card-body-points">
                                <b>5.</b> {{ translation.translate('faq', '1pointDescription5') }}<a href="http://e-imzo.uz/" target="_blank">E-IMZO.uz</a> {{ translation.translate('faq', '1pointDescription6') }}
                            </div>
                            <div class="card-body-points">
                                <b>6.</b> {{ translation.translate('faq', '1pointDescription7') }} <code> <a href="https://my.soliq.uz/faktura" target="_blank">https://my.soliq.uz/faktura</a>  </code> {{ translation.translate('faq', '1pointDescription8') }}
                            </div>
                        </div>
                    </div>
                    <div class="faq-block d-flex"  data-toggle="collapse" href="#collapseExample2" @click='callGtag("FAQ нажатия,faq_clicks,click")'>
                        <div class="faq-title">
                            <h5>{{ translation.translate('faq', '2pointTitle') }}</h5>
                        </div>
                    </div>
                    <div class="collapse" id="collapseExample2">
                        <div class="card card-body">
                            <div class="card-body-points">
                                <img class="w-100" src="../assets/img/faq/photo_2020-09-12_15-52-32.jpg" alt="Отправка одного документа 2 раза">
                                <b>{{ translation.translate('faq', '2pointDescription1') }}</b>
                            </div>
                            <div class="card-body-points">
                                <b>{{ translation.translate('faq', '2pointDescription2') }}</b>
                                <p>{{ translation.translate('faq', '2pointDescription3') }}</p>
                                <img class="w-100" src="../assets/img/faq/photo_2020-09-12_15-58-19.jpg" alt="Минусовая счет-фактура">
                            </div>
                        </div>
                    </div>
                    <div class="faq-block d-flex"  data-toggle="collapse" href="#collapseExample3" @click='callGtag("FAQ нажатия,faq_clicks,click")'>
                        <div class="faq-title">
                            <h5>{{ translation.translate('faq', '3pointTitle') }}</h5>
                        </div>
                    </div>
                    <div class="collapse" id="collapseExample3">
                        <div class="card card-body">
                            <div class="card-body-points">
                                <p>{{ translation.translate('faq', '3pointDescription1') }}</p>
                            </div>
                        </div>
                    </div>
                    <div class="faq-block d-flex"  data-toggle="collapse" href="#collapseExample4" @click='callGtag("FAQ нажатия,faq_clicks,click")'>
                        <div class="faq-title">
                            <h5>{{ translation.translate('faq', '4pointTitle') }}</h5>
                        </div>
                    </div>
                    <div class="collapse" id="collapseExample4" @click='callGtag("FAQ нажатия,faq_clicks,click")'>
                        <div class="card card-body">
                            <p>{{ translation.translate('faq', '4pointDescription1') }}</p>
                            <img class="w-100" src="../assets/img/faq/photo_2020-09-12_16-06-41.jpg" alt="Акт Роуминг">
                        </div>
                    </div>
                </div>
            </div>
            <div class="w-100"><h6 class="text-center light mt-5 mb-5 rate-list"> {{ translation.translate('faq', 'goToVideoLessons') }} <router-link  :to="{ name: 'Видеоуроки' }">{{ translation.translate('landingPageHome', 'tolink') }}</router-link></h6></div>

        </div>
        <footerComponent></footerComponent>
    </div>
</template>

<script>
import headerComponent from "../components/headerComponent"
import footerComponent from "../components/footerComponent"

import translate from './../translation/translate'

import mixin from './../gtagMixin'

export default {
  name: 'faq',
  mixins: [mixin],
  data() {
      return {
        translation: translate
      }
  },
  components: {
      headerComponent,
      footerComponent,
  },
  metaInfo() {
        return { 
            title: "Часто задаваемые вопросы пользователями Faktura",
            meta: [
                { name: 'description', content:  'Что делать если система не видет ЭЦП ключ? Что делать если акт-счёт фактура отправлена но в Налоговом Акте не появляется? Что делать если не создается Доверенность?'},
            ]
        }
    },
}
</script>

<style>

.card-body-points {
    padding: 7px 0;
    font-size: 18px;
}

.card-body-points img {
    padding: 15px;
}

#videlessons #head-page-title {
    background-image: url("../assets/img/hero-bg-4.jpg");
}

.faq-block {
    padding: 20px;
    background: #eaeaea;
    margin-top: 12px;
    margin-bottom: 12px;
    cursor: pointer;
    border-radius: 5px;
    transition: all 0.2s ease;
}

.faq-block:active {
    background: #cacaca;
}

.faq-block:hover {
    box-shadow: 0 0 8px rgb(0 0 0 / 30%);
}

.faq-block h5 {
    font-weight: 600;
}


.faq-title {
    width: 96%;
    display: flex;
    align-items: center;
}

.faq-icon {
    text-align: center;
    width: 4%;
}

.faq-icon span {
    display: flex;
    align-items: flex-start;
}

.faq-icon svg  {
    width: 35px;
    height: 35px;
    transform: rotate(180deg);
}

</style>
