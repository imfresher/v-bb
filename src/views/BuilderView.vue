<template>
  <el-row style="padding: 50px 0;">
    <el-col :span="20" :offset="2">
      <FormBuilder />
    </el-col>
  </el-row>
</template>

<script>
  import i18n from '@/utils/i18n';
  import FormBuilder from '@/components/builder/FormBuilder.vue';

  export default {
    name: 'BuilerView',
    mixins: [i18n],
    components: {
      FormBuilder,
    }
  };
</script>
