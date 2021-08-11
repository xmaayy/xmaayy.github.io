<template>
  <article>
    <v-card class="mx-auto" max-width="344">
      <v-img
        :src="article.small_img"
        :alt="article.alt"
        height="200px"
      ></v-img>

      <v-card-title> {{article.title}} </v-card-title>

      <v-card-subtitle> {{article.description}} </v-card-subtitle>
    </v-card>
  </article>
</template>


<script>
export default {
  async asyncData({ $content, params }) {
    const article = await $content("photo-gallery", params.slug).fetch();

    return { article };
  },
};
</script>

<style>
.nuxt-content h2 {
  font-weight: bold;
  font-size: 30px;
}
.nuxt-content h3 {
  font-weight: bold;
  font-size: 22px;
}
.nuxt-content p {
  margin-bottom: 20px;
}
</style>

