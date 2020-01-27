<template lang="pug">
  #body-wrapper
    main.news-list
      header
        h1 Catch Up On What We Are Doing
      ul(v-for="(newsPost, index) in newsPosts" :key="index")
        nuxt-link(:to="`/news/${newsPost.slug}`") {{newsPost.title}}
        p {{newsPost.body.slice(0, 20)}}...
</template>
<script>
export default {
  computed: {
    newsPosts() {
      return this.$store.state.newsPosts;
    }
  }
}
</script>
<style lang="sass" scoped>
h1
  font-size: 4rem
  background-color: $blue1
  color: $blue7
  font-weight: bold
</style>