<template lang="pug">
  main
    section.splash
      div.splash-img#splash-index(title="Photo courtesy of the Augusta Convention & Visitors Bureau")
      .splash-filter
      .content
          img(src="/logo.png")
          h1 A Southern Tech Conference
    //- section.date 
    //-   h2 April 25, 2020
    //-   a.button(href="https://www.theclubhou.se/event-tickets/southern-dev-2020-general-admission" rel="noreferrer noopener" target="_blank")
    //-       button Get Yo Tickets
      //- br
      //- a.button(href="./2019" role="button" style="margin-top: 30px;" ) Check out 2019
</template>
<style lang="sass" scoped>

.splash
  position: relative
  height: 50vh
  padding: 0
  .splash-img
    position: absolute
    display: block
    top: 0
    left: 0
    min-width: 100%
    height: 100%
    background-position: top center
    background-size: cover
    background-repeat: no-repeat
    background-color: $primary-blue
    background-image: url("~assets/images/ga.jpg")
    filter: saturate(1.5) grayscale(.4) sepia(.2) contrast(1.2)
    -webkit-filter: saturate(1.5) grayscale(.4) sepia(.2) contrast(1.2)
  .splash-filter
    position: absolute
    top: 0
    bottom: 0
    left: 0
    right: 0
    background-color: $pink5
    opacity: .3
  .content
    position: absolute
    top: 10%
    right: 10%
    bottom: 10%
    left: 10%
    z-index: 1
    overflow: hidden
  img
    margin: 0 auto
    display: block
    width: 70%
    max-width: 400px
    position: relative
    @media(min-width: 700px)
      width: 50%
      top: 100px
  h1
    width: 100%
    position: absolute
    bottom: 0
    right: 0
    padding: 0
    margin: 0
    transition: opacity .4s ease
    background-color: transparent
    color: $gray1
    text-shadow: 0 0 50px $gray9
    font-size: 24px
    text-align: right
    @media(min-width: 700px)
      font-size: 40px
    

  .insta-filters, #dev-btn
    position: absolute
    top: 0
    left: 0
  button
    background-color: $primary-pink
    border-radius: 5px
    font-size: 1.6rem
    font-weight: bold
    padding: 10px 20px
    margin: 10px 5px
    color: white
    border: none

.date
    display: inline-block
    vertical-align: top
    margin: 20px auto
    position: relative
    width: 90%
    left: 50%
    transform: translateX(-50%)
    box-shadow: $shadow1
    border-radius: 5px
    background-color: white
    max-width: 450px
    h2
        font-weight: 500
        font-size: 24px
        text-align: center
        margin: 20px auto
    a
      text-decoration: none
      padding: 0
      display: inline-block
      position: relative
      left: 50%
      transform: translate(-50%)
    button
      font-size: 18px
      margin: 0 auto
      padding: 10px 20px
      display: block

.index-nav
    max-width: 900px
    width: 100%
    padding: 0
    box-shadow: $shadow5
    border-radius: 10px
    margin-bottom: 100px
    .index-about, .index-speakers, .index-contact
        height: 200px
        width: 100%
        &:hover
            .hover-filter
                opacity: .2
            .button
                background-color: $pink5
    .index-bg
        background-size: cover
        background-repeat: no-repeat
        width: 40%
        display: block
        height: 100%
        position: relative
        float: left
        margin: 0 auto
        padding: 0
    .hover-filter
        position: absolute
        top: 0
        right: 0
        bottom: 0
        left: 0
        background-color: $pink5
        opacity: 0
        transition: all ease .5s

    .button
        font-size: 3.6rem
        box-sizing: border-box
        border-radius: 0
        width: 60%
        float: right
        margin: 0
        padding: 0
        height: 100%
        background-color: white
        transition: all ease .5s
        border-bottom: 1px solid $gray2
    .index-contact .button
        border-bottom: none
    .index-about .index-bg
        background-image: url("~assets/images/chairs.jpg")
    .index-speakers .index-bg
        background-image: url("~assets/images/microphone.jpg")
    .index-contact .index-bg
        background-image: url("~assets/images/phone.jpg")

.sponsors
    margin: 30px auto
    h2
        font-size: 4rem
        font-weight: bold
        margin-bottom: 40px
    h3
        display: inline-block
        padding: 10px 20px
        color: $gray1
        font-weight: bold
        letter-spacing: 1px
        box-shadow: $shadow3
        border-radius: 3px
        text-shadow: 0 0 20px $gray9
    .platinum
        h3
            background-image: linear-gradient(120deg, #EFFBFF, #8490BA)
    .gold
        h3
            background-image: linear-gradient(120deg, #FFDA6F, #FFA23C)
    .silver
        h3
            background-image: linear-gradient(120deg, $gray3, $gray5)
    .community
        h3
            background-image: linear-gradient(120deg, $pink5, $pink7)
    .sponsor-section
        display: flex
        justify-content: space-evenly
        flex-wrap: wrap
        align-items: center
        width: 100%
        max-width: 900px
        margin: 0 auto
        padding: 30px 0
        img
            max-width: 200px
            width: 100%
            padding: 20px
            @media(min-width: 600px)
                padding: 10px
        header
            width: 100%
            margin-bottom: 30px
</style>