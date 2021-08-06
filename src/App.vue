<template>
  <main>
    <p>
      <alert-l class="demo-icon"></alert-l>
      近期活动
      <alert-s class="demo-icon"></alert-s>
      Recent Activities
    </p>
    <p>
      <thumb-up-s class="demo-icon"></thumb-up-s>
      赞同
      <thumb-up-l class="demo-icon"></thumb-up-l>
      Like
      <thumb-down-s class="demo-icon"></thumb-down-s>
      反对
      <thumb-down-l class="demo-icon"></thumb-down-l>
      Dislike
    </p>
  </main>
</template>

<script lang="ts">
  import {
    defineComponent
  } from 'vue'

  import AlertL from './components/alert-circle-line.vue'
  import AlertS from './components/alert-circle.vue'
  import ThumbUpL from './components/thumb-up-line.vue'
  import ThumbUpS from './components/thumb-up.vue'
  import ThumbDownL from './components/thumb-down-line.vue'
  import ThumbDownS from './components/thumb-down.vue'

  export default defineComponent({
    name: 'App',
    components: {
      AlertL, AlertS,
      ThumbUpL, ThumbUpS,
      ThumbDownL, ThumbDownS,
    }
  })
</script>

<style lang="stylus" scoped>
  .demo-icon {
    font-size 24px
  }
</style>
