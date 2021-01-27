import Vuex from 'vuex'
import Vue from 'vue'
import VueGtag from "vue-gtag";

Vue.use(VueGtag, {
    config: { id: "UA-1234567-1" }
});

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        currentLanguage: JSON.parse(localStorage.getItem('translation')) ? JSON.parse(localStorage.getItem('translation')) : { "localeName": "ru" },
        sidebarCondition: false
    },
    getters: {
        isSidebaerOpen(state) {
            return state.sidebarCondition
        },
        valueofCurrentLanguage(state) {
            return state.currentLanguage.localeName
        }
    },
    mutations: {
        toggleSidebar(state, value) {
            state.sidebarCondition = value
        }
    }
})