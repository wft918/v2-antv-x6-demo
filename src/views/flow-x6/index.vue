<template>
  <div class="flow">
    <div class="content">
      <!--左侧工具栏-->
      <div id="stencil" />
      <div class="panel">
        <!--流程图工具栏-->
        <div class="toolbar">
          <tool-bar v-if="isReady" />
        </div>
        <!--流程图画板-->
        <div id="container" />
      </div>
      <!--右侧工具栏-->
      <div class="config">
        <config-panel v-if="isReady" />
      </div>
    </div>
  </div>
</template>
<script>
import './index.css'
import FlowGraph from './graph'
import ToolBar from './components/ToolBar/index.vue'
import ConfigPanel from './components/ConfigPanel/index.vue'
import { $, getContainerSize } from '../../utils'
export default {
  data() {
    return {
      isReady: false,
      destroyFn: null
    }
  },
  components: { ToolBar, ConfigPanel },
  mounted() {
    this.destroyFn = this.initGraph()
  },
  destroyed() {
    // 移除监听、销毁画布、资源回收
    this.destroyFn()
  },
  methods:{
    initGraph() {
      const graph = FlowGraph.init($('#container'), $('#container').getBoundingClientRect().width, $('#container').getBoundingClientRect().height)
      this.isReady = true
      const resizeFn = () => {
        const { width, height } = getContainerSize($('.panel'))
        graph.resize(width, height - 38)
      }
      resizeFn()
      window.addEventListener('resize', resizeFn)
      return () => {
        window.removeEventListener('resize', resizeFn)
        graph.dispose()
      }
    }
  }
}
</script>
<style>

.x6-widget-snapline-vertical {
  border-right-color: #ff4e50 !important;
}
.x6-widget-snapline-horizontal {
  border-bottom-color: #ff4e50 !important;
}
.x6-widget-selection-box {
  border: 1px dashed #5f95ff;
  margin-top: -3px;
  margin-left: -3px;
}
.x6-widget-selection-inner {
  border: 1px dashed #5f95ff;
}

@keyframes stroke {
  100% {
    stroke-dashoffset: -400;
  }
}
.animate-text1,
.animate-text2,
.animate-text3,
.animate-text4 {
  font-weight: bold;
  fill: none;
  stroke-width: 2px;
  stroke-dasharray: 90 310;
  animation: stroke 3s infinite linear;
}
.animate-text1 {
  stroke: #873bf4;
  text-shadow: 0 0 2px #873bf4;
  animation-delay: -1.5s;
}
.animate-text2 {
  stroke: #ff6e06;
  text-shadow: 0 0 2px #ff6e06;
  animation-delay: -3s;
}

</style>
