import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter);

const router = new VueRouter({
    mode: "history",
    routes: [
        {
            path: "/ru/price",
            redirect: { 
                name: 'price'
            }
        },
        {
            path: "/ru/news/faktura-uz-как-с-этим-жить",
            redirect: { 
                name: 'tech-support'
            }
        },
        {
            path: "/ru/news/как-платить",
            redirect: { 
                name: 'tech-support'
            }
        },
        { 
            path: "*", 
            component: () => import('../components/LandingPage')
        },
        // paths
        {
            path: '/',
            name: 'home',
            component: () => import('../components/LandingPage'),
        },
        {
            path: '/video-tutorials',
            name: 'video-lessons',
            component: () => import('../components/videoLessons'),
        },
        {
            path: '/price',
            name: 'price',
            component: () => import('../components/price'),
        },
        {
            path: '/tech-support',
            name: 'tech-support',
            component: () => import('../components/techSupportComponent'),
        },
        {
            path: '/updates',
            name: 'updates',
            component: () => import('../components/updatesComponent')
        },
        //UPDATES POST HERE
        {
            path: '/update/update-system-1',
            name: 'update-system-1',
            component: () => import('../components/update-system/updateSystem1')
        },
        {
            path: '/update/update-system-2',
            name: 'update-system-2',
            component: () => import('../components/update-system/updateSystem2')
        },
        //OVER HERE
        {
            path: '/FAQ',
            name: 'FAQ',
            component: () => import('../components/faqComponent')
        },
        {
            path: '/other-projects',
            name: 'other-projects',
            component: () => import('../components/otherProjects')
        },
        {
            path: '/1c-modules',
            name: '1с',
            component: () => import('../components/1cComponent')
        },
        {
            path: '/about-faktura',
            name: 'about-faktura',
            component: () => import('../components/aboutFaktura')
        },
        {
            path: '/compare',
            name: 'compare',
            component: () => import('../components/compareComponent')
        },
        {
            path: '/sitemap',
            name: 'sitemap',
            component: () => import('../components/siteMapComponent')
        },
        {
            path: '/oferta-ru',
            name: 'oferta-ru',
            component: () => import('../components/publicOfferta')
        },
        {
            path: '/нормативно-правовая-база',
            name: 'нормативно-правовая-база',
            component: () => import('../components/lawsEDO')
        },
        {
            path: '/rukovodstvo-polzovatelya',
            name: 'rukovodstvo-polzovatelya',
            component: () => import('../components/rukovodstvoPolzovaniya')
        },
    ],
    scrollBehavior() {
        return {x: 0, y: 0}
    }
});

export default router