<template lang="pug">
  //- - var page = "about"
  //- include ../layouts/header.pug
  #body-wrapper
    main.about
      header
        h1 A Community led Conference
      section.mission
        h2 Our Mission
        p Our goal is to push software development, design,  and technical leadership beyond elementary conversations. We believe an annual conference is a way to begin these discussions that can carry over to our developer and business communities throughout the year to improve technical communication.
      //- section.who-we-are
      //-   h2 Who We Are
      //-   p We are a group of tech artisans who meet up, hangout, build, and create stuff. We love our city and what to make it better.
      section.policies
        h2 Policies
        p We take safety and inclusivity seriously and want everyone to have as good of a time as possible. Please read over our Code of Conduct and other policies to help us create the best conference experience.
        .button-cont
          a.button(href="policies")
            button Our Policies
      section.location
        .txt-container
          h3 Venue Location
          a(href="https://cybercenter.georgia.gov/" target="_blank" rel="noreferrer noopener") Georgia Cyber Center
          p 100 Grace Hopper Lane, Augusta, GA 30901
        div.iframeCont
          iframe(src="https://www.google.com/maps/d/u/0/embed?mid=1CQdON6sA-pMuOvTIrZcyzU7B6rw-e_lu")
      //- include ../layouts/footer.pug
  
</template>

<style lang="sass" scoped>
h1
  font-size: 4rem
  background-color: $blue1
  color: $blue7
  font-weight: bold

.mission, .policies, .who-we-are
  width: 80%
  max-width: 800px
  clear: both
  h2
    margin: 20px auto 20px auto
    max-width: 200px
    color: $pink7
    font-weight: 500
    @media(min-width: 900px)
      margin: 20px 0
      float: left
  p
    display: block
    vertical-align: top
    text-align: left
    width: 100%
    max-width: 500px
    @media(min-width: 900px)
      margin: 20px 0
      float: right


.policies
  .button-cont
    clear: both
    padding-top: 30px

.location
  width: 100%
  max-width: 800px
  margin: 40px auto
  padding: 40px 0
  border-radius: 10px
  background-color: $blue1
  box-shadow: $shadow3
  h3, p
    color: $gray9
  a
    font-size: 2.4rem
    color: $blue7
    text-decoration: none
  p
    margin-bottom: 40px
  .txt-container
    vertical-align: top
    width: 100%
    max-width: 400px
    margin: 0 auto
    @media(min-width: 800px)
      display: inline-block
      transform: translateY(50%)
  .iframeCont
    position: relative
    display: inline-block
    z-index: 1
    width: 300px
    margin: 0 auto
    border-radius: 10px
    overflow: hidden
    &:before
      content: ''
      border-radius: 10px
      position: absolute
      box-shadow: inset 0px 0px 4px 2px lighten($primary-gray, 20%)
      top: 0
      right: 0
      bottom: 0
      left: 0
      z-index: 2
      pointer-events: none

  iframe
    height: 300px
    min-height: 20rem
    width: 300px
    margin: 0 auto
    border: none

.conduct
  h2
    text-decoration: underline

  h2, h3, h4
    padding-bottom: 20px
    padding-top: 20px

  ul
    padding-bottom: 40px
  li
    text-align: left
    font-size: 2.4rem
    line-height: 1.6
    color: $gray9
    list-style-type: disc
    padding-left: 10px
    margin-left: 40px



</style>