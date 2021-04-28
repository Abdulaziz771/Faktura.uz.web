<template>
    <div id="price">
        <div id="head-page-title">
            <headerComponent></headerComponent>
            <div class="page-title">
                <div class="page-title-block">
                    <h1>{{ translation.translate('header', 'pricesItem') }}</h1>
                    <h5>{{ translation.translate('priceTable', 'priceTableTitleFirstThing') }}</h5>
                </div>
            </div>
        </div>
        <div id="page-body">
            <div class="container">
                <div class="ads-place">
                    <div>
                        <a href="https://buxgalter.uz/tarifs/" target="_blank">
                            <img alt="buxgalter uz"  src="../assets/img/Banners/bux.png">
                        </a>
                    </div>
                </div>
                <section id="connect-page">
                    <div class="page-title connect-title container traditional-page-width">
                        <h2 class="font-weight-bolder dark">{{ translation.translate('landingPageHome', 'freeSectionTitle1') }}</h2>
                        <h5 class="light">{{ translation.translate('landingPageHome', 'freeSectionTitle2') }}</h5>
                    </div>
                    <div class="connect-body gybrid-pochta container">
                        <div class="row">
                            <div class="col-md-12 col-lg-6 free-1-month">
                                <img src="../assets/img/6.png" alt="">
                            </div>
                            <div class="col-md-12 col-lg-6 position-relative d-flex align-items-flex-start seo-info-1">
                                <div class="timeline-1">
                                    <h5 class="light mt-4">
                                        {{ translation.translate('landingPageHome', 'freeSectionTitle3') }}
                                    </h5>
                                    <h5 class="light mt-4"> 
                                        {{ translation.translate('landingPageHome', 'freeSectionTitle4') }} <span><a href="https://app.faktura.uz/ru/servicepackage/preview/1" target="_blank">{{ translation.translate('landingPageHome', 'freeSectionTitle5') }}</a></span>{{ translation.translate('landingPageHome', 'freeSectionTitle6') }}   
                                    </h5>
                                    <button class="take-an-action mt-4 glow-big-in-context"><a target="_blank" href="https://account.faktura.uz/RegisterNew?ReturnUrl=http%3A%2F%2Faccount.faktura.uz%2FAuthorize%3Fresponse_type%3Dcode%26client_id%3D12379127389123%26redirect_uri%3Dhttps%253a%252f%252fapp.faktura.uz%252faccount%252fexternallogin%26state%3D%252f%26scope%3D0%252c1%252c2%252c3">{{ translation.translate('landingPageHome', 'slider3Button1') }}</a></button>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <table class="table table-price">
                    <thead class="thead-dark">
                        <tr>
                            <th scope="col" style="border-top-left-radius: 15px;">{{ translation.translate('priceTable', 'priceTableTitle') }} </th>
                            <th scope="col">{{ translation.translate('priceTable', 'priceTableTitle1') }}</th>
                            <th scope="col">{{ translation.translate('priceTable', 'priceTableTitle2') }}</th>
                            <th scope="col">{{ translation.translate('priceTable', 'priceTableTitle3') }}</th>
                            <th scope="col">{{ translation.translate('priceTable', 'priceTableTitle4') }}</th>
                            <th scope="col" style="border-top-right-radius: 15px;"></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="(price, index) in ratesBase" :key="index" >
                            <td class="font-weight-bolder">{{ translation.translate('landingPageHome', 'price') }} {{ price.name }}</td>
                            <td>{{ price.price }}</td>
                            <td>{{ price.cuantity }} {{ translation.translate('priceTable', 'sht') }}</td>
                            <td>{{ price.limit }} {{ translation.translate('priceTable', 'summ') }}</td>
                            <td>{{ price.everyDocPrice }} {{ translation.translate('priceTable', 'summ') }}</td>
                            <td><button class="btn btn-faktura" @click="callGtag('Купить тариф,buy_price,click')"><a :href="price.link" target="_blank">{{ translation.translate('priceTable', 'get') }}</a></button></td>
                        </tr>                    
                    </tbody>
                </table>
                <div class="table-capsule">
                    <div class="row class-parent">
                        <div class="col-6" v-for="(capsule, index) in ratesBase" :class="capsule.isVisible" :key="index">
                            <div class="capsule collapsed" :href="'#' + capsule.isVisible">
                                <h4 >{{ capsule.cuantity }} {{ translation.translate('priceTable', 'sht') }}</h4>
                                <h6>{{ capsule.price }} {{ translation.translate('priceTable', 'summ') }}</h6>
                                <button type="button" class="btn btn-danger set-price" @click="callGtag('Купить тариф,buy_price,click')"> <a :href="capsule.link" target="_blank">{{ translation.translate('priceTable', 'get') }}</a></button>
                            </div>
                        </div>
                    </div>
                </div>
                <section id="connect-page">
                    <div class="page-title connect-title container traditional-page-width">
                        <h2 class="font-weight-bolder dark">Дополнительные услуги</h2>
                        <h5 class="light">Уникальные возможности внутри нашей системы</h5>
                    </div>
                    <div class="connect-body gybrid-pochta container">
                        <div class="row">
                            <div class="offset-lg-2 col-12 col-md-6 col-lg-4 dop-class-for-media">
                                <div class="dop-block">
                                    <div class="dop-hat">
                                        <h5 class="mb-0">Мониторинг <br> корпоративных карт</h5>
                                    </div>
                                    <div class="dop-price">
                                        <div class="dop-img">
                                            <img src="../assets/img/All Icons/corporate-card-history.png" alt="">
                                        </div>
                                        <div>
                                            <h5 class="dop-price-sum font-weight-bolder mb-0">10 000 сум</h5>
                                        </div>
                                        <div>
                                            <span class="font-weight-bolder light dop-price-sum-item">за 1 карту</span>
                                        </div>
                                    </div>
                                    <div class="dop-footer">
                                        <div class="dop-info">
                                            Подключив данную функцию вы сможете мониторить историю ваших корпоративных карточек
                                        </div>
                                        <button class="mt-4 take-an-action">
                                            <a target="_blank" href="https://app.faktura.uz/ru/history/index#kpk">
                                                Добавить
                                            </a>
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-4 col-12 col-md-6">
                                <div class="dop-block">
                                    <div class="dop-hat">
                                        <h5 class="mb-0">Гибридная почта</h5>
                                    </div>
                                    <div class="dop-price">
                                        <div class="dop-img">
                                            <img src="../assets/img/All Icons/gybrid-letter.png" alt="">
                                        </div>
                                        <div>
                                            <h5 class="dop-price-sum font-weight-bolder mb-0">5 000 сум</h5>
                                        </div>
                                        <div>
                                            <span class="font-weight-bolder light dop-price-sum-item">за 1 отправку</span>
                                        </div>
                                    </div>
                                    <div class="dop-footer">
                                        <div class="dop-info">
                                            Отпрвляйте деловые пиьсма в электронном виде по географическому адресу с доставкой в виде бумаги 
                                        </div>
                                        <button class="mt-4 take-an-action">
                                            <a target="_blank" href="https://app.faktura.uz/ru/hybriddocument/add">
                                                Отправить
                                            </a>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section id="connect-page">
                    <div class="page-title connect-title container traditional-page-width pb-4">
                        <h2 class="font-weight-bolder dark">Условия тарифного плана</h2>
                    </div>
                    <div class="connect-body gybrid-pochta container">
                        <div class="row">
                            <div class="col-12">
                                <div class="tarif-plan">
                                    <h5 class="light">
                                        Входящие документы бесплатные
                                    </h5>
                                    <hr>
                                    <h5 class="light mt-4">
                                        Оставшиеся количество документов перейдут на следующий месяц  только при условии что вы активировали нужный вам тариф заранее (до того как истечет время предыдущего тарифа)
                                    </h5>
                                    <hr>#connect-page .gybrid-pochta
                                    <h5 class="light mt-4">
                                        При недостатке количества документов в вашем выбранном тарифе, будут взиматься сверх лимит на каждый исходящий документ
                                    </h5>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <!-- <div class="faq-block-price d-flex">
                    <div class="faq-title">
                        <h5> {{ translation.translate('priceTable', 'priceCondition') }}</h5>
                    </div>
                </div>
                <div class="faq-block-price d-flex">
                    <div class="faq-title">
                        <h5> {{ translation.translate('priceTable', 'priceCondition2') }}</h5>
                    </div>
                </div>
                <div class="faq-block-price d-flex">
                    <div class="faq-title">
                        <h5> {{ translation.translate('priceTable', 'priceCondition3') }} <a target="_blank" href="https://yadi.sk/i/LjoTzYuPuUNU3A">{{ translation.translate('landingPageHome', 'tolinkSingle') }}</a></h5>
                    </div>
                </div> -->
                <p class="how-to-pay">
                    {{ translation.translate('priceTable', 'goToHowToPay') }} <router-link :to='{ name: "Видеоуроки" }'> {{ translation.translate('landingPageHome', 'tolink') }} </router-link>
                </p>
            </div>
        </div>
        <footerComponent></footerComponent>
    </div>
</template>

<script>
import headerComponent from "../components/headerComponent"
import footerComponent from "../components/footerComponent"
import mixin from './../gtagMixin'
import translate from './../translation/translate'
export default {
  mixins: [mixin],
  name: 'price',
  data() {
      return {
        translation: translate
      }
  },
  computed: {
      ratesBase() {
          return [
              {
                name: "(5)",
                price: this.translation.translate('priceTable', 'free'),
                cuantity: 5,
                limit: "800 ",
                everyDocPrice: "0",
                isVisible: "class1",
                link: "https://app.faktura.uz/ru/servicepackage/preview/1"
            },
            {
                name: "(50)",
                price: "45 000 ",
                cuantity: 50,
                limit: "800 ",
                everyDocPrice: "900 ",
                isVisible: "class2",
                link: "https://app.faktura.uz/ru/servicepackage/preview/2"
            },
            {
                name: " (125)",
                price: "105 000 ",
                cuantity: 125,
                limit: "800 ",
                everyDocPrice: "840 ",
                isVisible: "class3",
                link: "https://app.faktura.uz/ru/servicepackage/preview/3"
            },
            {
                name: " (250)",
                price: "190 000 ",
                cuantity: 250,
                limit: "800 ",
                everyDocPrice: "760 ",
                isVisible: "class4",
                link: "https://app.faktura.uz/ru/servicepackage/preview/4"
            },
            {
                name: " (500)",
                price: "345 000 ",
                cuantity: 500 ,
                limit: "800 ",
                everyDocPrice: "690 ",
                isVisible: "class5",
                link: "https://app.faktura.uz/ru/servicepackage/preview/5"
            },
            {
                name: " (1000)",
                price: "650 000 ",
                cuantity: 1000 ,
                limit: "800 ",
                everyDocPrice: "650 ",
                isVisible: "class6",
                link: "https://app.faktura.uz/ru/servicepackage/preview/6"
            },
            {
                name: " (1500)",
                price: "952 500 ",
                cuantity: 1500 ,
                limit: "800 ",
                everyDocPrice: "635 ",
                isVisible: "class7",
                link: "https://app.faktura.uz/ru/servicepackage/preview/9"
            },
            {
                name: " (2000)",
                price: "1 250 500 ",
                cuantity: 2000 ,
                limit: "800 ",
                everyDocPrice: "625 ",
                isVisible: "class8",
                link: "https://app.faktura.uz/ru/servicepackage/preview/8"
            },
            {
                name: " (2500)",
                price: "1 500 000 ",
                cuantity:  2500 ,
                limit: "800 ",
                everyDocPrice: "600 ",
                isVisible: "class8",
                link: "https://app.faktura.uz/ru/servicepackage/preview/7"
            },
            {
                name: " (5000)",
                price: "2 750 000 ",
                cuantity:  5000,
                limit: "800 ",
                everyDocPrice: "550 ",
                isVisible: "class10",
                link: "https://app.faktura.uz/ru/servicepackage/preview/10"
            }
          ]
      }
  },
  components: {
      headerComponent,
      footerComponent
  },
  metaInfo() {
        return { 
            title: "Тарифы на использование СЭД Faktura",
            meta: [
                { name: 'description', content:  'Тарифы на использование СЭД Faktura. ⏩  Месяц бесплатного пользования после регистрации. ☎️: +998 (71) 200-00-13.'},
            ]
        }
    },
}
</script>

<style>
.tarif-plan {
    background: #F7F7F7;
    padding: 30px;
    border-radius: 10px;
}
.dop-info {
    height: 150px;
    background: white;
}
.dop-footer button {
    margin-bottom: 25px;
}
.dop-info {
    font-weight: 700;
    font-size: 17px;
    padding: 20px;
}
.dop-footer {
    text-align: center;
}

.dop-price {
    text-align: center;
    padding: 15px 0;
    background: #F3F3F3;
}
.dop-img {
    padding-bottom: 15px;
}
.dop-hat {
    background: #3A546D;
    color: white;
    padding: 10px;
    text-align: center;
    font-weight: 600;
    height: 70px;
    display: flex;
    justify-content: center;
    border-radius: 7px 7px 0 0;
    align-items: center;
}

.set-price {
    padding: 3px 10px;
    font-size: 12px;
    margin-bottom: 10px;
}
.collapse-design {
    background: rgb(232, 207, 22);
    position: relative;
    top: -25px;
    margin: 10px;
    border-radius: 10px;
    z-index: -1;
    padding-top: 20px;
}

.capsule {
    background: #FFE421;
    border-radius: 10px;
    margin: 10px;
    padding: 5px;
    text-align: center;
}

.capsule h4 { 
    color: red;
    font-weight: 700;
}

#price #head-page-title {
    background-image: url("../assets/img/hero-bg-4.jpg");
}

#price .table th, .table td {
    text-align: center;
}

#price .btn-faktura {
    background-color: #66c93e;
    color: white;
    font-weight: 600;
    border-radius: 23px;
}

#price .btn-faktura a {
    color: white;
}

#price .table .thead-dark th {
    color: #fff;
    background-color: #f3f3f3;
    border: none;
    color: #585858;
}

#price table {
    margin-bottom: 70px;
    box-shadow: 0px 0px 22px -5px rgb(0 0 0 / 75%);
    border-radius: 15px;
}

.how-to-pay {
    width: 600px;
    text-align: center;
    margin: 0 auto;
    margin-bottom: 123px;
    font-size: 17px;
    color: gray;
}

.dop-block {
    box-shadow: 0px 0px 20px -5px rgb(0 0 0 / 75%);
    border-radius: 7px;
    height: 100%;
}

</style>
