<template>
  <div style="width: 100%;height: 100%;">
    <el-tabs v-model="activeName">
      <el-tab-pane label="网格" name="1">
        <el-row align="middle">
          <el-col :span='24'>
            <el-checkbox v-model="showGrid">
            Show Grid
            </el-checkbox>
          </el-col>
        </el-row>
        <el-row align="middle" v-show="showGrid">
          <el-col :span='10'>Grid Type</el-col>
          <el-col :span='12'>
            <el-select style="width: 100%" v-model="type">
              <el-option :value="GRID_TYPE.DOT">Dot</el-option>
              <el-option :value="GRID_TYPE.FIXED_DOT">Fixed Dot</el-option>
              <el-option :value="GRID_TYPE.MESH">Mesh</el-option>
              <el-option :value="GRID_TYPE.DOUBLE_MESH">Double Mesh</el-option>
            </el-select>
          </el-col>
        </el-row>
        <el-row align="middle" v-show="showGrid">
          <el-col :span='10'>Grid Size</el-col>
          <el-col :span='10'>
            <el-slider :min='1' :max='20' :step='1' v-model="size" />
          </el-col>
          <el-col :span='2'>
            <div class="result">{{size}}</div>
          </el-col>
        </el-row>
        <div v-if="type === 'doubleMesh' && showGrid">
          <el-row align="middle">
            <el-col :span='10'>Primary Color</el-col>
            <el-col :span='12'>
              <el-input
                  type="color"
                  v-model="color"
                  style="width: 100%"
              />
            </el-col>
          </el-row>
          <el-row align="middle">
            <el-col :span='10'>Primary Thickness</el-col>
            <el-col :span='10'>
              <el-slider :min='0.5' :max='10' :step='0.5 ' v-model="thickness" />
            </el-col>
            <el-col :span=2>
              <div class="result">{{ thickness.toFixed(1) }}</div>
            </el-col>
          </el-row>
          <el-row align="middle">
            <el-col :span='10'>Secondary Color</el-col>
            <el-col :span='12'>
              <el-input type="color" v-model="colorSecond" style="width: 100%" />
            </el-col>
          </el-row>
          <el-row align="middle">
            <el-col :span='10'>Secondary Thickness</el-col>
            <el-col :span='10'>
              <el-slider
                  :min='0.5'
                  :max='10'
                  :step='0.5'
                  v-model="thicknessSecond"
                />
            </el-col>
            <el-col :span=2>
              <div class="result">{{ thicknessSecond.toFixed(1) }}</div>
            </el-col>
          </el-row>
          <el-row align="middle">
            <el-col :span='10'>Scale Factor</el-col>
            <el-col :span='10'>
              <el-slider
                  :min='1'
                  :max='10'
                  :step='1'
                  v-model="factor"
                />
            </el-col>
            <el-col :span='2'>
              <div class="result">{{ factor }}</div>
            </el-col>
          </el-row>
        </div>
        <div v-else>
          <el-row align="middle" v-show="showGrid">
            <el-col :span='10'>Grid Color</el-col>
            <el-col :span='12'>
              <el-input type="color" v-model="color" style="width: 100%" />
            </el-col>
          </el-row>
          <el-row align="middle" v-show="showGrid">
            <el-col :span='10'>Thickness</el-col>
            <el-col :span='10'>
              <el-slider :min='0.5' :max='10' :step='0.5' v-model="thickness" />
            </el-col>
            <el-col :span=1>
              <div class="result">{{thickness.toFixed(1)}}</div>
            </el-col>
          </el-row>
        </div>
      </el-tab-pane>

      <el-tab-pane label="背景" name="2">
        <el-row align="middle">
          <el-col :span=6>Color</el-col>
          <el-col :span=14>
            <el-input type="color" v-model="bgColor" style= "width: 100%" />
          </el-col>
        </el-row>
        <el-row align="middle">
          <el-col :span="14" :offset="6">
            <el-checkbox v-model="showImage">
            Show Image
            </el-checkbox>
          </el-col>
        </el-row>
        <div v-if="showImage">
          <el-row align="middle">
            <el-col :span='6'>Repeat</el-col>
            <el-col :span='14'>
              <el-select style="width: 100%" v-model="repeat">
                <el-option :value="REPEAT_TYPE.NO_REPEAT">No Repeat</el-option>
                <el-option :value="REPEAT_TYPE.REPEAT">Repeat</el-option>
                <el-option :value="REPEAT_TYPE.REPEAT_X">Repeat X</el-option>
                <el-option :value="REPEAT_TYPE.REPEAT_Y">Repeat Y</el-option>
                <el-option :value="REPEAT_TYPE.ROUND">Round</el-option>
                <el-option :value="REPEAT_TYPE.SPACE">Space</el-option>
                <el-option :value="REPEAT_TYPE.FLIPX">Flip X</el-option>
                <el-option :value="REPEAT_TYPE.FLIPY">Flip Y</el-option>
                <el-option :value="REPEAT_TYPE.FLIPXY">Flip XY</el-option>
                <el-option :value="REPEAT_TYPE.WATERMARK">Watermark</el-option>
              </el-select>
            </el-col>
          </el-row>
          <div v-if="repeat === 'watermark'">
            <el-row align="middle">
              <el-col :span='16' :offset='6' style="font-size: 12px">
                Watermark Angle
              </el-col>
              <el-col :span='14' :offset='6'>
                <el-slider :min='0' :max='360' :step='1' v-model="angle" />
              </el-col>
              <el-col :span=2>
                <div class="result">{{angle}}</div>
              </el-col>
            </el-row>
          </div>

          <el-row align="middle">
            <el-col :span='6'>Position</el-col>
            <el-col :span='14'>
              <el-select style="width: 100%" v-model="position">
                <el-option value="center">center</el-option>
                <el-option value="left">left</el-option>
                <el-option value="right">right</el-option>
                <el-option value="top">top</el-option>
                <el-option value="bottom">bottom</el-option>
                <el-option value="50px 50px">50px 50px</el-option>
                <el-option :value="JSON.stringify({ x: 50, y: 50 })">
                  {`{ x: 50, y: 50 }`}
                </el-option>
              </el-select>
            </el-col>
          </el-row>
          <el-row align="middle">
            <el-col :span='6'>Size</el-col>
            <el-col :span='14'>
              <el-select style="width: 100%" v-model="bgSize" >
                <el-option value="auto auto">auto auto</el-option>
                <el-option value="cover">cover</el-option>
                <el-option value="contain">contain</el-option>
                <el-option value="30px 30px">30px 30px</el-option>
                <el-option value="100% 100%">100% 100%</el-option>
                <el-option :value="JSON.stringify({ width: 150, height: 150 })">
                  {`{width: 150, height: 150 }`}
                </el-option>
              </el-select>
            </el-col>
          </el-row>
          <el-row align="middle">
            <el-col :span='6'>Opacity</el-col>
            <el-col :span='12'>
              <el-slider
                  :min='0.05'
                  :max='1'
                  :step='0.05'
                  v-model="opacity"
                />
            </el-col>
            <el-col :span=4>
              <div class="result">{{ opacity.toFixed(2) }}</div>
            </el-col>
          </el-row>
        </div>
      </el-tab-pane>
    </el-tabs>
  </div> 
</template>

<script>
import GridOption from './method'
const GRID_TYPE_ENUM = {
  DOT : 'dot',
  FIXED_DOT : 'fixedDot',
  MESH : 'mesh',
  DOUBLE_MESH : 'doubleMesh',
}
const REPEAT_TYPE_ENUM = {
  NO_REPEAT : 'no-repeat',
  REPEAT : 'repeat',
  REPEAT_X : 'repeat-x',
  REPEAT_Y : 'repeat-y',
  ROUND : 'round',
  SPACE : 'space',
  FLIPX : 'flipX',
  FLIPY : 'flipY',
  FLIPXY : 'flipXY',
  WATERMARK : 'watermark',
}
export default {
  data() {
    return {
      GRID_TYPE: GRID_TYPE_ENUM,
      REPEAT_TYPE: REPEAT_TYPE_ENUM,
      activeName: '1'
    }
  },
  computed: {
    showGrid: {
      get() {
        return this.$store.state.flow.showGrid
      },
      set(val) {
        this.$store.commit('flow/updateshowGrid', val)
      }
    },
    type: {
      get() {
        return this.$store.state.flow.type
      },
      set(val) {
        this.$store.commit('flow/updatetype', val)
      }
    },
    size: {
      get() {
        return this.$store.state.flow.size
      },
      set(val) {
        this.$store.commit('flow/updatesize', val)
      }
    },
    color: {
      get() {
        return this.$store.state.flow.color
      },
      set(val) {
        this.$store.commit('flow/updatecolor', val)
      }
    },
    thickness: {
      get() {
        return this.$store.state.flow.thickness
      },
      set(val) {
        this.$store.commit('flow/updatethickness', val)
      }
    },
    colorSecond: {
      get() {
        return this.$store.state.flow.colorSecond
      },
      set(val) {
        this.$store.commit('flow/updatecolorSecond', val)
      }
    },
    thicknessSecond: {
      get() {
        return this.$store.state.flow.thicknessSecond
      },
      set(val) {
        this.$store.commit('flow/updatethicknessSecond', val)
      }
    },
    factor: {
      get() {
        return this.$store.state.flow.factor
      },
      set(val) {
        this.$store.commit('flow/updatefactor', val)
      }
    },
    bgColor: {
      get() {
        return this.$store.state.flow.bgColor
      },
      set(val) {
        this.$store.commit('flow/updatebgColor', val)
      }
    },
    showImage: {
      get() {
        return this.$store.state.flow.showImage
      },
      set(val) {
        this.$store.commit('flow/updateshowImage', val)
      }
    },
    repeat: {
      get() {
        return this.$store.state.flow.repeat
      },
      set(val) {
        this.$store.commit('flow/updaterepeat', val)
      }
    },
    angle: {
      get() {
        return this.$store.state.flow.angle
      },
      set(val) {
        this.$store.commit('flow/updateangle', val)
      }
    },
    position: {
      get() {
        return this.$store.state.flow.position
      },
      set(val) {
        this.$store.commit('flow/updateposition', val)
      }
    },
    bgSize: {
      get() {
        return this.$store.state.flow.bgSize
      },
      set(val) {
        this.$store.commit('flow/updatebgSize', val)
      }
    },
    opacity: {
      get() {
        return this.$store.state.flow.opacity
      },
      set(val) {
        this.$store.commit('flow/updateopacity', val)
      }
    }
  },
  watch: {
    'showGrid': {
      handler() {
        GridOption.isShowGrid(this.$store.state.flow)
      },
      immediate: false,
      deep: false
    },
    'type': {
      handler() {
        GridOption.gridOpt(this.$store.state.flow)
      },
      immediate: false,
      deep: false
    },
    'color': {
      handler() {
        GridOption.gridOpt(this.$store.state.flow)
      },
      immediate: false,
      deep: false
    },
    'thickness': {
      handler() {
        GridOption.gridOpt(this.$store.state.flow)
      },
      immediate: false,
      deep: false
    },
    'thicknessSecond': {
      handler() {
        GridOption.gridOpt(this.$store.state.flow)
      },
      immediate: false,
      deep: false
    },
    'colorSecond': {
      handler() {
        GridOption.gridOpt(this.$store.state.flow)
      },
      immediate: false,
      deep: false
    },
    'factor': {
      handler() {
        GridOption.gridOpt(this.$store.state.flow)
      },
      immediate: false,
      deep: false
    },
    'bgColor': {
      handler() {
        GridOption.backGroundOpt(this.$store.state.flow)
      },
      immediate: false,
      deep: false
    },
    'showImage': {
      handler() {
        GridOption.backGroundOpt(this.$store.state.flow)
      },
      immediate: false,
      deep: false
    },
    'repeat': {
      handler() {
        GridOption.backGroundOpt(this.$store.state.flow)
      },
      immediate: false,
      deep: false
    },
    'angle': {
      handler() {
        GridOption.backGroundOpt(this.$store.state.flow)
      },
      immediate: false,
      deep: false
    },
    'bgSize': {
      handler() {
        GridOption.backGroundOpt(this.$store.state.flow)
      },
      immediate: false,
      deep: false
    },
    'position': {
      handler() {
        GridOption.backGroundOpt(this.$store.state.flow)
      },
      immediate: false,
      deep: false
    },
    'opacity': {
      handler() {
        GridOption.backGroundOpt(this.$store.state.flow)
      },
      immediate: false,
      deep: false
    },
    'size': {
      handler() {
        GridOption.setGridSize(this.$store.state.flow)
      },
      immediate: false,
      deep: false
    },
  },
  created() {
    GridOption.gridOpt(this.$store.state.flow)
    GridOption.setGridSize(this.$store.state.flow)
    GridOption.backGroundOpt(this.$store.state.flow)
    GridOption.isShowGrid(this.$store.state.flow)
  }
}
</script>
