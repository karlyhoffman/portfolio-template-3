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
    // opacity: 0;

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
      max-width: 600px;
    }
    @include breakpoint(tv) {
      max-width: 50vw;
    }
  }

}
</style>
