<template lang="pug">
.contact
  span Don't be a stranger
  iframe(src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2611.387177261205!2d-122.81436868474196!3d49.11728149039743!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5485da50e8906fc7%3A0x894cd1f9e7158474!2sMega+Cranes+Ltd!5e0!3m2!1sen!2sus!4v1526352727973"
         width="400"
         height="400"
         frameborder="0"
         style="border:0"
         allowfullscreen).map
  .contact-info-container
    .phone-local.contact-container.phone
      img(src="../../assets/icon-phone.svg" href="tel:+1-604-599-4200").icon.icon-24.icon-phone
      .phone.contact-info.header Give us a Ring!
      a.phone.contact-info.newline(href="tel:+1-604-599-4200") (604) 599-4200
      a.phone.contact-info.newline(href="tel:+1-877-699-4200") +1 (877) 669-4200
    .email.contact-container
      img(src="../../assets/icon-email.svg").icon.icon-24.icon-email
      .email.contact-info.header Email Us
      a.email.contact-info.newline(href="mailto:info@megacranes.com") info@megacranes.com
    .address.contact-container
      img(src="../../assets/icon-directions.svg").icon.icon-24.icon-email
      .address.contact-info.header Directions
      .address.contact-info.newline 6330 148 St.
      .address.contact-info.newline Surrey, B.C.
      .address.contact-info.newline V3X 3C4
  .clear
</template>

<script>

export default {
  name: 'Contact',
  props: [],
  data () {
    return {

    }
  },
  components: {

  },
  methods: {

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
@import 'src/style/colors';
@import 'src/style/variables';
@import 'src/style/fonts';
@import 'src/style/icons';

.contact {
  overflow: hidden;

  span {
    padding: 15px;
    display: block;
    color: $white;
    font-size: $desktop-h1-size;
  }

  .map {
    width: 45vw;
    position: relative;
    display: inline-block;
    padding: 0 25px;
  }

  .contact-info-container {
    width: 40vw;
    // padding: 0 25px;
    display: inline-block;
    color: $white;
    height: 100%;
    vertical-align: top;

    .contact-container {
      width: 300px;
      margin: 20px;
      display: block;
      overflow-y: auto;
      overflow-x: hidden;
      vertical-align: middle;

      .icon {
        padding: 2px;
        display: inline-block;
      }

      .contact-info {
        // position: absolute;
        display: inline-block;
        padding: 5px 20px;
        text-align: center;

        &.header {
          vertical-align: top;
          font-weight: 900;
          line-height: 20px;
        }

        &.newline {
          display: block;
          position: relative;
          margin-left: 25px;
          line-height: 18px;
          color: $white;

          &:hover {
            color: $mega-blue;
          }
        }
      }
    }
  }

}
</style>
