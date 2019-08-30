<template>
  <div id="header">
    <div id="headerImg" @click="changeFilteredNewsMethod(0)">
      <span>NOTICIAS DEL MUNDO</span>
    </div>
    <div id="headerLinks">
      <div
        v-bind:class="{ headerLinkActive: linkactive == 1 }"
        @click="changeFilteredNewsMethod(1)"
      >Política</div>
      <div
        v-bind:class="{ headerLinkActive: linkactive == 2 }"
        @click="changeFilteredNewsMethod(2)"
      >Deportes</div>
      <div
        v-bind:class="{ headerLinkActive: linkactive == 3 }"
        @click="changeFilteredNewsMethod(3)"
      >Farandula</div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";

export default {
  name: "NewsHeader",
  data: function() {
    return {
      linkactive: 0
    };
  },
  computed: {
    ...mapState(["newsFilter"])
  },
  methods: {
    ...mapActions(["changeNewsFilter", "changeNews"]),
    changeFilteredNewsMethod(index) {
      this.linkactive = index;
      this.changeNewsFilter(index);
      if (index == 1) {
        this.changeNews(0);
      } else if (index == 2) {
        this.changeNews(1);
      } else if (index == 3) {
        this.changeNews(2);
      } else {
        this.changeNews(0);
      }
    }
  }
};
</script>

<style lang="scss" scoped>
$break-point: 800px;

@mixin smallScreen {
  @media screen and (max-width: #{$break-point}) {
    @content;
  }
}

@mixin minScreen {
  @media screen and (max-width: 350px) {
    @content;
  }
}

#header {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  background-color: black;

  @include smallScreen {
    flex-direction: column;
  }

  &Img {
    width: 60%;
    display: flex;
    align-items: center;

    @include smallScreen {
      width: 100%;
      display: flex;
      justify-content: center;
      margin-top: 20px;
      margin-bottom: 10px;
    }

    span {
      color: lavender;
      margin-left: 30px;
      font-size: 24px;
      font-weight: bold;
      text-shadow: 1px 1px 0px gray;
    }
    &:hover {
      cursor: pointer;
    }
  }

  #headerLinks {
    display: flex;
    flex-direction: row;
    width: 40%;
    justify-content: space-around;
    background-color: lightgray;

    @include smallScreen {
      width: 100%;
    }

    @include minScreen{
      flex-direction: column;
    }

    div {
      width: 33%;
      height: 50px;
      display: flex;
      justify-content: center;
      align-items: center;

      @include minScreen{
        width: 100%;
      }

      &:hover {
        background-color: gray;
        cursor: pointer;
      }
    }
  }
}
.headerLinkActive {
  background-color: gray;
}
</style>