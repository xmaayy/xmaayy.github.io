<template>
  <div class="flex justify-center flex-wrap" style="padding-bottom: 20px">
    <div
      class="w-2/3 shadow-lg justify-center image-entry webtitle"
      :id="photoName"
      onClick="loadImage(this.id)"
    >
      {{imageTitle}}
      <a class="lightbox" :href="`#${photoName}-fullscreen`">
        <img :src="smallImageLink" />
      </a>
      <div class="lightbox-target top-0 left-0" :id="`${photoName}-fullscreen`">
        <img
          :id="`${photoName}-child`"
          class="lazy_image"
          :data-url="bigImageLink"
          :alt="altText"
        />
        <a class="lightbox-close" href="#"></a>
      </div>
      <script src="lazy_image.js" />
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({}),
  mounted: () => {},
  props: ["photoName", "smallImageLink", "bigImageLink", "altText", "imageTitle"],
  methods: {},
};
</script>

<style>
/*Eliminates padding, centers the thumbnail */

body,
html {
  padding: 0;
  margin: 0;
  text-align: center;
}

.webtitle {
  font-family: "quicksand";
  font-weight: 700;
  font-size: 24pt;
}

.image-entry {
  font-family: "quicksand";
}

.image-entry:hover {
  @apply shadow-xl;
}
/* Styles the thumbnail */
a.lightbox img {
  height: 150px;
  border: 3px solid white;
  box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.3);
  margin: 94px 20px 20px 20px;
}

/* Styles the lightbox, removes it from sight and adds the fade-in transition */
.lightbox-target {
  position: absolute;
  top: -100%;
  width: 100%;
  background: rgba(0, 0, 0, 0.7);
  width: 100%;
  opacity: 0;
  -webkit-transition: opacity 0.5s ease-in-out;
  -moz-transition: opacity 0.5s ease-in-out;
  -o-transition: opacity 0.5s ease-in-out;
  transition: opacity 0.5s ease-in-out;
  overflow: hidden;
}

/* Styles the lightbox image, centers it vertically and horizontally, adds the zoom-in transition and makes it responsive using a combination of margin and absolute positioning */

.lightbox-target img {
  margin: auto;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  max-height: 0%;
  max-width: 0%;
  border: 3px solid white;
  box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.3);
  box-sizing: border-box;
  -webkit-transition: 0.5s ease-in-out;
  -moz-transition: 0.5s ease-in-out;
  -o-transition: 0.5s ease-in-out;
  transition: 0.5s ease-in-out;
}

/* Styles the close link, adds the slide down transition */
a.lightbox-close {
  display: block;
  width: 50px;
  height: 50px;
  box-sizing: border-box;
  background: white;
  color: black;
  text-decoration: none;
  position: absolute;
  top: -80px;
  right: 0;
  -webkit-transition: 0.5s ease-in-out;
  -moz-transition: 0.5s ease-in-out;
  -o-transition: 0.5s ease-in-out;
  transition: 0.5s ease-in-out;
}

/* Provides part of the "X" to eliminate an image from the close link */

a.lightbox-close:before {
  content: "";
  display: block;
  height: 30px;
  width: 1px;
  background: black;
  position: absolute;
  left: 26px;
  top: 10px;
  -webkit-transform: rotate(45deg);
  -moz-transform: rotate(45deg);
  -o-transform: rotate(45deg);
  transform: rotate(45deg);
}

/* Provides part of the "X" to eliminate an image from the close link */

a.lightbox-close:after {
  content: "";
  display: block;
  height: 30px;
  width: 1px;
  background: black;
  position: absolute;
  left: 26px;
  top: 10px;
  -webkit-transform: rotate(-45deg);
  -moz-transform: rotate(-45deg);
  -o-transform: rotate(-45deg);
  transform: rotate(-45deg);
}

/* Uses the :target pseudo-class to perform the animations upon clicking the .lightbox-target anchor */

.lightbox-target:target {
  opacity: 1;
  top: 0;
  bottom: 0;
}

.lightbox-target:target img {
  max-height: 100%;
  max-width: 100%;
}

.lightbox-target:target a.lightbox-close {
  top: 0px;
}
</style>