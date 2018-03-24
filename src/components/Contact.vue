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
  max-width: 75px;
  line-height: 1.6;
  z-index: 2;
  order: 2;
  padding: 30px 2.5vw 50px;

  ul {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    width: 90vw;

    li {
      width: 25%;
    }
  }

  @media only screen  and (min-width : 900px) {
    position: absolute;
    top: 69%;
    right: 35vw;
    padding: 0;

    h2 {
      margin-bottom: 2px;
    }

    ul {
      width: auto;
      display: block;
      padding-left: 2.5px;

      li {
        width: auto;
        font-size: 0.9rem;
      }
    }
  }

  @media only screen  and (min-width : 1800px) {
    top: 65%;
  }
}
</style>
