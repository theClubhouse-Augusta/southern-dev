<template>
    <div>
        <ul v-for="(speaker, index) in speakers" :key="index">
            <nuxt-link :to="`speakers/${speaker.slug}`">{{speaker.name}}</nuxt-link>
            <p>{{speaker.talkDescription}}</p>
        </ul>
    </div>
</template>
<script>
    export default {
        computed: {
            speakers() {
                return this.$store.state.speakers;
            }
        }
    }
</script>