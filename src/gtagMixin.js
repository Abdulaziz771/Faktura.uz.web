export default  {
    methods: {
        callGtag(value) {
            var analyicsFeatures = value.split(",");
            this.$gtag.query('event', analyicsFeatures[0], {
                event_category: analyicsFeatures[1],
                event_action: analyicsFeatures[2],
            });
        }
    }
}


// this.$gtag.query('event', 'Счет-фактура на главном', {
//     event_category: 'sch_main',
//     event_action: 'click',
// });

// this.$gtag.query('event', 'Акт и счет-фактура на главном', {
//     event_category: 'akt_sch_main',
//     event_action: 'click',
// });

// this.$gtag.query('event', 'Доверенность на главном', {
//     event_category: 'dvrn_main',
//     event_action: 'click',
// });

// this.$gtag.query('event', 'Акт сверки на главном', {
//     event_category: 'akt_svr_main',
//     event_action: 'click',
// });
