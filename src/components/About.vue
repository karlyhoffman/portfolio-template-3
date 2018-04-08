<template>
  <div id="about">
    <p>{{ bio }}</p>
  </div>
</template>

<script>
export default {
  name: 'about',
  data() {
    return {
      bio: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
    };
  }
}
</script>


<style scoped lang="scss">
@import '../styles/common.scss';

#about {
  order: 2;
  z-index: 2;
  position: relative;
  text-align: right;
  width: 90%;
  margin-top: 25vw;
  // opacity: 0;

  @include breakpoint(phablet) {
    color: $mona-lisa;
  }

  @include breakpoint(tablet) {
    color: $black;
    margin-top: 65vw;
  }

  @include breakpoint(laptop) {
    position: absolute;
    top: 20%;
    left: 3vw;
    width: 12.5vw;
    max-width: 300px;
    margin: 0;
  }

  @include breakpoint(desktop) {
    top: 20%;
    left: 7.5vw;
  }

}
</style>
