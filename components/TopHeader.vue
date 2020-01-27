<template lang="pug">
div
  .hamburger(@click="hamburgerToggle()" :class="activeNav")
      span.line
      span.line
      span.line
  header#header-main(:class="activeNav")
    a(href="index")
      //- img(src="images/logo.png").header-image
    //- include ../components/navbar.pug
    nav
      ul
          li
              a(href="/") Home
          li
              a(href="about")
                  .select About
          //- li
          //-     a(href="speakers.html")
          //-         .select Speakers
          //- li
          //-     a(href="schedule.html")
          //-         .select Schedule
          li
              a(href="contact")
                  .select Contact
          li
              a(href="news")
                  .select News
          li
              a(href="/2019/")
                  .select 2019
</template>
<script>
export default {
  data() {
    return {
      activeNav: ""
    }
  },
  methods: {
    hamburgerToggle() {
      this.activeNav = this.activeNav ? "" : "active-nav";
    }
  }
}
</script>


