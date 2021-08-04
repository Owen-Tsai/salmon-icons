<template>
  <main>
    <p><activity></activity> 近期活动</p>
  </main>
</template>

<script lang="ts">
  import {
    defineComponent
  } from 'vue'

  import Activity from './components/activity.vue'

  export default defineComponent({
    name: 'App',
    components: {
      Activity
    }
  })
</script>
