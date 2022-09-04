<template>
  <div class="fb-main-content">
    <div class="main-content-wraper">
      <el-form>
        <template v-if="builder.blocks.length === 0">
          <div class="no-block-hint">{{ i18nt('noBlockHint') }}</div>
        </template>

        <div class="blocks">
          <draggable
            :list="builder.blocks"
            item-key="id"
            v-bind="{group:'dragGroup', ghostClass: 'ghost',animation: 300}"
            :move="checkMove"
            @end="onDragEnd"
            @add="onDragAdd"
            @update="onDragUpdate"
          >
            <template #item="{ element: block, index }">
              <div class="transition-group-el">
                <component
                  :is="getBlockName(block)"
                  :key="block.id"
                  :builder="builder"
                />
              </div>
            </template>
          </draggable>
        </div>
      </el-form>
    </div>
  </div>
</template>

<script>
  import i18n from "@/utils/i18n";
  import BlockComponents from './blocks/index';

  export default {
    name: 'FBMainContent',
    mixins: [i18n],
    components: {
      ...BlockComponents,
    },
    props: {
      builder: Object
    },
    methods: {
      getBlockName(block) {
        return block.type.charAt(0).toUpperCase() + block.type.slice(1) + 'Block';
      },
      checkMove(event) {
        // return this.builder.checkBlockMove(event)
      },
      onDragEnd(event) {
        //console.log('drag end000', event)
      },
      onDragAdd(event) {
        // const newIndex = event.newIndex;

        // if (!!this.builder.blocks[newIndex]) {
        //   this.builder.setSelected( this.builder.blocks[newIndex] );
        // }

        // this.builder.emitHistoryChange();
      },
      onDragUpdate() {
        // this.builder.emitHistoryChange();
      },
    }
  };
</script>

<style lang="scss" scoped>
  .no-block-hint {
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    font-size: 1rem;
    color: #999;
  }

  .fb-main-content {
    padding: 10px;
  }

  .main-content-wraper {
    padding: 20px;
    background-color: #fff;
  }
</style>
