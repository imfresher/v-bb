import { deepClone } from '@/utils/common';

export function makeBuilder(app) {
  return {
    app: app,
    blocks: [],
    formConfig: { cssCode: '' },
    selectedId: null,
    selectedBlock: null,
    selectedBlockName: null,
    historyData: {
      index: -1,  //index: 0,
      maxStep: 20,
      steps: [],
    },
    checkBlockMove() {
      return true;
    },
    setSelected(selected) {
      if (!selected) {
        this.clearSelected()
        return
      }

      this.selectedBlock = selected
      if (!!selected.id) {
        this.selectedId = selected.id
        this.selectedBlockName = selected.options.name
      }
    },
    clearSelected() {
      this.selectedId = null
      this.selectedBlock = {}
      this.selectedBlockName = null
    },
    emitHistoryChange() {
      if (this.historyData.index === this.historyData.maxStep - 1) {
        this.historyData.steps.shift()
      } else {
        this.historyData.index++
      }

      this.historyData.steps[this.historyData.index] = ({
        blocks: deepClone(this.blocks),
        formConfig: deepClone(this.formConfig)
      })

      this.saveFormContentToStorage()

      if (this.historyData.index < this.historyData.steps.length - 1) {
        this.historyData.steps = this.historyData.steps.slice(0, this.historyData.index + 1)
      }
    },
    saveFormContentToStorage() {
      window.localStorage.setItem('bloks__backup', JSON.stringify(this.blocks))
      window.localStorage.setItem('form__config__backup', JSON.stringify(this.formConfig))
    },
  };
};
