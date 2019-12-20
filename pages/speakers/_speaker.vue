<template>
    <speaker>
        <h1>{{speaker.name}}</h1>
        <h4>{{speaker.talkTitle}}</h4>
        <div v-html="$md.render(speaker.talkDescription)" />
    </speaker>
</template>
<script>
export default {
    async asyncData({params, payload}) {
        if (payload) return { speaker: payload }
        else {
            return {
                speaker: await require(`~/assets/content/speakers/${params.name}.json`)
            }
        }
    }
}
</script>