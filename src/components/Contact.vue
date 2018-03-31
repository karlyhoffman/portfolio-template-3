<template>
  <div id="contact">
    <h2>{{ sectionTitle }}</h2>
    <ul>
      <li v-for="link in links">
        <a
          :href="link.href"
          :download="link.download ? true : false"
          :target="link.target"
          >
          {{ link.title }}
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'contact',
  data() {
    return {
      sectionTitle: "Contact",
      links: [{
        title: 'email',
        href: 'mailto:karlyhoffman@gmail.com?subject=Hi%20Karly',
        target: "",
        download: false
      }, {
        title: 'resume',
        href: 'http://karlyhoffman.com/past/assets/img/Karly_Hoffman_Resume.pdf',
        target: "_blank",
        download: true
      }, {
        title: 'github',
        href: 'https://github.com/karlyhoffman',
        target: "_blank",
        download: false
      }, {
        title: 'linkedin',
        href: 'https://www.linkedin.com/in/karlyhoffman',
        target: "_blank",
        download: false
      }, {
        title: 'codepen',
        href: 'https://codepen.io/karlyhoffman/',
        target: "_blank",
        download: false
      }, {
        title: 'ello',
        href: 'https://ello.co/ello-govna',
        target: "_blank",
        download: false
      }]
    };
  }
}
</script>


<style scoped lang="scss">
@import '../styles/common.scss';

#contact {
  z-index: 2;
  order: 5;
  line-height: 1.6;
  text-align: right;
  margin-right: 60px;
  padding: 0 2.5vw 50px 10vw;

  @include breakpoint(phablet) { margin-right: 20vw; }

  ul {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: flex-end;
    width: 90vw;
    padding: 0;

    li {
      padding: 0 0 0 20px;
    }
  }

  @include breakpoint(laptop) {
    position: absolute;
    top: 75%;
    right: 30vw;
    text-align: left;
    margin-right: 0;
    padding: 0;

    h2 {
      margin-bottom: 2px;
    }

    ul {
      width: auto;
      display: block;
      padding-left: 2.5px;

      li {
        font-size: 0.9rem;
        padding: 0;
      }
    }
  }

  @include breakpoint(desktop) { top: 70%; }

  @include breakpoint(tv) { top: 65%; }
}
</style>
