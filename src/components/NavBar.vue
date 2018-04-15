<template>
  <div id="nav-bar" :class=" navModal ? 'modal-open' : '' ">
    <div class="line-dec"></div>
    <ul>
      <li v-for="link in links"><a :href="link.href" @click="scrollTo(link.href, link.modal, $event)">{{ link.title }}</a></li>
    </ul>

    <div class="modal-container">
      <modal :show="showModal" :modalToShow="modalNum" @close="[showModal = false, navModal = false]"></modal>
    </div>
  </div>
</template>

<script>
import { openModal } from '../components/mixins/openModal';
import Modal from '../components/Modal';

export default {
  name: 'nav-bar',
  mixins: [openModal],
  components: {
    Modal
  },
  data() {
    return {
      links: [{
        title: 'about',
        href: '#about'
      }, {
        title: 'project one',
        href: '#projects',
        modal: 0
      }, {
        title: 'project two',
        href: '#projects',
        modal: 1
      }, {
        title: 'project three',
        href: '#projects',
        modal: 2
      }, {
        title: 'project four',
        href: '#projects',
        modal: 3
      }, {
        title: 'project five',
        href: '#projects',
        modal: 4
      }, {
        title: 'work history',
        href: '#work-history'
      }, {
        title: 'contact',
        href: '#contact'
      }],
      navModal: false
    };
  },
  methods: {
    scrollTo: function(href, modal, e) {
      e.preventDefault();
      const component = this;

      $('html, body').animate({
          scrollTop: $(href).offset().top - 75
      }, 500 ).promise().done(function(){
        if (modal !== undefined) {
          component.navModal = true;
          setTimeout(function () {
            component.openModal(modal);
          }, 225);
        }
      });
      
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

  &.modal-open {
    z-index: 5;
  }

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
