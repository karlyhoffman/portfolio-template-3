<template>
  <div id="nav-bar">
    <div class="line-dec"></div>
    <ul>
      <li v-for="link in links"><a :href="link.href" @click="scrollTo(link.href, link.modal, $event)">{{ link.title }}</a></li>
    </ul>
  </div>
</template>

<script>
import { openModal } from '../components/mixins/openModal';

export default {
  name: 'nav-bar',
  mixins: [openModal],
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
  },
  methods: {
    scrollTo: function(href, modal, e) {
      const component = this;
      e.preventDefault();

      var scrollTarget = href;
      $('html, body').animate({
          scrollTop: $(scrollTarget).offset().top - 75
      }, 500 ).promise().done(function(){
        if (modal !== undefined) {
          setTimeout(function () {
            component.openModal(modal);
          }, 225);
        }
      });


      // var navLinks = $('#navigation a');
      // navLinks.click( function(e) {
      //     e.preventDefault();
      //     $('#projects, #work-history').removeClass('hover');
      //     var linkLocation = $(this).attr('href');
      //     var projectNum = $(this).attr('data-project');
      //     $('html, body').animate({
      //         scrollTop: $(linkLocation).offset().top - 75
      //     }, 400 ).promise().done(function(){
      //       if (projectNum !== "undefined") {
      //         var openModal = "#modal-toggle-" + projectNum;
      //         setTimeout(function () {
      //            $(openModal).prop("checked", !$(openModal).prop("checked"));
      //        }, 225);
      //       }
      //     });
      //
      //     if (linkLocation === '#projects' || linkLocation === '#work-history') {
      //       $(linkLocation).addClass('hover').delay(600);
      //     }
      // });
      //
      // $('#projects, #work-history').mouseover(function(){
      //   $(this).removeClass('hover');
      // })

    },
  }
}
</script>


<style scoped lang="scss">
@import '../styles/common.scss';

#nav-bar {
  order: 0;
  z-index: 2;
  align-self: flex-start;
  margin-top: 10vw;
  margin-left: 15vw;

  @include breakpoint(phablet) {
    margin-left: 20vw;
  }
  @include breakpoint(tablet) {
    position: absolute;
    top: 0;
    left: 5vw;
  }
  @include breakpoint(laptop) {
    left: 30vw;
    margin: 0;
  }

  ul {
    border-left: 1px solid $black;
    padding-left: 10px;

    @include breakpoint(laptop) {
      @include css3-prefix(transform, rotate(-90deg));
    }

    li {
      line-height: 1.25;
      white-space: nowrap;

      a {
        color: $tuft-bush;
        &:hover {
          color: $black;
        }

        @include breakpoint(laptop) {
          color: $black;
          &:hover {
            color: $tuft-bush;
          }
        }
      }
    }
  }

  .line-dec {
    display: none;

    @include breakpoint(laptop) {
      display: block;
      position: absolute;
      top: 130px;
      bottom: 0;
      left: 50%;
      background-color: $black;
      width: 1px;
      height: 35vw;
      @include css3-prefix(transform, translateX(-50%));
    }
  }
}
</style>
