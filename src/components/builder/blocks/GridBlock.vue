<template>
  <FBContainer
    :builder="builder"
  >
    <el-row
      class="grid-container"
      :gutter="2"
    >
      <span>Row</span>
    </el-row>
  </FBContainer>
</template>

<script>
  import i18n from "@/utils/i18n"
  // import FBGridCol from "./FBGridCol"
  import FBContainer from "./FBContainer";
  // import _mixinContainer from "../mixins/_mixinContainer";
  // import _mixinRefDesign from "../mixins/_mixinRefDesign"

  export default {
    name: "GridBlock",
    mixins: [i18n],
    components: {
      FBContainer
    },
    // inject: ['refList'],
    props: {
      builder: Object,
    }
  }
</script>

<style lang="scss" scoped>
  .el-row.grid-container {
    min-height: 50px;
    outline: 1px dashed #336699;

    .form-block-list {
      min-height: 28px;
    }

  }

  .el-row.grid-container.selected, .el-row.grid-cell.selected {
    outline: 2px solid $--color-primary !important;
  }

</style>
