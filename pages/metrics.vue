
<template>
  <div>
      <the-header></the-header>
      <header class="bg-white shadow"></header>
      <main>
    <iframe
      plausible-embed
      src="https://server.whoelsebut.me/share/whoelsebut.me?auth=msyPkk4N_GEHn0OtholrQ&embed=true&theme=light"
      scrolling="no"
      frameborder="0"
      loading="lazy"
      style="width: 1px; min-width: 100%; height: 1600px"
    ></iframe>
    <div style="font-size: 14px; padding-bottom: 14px">
      Stats powered by
      <a
        target="_blank"
        style="color: #4f46e5; text-decoration: underline"
        href="https://plausible.io"
        >Plausible Analytics</a
      >
    </div>
    <script async src="https://server.whoelsebut.me/js/embed.host.js"></script>
      </main>
  </div>
</template>

<script>
import Header from "../components/Header";

export default {
  data() {
    return {
    };
  },
  methods: {
  },
  components: {
    "the-header": Header
  },
};
</script>

<style>
</style>