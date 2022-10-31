<template>
  <div class="config" style="width: 100%;height: 100%;">
    <config-grid :id="id" v-show="type === 'grid'" />
    <config-node :id="id" v-show="type === 'node'" />
    <config-edge :id="id" v-show="type === 'edge'" />
  </div>
</template>

<script>
import ConfigGrid from './ConfigGrid/index.vue'
import ConfigNode from './ConfigNode/index.vue'
import ConfigEdge from './ConfigEdge/index.vue'
import FlowGraph from '../../graph'
import './index.css'
export default {
  data() {
    return {
      type: 'grid',
      id: '',
    }
  },
  components:{
    ConfigGrid,
    ConfigNode,
    ConfigEdge
  },
  created() {
    this.boundEvent()
  },
  methods: {
    // 待优化
    boundEvent() {
      const { graph } = FlowGraph
      graph.on('blank:click', () => {
        this.type = "grid"
      })
      graph.on('cell:mousedown', ({ cell }) => {
        this.type = cell.isNode() ? "node" : "edge"
        this.id = cell.id
        if(this.type == "node") {
          let nodeType = cell['attrs']['image'] && cell['attrs']['image']['xlink:href'] ? 'image' : 'text'
          this.$store.commit('flow/updatenodeType', nodeType)
        }
      })
    }
  }
}
</script>
