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
  position: relative;
  // opacity: 0;
  text-align: right;
  color: $black;
  z-index: 2;
  order: 2;
  width: 90%;
  left: 5vw;
  margin-top: 25vw;
  margin-bottom: 50px;

  @media only screen  and (min-width : 900px) {
    position: absolute;
    top: 21%;
    width: 12.5vw;
    left: 13vw;
    min-width: 150px;
    color: $black;
    margin: 0;
  }

  @media only screen  and (min-width : 1300px) {
    left: calc(48vw - (10vw + 360px));
  }

  @media only screen  and (min-width : 1800px) {
    top: 27.5%;
    left: 21vw;
  }
}
</style>
