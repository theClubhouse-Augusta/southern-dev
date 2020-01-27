<template>
  <article>
    <h1>{{newsPost.title}}</h1>
    <div v-html="$md.render(newsPost.body)" />
  </article>
</template>
<script>
export default {
  async asyncData({ params, payload }) {
    if (payload) return { newsPost: payload }
    else
      return {
        newsPost: await require(`~/assets/content/news/${params.news}.json`)
      }
  }
}
</script>