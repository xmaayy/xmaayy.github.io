<template>
  <nav class="bg-white">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex items-center justify-center h-16">
        <div class="flex items-center">
          <div class="flex-shrink-0">
            <div
              class="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8 webtitle"
            >
              <a class="text-3xl font-bold leading-tight text-gray-900" href="/">
                Who else but me?
              </a>
            </div>
          </div>
          <div class="hidden md:block">
            <div class="ml-10 flex items-baseline md:items-center">
              <button href="#" class="btn"><projecticon />Projects</button>
              <button href="#" class="btn"><cameraicon />Photos</button>
              <a href="/about-me"><button  class="btn"><meicon />About Me</button></a>
            </div>
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
  font-family: "quicksand";
  font-weight: "200";
  @apply ml-4 px-3 py-2 rounded font-medium text-darkest inline-flex items-center shadow;
}
.btn:hover {
  @apply text-medium shadow-xl;
}
.btn:focus {
  @apply outline-none shadow-2xl;
}
.btn-blue {
  @apply bg-blue-500 text-white ;
}
.btn-blue:hover {
  @apply bg-blue-700;
}
.webtitle {
  font-family: "quicksand";
  font-weight: 700;
  font-size: 40;
}
</style>