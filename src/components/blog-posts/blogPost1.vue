<template>
    <div id="videlessons">
        <div id="head-page-title">
            <headerComponent></headerComponent>
            <div class="page-title">
                <div class="page-title-block">
                    <h1>{{ translation.translate('blog', 'blog1Text1') }}</h1>
                </div>
            </div>
        </div>
        <div id="page-body" style="background: #f6f6f6;">
            <div class="container">
                <div class="row">
                    <div class="col-12 col-md-8">
                        <div class="post-body">
                            <div class="update-text">
                                <p class="registered-date"><CalendarIcon/>05:00 / 17.02.2021</p>
                                <div></div>
                                <img src="../../assets/img/blog/blog2Max.png" alt="">
                                <p>
                                    {{ translation.translate('blog', 'blog1Text2') }} 
                                </p>
                                <h2>
                                    {{ translation.translate('blog', 'blog1Text3') }} 
                                </h2>
                                <p>
                                    {{ translation.translate('blog', 'blog1Text4') }} 
                                </p>
                                <h2>
                                   {{ translation.translate('blog', 'blog1Text5') }} 
                                </h2>
                                <img src="../../assets/img/blog/blog2in.png" alt="">
                                <div>
                                    <h4>
                                        {{ translation.translate('blog', 'blog1Text6') }} 
                                    </h4>
                                    <p>
                                        {{ translation.translate('blog', 'blog1Text7') }} 
                                    </p>
                                    <h4>
                                        {{ translation.translate('blog', 'blog1Text8') }} 
                                    </h4>
                                    <p>
                                        {{ translation.translate('blog', 'blog1Text9') }}  
                                    </p>
                                    <h4>
                                        {{ translation.translate('blog', 'blog1Text10') }}  
                                    </h4>
                                    <p>
                                        {{ translation.translate('blog', 'blog1Text11') }}  
                                    </p>
                                    <h4>
                                        {{ translation.translate('blog', 'blog1Text12') }} 
                                    </h4>
                                    <p>
                                        {{ translation.translate('blog', 'blog1Text13') }}  
                                    </p>
                                    <h4>
                                        {{ translation.translate('blog', 'blog1Text14') }} 
                                    </h4>
                                    <p>
                                        {{ translation.translate('blog', 'blog1Text15') }} 
                                    </p>
                                    <p>
                                        {{ translation.translate('blog', 'blog1Text16') }} 
                                    </p>
                                    <p>
                                        {{ translation.translate('blog', 'blog1Text17') }} 
                                    </p>
                                </div>
                            </div>
                            <hr>
                        </div>
                    </div>
                    <div class="col-12 col-md-4 sidebar">
                        <div class="">
                            <div class="post-title">
                                <span> {{ translation.translate('blog', 'blog1Text') }}  </span>
                            </div>
                            <div class="recent-updates">
                                <div class="d-flex">
                                    <span>
                                        <router-link class="d-flex" :to="{ name: 'основные-принципы-электронного-документооборота' }">   
                                            <img src="../../assets/img/blog/blog11.png">
                                            <div class="recent-text position-relative">
                                                <h5> {{ translation.translate('blog', 'blog2Text1') }} </h5>
                                                <span class="date">05:00 / 17.02.2021</span>
                                            </div>
                                        </router-link>
                                    </span>
                                </div>
                            </div>
                            <div class="pb-5"></div>
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

// let blogs = require('../../blog')

import translate from './../../translation/translate'

import { CalendarIcon } from 'vue-feather-icons'

export default {
    name: 'blog-1',
    data() {
        return {
            currentBlogId: null,
            isScrolled: false,
            scrollPosition: null,
            limitPosition: 500,
            scrolled: false,
            lastPosition: 0,
            translation: translate
        }
    },
    methods: {
        doSomethingCool() {
            location.reload();
        },
        updateScroll() {
            /* eslint-disable no-debugger */
            this.scrollPosition = window.scrollY
            
            if (this.scrollPosition > 10) {
                this.isScrolled = true;
            } else {
                this.isScrolled = false;
            }
            
            if (this.scrollPosition < 20) {
                this.isTopHeader = true;
            } else  {
                this.isTopHeader = false;
            }
        },
        handleScroll() {
            if (this.lastPosition < window.scrollY && this.limitPosition < window.scrollY) {
            this.scrolled = true;
            // move up!
            }

            if (this.lastPosition > window.scrollY) {
            this.scrolled = false;
            // move down
            }

            this.lastPosition = window.scrollY;
            // this.scrolled = window.scrollY > 250;
        },
    },
    mounted() {
        window.addEventListener('scroll', this.updateScroll);
    },
    destroyed() {
        window.removeEventListener("scroll", this.handleScroll);
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

.recent-updates .d-flex:hover .recent-text h5 {
    color: #7dc102;
}

.update-text {
    color: #6f6f6f;
    padding-top: 20px;
    background: white;
    padding: 10px 15px;
}

.update-text img {
    width: 100%;
    padding: 2% 0;
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
