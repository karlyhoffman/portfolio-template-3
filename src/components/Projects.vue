<template>
  <div id="project-section">

    <div id="projects">
      <h2>{{ title }}</h2>
      <div class="date-cont">
        <ul class="dates">
          <li v-for="project in projects">{{ project.date }}</li>
        </ul>
        <ul class="titles">
          <li v-for="(project, index) in projects" :data-project="`${index + 1}`">
            <a href="#" class="trigger" @click="openModal(index)">{{ project.title }}</a>
          </li>
        </ul>
      </div>
      <ul class="desc-list">
        <li v-for="project in projects">
          <span v-for="technology in project.technologies">{{ technology }}</span>
        </li>
      </ul>
    </div>

    <div class="modal-container">
      <modal :show="showModal" :modalToShow="modalNum" @close="showModal = false"></modal>
    </div>

  </div>
</template>

<script>
import { openModal } from '../components/mixins/openModal';
import Modal from '../components/Modal';

export default {
  name: 'projects',
  mixins: [openModal],
  components: {
    Modal
  },
  data() {
    return {
      title: "My Projects",
      projects: [{
        title: 'Water Conservation Quiz',
        date: 'March 2017',
        technologies: [ "SCSS", "JQuery", "ScrollMagic", "GASP" ]
      },
      {
        title: 'Visit Pandora',
        date: 'April 2017',
        technologies: [ "SCSS", "Bootstrap 3", "JQuery" ]
      },
      {
        title: 'Hennessy',
        date: 'Aug 2017',
        technologies: [ "SCSS", "Vue.js", "GSAP" ]
      },
      {
        title: 'Enterprise',
        date: 'Sept 2017',
        technologies: [ "SCSS", "Bootstrap 4", "JQuery" ]
      },
      {
        title: 'Origin Investments',
        date: 'Feb 2018',
        technologies: [ "SCSS", "WordPress", "PHP" ]
      }]
    };
  }
}
</script>


<style scoped lang="scss">
@import '../styles/common.scss';

#project-section {
  position: relative;
  order: 4;
  padding: 10vw 5vw 2.5vw 5vw;
  z-index: 2;

  @include breakpoint(laptop) {
    position: absolute;
    right: -7.5vw;

    &.hover,
    &:hover {
      #projects {
        @include css3-prefix(transform, rotate(0deg) translate(-32.5%));
      }
    }
  }

  #projects {
    display: flex;
    flex-direction: column;
    line-height: 1.6;
    letter-spacing: -0.5px;
    width: 100vw;
    margin-bottom: 25px;
    // opacity: 0;

    h2 {
      padding-left: 10vw;
    }

    .date-cont {
      .dates {
        float: left;
        padding: 0 5vw 0 10vw;
      }

      .titles {
        white-space: nowrap;

        li {
          font-weight: 400;
        }
      }
    }

    .desc-list {
      display: none;
    }

    @include breakpoint(laptop) {
      flex-direction: row;
      width: auto;
      font-size: 0.9rem;
      @include css3-prefix(transform, rotate(-90deg));
      @include transition(all 0.8s cubic-bezier(0.215, 0.61, 0.355, 1));

      .date-cont {
        order: 3;
        margin-bottom: 40px;

        .dates {
          text-align: right;
          padding: 0 20px 0 30px;
        }
      }

      h2 {
        order: 2;
        font-size: 2.2rem;
        line-height: 1;
        white-space: nowrap;
        @include css3-prefix(transform, rotate(90deg));
        height: 40px;
        width: auto;
        margin: 0 -80px 0 -45px;
        padding: 0;
      }

      .desc-list {
        order: 1;
        display: block;
        text-align: right;
        white-space: nowrap;

        span {
          margin: 0 4px;
        }
      }
    }

    @include breakpoint(desktop) {
      right: -45vw;
    }
    @include breakpoint(tv) {
      right: -20vw;
    }

  }
}

</style>
