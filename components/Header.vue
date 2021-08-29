<template>
  <nav class="bg-white">
    <div class="flex max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex items-center justify-center h-16">
        <div class="flex-shrink-0">
          <div class="max-w-7xl mx-auto flex webtitle">
            <a class="text-3xl leading-tight text-gray-900" href="/">
              Who else but me?
            </a>
          </div>
        </div>
        <div class="">
          <div class="ml-10 flex items-baseline md:items-center">
            <a href="/models">
              <button class="btn"><projecticon />Models</button></a
            >
            <a href="/photos"
              ><button class="btn"><cameraicon />Photos</button></a
            >
            <a href="/metrics"
              ><button class="btn"><meicon />Site Metrics</button></a
            >
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
import CameraIcon from "../components/CameraIcon";
import HomeIcon from "../components/HomeIcon";
import ProjectIcon from "../components/ProjectIcon";
import MeIcon from "../components/MeIcon";
export default {
  components: {
    cameraicon: CameraIcon,
    homeicon: HomeIcon,
    projecticon: ProjectIcon,
    meicon: MeIcon,
  },
};
</script>

<style>
.btn {
  font-family: "lato";
  font-weight: "400";
  @apply ml-4 px-3 py-2 rounded font-medium text-darkest inline-flex items-center shadow;
}
.btn:hover {
  @apply text-medium shadow-xl;
}
.btn:focus {
  @apply outline-none shadow-2xl;
}
.btn-blue {
  @apply bg-blue-500 text-white;
}
.btn-blue:hover {
  @apply bg-blue-700;
}
.webtitle {
  font-family: "noto sans jp";
  font-weight: 400;
  font-size: 40;
}
</style>