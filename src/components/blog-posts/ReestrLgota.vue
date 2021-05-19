<template>
    <div id="videlessons">
        <div id="head-page-title">
            <headerComponent></headerComponent>
            <div class="page-title">
                <div class="page-title-block">
                    <h1>В Faktura.uz теперь можно загружать счет-фактуры с Льготами</h1>
                </div>
            </div>
        </div>
        <div id="page-body" style="background: #f6f6f6;">
            <div class="container">
                <div class="row">
                    <div class="col-12">
                        <div class="post-body">
                            <div class="update-text">
                                <p class="registered-date"><CalendarIcon/>17:15 / 19.02.2021</p>
                                <div></div>
                                <img class="mb-3" src="../../assets/img/blog/lgota Restr/MainPhoto.jpg" alt="">
                                <p>
                                    В Faktura.uz теперь можно загружать счет-фактуры с Льготами с помощью загрузки экзель файла. Для этого скачайте обновлённые экзель шаблоны из разделов "Счет-фактура (Фарм, Акциз) 2020"
                                </p>
                                <p>
                                    Eсли у вас установлен индивидуальный шаблон, то обратитесь к нам для обновления шаблона.
                                </p>
                                <a href="https://t.me/fakturauz" target="_blank">Служба поддержки</a>
                            </div>
                            <hr>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <footerComponent></footerComponent>
    </div>
</template>

<script>
import headerComponent from "../../components/headerComponent"
import footerComponent from "../../components/footerComponent"
import translate from '../../translation/translate'
import { CalendarIcon } from 'vue-feather-icons'

// let blogs = require('../../news').default

export default {
    name: '',
    data() {
        return {
            translation: translate,
            //blogs
        }
    },
    metaInfo() {
        return { 
            title: "Счет-фактуры с льготами (реестр)",
            meta: [
                { 
                    name: 'description',
                    content:  'В Faktura.uz теперь можно загружать счет-фактуры с Льготами с помощью загрузки экзель файла.'
                },
                { 
                    property: 'og:image',
                    content:  'https://faktura.uz/img/blog3.d13e8567.png'
                },
                { 
                    property: 'og:image:type',
                    content:  'image/png'
                },
                { 
                    property: 'og:image:width',
                    content:  '1024'
                },
                { 
                    property: 'og:image:height',
                    content:  '1024'
                },
            ]
        }
    },
    components: {
        headerComponent,
        footerComponent,
        CalendarIcon
    }
}
</script>

<style>

#videlessons #head-page-title {
    background-image: url("../../assets/img/hero-bg-4.jpg");
}

</style>
