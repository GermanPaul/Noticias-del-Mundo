<template>
  <div id="sideBar">
    <div class="sideBarLinks" v-for='(news, index) in newsFiltered' :key='index'>
      <a href="./#">
        <div @click='changeNewsMethod(news.id)'>
          <img style="width: 100%;" :src='news.img' />
          <p>{{news.title}}</p>
        </div>
      </a>      
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
  name: "NewsSideBar",
  computed: {
    ...mapGetters([
      'newsFiltered'
    ])
  },
  methods: {
    ...mapActions(['changeNews']),
    changeNewsMethod(index) {
      this.changeNews(index)
    }
  }
};
</script>

<style lang="scss" scoped>
$break-point: 800px;

@mixin smallScreen {
  @media screen and (max-width: #{$break-point})  {
    @content;
  }
}
#sideBar{
  width: 26.6%;
  text-align: center;
  background-color: lightgray;
  padding-top: 10px;
  
  @include smallScreen {
    width: 100%;
  }

  div{
    padding: 0px 15px;
    font-weight: bold;

    a{
      text-decoration: none;
      color: black;

      div>p{
          margin-top: 0px;
          margin-bottom: 20px;
      }
    }
  }
}

.sideBarLinks{
  &:hover{
    text-shadow: 1px 1px 0px rgb(180, 180, 180);
    a>div>img{
      border: 1px solid gray;
    }
  }
}
</style>
