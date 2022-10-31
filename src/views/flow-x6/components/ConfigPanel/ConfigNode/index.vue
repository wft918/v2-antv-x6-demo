<template>
  <div style="width: 100%;height: 100%;">
    <el-tabs v-model="activeName">
      <el-tab-pane label="节点" name="1">
        <!-- 调节边框的颜色  对无边框的不起作用 -->
        <el-row v-show="nodeType == 'text'">
          <el-col :span='10'>Border Color</el-col>
          <el-col :span='14'>
            <el-input size="mini" type="color" v-model="nodeStroke" style="width: 100%" @change="onStrokeChange"/>
          </el-col>
        </el-row>
        <!-- 调节边框的宽度  对无边框的不起作用 -->
        <el-row v-show="nodeType == 'text'">
          <el-col :span='8'>Border Width</el-col>
          <el-col :span='12'>
            <el-slider size="mini" :min='1' :max='5' :step='1' v-model="nodeStrokeWidth" @change="onStrokeWidthChange"/>
          </el-col>
          <el-col :span='2'>
            <div class="result">{{nodeStrokeWidth}}</div>
          </el-col>
        </el-row>
        <!-- 填充颜色  对image不起作用 -->
        <el-row v-show="nodeType == 'text'">
          <el-col :span='8'>Fill isTransparent</el-col>
          <el-col :span='14'>
            <el-switch v-model="isNodeFill" active-color="#13ce66" inactive-color="#ff4949"></el-switch>
          </el-col>
        </el-row>
        <el-row v-show="nodeType == 'text' && !isNodeFill">
          <el-input size="mini" type="color" v-model="nodeFill" style="width: 100%" @change="onFillChange"/>
        </el-row>
        <!-- <el-row>
          <el-col :span='8'>Image Width</el-col>
          <el-col :span='14'>
            <el-slider :min='20' :max='300' :step='20' v-model="nodeImageWidth" style="width: 100%" @change="onImageWidth"/>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span='8'>Image Height</el-col>
          <el-col :span='14'>
            <el-slider :min='20' :max='300' :step='20' v-model="nodeImageHeight" style="width: 100%" @change="onImageHeight"/>
          </el-col>
        </el-row> -->
        <el-row v-show="nodeType == 'image'">
          <el-col :span='8'>Port ID</el-col>
          <el-col :span='14'>
            <el-select size="mini" v-model="portId" placeholder="请选择">
              <el-option label="top" value="port1" />
              <el-option label="right" value="port2" />
              <el-option label="bottom" value="port3" />
              <el-option label="left" value="port4" />
            </el-select>
          </el-col>
        </el-row>
        <el-row v-show="portId">
          <el-col :span='8'>Port Left</el-col>
          <el-col :span='12'>
            <el-slider size="mini" :min='-5' :max='100' :step='1' v-model="portX" style="width: 100%"/>
          </el-col>
          <el-col :span='2'>
            <div class="result">{{ portX }}</div>
          </el-col>
        </el-row>
        <el-row v-show="portId">
          <el-col :span='8'>Port Top</el-col>
          <el-col :span='12'>
            <el-slider size="mini" :min='-5' :max='100' :step='1' v-model="portY" style="width: 100%"/>
          </el-col>
          <el-col :span='2'>
            <div class="result">{{ portY }}</div>
          </el-col>
        </el-row>
        <el-row v-show="portId">
          <el-col :span='10'>Port Color</el-col>
          <el-col :span='14'>
            <el-input size="mini" type="color" v-model="portColor" style="width: 100%" @change="onPortColorChange"/>
          </el-col>
        </el-row>
        <el-row v-show="portId">
          <el-col :span='10'>Port Fill</el-col>
          <el-col :span='14'>
            <el-input size="mini" type="color" v-model="portFill" style="width: 100%" @change="onPortFillChange"/>
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
      </el-tab-pane>
      <el-tab-pane label="文本" name="2">
        <el-row>
          <el-col :span='8'>Font Size</el-col>
          <el-col :span='12'>
            <el-slider size="mini" :min='8' :max='16' :step='1' v-model="nodeFontSize" @change="onFontSizeChange"/>
          </el-col>
          <el-col :span='2'>
            <div class="result">{{ nodeFontSize }}</div>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span='8'>Font Color</el-col>
          <el-col :span='14'>
            <el-input size="mini" type="color" v-model="nodeColor" style="width: 100%" @change="onColorChange"/>
          </el-col>
        </el-row>
      </el-tab-pane>
      <el-tab-pane v-if="nodeType == 'text'" label="属性" name="3">
        <el-row>
          <el-col :span='8'>Status</el-col>
          <el-col :span='14'>
            <el-select size="mini" @change="onNodeStatusChange" v-model="nodeStatus" placeholder="请选择">
              <el-option label="停止" :value="0" />
              <el-option label="运行" :value="1" />
            </el-select>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span='8'>PointCode</el-col>
          <el-col :span='14'>
            <el-select size="mini" @change="onNodePointCode" v-model="nodePointCode" placeholder="请选择">
              <el-option label="52" value="52" />
              <el-option label="51" value="51" />
            </el-select>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span='8'>FieldName</el-col>
          <el-col :span='14'>
            <el-select size="mini" @change="onNodeFieldName" v-model="nodeFieldName" placeholder="请选择">
              <el-option label="fieldName1" value="fieldName1" />
              <el-option label="fieldName2" value="fieldName2" />
            </el-select>
          </el-col>
        </el-row>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>
<script>
import { nodeOpt } from "./method";
export default {
  data() {
    return {
      curCel: null,
      activeName: '1',
      isNodeFill: false
    }
  },
  props: { id: String },
  watch: {
    id: {
      handler() {
        this.curCel = nodeOpt(this.id, this.$store.state.flow)
        if(this.curCel) {
          this.ZIndex = this.curCel.getZIndex()
          this.isNodeFill = false
          if(this.nodeType == 'text') {
            this.curCel?.setData({
              status: this.nodeStatus ?? 0,
              pointCode: this.nodePointCode ?? '',
              fieldName: this.nodeFieldName ?? ''
            })
          }
        }
      },
      immediate: false,
      deep: true
    },
    portId: {
      handler() {
        if(this.portId) {
          const { x, y } = this.curCel?.getPortProp(this.portId)?.args
          if(x && y) {
            this.portX = parseInt(x.slice(0, -1))
            this.portY = parseInt(y.slice(0, -1))
          }
        }
      },
      immediate: false
    },
    portX: {
      handler() {
        this.curCel?.setPortProp(this.portId, 'args', { x: this.portX + '%', y: this.portY + '%' })
      },
      immediate: false
    },
    portY: {
      handler() {
        this.curCel?.setPortProp(this.portId, 'args', { x: this.portX + '%', y: this.portY + '%' })
      },
      immediate: false
    },
    ZIndex: {
      handler() {
        if(this.curCel) {
          this.curCel?.setZIndex(this.ZIndex)
        }
      },
      immediate: false
    },
    isNodeFill: {
      handler() {
        if(this.isNodeFill) {
          this.curCel?.attr('body/fill', 'transparent')
        } else {
          this.curCel?.attr('body/fill', '#fff')
        }
      },
      immediate: true
    }
  },
  computed: {
    nodeStroke: {
      get() {
        return this.$store.state.flow.nodeStroke
      },
      set(val) {
        this.$store.commit('flow/updatenodeStroke', val)
      }
    },
    nodeStrokeWidth: {
      get() {
        return this.$store.state.flow.nodeStrokeWidth
      },
      set(val) {
        this.$store.commit('flow/updatenodeStrokeWidth', val)
      }
    },
    nodeFill: {
      get() {
        return this.$store.state.flow.nodeFill
      },
      set(val) {
        this.$store.commit('flow/updatenodeFill', val)
      }
    },
    // nodeImageWidth: {
    //   get() {
    //     return this.$store.state.flow.nodeImageWidth
    //   },
    //   set(val) {
    //     this.$store.commit('flow/updatenodeImageWidth', val)
    //   }
    // },
    // nodeImageHeight: {
    //   get() {
    //     return this.$store.state.flow.nodeImageHeight
    //   },
    //   set(val) {
    //     this.$store.commit('flow/updatenodeImageHeight', val)
    //   }
    // },
    portId: {
      get() {
        return this.$store.state.flow.portId
      },
      set(val) {
        this.$store.commit('flow/updateportId', val)
      }
    },
    portX: {
      get() {
        return this.$store.state.flow.portX
      },
      set(val) {
        this.$store.commit('flow/updateportX', val)
      }
    },
    portY: {
      get() {
        return this.$store.state.flow.portY
      },
      set(val) {
        this.$store.commit('flow/updateportY', val)
      }
    },
    portColor: {
      get() {
        return this.$store.state.flow.portColor
      },
      set(val) {
        this.$store.commit('flow/updateportColor', val)
      }
    },
    portFill: {
      get() {
        return this.$store.state.flow.portFill
      },
      set(val) {
        this.$store.commit('flow/updateportFill', val)
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
    nodeFontSize: {
      get() {
        return this.$store.state.flow.nodeFontSize
      },
      set(val) {
        this.$store.commit('flow/updatenodeFontSize', val)
      }
    },
    nodeColor: {
      get() {
        return this.$store.state.flow.nodeColor
      },
      set(val) {
        this.$store.commit('flow/updatenodeColor', val)
      }
    },
    nodeStatus: {
      get() {
        return this.$store.state.flow.nodeStatus
      },
      set(val) {
        this.$store.commit('flow/updatenodeStatus', val)
      }
    },
    nodePointCode: {
      get() {
        return this.$store.state.flow.nodePointCode
      },
      set(val) {
        this.$store.commit('flow/updatenodePointCode', val)
      }
    },
    nodeFieldName: {
      get() {
        return this.$store.state.flow.nodeFieldName
      },
      set(val) {
        this.$store.commit('flow/updatenodeFieldName', val)
      }
    },
    nodeType: {
      get() {
        return this.$store.state.flow.nodeType
      },
      set(val) {
        this.$store.commit('flow/updatenodeType', val)
      }
    },
  },
  methods: {
    onStrokeChange () {
      this.curCel?.attr('body/stroke', this.nodeStroke)
    },

    onStrokeWidthChange () {
      this.curCel?.attr('body/strokeWidth', this.nodeStrokeWidth)
    },

    onFillChange () {
      this.curCel?.attr('body/fill', this.nodeFill)
    },

    // onImageWidth (e) {
    //   this.curCel?.attr('image/width', this.nodeImageWidth)
    // },

    // onImageHeight (e) {
    //   this.curCel?.attr('image/height', this.nodeImageHeight)
    // },

    onPortColorChange() {
      this.curCel?.setPortProp(this.portId, ['attrs', 'circle', 'stroke'], this.portColor)
    },

    onPortFillChange() {
      this.curCel?.setPortProp(this.portId, ['attrs', 'circle', 'fill'], this.portFill)
    },

    onFontSizeChange () {
      this.curCel?.attr('text/fontSize', this.nodeFontSize)
    },

    onColorChange () {
      this.curCel?.attr('text/fill', this.nodeColor)
    },

    onNodeStatusChange () {
      // this.curCel?.attr('data/status', this.nodeStatus)
      this.curCel?.setData({ status: this.nodeStatus })
    },
    onNodePointCode () {
      // this.curCel?.attr('data/pointCode', this.nodePointCode)
      this.curCel?.setData({ pointCode: this.nodePointCode })
    },
    onNodeFieldName () {
      // this.curCel?.attr('data/fieldName', this.nodeFieldName)
      this.curCel?.setData({ fieldName: this.nodeFieldName })
    }
  }
}
</script>

<style scoped>
.el-row {
  margin-bottom: 5px;
}
</style>
