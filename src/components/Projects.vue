<template>
  <div class="project-section">

    <div id="projects">
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
      <h2>{{ title }}</h2>
      <ul class="desc-list">
        <li v-for="project in projects">
          <span v-for="technology in project.technologies">{{ technology }}</span>
        </li>
      </ul>
    </div>

    <div id="modal-container">
      <modal :show="showModal" :modalToShow="modalNum" @close="showModal = false"></modal>
    </div>

  </div>
</template>

<script>
import Modal from '../components/Modal';

export default {
  name: 'projects',
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
      }],
      showModal: false,
      modalNum: 0
    };
  },
  methods:{
    openModal: function(index){
      this.modalNum = index;
      this.showModal = true;
    }
  }
}
</script>


<style scoped lang="scss">
@import '../styles/common.scss';

#projects {
  // opacity: 0;
  display: flex;
  flex-direction: column;
  line-height: 1.6;
  z-index: 2;
  order: 4;

  .date-cont {
    .dates {
      width: 30%;
      float: left;
      text-align: right;
    }

    .titles {
      width: 65%;
      float: right;
      white-space: nowrap;

      li {
        font-weight: 400;
      }
    }
  }

  @media only screen  and (max-width : 899px) {
    letter-spacing: -0.5px;
    margin-bottom: 50px;

    h2 {
      order: 1;
      padding-left: 2.5vw
    }

    .date-cont {
      order: 2;
    }

    .desc-list {
      display: none;
    }
  }

  @media only screen  and (min-width : 900px) {
    font-size: 0.9rem;
    position: absolute;
    top: 40%;
    left: 84vw;
    @include css3-prefix(transform, translateX(-100%));
    @include transition(all 0.8s cubic-bezier(0.215, 0.61, 0.355, 1));

    &.hover,
    &:hover {
      @include css3-prefix(transform, rotate(-270deg));
      left: 57.5vw;
    }

    .date-cont {
      @include css3-prefix(transform, rotate(270deg));
      margin-bottom: 40px;

      .dates {
        width: 45%;
      }

      .titles {
        width: 45%;
      }
    }

    h2 {
      font-size: 2.2rem;
      margin: 15px 0 15px -2.5vw;
    }

    .desc-list {
      white-space: nowrap;
      @include css3-prefix(transform, rotate(270deg));
      margin-top: 65px;
      text-align: right;

      span {
        margin: 0 4px;
      }
    }
  }
  @media only screen  and (min-width : 1300px) {
    left: calc(50vw + 450px);
  }
  @media only screen  and (min-width : 1800px) {
    left: calc(55vw + 475px);
  }
}
</style>
