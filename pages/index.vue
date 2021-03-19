<template>
  <div>
    <div>
      <the-header></the-header>
      <header class="bg-white shadow"></header>
      <main>
        <figure
          class="blogpost blogfig container mx-auto  rounded-xl p-8 m-4 l-4"
        >
          <a href="#">
            <img
              class="w-full h-64 object-cover rounded-lg mx-auto"
              src="/coffee.jpg"
              alt=""
            />
            <div class="pt-6 space-y-4">
              <blockquote>
                <p class="text-lg font-semibold">
                  "A test blog post to see what this would really look like"
                </p>
              </blockquote>
              <figcaption class="font-medium">
                <div class="text-cyan-600">Xander May</div>
                <div cla>5 min read</div>
              </figcaption>
            </div>
          </a>
        </figure>
      </main>
    </div>
  </div>
</template>

<script>
import Header from "../components/Header";
export default {
  data() {
    return {
      isOpen: false,
    };
  },
  methods: {
    toggle() {
      this.isOpen = !this.isOpen;
    },
  },
  components: {
    "the-header": Header,
  },
};
</script>

<style>
.blogfig {
  font-family: "quicksand";
}
.blogpost {
  @apply shadow;
}
.blogpost:hover {
  @apply shadow-xl;
}
</style>