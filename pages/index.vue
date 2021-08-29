<template>
  <div>
    <div>
      <the-header></the-header>
      <header class="bg-white shadow"></header>
      <main>
        <div v-for="(article, articleIdx) of articles" :key="articleIdx">\
          <a v-bind:href="'/blog/'+article.slug"> 
          <post-preview
            :title="article.title"
            :description="article.description"
            :cover-alt="article.preview_alt"
            :cover-image="article.preview_img"
          />
        </a>
        </div>
      </main>
    </div>
  </div>
</template>

<script>
import Header from "../components/Header";
import PostPreview from "../components/PostPreview.vue";
export default {
  async asyncData({ $content, params }) {
    const post_list = await $content("blog-posts")
      .sortBy("createdAt", "asc")
      .fetch();
    return {
      post_list,
    };
  },
  data() {
    return {
      articles: [],
    };
  },
  updated() {},
  mounted() {
    this.articles = this.post_list;
  },
  methods: {
    toggle() {},
  },
  components: {
    "the-header": Header,
    "post-preview": PostPreview,
  },
};
</script>

<style>
.blogfig {
  font-family: "noto sans jp";
}
</style>