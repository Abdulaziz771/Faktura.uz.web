<template>
    <div id="videlessons">
        <div id="head-page-title">
            <headerComponent></headerComponent>
            <div class="page-title">
                <div class="page-title-block">
                    <h1>Список изменений и улучшений в версии 1.8.13</h1>
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
                                <img src="../../assets/img/blog/Versiya1813/Main-Blog-Photho.jpg" class="mb-3" alt="">
                                <p>
                                    <b>Если у вас возникли какие-либо проблемы в системе просим вас обратиться к нам через телеграм группы или по номеру нашего call-center.</b>
                                </p>
                                <ul>
                                    <li>Получение списка кодов филиалов (Branch Code);</li>
                                    <li>Добавление дополнительного поля для заполнения номера заказа в формах счет-фактура;</li>
                                    <li>Разные другие изменения и улучшения в системе;</li>
                                </ul>
                                <a href="https://t.me/fakturauz" target="_blank"> Служба поддержки</a>
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
            title: "Список изменений и улучшений в версии 1.8.13",
            meta: [
                { 
                    name: 'description',
                    content:  'Уважаемые пользователи Faktura.uz, представляем вам список изменений и улучшений в версии 1.8.13'
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
