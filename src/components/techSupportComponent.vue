<template>
    <div id="tech-support">
        <div id="head-page-title">
            <headerComponent></headerComponent>
            <div class="page-title">
                <div class="page-title-block">
                    <h1>{{ translation.translate('techSupport', 'techSupportOffice') }}</h1>
                    <h5>{{ translation.translate('techSupport', 'techSupportDescription') }}</h5>
                </div>
            </div>
        </div>
        <div id="page-body">
            <div class="container">
                <div class="under-title-blocks">
                    <div class="row">
                        <div class="col-12 col-md-4 under-blocks">
                            <span class="border-line"></span>
                            <PhoneCallIcon/>
                            <h5>{{ translation.translate('techSupport', 'techSupportOffice') }}</h5>
                            <div><a href="tel:+998 71 207 00 13">+998 71 200 00 13</a></div>
                        </div>
                        <div class="col-12 col-md-4 under-blocks">
                            <span class="border-line"></span>
                            <img src="../assets/img/1c.png">
                            <h5>{{ translation.translate('techSupport', '1cQuestions') }}</h5>
                            <div><a href="https://t.me/Faktura_Dilnoza">{{ translation.translate('techSupport', 'teelgramAccaount') }}</a></div>  
                            <div><a href="tel:+998 90 573 23 11">+998 71 200 00 13</a></div>
                        </div>
                        <div class="col-12 col-md-4 under-blocks under-blocks-last">
                            <span class="border-line"></span>
                            <MessageCircleIcon/>
                            <h5>{{ translation.translate('techSupport', 'tgGroup') }}</h5>
                            <div><a href="https://t.me/fakturauz" target="_blank">{{ translation.translate('techSupport', 'forQuestions') }}</a></div>
                            <div><a href="https://t.me/fakturauz_channel" target="_blank">{{ translation.translate('techSupport', 'forChannel') }}</a></div>
                            <span class="border-line"></span>  
                        </div>
                    </div>
                </div>
                 <div class="page-title sub-title">
                    <div class="page-title-block">
                        <h3>{{ translation.translate('techSupport', 'call-center') }}</h3>
                        <h6>{{ translation.translate('techSupport', 'call-centerDescription') }}</h6>
                    </div>
                </div>
                <div class="tech-users">
                    <div class="row">
                        <a href="https://t.me/Salokhiddin_Sattarov" target="_blank" class="col-12 col-sm-4 call-block">
                            <span class="position-relative">
                                <img src="../assets/img/sal.jpg" class="ava">
                                <span :class="{ 'd-none': !callCenter1 }" class="online-mark"></span>
                            </span>
                            <div class="users">
                                <div class="name">Салохиддин</div>
                                <div class="post">{{ translation.translate('techSupport', 'callcEnterHead') }}</div>
                            </div>
                            <img src="../assets/img/smm-telegram-logo.png" class="tg" alt="">
                        </a>
                        <a href="https://t.me/Faktura_Dilnoza"  target="_blank" class="col-12 col-sm-4 call-block">
                            <span class="position-relative">
                                <img src="../assets/img/dil.jpg" class="ava">
                                <span :class="{ 'd-none': !callCenter2 }" class="online-mark"></span>
                            </span>
                            <div class="users">
                                <div class="name">Дилноза</div>
                                <div class="post">{{ translation.translate('techSupport', 'callcEnterBody') }}</div>
                            </div>
                            <img src="../assets/img/smm-telegram-logo.png" class="tg" alt="">
                        </a>
                        <a href="https://t.me/A_bdullayev" target="_blank" class="col-12 col-sm-4 call-block">
                            <span class="position-relative">
                                <img src="../assets/img/noil.jpg" class="ava">
                                <span :class="{ 'd-none': !callCenter3 }" class="online-mark"></span>
                            </span>
                            <div class="users">
                                <div class="name">Абдураззох</div>
                                <div class="post">{{ translation.translate('techSupport', 'callcEnterBody') }}</div>
                            </div>
                            <img src="../assets/img/smm-telegram-logo.png" class="tg" alt="">
                        </a>
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
import { PhoneCallIcon, MessageCircleIcon } from 'vue-feather-icons'
import mixin from './../gtagMixin'
import translate from './../translation/translate'

export default {
  name: 'videLessons',
  mixins: [mixin],
  data() {
      return {
          callCenter1: false,
          callCenter2: false,
          callCenter3: false,
          translation: translate
      }
  },
  methods : {
      updateBackground() {
        var hr = (new Date()).getHours();
        if (hr < 10) {
            this.callCenter1 = false
            this.callCenter2 = true
            this.callCenter3 = true
        } else if (hr < 12 ) {
            this.callCenter1 = true
            this.callCenter2 = true
            this.callCenter3 = true
        } else if (hr > 13 && hr < 14 ) {
            this.callCenter1 = true
            this.callCenter2 = false
            this.callCenter3 = false
        } else  if (hr < 18) {
           this.callCenter1 = true
           this.callCenter2 = true
           this.callCenter3 = true
        } else {
            this.callCenter1 = true
           this.callCenter2 = false
           this.callCenter3 = true
        }
      }
  },
  mounted() {
      setInterval(this.updateBackground, 1000 * 60);
  },
  created() {
    this.updateBackground()
  },
  metaInfo() {
        return { 
            title: "Техническая поддержка системы Faktura",
            meta: [
                { name: 'description', content:  'Наша группа техподдержки ответит на любые ваши вопросы в течение 40 секунд. Если вы не смогли связаться с нами в группе напишите нашим операторам в telegram.'},
            ]
        }
    },
  components: {
      headerComponent,
      PhoneCallIcon,
      footerComponent,
      MessageCircleIcon
  }
}
</script>

<style>

#tech-support #head-page-title {
    background-image: url("../assets/img/hero-bg-4.jpg");
}

#tech-support .under-title-blocks {
    margin: 25px 0;
}

#tech-support .under-blocks {
    padding: 25px;
    text-align: center;
}

#tech-support .under-title-blocks .under-blocks svg {
    width: 26px;
    height: 26px;
}

#tech-support .under-title-blocks .under-blocks img {
    width: 40px;
}

#tech-support .under-title-blocks .under-blocks h5 {
    margin-top: 10px;
}

#tech-support .under-title-blocks .under-blocks a {
    color: #969696;
}

#tech-support .under-title-blocks .under-blocks .border-line {
    color: #969696;
    height: 30px;
    width: 1px ;
    background-color: gray;
}

#tech-support .under-title-blocks .under-blocks::before {
    content: '';
    width: 0;
    height: 50%;
    position: absolute;
    border: 1px solid #e7e7e7;
    top: 25%;
    left: 0;
}

#tech-support .under-title-blocks .under-blocks-last::after {
    content: '';
    width: 0;
    height: 50%;
    position: absolute;
    border: 1px solid #e7e7e7;
    top: 25%;
    right: 0;
}

#tech-support .sub-title {
    width: 420px;
    margin: 0 auto;
}

.tech-users .call-block .ava {
    border-radius: 50%;
    width: 80px;
    margin-top: 65px;
}

.tech-users .call-block {
    text-align: center;
    height: 360px;
    background: #f8f8f8;
    cursor: pointer;
    transition: all 0.3s ease;
}

.tech-users .call-block:hover {
    box-shadow: 0 0 34px rgb(0 0 0 / 21%);
    z-index: 9999;
}

.tech-users .call-block:nth-child(2) {
    border-left: 1px solid #e7e7e7;
    border-right: 1px solid #e7e7e7;
}

.tech-users .call-block .name {
    font-size: 20px;
    font-weight: 700;
    color: #737373;
    margin-top: 16px;
}

.tech-users .call-block .users {
    margin-top: 27px;
}

.tech-users .call-block .post {
    font-size: 13px;
    font-weight: 400;
    color: #8c8c8c;
}

.online-mark {
    width: 20px;
    height: 20px;
    background: linear-gradient(200deg, rgb(0 174 255 / 79%) 0%, rgba(44,165,222,1) 100%);
    z-index: 999999999;
    position: absolute;
    top: 63px;
    right: 2px;
    border-radius: 50%;
}

.tech-users  {
    margin-top: 50px;
    margin-bottom: 200px;
}

.tech-users .call-block .tg {
    width: 30px;
    height: 30px;
    color: #66c93e;
    margin-top: 25px;
}

.tech-users a:hover {
    text-decoration: none;
}
</style>
