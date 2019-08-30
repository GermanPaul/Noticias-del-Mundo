<template>
    <div id="info1">
        <h1>{{actualNews.title}}</h1>
        <div id="imgContainer">
            <img :src='actualNews.img' />
        </div>
        <p><span v-html="actualNews.text"></span></p>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: "NewsInfo",
  computed: {
    ...mapGetters([
        'actualNews'
    ])
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

#info1{
    width: 73.3%;
    @include smallScreen {
        width: 100%;
    }
    h1{
        text-align: center;
        @include smallScreen {
            padding: 0px 10px;
        }
    }
    #imgContainer{
        text-align: center;
        img{
            width: 80%;
        }
    }
    p{
        text-align: justify;
        padding: 24px;
    }
}
</style>