<template>
  <div style="width: 100%;height: 100%;">
    <el-tabs>
      <el-tab-pane label="线条">
        <el-row>
          <el-col :span="8">Line Width</el-col>
          <el-col :span="12">
            <el-slider
              :min="1"
              :max="25"
              :step="1"
              size="mini"
              v-model="strokeWidth"
              @change="onStrokeWidthChange"
            />
          </el-col>
          <el-col :span="2">
            <div class="result">{{ strokeWidth }}</div>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="8">outLine Width</el-col>
          <el-col :span="12">
            <el-slider
              :min="1"
              :max="25"
              :step="1"
              size="mini"
              v-model="outStrokeWidth"
              @change="onOutStrokeWidthChange"
            />
          </el-col>
          <el-col :span="2">
            <div class="result">{{ outStrokeWidth }}</div>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="8">Line Color</el-col>
          <el-col :span="14">
            <el-input
              type="color"
              v-model="stroke"
              size="mini"
              style="width: 100%"
              @change="onStrokeChange"
            />
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="8">outLine Color</el-col>
          <el-col :span="14">
            <el-input
              type="color"
              v-model="outStroke"
              size="mini"
              style="width: 100%"
              @change="onOutStrokeChange"
            />
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="8">Dasharray</el-col>
          <el-col :span="12">
            <el-slider
              :min="0"
              :max="10"
              :step="1"
              size="mini"
              v-model="strokeDasharray"
              @change="onStrokeDasharray"
            />
          </el-col>
          <el-col :span="2">
            <div class="result">{{ strokeDasharray }}</div>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="8">Animation</el-col>
          <el-col :span="12">
            <el-slider
              :min="0"
              :max="50"
              :step="1"
              size="mini"
              v-model="animation"
              @change="onAnimation"
            />
          </el-col>
          <el-col :span="2">
            <div class="result">{{ animation }}</div>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="8">Connector</el-col>
          <el-col :span="14">
            <el-select
              style="width: 100%"
              size="mini"
              v-model="connector"
              @change="onConnectorChange"
            >
              <el-option value="normal">Normal</el-option>
              <el-option value="smooth">Smooth</el-option>
              <el-option value="rounded">Rounded</el-option>
              <el-option value="jumpover">Jumpover</el-option>
            </el-select>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="8">Router</el-col>
          <el-col :span="14">
            <el-select
              style="width: 100%"
              size="mini"
              v-model="edgeRouter"
              @change="onEdgeRouter"
            >
              <el-option value="normal">Normal</el-option>
              <el-option value="orth">Orth</el-option>
              <el-option value="oneSide">OneSide</el-option>
              <el-option value="manhattan">Manhattan</el-option>
              <el-option value="metro">Metro</el-option>
              <el-option value="er">Er</el-option>
            </el-select>
          </el-col>
        </el-row>
        <el-row v-show="edgeRouter == 'er'">
          <el-col :span="8">Edge Offset</el-col>
          <el-col :span="12">
            <el-slider
              :min="8"
              :max="64"
              :step="1"
              size="mini"
              v-model="edgeOffset"
            />
          </el-col>
          <el-col :span="2">
            <div class="result">{{ edgeOffset }}</div>
          </el-col>
        </el-row>
        <el-row v-show="edgeRouter == 'er'">
          <el-col :span="8">Edge Direction</el-col>
          <el-col :span="14">
            <el-select
              style="width: 100%"
              size="mini"
              v-model="edgeDirection"
            >
              <el-option value="L">L</el-option>
              <el-option value="R">R</el-option>
              <el-option value="H">H</el-option>
              <el-option value="T">T</el-option>
              <el-option value="B">B</el-option>
              <el-option value="V">V</el-option>
            </el-select>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span='8'>Node ZIndex</el-col>
          <el-col :span='12'>
            <el-slider size="mini" :min='0' :max='100' :step='1' v-model="ZIndex" style="width: 100%"/>
          </el-col>
          <el-col :span='2'>
            <div class="result">{{ ZIndex }}</div>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="8">Label</el-col>
          <el-col :span="14">
            <el-input
              v-model="label"
              size="mini"
              style="width: 100%"
              @change="onLabelChange"
            />
          </el-col>
        </el-row>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>
<script>
import FlowGraph from "../../../graph";
export default {
  name: 'index',
  data() {
    return {
      curCell: null
    }
  },
  computed: {
    strokeWidth: {
      get() {
        return this.$store.state.flow.strokeWidth
      },
      set(val) {
        this.$store.commit('flow/updatestrokeWidth', val)
      }
    },
    outStrokeWidth: {
      get() {
        return this.$store.state.flow.outStrokeWidth
      },
      set(val) {
        this.$store.commit('flow/updateoutStrokeWidth', val)
      }
    },
    stroke: {
      get() {
        return this.$store.state.flow.stroke
      },
      set(val) {
        this.$store.commit('flow/updatestroke', val)
      }
    },
    outStroke: {
      get() {
        return this.$store.state.flow.outStroke
      },
      set(val) {
        this.$store.commit('flow/updateoutStroke', val)
      }
    },
    strokeDasharray: {
      get() {
        return this.$store.state.flow.strokeDasharray
      },
      set(val) {
        this.$store.commit('flow/updatestrokeDasharray', val)
      }
    },
    animation: {
      get() {
        return this.$store.state.flow.animation
      },
      set(val) {
        this.$store.commit('flow/updateanimation', val)
      }
    },
    connector: {
      get() {
        return this.$store.state.flow.connector
      },
      set(val) {
        this.$store.commit('flow/updateconnector', val)
      }
    },
    edgeRouter: {
      get() {
        return this.$store.state.flow.edgeRouter
      },
      set(val) {
        this.$store.commit('flow/updateedgeRouter', val)
      }
    },
    edgeOffset: {
      get() {
        return this.$store.state.flow.edgeOffset
      },
      set(val) {
        this.$store.commit('flow/updateedgeOffset', val)
      }
    },
    edgeDirection: {
      get() {
        return this.$store.state.flow.edgeDirection
      },
      set(val) {
        this.$store.commit('flow/updateedgeDirection', val)
      }
    },
    ZIndex: {
      get() {
        return this.$store.state.flow.ZIndex
      },
      set(val) {
        this.$store.commit('flow/updateZIndex', val)
      }
    },
    label: {
      get() {
        return this.$store.state.flow.label
      },
      set(val) {
        this.$store.commit('flow/updatelabel', val)
      }
    }
  },
  props: { id: String },
  watch: {
    id: {
      handler() {
        const { graph } = FlowGraph;
        const cell = graph.getCellById(this.id);
        if (!cell || !cell.isEdge()) {
          return;
        }
        this.curCell = cell;
        this.ZIndex = cell.getZIndex()
        const connector = cell.getConnector() || {
          name: "normal",
        };
        this.stroke = cell.attr("line/stroke");
        this.strokeWidth = cell.attr("line/strokeWidth");
        this.connector = connector.name;
        this.label = (cell.getLabels()[0]?.attrs)?.text?.text || "";
      },
      deep: false,
      immediate: false
    },
    edgeOffset: {
      handler() {
        this.curCell?.prop('router/args', { offset: this.edgeOffset, direction: this.edgeDirection })
      },
      immediate: false
    },
    edgeDirection: {
      handler() {
        this.curCell?.prop('router/args', { offset: this.edgeOffset, direction: this.edgeDirection })
      },
      immediate: false
    },
    ZIndex: {
      handler() {
        if(this.curCell) {
          this.curCell?.setZIndex(this.ZIndex)
        }
      },
      immediate: false
    }
  },
  methods: {
    // 线边的宽度
    onStrokeWidthChange() {
      this.curCell?.attr("line/strokeWidth", this.strokeWidth);
      console.log(this.curCell, '----->>>')
    },
    // 外线边的宽度
    onOutStrokeWidthChange() {
      this.curCell?.attr("outline/strokeWidth", this.outStrokeWidth);
    },
    // 线边颜色
    onStrokeChange() {
      this.curCell?.attr("line/stroke", this.stroke);
    },
    // 外线边颜色
    onOutStrokeChange() {
      this.curCell?.attr("outline/stroke", this.outStroke);
    },
    // 虚线
    onStrokeDasharray() {
      this.curCell?.attr("line/strokeDasharray", this.strokeDasharray);
    },
    // 动画
    onAnimation() {
      this.curCell?.attr("line/style/animation", `ant-line ${this.animation}s infinite linear`);
    },
    // 连接方式
    onConnectorChange () {
      this.curCell?.setConnector(this.connector);
    },
    // 路由
    onEdgeRouter () {
      this.curCell?.setRouter({ name: this.edgeRouter })
    },
    onLabelChange() {
      this.curCell.setLabels([
        {
          attrs: {
            text: {
              text: this.label,
            },
          },
          position: {
            distance: 0.5,
          },
        },
      ]);
    }
  }
}
</script>
<style scoped>
.el-row {
  margin-bottom: 5px;
}
</style>>
