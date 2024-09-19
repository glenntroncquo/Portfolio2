<template>
  <div className="flex flex-col min-h-screen overflow-hidden">
    <Header />
    <div class="pt-32"></div>
    <Project />
    <Footer />
  </div>
</template>
<script>
import Project from '../partials/Project.vue'
import Header from '../partials/Header.vue'
import Footer from '../partials/Footer.vue'
export default {
  name: 'ProjectDetails',
  components: {
    Project,
    Header,
    Footer,
  },
}
</script>
