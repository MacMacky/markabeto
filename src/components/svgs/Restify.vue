<template>
  <svg
    :class="classes"
    version="1.0"
    xmlns="http://www.w3.org/2000/svg"
    width="533.333"
    height="533.333"
    viewBox="0 0 400 400"
  >
    <path
      d="M166.7 109.2c-.8 1.8-10.7 25.8-22.2 53.3-11.4 27.5-28.2 67.8-37.3 89.5-9 21.7-16.6 40.1-16.9 40.7-.4 1 3.8 1.3 19 1.3 19.4 0 19.6 0 20.3-2.3.4-1.2 4.8-12.1 9.9-24.2 5.1-12.1 18.6-44.5 30-72 11.4-27.5 24.3-58.4 28.6-68.7 4.4-10.3 7.9-19.2 7.9-19.8 0-.6-6.7-1-19-1h-19l-1.3 3.2zm54.4-1c-.5 1.3-5.9 14.4-12.1 29.3-6.2 14.8-12.3 29.5-13.5 32.5-1.2 3-5.1 12.2-8.5 20.5-3.5 8.2-13.7 32.8-22.7 54.5-9 21.7-17.2 41.5-18.3 44l-1.9 4.5 7.1.3c3.9.2 7.4-.1 7.9-.5.6-.7 12.5-28.8 20.4-48.3 1.2-3 5.3-12.7 8.9-21.5 3.7-8.8 13.7-32.9 22.3-53.5 8.6-20.6 18-43.3 20.9-50.3 3-7.1 5.4-13 5.4-13.3 0-.2-3.4-.4-7.5-.4-6.9 0-7.6.2-8.4 2.2zm45.9-.7c-16 4.5-26 17.4-26 33.6 0 13.7 7.2 25 19.8 31.1 5.8 2.8 7.7 3.2 14.2 3.2 13.9-.1 24.5-6.5 31-18.6 3.2-5.9 3.4-6.9 3.4-15.8s-.2-9.9-3.4-15.8c-1.8-3.5-5.3-8.1-7.8-10.2-8.2-7.2-21-10.3-31.2-7.5z"
    />
  </svg>
</template>
<script>
export default {
  name: "Restify",
  props: {
    classes: {
      type: String,
      default: ""
    }
  }
};
</script>
