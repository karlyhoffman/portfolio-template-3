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
  order: 3;
  z-index: 2;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: flex-end;
  font-size: 15px;
  white-space: nowrap;
  line-height: 1.75;
  padding-top: 7.5vw;
  padding-right: 35px;

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
    text-align: right;
  }

  @include breakpoint(laptop) {
    position: absolute;
    top: 55%;
    left: 5vw;
    flex-direction: column;
    justify-content: space-evenly;
    padding: 0;
    @include transition(all 0.5s cubic-bezier(0.215, 0.61, 0.355, 1));

    &.hover,
    &:hover {
      left: 13vw;
      @include css3-prefix(transform, rotate(-90deg));
    }

    h2 {
      order: 2;
      font-size: 2.15rem;
      margin: 15px 0 20px 0;
    }

    .titles {
      order: 1;
      @include css3-prefix(transform, rotate(90deg));
      text-align: right;
      margin-bottom: 30%;

      .position {
        font-weight: 400;
        padding-right: 5px;
      }
    }

    .companies {
      text-align: left;
      @include css3-prefix(transform, rotate(90deg));
      margin-top: 30%;
      padding: 0;
    }
  }

  @include breakpoint(desktop) { left: 5vw; }

  @include breakpoint(tv) { left: 15vw; }

}
</style>
