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
                <div class="free-month"><h2> {{ translation.translate('priceTable', 'priceTableTitleFirstThing') }}</h2></div>
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
                <div class="faq-block-price d-flex">
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
                </div>
                <p class="how-to-pay">
                    {{ translation.translate('priceTable', 'goToHowToPay') }} <router-link :to='{ name: "video-lessons" }'> {{ translation.translate('landingPageHome', 'tolink') }} </router-link>
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
  }
}
</script>

<style>
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
    margin: 100px 0;
    margin-bottom: 70px;
    box-shadow: 0px 0px 50px -18px rgba(0,0,0,0.75);
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

</style>
