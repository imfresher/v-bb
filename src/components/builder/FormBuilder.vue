<template>
  <el-container class="form-builder">
    <FBSidebar />
    <FBMain :builder="builder" />
  </el-container>
</template>

<script>
  import i18n from '@/utils/i18n';
  import { makeBuilder } from './index';
  import FBSidebar from './FBSidebar.vue';
  import FBMain from './FBMain.vue';

  export default {
    name: 'FormBuiler',
    mixins: [i18n],
    components: {
      FBSidebar,
      FBMain,
    },
    data() {
      return {
        builder: makeBuilder(this),
      };
    }
  };
</script>

<style lang="scss">
  .color-svg-icon {
    color: $--color-primary;
  }

  .form-builder {
    background-color: #fff;
  }

  .pannel-header {
    display: flex;
    align-items: center;
    border-bottom: 2px solid #f1f2f3;
    background-color: #fff;
  }
</style>
