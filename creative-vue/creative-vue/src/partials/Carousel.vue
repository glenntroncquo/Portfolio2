<template>
  <section class="bg-gray-800">
    <div class="max-w-6xl mx-auto px-4 sm:px-6">
      <div class="py-12 md:py-20">
        <!-- Section header -->
        <div class="max-w-3xl mx-auto text-center pb-12 md:pb-20">
          <h2 class="h2 font-cabinet-grotesk text-gray-100">
            Companies I've consulted for
          </h2>
        </div>

        <!-- Carousel built with Swiper.js [https://swiperjs.com/] -->
        <!-- * Custom styles in src/css/additional-styles/theme.scss -->
        <div class="carousel swiper-container max-w-sm mx-auto sm:max-w-none">
          <div class="swiper-wrapper">
            <!-- Carousel items -->
            <div class="swiper-slide h-auto flex flex-col">
              <!-- Image -->
              <img
                class="w-full aspect-[7/4] object-contain bg-white px-2 border-b-[1px] border-gray-600"
                src="../images/unilin.webp"
                alt="Unilin logo"
              />
              <!-- White box -->
              <div class="grow bg-white px-4 pb-6">
                <!-- Avatars -->
                <div class="flex items-start mb-4 -mt-5">
                  <img
                    class="rounded-full box-content"
                    src="../images/angular.svg"
                    width="36"
                    height="36"
                    alt="angular logo"
                  />
                  <img
                    class="rounded-full mr-1"
                    src="../images/javascript2.svg"
                    width="32"
                    height="32"
                    alt="javascript logo"
                  />
                  <img
                    class="rounded-full bg-white"
                    src="../images/net.svg"
                    width="32"
                    height="32"
                    alt=".net core logo"
                  />
                </div>
                <!-- Title -->
                <a
                  class="inline-block font-cabinet-grotesk font-bold text-xl decoration-blue-500 decoration-2 underline-offset-2 hover:underline"
                  target="_blank"
                  href="https://unilin.com"
                  >Unilin</a
                >
                <div class="text-sm text-gray-500 italic">
                  Replatforming of applications at Unilin
                </div>
                <div class="text-sm text-gray-500 italic">2023 - Current</div>
              </div>
            </div>

            <div class="swiper-slide h-auto flex flex-col">
              <!-- Image -->
              <img
                class="w-full aspect-[7/4] object-fit bg-white border-b-[1px] border-gray-600"
                src="../images/noest.webp"
                alt="Noest logo"
              />
              <!-- White box -->
              <div class="grow bg-white px-4 pb-6">
                <!-- Avatars -->
                <div class="flex items-start mb-4 -mt-5">
                  <img
                    class="rounded-full box-content"
                    src="../images/angular.svg"
                    width="36"
                    height="36"
                    alt="angular logo"
                  />
                  <img
                    class="rounded-full mr-1"
                    src="../images/javascript2.svg"
                    width="32"
                    height="32"
                    alt="javascript logo"
                  />
                  <img
                    class="rounded-full bg-white"
                    src="../images/net.svg"
                    width="32"
                    height="32"
                    alt=".net core logo"
                  />
                </div>
                <!-- Title -->
                <a
                  class="inline-block font-cabinet-grotesk font-bold text-xl decoration-blue-500 decoration-2 underline-offset-2 hover:underline"
                  target="_blank"
                  href="https://noest.be"
                  >Noest</a
                >
                <div class="text-sm text-gray-500 italic">
                  Full Stack .NET Consultancy at Noest
                </div>
                <div class="text-sm text-gray-500 italic">2022 - Current</div>
              </div>
            </div>

            <div class="swiper-slide h-auto flex flex-col">
              <!-- Image -->
              <img
                class="w-full aspect-[7/4] object-contain bg-white px-2 border-b-[1px] border-gray-600"
                src="../images/storied.webp"
                alt="Storied logo"
              />
              <!-- White box -->
              <div class="grow bg-white px-4 pb-6">
                <!-- Avatars -->
                <div class="flex items-start mb-4 -mt-5">
                  <img
                    class="rounded-full box-content"
                    src="../images/angular.svg"
                    width="36"
                    height="36"
                    alt="angular logo"
                  />
                  <img
                    class="rounded-full mr-1"
                    src="../images/javascript2.svg"
                    width="32"
                    height="32"
                    alt="javascript logo"
                  />
                  <img
                    class="rounded-full bg-white"
                    src="../images//nodejs.svg"
                    width="32"
                    height="32"
                    alt="nodejs logo"
                  />
                </div>
                <!-- Title -->
                <a
                  class="inline-block font-cabinet-grotesk font-bold text-xl decoration-blue-500 decoration-2 underline-offset-2 hover:underline"
                  target="_blank"
                  href="https://storied.co"
                  >Storied.co</a
                >
                <div class="text-sm text-gray-500 italic">
                  Frontend Internship in the United States of America at Storied
                </div>
                <div class="text-sm text-gray-500 italic">4 Months</div>
              </div>
            </div>

            <div class="swiper-slide h-auto flex flex-col">
              <!-- Image -->
              <img
                class="w-full aspect-[7/4] object-contain bg-white px-2 border-b-[1px] border-gray-600"
                src="../images/letschatwebp.webp"
                alt="Lets chat logo"
              />
              <!-- White box -->
              <div class="grow bg-white px-4 pb-6">
                <!-- Avatars -->
                <div class="flex items-start mb-[50px] -mt-5">
                  <!-- <img class="rounded-full box-content" src="../images/angular.svg" width="36" height="36" alt="angular logo" />
                  <img class="rounded-full mr-1" src="../images/javascript2.svg" width="32" height="32" alt="javascript logo" />
                  <img class="rounded-full bg-white" src="../images//nodejs.svg" width="32" height="32" alt="nodejs logo" /> -->
                </div>
                <!-- Title -->
                <a
                  class="inline-block font-cabinet-grotesk font-bold text-xl decoration-blue-500 decoration-2 underline-offset-2 hover:underline"
                  href="mailto:glenntroncquo@hotmail.com"
                  >Interested in working together? Get in touch!</a
                >
                <!-- <div class="text-sm text-gray-500 italic">Will you be my next client? 🙂 </div> -->
              </div>
            </div>
          </div>
        </div>

        <!-- Arrows -->
        <div class="flex mt-12 space-x-4 justify-end">
          <button
            class="carousel-prev relative z-20 w-14 h-14 rounded-full flex items-center justify-center group bg-gray-700 hover:bg-blue-500 transition duration-150 ease-in-out"
          >
            <span class="sr-only">Previous</span>
            <svg
              class="w-4 h-4 fill-gray-400 group-hover:fill-white transition duration-150 ease-in-out"
              viewBox="0 0 16 16"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M6.7 14.7l1.4-1.4L3.8 9H16V7H3.8l4.3-4.3-1.4-1.4L0 8z" />
            </svg>
          </button>
          <button
            class="carousel-next relative z-20 w-14 h-14 rounded-full flex items-center justify-center group bg-gray-700 hover:bg-blue-500 transition duration-150 ease-in-out"
          >
            <span class="sr-only">Next</span>
            <svg
              class="w-4 h-4 fill-gray-400 group-hover:fill-white transition duration-150 ease-in-out"
              viewBox="0 0 16 16"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9.3 14.7l-1.4-1.4L12.2 9H0V7h12.2L7.9 2.7l1.4-1.4L16 8z"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
// Import Swiper
import Swiper, { Navigation } from 'swiper'
import 'swiper/css'
Swiper.use([Navigation])

export default {
  name: 'Carousel',
  mounted() {
    // eslint-disable-next-line no-unused-vars
    const carousel = new Swiper('.carousel', {
      breakpoints: {
        320: {
          slidesPerView: 1,
        },
        640: {
          slidesPerView: 2,
        },
        1024: {
          slidesPerView: 4,
        },
      },
      grabCursor: true,
      loop: false,
      centeredSlides: false,
      initialSlide: 0,
      spaceBetween: 24,
      watchSlidesProgress: true,
      navigation: {
        nextEl: '.carousel-next',
        prevEl: '.carousel-prev',
      },
    })
  },
}
</script>
