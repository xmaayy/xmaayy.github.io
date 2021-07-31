<template>
  <div>
    <div>
      <the-header></the-header>
      <header class="bg-white shadow"></header>
      <main>
        <!-- Import the component -->
        <script
          type="module"
          src="https://unpkg.com/@google/model-viewer/dist/model-viewer.min.js"
        ></script>
        <figure
          class="blogpost blogfig container mx-auto rounded-xl p-5 m-4 l-4"
        >
          <a href="#">
            <div class="grid grid-cols-4 gap-4">
              <div class="bg-gray-100 rounded-md">
                <model-viewer
                  src="Sword.glb"
                  camera-controls
                  minimumRenderScale="1"
                  exposure="2"
                  shadow-intensity="2.1"
                  camera-orbit="-36.33deg 70.66deg 8.933m"
                  poster="poster.png"
                  environment-image="spruit_sunrise_1k_HDR.hdr"
                  skybox-image="spruit_sunrise_1k_HDR.hdr"
                >
                  <div class="progress-bar hide" slot="progress-bar">
                    <div class="update-bar"></div>
                  </div>
                </model-viewer>
              </div>
              <div class="col-span-3">
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
              </div>
            </div>
          </a>
        </figure>
        <!-- Use it like any other HTML element -->
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