<template>
    <div id="videlessons">
        <div id="head-page-title">
            <headerComponent></headerComponent>
            <div class="page-title">
                <div class="page-title-block">
                    <h1>{{post.title}}</h1>
                </div>
            </div>
        </div>
        <div id="page-body" style="background: #f6f6f6;">
            <div class="container">
                <div class="row">
                    <div class="col-12">
                        <div class="post-body">
                            <div class="update-text" v-html="`<p class='registered-date'>${moment(this.post.created_date, post.lang).fromNow().replace('Бир неча ', '').replace('фурсат олдин', 'Хозиргина')}</p>` + post.content">
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
import headerComponent from "../components/headerComponent"
import footerComponent from "../components/footerComponent"
import translate from '../translation/translate'
import moment from "moment"
export default {
    name: 'universalBlog',
    data() {
        return {
            translation: translate,
            post: {}
        }
    },
    methods: {
        getPost(link = window.location.pathname.slice(6)){
            console.log(link);
            fetch("https://dev.faktura.uz/api/get/newsAndUpdates", {
                method: "POST",
                credentials: "omit",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify({
                    find: {link},
                    need: {__v: 0, _id: 0}
                })
            })
            .then(res => res.json())
            .then(res => {
                console.log(res);
                if(res.success) {
                    this.post = res.data[0]
                    document.title = this.post.title
                }
                else window.location = "/blog"
            })
        },
        moment(date, lang){
            moment.locale(lang)
            return moment(date)
        }
    },
    components: {
        headerComponent,
        footerComponent,
    },
    created(){
        this.getPost()
    }
}
</script>

<style>

.update-text img {
    width: 100%;
    padding: 2% 0;
}

#videlessons #head-page-title {
    background-image: url("../../src/assets/img/hero-bg-4.jpg");
}

.post-body {
    padding: 30px;
}

.update-points {
    width: 80%;
    background: #f4f4f4;
    padding: 16px;
    margin-bottom: 45px;
    border-radius: 10px;
}

.recent-text {
    padding: 0 13px;
}

.recent-text .date {
    font-size: 12px;
    color: #9e9e9e;
}

.recent-text h5 {
    font-size: 17px;
    color: dimgrey;
        line-height: 14px;
}

.recent-text h5 {
    font-size: 17px;
    color: dimgrey;
}

.recent-updates .d-flex .recent-text:hover h5 {
    color: #7dc102;
}

.update-text {
    color: #6f6f6f;
    padding-top: 20px;
}

.update-points p {
    font-weight: 600;
    padding-top: 15px;
    color: #818181;
}

.recent-updates img {
    width: 115px;
}

.recent-updates a:hover {
    text-decoration: none;
}

.sidebar .post-title {
    border-bottom: 3px solid #3c566f;
    padding-top: 30px;
}

.sidebar .post-title span{
    background: #3c566f;
    color: white;
    font-size: 14px;
    padding: 7px 10px;
    position: relative;
    bottom: 2px;
    font-weight: 600;
}

.recent-updates .d-flex {
    margin-top: 10px;
    cursor: pointer;
}


</style>
