<template>
  <div id="nav-bar">
    <div class="line-dec"></div>
    <ul>
      <li v-for="link in links"><a :href="link.href">{{ link.title }}</a></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'nav-bar',
  data() {
    return {
      links: [{
        title: 'about',
        href: '#about'
      }, {
        title: 'project one',
        href: '#projects',
        modal: 1
      }, {
        title: 'project two',
        href: '#projects',
        modal: 2
      }, {
        title: 'project three',
        href: '#projects',
        modal: 3
      }, {
        title: 'project four',
        href: '#projects',
        modal: 4
      }, {
        title: 'project five',
        href: '#projects',
        modal: 5
      }, {
        title: 'work history',
        href: '#work-history'
      }, {
        title: 'contact',
        href: '#contact'
      }],
    };
  }
}
</script>


<style scoped lang="scss">
@import '../styles/common.scss';

#nav-bar {
  // opacity: 0;
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: 13vw 0 13vw 15vw;
  width: 42.5vw;
  z-index: 2;
  order: 0;

  @media only screen  and (min-width : 900px) {
    position: absolute;
    top: 12%;
    left: 37.5%;
    width: auto;
    height: 32.5vw;
    margin: 0;
    font-size: .9rem;
  }

  .line-dec {
    display: none;
    background-color: $black;
    width: 1px;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 50%;
    @include css3-prefix(transform, translateX(-50%));

    @media only screen  and (min-width : 900px) {
      display: block;
    }
  }

  ul {
    border-left: 1px solid $black;
    padding-left: 10px;

    @media only screen  and (min-width : 900px) {
      @include css3-prefix(transform, rotate(-90deg));
      margin-top: calc(-32.5vw - 91px);
    }

    li {
      line-height: 1.25;
      white-space: nowrap;

      a {
        @media only screen  and (max-width : 899px) {
          color: $tuft-bush;

          &:hover {
            color: $black;
          }
        }
      }
    }
  }
}
</style>
