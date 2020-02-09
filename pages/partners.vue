<template lang="pug">
    #body-wrapper
        main.sponsors
            h1 2020 Partners
            template(v-if="partners.platinum.length")
                h3 Platinum Sponsors
                ul 
                    li(v-for="(partner, index) in partners.platinum" :key="index")
                        img(:src="require(`~/assets/${partner.image}`)")
            template(v-if="partners.gold.length")
                h3 Gold Sponsors
                ul 
                    li(v-for="(partner, index) in partners.gold" :key="index")
                        img(:src="require(`~/assets/${partner.image}`)")
            template(v-if="partners.silver.length")
                h3 Silver Sponsors
                ul 
                    li(v-for="(partner, index) in partners.silver" :key="index")
                        img(:src="require(`~/assets/${partner.image}`)")
            template(v-if="partners.community.length")
                h3 Community Sponsors
                ul 
                    li(v-for="(partner, index) in partners.community" :key="index")
                        img(:src="require(`~/assets/${partner.image}`)")
</template>
<script>
    export default {
        computed: {
            partners() {
                let partners = {};
                partners.community = [];
                partners.silver = [];
                partners.gold = [];
                partners.platinum = [];
                let allPartners = this.$store.state.partners;
                for (let i = 0; i < allPartners.length; i++) {
                    if (allPartners[i].partnerLevel === 'Community') {
                        partners.community.push(allPartners[i]);
                    } else if (allPartners[i].partnerLevel === 'Silver') {
                        partners.silver.push(allPartners[i]);
                    } else if (allPartners[i].partnerLevel === 'Gold') {
                        partners.gold.push(allPartners[i]);
                    } else if (allPartners[i].partnerLevel === 'Platinum') {
                        partners.platinum.push(allPartners[i]);
                    }
                }
                return partners;
            }
        }
    }
</script>