<template lang="pug">
  main.contact
    h1 Hit Us Up
    section.get-involved
      .container.sponsor
        h3 Sponsors
        //- .icon
        //-   i.far.fa-handshake
        a.button(href="https://drive.google.com/file/d/1e7VE4YZsMAB8su6JvOrOumaiRWI1aZ1T/view?usp=sharing")
          button See How
      .container.scholarship
        h3 Scholarships
        //- .icon
        //-   i.fas.fa-graduation-cap
        a.button(href="https://forms.gle/rW3kimkxpdrGnouX8" target="_blank" rel="noreferrer noopener")
          button Apply
      .container.volunteer
        h3 Volunteers
        //- .icon
        //-   i.fas.fa-user-astronaut
        a.button(href="https://forms.gle/g3Fi2nMEecgDJ5RG8" target="_blank" rel="noreferrer noopener")
          button Sign up
</template>
<style lang="sass" scoped>
.contact
    h1
        color: $blue1
        background-color: $blue5
    h2
        color: $pink1
    form
        width: 80%
        max-width: 900px
        margin: 0 auto
        background-color: $blue5
        padding: 40px 0
        border-radius: 10px
        box-shadow: $shadow3
    label
        display: block
        text-align: left
        color: $blue1
    input
        box-size: border-box
        display: block
        text-align: left
        font-size: 1.8rem
        margin: 20px 0
        background-color: $gray2
        color: $gray9
        padding: .5rem
        border-radius: 5px
        width: 80%

    input[type="submit"]
        width: auto
    .indicates-required
        font-size: 1.6rem
        color: $blue1
        padding-bottom: 20px
    .mc-field-group
        width: 100%
        max-width: 300px
        padding: 0 20px
        margin: 40px auto
    #mc_embed_signup div.mce_inline_error
        background-color: $pink5
        width: 90%
        margin: 0 auto
    .get-involved
        display: flex
        flex-wrap: wrap
        justify-content: center
        width: 100%
        h3
            margin: 20px
            font-weight: bold
        .container
            box-shadow: $shadow1, $shadow3
            margin: 20px
            border-radius: 5px
            width: 100%
            max-width: 275px
        .icon
            display: block
            font-size: 60px
            color: $blue3
        .button
            margin: 20px
</style>