<template>
  <div>
    <div>
      <the-header></the-header>
      <header class="bg-white shadow">
      </header>
      <main>
        <div class="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
          <!-- Replace with your content -->
          testing testing... 1 2 
          <!-- /End replace -->
        </div>
      </main>
    </div>
  </div>
</template>

<script>
import Header from "../components/Header"
export default {
  data() {
    return {
      isOpen: false
    }
  },
  methods: {
    toggle () {
      this.isOpen = !this.isOpen
    }
  },
  components: {
    "the-header":Header
  }
}
</script>

<style>
</style>