<template>
    <div id="videlessons">
        <div id="head-page-title">
            <headerComponent></headerComponent>
            <div class="page-title">
                <div class="page-title-block">
                    <h1></h1>
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
                                <img src="" class="mb-3" alt="">
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
            title: "Список изменений и улучшений в версии 1.8.12",
            meta: [
                { 
                    name: 'description',
                    content:  'Преимущества электронного документооборота(ЭДО). ✔Зачем нужно внедрять ЭДО. ✔Основные преимущества электронного документооборота.'
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
