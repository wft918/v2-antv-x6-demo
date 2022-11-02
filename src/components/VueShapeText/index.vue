<template>
  <div class="vue-shape-text">
    <div v-show="!isInput">{{ text }}</div>
    <el-input @blur="inputBlur" v-model="text" v-show="isInput" type="text"></el-input>
  </div>
</template>
<script>
export default {
  data() {
    return {
      text: 'Vue Shape',
      isInput: false
    }
  },
  inject: ["getGraph", "getNode"],
  mounted() {
    console.log('Mounted Trigger----->>>')
    const node = this.getNode();
    const graph = this.getGraph()
    // 监听数据改变事件
    node.on("change:data", ({ current }) => {
      console.log(current, '----->>>')
    })
    graph.on('node:contextmenu', ({ cell, view }) => {
      console.log(cell, 'clee----->>>')
      console.log(view, 'view----->>>')
      this.isInput = true
    })
  },
  destroyed() {
    console.log('Destroyed----->>>')
  },
  methods: {
    inputBlur() {
      this.isInput = false
    }
  }
}
</script>
<style scoped>
.vue-shape-text {
  width: 100%;
  height: 42px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 12px;
  font-weight: 600;
}
</style>
