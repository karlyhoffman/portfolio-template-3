<template>
  <div id="work-history">
    <ul class="titles">
      <li v-for="job in jobs"><span class="position">{{ job.position }}</span> {{ job.date }}</li>
    </ul>
    <h2>{{ title }}</h2>
    <ul class="companies">
      <li v-for="job in jobs">{{ job.company }}</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'work-history',
  data() {
    return {
      title: "Work History",
      jobs: [{
        position: 'Frontend Web Developer',
        date: 'Jan 2017 - Now',
        company: 'Reach Creative'
      },
      {
        position: 'Fullstack Student',
        date: 'Sept 201  - Dec 2016',
        company: 'General Assembly'
      },
      {
        position: 'Web Editor',
        date: 'Dec 2011 - Aug 2016',
        company: 'Tennis Warehouse'
      },
      {
        position: 'News Contributor',
        date: 'Jan 2016 - April 2016',
        company: 'Indie Shuffle'
      }]
    };
  }
}
</script>


<style scoped lang="scss">
@import '../styles/common.scss';

#work-history {
  top: 110%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  line-height: 1.75;
  z-index: 2;
  order: 3;
  @include transition(all 0.5s cubic-bezier(0.215, 0.61, 0.355, 1));

  @media only screen  and (max-width : 899px) {
    font-size: 14px;
    justify-content: space-evenly;

    h2 {
      order: 1;
      width: 100%;
      text-align: right;
    }

    .titles {
      order: 2;
      text-align: right;

      li span {
        font-weight: 400;
      }
    }

    .companies {
      order: 3;
    }
  }

  @media only screen  and (max-width : 354px) {
    justify-content: flex-end;
    padding-right: 15px;

    .companies {
      text-align: right;
      padding-top: 15px;
    }
  }

  @media only screen  and (min-width : 900px) {
    font-size: 15px;
    flex-direction: column;
    position: absolute;
    top: 57.5%;
    left: 11.5vw;

    &.hover,
    &:hover {
      @include css3-prefix(transform, rotate(-90deg));
    }

    .titles {
      @include css3-prefix(transform, rotate(90deg));
      text-align: right;
      margin-bottom: 30%;

      .position {
        font-weight: 400;
        padding-right: 5px;
      }
    }

    h2 {
      font-size: 2.15rem;
      margin: 20px 0 20px 4vw;
    }

    .companies {
      @include css3-prefix(transform, rotate(90deg));
      margin-top: 30%;
    }
  }
  @media only screen  and (min-width : 1300px) {
    left: calc(50vw - 530px);
  }
  @media only screen  and (min-width : 1800px) {
    left: calc(50vw - 575px);
  }
}
</style>
