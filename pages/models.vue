
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
            <div class="model">
              <model-viewer
                src="/model_files/magic_8_ball.glb"
                camera-controls
                exposure="1"
                shadow-intensity="4.4"
                autoplay
                auto-rotate
              />
            </div>
            <div class="col-span-3">
              <div class="pt-6 space-y-4">
                <blockquote>
                  <p class="text-lg font-semibold">
                    "Will I stay motivated to do these forever?"
                  </p>
                </blockquote>
                <div class="text-cyan-600">
                  Simple one today, yesterdays took way too much time. I chose
                  to do a boolean on the text to avoid learning proper texturing
                  :)
                </div>
                <figcaption class="font-medium">
                  <div class="text-cyan-600">Xander May</div>
                  <div cla>08/05/2021</div>
                </figcaption>
              </div>
            </div>
          </div>
        </figure>
        <figure
          class="blogpost blogfig container mx-auto rounded-xl p-5 m-4 l-4"
        >
          <div class="grid grid-cols-4 gap-4">
            <div class="model">
              <model-viewer
                src="/model_files/fox_anim.glb"
                camera-controls
                exposure="1"
                shadow-intensity="4.4"
                autoplay
                auto-rotate
              />
            </div>
            <div class="col-span-3">
              <div class="pt-6 space-y-4">
                <blockquote>
                  <p class="text-lg font-semibold">"RUN AWAY!!"</p>
                </blockquote>
                <div class="text-cyan-600">
                  Holy crap animating quadrupeds is hard! His feet and hips go a
                  bit wonky because of the decimation / subdivision modifiers,
                  but I like the animation overall. I also couldnt figure out
                  how to do the eyes well so hes blind :(
                </div>
                <figcaption class="font-medium">
                  <div class="text-cyan-600">Xander May</div>
                  <div cla>08/04/2021</div>
                </figcaption>
              </div>
            </div>
          </div>
        </figure>
        <figure
          class="blogpost blogfig container mx-auto rounded-xl p-5 m-4 l-4"
        >
          <div class="grid grid-cols-4 gap-4">
            <div class="model">
              <model-viewer
                src="/model_files/disposable_cup.glb"
                auto-rotate
                exposure="1.24"
                shadow-intensity="3.7"
                shadow-softness="1"
                camera-controls
              >
              </model-viewer>
            </div>
            <div class="col-span-3">
              <div class="pt-6 space-y-4">
                <blockquote>
                  <p class="text-lg font-semibold">"The elixir of life."</p>
                </blockquote>
                <div class="text-cyan-600">
                  Please make sure you dispose of my various parts properly!
                </div>
                <figcaption class="font-medium">
                  <div class="text-cyan-600">Xander May</div>
                  <div cla>08/03/2021</div>
                </figcaption>
              </div>
            </div>
          </div>
        </figure>
        <figure
          class="blogpost blogfig container mx-auto rounded-xl p-5 m-4 l-4"
        >
          <div class="grid grid-cols-4 gap-4">
            <div class="model">
              <model-viewer
                src="/model_files/gun-reload.glb"
                auto-rotate
                exposure="1.24"
                shadow-intensity="3.7"
                shadow-softness="1"
                camera-controls
              >
              </model-viewer>
            </div>
            <div class="col-span-3">
              <div class="pt-6 space-y-4">
                <blockquote>
                  <p class="text-lg font-semibold">"Bond, James Bond..."</p>
                </blockquote>
                <div class="text-cyan-600">
                  This GLB has an animation in it as well that looked great on
                  blender but looks terrible when using this model viewer :(
                  From now on I'll be using bones within the same object instead
                  of different objects
                </div>
                <figcaption class="font-medium">
                  <div class="text-cyan-600">Xander May</div>
                  <div cla>08/02/2021</div>
                </figcaption>
              </div>
            </div>
          </div>
        </figure>
        <figure
          class="blogpost blogfig container mx-auto rounded-xl p-5 m-4 l-4"
        >
          <div class="grid grid-cols-4 gap-4">
            <div class="model">
              <model-viewer
                src="/model_files/animated_astronaut.glb"
                camera-controls
                exposure="0.72"
                shadow-intensity="2.5"
                autoplay
                auto-rotate
              >
              </model-viewer>
            </div>
            <div class="col-span-3">
              <div class="pt-6 space-y-4">
                <blockquote>
                  <p class="text-lg font-semibold">
                    "To Infinity, and Beyond!"
                  </p>
                </blockquote>
                <div class="text-cyan-600">
                  My first foray into animating models. I created the model in a
                  T pose so it made the shoulders really wonky in the walking
                  animation. I think I need to add a bunch more polygons around
                  joints in future models.
                </div>
                <figcaption class="font-medium">
                  <div class="text-cyan-600">Xander May</div>
                  <div cla>08/01/2021</div>
                </figcaption>
              </div>
            </div>
          </div>
        </figure>
        <figure
          class="blogpost blogfig container mx-auto rounded-xl p-5 m-4 l-4"
        >
          <div class="grid grid-cols-4 gap-4">
            <div class="model">
              <model-viewer
                src="/model_files/odst_helmet.glb"
                auto-rotate
                camera-orbit="0.7684deg 89.6deg 0.333m"
                min-camera-orbit="auto auto auto"
                max-camera-orbit="auto auto 0.333m"
              >
              </model-viewer>
            </div>
            <div class="col-span-3">
              <div class="pt-6 space-y-4">
                <blockquote>
                  <p class="text-lg font-semibold">"CHIEF!"</p>
                </blockquote>
                <figcaption class="font-medium">
                  <div class="text-cyan-600">Xander May</div>
                  <div cla>08/01/2021</div>
                </figcaption>
              </div>
            </div>
          </div>
        </figure>
        <figure
          class="blogpost blogfig container mx-auto rounded-xl p-5 m-4 l-4"
        >
          <div class="grid grid-cols-4 gap-4">
            <div class="model">
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
  // https://nuxtjs.org/blog/creating-blog-with-nuxt-content#default-injected-variables
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

.model {
  @apply flex;
  @apply bg-gray-200;
  @apply rounded-lg;
}
</style>
