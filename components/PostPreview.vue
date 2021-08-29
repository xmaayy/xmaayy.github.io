<template>
  <figure class="blogpost blogfig container mx-auto rounded-xl p-8 m-4 l-4">
    <div class="grid grid-cols-4 gap-4">
      <div class="model">
        <img
          class="w-full h-64 object-cover rounded-lg mx-auto"
          :src="coverImage"
          :alt="coverAlt"
        />
      </div>
      <div class="col-span-3">
        <div class="pt-6 space-y-4">
          <p class="text-title"> {{title}} </p>
          <blockquote>
            <p class="text-desc">
              {{ description }}
            </p>
          </blockquote>
          <figcaption class="font-medium">
            <div class="text-cyan-600">Xander May</div>
            <div cla>5 min read</div>
          </figcaption>
        </div>
      </div>
    </div>
  </figure>
</template>

<script>
export default {
  data: () => ({}),
  mounted: () => {},
  props: {
    coverImage: String,
    coverAlt: String,
    description: String,
    title: String,
  },
  methods: {},
};
</script>

<style>
.model {
  @apply flex bg-gray-200 rounded-lg;
}
.blogpost {
  @apply shadow;
}
.blogpost:hover {
  @apply shadow-xl;
}
.text-title {
  font-family: "lato";
  font-size: 24px;
  font-weight: 600;
}
.text-desc {
  font-family: "noto sans jp";
  font-size: 18px;
  font-weight: 400;
}
</style>