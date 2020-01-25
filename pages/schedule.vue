<template lang="pug">
    #body-wrapper
        main.schedule
        h1 2020 Schedule
        ul
            li(v-for="(talk, index) in schedule" :key="index")
                h4 {{talk.event}}
                h5 {{ talk.time | formatDateString }}
                h5 {{talk.location}}
                h6 {{talk.speaker}}
                p {{talk.description}}
    
</template>
<script>
    import moment from 'moment';

    export default {
        computed: {
            schedule() {
                let events = this.$store.state.speakers.map(s => ({
                  event: s.talkTitle,
                  speaker: s.name,
                  time: s.talkTime,
                  location: s.talkLocation,
                  description: s.talkDescription  
                }));

                events.sort(function(event1, event2) {
                    if (event1.time < event2.time) return -1;
                    if (event1.time > event2.time) return 1;

                    if (event1.location < event2.location) return -1;
                    if (event1.location > event2.location) return 1;
                });
                return events;
            }
        },
        filters: {
            formatDateString: function(dateString) {
                if (dateString) {
                    return moment(String(dateString)).format('MM/DD/YYYY hh:mm a');
                }
            }
        }
    }
</script>
