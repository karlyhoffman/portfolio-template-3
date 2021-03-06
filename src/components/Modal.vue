<template>
  <transition name="modal" id="modal">
    <div class="modal-mask" @click="close" v-show="show">
      <div class="modal-container" @click.stop>

        <div class="modal-content">
          <a href="#" class="modal-close" @click="close">&#x2715;</a>

          <div class="row">
            <div class="img-cont">
              <img :src="getImgUrl(projects[modalToShow].featureImg)" alt="">
            </div>
            <div class="copy-cont">

              <h2 v-if="projects[modalToShow].website">
                <a :href="projects[modalToShow].website" target="_blank">
                  {{ projects[modalToShow].title }}
                </a>
              </h2>
              <h2 v-else>{{ projects[modalToShow].title }}</h2>

              <p class="proj-desc">{{ projects[modalToShow].description }}</p>

              <div class="details-cont">
                <h3>Year</h3>
                <h3>Location</h3>
                <h3>Client</h3>
                <div class="line"></div>
                <span>{{ projects[modalToShow].year }}</span>
                <span>{{ projects[modalToShow].location }}</span>
                <ul>
                  <li v-for="client in projects[modalToShow].client">{{ client }}</li>
                </ul>
              </div>

              <h3>Technologies</h3>
              <div class="line"></div>
              <div class="tech-cont">
                <span v-for="technology in projects[modalToShow].technologies">{{ technology }}</span>
              </div>

              <h3>Deliverables</h3>
              <div class="line"></div>
              <ul class="deliver-cont">
                <li v-for="deliverable in projects[modalToShow].deliverables">{{ deliverable }}</li>
              </ul>
            </div>
          </div>

          <div class="img-showcase" v-for="feature in projects[modalToShow].projectFeatures">
            <h4>{{ feature.title }}</h4>
            <p>{{ feature.description }}</p>
            <video v-if="feature.video" :key="feature.video" class="reveal" width="100%" height="100%" autoplay loop>
              <source :src="getImgUrl(feature.video)" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            <img v-else class="reveal" :src="getImgUrl(feature.image)" alt="">
          </div>

          <a href="#" class="modal-content-btn" @click="close">return</a>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  name: 'modal',
  props: ['show', 'modalToShow'],
  data() {
    return {
      projects: [{
        title: 'Water Conservation Quiz',
        featureImg: "project-1/hero.png",
        description: "A full-page, interactive carousel with each slide featuring a multiple choice question and an unique animation.",
        year: 2017,
        location: "Chicago",
        client: [" — "],
        technologies: [ "HTML5", "SCSS", "JQuery", "ScrollMagic", "GSAP" ],
        deliverables: [
          "Full-page carousel",
          "Navigation bar",
          "Point tracker",
          "Results based on user's answer choices",
          "Responsive design"
        ],
        projectFeatures: [{
          title: "Accordion Animation",
          description: "Multiple images cropped to form a separate image. On hover, each image expands to the full container, displaying text based on that specific photo.",
          video: "project-1/accordion.mp4"
        }, {
          title: "Full-Page Carousel",
          description: "Each slide acts as a separate page with progress dots representing the current slide, providing a unique way to navigate through the site.",
          video: "project-1/slides.mp4"
        }, {
          title: "User Points + Results",
          description: "After every question answered, a tally is kept based on the user's choices and the results are displayed on the final slide.",
          video: "project-1/results.mp4"
        }, {
          title: "Responsive Design",
          description: "Content positioning based on the user's viewport size.",
          image: "project-1/water_resp.png"
        }]
      },

      // Project 2
      {
        title: 'Visit Pandora',
        featureImg: "project-2/hero.png",
        description: "A single-page microsite to promote a new theme park.",
        website: "https://www.nationalgeographic.com/visitpandora/",
        year: 2017,
        location: "Chicago",
        client: ["National Geographic", "Disney"],
        technologies: [ "HTML5", "SCSS", "Bootstrap 3", "JQuery", "fullPage.js" ],
        deliverables: [
          "Full-page locking",
          "Photo carousel",
          "Interactive animations",
          "Embedded videos",
          "Responsive design"
        ],
        projectFeatures: [{
          title: "Photo Carousel",
          description: "Each slide acts as a full-page image gallery with arrow navigation and progress dots representing the current slide.",
          video: "project-2/pandora_slider.mp4"
        }, {
          title: "Embedded videos",
          description: "Image placeholder with play button for users to click and watch featured video.",
          image: "project-2/pandora_video.png"
        }, {
          title: "Responsive Design",
          description: "Content positioning based on the user's viewport size.",
          image: "project-2/pandora_resp.png"
        }]
      },

      // Project 3
      {
        title: 'The Silk Road | A New Odyssey',
        featureImg: "project-3/hennessy_hero.png",
        description: "A website showcasing artists and their Hennessy X.O. inspired artwork.",
        website: "https://www.nationalgeographic.com/hennessy/",
        year: 2017,
        location: "Chicago",
        client: ["National Geographic", "Hennessy"],
        technologies: [ "HTML5", "SCSS", "Vue.js", "ScrollMagic", "GSAP" ],
        deliverables: [
          "Parallax animations",
          "Navigation map",
          "Detail page templates",
          "Lightbox photo gallery",
          "Responsive design"
        ],
        projectFeatures: [{
          title: "Parallax Animations",
          description: "Images move at different speeds as users scroll to create a sensation of depth.",
          video: "project-3/parallax.mp4"
        }, {
          title: "Navigation Map",
          description: "An animated map with pinpoints linking to different pages on the website for a unique navigation option.",
          video: "project-3/nav_map.mp4"
        }, {
          title: "Lightbox Photo Gallery",
          description: "On click, photos scale to larger size displaying captions with a background overlay and navigation options.",
          image: "project-3/lightbox.png"
        }, {
          title: "Responsive Design",
          description: "Content positioning based on the user's viewport size.",
          image: "project-3/hennessy_resp.png"
        }]
      },

      // Project 4
      {
        title: 'Enterprise | Dream Adventures',
        featureImg: "project-4/hero.png",
        description: "A single-page microsite promoting a new web series.",
        website: "https://www.nationalgeographic.com/dreamadventures/",
        year: 2017,
        location: "Chicago",
        client: ["National Geographic", "Enterprise"],
        technologies: [ "HTML5", "SCSS", "Bootstrap 4", "JQuery", "ScrollMagic" ],
        deliverables: [
          "Embedded video",
          "Social sharing navigation",
          "Ad placement",
          "Responsive design"
        ],
        projectFeatures: [{
          title: "Photo Carousel",
          description: "A photo gallery with arrow navigation and progress dots representing the current slide.",
          image: "project-4/photo.png"
        }, {
          title: "Lightbox Gallery",
          description: "Hero CTA opens full-page lightbox gallery with embed video. Video autoplays when lightbox gallery opens.",
          image: "project-4/video.png"
        }, {
          title: "Advertisements",
          description: "Multiple advertisement scripts enabled.",
          image: "project-4/ad.png"
        }, {
          title: "Responsive Design",
          description: "Content positioning based on the user's viewport size.",
          image: "project-4/resp.png"
        }]
      },

      // Project 5
      {
        title: 'Origin Investments',
        featureImg: "project-5/origin_hero.png",
        description: "A WordPress site for a private equity real estate firm.",
        website: "https://origininvestments.com/",
        year: 2018,
        location: "Chicago",
        client: ["Origin Investments"],
        technologies: [ "HTML5", "SCSS", "WordPress", "PHP", "Highcharts.js" ],
        deliverables: [
          "CMS compatibility",
          "Interactive charts",
          "Custom Google map",
          "Scroll-based animations",
          "Responsive design"
        ],
        projectFeatures: [{
          title: "CMS Compatibility",
          description: "A custom WordPress template with the ability to edit content from the admin page.",
          image: "project-5/origin_cms.png"
        }, {
          title: "Interactive Charts",
          description: "Multiple different animated charts and graphs for data visualization.",
          video: "project-5/origin_chart.mp4"
        }, {
          title: "Custom Google Map",
          description: "Stylized Google Map with zoom features and map-marker clustering.",
          video: "project-5/origin_map.mp4"
        }, {
          title: "Blog Posts",
          description: "A blog section with a view option to stack posts vertically or on a grid. Each thumbnail links to the specific post, where the content is displayed using the following design template:",
          image: "project-5/origin_blog.png"
        }, {
          title: "Responsive Design",
          description: "Content positioning based on the user's viewport size.",
          image: "project-5/origin_resp.png"
        }]
      }]
    };
  },
  methods: {
    close: function () {
      this.$emit('close');
    },
    getImgUrl(image) {
      return require('../assets/' + image );
    }
  },
  mounted: function () {
    document.addEventListener("keydown", (e) => {
      if (this.show && e.keyCode == 27) {
        this.close();
      }
    });
  },
  beforeUpdate: function () {
    $('.modal-container').scrollTop(0);
  }
}
</script>


<style scoped lang="scss">
@import '../styles/common.scss';

.modal-mask {
    z-index: 9998;
    position: fixed;
    top: -5vh;
    left: -5vw;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 110vw;
    height: 110vh;
    background-color: rgba(0, 0, 0, .5);
    transition: opacity .3s ease;
}

.modal-container {
  width: 90vw;
  height: 90vh;
  background-color: $white;
  border-radius: 2px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, .33);
  transition: all .3s ease;
  padding: 50px 25px;
  overflow: scroll;

  img { max-width: 100% }

  .modal-content {
    position: relative;

    .modal-close {
      color: $light-grey;
      position: absolute;
      top: -40px;
      right: -13px;
      font-size: 16px;
      width: 25px;
      height: 25px;
      font-weight: bold;
      text-align: center;
      cursor: pointer;

      &:hover {
        color: $medium-grey;
      }
    }

    .row { // Featured Row
      display: flex;
      flex-direction: column;
      padding-bottom: 50px;

      @include breakpoint(laptop) {
        flex-direction: row;
        justify-content: center;
        align-items: center;
      }

      .img-cont {
        flex: 1.25;
        padding: 0;

        @include breakpoint(laptop) {
          padding: 0 10px 0 0;
        }
      }

      .copy-cont {
        flex: 1;
        display: flex;
        flex-direction: column;
        padding: 25px 0 0 0;
        @include breakpoint(laptop) {
          padding: 0 0 0 10px;
        }

        h2 {
          font-size: 2rem;
          line-height: 1;
          margin: 0;
        }

        p {
          margin: 5px 0;
        }

        h3 {
          font-size: 1.25rem;
          line-height: 1;
          margin: 10px 0;
        }

        .line {
          display: block;
          background-color: $black;
          width: 100%;
          height: 1px;
          margin-bottom: 7.5px;
        }

        .details-cont {
          display: flex;
          flex-flow: row wrap;
          margin-bottom: 0;

          & > * {
            flex: 1 0 33.33%;

            &:nth-child(4n+1) {
               flex: 1 0 20%;

               @include breakpoint(laptop) {
                 flex: 1 0 33.33%;
               }
            }
          }

          .line {
            min-width: 100%;
          }
        }

        .tech-cont {
          display: flex;
          flex-direction: column;
          margin-bottom: 5px;

          @include breakpoint(laptop) {
            flex-direction: row;
            justify-content: space-between;
          }
        }

        .deliver-cont {
          display: flex;
          flex-direction: column;
          flex-wrap: wrap;
          max-height: 80px;
        }
      }
    }

    .img-showcase { // Project Features
      text-align: center;
      padding-top: 50px;

      h4 {
        display: inline-block;
        font-size: 1.25rem;
        border-bottom: 1px solid $black;
        margin: 0;
        padding-bottom: 15px;
      }

      p {
        width: 60%;
        margin: 16px auto;
      }

      video, img {
        width: 75%;
      }

      img {
        margin-top: 25px;
      }
    }

    .modal-content-btn {
      display: block;
      text-align: center;
      margin-top: 50px;
    }
  }
}

.modal-enter {
  opacity: 0;
}

.modal-leave-active {
  opacity: 0;
}

.modal-enter .modal-container,
.modal-leave-active .modal-container {
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}

</style>
