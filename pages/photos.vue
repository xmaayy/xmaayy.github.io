<template>
  <div>
    <the-header></the-header>
    <v-divider class="divider"></v-divider>
    <v-row no-gutters class="">
      <v-col v-for="article of articles" :key="article.slug" cols="12" sm="4">
        <v-card class="mx-auto my-5" max-width="400">
          <img :src="article.small_img" :alt="article.alt" height="200px" />
          <v-card-title> {{ article.title }} </v-card-title>
          <v-card-subtitle> {{ article.description }} </v-card-subtitle>
          <v-row no-gutters class="py-2">
            <v-col v-for="(tag, index) of article.tags" :key="index">
              <v-chip class="ma-2"> {{ tag }} </v-chip>
            </v-col>
          </v-row>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import Header from "../components/Header";
import DoubleImage from "../components/DoubleImage";
export default {
  async asyncData({ $content, params }) {
    const articles = await $content("photo-gallery")
      .only([
        "title",
        "description",
        "small_img",
        "slug",
        "author",
        "alt",
        "tags",
      ])
      .sortBy("createdAt", "asc")
      .fetch();

    return {
      articles,
    };
  },
  data() {
    return {};
  },
  methods: {},
  components: {
    "the-header": Header,
    "double-image": DoubleImage,
  },
};
</script>

<style>
.divider {
  margin-top: 5px;
  margin-bottom: 30px;
}
</style>