<template>
  <nav class="bg-white">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex items-center justify-between h-16">
        <div class="flex items-center">
          <div class="flex-shrink-0">
            <img
              class="h-8 w-8"
              src="https://tailwindui.com/img/logos/workflow-mark-indigo-400.svg"
              alt="Workflow logo"
            />
          </div>
          <div class="hidden md:block">
            <div class="ml-10 flex items-baseline md:items-center">
              <button href="#" class="btn"><homeicon /></button>
              <button href="#" class="btn"><projecticon />Projects</button>
              <button href="#" class="btn"><cameraicon />Photos</button>
              <button href="#" class="btn"><meicon />About Me</button>
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
  @apply ml-4 px-3 py-2 rounded font-medium text-darkest inline-flex items-center;
}
.btn:hover {
  @apply text-medium;
}
.btn:focus {
  @apply outline-none;
}
.btn-blue {
  @apply bg-blue-500 text-white;
}
.btn-blue:hover {
  @apply bg-blue-700;
}
</style>