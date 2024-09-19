<template>
  <div className="flex flex-col min-h-screen overflow-hidden">

    <!-- Site header -->
    <Header />

    <!-- Page content -->
    <main class="grow">

      <Hero />
      <Process/>
      <Carousel />
      <Inspiration />
      <Creatives />
      <h2 data-aos="fade-right" class="h2 font-cabinet-grotesk max-w-6xl mx-auto px-4 sm:px-6 mb-20">What people have to say about me</h2>
      <Testimonials data-aos="fade-left" />
      
      <Blog />
      <Cta />

    </main>
    
    <!-- Site footer -->
    <Footer />    

  </div>
</template>

<script>
import Header from '../partials/Header.vue'
import Hero from '../partials/hero.vue'
import Inspiration from '../partials/Inspiration.vue'
import Carousel from '../partials/Carousel.vue'
import Creatives from '../partials/Creatives.vue'
import Pricing from '../partials/Pricing.vue'
import Testimonials from '../partials/Testimonials.vue'
import Faqs from '../partials/Faqs.vue'
import Blog from '../partials/Blog.vue'
import Cta from '../partials/Cta.vue'
import Footer from '../partials/Footer.vue'
import Process from '../partials/Process.vue'

export default {
  name: 'Home',
  components: {
    Header,
    Hero,
    Inspiration,
    Carousel,
    Creatives,
    Pricing,
    Testimonials,
    Faqs,
    Cta,
    Footer,
    Process
  },
}
</script>