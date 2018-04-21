<template>
  <div id="app">
    <nav-bar/>

    <h1>{{ firstName }} <strong>{{ lastName }}</strong></h1>
    <img class="bg-img" src="./assets/hero_bg.jpg">

    <about/>
    <work-history/>
    <projects/>
    <contact/>

  </div>
</template>

<script>
import NavBar from './components/NavBar';
import About from './components/About';
import WorkHistory from './components/WorkHistory';
import Projects from './components/Projects';
import Contact from './components/Contact';

import TweenMax from "gsap";

export default {
  name: 'App',
  components: {
    NavBar,
    About,
    WorkHistory,
    Projects,
    Contact
  },
  data() {
    return {
      firstName: "Your Name",
      lastName: "Here"
    }
  },
  mounted: function () {
    this.$nextTick(function () {

      const tl_options = {
        delay: 0,
        stagger: 0,
        autoRemoveChildren: false,
        smoothChildTiming: false,
        repeat: 0,
        yoyo: false
      };

      const tl    = new TimelineMax(tl_options),
        $nav      = $('#nav-bar > ul'),
        $line     = $('.line-dec'),
        $about    = $('#about'),
        $projects = $('#project-section'),
        $title    = $('h1'),
        $work     = $('#work-history'),
        $contact  = $('#contact');

      const windowWidth = $( window ).width();
      if ( windowWidth > 991 ) {
        tl.fromTo($nav, 1,
            { "opacity": "0" },
            { "opacity": "1", ease: Power1.easeOut }
          ).fromTo($line, 0.75,
            { "height": "0" },
            { "height": "32vw", ease: Power1.easeOut }
          ).fromTo($about, 0.75,
            { "opacity": "0" },
            { "opacity": "1", ease: Power1.easeOut }
          ).fromTo($projects, 0.75,
            { "opacity": "0" },
            { "opacity": "1", ease: Power1.easeOut }
          ).fromTo($title, 0.75,
            { "opacity": "0" },
            { "opacity": "1", ease: Power1.easeOut }
          ).fromTo($work, 0.75,
            { "opacity": "0" },
            { "opacity": "1", ease: Power1.easeOut }
          ).fromTo($contact, 0.75,
            { "opacity": "0" },
            { "opacity": "1", ease: Power1.easeOut }
          ).delay(.75);
      }

    });
  }
}
</script>

<style lang="scss">
@import 'styles/common.scss';

#app {
  background-color: $bridal-heath;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 2.5vw 2.5vw 1vw 2.5vw;
  min-height: 140vw;

  h1 {
    order: 1;
    z-index: 2;
    color: $mona-lisa;
    font-size: 2.25rem;
    font-weight: 400;
    margin: 0 auto;
    padding-top: 50px;

    strong {
      font-weight: 900;
      letter-spacing: 1.5px;
    }

    @include breakpoint(tablet) {
      position: absolute;
      top: 40vw;
      font-size: 3.5rem;
      padding-top: 0;
    }
    @include breakpoint(laptop) {
      top: 55vw;
    }
  }

  .bg-img {
    position: absolute;
    top: 7.5vw;
    width: 75vw;
    max-width: 450px;
    opacity: .85;
    z-index: 1;

    @include breakpoint(laptop) {
      position: relative;
      top: 0;
      width: 40vw;
      max-width: 100%;
    }
    @include breakpoint(tv) {
      width: 50vw;
    }
  }

}
</style>
