<template>
  <div id="app">
    <NewsHeader />
    <div id="main">
      <NewsInfo />
      <NewsSideBar />
    </div>
  </div>
</template>

<script>
import NewsSideBar from "../components/NewsSideBar.vue";
import NewsHeader from "../components/NewsHeader";
import NewsInfo from "../components/NewsInfo";
import { mapState, mapActions } from "vuex";

export default {
  name: "newsContainer",
  components: {
    NewsSideBar,
    NewsHeader,
    NewsInfo,
  },
  computed: {
    ...mapState(["newsFeed"]),
  },
  methods: {
    ...mapActions(["getNews"]),
  },
  mounted: function () {
    this.getNews();
  },
};
</script>

<style lang="scss">
$break-point: 800px;

@mixin smallScreen {
  @media screen and (max-width: #{$break-point}) {
    @content;
  }
}
#main {
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  @include smallScreen {
    flex-direction: column;
  }
}
</style>