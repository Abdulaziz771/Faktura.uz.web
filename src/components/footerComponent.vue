<template>
    <div class="position-relative">
        <footer id="footer-f">
            <div class="container-fluid">
                <div class="doc-body">
                    <div class="footer-top text-center d-flex">
                        <div class="left-line position-relative">
                            <div class="d-flex left-child position-relative">
                                <div>
                                    <ul class="text-left">
                                        <li><router-link :to="{ name: 'compare' }">{{ translation.translate('footer','compare') }}</router-link></li>
                                        <li class="mt-2"><a href="https://api.faktura.uz/help/" target="_blank" @click="callGtag('API переходы,api_href,click')">API</a></li>
                                        <li class="mt-2"><router-link :to="{ name: '1с' }">1C</router-link></li>
                                    </ul>
                                </div>
                                <div>
                                    <ul class="text-left">
                                        <li><router-link :to="{ name: 'about-faktura' }">Faktura.uz</router-link></li>
                                        <li class="mt-2"><router-link :to="{ name: 'other-projects' }">{{ translation.translate('footer','outOtherProjects') }}</router-link> </li>
                                        <li class="mt-2"><router-link :to="{ name: 'video-lessons' }">{{ translation.translate('footer','videoLessons') }}</router-link></li>
                                        <li class="mt-2"><router-link :to="{ name: 'нормативно-правовая-база' }">{{ translation.translate('footer','lexuzDocumentation') }}</router-link></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div class="center-logo">
                            <img class="footer-center-logo" src="../assets/img/logo-shadow.png" alt="faktura.uz logo">
                        </div>
                        <div class="right-line position-relative">
                            <div class="right-child d-flex position-relative justify-content-end">
                                <div>
                                    <ul class="text-left">
                                        <li class="instagram"><a href="https://www.instagram.com/faktura.uz/" target="_blank"><img style="width: 20px;" class="mr-1" src="../assets/img/smm-instagram-logo.png" alt="Faktura.uz instagram"> Instagram</a></li>
                                        <li class="facebook mt-2"><a href="https://www.facebook.com/faktura.uz/" @click='callGtag("Facebook переходы,facebook_smm,click")' target="_blank"><img style="width: 20px;" class="mr-1" src="../assets/img/smm-facebook-logo.png" alt="Faktura.uz facebook"> FaceBook</a> </li>
                                        <li class="telegram mt-2"><a href="https://t.me/fakturauz" @click='callGtag("Телеграм переходы,telegram_smm,click")' target="_blank"><img style="width: 20px;" class="mr-2" src="../assets/img/smm-telegram-logo.png" alt="Faktura.uz telegramm">Telegram</a></li>
                                    </ul>
                                </div>
                                <div>
                                    <ul class="text-left">
                                        <li><a href="tel:+998 71 200 00 13">+998 71 200 00 13</a></li>
                                        <li class="mt-2"><a href="tel:+998 94 684 46 33">+998 94 684 46 33</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="footer-map">
                        <iframe src="https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d1499.9718681509871!2d69.20468374953117!3d41.33780112337828!3m2!1i1024!2i768!4f13.1!5e1!3m2!1sru!2s!4v1596528237373!5m2!1sru!2s" width="600" height="450" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
                    </div>
                    <div class="footer-footer">
                        <div class="footer-line"></div>
                        <div class="footer-details d-flex">
                            <div class="rights">
                                {{ translation.translate('footer','inc') }}
                            </div>
                            <div class="sitemap-ppy">
                                <ul class="d-flex">
                                    <li class="pr-3"><a href="">{{ translation.translate('footer','privacyPolicy') }}</a></li>
                                    <li class="pl-3 pr-3"><router-link :to="{ name: 'sitemap' }">{{ translation.translate('footer','siteMap') }}</router-link></li>
                                    <li class="pl-3 pr-3"><router-link :to="{ name: 'oferta-ru' }">{{ translation.translate('footer','publicOfferta') }}</router-link></li>
                                </ul>
                            </div>
                            <div class="country">
                               <img src="../assets/img/flag-button-round-250.png" class="mb-1" style="width: 17px;" alt="uzbekistan-flag faktura">
                               <span>Uzbekistan</span>
                            </div>
                        </div>
                    </div>
                    <div class="body-mobile">
                        <div class="row mobile-footer-sections pt-5 pb-5">
                            <div class="col-6 col-md-3">
                                <div>
                                    <ul class="text-left">
                                        <li><router-link :to="{ name: 'compare' }">{{ translation.translate('footer','compare') }}</router-link></li>
                                        <li class="mt-2"><a href="https://api.faktura.uz/help/" @click='callGtag("API переходы,api_href,clikc")' target="_blank">API</a></li>
                                        <li class="mt-2"><router-link :to="{ name: '1с' }">1C</router-link></li>
                                    </ul>
                                </div>
                            </div>
                            <div class="col-6 col-md-3">
                                <div>
                                    <ul class="text-left">
                                        <li><router-link :to="{ name: 'about-faktura' }">Faktura.uz</router-link></li>
                                        <li class="mt-2"><router-link :to="{ name: 'other-projects' }">{{ translation.translate('footer','outOtherProjects') }}</router-link> </li>
                                        <li class="mt-2"><router-link :to="{ name: 'video-lessons' }">{{ translation.translate('footer','videoLessons') }}</router-link></li>
                                    </ul>
                                </div>
                            </div>
                            <div class="col-6 col-md-3">
                                <div>
                                    <ul class="text-left">
                                        <li class="instagram"><a href="https://www.instagram.com/faktura.uz/"  target="_blank"><img style="width: 20px;" class="mr-1" src="../assets/img/smm-instagram-logo.png" alt=""> Instagram</a></li>
                                        <li class="facebook mt-2"><a href="https://www.facebook.com/faktura.uz/" @click='callGtag("Facebook переходы,facebook_smm,click")' target="_blank"><img style="width: 20px;" class="mr-1" src="../assets/img/smm-facebook-logo.png" alt=""> FaceBook</a> </li>
                                        <li class="telegram mt-2"><a href="https://t.me/fakturauz" @click='callGtag("Телеграм переходы,telegram_smm,click")' target="_blank"><img style="width: 20px;" class="mr-2" src="../assets/img/smm-telegram-logo.png" alt="">Telegram</a></li>
                                    </ul>
                                </div>
                            </div>
                            <div class="col-6 col-md-3">
                                <div>
                                    <ul class="text-left">
                                        <li><a href="tel:+998 71 200 00 13">+998 71 200 00 13</a></li>
                                        <li class="mt-2"><a href="tel:+998 94 684 46 33">+998 94 684 46 33</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <iframe class="mobile-map" src="https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d1499.9718681509871!2d69.20468374953117!3d41.33780112337828!3m2!1i1024!2i768!4f13.1!5e1!3m2!1sru!2s!4v1596528237373!5m2!1sru!2s" width="600" height="450" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
                    </div>
                </div>
            </div>
        </footer>
        <div class="winter-is-coming">
                <div class="snow snow--near"></div>
                <div class="snow snow--near snow--alt"></div>
                
                <div class="snow snow--mid"></div>
                <div class="snow snow--mid snow--alt"></div>
                
                <div class="snow snow--far"></div>
                <div class="snow snow--far snow--alt"></div>
            </div>
    </div>
</template>

<script>
import translate from '../translation/translate'
import mixin from './../gtagMixin'
export default {
  name: 'footers',
  mixins: [mixin],
  data() {
      return {
        translation: translate
      }
  }
}
</script>

<style>


</style>
