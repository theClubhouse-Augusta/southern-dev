<template lang="pug">
    section.speakers
        h1.talk-title {{speaker.talkTitle}}
        div.speaker-info
            h4.speaker-name {{speaker.name}}
            h5.speaker-title {{speaker.speakerTitle}}
        div.content-row
            div.txt-container(v-html="$md.render(speaker.talkDescription)")
        div.bio
            img(:src="require(`~/assets${speaker.speakerImage}`)")
            div {{speaker.bio}}
</template>
<script>
export default {
    async asyncData({params, payload}) {
        if (payload) return { speaker: payload }
        else {
            return {
                speaker: await require(`~/assets/content/speakers/${params.speaker}.json`)
            }
        }
    }
}
</script>