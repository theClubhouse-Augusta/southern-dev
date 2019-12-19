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
            a(href="/")
              img(src="/logo.png") 
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
          //- li
          //-     a(href="/2019/")
          //-         .select 2019
  nuxt
  footer.footerMain
    div.clubhouse
      a(target="_blank" rel="noreferrer noopener" href="https://theclubhou.se/")
        span Organized by theClubhou.se and friends
        img(src="~assets/images/theclubhouse.png" alt="Blue circle surrounding a big C with theClubhouse written inside")
    div.main
      ul
        li
          ul#social
            li
              a(target="_blank" rel="noreferrer noopener" href="https://www.facebook.com/SouthernDevConference")
                //- i.fab.fa-facebook-square
                <font-awesome-icon :icon="['fab', 'facebook']" />
            li
              a(target="_blank" rel="noreferrer noopener" href="https://twitter.com/sodevcon")
                //- i.fab.fa-twitter
                <font-awesome-icon :icon="['fab', 'twitter']" />
            li
              a(target="_blank" rel="noreferrer noopener" href="https://www.linkedin.com/company/sodevcon/about/")
                i.fab.fa-linkedin
                <font-awesome-icon :icon="['fab', 'linkedin']" />
        li
          a(target="_blank" rel="noreferrer noopener" href="mailto:info@southerndev.co")
            <font-awesome-icon :icon="['far', 'envelope']" />
            |  info@southerndev.co
        li
          a(target="_blank" rel="noreferrer noopener" href="https://augustadevs.github.io/") ❤️ by Augusta Devs
        li
          a(target="_blank" rel="noreferrer noopener" href="https://github.com/theClubhouse-Augusta/southern-dev")
            <font-awesome-icon :icon="['fab', 'github']" />
            |  Our code
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


<style lang="sass" scoped>
/*  Pulled from RRoberts: 
    https://codepen.io/RRoberts/pen/ZBYaJr?editors=1100 */
    
.hamburger
    @media(max-width: 900px)
        position: fixed
        z-index: 4
        top: 20px
        right: 40px
        background-color: $gray5
        height: 50px
        width: 50px
        padding: 10px
        border-radius: 100px
        cursor: pointer
        box-shadow: $shadow1
        &:hover
          cursor: pointer
        .line
            width: 80
            height: 5px
            background-color: $gray1
            display: block
            margin: 8px auto
            -webkit-transition: all 0.3s ease-in-out
            -o-transition: all 0.3s ease-in-out
            transition: all 0.3s ease-in-out
        &.active-nav
            -webkit-transition: all 0.3s ease-in-out
            -o-transition: all 0.3s ease-in-out
            transition: all 0.3s ease-in-out
            -webkit-transition-delay: 0.6s
            -o-transition-delay: 0.6s
            transition-delay: 0.6s
            -webkit-transform: rotate(45deg)
            -ms-transform: rotate(45deg)
            -o-transform: rotate(45deg)
            transform: rotate(45deg)
        &.active-nav .line:nth-child(2)
            width: 0px
        &.active-nav .line:nth-child(1),
        &.active-nav .line:nth-child(3)
            -webkit-transition-delay: 0.3s
            -o-transition-delay: 0.3s
            transition-delay: 0.3s
        &.active-nav .line:nth-child(1)
            -webkit-transform: translateY(13px)
            -ms-transform: translateY(13px)
            -o-transform: translateY(13px)
            transform: translateY(13px)
        &.active-nav .line:nth-child(3)
            -webkit-transform: translateY(-13px) rotate(90deg)
            -ms-transform: translateY(-13px) rotate(90deg)
            -o-transform: translateY(-13px) rotate(90deg)
            transform: translateY(-13px) rotate(90deg)

/* HEADER   styles */

#header-main
    z-index: 3
    position: fixed
    top: 0
    right: -300px
    width: 150px
    height: 100vh
    background-color: $gray7
    box-shadow: 0 0 20px 0 rgba(0, 0, 0, .4)
    transition: right .4s ease
    &.active-nav
        @media(max-width: 900px)
            right: 0
    @media(min-width: 900px)
        left: 50%
        right: auto
        transform: translateX(-50%)
        width: 100%
        max-width: 1920px
        height: auto
    img
        position: relative
        display: block
        padding: 100px .5rem .5rem .5rem
        width: 80%
        margin: 0 auto
        @media(min-width: 900px)
            width: 100%
            max-width: 100px
            margin: 0
            padding: 0

    nav
        width: 100%
        position: absolute
        text-align: center
        @media(min-width: 900px)
            position: relative
            width: 80%
            // margin: 0
            // top: 50%
            // right: 0
            // transform: translateY(-50%)
            left: 50%
            transform: translateX(-50%)
        ul
            position: relative
            display: flex
            flex-direction: column
            width: 100%
            max-width: 900px
            margin: 0 auto
            @media(min-width: 900px)
                flex-direction: row
        li
            position: relative
            list-style-type: none
            text-align: center
            transition: all ease .2s
            display: inline-block
            width: 100%
            margin: 0 auto
            @media(min-width: 900px)
                width: 80px
        .select
            &:after
                content: ""
                position: absolute
                display: block
                left: 10%
                margin-top: 1rem
                width: 0
                height: 3px
                background-color: $blue3
                transition: all .2s ease

        a
            display: block
            text-decoration: none
            color: $gray1
            width: 100%
            font-size: 1.6rem
            width: 100%
            padding: 20px 0
            @media(hover)
                &:hover
                    cursor: pointer
                    .select:after
                        width: 80%


/* MAIN FOOTER STYLES */
.footerMain
  overflow: hidden
  padding: 2rem 0
  width: 90%
  // max-width: 900px
  a
    display: block
    text-decoration: none
  .clubhouse
    float: none
    margin: 20px 0
    width: 100%
    text-align: center
    @media(min-width: 700px)
      width: 50%
      float: left
      text-align: left
    img
      width: 100%
      max-width: 100px
      margin: 0 auto
      margin-top: 10px
      display: block
    a:hover
      color: $pink5
  .main
    float: none
    display: block
    margin: 20px auto
    width: 100%
    @media(min-width: 700px)
      width: 50%
      float: right
    a
      display: inline-block
  ul
    margin: 0 auto
    @media(min-width: 700px)
      text-align: right
    // width: 170px

  li
    display: block
    margin: 0
    // width: 300px
  li:nth-child(odd)
    a:hover
      color: $blue5
  li:nth-child(even)
    a:hover
      color: $pink5

  .fa-facebook-square
    color: #3C5A99
  .fa-twitter
    color: #38A1F3
  .fa-linkedin
    color: #0077B5

  ul#social
    margin-left: 0
    li
      display: inline
      padding-right: 20px
      &:hover
        .fa-facebook-square,
        .fa-twitter,
        .fa-linkedin
          color: $pink3
    a
      font-size: 2.4rem

/* Main Body layout */

body
  width: 100%
  padding: 0
  margin: 0

h1
  padding: 40px 0
  padding-top: 125px
  margin: 0 auto
  margin-bottom: 40px
    

main
  margin: 0 auto
  overflow: hidden
  p, label
    font-size: 1.6rem

section, footer
  padding: 20px 0
  margin: 0 auto
  h2
    margin-top: 0
    margin-bottom: 20px
    font-weight: bold
    font-size: 3rem
    color: darken($primary-blue, 50%)
  p
    margin: 0 auto

footer
  p
    padding: .5rem 0


a.button, input[type=submit]
  display: inline-block
  background-color: $pink5
  border-radius: 2px
  border: 2px solid $pink5
  box-shadow: $shadow3
  font-weight: bold
  font-size: 2rem
  padding: 5px 20px
  color: $gray1
  transition: box-shadow .4s ease
  &:hover
    box-shadow: $shadow1
button
  background-color: transparent
  border: none

label
  width: 100%

// Classes

.fa-twitter
  color: $blue7

// Id styles

#body-wrapper
  position: relative
  margin: 0 auto
  text-align: center
  max-width: 1920px
  background-color: $gray1

#dev-btn
  display: none

#results
  color: tomato
  margin: 0 auto

// Splash images throught he pages
#splash-index
  background-image: url("~assets/images/ga.jpg")
#splash-about
  background-image: url("~assets/images/stock-audience.jpg")
#splash-tickets
  background-image: url("~assets/images/stock-ticket.jpg")
#splash-contact
  background-image: url("~assets/images/stock-contact.jpg")


</style>