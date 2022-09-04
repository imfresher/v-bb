<template>
  <el-container>
    <el-main class="fb-main">
      <FBMainTools />
      <FBMainContent :builder="builder" />
    </el-main>
  </el-container>
</template>

<script>
  import i18n from '@/utils/i18n';
  import FBMainTools from './FBMainTools.vue';
  import FBMainContent from './FBMainContent.vue';

  export default {
    name: 'FBMain',
    mixins: [i18n],
    components: {
      FBMainTools,
      FBMainContent
    },
    props: {
      builder: Object,
    }
  }
</script>

<style lang="scss" scoped>
  .fb-main {
    padding: 0;
    background: #f1f2f3;
    overflow-x: hidden;
    overflow-y: auto;
  }
</style>
