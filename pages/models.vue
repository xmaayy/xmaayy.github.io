<template>
  <div>
    <script
      type="module"
      src="https://unpkg.com/@google/model-viewer/dist/model-viewer.min.js"
    ></script>
    <div>
      <the-header></the-header>
      <header class="bg-white shadow"></header>
      <main>
        <figure
          class="blogpost blogfig container mx-auto rounded-xl p-5 m-4 l-4"
        >
          <div class="grid grid-cols-4 gap-4">
            <div class="bg-gray-100 rounded-md">
              <model-viewer
                src="/model_files/sword.glb"
                camera-controls
                minimumRenderScale="1"
                exposure="2"
                shadow-intensity="2.1"
                camera-orbit="-36.33deg 70.66deg 8.933m"
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
                    "Its dangerous to go alone, take this!"
                  </p>
                </blockquote>
                <figcaption class="font-medium">
                  <div class="text-cyan-600">Xander May</div>
                  <div cla>07/31/2021</div>
                </figcaption>
              </div>
            </div>
          </div>
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
</style>