<template>
    <div class="1cNewPage">
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
    </div>
</template>

<script>

export default ({
    name: '1cNewPage',

})
</script>

<style scoped>



</style>

