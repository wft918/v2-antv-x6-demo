<doc>
  通过Json数据回显页面
</doc>
<template>
  <div class="index">
    <div id="flow-image">
      <el-tooltip class="item" effect="dark" content="编辑图形" placement="right">
        <el-button style="position: absolute; top: 2px; right: 2px;z-index: 9999;" @click="$router.push('/flow-x6')"><i class="el-icon-edit-outline"></i></el-button>
      </el-tooltip>
      <el-button style="position: absolute; top: 2px; right: 60px;z-index: 9999;" @click="editFlowData">Edit Data</el-button>
      <div id="flow-container"></div>
    </div>
  </div>
</template>
<script>
import FlowGraph from './flow-x6/graph'
import { $, getContainerSize } from '../utils'
export default {
  mounted() {
    this.getFlowJson()
  },
  destroyed() {
    const { graph } = FlowGraph
    // 销毁画布，资源回收
    if(graph) graph.dispose()
    // 移除监听
    window.removeEventListener('resize', this.resizeFn)
  },
  methods:{
    // 去后台拿json
    getFlowJson() {
      setTimeout(() => {
        const graphJson = JSON.parse(window.localStorage.getItem('graphJson'))
        if(graphJson) {
          this.initFlowImage(graphJson)
        } else {
          this.$router.push('/flow-x6')
        }
      }, 300)
    },
    // 根据json渲染
    initFlowImage(graphJson) {
      // 初始化画板
      const graph = FlowGraph.init($('#flow-container'), $('#flow-container').getBoundingClientRect().width, $('#flow-container').getBoundingClientRect().height, false)
      // 渲染操作
      graph.fromJSON(graphJson)

      // 监听数据改变事件
      graph.getNodes().forEach(node => {
        if(node.getData()) {
          node.on("change:data", ({ cell, current }) => {
            // current 就是我们绑定的 业务属性data
            if(current.status == 0) {
              cell.attr('body/fill', 'red')
              cell.attr('text/fill', '#fff')
              cell.attr('text/text', '100℃')
            } else {
              cell.attr('body/fill', 'green')
              cell.attr('text/fill', '#080808')
              cell.attr('text/text', '150℃')
            }
          })
        }
      })
      window.addEventListener('resize', this.resizeFn)
    },
    // 改变状态
    editFlowData() {
      const { graph } = FlowGraph
      graph.getNodes().forEach(node => {
        if(node.getData()) {
          let curStatus = node.getData().status
          node.setData({
            status: curStatus == 0 ? 1 : 0
          })
        }
      })
    },
    resizeFn() {
      setTimeout(() => {
        const { width, height } = getContainerSize($('#flow-image'))
        this.graph.resize(width, height)
      }, 100)
    }
  }
}
</script>
<style scoped>
.index {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
#flow-image {
  width: 80%;
  height: 90%;
  position: relative;
}
#flow-container {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
}
</style>
