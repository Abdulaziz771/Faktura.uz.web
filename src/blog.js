import translate from './translation/translate.js'
var translation = translate;
var a = [
    {
        img: require("../src/assets/img/blog/blog2.jpg"), // 600 x 600 разрешение
        title: translation.translate('blog', 'blog1Text1'),
        titleRoute: "преимущества-электронного-документооборота",
        data: "05:00 / 17.02.2021"
    },
    {
        img: require("../src/assets/img/blog/blog11.png"), // 600 x 600 разрешение
        title: translation.translate('blog', 'blog2Text1'),
        titleRoute: "основные-принципы-электронного-документооборота",
        data: "05:00 / 17.02.2021"
    },
    {
        img: require("../src/assets/img/blog/blog3.png"), // 600 x 600 разрешение
        title: translation.translate('blog', 'blog3Text1'),
        titleRoute: "soliq-qomitasining-489-sonli-qarori",
        data: "17:15 / 19.02.2021"
    }
]
export default a

