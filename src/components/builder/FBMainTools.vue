<template>
  <el-header class="fb-main-tools pannel-header">
    <div class="flex items-center">
      <span>{{ i18nt('application.title') }}</span>
    </div>
  </el-header>
</template>

<script>
  import i18n from '@/utils/i18n';

  export default {
    name: 'FBMainTools',
    mixins: [i18n],
  }
</script>
