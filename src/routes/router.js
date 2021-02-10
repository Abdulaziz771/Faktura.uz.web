import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter);

const router = new VueRouter({
    mode: "history",
    routes: [
        {
            path: "/ru/price",
            redirect: { 
                name: 'Тарифы',
            }
        },
        {
            path: "/ru/news/faktura-uz-как-с-этим-жить",
            redirect: { 
                name: 'Тех-поддержка'
            }
        },
        {
            path: "/ru/news/как-платить",
            title11: "Faktura.uz",
            redirect: { 
                name: 'Тех-поддержка',
            }
            
        },
        { 
            path: "*",
            name: "404", 
            component: () => import('../components/404')
        },
        // paths
        {
            path: '/',
            name: 'Главная',
            component: () => import('../components/LandingPage'),
        },
        {
            path: '/video-tutorials',
            name: 'Видеоуроки',
            component: () => import('../components/videoLessons'),
        },
        {
            path: '/price',
            name: 'Тарифы',
            component: () => import('../components/price'),
        },
        {
            path: '/tech-support',
            name: 'Тех-поддержка',
            component: () => import('../components/techSupportComponent'),
        },
        {
            path: '/updates',
            name: 'Обновления',
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
            name: 'Вопросы-ответы',
            component: () => import('../components/faqComponent')
        },
        {
            path: '/other-projects',
            name: 'Другие проэкты',
            component: () => import('../components/otherProjects')
        },
        {
            path: '/1c-modules',
            name: 'Модули 1С',
            component: () => import('../components/1cComponent')
        },
        {
            path: '/about-faktura',
            name: 'Системе',
            component: () => import('../components/aboutFaktura')
        },
        {
            path: '/compare',
            name: 'Сравнение',
            component: () => import('../components/compareComponent')
        },
        {
            path: '/sitemap',
            name: 'Карта сайта',
            component: () => import('../components/siteMapComponent')
        },
        {
            path: '/oferta-ru',
            name: 'Оферта',
            component: () => import('../components/publicOfferta')
        },
        {
            path: '/нормативно-правовая-база',
            name: 'Нормативно правовая база',
            component: () => import('../components/lawsEDO')
        },
        {
            path: '/rukovodstvo-polzovatelya',
            name: 'Руководство пользователя',
            component: () => import('../components/rukovodstvoPolzovaniya')
        },
        {
            path: '/blog',
            name: 'Блоги',
            component: () => import('../components/blog')
        },
        {
            path: '/blog/:titleRoute', 
            name: 'Блог',
            component: () => import('../components/blog-posts/blogPost1')
        },
    ],
    scrollBehavior() {
        return {x: 0, y: 0}
    }
})

router.beforeEach((to, from, next) => {
    document.title = `${ to.name } - ${ process.env.VUE_APP_TITLE }`;
    next();
})

export default router