export default {
  inject: ['getFormConfig'],

  computed: {
    formConfig() {
      return this.getFormConfig()
    },

  },

  methods: {
    appendTableRow(block) {
      this.builder.appendTableRow(block)
    },

    appendTableCol(block) {
      this.builder.appendTableCol(block)
    },

    onContainerDragAdd(evt, subList) {
      const newIndex = evt.newIndex
      if (!!subList[newIndex]) {
        this.builder.setSelected( subList[newIndex] )
      }

      this.builder.emitHistoryChange()
    },

    onContainerDragUpdate() {
      this.builder.emitHistoryChange()
    },

    checkContainerMove(evt) {
      return this.builder.checkWidgetMove(evt)
    },

    selectWidget(block) {
      this.builder.setSelected(block)
    },

    selectParentWidget() {
      if (this.parentWidget) {
        this.builder.setSelected(this.parentWidget)
      } else {
        this.builder.clearSelected()
      }
    },

    moveUpWidget() {
      this.builder.moveUpWidget(this.parentList, this.indexOfParentList)
      this.builder.emitHistoryChange()
    },

    moveDownWidget() {
      this.builder.moveDownWidget(this.parentList, this.indexOfParentList)
      this.builder.emitHistoryChange()
    },

    cloneContainer(block) {
      if (!!this.parentList) {
        let newCon = this.builder.cloneContainer(block)
        this.parentList.splice(this.indexOfParentList + 1, 0, newCon)
        this.builder.setSelected(newCon)

        this.builder.emitHistoryChange()
      }
    },

    removeWidget() {
      if (!!this.parentList) {
        let nextSelected = null
        if (this.parentList.length === 1) {
          if (!!this.parentWidget) {
            nextSelected = this.parentWidget
          }
        } else if (this.parentList.length === (1 + this.indexOfParentList)) {
          nextSelected = this.parentList[this.indexOfParentList - 1]
        } else {
          nextSelected = this.parentList[this.indexOfParentList + 1]
        }

        this.$nextTick(() => {
          this.parentList.splice(this.indexOfParentList, 1)
          //if (!!nextSelected) {
          this.builder.setSelected(nextSelected)
          //}

          this.builder.emitHistoryChange()
        })
      }
    },

    setWidgetOption(optionName, optionValue) { //通用组件选项修改API
      if (this.block.options.hasOwnProperty(optionName)) {
        this.block.options[optionName] = optionValue
      }
    },

  }
}
