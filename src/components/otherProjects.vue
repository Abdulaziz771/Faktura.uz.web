<template>
    <div id="videlessons">
        <div id="head-page-title">
            <headerComponent></headerComponent>
            <div class="page-title">
                <div class="page-title-block">
                    <h1>{{ translation.translate('footer', 'outOtherProjects') }}</h1>
                    <h5>{{ translation.translate('otherProjects', 'otherDescr') }}</h5>
                </div>
            </div>
        </div>
        <div id="page-body">
            <div class="container">
               <div class="row company-list">
                   <div class="col-lg-6 col-12 p-0 bb">
                       <div class="company">
                            <img src="../assets/img/E.png" alt="Edieye EDI">
                            <h2>Faktura EDI</h2>
                            <h6>Faktura EDI - {{ translation.translate('otherProjects', 'edieye') }}</h6>
                            <a href="https://edi.faktura.uz" target="_blank">{{ translation.translate('otherProjects', 'edieyeStartButton') }}<ChevronRightIcon/></a>
                        </div>
                   </div>
                   <div class="col-lg-6 col-12 p-0 bb">
                       <div class="company  docco-float">
                           <img src="../assets/img/D.png" alt="Docco.uz">
                           <h2>Docco</h2>
                           <h6>Docco -  {{ translation.translate('otherProjects', 'docco') }}</h6>
                           <a href="https://docco.uz/#components" target="_blank">{{ translation.translate('otherProjects', 'edieyeStartButton') }}<ChevronRightIcon/></a>
                       </div>
                   </div>
               </div>
               <div class="row company-list">
                <div class="col-lg-6 col-12 p-0 bb">
                    <div class="company">
                        <img src="../assets/img/logo-hippo.png" alt="Hippo.uz Система складского учет и производство">>
                        <h2>Hippo</h2>
                        <h6>Hippo - {{ translation.translate('otherProjects', 'hippo') }}</h6>
                        <a href="https://hippo.uz/" target="_blank">{{ translation.translate('otherProjects', 'hippoStartButton') }}<ChevronRightIcon/></a>
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
import { ChevronRightIcon } from 'vue-feather-icons'

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
      ChevronRightIcon
  },
  metaInfo() {
        return { 
            title: "Другие проекты Faktura",
            meta: [
                { name: 'description', content: 'Новые набирающие популярность проекты от создателей Faktura. ⏩  Faktura EDI. ⏩  Docco. ⏩  Hippo. ☎️: +998 (71) 200-00-13'},
            ]
        }
    },
}
</script>

<style>


#videlessons #head-page-title {
    background-image: url("../assets/img/hero-bg-4.jpg");
}

.company-list .company img {
    width: 70px;
    margin-bottom: 20px;
}

.company-list .company  {
    width: 350px;
    margin: 60px 0;
}

.company-list .company h6 {
    color: #8e8e8e;
    font-weight: 400;
    font-size: 18px;
    line-height: 21px;
    margin-top: 13px;
}

.company-list {
    margin-top: 10px;
    padding: 0 130px;
}

.company h2 {
    text-transform: uppercase;
}

.company svg  {
    position: relative;
    width: 19px;
}

.bb {
    border-bottom: 1px solid #e2e2e2;
}

</style>
