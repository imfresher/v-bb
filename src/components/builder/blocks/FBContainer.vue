<template>
  <div class="container-wrapper">
    <slot></slot>

    <div class="container-action">
      <span
        :title="i18nt('builder.hint.selectParentWidget')"
        @click.stop=""
      ><SvgIcon name="el-back" /></span>
      <span
        :title="i18nt('builder.hint.moveUpWidget')"
        @click.stop=""
      ><SvgIcon name="el-move-up" /></span>
      <span
        :title="i18nt('builder.hint.moveDownWidget')"
        @click.stop=""
      ><SvgIcon name="el-move-down" /></span>
      <span
        :title="i18nt('builder.hint.insertRow')"
        @click.stop=""
      ><SvgIcon name="el-insert-row" /></span>
      <span
        :title="i18nt('builder.hint.insertColumn')"
      ><SvgIcon name="el-insert-column" /></span>
      <span
        :title="i18nt('builder.hint.cloneWidget')"
      ><SvgIcon name="el-clone" /></span>
      <span
        :title="i18nt('builder.hint.remove')"
      ><SvgIcon name="el-delete" /></span>
    </div>
  </div>
</template>

<script>
  import i18n from "@/utils/i18n";
  // import _mixinContainer from "../mixins/_mixinContainer";

  export default {
    name: "FBContainer",
    mixins: [i18n],
    // mixins: [i18n, _mixinContainer],
    props: {

    },
    computed: {

    }
  }
</script>

<style lang="scss" scoped>
  .container-wrapper {
    position: relative;
    margin-bottom: 5px;

    .container-action {
      position: absolute;
      //bottom: -30px;
      bottom: 0;
      right: -2px;
      height: 28px;
      line-height: 28px;
      background: $--color-primary;
      z-index: 999;

      span {
        font-size: 14px;
        color: #fff;
        margin: 0 5px;
        cursor: pointer;
      }
    }

    .drag-handler {
      position: absolute;
      top: -2px;
      //bottom: -24px;  /* 拖拽手柄位于组件下方，有时无法正常拖动，原因未明？？ */
      left: -2px;
      height: 22px;
      line-height: 22px;
      background: $--color-primary;
      z-index: 9;

      span {
        font-size: 14px;
        font-style: normal;
        color: #fff;
        margin: 4px;
        cursor: move;
      }
    }

  }

  .container-action, .drag-handler {
    :deep(.svg-icon) {
      margin-left: 0.1em;
      margin-right: 0.1em;
    }
  }

</style>
