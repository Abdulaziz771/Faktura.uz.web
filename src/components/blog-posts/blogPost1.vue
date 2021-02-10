<template>
    <div id="videlessons">
        <div id="head-page-title">
            <headerComponent></headerComponent>
            <div class="page-title">
                <div class="page-title-block">
                    <h1>{{ blogs[currentBlogId].title }}</h1>
                </div>
            </div>
        </div>
        <div id="page-body">
            <div class="container">
                <div class="row">
                    <div class="col-12 col-md-8">
                        <div class="post-body">
                            <div class="update-text">
                                <div></div>
                                <h4>{{ blogs[currentBlogId].title }}</h4>
                                <div class="pt-5"></div>
                            </div>
                            <hr>
                        </div>
                    </div>
                    <div class="col-12 col-md-4 sidebar">
                        <div class="position-sticky headroom-sticky" style="top: 0">
                            <div class="post-title">
                                <span> Cтатьи  </span>
                            </div>
                            <div class="recent-updates">
                                <div v-for="(blog, index) in blogs" :key="index" class="d-flex">
                                    <span v-on:click="doSomethingCool">
                                        <router-link class="d-flex" :to="{ name: 'Блог', params: { titleRoute: blog.titleRoute, blogIndex: index } }">   
                                            <img :src="blog.img">
                                            <div class="recent-text position-relative">
                                                <h5>{{ blog.title }}</h5>
                                                <span class="date">{{ blog.data }}</span>
                                            </div>
                                        </router-link>
                                    </span>
                                </div>
                            </div>
                            <div class="pb-5"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <footerComponent></footerComponent>
    </div>
</template>

<script>
import headerComponent from "../../components/headerComponent"
import footerComponent from "../../components/footerComponent"

let blogs = require('../../blog')

export default {
  name: 'blog-post-1',
  data() {
      return {
          blogs,
          currentBlogId: null
      }
  },
  methods: {
      doSomethingCool() {
          location.reload();
      }
  },
  components: {
      headerComponent,
      footerComponent
  },
   created() {
      for (var i=0; i < blogs.length; i++) {
          if (blogs[i].titleRoute == this.$route.params.titleRoute) {
              this.currentBlogId = i
          }
      }
  }
}
</script>

<style>

#videlessons #head-page-title {
    background-image: url("../../assets/img/hero-bg-4.jpg");
}

.post-body {
    padding: 30px;
}

.update-points {
    width: 80%;
    background: #f4f4f4;
    padding: 16px;
    margin-bottom: 45px;
    border-radius: 10px;
}

.recent-text {
    padding: 0 13px;
}

.recent-text .date {
    font-size: 12px;
    color: #9e9e9e;
}

.recent-text h5 {
    font-size: 17px;
    color: dimgrey;
        line-height: 14px;
}

.recent-text h5 {
    font-size: 17px;
    color: dimgrey;
}

.recent-updates .d-flex:hover .recent-text h5 {
    color: #7dc102;
}

.update-text {
    color: #6f6f6f;
    padding-top: 20px;
}

.update-points p {
    font-weight: 600;
    padding-top: 15px;
    color: #818181;
}

.recent-updates img {
    width: 115px;
}

.recent-updates a:hover {
    text-decoration: none;
}

.sidebar .post-title {
    border-bottom: 3px solid #3c566f;
    padding-top: 30px;
}

.sidebar .post-title span{
    background: #3c566f;
    color: white;
    font-size: 14px;
    padding: 7px 10px;
    position: relative;
    bottom: 2px;
    font-weight: 600;
}

.recent-updates .d-flex {
    margin-top: 10px;
    cursor: pointer;
}


</style>
