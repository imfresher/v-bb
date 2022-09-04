<template>
  <svg :class="svgClass" aria-hidden="true">
    <use :href="symbolId" />
    <title v-if="!!title">{{ title }}</title>
  </svg>
</template>

<script>
  export default {
    name: 'SvgIcon',
    props: {
      className: { type: String },
      prefix: { type: String, default: 'icon' },
      name: { type: String, required: true },
      title: { type: String, default: '' },
    },
    computed: {
      svgClass() {
        return this.className ? 'svg-icon ' + this.className : 'svg-icon';
      },
      symbolId() {
        return `#${this.prefix}-${this.name}`;
      }
    },
  };
</script>

<style lang="scss" scoped>
  .svg-icon {
    width: 1em;
    height: 1em;
    margin-left: 0.35em;
    margin-right: 0.35em;
    vertical-align: -0.15em;
    fill: currentColor;
    overflow: hidden;
  }
</style>
