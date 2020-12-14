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
