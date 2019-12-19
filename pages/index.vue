<template lang="pug">
//- include ../layouts/head.html
#body-wrapper
  top-header
  main
    section.splash
      div.splash-img#splash-index(title="Photo courtesy of the Augusta Convention & Visitors Bureau")
      .splash-filter
      h1 April 25, 2020
        //- br
        //- a.button(href="./2019" role="button" style="margin-top: 30px;" ) Check out 2019
  //- include ../layouts/footer.pug
  bottom-footer
</template>
<script>
import TopHeader from "~/components/TopHeader.vue";
import BottomFooter from "~/components/BottomFooter.vue";
export default {
  components: {
    TopHeader,
    BottomFooter
  }
}
</script>
