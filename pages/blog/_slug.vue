<template>
  <div class="sm:w-3/4 md:w-1/2 mx-auto">
    <article v-if="article">
      <the-header></the-header>
      <header class="bg-white shadow"></header>
      <h1 class="post-title mt-10">{{ article.title }}</h1>
      <h1 class="post-desc">{{ article.tagline }}</h1>
      <p class="post-date mb-10">  {{ formatDate(article.updatedAt) }} </p>

      <nuxt-content :document="article" />

    </article>

  </div>
</template>
<script>
// Use this to show the js object if you ever need anything
// <pre> {{ article }} </pre>
import Header from "../../components/Header";
import PostPreview from "../../components/PostPreview.vue";
export default {
  components: {
    "the-header": Header,
    "post-preview": PostPreview,
  },
  methods: {
    formatDate(date) {
      const options = { year: "numeric", month: "short", day: "numeric" };
      return new Date(date).toLocaleDateString("en", options);
    },
  },
  async asyncData({ $content, params }) {
    const article = await $content("blog-posts", params.slug).fetch();

    return { article };
  },
};
</script>

<style>
.nuxt-content h1 {
  font-family: "lato";
  font-weight: 400;
  font-size: 40px;
}

.nuxt-content h2 {
  font-weight: bold;
  font-size: 30px;
}
.nuxt-content h3 {
  font-weight: bold;
  font-size: 22px;
}
.nuxt-content p {
  font-family: "noto sans jp";
  font-size: 18px;
  font-weight: 400;
}

.post-date {
  font-family: "noto sans jp";
  font-size: 18px;
  font-weight: 400;
  color: gray;
}

.post-title {
  font-family: "lato";
  font-weight: 700;
  font-size: 60px;
}
.post-desc {
  font-family: "lato";
  font-weight: 700;
  font-size: 30px;
  color: gray;
}
</style>

