<template lang="pug">
    #body-wrapper
        main.sponsors
            h1 2020 Partners
            ul
                li(v-for="(partner, index) in partners" :key="index")
                    img(:src="require(`~/assets${partner.image}`)")
</template>
<script>
    export default {
        computed: {
            partners() {
                return this.$store.state.partners;
            }
        }
    }
</script>