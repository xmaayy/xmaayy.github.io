<template>
  <div>
    <the-header />
    <div>
      <double-image
        small-image-link="/images/Merlin-Hawk-60.jpg"
        big-image-link="/images/Merlin-Hawk-100.jpg"
        alt-text="High Resolution Photo of A Merlin Hawk"
        photo-name="short-shinned-hawk"
      />
      <double-image
        small-image-link="/images/NutHatch-60.jpg"
        big-image-link="/images/NutHatch-100.jpg"
        alt-text="A nuthatch in a tree"
        photo-name="nut-hatch"
      />
    </div>
  </div>
</template>

<script>
import Header from "../components/Header";
import DoubleImage from "../components/DoubleImage";
export default {
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
</style>