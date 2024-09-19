<template>
  <footer>
    <div class="max-w-6xl mx-auto px-4 sm:px-6">
      <div class="py-8 md:py-12">
        <!-- Top area -->
        <!-- <div
          class="flex flex-col sm:flex-row items-center justify-center sm:justify-between mb-12 md:mb-6"
        >
          <div class="shrink-0 mr-4">
            <router-link
              class="inline-flex group mb-8 sm:mb-0"
              to="/"
              aria-label="Cruip"
            >
              <svg
                class="fill-blue-500 group-hover:fill-blue-600 transition duration-150 ease-in-out w-8 h-8"
                width="32"
                height="32"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="m7.799 4.47.325.434a19.264 19.264 0 0 0 4.518 4.204l.27.175-.013.257a17.638 17.638 0 0 1-.437 2.867l-.144.564a18.082 18.082 0 0 1-2.889 5.977c2.272.245 4.492.88 6.5 1.886 1.601.788 3.062 1.798 4.344 2.972l.142.135-.017.232a17.034 17.034 0 0 0 1.227 7.504l-.724.323c-1.555-2.931-4.113-5.287-7.19-6.632-3.075-1.351-6.602-1.622-9.857-.844-.822.194-1.532.094-2.146-.183a3.138 3.138 0 0 1-1.29-1.146l-.076-.133-.078-.154-.085-.201a2.893 2.893 0 0 1-.095-1.694c.174-.624.55-1.2 1.239-1.67 2.734-1.85 4.883-4.537 5.944-7.68.704-2.076.925-4.32.633-6.545l-.101-.647Zm4.674-.284.16.2a15.87 15.87 0 0 0 5.629 4.322c3.752 1.76 8.363 2.075 12.488.665.419-.14.78-.044 1.002.158l.106.12.066.11.026.063c.125.33.024.751-.4.994-3.404 1.905-5.92 5.05-6.98 8.573a13.967 13.967 0 0 0 .727 10.055l.241.484-.724.323c-.913-2.227-2.326-4.302-4.12-6.05l-.28-.262.026-.305a16.667 16.667 0 0 1 1.121-4.652l.206-.488c1.05-2.443 2.676-4.59 4.664-6.293-3.064.442-6.273.17-9.243-.858a19.036 19.036 0 0 1-4.072-1.93l-.204-.132.017-.322a18.337 18.337 0 0 0-.415-4.605l-.04-.17ZM10.957 0a18.125 18.125 0 0 1 1.424 3.792l.092.394-.174-.219A14.803 14.803 0 0 1 10.235.322L10.957 0ZM7.046 1.746c.277.725.494 1.463.653 2.206l.1.519-.012-.016a17.99 17.99 0 0 1-1.203-1.891l-.262-.495.724-.323Z"
                />
              </svg>
            </router-link>
          </div>
          <form class="w-full max-w-sm">
            <div
              class="flex flex-col sm:flex-row justify-center max-w-xs mx-auto sm:max-w-none"
            >
              <input
                type="email"
                class="form-input w-full mb-2 sm:mb-0 sm:mr-2"
                placeholder="Your email"
                aria-label="Your email"
              />
              <button
                class="btn-sm text-white bg-blue-500 hover:bg-blue-600 shadow-sm whitespace-nowrap"
                type="submit"
              >
                Join Newsletter
              </button>
            </div>
          </form>
        </div> -->

        <!-- Bottom area -->
        <div
          class="text-center md:flex md:items-center md:justify-between mb-8 md:mb-6"
        >
          <!-- Social links -->
          <ul class="inline-flex mb-4 md:order-2 md:ml-4 md:mb-0">
            <li>
              <a
                class="flex w-8 h-8 justify-center items-center text-blue-500 bg-blue-100 hover:text-white hover:bg-blue-500 rounded-full transition duration-150 ease-in-out"
                href="https://www.linkedin.com/in/glenn-troncquo/"
                aria-label="Linkedin"
              >
                <svg
                  class="fill-current"
                  width="16px"
                  height="16px"
                  viewBox="0 0 1920 1920"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M478.234 600.75V1920H.036V600.75h478.198Zm720.853-2.438v77.737c69.807-45.056 150.308-71.249 272.38-71.249 397.577 0 448.521 308.666 448.521 577.562v737.602h-480.6v-700.836c0-117.867-42.173-140.215-120.15-140.215-74.134 0-120.151 23.55-120.151 140.215v700.836h-480.6V598.312h480.6ZM239.099 0c131.925 0 239.099 107.294 239.099 239.099s-107.174 239.099-239.1 239.099C107.295 478.198 0 370.904 0 239.098 0 107.295 107.294 0 239.099 0Z"
                  ></path>
                </svg>
                <!-- <svg
                  class="w-8 h-8 fill-current"
                  viewBox="0 0 32 32"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M24 11.5c-.6.3-1.2.4-1.9.5.7-.4 1.2-1 1.4-1.8-.6.4-1.3.6-2.1.8-.6-.6-1.5-1-2.4-1-1.7 0-3.2 1.5-3.2 3.3 0 .3 0 .5.1.7-2.7-.1-5.2-1.4-6.8-3.4-.3.5-.4 1-.4 1.7 0 1.1.6 2.1 1.5 2.7-.5 0-1-.2-1.5-.4 0 1.6 1.1 2.9 2.6 3.2-.3.1-.6.1-.9.1-.2 0-.4 0-.6-.1.4 1.3 1.6 2.3 3.1 2.3-1.1.9-2.5 1.4-4.1 1.4H8c1.5.9 3.2 1.5 5 1.5 6 0 9.3-5 9.3-9.3v-.4c.7-.5 1.3-1.1 1.7-1.8z"
                  />
                </svg> -->
              </a>
            </li>
            <li class="ml-4">
              <a
                class="flex h-8 w-8 justify-center items-center text-blue-500 bg-blue-100 hover:text-white hover:bg-blue-500 rounded-full transition duration-150 ease-in-out"
                href="mailto:glenntroncquo1@gmail.com"
                aria-label="Mail"
              >
                <svg
                  class="fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  height="22px"
                  viewBox="0 0 24 24"
                  width="22px"
                >
                  <path d="M0 0h24v24H0z" fill="none" />
                  <path
                    d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"
                  />
                </svg>
              </a>
            </li>
            <li class="ml-4">
              <a
                class="flex h-8 w-8 justify-center items-center text-blue-500 bg-blue-100 hover:text-white hover:bg-blue-500 rounded-full transition duration-150 ease-in-out"
                href="tel:+32496054389"
                aria-label="Phone number"
              >
                <svg
                  class="fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path
                    d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"
                  ></path>
                </svg>
              </a>
            </li>
          </ul>

          <!-- Left links -->
          <div class="text-sm font-medium md:order-1 space-x-6 mb-2 md:mb-0">
            <a
              class="text-gray-500 decoration-blue-500 decoration-2 underline-offset-2 hover:underline"
              href="mailto:glenntroncquo1@gmail.com"
              >Get in touch</a
            >
            <router-link
              class="text-gray-500 decoration-blue-500 decoration-2 underline-offset-2 hover:underline"
              to="/#aboutme"
              >About me</router-link
            >
            <router-link
              class="text-gray-500 decoration-blue-500 decoration-2 underline-offset-2 hover:underline"
              to="/#skills"
              >Skills</router-link
            >
          </div>
        </div>

        <!-- Bottom notes -->
        <div class="text-xs text-gray-400 text-center md:text-left">
          Made with passion - Glenn Troncquo - Full Stack Web Developer
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'Footer',
}
</script>
