<template>
    <div>
        <section id="hero-page">
            <headerComponent></headerComponent>
            <content class="hero-page-content">
                <div class="container-fluid">
                    <div class="row">
                        <div class="col-12 p-0">
                            <div class="main-slide-background">
                                <div id="carouselExampleIndicators" data-interval="6500" class="carousel slide" data-ride="carousel">
                                    <ol class="carousel-indicators">
                                        <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
                                        <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                                        <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                                        <li data-target="#carouselExampleIndicators" data-slide-to="3"></li>
                                        <li data-target="#carouselExampleIndicators" data-slide-to="4"></li>
                                        <li data-target="#carouselExampleIndicators" data-slide-to="5"></li>
                                        <li data-target="#carouselExampleIndicators" data-slide-to="6"></li>
                                        <li data-target="#carouselExampleIndicators" data-slide-to="7"></li>
                                    </ol>
                                    <div class="carousel-inner">
                                        <div class="carousel-item desktop-slide active">
                                            <v-lazy-image srcset="./../assets/img/sldier/5555.png" src="" use-picture alt="...">
                                                <source srcset="./../assets/img/sldier/5555.png" /> 
                                            </v-lazy-image>
                                            <div class="carousel-caption d-block">
                                                <h2 class="slide-desc-title">{{ translation.translate('landingPageHome', 'freeMonthTitle') }}</h2>
                                                <p class="slide-desc-description mt-3 month-free">{{ translation.translate('landingPageHome', 'freeMonthDesc') }}</p>
                                                <div class="slide-button-group">
                                                    <button class="take-an-action glow-big"><a target="_blank" href="https://account.faktura.uz/RegisterNew?ReturnUrl=http%3A%2F%2Faccount.faktura.uz%2FAuthorize%3Fresponse_type%3Dcode%26client_id%3D12379127389123%26redirect_uri%3Dhttps%253a%252f%252fapp.faktura.uz%252faccount%252fexternallogin%26state%3D%252f%26scope%3D0%252c1%252c2%252c3" @click='callGtag("Нажатие на регистрацию,log_in,click")'>{{ translation.translate('landingPageHome', 'slider3Button1') }}</a></button>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="carousel-item desktop-slide">
                                            <img src="./../assets/img/sldier/7777.png" alt="">
                                            <div class="carousel-caption d-block">
                                                <h2 class="slide-desc-title">{{ translation.translate('landingPageHome', 'dogovorTitle') }}</h2>
                                                <p class="slide-desc-description mt-3">{{ translation.translate('landingPageHome', 'dogovorDescription') }}</p>
                                                <div class="slide-button-group">
                                                    <button class="take-an-action glow-big"><a target="_blank" href="https://account.faktura.uz/RegisterNew?ReturnUrl=http%3A%2F%2Faccount.faktura.uz%2FAuthorize%3Fresponse_type%3Dcode%26client_id%3D12379127389123%26redirect_uri%3Dhttps%253a%252f%252fapp.faktura.uz%252faccount%252fexternallogin%26state%3D%252f%26scope%3D0%252c1%252c2%252c3" @click='callGtag("Нажатие на регистрацию,log_in,click")'>{{ translation.translate('landingPageHome', 'slider3Button1') }}</a></button>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="carousel-item desktop-slide">
                                            <img src="./../assets/img/sldier/6666.png" class="desktop-slide" alt="">
                                            <div class="carousel-caption d-block">
                                                <h2 class="slide-desc-title">{{ translation.translate('landingPageHome', 'kpkTitle') }}</h2>
                                                <p class="slide-desc-description mt-3">{{ translation.translate('landingPageHome', 'kpkDescript') }}</p>
                                                <div class="slide-button-group">
                                                    <button class="take-an-action glow-big"><a target="_blank" href="https://account.faktura.uz/RegisterNew?ReturnUrl=http%3A%2F%2Faccount.faktura.uz%2FAuthorize%3Fresponse_type%3Dcode%26client_id%3D12379127389123%26redirect_uri%3Dhttps%253a%252f%252fapp.faktura.uz%252faccount%252fexternallogin%26state%3D%252f%26scope%3D0%252c1%252c2%252c3" @click='callGtag("Нажатие на регистрацию,log_in,click")'>{{ translation.translate('landingPageHome', 'slider3Button1') }}</a></button>
                                                </div>
                                            </div>
                                        </div>
                                       <div class="carousel-item desktop-slide">
                                            <img src="./../assets/img/sldier/3333.png" class="desktop-slide" alt="">
                                            <div class="carousel-caption d-block">
                                                <h1 class="slide-desc-title"> {{ translation.translate('landingPageHome', 'slider1Title') }}</h1>
                                                <p class="slide-desc-description">{{ translation.translate('landingPageHome', 'slider1Desc') }}</p>
                                                <div class="slide-button-group">
                                                    <button class="take-an-action glow-big"><a target="_blank" href="https://account.faktura.uz/RegisterNew?ReturnUrl=http%3A%2F%2Faccount.faktura.uz%2FAuthorize%3Fresponse_type%3Dcode%26client_id%3D12379127389123%26redirect_uri%3Dhttps%253a%252f%252fapp.faktura.uz%252faccount%252fexternallogin%26state%3D%252f%26scope%3D0%252c1%252c2%252c3" @click='callGtag("Нажатие на регистрацию,log_in,click")'>{{ translation.translate('landingPageHome', 'slider3Button1') }}</a></button>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="carousel-item desktop-slide">
                                            <v-lazy-image srcset="./../assets/img/sldier/1111.png" src="" use-picture alt="...">
                                                <source srcset="../assets/img/sldier/1111.png" /> 
                                            </v-lazy-image>
                                            <div class="carousel-caption d-block">
                                                <h2 class="slide-desc-title">{{ translation.translate('landingPageHome', 'slider3Title') }}</h2>
                                                <p class="slide-desc-description">{{ translation.translate('landingPageHome', 'slider3Desc') }}</p>
                                                <div class="slide-button-group">
                                                    <button class="take-an-action glow-big"> <a target="_blank" href="https://account.faktura.uz/RegisterNew?ReturnUrl=http%3A%2F%2Faccount.faktura.uz%2FAuthorize%3Fresponse_type%3Dcode%26client_id%3D12379127389123%26redirect_uri%3Dhttps%253a%252f%252fapp.faktura.uz%252faccount%252fexternallogin%26state%3D%252f%26scope%3D0%252c1%252c2%252c3" @click='callGtag("Нажатие на регистрацию,log_in,click")'>{{ translation.translate('landingPageHome', 'slider3Button1') }}</a></button>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="carousel-item desktop-slide">
                                            <v-lazy-image srcset="./../assets/img/sldier/4444.png" src="" use-picture alt="...">
                                                <source srcset="../assets/img/sldier/4444.png" /> 
                                            </v-lazy-image>
                                            <div class="carousel-caption d-block">
                                                <h3 class="slide-desc-title"> {{ translation.translate('landingPageHome', 'playMarketApp') }}</h3>
                                                <p class="slide-desc-description">{{ translation.translate('landingPageHome', 'AppStoreApp') }}</p>
                                                <div class="slide-button-group">
                                                    <button class="take-a-link"><a target="_blank" href="https://apps.apple.com/us/app/faktura/id1454146398">App Store</a></button>
                                                    <button class="take-an-action"><a target="_blank" href="https://play.google.com/store/apps/details?id=uz.faktura&hl=ru">Play Market</a></button>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="carousel-item desktop-slide">
                                            <v-lazy-image srcset="./../assets/img/sldier/2222.png" src="" use-picture alt="...">
                                                <source srcset="../assets/img/sldier/2222.png" /> 
                                            </v-lazy-image>
                                            <div class="carousel-caption d-block">
                                                <h4 class="slide-desc-title">{{ translation.translate('landingPageHome', 'slider2Title') }}</h4>
                                                <p class="slide-desc-description">{{ translation.translate('landingPageHome', 'slider2Desc') }}</p>
                                                <div class="slide-button-group">
                                                    <button class="take-an-action glow-big"><a target="_blank" href="https://t.me/fakturauz">{{ translation.translate('landingPageHome', 'slider2Button1') }}</a></button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                        <span class="sr-only">Previous</span>
                                    </a>
                                    <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                        <span class="sr-only">Next</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </content>
        </section>

        <div class="ads-place">
            <div>
                <a href="https://buxgalter.uz/tarifs/" target="_blank">
                    <img alt="buxgalter uz"  src="../assets/img/Banners/bux.png">
                </a>
            </div>
        </div>
        <!-- 1-month free -->
        <section id="connect-page">
            <div class="page-title connect-title container traditional-page-width">
                <h2 class="font-weight-bolder dark">{{ translation.translate('landingPageHome', 'freeSectionTitle1') }}</h2>
                <h5 class="light">{{ translation.translate('landingPageHome', 'freeSectionTitle2') }}</h5>
            </div>
            <div class="connect-body gybrid-pochta container">
                <div class="row">
                    <div class="col-md-12 col-lg-6 free-1-month">
                        <v-lazy-image srcset="../assets/img/6.png" src="" use-picture  alt="1C">
                            <source srcset="../assets/img/6.png" /> 
                        </v-lazy-image>
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

        <!-- Price Render -->
        <section id="rate">
            <div class="container">
                <div class="page-title connect-title container-fluid">
                    <h2 class="font-weight-bolder dark"> {{
                            translation.translate('landingPageHome', 'pricesTitle')
                        }} </h2>
                    <h5 class="light">{{ translation.translate('landingPageHome', 'pricesDescription') }}</h5>
                </div>
            </div>
            <div class="doc-body">
                <div class="pick-rate">
                    <div class="input-group  mb-3 play-img-red">
                        <input type="number" class="form-control" @keyup.enter="beforepicking"
                               :placeholder="translation.translate('landingPageHome','amount')" v-model="docsCuantity"
                               aria-label="Recipient's username" aria-describedby="basic-addon2">
                        <div class="input-group-append">
                            <button class="btn btn-outline-secondary" type="button" @click="beforepicking">
                                {{ translation.translate('landingPageHome', 'getPriceRender') }}!
                            </button>
                        </div>
                    </div>
                </div>
                <div :class="{ 'over-priced': moreThan5000 }">
                    <transition name="bounce">
                        <div class="rate-block" v-cloak v-if="pickedRate.isVisible">
                            <div class="rate-header">
                                <h2 class="text-center pb-4"> {{ translation.translate('landingPageHome', 'price') }}
                                    {{ pickedRate.name }}</h2>
                                <div class="text-center">
                                    <span @click="callGtag('Купить тариф,buy_price,click')">
                                        <a :href="pickedRate.link" target="_blank">{{ pickedRate.price }}</a>
                                    </span>
                                </div>
                            </div>
                            <div class="gray-line"></div>
                            <div v-if="!moreThan5000" class="rate-body">
                                <div class="container-fluid">
                                    <div class="row  cuantity-rate">
                                        <div class="col-8 col-md-8  text-left">
                                        <span class="condition">
                                            {{ translation.translate('landingPageHome', 'amountOfDocuments') }}
                                        </span>
                                        </div>
                                        <div class="col-4 col-md-4 text-right">
                                        <span class="font-weight-bolder light rate-number-section">
                                            {{ pickedRate.cuantity }}
                                        </span>
                                        </div>
                                    </div>
                                </div>
                                <div class=" container-fluid mt-2">
                                    <div class="row limit-rate">
                                        <div class="col-8 col-md-8 text-left">
                                        <span class="condition">
                                            {{ translation.translate('landingPageHome', 'eachDocBy') }}
                                        </span>
                                        </div>
                                        <div class="col-4 col-md-4 text-right">
                                        <span class="font-weight-bolder light rate-number-section">
                                            {{
                                                pickedRate.everyDocPrice
                                            }} {{ translation.translate('priceTable', 'summ') }}
                                        </span>
                                        </div>
                                    </div>
                                </div>
                                <div class="container-fluid mt-2">
                                    <div class="row limit-rate">
                                        <div class="col-8 col-md-8 text-left">
                                        <span class="condition">
                                            {{ translation.translate('landingPageHome', 'moreThantLimit') }}
                                        </span>
                                        </div>
                                        <div class="col-4 col-md-4 text-right">
                                        <span class="font-weight-bolder light rate-number-section">
                                            {{ pickedRate.limit }} {{ translation.translate('priceTable', 'summ') }}
                                        </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div v-else class="rate-body">
                                <h5 class="text-center light">
                                    {{ translation.translate('landingPageHome', 'morethan5000priceDescription') }}</h5>
                                <h4 class="text-center dark mt-4 text-danger">+998 (94) 684-46-33</h4>
                            </div>
                        </div>
                    </transition>
                    <h6 class="text-center light mt-5 rate-list">
                        {{ translation.translate('landingPageHome', 'watchAllPrices') }}
                        <router-link :to='{ name: "price" }'>
                            {{ translation.translate('landingPageHome', 'tolink') }}
                        </router-link>
                    </h6>
                </div>
                <transition name="bounce2">
                    <div v-if="loadingGif" class="loading-gif text-center">
                        <img style="width: 30px;" src="../assets/img/4749320.gif" alt="loading gif">
                    </div>
                </transition>
                <transition name="fade">
                    <h1 v-show="moreThan5000"></h1>
                </transition>
            </div>
        </section>

        <section id="connect-page">
            <div class="page-title connect-title container-fluid">
                <h2 class="font-weight-bolder dark">{{
                        translation.translate('landingPageHome', 'haventConncecntedYet')
                    }}</h2>
                <h5 class="light">{{ translation.translate('landingPageHome', 'threeSimpleActions') }}</h5>
            </div>
            <div class="connect-body container-fluid">
                <div class="row">
                    <div class="col-md-12 steps-mobile-disabled col-lg-6 position-relative d-flex align-items-center">
                        <ul class="timeline position-absolute">
                            <li>
                                <h3 class="dark mb-0">{{
                                        translation.translate('landingPageHome', 'e-imzoInstollation')
                                    }}</h3>
                                <span class="light font-weight-bold">{{
                                        translation.translate('landingPageHome', 'e-imzoForWhat')
                                    }}</span>
                            </li>
                            <li>
                                <h3 class="dark mb-0">{{ translation.translate('landingPageHome', 'ecpKey') }}</h3>
                                <span class="light font-weight-bold">{{
                                        translation.translate('landingPageHome', 'ecpKeyForWhat')
                                    }}</span>
                            </li>
                            <li>
                                <h3 class="dark mb-0">{{
                                        translation.translate('landingPageHome', 'registration')
                                    }}</h3>
                                <span class="light font-weight-bold">{{
                                        translation.translate('landingPageHome', 'registrationForWhat')
                                    }}</span>
                            </li>
                        </ul>
                    </div>
                    <div class="col-md-12 col-lg-6">
                        <div class="connect-video billy-with-pancle">
                            <v-lazy-image srcset="./../assets/img/7.png" src="" use-picture >
                                <source srcset="./../assets/img/7.png" /> 
                            </v-lazy-image>
                        </div>
                    </div>
                    <div class="w-100">
                        <h6 class="text-center light mt-5 rate-list">
                            {{ translation.translate('landingPageHome', 'toWatchotherVideoLessons') }}
                            <router-link :to="{ name: 'Видеоуроки'}">
                                {{ translation.translate('landingPageHome', 'tolink') }}
                            </router-link>
                        </h6>
                    </div>
                </div>
            </div>
        </section>

        <section id="doc-types" class="position-relative">
            <div>
                <div class="add1">
                    <a @click="testFunc" href="http://smartfinance.uz/22" target="_blank">
                        <v-lazy-image srcset="../assets/img/64.png" src="" use-picture >
                            <source srcset="../assets/img/64.png" /> 
                        </v-lazy-image>
                    </a>
                </div>
            </div>
            <div class="doc-types-background">
                <div class="page-title  container-fluid">
                    <h2 class="font-weight-bolder dark doc-type-title text-white">
                        {{ translation.translate('landingPageHome', 'typesOfAccesibleDocuments') }}</h2>
                </div>
                <div class="doc-body">
                    <div class="container">
                        <div class="types-block text-center">
                            <div class="row">
                                <div class="col-12 col-lg-4">
                                    <div class="type-block">{{
                                            translation.translate('landingPageHome', 'docType4')
                                        }}
                                    </div>
                                    <span class="ribbon3">{{
                                            translation.translate('landingPageHome', 'docType1')
                                        }}</span>
                                </div>
                                <div class="col-12 col-lg-4">
                                    <div class="type-block">{{
                                            translation.translate('landingPageHome', 'docType5')
                                        }}
                                    </div>
                                    <span class="ribbon3">{{
                                            translation.translate('landingPageHome', 'docType1')
                                        }}</span>
                                </div>
                                <div class="col-12 col-lg-4">
                                    <div class="type-block">{{
                                            translation.translate('landingPageHome', 'docType6')
                                        }}
                                    </div>
                                    <span class="ribbon3">{{
                                            translation.translate('landingPageHome', 'docType1')
                                        }}</span>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-12 col-lg-4">
                                    <div class="type-block">{{
                                            translation.translate('landingPageHome', 'docType7')
                                        }}
                                    </div>
                                    <span class="ribbon3">{{
                                            translation.translate('landingPageHome', 'docType1')
                                        }}</span>
                                </div>
                                <div class="col-12 col-lg-4">
                                    <div class="type-block">{{
                                            translation.translate('landingPageHome', 'docType8')
                                        }}
                                    </div>
                                    <span class="ribbon4">{{
                                            translation.translate('landingPageHome', 'docType2')
                                        }}</span>
                                </div>
                                <div class="col-12 col-lg-4">
                                    <div class="type-block">{{
                                            translation.translate('landingPageHome', 'docType9')
                                        }}
                                    </div>
                                    <span class="ribbon4">{{
                                            translation.translate('landingPageHome', 'docType2')
                                        }}</span>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-12 col-lg-4">
                                    <div class="type-block">{{
                                            translation.translate('landingPageHome', 'docType10')
                                        }}
                                    </div>
                                    <span class="ribbon4">{{
                                            translation.translate('landingPageHome', 'docType2')
                                        }}</span>
                                </div>
                                <div class="col-12 col-lg-4">
                                    <div class="type-block">{{
                                            translation.translate('landingPageHome', 'docType11')
                                        }}
                                    </div>
                                    <span class="ribbon5">{{
                                            translation.translate('landingPageHome', 'docType3')
                                        }}</span>
                                </div>
                                <div class="col-12 col-lg-4">
                                    <div class="type-block">{{
                                            translation.translate('landingPageHome', 'docType12')
                                        }}
                                    </div>
                                    <span class="ribbon5">{{
                                            translation.translate('landingPageHome', 'docType3')
                                        }}</span>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-12 col-lg-4">
                                    <div class="type-block">{{
                                            translation.translate('landingPageHome', 'docType13')
                                        }}
                                    </div>
                                </div>
                                <div class="col-12 col-lg-4">
                                    <div class="type-block">{{
                                            translation.translate('landingPageHome', 'docType14')
                                        }}
                                    </div>
                                </div>
                                <div class="col-12 col-lg-4">
                                    <div class="type-block">{{ translation.translate('landingPageHome', 'docType15') }}
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section id="instead-page">
            <div class="container">
                <div class="page-title connect-title container-fluid">
                    <h2 class="font-weight-bolder dark">
                        {{ translation.translate('landingPageHome', 'exchangeBenefitsTitle') }}</h2>
                    <h5 class="light">{{ translation.translate('landingPageHome', 'exchangeBenefitsDesciption') }}</h5>
                </div>
                <div class="doc-body">
                    <div class="row">
                        <div class="col-12 col-md-6 thecard text-center card-1" :class="{ flipOverCard: card1 }"
                             @click="card1 = !card1">
                            <div class="card-flip front">
                                <ClockIcon/>
                                <h4>
                                    {{ translation.translate('landingPageHome', 'benefirBadSide1') }}
                                </h4>
                            </div>
                            <div class="card-flip back">
                                <ClockIcon/>
                                <h4>
                                    {{ translation.translate('landingPageHome', 'benefirGoodSide1') }}
                                </h4>
                            </div>
                        </div>
                        <div class="col-12 col-md-6 thecard text-center card-2" :class="{ flipOverCard: card2 }"
                             @click="card2 = !card2">
                            <div class="card-flip front">
                                <inbox-icon/>
                                <h4>
                                    {{ translation.translate('landingPageHome', 'benefirBadSide2') }}
                                </h4>
                            </div>
                            <div class="card-flip back">
                                <inbox-icon/>
                                <h4>
                                    {{ translation.translate('landingPageHome', 'benefirGoodSide2') }}
                                </h4>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-12 col-md-6 thecard text-center card-3" :class="{ flipOverCard: card3 }"
                             @click="card3 = !card3">
                            <div class="card-flip front">
                                <map-pin-icon/>
                                <h4>
                                    {{ translation.translate('landingPageHome', 'benefirBadSide3') }}
                                </h4>
                            </div>
                            <div class="card-flip back">
                                <map-pin-icon/>
                                <h4>
                                    {{ translation.translate('landingPageHome', 'benefirGoodSide3') }}
                                </h4>
                            </div>
                        </div>
                        <div class="col-12 col-md-6 thecard text-center card-4" :class="{ flipOverCard: card4 }"
                             @click="card4 = !card4">
                            <div class="card-flip front">
                                <edit-2-icon/>
                                <h4>
                                    {{ translation.translate('landingPageHome', 'benefirBadSide4') }}
                                </h4>
                            </div>
                            <div class="card-flip back">
                                <edit-2-icon/>
                                <h4>
                                    {{ translation.translate('landingPageHome', 'benefirGoodSide4') }}
                                </h4>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-12 col-md-6 thecard text-center card-5" :class="{ flipOverCard: card5 }"
                             @click="card5 = !card5">
                            <div class="card-flip front">
                                <folder-icon/>
                                <h4>
                                    {{ translation.translate('landingPageHome', 'benefirBadSide5') }}
                                </h4>
                            </div>
                            <div class="card-flip back">
                                <folder-icon/>
                                <h4>
                                    {{ translation.translate('landingPageHome', 'benefirGoodSide5') }}
                                </h4>
                            </div>
                        </div>
                        <div class="col-12 col-md-6 thecard text-center card-6" :class="{ flipOverCard: card6 }"
                             @click="card6 = !card6">
                            <div class="card-flip front">
                                <AlertTriangleIcon/>
                                <h4>
                                    {{ translation.translate('landingPageHome', 'benefirBadSide6') }}
                                </h4>
                            </div>
                            <div class="card-flip back">
                                <AlertTriangleIcon/>
                                <h4>
                                    {{ translation.translate('landingPageHome', 'benefirGoodSide6') }}
                                </h4>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- gybrid mail -->
        <section id="connect-page">
            <div class="page-title connect-title container-fluid">
                <h2 class="font-weight-bolder dark">{{ translation.translate('landingPageHome', 'gybridMail') }}</h2>
                <h5 class="light">{{ translation.translate('landingPageHome', 'gybridMailDescription') }}</h5>
            </div>
            <div class="connect-body gybrid-pochta container-fluid">
                <div class="row">
                    <div class="col-md-12 col-lg-6">
                        <div class="connect-video connect-video-1">
                            <v-lazy-image srcset="./../assets/img/5.png" src="" use-picture >
                                <source srcset="./../assets/img/5.png" /> 
                            </v-lazy-image>
                        </div>
                    </div>
                     <div class="col-md-12 steps-mobile-disabled col-lg-6 position-relative d-flex align-items-center">
                        <div class="timeline position-absolute">
                            <h3 class="font-weight-bolder dark"> {{ translation.translate('landingPageHome', 'gybridMailDescription1') }} </h3>
                            <h5 class="light mt-4">
                                {{ translation.translate('landingPageHome', 'gybridMailDescription2') }}
                            </h5>
                            <h5 class="light mt-4"> 
                                {{ translation.translate('landingPageHome', 'gybridMailDescription3') }}
                            </h5>
                            <button class="take-an-action mt-4 glow-big-in-context"><a target="_blank" href="https://account.faktura.uz/RegisterNew?ReturnUrl=http%3A%2F%2Faccount.faktura.uz%2FAuthorize%3Fresponse_type%3Dcode%26client_id%3D12379127389123%26redirect_uri%3Dhttps%253a%252f%252fapp.faktura.uz%252faccount%252fexternallogin%26state%3D%252f%26scope%3D0%252c1%252c2%252c3">РЕГИСТРАЦИЯ</a></button>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- partners -->
        <section id="connect-page">
            <div class="page-title connect-title container-fluid">
                <h2 class="font-weight-bolder dark">{{ translation.translate('landingPageHome', 'partners') }}</h2>
                <h5 class="light">{{ translation.translate('landingPageHome', 'partnersDesc') }}</h5>
            </div>
            <div class="connect-body gybrid-pochta container partnerships">
                <div class="row">
                    <div class="col-12">
                        <div>
                            <v-lazy-image srcset="../assets/img/partnership/Screenshot_7.png" src="" use-picture  alt="1C">
                                <source srcset="../assets/img/partnership/Screenshot_7.png"/> 
                            </v-lazy-image>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section id="system-guide">
            <div class="container-fluid p-0">
                <div class="page-title connect-title container-fluid">
                    <h2 class="font-weight-bolder dark">{{
                            translation.translate('landingPageHome', 'controlProcess')
                        }}</h2>
                    <h5 class="light mobile-non-active-2">
                        {{ translation.translate('landingPageHome', 'controlProcessDescription') }}</h5>
                    <h5 class="light mobile-active-2">{{ translation.translate('landingPageHome', 'findAnswersTotheQuestions') }}</h5>
                </div>
                <div class="doc-body">
                    <div class="container-fluid p-0">
                        <div class="position-relative main-stick-guide">
                            <img :src='infoBlockImg' alt="Электронный документооборто система Faktura.uz" class="w-100">
                            <div class="system-info" v-cloak>
                                <div class="info-box inbox"
                                     v-show="infoBlockImg == require('../assets/img/Guide/inbox.png')"
                                     @mouseover="callGuide('inbox')" @mouseout="defaultImage">
                                    <h3>{{ translation.translate('landingPageHome', 'inboxDocs') }}</h3>
                                    <p>
                                        {{ translation.translate('landingPageHome', 'inboxDescription') }}
                                    </p>
                                </div>
                                <div class="info-box documents"
                                     v-show="infoBlockImg == require('../assets/img/Guide/documents.png')"
                                     @mouseover="callGuide('documents')" @mouseout="defaultImage">
                                    <h3>{{ translation.translate('landingPageHome', 'documents') }}</h3>
                                    <p>
                                        {{ translation.translate('landingPageHome', 'documentsDescription') }}
                                    </p>
                                </div>
                                <div class="info-box cuonterparties"
                                     v-show="infoBlockImg == require('../assets/img/Guide/cuonterparties.png')"
                                     @mouseover="callGuide('cuonterparties')" @mouseout="defaultImage">
                                    <h3>{{ translation.translate('landingPageHome', 'counterparties') }}</h3>
                                    <p>
                                        {{ translation.translate('landingPageHome', 'counterpartiesDescription') }}
                                    </p>
                                </div>
                                <div class="info-box createDocument"
                                     v-show="infoBlockImg == require('../assets/img/Guide/createDocument.png')"
                                     @mouseover="callGuide('createDocument')" @mouseout="defaultImage">
                                    <h3>{{ translation.translate('landingPageHome', 'createDocumnent') }}</h3>
                                    <p>
                                        {{ translation.translate('landingPageHome', 'createDocumnentDescription') }}<br>{{
                                            translation.translate('landingPageHome', 'createDocumnentDescriptionTypes1')
                                        }},<br> {{
                                            translation.translate('landingPageHome', 'createDocumnentDescriptionTypes2')
                                        }},<br> {{
                                            translation.translate('landingPageHome', 'createDocumnentDescriptionTypes3')
                                        }},<br> {{
                                            translation.translate('landingPageHome', 'createDocumnentDescriptionTypes4')
                                        }},<br> {{
                                            translation.translate('landingPageHome', 'createDocumnentDescriptionTypes5')
                                        }}
                                    </p>
                                </div>
                                <div class="info-box workPlace"
                                     v-show="infoBlockImg == require('../assets/img/Guide/workPlace.png')"
                                     @mouseover="callGuide('workPlace')" @mouseout="defaultImage">
                                    <h3>{{ translation.translate('landingPageHome', 'mainPage') }}</h3>
                                    <p>
                                        {{ translation.translate('landingPageHome', 'mainPageDescription') }}<br>
                                        {{ translation.translate('landingPageHome', 'mainPageDescription1') }}<br>
                                        {{ translation.translate('landingPageHome', 'mainPageDescription2') }}
                                    </p>
                                </div>
                                <div class="info-box outbox"
                                     v-show="infoBlockImg == require('../assets/img/Guide/outbox.png')"
                                     @mouseover="callGuide('outbox')" @mouseout="defaultImage">
                                    <h3>{{ translation.translate('landingPageHome', 'outBox') }}</h3>
                                    <p>
                                        {{ translation.translate('landingPageHome', 'outBoxDescription') }}
                                    </p>
                                </div>
                                <div class="info-box draft"
                                     v-show="infoBlockImg == require('../assets/img/Guide/draft.png')"
                                     @mouseover="callGuide('draft')" @mouseout="defaultImage">
                                    <h3>{{ translation.translate('landingPageHome', 'draft') }}</h3>
                                    <p>
                                        {{ translation.translate('landingPageHome', 'draftDescription') }}
                                    </p>
                                </div>
                                <div class="info-box import"
                                     v-show="infoBlockImg == require('../assets/img/Guide/import.png')"
                                     @mouseover="callGuide('import')" @mouseout="defaultImage">
                                    <h3>{{ translation.translate('landingPageHome', 'registries') }}</h3>
                                    <p>
                                        {{ translation.translate('landingPageHome', 'registriesDescription') }}
                                    </p>
                                </div>
                                <div class="info-box rejected"
                                     v-show="infoBlockImg == require('../assets/img/Guide/rejected.png')"
                                     @mouseover="callGuide('rejected')" @mouseout="defaultImage">
                                    <h3>{{ translation.translate('landingPageHome', 'canceled') }}</h3>
                                    <p>
                                        {{ translation.translate('landingPageHome', 'canceledDescription') }}
                                    </p>
                                </div>
                                <div class="info-box removed"
                                     v-show="infoBlockImg == require('../assets/img/Guide/removed.png')"
                                     @mouseover="callGuide('removed')" @mouseout="defaultImage">
                                    <h3>{{ translation.translate('landingPageHome', 'deleted') }}</h3>
                                    <p>
                                        {{ translation.translate('landingPageHome', 'deletedDescription') }}
                                    </p>
                                </div>
                                <div class="info-box archive"
                                     v-show="infoBlockImg == require('../assets/img/Guide/archive.png')"
                                     @mouseover="callGuide('archive')" @mouseout="defaultImage">
                                    <h3>{{ translation.translate('landingPageHome', 'archive') }}</h3>
                                    <p>
                                        {{ translation.translate('landingPageHome', 'archiveDescription') }}
                                    </p>
                                </div>
                                <div class="info-box annul"
                                     v-show="infoBlockImg == require('../assets/img/Guide/annul.png')"
                                     @mouseover="callGuide('annul')" @mouseout="defaultImage">
                                    <h3>{{ translation.translate('landingPageHome', 'annuled') }}</h3>
                                    <p>
                                        {{ translation.translate('landingPageHome', 'annuledDescription') }}
                                    </p>
                                </div>
                                <div class="info-box attachments"
                                     v-show="infoBlockImg == require('../assets/img/Guide/attachments.png')"
                                     @mouseover="callGuide('attachments')" @mouseout="defaultImage">
                                    <h3>{{ translation.translate('landingPageHome', 'attached') }}</h3>
                                    <p>
                                        {{ translation.translate('landingPageHome', 'attachedDescription') }}
                                    </p>
                                </div>
                                <div class="info-box alldocuments"
                                     v-show="infoBlockImg == require('../assets/img/Guide/alldocuments.png')"
                                     @mouseover="callGuide('alldocuments')" @mouseout="defaultImage">
                                    <h3>{{ translation.translate('landingPageHome', 'allDocuments') }}</h3>
                                    <p>
                                        {{ translation.translate('landingPageHome', 'allDocumentsDescriptions') }}
                                    </p>
                                </div>
                                <div class="info-box agreement"
                                     v-show="infoBlockImg == require('../assets/img/Guide/agreement.png')"
                                     @mouseover="callGuide('agreement')" @mouseout="defaultImage">
                                    <h3>{{ translation.translate('landingPageHome', 'agreed') }}</h3>
                                    <p>
                                        {{ translation.translate('landingPageHome', 'agreedDescriptions') }}
                                    </p>
                                </div>
                                <div class="info-box index"
                                     v-show="infoBlockImg == require('../assets/img/Guide/index.png')"
                                     @mouseover="callGuide('index')" @mouseout="defaultImage">
                                    <h3>{{ translation.translate('landingPageHome', 'nds') }}</h3>
                                    <p>
                                        {{ translation.translate('landingPageHome', 'ndsDescriptions') }}
                                    </p>
                                </div>
                                <div class="info-box verify"
                                     v-show="infoBlockImg == require('../assets/img/Guide/verify.png')"
                                     @mouseover="callGuide('verify')" @mouseout="defaultImage">
                                    <h3>{{ translation.translate('landingPageHome', 'checkSign') }}</h3>
                                    <p>
                                        {{ translation.translate('landingPageHome', 'checkSignDescription') }}
                                    </p>
                                </div>
                                <div class="info-box invitePartner"
                                     v-show="infoBlockImg == require('../assets/img/Guide/invitePartner.png')"
                                     @mouseover="callGuide('invitePartner')" @mouseout="defaultImage">
                                    <h3>{{ translation.translate('landingPageHome', 'invite') }}</h3>
                                    <p>
                                        {{ translation.translate('landingPageHome', 'inviteDescription') }}
                                    </p>
                                </div>
                                <div class="info-box headerDetails"
                                     v-show="infoBlockImg == require('../assets/img/Guide/headerDetails.png')"
                                     @mouseover="callGuide('headerDetails')" @mouseout="defaultImage">
                                    <h3>{{ translation.translate('landingPageHome', 'priceAbout') }}</h3>
                                    <p>
                                        {{ translation.translate('landingPageHome', 'priceAboutDescription') }}
                                    </p>
                                </div>
                                <div class="info-box fakturaedi"
                                     v-show="infoBlockImg == require('../assets/img/Guide/fakturaedi.png')"
                                     @mouseover="callGuide('fakturaedi')" @mouseout="defaultImage">
                                    <h3>Faktura EDI</h3>
                                    <p>
                                        {{ translation.translate('landingPageHome', 'fakturaEdiDescription') }}
                                    </p>
                                </div>
                                <div class="info-box sync"
                                     v-show="infoBlockImg == require('../assets/img/Guide/sync.png')"
                                     @mouseover="callGuide('sync')" @mouseout="defaultImage">
                                    <h3>{{ translation.translate('landingPageHome', 'sync') }}</h3>
                                    <p>
                                        {{ translation.translate('landingPageHome', 'syncDescriptions') }}
                                    </p>
                                </div>
                                <div class="info-box myData"
                                     v-show="infoBlockImg == require('../assets/img/Guide/myData.png')"
                                     @mouseover="callGuide('myData')" @mouseout="defaultImage">
                                    <h3>{{ translation.translate('landingPageHome', 'personalData') }}</h3>
                                    <p>
                                        {{ translation.translate('landingPageHome', 'personalDataDescription') }}
                                    </p>
                                </div>
                                <div class="info-box currentPage"
                                     v-show="infoBlockImg == require('../assets/img/Guide/currentPage.png')"
                                     @mouseover="callGuide('currentPage')" @mouseout="defaultImage">
                                    <h3>{{ translation.translate('landingPageHome', 'currentPage') }}</h3>
                                    <p>
                                        {{ translation.translate('landingPageHome', 'currentPageDescription') }}
                                    </p>
                                </div>
                                <div class="info-box signSend"
                                     v-show="infoBlockImg == require('../assets/img/Guide/signSend.png')"
                                     @mouseover="callGuide('signSend')" @mouseout="defaultImage">
                                    <h3>{{ translation.translate('landingPageHome', 'signSend') }}</h3>
                                    <p>
                                        {{ translation.translate('landingPageHome', 'signSendDescription') }}
                                    </p>
                                </div>
                                <div class="info-box cancelDelete"
                                     v-show="infoBlockImg == require('../assets/img/Guide/cancelDelete.png')"
                                     @mouseover="callGuide('cancelDelete')" @mouseout="defaultImage">
                                    <h3>{{ translation.translate('landingPageHome', 'cancelAndDelet') }}</h3>
                                    <p>
                                        {{ translation.translate('landingPageHome', 'cancelAndDeletDescription') }}
                                    </p>
                                </div>
                                <div class="info-box send"
                                     v-show="infoBlockImg == require('../assets/img/Guide/send.png')"
                                     @mouseover="callGuide('send')" @mouseout="defaultImage">
                                    <h3>{{ translation.translate('landingPageHome', 'send') }}</h3>
                                    <p>
                                        {{ translation.translate('landingPageHome', 'sendDescription') }}
                                    </p>
                                </div>
                                <div class="info-box markAs"
                                     v-show="infoBlockImg == require('../assets/img/Guide/markAs.png')"
                                     @mouseover="callGuide('markAs')" @mouseout="defaultImage">
                                    <h3>{{ translation.translate('landingPageHome', 'writeAs') }}</h3>
                                    <p>
                                        {{ translation.translate('landingPageHome', 'writeAsDescription') }}
                                    </p>
                                </div>
                                <div class="info-box moveIntoSubdivisions"
                                     v-show="infoBlockImg == require('../assets/img/Guide/moveIntoSubdivisions.png')"
                                     @mouseover="callGuide('moveIntoSubdivisions')" @mouseout="defaultImage">
                                    <h3>{{ translation.translate('landingPageHome', 'moveByFillials') }}</h3>
                                    <p>
                                        {{ translation.translate('landingPageHome', 'moveByFillialsDescriptions') }}
                                    </p>
                                </div>
                                <div class="info-box filtr"
                                     v-show="infoBlockImg == require('../assets/img/Guide/filtr.png')"
                                     @mouseover="callGuide('filtr')" @mouseout="defaultImage">
                                    <h3>{{ translation.translate('landingPageHome', 'filter') }}</h3>
                                    <p>
                                        {{ translation.translate('landingPageHome', 'filterDescriptions') }}
                                    </p>
                                </div>
                                <div class="info-box docInfo"
                                     v-show="infoBlockImg == require('../assets/img/Guide/docInfo.png')"
                                     @mouseover="callGuide('docInfo')" @mouseout="defaultImage">
                                    <h3>{{ translation.translate('landingPageHome', 'documentInfo') }}</h3>
                                    <p>
                                        {{ translation.translate('landingPageHome', 'documentInfoDescription') }}<br>
                                        {{ translation.translate('landingPageHome', 'documentInfoDescription1') }}<br>
                                        {{ translation.translate('landingPageHome', 'documentInfoDescription2') }}<br>
                                        {{ translation.translate('landingPageHome', 'documentInfoDescription3') }}
                                    </p>
                                </div>
                                <div class="info-box сontract"
                                     v-show="infoBlockImg == require('../assets/img/Guide/сontract.png')"
                                     @mouseover="callGuide('сontract')" @mouseout="defaultImage">
                                    <h3>{{ translation.translate('landingPageHome', 'contract') }}</h3>
                                    <p>
                                        {{ translation.translate('landingPageHome', 'contractDescription') }}
                                    </p>
                                </div>
                                <div class="info-box sum"
                                     v-show="infoBlockImg == require('../assets/img/Guide/sum.png')"
                                     @mouseover="callGuide('sum')" @mouseout="defaultImage">
                                    <h3>{{ translation.translate('landingPageHome', 'mainSum') }}</h3>
                                    <p>
                                        {{ translation.translate('landingPageHome', 'mainSumDescription') }}
                                    </p>
                                </div>
                                <div class="info-box cuonterpartier"
                                     v-show="infoBlockImg == require('../assets/img/Guide/cuonterpartier.png')"
                                     @mouseover="callGuide('cuonterpartier')" @mouseout="defaultImage">
                                    <h3>{{ translation.translate('landingPageHome', 'counterparties') }}</h3>
                                    <p>
                                        {{ translation.translate('landingPageHome', 'counterpartiesDescription1') }}
                                    </p>
                                </div>
                                <div class="info-box status"
                                     v-show="infoBlockImg == require('../assets/img/Guide/status.png')"
                                     @mouseover="callGuide('status')" @mouseout="defaultImage">
                                    <h3>{{ translation.translate('landingPageHome', 'status') }}</h3>
                                    <p>
                                        {{ translation.translate('landingPageHome', 'statusDescription') }}
                                    </p>
                                </div>
                                <div class="info-box exportExcel"
                                     v-show="infoBlockImg == require('../assets/img/Guide/exportExcel.png')"
                                     @mouseover="callGuide('exportExcel')" @mouseout="defaultImage">
                                    <h3>{{ translation.translate('landingPageHome', 'excelExport') }}</h3>
                                    <p>
                                        {{ translation.translate('landingPageHome', 'excelExportDescription') }}
                                    </p>
                                </div>
                                <div class="hover-blocks">
                                    <div class="info-block inbox-b" @mouseover="callGuide('inbox')"
                                         @mouseout="defaultImage"></div>
                                    <div class="info-block documents-b" @mouseover="callGuide('documents')"
                                         @mouseout="defaultImage"></div>
                                    <div class="info-block cuonterparties-b" @mouseover="callGuide('cuonterparties')"
                                         @mouseout="defaultImage"></div>
                                    <div class="info-block createDocument-b" @mouseover="callGuide('createDocument')"
                                         @mouseout="defaultImage"></div>
                                    <div class="info-block workPlace-b" @mouseover="callGuide('workPlace')"
                                         @mouseout="defaultImage"></div>
                                    <div class="info-block outbox-b" @mouseover="callGuide('outbox')"
                                         @mouseout="defaultImage"></div>
                                    <div class="info-block draft-b" @mouseover="callGuide('draft')"
                                         @mouseout="defaultImage"></div>
                                    <div class="info-block import-b" @mouseover="callGuide('import')"
                                         @mouseout="defaultImage"></div>
                                    <div class="info-block rejected-b" @mouseover="callGuide('rejected')"
                                         @mouseout="defaultImage"></div>
                                    <div class="info-block removed-b" @mouseover="callGuide('removed')"
                                         @mouseout="defaultImage"></div>
                                    <div class="info-block archive-b" @mouseover="callGuide('archive')"
                                         @mouseout="defaultImage"></div>
                                    <div class="info-block annul-b" @mouseover="callGuide('annul')"
                                         @mouseout="defaultImage"></div>
                                    <div class="info-block attachments-b" @mouseover="callGuide('attachments')"
                                         @mouseout="defaultImage"></div>
                                    <div class="info-block alldocuments-b" @mouseover="callGuide('alldocuments')"
                                         @mouseout="defaultImage"></div>
                                    <div class="info-block agreement-b" @mouseover="callGuide('agreement')"
                                         @mouseout="defaultImage"></div>
                                    <div class="info-block index-b" @mouseover="callGuide('index')"
                                         @mouseout="defaultImage"></div>
                                    <div class="info-block verify-b" @mouseover="callGuide('verify')"
                                         @mouseout="defaultImage"></div>
                                    <div class="info-block invitePartner-b" @mouseover="callGuide('invitePartner')"
                                         @mouseout="defaultImage"></div>
                                    <div class="info-block headerDetails-b" @mouseover="callGuide('headerDetails')"
                                         @mouseout="defaultImage"></div>
                                    <div class="info-block fakturaedi-b" @mouseover="callGuide('fakturaedi')"
                                         @mouseout="defaultImage"></div>
                                    <div class="info-block sync-b" @mouseover="callGuide('sync')"
                                         @mouseout="defaultImage"></div>
                                    <div class="info-block myData-b" @mouseover="callGuide('myData')"
                                         @mouseout="defaultImage"></div>
                                    <div class="info-block currentPage-b" @mouseover="callGuide('currentPage')"
                                         @mouseout="defaultImage"></div>
                                    <div class="info-block signSend-b" @mouseover="callGuide('signSend')"
                                         @mouseout="defaultImage"></div>
                                    <div class="info-block cancelDelete-b" @mouseover="callGuide('cancelDelete')"
                                         @mouseout="defaultImage"></div>
                                    <div class="info-block send-b" @mouseover="callGuide('send')"
                                         @mouseout="defaultImage"></div>
                                    <div class="info-block markAs-b" @mouseover="callGuide('markAs')"
                                         @mouseout="defaultImage"></div>
                                    <div class="info-block moveIntoSubdivisions-b"
                                         @mouseover="callGuide('moveIntoSubdivisions')" @mouseout="defaultImage"></div>
                                    <div class="info-block filtr-b" @mouseover="callGuide('filtr')"
                                         @mouseout="defaultImage"></div>
                                    <div class="info-block docInfo-b" @mouseover="callGuide('docInfo')"
                                         @mouseout="defaultImage"></div>
                                    <div class="info-block сontract-b" @mouseover="callGuide('сontract')"
                                         @mouseout="defaultImage"></div>
                                    <div class="info-block sum-b" @mouseover="callGuide('sum')"
                                         @mouseout="defaultImage"></div>
                                    <div class="info-block cuonterpartier-b" @mouseover="callGuide('cuonterpartier')"
                                         @mouseout="defaultImage"></div>
                                    <div class="info-block status-b" @mouseover="callGuide('status')"
                                         @mouseout="defaultImage"></div>
                                    <div class="info-block exportExcel-b" @mouseover="callGuide('exportExcel')"
                                         @mouseout="defaultImage"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section id="mobile-app">
            <div class="doc-body">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-6 text-right mobile-block">
                            <img src="../assets/img/mobile-app.png" alt="faktura app">
                        </div>
                        <div class="col-12 col-lg-6">
                            <div class="app-body">
                                <h2 class="font-weight-bolder text-white">
                                    {{ translation.translate('landingPageHome', 'mobileApptitle') }}</h2>
                                <h5 class="mt-4">
                                    {{ translation.translate('landingPageHome', 'mobileApptitleDescription') }}
                                </h5>
                                <h5 class="mt-4">
                                    {{ translation.translate('landingPageHome', 'mobileApptitleDescription1') }}
                                </h5>
                                <div class="d-flex mobile-app-buttons mt-4">
                                    <a class="play-market" target="_blank" href="https://play.google.com/store/apps/details?id=uz.faktura&hl=ru">
                                        <img src="../assets/img/play-market.png" class="mr-1"
                                             alt="play-market faktura.uz app">
                                        Play Market
                                    </a>
                                    <a class="apple-store" target="_blank" href="https://apps.apple.com/us/app/faktura/id1454146398">
                                        <img src="../assets/img/apple.png" class="mr-1" alt="apple faktura.uz app">
                                        App Store
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="winter-is-coming">
                <div class="snow snow--near"></div>
                <div class="snow snow--near snow--alt"></div>
                
                <div class="snow snow--mid"></div>
                <div class="snow snow--mid snow--alt"></div>
                
                <div class="snow snow--far"></div>
                <div class="snow snow--far snow--alt"></div>
            </div>
        </section>

        <!-- seo section -->
        <section id="connect-page">
            <div class="page-title connect-title container traditional-page-width">
                <h2 class="font-weight-bolder dark">{{ translation.translate('landingPageHome', 'seoInfoTitle20') }}</h2>
                <h5 class="light">{{ translation.translate('landingPageHome', 'seoInfoTitle21') }}</h5>
            </div>
            <div class="connect-body gybrid-pochta container">
                <div class="row">
                    <div class="col-md-12 col-lg-6 align-self-center seo-pic">
                        <v-lazy-image srcset="../assets/img/seo-pic.png" src="" use-picture >
                            <source srcset="../assets/img/seo-pic.png" /> 
                        </v-lazy-image>
                    </div>
                     <div class="col-md-12 col-lg-6 position-relative d-flex align-items-center seo-info-1">
                        <div class="timeline-points">
                            <div id="accordion">
                                <div class="card cursor-pointer"  data-toggle="collapse" data-target="#collapseFour" aria-expanded="true" aria-controls="collapseFour">
                                    <div class="card-header" id="headingThree">
                                    <h2 class="mb-0 collapsed">
                                            {{ translation.translate('landingPageHome', 'seoInfoTitle1') }}
                                    </h2>
                                    </div>
                                    <div id="collapseFour" class="collapse show" aria-labelledby="headingThree" data-parent="#accordion">
                                    <div class="card-body">
                                       {{ translation.translate('landingPageHome', 'seoInfoTitle2') }}
                                        <ul>
                                            <li>{{ translation.translate('landingPageHome', 'seoInfoTitle3') }}</li>
                                            <li>{{ translation.translate('landingPageHome', 'seoInfoTitle4') }}</li>
                                            <li>{{ translation.translate('landingPageHome', 'seoInfoTitle5') }}</li>
                                            <li>{{ translation.translate('landingPageHome', 'seoInfoTitle6') }}</li>
                                            <li>{{ translation.translate('landingPageHome', 'seoInfoTitle7') }}</li>
                                            <li>ИНН</li>
                                        </ul>
                                    </div>
                                    </div>
                                </div>
                                <div class="card cursor-pointer" data-toggle="collapse" data-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">
                                    <div class="card-header" id="headingOne">
                                    <h2 class="mb-0" >
                                       {{ translation.translate('landingPageHome', 'seoInfoTitle8') }}
                                    </h2>
                                    </div>
                                    <div id="collapseOne" class="collapse" aria-labelledby="headingOne" data-parent="#accordion">
                                    <div class="card-body">
                                        {{ translation.translate('landingPageHome', 'seoInfoTitle9') }}
                                        <ul>
                                            <li>{{ translation.translate('landingPageHome', 'seoInfoTitle10') }}</li>
                                            <li>{{ translation.translate('landingPageHome', 'seoInfoTitle11') }}</li>
                                            <li>{{ translation.translate('landingPageHome', 'seoInfoTitle12') }}</li>
                                            <li>{{ translation.translate('landingPageHome', 'seoInfoTitle13') }}</li>
                                            <li>{{ translation.translate('landingPageHome', 'seoInfoTitle14') }}</li>
                                            <li>{{ translation.translate('landingPageHome', 'seoInfoTitle15') }}</li>
                                        </ul>
                                    </div>
                                    </div>
                                </div>
                                <div class="card cursor-pointer" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                    <div class="card-header" id="headingTwo">
                                    <h2 class="mb-0 collapsed">
                                        {{ translation.translate('landingPageHome', 'seoInfoTitle16') }}
                                    </h2>
                                    </div>
                                    <div id="collapseTwo" class="collapse" aria-labelledby="headingTwo" data-parent="#accordion">
                                    <div class="card-body">
                                        {{ translation.translate('landingPageHome', 'seoInfoTitle17') }}
                                    </div>
                                    </div>
                                </div>
                                <div class="card cursor-pointer"  data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                    <div class="card-header" id="headingThree">
                                    <h2 class="mb-0 collapsed">
                                        {{ translation.translate('landingPageHome', 'seoInfoTitle171') }}
                                    </h2>
                                    </div>
                                    <div id="collapseThree" class="collapse" aria-labelledby="headingThree" data-parent="#accordion">
                                    <div class="card-body">
                                        {{ translation.translate('landingPageHome', 'seoInfoTitle18') }}
                                        <br>
                                        <br>
                                        {{ translation.translate('landingPageHome', 'seoInfoTitle18') }}
                                    </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section id="map">
            <div class="container-fluid">
                <div class="page-title">
                    <h2 class="font-weight-bolder dark">{{ translation.translate('landingPageHome', 'mapTitle') }}</h2>
                    <h5 class="light map-desription">{{ translation.translate('landingPageHome', 'mapTitleDescription') }}</h5>
                </div>
                <div class="doc-body text-center">
                    <div v-cloak class="map-body">
                        <svg baseprofile="tiny" fill="#7c7c7c" height="652" stroke="#ffffff" stroke-linecap="round"
                             stroke-linejoin="round" stroke-width="2" version="1.2" viewbox="0 0 1000 652" width="1000"
                             xmlns="http://www.w3.org/2000/svg">

                            <path
                                d="M533.4 482.1l-2.7 2.1-5.8 5.8-0.7 0.6-0.7 0.3-0.6-0.1-0.7 0.1-0.4 0.2-0.4 0.3-4.4 4.8-0.5 0.8-0.4 0.6-0.1 0.4 0 0.4 0.1 0.4 0.1 0.3 0.3 0.7 0.4 0.6 1.8 2.3 0.2 0.3 0.2 0.3 0 0.5-0.1 0.6-0.3 0.3-0.3 0.2-9.7 3.5-3.1 1.1-8 3.3-2.7 1.8-5.3 5.9-0.9 0.9-1.8-2.3-1.4-0.8-1.7 0.2-4.5 2.2-1.5 0.4-1.7-0.4-1.8-0.9-9.3-6.7-8.1-5.8-6.5-4.6-3.5-3.7-6.2-8.7-3.7-3.6-8.1-5.7-19.2-13.7-9.4-6.8-7.9-5.7-6.8-4.8-3.4-3.4-0.6-0.4-4.2-5.3-0.6-2-1-4.3-0.2-1.7 0.2-1.6 0.5-1.4 0.3-1.4-0.2-1.6-1.8-3.9-0.2-1.6 0-2-0.3-1.5-0.4-1.4-1.5-3-0.4-1.4-0.2-3.2-0.5-0.7-4.8-2.8-2.8-0.8-1.3-1-0.2-0.5 12.1-15.1 3-6.5-0.7-2.6-1.9-2.9-9.5-10.7 13.1-6.3 0-1.1-16.5-23 20.6-7.8 4.9 0.1 1.8 4.3 1.5 2.5 9.7 11.6 7.9 13.9 1.4 0.8 5.1 1.1 7.6 3 9 5.1 17.5 10.8 1.3 2.3 2.1 2.1-0.1 1.5 7-2.4 4.1-6.2 3.5-7.2 1-1.5 1.1-1 1.2-0.4 1.1 0.3 1.1 1 1.2 1.8 0.3 2.6 0.1 5 0.8 1.7 2.5 0.9 15.7 1.9 1.3-1.3 1.8-6.8 1.1-0.6 2-0.8 7.7-0.3 2.5-0.5 1.9-0.8 1.8-2.7 0.7 0.1 0.5 1.8 1.3 7.8 0.5 2 0.8 2.3 2 1.6 2 1.2 5.8 1.4 17.6 1.2 2.8-0.8-1.4 4.8-0.3 1.9-0.1 2 0 1.9 0.1 1.6 0.3 0.9-0.1 0.9-0.8-0.1-3-0.6-0.6-0.1-0.5 0.2-0.5 0.4-0.6 1-0.1 0.9-1.6 4.9-1.3 1.5-1 1-1.3 4.2-0.7 1.3-6.8-0.1-1.3-0.4-1.3-0.9-1.1-1-1.2-0.3-1.3 0-2 0.3-1 0.6-0.5 0.6-0.2 0.7-0.1 0.8 0 0.6 0.3 1.5 1.5 1.5-1 2.8-0.5 0.5-0.3 0.1 0 0.2 0.1 0.3 0.6 1.1 1.7 1.7 0.9 1.2 0.3 0.5-0.1 0.2-1.7 0.2-0.4 0.1-0.4 0.3-0.4 0.3-0.6 0.1-0.8 0.7-2.8 5.6-0.8 1.1-1 1-1.1 0.8-3.5 1.6-0.5 1-0.4 0.5-0.2 0.3-1.9 2.4-1 2.1-0.8 1.9 0.9 1.9 4.2 5.9 1.7 1.1 2.7 1.5 0.1 0.4 0.3 0.7 0.2 0.6 0.8 0.5 1.1 0 2.5-1.1 0.9 0.1 0.5 0.9 7 3.3 1 1.7 0.5 1.7 0 1.3 0.2 1.6 0.5 1.6 1.1 0.6 1.4 0.5 0.9 0.5 1 1.1 0.9 1.2 0.3 0.5 0.3 0.8 0.6 2 0.1 0.5 0.1 2.1z"
                                id="UZB354" class="bukhoro" name="Bukhoro">
                            </path>
                            <path
                                d="M365 365.3l9.5 10.7 1.9 2.9 0.7 2.6-3 6.5-12.1 15.1-0.1-0.1-0.5-1.8-0.3-0.7-2.2-2.9-0.8-1.6-1.2-4.7-0.7-1.1-1.9-2.1-0.6-1-0.5-1.6-0.6-3.5-1.9-6.5-0.6-1.5 0.4-0.6-0.3-1.1-0.1-5.4-0.2-1.6-0.5-1.3-4.3-7.2-1.1-1.2-13-9.6-5-2.2-5.7-1.5-2.1-0.3-1.3 0.7-0.8 1.6-0.6 2.7-1.4 0.8-1.1 2.5-1.7 1.8-2 1-2.2 0.1-2.3-1-6-4.3-1.1 0-3.4 0.6-0.3-0.7-0.2-0.7-0.2-0.2-1.1 1.9-0.4 0.4-0.4 0.4-2.8-2.9-4-1-11.7 0.7-7.1 2.4-3.5 0-2-0.5-1.6-1.2-3.2-3.2-3.5-2.6-5.6-2.9-6.4-3.3-1.6-1.6-0.4-1.8 0.7-6.3 0.5-1.3 0.7-1.1 1-0.9 2.4-1.2 0.8-0.9-0.5-1.5-3.9-5.5-1.7-3.4-0.6-2.8 1.5-2.1 1.6-1.1 1.8-0.2 2.2 0.7 2 1.3 1.2 0.5 0.9-0.1 0.6-1-0.1-1.1-0.5-1.1-0.7-0.9-0.8-0.7-2.8-1.7-0.9-0.9-0.6-1 0.7-0.7 0.6-1.8-0.1-0.8-0.6-1.4-0.2-0.3-0.1-0.4 0.2-0.3 0.4-0.3 0.9-0.2 1.6-0.1 1.2-0.5 3-2.1 1.1-1 0.3-0.2 1-0.1 1.2 0.9 0.6 0.4 2.9 0.7 2.9 0.3 0.8 0.7 0.2 1.6 0 3.5 0.5 1.3 1.5 2.4 0.7 2 1.6 2.9 0.8 1.1 1 0.7 1.3 0.3 2.7 0 1 0.6 0.6 1.3 1 3 1.5 2.7 1.9 2.1 13.7 12.5 1.5 0.3 0.8 0.3 0.6 0.5 2.1 2.3 1.8 1.7 1.3 0.5 3.4 0.6 1.1 0.7 3.1 3.4 0.7 1.1 0.7 2.3 0.9 0.4 0.4 0.3 1.3 0.5 1.5-0.1 1-0.8 2.3-4.5 1-1.1 0.9-0.7 1-0.5 1.2-0.3 3.1 0 11.1 2.7 2.8 1.2 2.7 1.6 3.4 2.6 9.9 11 6.9 11.1 0.3 0.2 0.8 0.5 0.8 0.3 3.1-1z"
                                id="UZB355" class="khorezm" name="Khorezm">
                            </path>
                            <path
                                d="M352.7 170.4l6.3 10.7 2.9 2.7 15.7 4.3 0.9 0.5 0 0.8-0.4 1-15.8 29.9-14.9 28.7-3.2 7.5-1.3 16.3 0 0.9 0.2 0.8 6.6 12.2 1.2 2.5-0.3 0.4-0.7 0.7-12.5 7.1-1.2 1.1 0 1 0.5 1.1 24.9 34.3 16.5 23 0 1.1-13.1 6.3-3.1 1-0.8-0.3-0.8-0.5-0.3-0.2-6.9-11.1-9.9-11-3.4-2.6-2.7-1.6-2.8-1.2-11.1-2.7-3.1 0-1.2 0.3-1 0.5-0.9 0.7-1 1.1-2.3 4.5-1 0.8-1.5 0.1-1.3-0.5-0.4-0.3-0.9-0.4-0.7-2.3-0.7-1.1-3.1-3.4-1.1-0.7-3.4-0.6-1.3-0.5-1.8-1.7-2.1-2.3-0.6-0.5-0.8-0.3-1.5-0.3-13.7-12.5-1.9-2.1-1.5-2.7-1-3-0.6-1.3-1-0.6-2.7 0-1.3-0.3-1-0.7-0.8-1.1-1.6-2.9-0.7-2-1.5-2.4-0.5-1.3 0-3.5-0.2-1.6-0.8-0.7-2.9-0.3-2.9-0.7-0.6-0.4-1.2-0.9-1 0.1-0.3 0.2-1.1 1-3 2.1-1.2 0.5-1.6 0.1-0.9 0.2-0.4 0.3-0.2 0.3 0.1 0.4 0.2 0.3 0.6 1.4 0.1 0.8-0.6 1.8-0.7 0.7-1.4-2-1.7-1.5-6.1-2.3-3 0.1-0.8-0.4-0.7-1.1 0.1-1 0.7-0.8 1-0.3 0.1 0 3.4-1.3-0.2-3.1-1.1-3.9 0.5-3.6 1-0.7 1.2-0.5 0.9-0.7 0.2-1.3-0.7-1-1.3-0.8-2.6-1-2.1-1.9-1.6-2.5-1.8-2-2.6-0.3-2.6 0.3-5.1-0.5-12.3 1.9-3-0.1-1.4-0.5-2.3-2.5-1.4-0.5-3-0.3-1.6-1-0.8-1.4-0.7-6-0.5-1.5-0.9-1.3-3.7-3.9-1.4-0.9-1.4 0.2-1.7 0.8-1.7 0.5-1.7 0.1-2.6-0.5-4.1-1.8-3.9-3.7-12.5-14.7-1.4-0.9-1.1 1.8-0.8 6.7-1.2 2.3-2.4 0.8-3-0.2-3-0.7-6.2-2.6-1.5 0-1 0.3-3.1 1.9-2.2 1-1.1 0.8-0.5 1.1 0.3 1.6 1.1 0.9 7.3 3.5 2 1.6 1.8 2.7 1.6 3.7 4.3 7 2.3 2.8 0.7 0.6 0.3 0.7-0.3 0.7-0.7 0.4-3.7 0.6-1-0.3-0.6-1 0-1.2 0.3-1.4 0.2-1.4-0.6-2.8-1.5-2-2-1.5-5.7-2.7-1.3-0.3-1.1 0.2-2.1 0.9-0.9 0.1-1-0.5-1.3-2-0.8-0.8-1.1-0.4-1.3-0.1-1.3 0.3-1.1 0.5-0.6 0.7-0.5 1-1.5 1.7-1.6 0.7-1 0.8 0.4 2.1 1.2 2.7 0.1 1.2-0.5 1.9-2.4 5.4-0.8 0.9-2.2 0.8-0.5 1 0.4 1.2 0.8 0.9 0.1 0.7-1.2 0.9-1.2 0.3-3.9-0.2-1.1 0.3-3.3 1.6-1.3 0.2-0.4-3.3-0.5-2-0.8-1.6-1.1-1.3-1.4-1.1-3.1-1.7-2.5-0.3-0.6-0.2-0.6-0.5-0.8-0.6-1.2-1.9-0.7-0.6-1-0.2-1.5 0.1-3.3 1.1-2.5 1.4-1.5 1.4-0.6 0.6-1.8 3.8-7.3 22.9-0.2 1.2 0 0.4-5.2 2.5-1.7 2.3 0 3 1.3 6.1-0.2 3-0.4 2.5-0.1 2.4 1.1 2.8 1.3 2.1 0.6 2.1 0.2 2.2 0 2.7 0.3 2.2 0.7 2.1 1.2 2 1.2 1.4 0.9 0.6 0.8 0.4 3 0.7 0.4 0.4-0.1 0.5-0.7 0.8-1.2 0.9-2.7 1.3-1.2 1.4-1.8 3.2-1.1 0.7-7.1-1.5-5.5-1.1-13-0.8-14.1-0.7-10.8-0.6-9.4-0.5-0.1-35.7 0-17.9 0-18 0-18 0-18.1 0-18.2 0-18.3 0-18.3 0-18.4-0.1-18.4 0-18.5 0-18.7 0-18.6 0-18.8 0-18.9 0.2-0.1 5.4-1.8 5.4-1.7 5.5-1.8 10.9-3.5 5.4-1.8 5.5-1.7 5.4-1.8 10.9-3.5 5.5-1.7 5.4-1.8 5.5-1.7 5.4-1.8 10.9-3.5 7.3-2.3 7.2-2.2 7.3-2.2 7.3-2.3 3.3-1 3.4-1 6.7-2 3.5-1 7-2 3.5-1 4.7-1.4 1.4 0.1 1.6 0.7 0.5 0.4-0.1 0.1-0.9 2.4-0.2 1.5-0.3 0.9-0.8 1.7-0.2 1 0 2.3-0.2 0.6-0.2 0.2-0.5 0.3-0.2 0.2-0.2 0.3-0.5 1.5-2.1 2.9-0.3 0.5-0.1 0.2-0.6 0.6-2.7 3.8-0.3 0.6-0.1 0.6-0.2 2.1-0.7 2.2-0.8 1.7-0.3 1.3-0.3 2.6-0.3 1.3-0.5 1.3-0.6 1.2-0.4 0.5-0.8 0.8-0.4 0.5-0.2 0.6-0.1 0.6-0.2 1.2-0.2 1.2-3.9 9.5-0.5 3.7-0.2 2.4 0.1 2.4 1.2 3.5 1.2 3.1 1.6 2.6 1 3.6-0.1 1.9-0.4 1.3-0.5 1.2-1.2 0.8-1.4 2-0.3 1.4-0.4 0.8-0.3 0.6-0.1 0.7 0.4 3 1 3.3 1.5 1.4 1.1 1.2 2.3 0.4 2.8-0.2 2.9-1.6 3-2.5 2.6-2.4 1.7-2.2 0.9-1.4 0.7-1.3 1.2-1.4 1.4-2 1.3-2.2 1-1.5 1-1.4 0.3-1-0.8-1.5-1.2-0.5-1.4-0.6 0.8 1.9-1 0.3-1.4-0.4-0.6-1 0.6-3.1 0.7-1.4 0.4-1 1.2-0.4 0.8-0.4 1.2 0.4 0.3 1.6 0.3 1 0.8 0.8 1.2 0.3 1.9-0.5 1-1.2-0.3-1.6-1.3-1.2-0.7-1.2 0.6-2.1 0.1-2.6-0.7-2.7-0.5-2.4 0-1.7 1.2-0.3 1.6-0.3 0.8-1.8 0.3-2 0.5-1.5 0.4-2.4-1.3-0.8-1.3 1-1 2-2.2 1.3-1.4 0.2-1.5 1.2-1.7-1.2-0.1-1.9 0.7-2 1-2.3 0.9-2 1.8-2 0.9-1.7 1.6-1.6 1.7-1.7 1.3-0.6-2.7-2-1.5-1.9-1.3-5.1-0.5-3.3-0.2-2.2 0.2-2.5 0.8-2.9 0.9-2.4 0.5-1.2 5.7 3.9 7.4 5 5.1 3.4 13.7 9.4 8.9 5.9-0.2 0.4-1.4 1.9-0.8 1.6-1.1 3.7-0.9 2.4-1.7 2.9-1.3 1.6-0.6 2.9-0.7 2.8-0.9 2.1-1 1.8-2 2.7-0.9 2-0.7 2-0.4 2 0.7 4.1 1.5 3.5 1.8 2.4 4.8 5.5 7.2 7.2 3.8 3.7 3 2.2 3 2.4 0.7 0.7 0.2 1.1-0.3 2.3-1.2 1.8-2.7 1.8-0.9 2.4-1 2.4-1.3 2.4 0.9 2.2 2.9 0.5 2.6-0.2 2.3-0.7 1.5-1.4 2.1-0.2 2.3 0.4 2.2-0.8 2.4-1.6 3.3-2.2 1.5-2 0.3-1-0.8-0.9-1.1-0.1-1-0.4-0.6-0.6-0.2-0.7 0-0.9 0.3-0.6 0.4-1 0.7-0.6 0.5-0.6 1 0 1.5 0.1 1.6 0.3 1.1-0.3 0.9-0.9 0.4-1.1 0.8-2.7 0.4-2.6-0.3-2.6-0.7-4.3-1-3.3-1.3-2.7-0.4-2.6-0.1-2.2 1-1.4 1-0.8 1.1-1.3 0.8-1.8 0.5-2.3 0-3 0.1-3.9 0-2 1.1 0.8 11.3 7.5 10.6 7.2 9.8 6.4 8.4 5.7 12.1 8 3.6 2.4 1.5 1.7 1 2.2 0.4 1.9 0.4 4.2 0.6 1.9 3.4 5.5 6.6 7.3 3.2 3.4 3.2 3.5 4.1 4.7 3.3 3.8 6.7 7.8 3.3 3.8 3.3 3.8 3.3 3.8 6.5 7.5 4.4 5 2.3 1 0.1 0z"
                                id="UZB356" class="karakalpakstan-map" name="Karakalpakstan">
                            </path>
                            <path
                                d="M627.6 353.4l0 0.3-7.1 2.9-0.5 1.2-0.7 0.9 0.9 10.8 0.1 0.4 0.2 0.3 0.3 0.7 0.5 0.6 0.4 0.2 0.8 0.5 5.2 1.4 0.3 0.3 0.2 0.3 0.2 0.3 0 0.6 0 0.7-0.2 1.4 0 1.3 0.1 0.4 0.5 1.3 1.3 2.3-1.6 4.1-8.9 17.3-1.1-1.1-0.7-0.9-0.2-0.3-0.1-0.3-0.1-0.3 0-0.4 0.4-1.2 0-0.7-0.1-0.3-0.1-0.3-2-2.3-1.7-1.5-0.6-0.3-0.5-0.1-0.6 0.2-4.2 2.9-1.3 0.6-1.2 0.2-0.9-0.2-1.1-0.4-1-0.6-1.2-0.9-0.9-0.4-0.8-0.1-0.8 0.2-0.7 0.6-0.7 0.7-0.5 0.9-0.5 1-0.7 2.1-0.2 1.2 0 1.2 0.5 1.4 0.4 0.6 0.3 0.6-0.1 0.6-0.4 0.9-0.4 0.4-1.2 0.5-0.3 0.5 0 0.6 0.7 1.8 0.2 2.7-0.4 1.7-0.8 1.7-0.1 0.5 0.1 0.5 0.3 0.4 0.8 0.8 0 0.7-0.3 0.5-1.5 2.1-0.5 1-0.3 1-0.5 1.7-1.5 3.6-0.1 0.5 0.1 0.5 0.3 0.1 0.4 0 1.1-0.2 0.5 0 0.5 0.1 0.5 0.2 0.3 0.5 0.2 0.4 0 0.6-0.3 0.7-0.6 0.6-3.7 3.5-0.7 0.4-12.5 2.6-2.5-0.5-2.5-1.6-1.2 0.4-1.1-0.6-1.1-0.8-2.4-0.9-0.9-1-1.5-2.1-0.6-0.1-0.2-0.1-1.1-0.2-5.3-2.4-0.9 0-0.4 0.2-0.3 0.3-0.3 0.8-0.2 0.5-0.1 0.3 0.1 1-0.2 1.5 0 0.4-0.1 0.4-0.2 0.2-0.1 0.4-1.5 2.2-0.1 0.5 0.2 0.3 0.4 0 0.4 0.1 0.3 0.2 0.3 0.3 0.1 0.4-0.1 0.4-0.2 0.6-0.9 2-0.2 0.5-1 3.9-0.4 0.9-0.5 0.3-0.7 0.3-1.7 0-1.6-0.2-1.7-0.8-2-1.1-0.4-0.1-0.4 0.2-0.3 0.5-0.1 0.5-0.2 1.3-0.5 0.4-0.5 0.4-3.5 0.9-2.8 0.4-0.6 0.1-0.3 0.2-0.3 0.3-0.1 0.4 0.4 0.9 1.8 2 1.1 1 0.5 0.5 0.5 0.7 1.7 6.4 0.1 0.6-0.1 1.1-0.1 0.7-0.2 0.6-1.7 3.9 0 0.4 0.7 2.3 3.1 6.2-1.1 0.7-5.8 1.3-0.1-2.1-0.1-0.5-0.6-2-0.3-0.8-0.3-0.5-0.9-1.2-1-1.1-0.9-0.5-1.4-0.5-1.1-0.6-0.5-1.6-0.2-1.6 0-1.3-0.5-1.7-1-1.7-7-3.3-0.5-0.9-0.9-0.1-2.5 1.1-1.1 0-0.8-0.5-0.2-0.6-0.3-0.7-0.1-0.4-2.7-1.5-1.7-1.1-4.2-5.9-0.9-1.9 0.8-1.9 1-2.1 1.9-2.4 0.2-0.3 0.4-0.5 0.5-1 3.5-1.6 1.1-0.8 1-1 0.8-1.1 2.8-5.6 0.8-0.7 0.6-0.1 0.4-0.3 0.4-0.3 0.4-0.1 1.7-0.2 0.1-0.2-0.3-0.5-0.9-1.2-1.7-1.7-0.6-1.1-0.1-0.3 0-0.2 0.3-0.1 0.5-0.5 1-2.8-1.5-1.5-0.3-1.5 0-0.6 0.1-0.8 0.2-0.7 0.5-0.6 1-0.6 2-0.3 1.3 0 1.2 0.3 1.1 1 1.3 0.9 1.3 0.4 6.8 0.1 0.7-1.3 1.3-4.2 1-1 1.3-1.5 1.6-4.9 0.1-0.9 0.6-1 0.5-0.4 0.5-0.2 0.6 0.1 3 0.6 0.8 0.1 0.1-0.9-0.3-0.9-0.1-1.6 0-1.9 0.1-2 0.3-1.9 1.4-4.8-2.8 0.8-17.6-1.2-5.8-1.4-2-1.2-2-1.6-0.8-2.3-0.5-2-1.3-7.8-0.5-1.8-0.7-0.1-1.8 2.7-1.9 0.8-2.5 0.5-7.7 0.3-2 0.8-1.1 0.6-1.8 6.8-1.3 1.3-15.7-1.9-2.5-0.9-0.8-1.7-0.1-5-0.3-2.6-1.2-1.8-1.1-1-1.1-0.3-1.2 0.4-1.1 1-1 1.5-3.5 7.2-4.1 6.2-7 2.4 0.1-1.5-2.1-2.1-1.3-2.3-17.5-10.8-9-5.1-7.6-3-5.1-1.1-1.4-0.8-7.9-13.9-9.7-11.6-1.5-2.5-1.8-4.3-4.9-0.1-20.6 7.8-24.9-34.3-0.5-1.1 0-1 1.2-1.1 12.5-7.1 0.7-0.7 0.3-0.4-1.2-2.5-6.6-12.2-0.2-0.8 0-0.9 1.3-16.3 3.2-7.5 14.9-28.7 15.8-29.9 0.4-1 0-0.8-0.9-0.5-15.7-4.3-2.9-2.7-6.3-10.7 4.8-0.9 4.1-0.7 7.4-1.4 6.6-1.2 3.3-0.6 5.3-0.9 5.3-0.9 26.5-4.3 5.3-0.9 8.9 0.9 8.8 0.8 8.9 0.8 8.8 0.8 8.1 0.7 8 0.7 8.1 0.8 8 0.7 3.2 0.3 2-0.6 5.9-3.2 5.6-3.1 5.8-3.3 5.6-3.1 1.1-0.4 1-0.4 1.9 0.3 0.9 0.9 1 0.8 6.3 8.2 6.2 8.2 2.9 3.1 2.9 3 6 3.8 6 3.7 2.3 2.1 4.9 10.2 3.2 6.5 4.3 9 3.8 7.7 1 0.1 8.4-4.5 8.3-4.6-1.2 19.7-1.3 19.6-0.3 4.2-0.5 1.4-1.4 0.5-0.3 1.1-0.3 15.3-0.2 15.2 0.2 0.9 0.5 0.4 7 0 6.3 0 6.4 0.1 7 0 0.4-0.1 0.5 0.1 0.4 0 0.3 0.2 1 9.9 1 9.8 1.8 9.6 1.9 9.6 2.5 11.5 2.5 11.3 1.3 1.6 1.3 1.6 1.4 0.4z"
                                id="UZB357" class="navoi" name="Navoi">
                            </path>
                            <path
                                d="M619.6 403.9l0.5 0.4 7.3 0.3 2.4 0.7 0.9 0.2 1 0.2 1.3-0.1 1.5-0.3 0.4-0.1 0.3 0.3 0.3 0.4 0.4 1 0.3 0.7 0.1 0.8-0.1 1-0.3 1.1-0.5 1.2-0.1 0.4-0.1 0.5 0 0.5 0.1 3.6 0.1 1.3 0.8 4 0.2 0.3 0.2 0.4 0.4 0.4 1.2 0.5 0.3 0.3 0.2 0.3 0 0.6-0.2 0.4 0 0.6 0.2 0.6 1.6 1.9-0.1 1.8-0.2 0.7-0.2 0.2-0.3 0.3-1.1 0.3-0.3 0.2-0.1 0.4-0.1 0.4 0.3 3.4 0.2 0.4 0.2 0.3 0.7 0.2 0.5 0 0.5-0.1 0.3-0.1 1.1-0.5 0.3-0.1 0.4 0 0.4 0 0.4 0.3 0.3 0.5 0.1 1-0.2 0.5 0 0.7 0.1 0.4 2 2.2 0.8-0.3 0.3 0 0.2-0.1 0.7 1.1 4.6 1.3 0.7 0.1 0.9-0.1 0.4-0.1 0.4 0 1 0.6 0.4 0.2 0.5 0.1 0.6-0.2 1.3 0.1 10.1 1.9 1 1.6 1.5 7.1-0.2 0.6-0.9 0.2-0.4 0-1.6 0.4-1.2 0.4-1.9 1-0.9 0.7-0.4 0.4-0.1 0.4-0.2 0.5 0 1.1 0 0.7 0.1 0.5 0.1 0.4 0.1 0.7 0 0.5 0 0.9-0.1 0.4-0.3 0.4-0.5 0.2-0.5 0.1-1.8 0-0.7 0.2-0.4 0.7-0.2 0.6-0.1 5.2 0.6 1.3 0.8 1 2.4 2.1 4.4 3.9-0.5 0.7-0.7 2.9-0.4 3-0.1 2.8-0.7 2.5-0.4 2.5-0.4 0.2-0.6-0.2-0.6 0.2-0.1 0.1-13.9-3.5-3.1-0.2 0 0.4 0.1 0.8 0 0.3 0 0.4-0.2 0.4-0.2 0.3-0.3 0.3-0.3 0.1-0.7 0.2-6.4 0.2-0.8-0.1-0.4-0.2-0.4-0.2-0.4-0.3-0.2-0.4-0.1-0.6 0.1-1.2 0.4-2-0.2-1.1-1.2-2.2-1.2-0.2-5-1-4.5-0.7-0.8 0-1 0.3-0.9 0.5-0.5 0.4-0.4 0.4-1.9 2.9-0.5 0.5-4.4 1.8-0.4 0-0.8-0.2-0.9-0.5-3.5-2.7-1.4-1-1.1 0.1-8.4 1.9-0.3 0.1-5.6 2.7-1.2 0.8-0.9 0.3-2.1 0-3.9-1-0.3-0.3-0.3-0.5-0.1-0.8-0.1-0.6 0-0.5 0.1-1.2 0-1.1-0.2-0.5-0.2-0.4-1.4-1.1-1.8-1.2-3-3-0.6-0.8-0.4-0.6-0.1-0.4-0.6-2.5-0.1-0.3-0.2-0.3-0.3-0.3-0.3-0.2-0.4-0.1-0.5-0.1-1.8 0-0.7 0.1-0.5 0.3-0.1 0.4 0 0.4 0 1.1 0 0.4-0.1 0.4-0.2 0.3-0.2 0.3-1.3 0.9-1.2 0.7-0.7 0.2-24.8-0.6-3.1-6.2-0.7-2.3 0-0.4 1.7-3.9 0.2-0.6 0.1-0.7 0.1-1.1-0.1-0.6-1.7-6.4-0.5-0.7-0.5-0.5-1.1-1-1.8-2-0.4-0.9 0.1-0.4 0.3-0.3 0.3-0.2 0.6-0.1 2.8-0.4 3.5-0.9 0.5-0.4 0.5-0.4 0.2-1.3 0.1-0.5 0.3-0.5 0.4-0.2 0.4 0.1 2 1.1 1.7 0.8 1.6 0.2 1.7 0 0.7-0.3 0.5-0.3 0.4-0.9 1-3.9 0.2-0.5 0.9-2 0.2-0.6 0.1-0.4-0.1-0.4-0.3-0.3-0.3-0.2-0.4-0.1-0.4 0-0.2-0.3 0.1-0.5 1.5-2.2 0.1-0.4 0.2-0.2 0.1-0.4 0-0.4 0.2-1.5-0.1-1 0.1-0.3 0.2-0.5 0.3-0.8 0.3-0.3 0.4-0.2 0.9 0 5.3 2.4 1.1 0.2 0.2 0.1 0.6 0.1 1.5 2.1 0.9 1 2.4 0.9 1.1 0.8 1.1 0.6 1.2-0.4 2.5 1.6 2.5 0.5 12.5-2.6 0.7-0.4 3.7-3.5 0.6-0.6 0.3-0.7 0-0.6-0.2-0.4-0.3-0.5-0.5-0.2-0.5-0.1-0.5 0-1.1 0.2-0.4 0-0.3-0.1-0.1-0.5 0.1-0.5 1.5-3.6 0.5-1.7 0.3-1 0.5-1 1.5-2.1 0.3-0.5 0-0.7-0.8-0.8-0.3-0.4-0.1-0.5 0.1-0.5 0.8-1.7 0.4-1.7-0.2-2.7-0.7-1.8 0-0.6 0.3-0.5 1.2-0.5 0.4-0.4 0.4-0.9 0.1-0.6-0.3-0.6-0.4-0.6-0.5-1.4 0-1.2 0.2-1.2 0.7-2.1 0.5-1 0.5-0.9 0.7-0.7 0.7-0.6 0.8-0.2 0.8 0.1 0.9 0.4 1.2 0.9 1 0.6 1.1 0.4 0.9 0.2 1.2-0.2 1.3-0.6 4.2-2.9 0.6-0.2 0.5 0.1 0.6 0.3 1.7 1.5 2 2.3 0.1 0.3 0.1 0.3 0 0.7-0.4 1.2 0 0.4 0.1 0.3 0.1 0.3 0.2 0.3 0.7 0.9 1.1 1.1z"
                                id="UZB358" class="samarkand" name="Samarkand">
                            </path>
                            <path
                                d="M662.5 495.2l-0.4 0.4-0.3 0.3-0.1 0.5-0.1 1.1 0.4 3 1.6 1.5 7.1 2.5 4.7 0.2 2.3 0.9 0.2 0.3 0.5 0.9 0.3 0.3 0.4 0.1 1-0.2 0.4 0.1 0.5 0.9 0.1 1-0.7 5.8 0.3 1.9 0.1 0-0.9 0.7-1 0.4-4.2 0.2-0.8 0.2-0.6 0.3-0.4 0.2-0.3 0.3-0.5 0.4-0.3 0.6-0.2 0.5 0 0.6 0.5 1.8 0.3 2.7 1.4 2.5 0.1 0.3 0.1 0.4 0 0.5-0.1 0.4-0.1 0.5 0 0.4-0.1 0.4 0 0.4 0.1 0.4 0 0.4 0.2 0.3 0.1 0.8 0.1 0.4 0 0.4-0.2 0.6-0.3 0.6-0.6 0.9-0.3 0.6-0.1 0.6 0 1.3-0.1 0.3-0.2 0.3-0.4-0.1-0.3-0.2-1.1-1.1-0.2-0.2-0.3-0.2-0.4-0.2-0.9-0.2-0.9-0.1-0.8 0-0.8 0.2-0.8 0.4-0.5 0.4-0.4 0.4-0.3 0.3-3.5 6.8-0.6 0.8-1 1.1-0.6 0.4-0.9 0.5-2.3 0.6-0.4 1-0.7 1.1-1 1.1-2.2 1.8-0.3 0.5-0.4 1-0.3 1.2-0.6 3.8-0.5 1.8-0.1 0.4-0.8 0.8-6.4 5.2-3.3 1.8-0.7 0.2-2.1 0.4-0.5 0.3-0.5 0.7-0.9 1.5-0.6 1.5-0.3 0.8-0.3 0.9-0.4 0.9-0.4 0.8-7.1 6.6-0.5 0.7-0.3 1.2-0.3 2.9-0.3 1-0.9 1.8-1.8 1.1-0.7-2-1.9-1.4-2.1-1.1-2.3-0.6-4.4 0-1.8-0.5-5.9-2.8-2.7-3.4-1.7-1.7-1.9-0.8-3.8-1.1-3.6-2.9-1.6-0.9-3.9-0.6-5.8-2.8-2-0.2-1.6 0.7-2.8 2.2-1.5 0.9-4 0.3-3.9-1.3-9.6-6.5-5.8-3.9-7.8-5.3-5.5-5.1-7.8-7-3.9-2.5-8.5-3-7.5-4.3-12.2-10.4-3.3-4.3 0.9-0.9 5.3-5.9 2.7-1.8 8-3.3 3.1-1.1 9.7-3.5 0.3-0.2 0.3-0.3 0.1-0.6 0-0.5-0.2-0.3-0.2-0.3-1.8-2.3-0.4-0.6-0.3-0.7-0.1-0.3-0.1-0.4 0-0.4 0.1-0.4 0.4-0.6 0.5-0.8 4.4-4.8 0.4-0.3 0.4-0.2 0.7-0.1 0.6 0.1 0.7-0.3 0.7-0.6 5.8-5.8 2.7-2.1 5.8-1.3 1.1-0.7 24.8 0.6 0.7-0.2 1.2-0.7 1.3-0.9 0.2-0.3 0.2-0.3 0.1-0.4 0-0.4 0-1.1 0-0.4 0.1-0.4 0.5-0.3 0.7-0.1 1.8 0 0.5 0.1 0.4 0.1 0.3 0.2 0.3 0.3 0.2 0.3 0.1 0.3 0.6 2.5 0.1 0.4 0.4 0.6 0.6 0.8 3 3 1.8 1.2 1.4 1.1 0.2 0.4 0.2 0.5 0 1.1-0.1 1.2 0 0.5 0.1 0.6 0.1 0.8 0.3 0.5 0.3 0.3 3.9 1 2.1 0 0.9-0.3 1.2-0.8 5.6-2.7 0.3-0.1 8.4-1.9 1.1-0.1 1.4 1 3.5 2.7 0.9 0.5 0.8 0.2 0.4 0 4.4-1.8 0.5-0.5 1.9-2.9 0.4-0.4 0.5-0.4 0.9-0.5 1-0.3 0.8 0 4.5 0.7 5 1 1.2 0.2 1.2 2.2 0.2 1.1-0.4 2-0.1 1.2 0.1 0.6 0.2 0.4 0.4 0.3 0.4 0.2 0.4 0.2 0.8 0.1 6.4-0.2 0.7-0.2 0.3-0.1 0.3-0.3 0.2-0.3 0.2-0.4 0-0.4 0-0.3-0.1-0.8 0-0.4 3.1 0.2 13.9 3.5z"
                                id="UZB361" class="kashkadarya" name="Kashkadarya">
                            </path>
                            <path
                                d="M620.5 593.7l1.8-1.1 0.9-1.8 0.3-1 0.3-2.9 0.3-1.2 0.5-0.7 7.1-6.6 0.4-0.8 0.4-0.9 0.3-0.9 0.3-0.8 0.6-1.5 0.9-1.5 0.5-0.7 0.5-0.3 2.1-0.4 0.7-0.2 3.3-1.8 6.4-5.2 0.8-0.8 0.1-0.4 0.5-1.8 0.6-3.8 0.3-1.2 0.4-1 0.3-0.5 2.2-1.8 1-1.1 0.7-1.1 0.4-1 2.3-0.6 0.9-0.5 0.6-0.4 1-1.1 0.6-0.8 3.5-6.8 0.3-0.3 0.4-0.4 0.5-0.4 0.8-0.4 0.8-0.2 0.8 0 0.9 0.1 0.9 0.2 0.4 0.2 0.3 0.2 0.2 0.2 1.1 1.1 0.3 0.2 0.4 0.1 0.2-0.3 0.1-0.3 0-1.3 0.1-0.6 0.3-0.6 0.6-0.9 0.3-0.6 0.2-0.6 0-0.4-0.1-0.4-0.1-0.8-0.2-0.3 0-0.4-0.1-0.4 0-0.4 0.1-0.4 0-0.4 0.1-0.5 0.1-0.4 0-0.5-0.1-0.4-0.1-0.3-1.4-2.5-0.3-2.7-0.5-1.8 0-0.6 0.2-0.5 0.3-0.6 0.5-0.4 0.3-0.3 0.4-0.2 0.6-0.3 0.8-0.2 4.2-0.2 1-0.4 0.9-0.7 1 1 7.4 1.3 1.6-0.1 4.4-1.5 0.8-0.4 0.8-0.2 0.9 0 0.9 0.4 0.5 0.2 0.9 0.9 0.9 0.2 1-0.4 1-0.7 0.4-0.1 0.5 0 0.5 0 0.5 0.1 0.9 1.1 1.9 4.4 1.7 2.5 0.6 1.5-0.1 1.6-0.5 1.3-0.7 1-0.9 0.8-1 0.5-1.4 0.3-1 0-0.6 0.4-0.2 1.6 0.1 0.8 0.4 0.6 0.2 0.7 0 0.9-0.3 0.4-1.5 1.1-0.4 1.1 0.1 1.3 0.8 2.8 0.1 1.5-0.2 4.3 0.2 1.6 0.4 1 1.4 2.2 0.4 1.1 0.1 2.4 0.2 1 0.5 1.1 2.3 2.2 2.2 3.9 1 1.1 3 1.7 4.6 4.1 1.4 2.2 0.2 2.9-0.9 4.3-1.4 4.1-2.3 3.5-0.7 1.4-0.5 1.2-0.2 1.2-0.5 0.9-0.9 0.7-0.9 0.2-2.7 0.4-1.8 0.6-1 1.1-2.5 7.5-1.7 3.4-4.2 5.9-3.2 3-3 3.8-2.4 4.3-1.7 4.5-0.2 3.1 1.2 5.8 0.2 3.1-0.3 2.6-0.7 2.5-1.1 2.2-0.3 1-0.2-1.3-0.7-1-1-0.6-1.2-0.3-2.1 0.1-0.8-0.1-0.6-0.4-1.3-0.9-0.6-0.2-0.7 0.1-1.1 0.3-0.6 0.1-0.4 0.3-0.3 0.7-0.5 0.7-0.6 0.3-1-0.9-1.1-3-1.3-0.7-1.2 0.4-1.1 0.8-1.9 1.9-1.1 0.9-1.2 0.6-1.3 0.3-1.4 0.2-1.5 0.3-2.2 1.4-1.3 0.3-1.3-0.5-0.6-1.1-0.5-1.4-0.5-1.3-1.2-1-2.6-1-1.2-0.8-0.5-1.1-1-3.2-0.7-0.6-1.2-0.4-2.3-1.6-1.1-0.6-2.8 0-5.3 1.2-7.6 0.4-0.6 0.2-1.2 1-0.6 0.2-1.6 0-0.7-0.2-3.8-1.6-1.4-0.2-1.5 0.2-1.1 0.3-1.5-1.1 0.1-1.3 0.9-1.3 1.1-1.1 0.9-1.5-0.2-1.2-0.9-1-1.2-1-0.8-2 0.3-2.7 1.2-4.9 0.2-2.9-0.4-5.8 0.2-2.9 2-3.6 3.3-4.2 2.1-4.2-0.6-1.5z"
                                id="UZB362" name="Surkhandarya">
                            </path>
                            <path
                                d="M945.5 406.7l-0.1-0.4-0.5-1.8-0.1-1 0.2-1.4 0.2-1.4 0-0.9 0-0.5-0.1-0.4-0.8-0.7-3-0.9-0.7-0.1-0.4-0.3-1.1-1.7-0.8-0.6-0.6 0.5-0.6 0.8-1 0.1-3.5-0.7-2.8-0.9-1.6 0.1-1.2 0.2-1.4-0.2-0.5-0.2-0.5-0.3-2.3-3.2-0.5-0.9-0.5-0.5-0.7-0.4-3-1-0.9-0.1-0.7 0.1-0.3 0.2-0.5-0.1-0.8-0.2-1.6-0.9-0.6 0-0.3 0.3-0.1 1.3-0.3-0.1-0.6-0.9-1.2-2.4-1.8-2.6 1.7-1.7-0.9-1.9-0.7-0.9-0.1-0.6 0.3-0.4 1.9-1.8 0.7-0.5 0.8-1.1 6-1.6 1.9 0.9 2.4-1.1 0.7-0.2 1.3 0 1.4 0.1 1.6-0.2 7.6 1.9 1 0.1 1-0.2 3.5-0.1 0.8-0.2 0.4-0.2 0.2-0.1 0.5-0.4 1.4-6.4 0.3-1.3 3.3-1 2.2-0.3 0.4-0.4 0.7-2 0.3-0.5 1.1-0.9 0.7 0.5 1.7 2.6 1.2 0.8 1.7 0.5 3.1 0.3 0.3 0.2 0.1 0.3 0 0.4-0.1 0.5 0 1.8 1.1 0.5 1.4 0.1 1.2 0.5 2.4 3.9 1.8 1.9 2.3 1 2.5 0.3 7.5-0.7 2.2 0.7 0.3 2.2-0.2 1.3 0.8-0.1 2.7-1.9 4.3-2 0.9 0.6 0.8 1.2 1.2 0.8 3.4-0.2 1.8 0.4 0.3 1.5-1.8 2.4-2.7 1.6-5.5 2-5 3.1-4.2 1.1-2 0.9-1.4 2.1-0.7 5.1-1.7 0.8-2.1-1-1.1 0-0.4 1.3-0.1 1.1-0.3 1.1-0.5 0.9-0.9 0.8-2.3 0.1-4.1-2.8-2.2-0.3-1.7-0.9-1.9-2.2-2-1.7-1.7 0.8-0.2 1.2 1.3 2.1-0.1 1.4-0.3 1.3 0 0.8 0.5 0.7 2.5 1.8 0.6 1.6 0 1.8-0.7 1.9-1.2 1.6-1.3 0.3-1.6-0.6-3.4-2-0.9-0.3-2.6 0.1-0.8-0.3 0.3-0.7 0.7-0.2 1-0.1 0.8-0.2 0.3-0.8-0.6-0.5-1-0.1-0.5 0.1z"
                                id="UZB363" class="andijon" name="Andijon">
                            </path>
                            <path
                                d="M918.1 449l-0.9 0.2-1.4-0.5-1.2-0.5-1.2-0.9-0.6-1.1 1-1.2 1.4 0 1-0.5 2.1-1.6 1.5-0.5 0.2 0.8-1.3 4.9-0.6 0.9z m-34.1-10.6l0.4 0.1 0.3-0.2 0.6-0.5 0.4-0.2 1.4-0.4 0.8 0.2 0.4 0.7-0.4 1.2-2.7 1.9-0.9 0.9 0.1 2 2.6 2.7-0.1 2.4-0.7 0.9-0.8 0.3-1.9 0-2.8 0.8-0.8-0.1-0.7-0.7-0.1-0.8-0.3-0.6-1.1-0.1-0.7 0.5-0.8 0.8-0.8 0.5-0.7-0.4-0.1-1.9 2.5-3.9-0.3-2.3-0.7-0.5-1.5-0.3-0.8-0.4-0.6-1-1.5-3.1-0.3-1.3 0.1-1.2 0.3-1.4 1-2.3 1.8-1 1.3 0.8 1 1.8 0.8 2.1 1 1.3 1.6 1 3.2 1.4 0.2 0.2 0.3 0.1z m23.9-55.8l1.8 2.6 1.2 2.4 0.6 0.9 0.3 0.1 0.1-1.3 0.3-0.3 0.6 0 1.6 0.9 0.8 0.2 0.5 0.1 0.3-0.2 0.7-0.1 0.9 0.1 3 1 0.7 0.4 0.5 0.5 0.5 0.9 2.3 3.2 0.5 0.3 0.5 0.2 1.4 0.2 1.2-0.2 1.6-0.1 2.8 0.9 3.5 0.7 1-0.1 0.6-0.8 0.6-0.5 0.8 0.6 1.1 1.7 0.4 0.3 0.7 0.1 3 0.9 0.8 0.7 0.1 0.4 0 0.5 0 0.9-0.2 1.4-0.2 1.4 0.1 1 0.5 1.8 0.1 0.4-2.6 0.1-1 0.2-3.9 2.2-0.5 0.8-0.4 1.4-0.8 2.1-1.5 1.6-5.1 2.5-0.3 1.1 0.4 1.2 1.1 0.7 1.7 0.8 0.8 0.6 0.3 0.6-0.4 0.8-0.8 0.2-0.9-0.1-0.7-0.3-0.4-0.1-0.4 0-0.7 0.2-2.2-0.2-2.3-0.5-2.2 0.1-1.8 1.8-1 2.4-0.7 1.1-0.9 0.9-3.1 1.8-0.8 0.2-1.2-0.5-0.3-1.2 0-3.1-0.4-1.5-0.8-1.7-1.1-0.9-1 0.9-0.4 1.5-0.1 1.3-0.5 0.9-1.4 0.1-2.8-0.5-1.3-0.6-1.2-0.7-1.1-1.1-0.5-1.1-0.5-0.9-2.6-0.8-1.8-1.7-1.2-0.1-1.8 0.2-1-0.1-0.8-0.4-0.6-0.7-0.5-0.8-0.6-0.4-0.8 0.2-1 1.4-0.5 1.7-0.8 1.3-1.8 0.2-6.8-1-3.4 0.6-2.1 2.1-1.2-0.1-5.1 0.5-8.3 2.5-2.5 0.2-2.4-0.1-2.4-1.7-1-3.2-0.8-3.6-1.5-2.5-1.3-0.5-1.1 0.1-1.1 0.3-1.3 0.1-1.2-0.3-2.9-1.3 0.8-2.7-0.2-0.3-0.5-0.6-0.1-0.1-0.7-1.1-0.1-0.2-0.1-0.4-0.1-1.6 0.9-1.5 1.7-1.1 4-0.9 0.6-0.3 0.6-0.7 1.4-2.4 0.8-0.8 0.8-0.4 0.8-0.2 0.9-0.4 0.7-0.7 2.1-2.5 3.5-2.9 0.9-0.8 0.8-0.7 0.5-0.2 1-0.2 0.2-0.3 0.1-0.4 0.2-0.3 0.9-0.6 1.5-0.9 0.6-0.8 0.5-0.7 0.7-0.7 0.9-0.5 0.8-0.1 1.6 0.2 0.8-0.1 2.7-2.5 1.2 0 0.9 0.4 0.5 0.3 0.4 0.4 1.8 0.2 6.6-0.3-3.7 5 0.3 0.4 2.3 0.2 0.4 0.2 1.7 1.8 0.4 0.2 0.6 0.2 1.1 0.2 0.6 0.2 1.2 1 2.7 1.5 0.8 0.2 1.3-0.2 3.8-3.6 1.8-2.9 1.2-0.9 5.1-2.8 4.8-1.6z"
                                id="UZB364" name="Ferghana">
                            </path>
                            <path
                                d="M943.6 364.7l-0.3 1.3-1.4 6.4-0.5 0.4-0.2 0.1-0.4 0.2-0.8 0.2-3.5 0.1-1 0.2-1-0.1-7.6-1.9-1.6 0.2-1.4-0.1-1.3 0-0.7 0.2-2.4 1.1-1.9-0.9-6 1.6-0.8 1.1-0.7 0.5-1.9 1.8-0.3 0.4 0.1 0.6 0.7 0.9 0.9 1.9-1.7 1.7-4.8 1.6-5.1 2.8-1.2 0.9-1.8 2.9-3.8 3.6-1.3 0.2-0.8-0.2-2.7-1.5-1.2-1-0.6-0.2-1.1-0.2-0.6-0.2-0.4-0.2-1.7-1.8-0.4-0.2-2.3-0.2-0.3-0.4 3.7-5-6.6 0.3-1.8-0.2-0.4-0.4-0.5-0.3-0.9-0.4-1.2 0-2.7 2.5-0.8 0.1-1.6-0.2-0.8 0.1-0.9 0.5-0.7 0.7-0.5 0.7-0.6 0.8-1.5 0.9 0.1-0.6 0.5-2.6-2.2-1.3-5.3-1.3-0.9-1.1-0.2-1.4 0.6-0.9 1.1-0.2 2 1.8 1.2 0.4 0.1-1.4-0.5-0.7-10.6-12-1.8-1.6-0.2-0.2-0.1-0.3-1.2-1.2 0.5-1.8-0.2-5.7-0.2-1.7-1.2-2-1.2-1.6-0.3-0.6-0.2-0.5 0-0.6 0.1-0.4 1.1-2.4 0.2-0.5 0.3-1-0.2-0.7-1.6-0.2-0.2-0.3-0.2-0.4-0.1-1.2-0.1-0.9 0.1-0.5 0.1-0.5 2.9-3.8 0.5-0.9 0.7-1.9 0.4 0 1.9-0.7 7.2-4.1 1.9-0.3 1.1 0.7 1 1.3 3.3 5.6 0.5 1.6 0.1 1.6-0.8 4.8 0.1 1.3 0.7 1.1 0.9-0.1 1.2-0.6 1.3-0.1 1.1 0.5 1 0.7 1 1 0.8 1.1 1 1 1.2 0.1 2.5-0.3 2.8 0.5 1.3 0.6 1.2 0.9 1 0.6 2.2 0.3 0.9 0.8 1.5 2.4 0.9 0.7 0.6-1.5-0.1-1.6-0.3-1.4 0.1-1.1 1.2-0.7 1.4 0.2 0.7 0.9 0.7 2.9 0.5 1.1 0.8 0.8 0.8-0.1 0.6-1.5 1.4-1.8 4 3.4 1.3-1.1 0.3-2.7-0.5-13.3 0.4-1 0.8 0.2 2.8 2.6 2.5 1.1 2-0.4 1.6-1.7 1.9-4.2 0.8-2.6 0.3-1.5-0.2-1.4-1.7-2.2-0.6-1.3 1.2-2.9 0.7-0.9 1.3-0.5 1.3 0.2 0.7 1 0.3 1.5 0 1.6-1.1 4.4 0.1 0.9 0.5 0.2 0.4-0.6 0.2-0.8 0.3-0.5 0.6 0.3 0.3 1.2 0.6 0.3 0.4-0.4 0.1-1.7 0.4-0.3 0.4 0.2 0.5 0.4 5.5 8.2 0.9 2.3 0.3 2.6-0.1 3.2 0.3 3.3 1.5 0.7 4.6-0.8 1.4 1.2 0.9 1.3 1 0.5 1.7-1 1.3-1.2 1.4-0.8 1.4-0.3 1.5 0.9 0.6 1.5 0.3 2.1 0.1 2.2 0.5 4 0 1.5-0.4 1.4-0.8 1.9 1.8-0.6z m-90.2 4.2l-0.7-1.9-0.8-1.3-1.4-1.2-1.6-0.7-0.9 0.2 0.6 1.6 1.1 1.1 1.7 2.3 1 0.9 1.1 0.3-0.1-1.3z"
                                id="UZB365" class="namangan" name="Namangan">
                            </path>
                            <path
                                d="M715.3 391.1l-0.2 3.1-0.7 0.8-3.2 0.6-0.8 0.1-0.3 0.2-0.3 0.2-0.1 0.4-0.1 1.8-0.4 2.9 0.2 0.4 0.3 0.3 0.9-0.2 1.1-0.3 0.5 0 0.2 0.9-6.9 15.8-0.2 1.1-0.2 1.2 0.3 2.1 0.2 0.6 0.3 0.6 0.3 0.2 1.6 0.3 13.2 0.3 17.4-4.3 0.2 0 0.1 0.1-0.3 0.6-0.3 0.4-0.2 0.4-0.3 0.5-0.8 2.9-0.2 0.5-0.2 0.7 0.7 1.3 0 0.1-2.3 0.6-1.2 0.9 1.5 1.6 2.6 1.7 2 0.8 0.6-0.1-2.5 3.3-0.9 1.6-0.3 0.8 0 0.6 0 0.5 0.1 0.4 0.2 0.7 0.4 0.8 0.4 1.4 0.2 0.7 0.1 0.4 0 0.7-0.1 2.5-0.2 0.4-0.3 0-0.1-0.3-0.3-0.3-0.3-0.1-0.3-0.1-0.5 0.3-0.1 0.3 0.2 0.3 0.2 0.3 1.1 0.6 0.3 0.3 0.1 0.3-0.1 0.4-0.1 0.5-0.3 0.7-0.1 1.2-0.1 0.7-0.2 0-0.6-0.1-0.6 1.7-0.6 12.2-0.3 1.8-0.8 1.5-1.4 1.4-2.5 1.6-0.8 1.1 0.7 1.5-1.2 0.5-3.6 1-2.8 0.2-2.9-0.2-4.7-1.7-8.7-0.2-19.9-5.2-2.7-0.1-2.2 0.7-5.4 3.9-4.6 0.7-1.2 1.2 0.4 3.3-0.2 0.3-0.2 0.2-0.3 0.1-0.3 0.1-1.5-0.2-0.9 0.1-4.4-3.9-2.4-2.1-0.8-1-0.6-1.3 0.1-5.2 0.2-0.6 0.4-0.7 0.7-0.2 1.8 0 0.5-0.1 0.5-0.2 0.3-0.4 0.1-0.4 0-0.9 0-0.5-0.1-0.7-0.1-0.4-0.1-0.5 0-0.7 0-1.1 0.2-0.5 0.1-0.4 0.4-0.4 0.9-0.7 1.9-1 1.2-0.4 1.6-0.4 0.4 0 0.9-0.2 0.2-0.6-1.5-7.1-1-1.6-10.1-1.9-1.3-0.1-0.6 0.2-0.5-0.1-0.4-0.2-1-0.6-0.4 0-0.4 0.1-0.9 0.1-0.7-0.1-4.6-1.3-0.7-1.1-0.2 0.1-0.3 0-0.8 0.3-2-2.2-0.1-0.4 0-0.7 0.2-0.5-0.1-1-0.3-0.5-0.4-0.3-0.4 0-0.4 0-0.3 0.1-1.1 0.5-0.3 0.1-0.5 0.1-0.5 0-0.7-0.2-0.2-0.3-0.2-0.4-0.3-3.4 0.1-0.4 0.1-0.4 0.3-0.2 1.1-0.3 0.3-0.3 0.2-0.2 0.2-0.7 0.1-1.8-1.6-1.9-0.2-0.6 0-0.6 0.2-0.4 0-0.6-0.2-0.3-0.3-0.3-1.2-0.5-0.4-0.4-0.2-0.4-0.2-0.3-0.8-4-0.1-1.3-0.1-3.6 0-0.5 0.1-0.5 0.1-0.4 0.5-1.2 0.3-1.1 0.1-1-0.1-0.8-0.3-0.7-0.4-1-0.3-0.4-0.3-0.3-0.4 0.1-1.5 0.3-1.3 0.1-1-0.2-0.9-0.2-2.4-0.7-7.3-0.3-0.5-0.4 8.9-17.3 1.6-4.1-1.3-2.3-0.5-1.3-0.1-0.4 0-1.3 0.2-1.4 0-0.7 0-0.6-0.2-0.3-0.2-0.3-0.3-0.3-5.2-1.4-0.8-0.5-0.4-0.2-0.5-0.6-0.3-0.7-0.2-0.3-0.1-0.4-0.9-10.8 0.7-0.9 0.5-1.2 7.1-2.9 0-0.3 3.3 0.9 6.8-0.4 5.7-0.4 14.6-0.9 7.5-0.4 12.2-0.8 7.4-0.4 1.4 0.4 2.4 1.3 1.3 0.4 1.1-0.2 1.7-1.1 1.7-1.1 1.4-1 0.4 1.2 0.3 1 0.2 0.2 0.4 0.8 1.3 1.7 1.3 1.7 0.6 1.4 0.2 1.5 0.2 1.4 0.4 0.7 0.4 0.6 0.7-0.6 0.7-0.3 0.7 0.1 0.7 0.8 0.8-1.7 1.2-0.1 0.2 1.6 0 0.2-0.1 0.7 0.6 0.2 0.1 0.1-1.3 1-0.5 0.3 0.5 0.2 0.2 0.4 0.5 0.9 0 2.2-0.3 1.3-0.3 1.3-0.4 1.2-0.4 1.3-0.9 2-0.7 1-0.8 1-1 0.7-2 1-0.6 0.4-0.1 0.6 0.3 0.3 2.3 0.5 1.8 1 5.3 5.3 2 1.5 1.9 1.6 2.4 1.2z"
                                id="UZB370" class="jizzakh" name="Jizzakh">
                            </path>
                            <path
                                d="M737 453.1l0.1-0.7 0.1-1.2 0.3-0.7 0.1-0.5 0.1-0.4-0.1-0.3-0.3-0.3-1.1-0.6-0.2-0.3-0.2-0.3 0.1-0.3 0.5-0.3 0.3 0.1 0.3 0.1 0.3 0.3 0.1 0.3 0.3 0 0.2-0.4 0.1-2.5 0-0.7-0.1-0.4-0.2-0.7-0.4-1.4-0.4-0.8-0.2-0.7-0.1-0.4 0-0.5 0-0.6 0.3-0.8 0.9-1.6 2.5-3.3 13.6-2.7 2.7 1.9 0.4 1.1 0.1 1.2 0 1.1-0.5 0.9-1.3 0.2-4.3-0.6-1.1 0.3-2.1 1.8-0.8 0.3-1.3-2.4-0.9-0.7-0.7 1.4 0.1 0.7 1 0.8 0.2 0.6-0.1 1.5 0.1 0.7 0.3 0.8 5.1 7.1 0.2 1.7-2.5 1-1.3-2.1-0.9-3.2-1.2-2.6-1.2-0.9-0.4 0.6 0.2 1.4 0.6 1.7 1.3 2.7-0.1 1.1-0.7 1.5-0.2 0.1-0.6 0.1-0.2 0.1-0.4 1.2 0 0.5-0.1 0.7-0.4 0.5-0.8-0.4-1.5-2.5-1-0.8-2 1.8-0.6-0.3z m25.2-27.9l-1.9-1-1.3-0.2-9.4 1.5-1.2 0.5-2 1.1-1.4 0.2-3.3-0.6-1.3 0.1-3.3 0.9 0-0.1-0.7-1.3 0.2-0.7 0.2-0.5 0.8-2.9 0.3-0.5 0.2-0.4 0.3-0.4 0.3-0.6-0.1-0.1-0.2 0-17.4 4.3-13.2-0.3-1.6-0.3-0.3-0.2-0.3-0.6-0.2-0.6-0.3-2.1 0.2-1.2 0.2-1.1 6.9-15.8-0.2-0.9-0.5 0-1.1 0.3-0.9 0.2-0.3-0.3-0.2-0.4 0.4-2.9 0.1-1.8 0.1-0.4 0.3-0.2 0.3-0.2 0.8-0.1 3.2-0.6 0.7-0.8 0.2-3.1 4.5 2.4 6.8 3.6 0.2-0.4 0.7-0.7 0.9 0 0.4-0.5 0.4-0.7 0.5-0.3 0.7 0.1 2.3 1.1 1.5 0.3 1.3-0.8 0.3-1-1.1-0.6 1.4-2.3 0.1-0.5-0.5-0.9-0.3-0.9-0.3-1 0.1-1-1.5-0.3-0.5-0.3-0.5-0.6-0.4-1.5-0.3-3.2-0.3-3.2 0.1-0.6 0.1-0.6 0.4-0.4 0.3-0.3 0.4-0.8 0.1-0.8-0.2-1.7 0.1-0.8 0.2 0.1 0.6 0.2 0.2 0.2 0.7-1.8 1.6-1.1 1.2-0.6 3 2.7 0.4 0.7 0.2 0.8 0.1 1.8 0.2 0.6 0.3 0.2 0.5-0.4 0.2 0 0.2 0.5 0.2 1.3 0.9-0.4 1.3 0.3 1.3 0.5 0.9 0.7 0.5 0.7 0.6 1.3 0.5 0.5 0.4 0.3 1.5 0.8 0.7 0.5 0.3 0.4 0.6 1.3 0 0.3-0.1 0.9 0.1 0.4 0.4 0.3 0.4 0.1 0.4-0.1 0.4 0.1 0.8 0.8 0.6 0.9 0.2 1-0.8 1 0.9 0.6 0.8-0.3 0.8-0.5 0.9-0.3 0.6 0.3-0.3 0.8-0.9 1.5 2.5-0.4 1 0.1 0.7 1.9 1.1 0.9 0.3 0.7-0.3 0.6-0.9 0.9 0 0.6 0.4 0.3 0.6-0.4 0.6-0.7 0.6-0.3 0.5 0.3 0.4 0.5 0 0.5-1.5 0.7-0.5 1.1-0.7 2.7 0.7-0.1 0.6 0.1 0.6 0.2 0.5 0.4-1.1 0.6 0.1 0.6 0.6 0.6 0.4 0.5 0.1 0.6 0.2 0.7 0.1 0.7-0.2 0.6-0.9 1.1-0.3 0.6-0.3 0.7-0.2 0.6-1.2 7 0.8 2.1 0.4 0.6 0.1 1.1-0.8 3-0.3 1.1z"
                                id="UZB371" class="sirdaryo" name="Sirdaryo">
                            </path>
                            <path
                                d="M843.4 333.9l-0.7 1.9-0.5 0.9-2.9 3.8-0.1 0.5-0.1 0.5 0.1 0.9 0.1 1.2 0.2 0.4 0.2 0.3 1.6 0.2 0.2 0.7-0.3 1-0.2 0.5-1.1 2.4-0.1 0.4 0 0.6 0.2 0.5 0.3 0.6 1.2 1.6 1.2 2 0.2 1.7 0.2 5.7-0.5 1.8-0.7-0.8-2.6-1.1-2.2 0.6-1.6 8.1-3.2 3.8-4.2 2.6-6 2.4-5.5 4.2-10.7 3.4-1.3 0.6-1.2 1-2.4 3.1-1.4 1.2-1.5 0.5-1.8-0.6-0.8-0.7-0.6-0.8-1-1.8-0.7-0.8-1.4-1-0.7-0.6-2.3-3.5-1.3-1.3-1.9-0.2-0.9-0.5-0.7-0.8-0.8-0.6-1-0.1-1.9 0.6-0.9 0.5-0.9 0.7-1.4 1.9-0.9 2-0.4 2.3-0.1 2.8 0.4 4.1-0.2 1-0.9 0.5-3.5 0.3-2.1 1.5 0 1.6 2.3 3.9 0.1 0 1.2 4.3 0.6 1.4 1.5 2.7 0.6 1.5 0.4 1.7-0.5 3.7-1.8 0.3-2.3-0.8-1.5 0.2 0.3 2.2 4.2 3.8 0 1.8-2.2 1-2.9-0.1-5.2-1.5-2-1 0.3-1.1 0.8-3-0.1-1.1-0.4-0.6-0.8-2.1 1.2-7 0.2-0.6 0.3-0.7 0.3-0.6 0.9-1.1 0.2-0.6-0.1-0.7-0.2-0.7-0.1-0.6-0.4-0.5-0.6-0.6-0.1-0.6 1.1-0.6-0.5-0.4-0.6-0.2-0.6-0.1-0.7 0.1 0.7-2.7 0.5-1.1 1.5-0.7 0-0.5-0.4-0.5-0.5-0.3-0.6 0.3-0.6 0.7-0.6 0.4-0.4-0.3 0-0.6 0.9-0.9 0.3-0.6-0.3-0.7-1.1-0.9-0.7-1.9-1-0.1-2.5 0.4 0.9-1.5 0.3-0.8-0.6-0.3-0.9 0.3-0.8 0.5-0.8 0.3-0.9-0.6 0.8-1-0.2-1-0.6-0.9-0.8-0.8-0.4-0.1-0.4 0.1-0.4-0.1-0.4-0.3-0.1-0.4 0.1-0.9 0-0.3-0.6-1.3-0.3-0.4-0.7-0.5-1.5-0.8-0.4-0.3-0.5-0.5-0.6-1.3-0.5-0.7-0.9-0.7-1.3-0.5-1.3-0.3-0.9 0.4-0.2-1.3-0.2-0.5-0.2 0-0.5 0.4-0.3-0.2-0.2-0.6-0.1-1.8-0.2-0.8-0.4-0.7-3-2.7 2.3-1 1.2-1.4 1.1-3.1 1.1-3.1 0.7-0.9 0.9-0.9 2-0.9 1.9-0.9 1.5-2.5 0.4-0.5 0.3-0.5 1.2-0.4 2.5-0.3 1.1-0.5 1-0.5 1-0.7 1-0.7 1-1 0.5-0.9 0.4-3.7 0.5-3.6-0.1-1.3-0.1-0.9-0.2-0.3-0.3-0.2-0.5-0.7-0.2-0.6 0.3-0.6 0.5-0.4 2.7-1.3 1.1-0.3 1 0.4 0.6-1.6 1.5-1.4 1.5-1 1.6-1 1-0.3 1.7 0.7 0.8-0.1 2.3-1.5 0.8-0.2 1.8 0.3 1.7 0.3 0.7-0.4-0.1-0.8-1-1.8-0.2-0.8 0.4-1 0.4-1 1.5-1.2 3.3-1 3-2.4 2.9-2.3 0.9-1 0.8-0.9 1-0.8 3.9-1.1 3.9-1.1 3.3-0.1 3.2-0.2 2.4-1 1.8-2.1 0.8-1.2 0.9-0.7 1.6-0.6 1.6-0.6 4.9-3.6 0.7-0.9 0.7-0.8 2-3.5 2-3.4 0.8-0.9 1-0.5 1.1-0.4 0.9-0.5 0.8-0.8 0.2-0.7 0.2-0.7 1.4-3.2 1.3-1.1 1.2-1.1 5.7-2.4 0.8 0.1 1.1 0.8 0.9 1 0.5 1.1 0.4 1.4 0.9 0.9 1.2 0.5 1.4 0.2 0.9-0.4 0.9-0.4 1.2-2.3 0.6-1.5 0.5-1.4 1.3-2.6 0.9-0.9 0.8-1 0.6-1.1 0.5-1.4 0.8-1.2 1.4 0 2.7 0.7 2.2-0.3 1.1-0.5 1.1-0.6 3.9-3.2 1.3-1.2 2.5-2 1.9-0.2 1.8 0.8 8.2 5.8 2 0.7-0.8 3-2.2 1.5-4.8 1.4-8.2 6.1-2.4 0.6-2.9-0.1-2.3 0.6-1.1 2.9-0.1 4.5-0.7 1.3-2 0.8-5.8 0.6-1.8 1.1-5.7 4.9-2.5 3-1.7 3.7-1.4 2.1-1.8 1.1-1.9 1-3.4 2.7-9.4 5.6-1.3 2 1.1 2.5 2.1 1.1 8.2 0.9 0.1 0.1 2.1 1.3 1 0.9 0.9 1.1 1.4 2.7 0.9 0.8 1 0z m-64.4 8.3l-0.6-0.7 0.5-0.7-0.6-0.9-0.8-0.5 0.9-1.5-0.3-1.3-2.1-1.4-1.8-0.2-1.4-1-1.9 0.1-3.1 3.1-0.5 2.4-1.5 3.8 0.2 0.1 1-0.5 0.1 0.9 0.4 0.9 1.4 1.6 1-0.9 0 0.3-0.3 0.7 0.7 1.3 1.7 0.5 1.9-2.3 2.9-2.7 2.2-1.1z"
                                id="UZB372" class="tashkent" name="Tashkent">
                            </path>
                            <path
                                d="M779 342.2l-2.2 1.1-2.9 2.7-1.9 2.3-1.7-0.5-0.7-1.3 0.3-0.7 0-0.3-1 0.9-1.4-1.6-0.4-0.9-0.1-0.9-1 0.5-0.2-0.1 1.5-3.8 0.5-2.4 3.1-3.1 1.9-0.1 1.4 1 1.8 0.2 2.1 1.4 0.3 1.3-0.9 1.5 0.8 0.5 0.6 0.9-0.5 0.7 0.6 0.7z"
                                id="UZB4828" name="Tashkent">
                            </path>
                            <circle cx="673.4" cy="626" id="0">
                            </circle>
                            <circle cx="637.6" cy="506" id="1">
                            </circle>
                            <circle cx="636" cy="498.9" id="2">
                            </circle>
                        </svg>
                        <span class="karakalpakistan city">
                        <div class="number both-classes city-usual-style" @mouseover="showHide('karakalpakistan', true)"
                             @mouseout="showHide('karakalpakistan', false)">
                            3 711
                        </div>
                        <transition name="slide-fade">
                            <span v-show="karakalpakistan" class="place-title both-classes place-title-usual-style">
                                Каракалпакстан
                            </span>     
                        </transition>
                    </span>
                        <span class="navoi city">
                        <div class="number both-classes city-usual-style" @mouseover="showHide('navoi', true)"
                             @mouseout="showHide('navoi', false)">
                            15 331
                        </div>
                        <transition name="slide-fade">
                            <span v-show="navoi" class="place-title both-classes place-title-usual-style">
                                Навоий
                            </span>     
                        </transition>
                    </span>
                        <span class="khorezm city">
                        <div class="number both-classes city-usual-style-small" @mouseover="showHide('khorezm', true)"
                             @mouseout="showHide('khorezm', false)">
                            687
                        </div>
                        <transition name="slide-fade">
                            <span v-show="khorezm" class="place-title both-classes place-title-usual-style-small">
                                Хорезм
                            </span>     
                        </transition>
                    </span>
                        <span class="bukhoro city">
                        <div class="number both-classes city-usual-style" @mouseover="showHide('bukhoro', true)"
                             @mouseout="showHide('bukhoro', false)">
                            5 993
                        </div>
                        <transition name="slide-fade">
                            <span v-show="bukhoro" class="place-title both-classes place-title-usual-style">
                                Бухара
                            </span>     
                        </transition>
                    </span>
                        <span class="samarkand city">
                        <div class="number both-classes city-usual-style-small" @mouseover="showHide('samarkand', true)"
                             @mouseout="showHide('samarkand', false)">
                            771
                        </div>
                        <transition name="slide-fade">
                            <span v-show="samarkand" class="place-title both-classes place-title-usual-style-small">
                                Самарканд
                            </span>     
                        </transition>
                    </span>
                        <span class="kashkadarya city">
                        <div class="number both-classes city-usual-style" @mouseover="showHide('kashkadarya', true)"
                             @mouseout="showHide('kashkadarya', false)">
                            4 432
                        </div>
                        <transition name="slide-fade">
                            <span v-show="kashkadarya" class="place-title both-classes place-title-usual-style">
                                Кашкадарья
                            </span>     
                        </transition>
                    </span>
                        <span class="surkhandarya city">
                        <div class="number both-classes city-usual-style" @mouseover="showHide('surkhandarya', true)"
                             @mouseout="showHide('surkhandarya', false)">
                            6 322
                        </div>
                        <transition name="slide-fade">
                            <span v-show="surkhandarya" class="place-title both-classes place-title-usual-style">
                                Сурхандарья
                            </span>     
                        </transition>
                    </span>
                        <span class="jizzakh city">
                        <div class="number both-classes city-usual-style-small" @mouseover="showHide('jizzakh', true)"
                             @mouseout="showHide('jizzakh', false)" style="z-index: 999999;">
                            831
                        </div>
                        <transition name="slide-fade">
                            <span v-show="jizzakh" class="place-title both-classes place-title-usual-style-small"
                                  style="z-index: 99999;">
                                Джизак
                            </span>     
                        </transition>
                    </span>
                        <span class="sirdaryo city">
                        <div class="number both-classes city-usual-style-small" @mouseover="showHide('sirdaryo', true)"
                             @mouseout="showHide('sirdaryo', false)">
                            880
                        </div>
                        <transition name="slide-fade">
                            <span v-show="sirdaryo" class="place-title both-classes place-title-usual-style-small">
                                Сырдарья
                            </span>     
                        </transition>
                    </span>
                        <span class="tashkent city">
                        <div class="number both-classes city-usual-style-medium" @mouseover="showHide('tashkent', true)"
                             @mouseout="showHide('tashkent', false)">
                            8 557
                        </div>
                        <transition name="slide-fade">
                            <span v-show="tashkent" class="place-title both-classes place-title-usual-style-medium">
                                Ташкент
                            </span>     
                        </transition>
                    </span>
                        <span class="namangan city">
                        <div class="number both-classes city-usual-style-small" @mouseover="showHide('namangan', true)"
                             @mouseout="showHide('namangan', false)">
                            3 128
                        </div>
                        <transition name="slide-fade">
                            <span v-show="namangan" class="place-title both-classes place-title-usual-style-small">
                                Наманган
                            </span>     
                        </transition>
                    </span>
                        <span class="ferghana city">
                        <div class="number both-classes city-usual-style-small" @mouseover="showHide('ferghana', true)"
                             @mouseout="showHide('ferghana', false)">
                            3 351
                        </div>
                        <transition name="slide-fade">
                            <span v-show="ferghana" class="place-title both-classes place-title-usual-style-small">
                                Наманган
                            </span>     
                        </transition>
                    </span>
                        <span class="ferghana city">
                        <div class="number both-classes city-usual-style-small" @mouseover="showHide('ferghana', true)"
                             @mouseout="showHide('ferghana', false)" style="z-index: 999999;">
                            4 210
                        </div>
                        <transition name="slide-fade">
                            <span v-show="ferghana" class="place-title both-classes place-title-usual-style-small"
                                  style="z-index: 99999;">
                                Фергана
                            </span>     
                        </transition>
                    </span>
                        <span class="andijon city">
                        <div class="number both-classes city-usual-style-small" @mouseover="showHide('andijon', true)"
                             @mouseout="showHide('andijon', false)">
                            841
                        </div>
                        <transition name="slide-fade">
                            <span v-show="andijon" class="place-title both-classes place-title-usual-style-small">
                                Андижан
                            </span>     
                        </transition>
                    </span>
                    </div>
                    <div class="map-body-mobile">
                        <div>
                            <img src="../assets/img/map.png" alt="карта" class="w-100">
                        </div>
                    </div>
                </div>
            </div>
            <div class="winter-is-coming">
                <div class="snow snow--near"></div>
                <div class="snow snow--near snow--alt"></div>
                
                <div class="snow snow--mid"></div>
                <div class="snow snow--mid snow--alt"></div>
                
                <div class="snow snow--far"></div>
                <div class="snow snow--far snow--alt"></div>
            </div>
        </section>

        <footerComponent></footerComponent>

        <div class="modal fade bd-example-modal-lg video-60-landing" id="exampleModal" tabindex="-1" role="dialog"
             aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog modal-lg" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLabel"></h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">
                        <iframe width="560" height="315" :src="firstVideoLink"
                                frameborder="0"
                                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                                allowfullscreen></iframe>
                    </div>
                    <div class="modal-footer d-none">
                        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                        <button type="button" class="btn btn-primary">Save changes</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script src="../tgFunction.js"></script>

<script>

import headerComponent from './headerComponent'
import footerComponent from './footerComponent'

import translate from './../translation/translate'
import mixin from './../gtagMixin'

import {
    ClockIcon,
    InboxIcon,
    MapPinIcon,
    Edit2Icon,
    FolderIcon,
    AlertTriangleIcon,
    XIcon 
} from 'vue-feather-icons'

export default {
    name: 'landingPage',
    mixins: [mixin],
    data() {
        return {
            anotherSources: null,
            picked: null,
            maxHoveredMap: 1,
            maxHOverUzb: 1,
            card1: false,
            card2: false,
            card3: false,
            card4: false,
            card5: false,
            card6: false,
            docsCuantity: null,
            moreThan5000: false,
            loadingGif: false,
            pickedRate: {
                name: null,
                price: null,
                cuantity: null,
                limit: null,
                everyDocPrice: null,
                isVisible: null
            },
            infoBlockImg: require("../assets/img/Guide/default.png"),
            karakalpakistan: false,
            navoi: false,
            khorezm: false,
            bukhoro: false,
            samarkand: false,
            kashkadarya: false,
            surkhandarya: false,
            jizzakh: false,
            sirdaryo: false,
            tashkent: false,
            namangan: false,
            ferghana: false,
            andijon: false,
            isScrolled: false,
            stepsForStarting: true,
            panelTutorialVideo: true,
            translation: translate,
            firstVideoLink: null,
            secondVideoLink: null,
            thirdVideoLink: null,
            currentTime: 10,
            gybridPochta: true,
            fourthVideoLinks: null
        }
    },
    components: {
        headerComponent,
        ClockIcon,
        InboxIcon,
        MapPinIcon,
        Edit2Icon,
        FolderIcon,
        AlertTriangleIcon,
        footerComponent,
        XIcon 
    },
    computed: {
        ratesBase() {
            return [
                {
                    name: "(5)",
                    price: this.translation.translate('priceTable', 'free'),
                    cuantity: 5,
                    limit: "800",
                    everyDocPrice: "0",
                    isVisible: "class1",
                    link: "https://app.faktura.uz/ru/servicepackage/preview/1"
                },
                {
                    name: "(50)",
                    price: "45 000 " + this.translation.translate('priceTable', 'summ'),
                    cuantity: 50,
                    limit: "800 ",
                    everyDocPrice: "900 ",
                    isVisible: "class2",
                    link: "https://app.faktura.uz/ru/servicepackage/preview/2"
                },
                {
                    name: " (125)",
                    price: "105 000 " + this.translation.translate('priceTable', 'summ'),
                    cuantity: 125,
                    limit: "800 ",
                    everyDocPrice: "840 ",
                    isVisible: "class3",
                    link: "https://app.faktura.uz/ru/servicepackage/preview/3"
                },
                {
                    name: " (250)",
                    price: "190 000 " + this.translation.translate('priceTable', 'summ'),
                    cuantity: 250,
                    limit: "800 ",
                    everyDocPrice: "760 ",
                    isVisible: "class4",
                    link: "https://app.faktura.uz/ru/servicepackage/preview/4"
                },
                {
                    name: " (500)",
                    price: "345 000 " + this.translation.translate('priceTable', 'summ'),
                    cuantity: 500 ,
                    limit: "800 ",
                    everyDocPrice: "690 ",
                    isVisible: "class5",
                    link: "https://app.faktura.uz/ru/servicepackage/preview/5"
                },
                {
                    name: " (1000)",
                    price: "650 000 " + this.translation.translate('priceTable', 'summ'),
                    cuantity: 1000 ,
                    limit: "800 ",
                    everyDocPrice: "650 ",
                    isVisible: "class6",
                    link: "https://app.faktura.uz/ru/servicepackage/preview/6"
                },
                {
                    name: " (1500)",
                    price: "952 500 " + this.translation.translate('priceTable', 'summ'),
                    cuantity: 1500 ,
                    limit: "800 ",
                    everyDocPrice: "635 ",
                    isVisible: "class7",
                    link: "https://app.faktura.uz/ru/servicepackage/preview/9"
                },
                {
                    name: " (2000)",
                    price: "1 250 500 " + this.translation.translate('priceTable', 'summ'),
                    cuantity: 2000 ,
                    limit: "800 ",
                    everyDocPrice: "625 ",
                    isVisible: "class8",
                    link: "https://app.faktura.uz/ru/servicepackage/preview/8"
                },
                {
                    name: " (2500)",
                    price: "1 500 000 " + this.translation.translate('priceTable', 'summ'),
                    cuantity:  2500 ,
                    limit: "800 ",
                    everyDocPrice: "600 ",
                    isVisible: "class8",
                    link: "https://app.faktura.uz/ru/servicepackage/preview/7"
                },
                {
                    name: " (5000)",
                    price: "2 750 000 " + this.translation.translate('priceTable', 'summ'),
                    cuantity:  5000,
                    limit: "800 ",
                    everyDocPrice: "550 ",
                    isVisible: "class10",
                    link: "https://app.faktura.uz/ru/servicepackage/preview/10"
                },
                {
                    name: this.translation.translate('landingPageHome', 'morethan5000priceTitle'), 
                    price: this.translation.translate('landingPageHome', 'morethan5000pricePrice'),
                    cuantity:  null,
                    limit: null,
                    everyDocPrice: null,
                    isVisible: true,
                    link: "https://t.me/Salokhiddin_Sattarov"
                }
            ]
        }
    },
    watch: {
        currentTime(time) {
          if (time === 0) {
            this.stopTimer()
          }
        }
    },
    methods: {
        // async  getFormValues  (){
        //     let form = await document.querySelector('.feedbak textarea')
        //     console.log(form);
        //     var answer = await `${form.value}`
        //     console.log(answer);
        //     const botToken = '1438009177:AAFbe7wRiS3w6k_Y28iYFw406fEkr3q5XJQ';
        //     const toWhom = '705714423';
        //     fetch(`https://api.telegram.org/bot${botToken}/sendMessage?chat_id=${toWhom}&parse_mode=html&text=${answer}`,{method: 'POST'})
        //     .then(() =>{
        //         form.value = ''
        //     })
        // },
        stopTimer() {
            clearTimeout(this.timer);
            this.takePhoneDiv = true
        },
        startTimer() {
            this.takePhoneDiv = false;
            this.currentTime = 1;
            this.timer = setInterval(() => {
              this.currentTime--
            }, 1000)
        },
        beforepicking() {
            this.callGtag('Сгенерировано тарифов,get_price,click');
            this.loadingGif = true
            this.pickFunction();
        },
        testFunc() {
            this.callGtag('1c реклама,1с,click')
        },
        pickFunction() {
            var self = this;
            self.pickedRate.isVisible = false
            setTimeout(function () {
                if (self.docsCuantity > 5000) {
                    self.moreThan5000 = true
                    self.pickedRate = self.ratesBase[10]
                    self.pickedRate.isVisible = true
                    self.loadingGif = false
                } else if (self.docsCuantity != null && self.docsCuantity != "") {
                    self.moreThan5000 = false
                    if (Number(self.docsCuantity) >= "0" && Number(self.docsCuantity) <= "5") {
                        self.pickedRate = self.ratesBase[0]
                        self.pickedRate.isVisible = true
                        self.loadingGif = false
                    } else if (Number(self.docsCuantity) > "5" && Number(self.docsCuantity) <= "50") {
                        self.pickedRate = self.ratesBase[1]
                        self.pickedRate.isVisible = true
                        self.loadingGif = false
                    } else if (Number(self.docsCuantity) > "50" && Number(self.docsCuantity) <= "125") {
                        self.pickedRate = self.ratesBase[2]
                        self.pickedRate.isVisible = true
                        self.loadingGif = false
                    } else if (Number(self.docsCuantity) > "125" && Number(self.docsCuantity) <= "250") {
                        self.pickedRate = self.ratesBase[3]
                        self.pickedRate.isVisible = true
                        self.loadingGif = false
                    } else if (Number(self.docsCuantity) > "250" && Number(self.docsCuantity) <= "500") {
                        self.pickedRate = self.ratesBase[4]
                        self.pickedRate.isVisible = true
                        self.loadingGif = false
                    } else if (Number(self.docsCuantity) > "500" && Number(self.docsCuantity) <= "1000") {
                        self.pickedRate = self.ratesBase[5]
                        self.pickedRate.isVisible = true
                        self.loadingGif = false
                    } else if (Number(self.docsCuantity) > "1000" && Number(self.docsCuantity) <= "1500") {
                        self.pickedRate = self.ratesBase[6]
                        self.pickedRate.isVisible = true
                        self.loadingGif = false
                    } else if (Number(self.docsCuantity) > "1500" && Number(self.docsCuantity) <= "2000") {
                        self.pickedRate = self.ratesBase[7]
                        self.pickedRate.isVisible = true
                        self.loadingGif = false
                    } else if (Number(self.docsCuantity) > "2000" && Number(self.docsCuantity) <= "2500") {
                        self.pickedRate = self.ratesBase[8]
                        self.pickedRate.isVisible = true
                        self.loadingGif = false
                    } else if (Number(self.docsCuantity) > "2500" && Number(self.docsCuantity) <= "5000") {
                        self.pickedRate = self.ratesBase[9]
                        self.pickedRate.isVisible = true
                        self.loadingGif = false
                    }
                }
            }, 750)
        },
        callGuide(type) {
            /* eslint-disable no-debugger */
            if (this.maxHoveredMap == 1) {
                this.maxHoveredMap -= this.maxHoveredMap
            }

            if (type == "inbox") {
                this.infoBlockImg = require("../assets/img/Guide/inbox.png")
            } else if (type == "documents") {
                this.infoBlockImg = require("../assets/img/Guide/documents.png")
            } else if (type == "cuonterparties") {
                this.infoBlockImg = require("../assets/img/Guide/cuonterparties.png")
            } else if (type == "createDocument") {
                this.infoBlockImg = require("../assets/img/Guide/createDocument.png")
            } else if (type == "workPlace") {
                this.infoBlockImg = require("../assets/img/Guide/workPlace.png")
            } else if (type == "outbox") {
                this.infoBlockImg = require("../assets/img/Guide/outbox.png")
            } else if (type == "draft") {
                this.infoBlockImg = require("../assets/img/Guide/draft.png")
            } else if (type == "import") {
                this.infoBlockImg = require("../assets/img/Guide/import.png")
            } else if (type == "rejected") {
                this.infoBlockImg = require("../assets/img/Guide/rejected.png")
            } else if (type == "removed") {
                this.infoBlockImg = require("../assets/img/Guide/removed.png")
            } else if (type == "archive") {
                this.infoBlockImg = require("../assets/img/Guide/archive.png")
            } else if (type == "annul") {
                this.infoBlockImg = require("../assets/img/Guide/annul.png")
            } else if (type == "attachments") {
                this.infoBlockImg = require("../assets/img/Guide/attachments.png")
            } else if (type == "alldocuments") {
                this.infoBlockImg = require("../assets/img/Guide/alldocuments.png")
            } else if (type == "agreement") {
                this.infoBlockImg = require("../assets/img/Guide/agreement.png")
            } else if (type == "index") {
                this.infoBlockImg = require("../assets/img/Guide/index.png")
            } else if (type == "verify") {
                this.infoBlockImg = require("../assets/img/Guide/verify.png")
            } else if (type == "invitePartner") {
                this.infoBlockImg = require("../assets/img/Guide/invitePartner.png")
            } else if (type == "headerDetails") {
                this.infoBlockImg = require("../assets/img/Guide/headerDetails.png")
            } else if (type == "fakturaedi") {
                this.infoBlockImg = require("../assets/img/Guide/fakturaedi.png")
            } else if (type == "sync") {
                this.infoBlockImg = require("../assets/img/Guide/sync.png")
            } else if (type == "myData") {
                this.infoBlockImg = require("../assets/img/Guide/myData.png")
            } else if (type == "currentPage") {
                this.infoBlockImg = require("../assets/img/Guide/currentPage.png")
            } else if (type == "signSend") {
                this.infoBlockImg = require("../assets/img/Guide/signSend.png")
            } else if (type == "cancelDelete") {
                this.infoBlockImg = require("../assets/img/Guide/cancelDelete.png")
            } else if (type == "send") {
                this.infoBlockImg = require("../assets/img/Guide/send.png")
            } else if (type == "markAs") {
                this.infoBlockImg = require("../assets/img/Guide/markAs.png")
            } else if (type == "moveIntoSubdivisions") {
                this.infoBlockImg = require("../assets/img/Guide/moveIntoSubdivisions.png")
            } else if (type == "filtr") {
                this.infoBlockImg = require("../assets/img/Guide/filtr.png")
            } else if (type == "docInfo") {
                this.infoBlockImg = require("../assets/img/Guide/docInfo.png")
            } else if (type == "сontract") {
                this.infoBlockImg = require("../assets/img/Guide/сontract.png")
            } else if (type == "sum") {
                this.infoBlockImg = require("../assets/img/Guide/sum.png")
            } else if (type == "cuonterpartier") {
                this.infoBlockImg = require("../assets/img/Guide/cuonterpartier.png")
            } else if (type == "status") {
                this.infoBlockImg = require("../assets/img/Guide/status.png")
            } else if (type == "exportExcel") {
                this.infoBlockImg = require("../assets/img/Guide/exportExcel.png")
            }
        },
        showHide(cityName, value) {
            if (this.maxHOverUzb == 1) {
                this.maxHOverUzb -= this.maxHOverUzb
            }
            this[cityName] = value
        },
        defaultImage() {
            this.infoBlockImg = require("../assets/img/Guide/default.png")
        },
        updateScroll() {
            this.scrollPosition = window.scrollY
            if (this.scrollPosition > 100) {
                this.isScrolled = true;
            } else {
                this.isScrolled = false;
            }
        }
    },
    metaInfo() {
        return { 
            title: "Электронный документооборот в Узбекистане - внедрение ЭДО",
            meta: [
                { name: 'description', content:  'Ведение электронного документооборота(ЭДО) в Узбекистане.⏩  Faktura - программа электронного документооборота онлайн. ⏩  Адекватная цена. ☎️: +998 (71) 200-00-13.'},
                { name: 'keywords', content:  'faktura, faktura uz, soliq faktura, faktura soliq uz, e faktura, e faktura uz, soliq servis uz faktura, soliq servis faktura, faktura ru, e faktura soliq uz, e faktura soliq, soliq servis uz faktura ru, uzasbo faktura, soliqservis uz faktura, online faktura uz, my soliq, my soliq uz, soliq servis, soliq uz электронная, hisobot soliq uz, may soliq, may soliq uz, tasnif soliq uz, фактура, счет фактура, фактура уз, солик фактура, фактура узбекистана, счет фактура узбекистан, е фактура, фактура солик уз, электронный фактура, электронные счета фактуры, солик сервис уз фактура, сервис фактура, выставить фактуру'}
            ]
        }
    },
    // created() {
    //     this.startTimer()
    // },
    destroyed() {
        this.stopTimer()
    },
}
</script>

<style>

.popup-close-icon {
    position: absolute;
    top: 10px;
    right: 10px;
    color: #f6c128;
    width: 28px;
    height: 28px;
    cursor: pointer;
}

.google-forms-scene {
    background: #0000009e;
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    z-index: 99999;
}

.google-forms-block {
    text-align: center;
    justify-content: center;
    display: flex;
    position: fixed;
    top: 90px;
    right: 0;
    left: 0;
    z-index: 999999;
}

.google-forms-block .google-forms {
    width: 50%;
    background: white;
    border-radius: 35px;
    position: relative;
}

.google-forms {
    position: relative;
    top: 0;
}

.video-60-landing iframe {
    width: 100%;
    height: 433px;
}

.video-60-landing .modal-content {
    background: #1d2a3600;
    border: none;
}

.video-60-landing .modal-header {
    display: none;
}

.main-page {
    position: inherit;
}

.add1 {
    width: 100%;
    display: flex;
    justify-content: center;
}
.add1 img {
    width: 820px;
    box-shadow: 0 0 35px rgba(0,0,0,0.5);
    cursor: pointer;
    transition: all 0.15s ease;
}
.add1 img:hover {
    box-shadow: 0 0 15px rgba(0,0,0,0.5);
}
.add1 a {
    position: absolute;
    top: -135px;
}

</style>
