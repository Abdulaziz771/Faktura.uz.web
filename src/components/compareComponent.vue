<template>
    <div id="videlessons">
        <div id="head-page-title">
            <headerComponent></headerComponent>
            <div class="page-title">
                <div class="page-title-block">
                    <h1>{{ translation.translate('compare', 'compareTitle') }}</h1>
                    <h5>{{ translation.translate('compare', 'compareDescription') }}</h5>
                </div>
            </div>
        </div>
        <div id="page-body">
            <div class="container mt-5 mb-5">
                <div class="comapre-table">
                    <div class="row comapre-table-row">
                        <div class="col-8">
                            <div class="table-title">
                                <span class="features-table-title">{{ translation.translate('compare', 'compareTableTitle') }}</span>
                            </div>
                        </div>
                        <div class="col-2 text-center">
                            <span class="cmpare-logo">
                                <img src="../assets/img/logo.png" alt="Faktura.uz logo, логотип">
                            </span>
                        </div>
                        <div  class="col-2 text-center position-relative">
                            <div class="other-projects" >
                                <div>
                                    <img src="../assets/img/other-icon-17.png" data-toggle="tooltip" data-placement="right" title="Hooray!" alt="Другие операторы">
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="row comapre-table-points" v-for="(compareOperator, index) in comparerBase" :key="index">
                        <div class="col-8 p-0">
                            <div class="fetures-title d-flex">
                                <div class="features-icon">
                                    <img :src="compareOperator.img" alt="Иконка, особенности системы">
                                </div>
                                <div class="all-texts">
                                    <span class="fetures-title-point">
                                        {{ compareOperator.compareTitle }}
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div class="col-2 p-0 text-center">
                            <div class="compare-icons">
                                <CheckCircleIcon v-if="compareOperator.fakturaOption" class="compare-check-green"/>
                                <XCircleIcon v-else class="compare-check-red"/>
                            </div>
                        </div>
                        <div class="col-2 p-0 text-center">
                            <div class="compare-icons">
                                <CheckCircleIcon v-if="compareOperator.optherOptions" class="compare-check-green"/>
                                <XCircleIcon v-else class="compare-check-red"/>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="w-100"><h6 class="text-center light mt-5 rate-list">{{ translation.translate('compare', 'lingGoToRegis') }} <a target="_blank" href="https://account.faktura.uz/RegisterNew?ReturnUrl=http%3A%2F%2Faccount.faktura.uz%2FAuthorize%3Fresponse_type%3Dcode%26client_id%3D12379127389123%26redirect_uri%3Dhttps%253a%252f%252fapp.faktura.uz%252faccount%252fexternallogin%26state%3D%252f%26scope%3D0%252c1%252c2%252c3"> {{ translation.translate('landingPageHome', 'tolink') }}</a></h6></div>
            </div>
        </div>
        <footerComponent></footerComponent>
    </div>
</template>

<script>
import headerComponent from "../components/headerComponent"
import footerComponent from "../components/footerComponent"
import { CheckCircleIcon, XCircleIcon  } from 'vue-feather-icons'

import translate from './../translation/translate'

export default {
  name: 'faq',
  data() {
      return {
        isOperatorChoosed: false,
        translation: translate
      }
  },
  computed: {
      renderComparerOptions() {
          return true
      },
      comparerBase() {
          return [
                {
                    img: require("../assets/img/compare-icon-1.png"),
                    compareTitle: this.translation.translate('compare', 'compare1'),
                    fakturaOption: true,
                    optherOptions: false
                },
                {
                    img: require("../assets/img/compare-icon-1.png"),
                    compareTitle: this.translation.translate('compare', 'compare2'),
                    fakturaOption: true,
                    optherOptions: false
                },
                {
                    img: require("../assets/img/compare-icon-1.png"),
                    compareTitle: this.translation.translate('compare', 'compare3'),
                    fakturaOption: true,
                    optherOptions: false
                },
                {
                    img: require("../assets/img/compare-icon-1.png"),
                    compareTitle: this.translation.translate('compare', 'compare4'),
                    fakturaOption: true,
                    optherOptions: false
                },
                {
                    img: require("../assets/img/compare-icon-1.png"),
                    compareTitle: this.translation.translate('compare', 'compare5'),
                    fakturaOption: true,
                    optherOptions: false
                },
                {
                    img: require("../assets/img/compare-icon-1.png"),
                    compareTitle: this.translation.translate('compare', 'compare6'),
                    fakturaOption: true,
                    optherOptions: false
                },
                {
                    img: require("../assets/img/compare-icon-1.png"),
                    compareTitle: this.translation.translate('compare', 'compare7'),
                    fakturaOption: true,
                    optherOptions: false
                },
                {
                    img: require("../assets/img/compare-icon-1.png"),
                    compareTitle: this.translation.translate('compare', 'compare8'),
                    fakturaOption: true,
                    optherOptions: false
                },
                {
                    img: require("../assets/img/compare-icon-1.png"),
                    compareTitle: this.translation.translate('compare', 'compare9'),
                    fakturaOption: true,
                    optherOptions: false
                },
                {
                    img: require("../assets/img/compare-icon-1.png"),
                    compareTitle: this.translation.translate('compare', 'compare10'),
                    fakturaOption: true,
                    optherOptions: false
                },
            ]
      }
  },
  components: {
      headerComponent,
      footerComponent,
      CheckCircleIcon,
      XCircleIcon

  }
}
</script>

<style>


#videlessons #head-page-title {
    background-image: url("../assets/img/hero-bg-4.jpg");
}

.operator-option {
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    top: 0;
    height: auto;
    background: #e1e6fc;
    z-index: 99;
}

.other-projects {
    height: 100%;
    padding: 9px 20px;
}

.other-projects img {
   width: 70px;
}

.compare-check-green {
    color: #6dcb47;
}

.compare-check-red {
    color: red;
}

.cmpare-logo img {
    width: 70px;
    padding: 10px;
}

.features-table-title {
    font-weight: 500;
    color: #818181;
    font-size: 19px;
}

.table-title {
    display: flex;
    align-items: center;
    height: 100%;
    padding: 0 20px;
}

.comapre-table-row {
    background: #f7f8fc;
    border: 1px solid #e7e6ec;
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
}

/* .comapre-table {
    border: 1px solid #e7e6ec;
} */

.comapre-table-points {
    border: 1px solid #e7e6ec;
    border-top: none;
}

.fetures-title-point {
    font-weight: 700;
    font-size: 16px;
    color: #757575;
}
.fetures-title-description {
    font-size: 16px;
    color: #909090;
}

.features-icon img {
    width: 30px;
    margin: 5px 15px;
}

.fetures-title {
    padding-right: 100px;
    padding-top: 15px;
    padding-bottom: 15px;
}
.compare-icons {
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
}

.all-texts {
    display: flex;
    align-items: center;
}

.choose-operator {
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: #e1e6fc;
}
</style>
