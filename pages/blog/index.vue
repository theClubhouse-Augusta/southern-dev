<template lang="pug">
  #body-wrapper
    main.blog-list
      header
      ul(v-for="(blogPost, index) in blogPosts" :key="index")
        .nuxt-link(:to="`blog/${blogPost.slug}`") {{blogPost.title}}
        p {{blogPost.description}}
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