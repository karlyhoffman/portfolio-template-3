<template>
  <div id="app">
    <nav-bar/>

    <h1>{{ firstName }} <strong>{{ lastName }}</strong></h1>
    <img class="main-bg" src="./assets/hero_bg.jpg">

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
  margin: 2.5vw;
  min-height: 140vw;

  h1 {
    // opacity: 0;
    z-index: 2;
    order: 1;
    font-size: 3rem;
    color: $mona-lisa;
    margin: 0 auto;
    padding-top: 15vw;

    @media only screen  and (min-width : 900px) {
      position: absolute;
      top: 40%;
      font-size: 3.5rem;
      padding-top: 0;

      strong {
        letter-spacing: 1.5px;
      }
    }
  }

  .main-bg {
    width: 75vw;
    max-width: 625px;
    opacity: .85;
  }

  #nav-bar {
    position: absolute;
  }

  // Position Elements/Components Here (style the rest inside component!)
}
</style>
