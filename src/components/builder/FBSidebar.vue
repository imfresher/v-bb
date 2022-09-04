<template>
  <el-aside class="fb-sidebar">
    <el-header class="pannel-header">
      <div class="flex items-center">
        <el-avatar
          class="mr-3"
          :size="32"
        >
          <img src="https://avatars.githubusercontent.com/u/33667401?s=40&v=4" />
        </el-avatar>
        <span class="text-large font-600 mr-3"> Mr.KevinDuy </span>
        <el-tag>Hi!</el-tag>
      </div>
    </el-header>
    <el-scrollbar height="400px">
      <draggable
        tag="ul"
        class="blocks-pannel"
        :list="blocks"
        item-key="key"
        :group="{ name: 'dragGroup', pull: 'clone', put: false }"
        :sort="false"
        :move="checkBlockMove"
        @end="onBlockDragEnd"
      >
        <template #item="{ element }">
          <li class="block-item">
            <span><SvgIcon :name="element.icon" class-name="color-svg-icon" />{{ i18nt(`block.${element.type}`) }}</span>
          </li>
        </template>
      </draggable>
      <ul class="blocks-pannel">
        <li class="block-item" v-for="item in 30" :key="item">
          <span>{{ item }}</span>
        </li>
      </ul>
    </el-scrollbar>
  </el-aside>
</template>

<script>
  import i18n from '@/utils/i18n';
  import { blocks } from '@/configs';
  import { generateId } from '@/utils/common';

  export default {
    name: 'FBSidebar',
    mixins: [i18n],
    data() {
      return {
        blocks: [],
      };
    },
    created() {
      this.init();
    },
    methods: {
      init() {
        this.blocks = blocks.map(value => {
          return {
            key: generateId(),
            ...value,
            displayName: 'Block Name',
          }
        });
      },
      checkBlockMove() {
        return true;
      },
      onBlockDragEnd(event) {

      },
    }
  }
</script>

<style lang="scss" scoped>
  .color-svg-icon {
    color: $--color-primary;
  }

  .fb-sidebar {
    width: 260px!important;
    overflow-y: hidden;

    .blocks-pannel {
      display: flex;
      flex-wrap: wrap;
      padding: 4px 10px;
    }

    .block-item {
      flex: 0 0 50%;
      line-height: 28px;
      padding: 4px;
      cursor: move;
      white-space: nowrap;
      text-overflow: ellipsis;
      overflow: hidden;

      > span {
        display: flex;
        background: #edf5ff;
        align-items: center;
        box-shadow: 0px 0px 6px rgb(237 245 255 / 21%);
        padding: 2px 10px;

        &:hover {
          color: #fff;
          background: #409eff;

          svg {
            color: #fff;
          }
        }
      }
    }
  }
</style>
