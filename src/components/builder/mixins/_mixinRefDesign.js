export default {
  methods: {
    initRefList() {
      if ((this.refList !== null) && !!this.block.options.name) {
        this.refList[this.block.options.name] = this
      }
    },

    getWidgetRef(blockName, showError) {
      let foundRef = this.refList[blockName]
      if (!foundRef && !!showError) {
        this.$message.error(this.i18nt('render.hint.refNotFound') + blockName)
      }
      return foundRef
    },

    /* 该方法用于组件重名检查！！ */
    registerToRefList(oldRefName) {
      if ((this.refList !== null) && !!this.block.options.name) {
        if (!!oldRefName) {
          delete this.refList[oldRefName]
        }
        this.refList[this.block.options.name] = this
      }
    },

  }
}
