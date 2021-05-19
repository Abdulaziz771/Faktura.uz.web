import translate from './translation/translate.js'
var translation = translate;
var a = [
    // {
    //     imgMain: null, // 1052 x 372 разрешение
    //     imgSecondary: require("../src/assets/img/blog/Osnovnie Principi/osnovnie-mini.png"), // 165 x 104 разрешение
    //     title: translation.translate('blog', 'blog2Text1'),
    //     titleRoute: "основные-принципы-электронного-документооборота",
    //     data: "05:00 / 17.02.2021"
    // },
    {
        imgMain: null, // 1052 x 372 разрешение
        imgSecondary: require("../src/assets/img/blog/Preimushestva Elektronnogo/blog2.jpg"), // 165 x 104 разрешение
        title: translation.translate('blog', 'blog1Text1'),
        titleRoute: "преимущества-электронного-документооборота",
        data: "05:00 / 17.02.2021"
    },
    {
        imgMain: null, // 1052 x 372 разрешение
        imgSecondary: require("../src/assets/img/blog/Preduprejdenie/blog3.jpg"), // 165 x 104 разрешение
        title: translation.translate('blog', 'blog3Text1'),
        titleRoute: "soliq-qomitasining-489-sonli-qarori",
        data: "17:15 / 19.02.2021"
    }
]
export default a