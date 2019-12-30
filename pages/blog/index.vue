<template lang="pug">
  #body-wrapper
    main.blog-list
      header
        h1 Catch Up On What We Are Doing
      ul(v-for="(blogPost, index) in blogPosts" :key="index")
        nuxt-link(:to="`/blog/${blogPost.slug}`") {{blogPost.title}}
        p {{blogPost.body.slice(0, 20)}}...
</template>
<script>
export default {
  computed: {
    blogPosts() {
      return this.$store.state.blogPosts;
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