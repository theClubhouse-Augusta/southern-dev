<template lang="pug">
    #body-wrapper
        main.schedule
        h1 2020 Schedule
        ul
            li(v-for="(talk, index) in schedule" :key="index")
                h4 {{talk.event}}
                h5 {{talk.time}}
                h5 {{talk.location}}
                h6 {{talk.speaker}}
                p {{talk.description}}
    
</template>
<script>
    export default {
        computed: {
            schedule() {
                return this.$store.state.speakers.map(s => ({
                  event: s.talkTitle,
                  speaker: s.name,
                  time: s.talkTime,
                  location: s.talkLocation,
                  description: s.talkDescription  
                }));
            }
        }
    }
</script>
