export default {
  namespaced: true,
  state: {
    showGrid: false,
    type: 'mesh',
    size: 10,
    color: '#e5e5e5',
    thickness: 1,
    colorSecond: '#d0d0d0',
    thicknessSecond: 1,
    factor: 4,
    bgColor: '#e5e5e5',
    showImage: false,
    repeat: 'watermark',
    angle: 30,
    position: 'center',
    bgSize: JSON.stringify({ width: 150, height: 150 }),
    opacity: 0.9,

    strokeWidth: 4,
    outStrokeWidth: 7,
    stroke: '#cfe7f2',
    outStroke: '#456d89',
    strokeDasharray: 1,
    animation: 0,
    connector: 'normal',
    edgeRouter: 'metro',
    edgeOffset: 32,
    edgeDirection: 'H',
    label:'',

    nodeStroke: '#5F95FF',
    nodeStrokeWidth: 1,
    nodeFill: '#ffffff',
    // nodeImageWidth: 60,
    // nodeImageHeight: 60,
    portId: '',
    portX: 0,
    portY: 0,
    portColor: '#5F95FF',
    portFill: '#FFF',
    ZIndex: 0,
    nodeFontSize: 12,
    nodeColor: '#080808',
    // 业务数据
    nodeStatus: 0,
    nodePointCode: '52',
    nodeFieldName: 'fieldName1',

    nodeType: '' // 节点类型(text、image)
  },
  mutations: {
    updateshowGrid(state, showGrid) {
      state.showGrid = showGrid
    },
    updatetype(state, type) {
      state.type = type
    },
    updatesize(state, size) {
      state.size = size
    },
    updatecolor(state, color) {
      state.color = color
    },
    updatethickness(state, thickness) {
      state.thickness = thickness
    },
    updatecolorSecond(state, colorSecond) {
      state.colorSecond = colorSecond
    },
    updatethicknessSecond(state, thicknessSecond) {
      state.thicknessSecond = thicknessSecond
    },
    updatefactor(state, factor) {
      state.factor = factor
    },
    updatebgColor(state, bgColor) {
      state.bgColor = bgColor
    },
    updateshowImage(state, showImage) {
      state.showImage = showImage
    },
    updaterepeat(state, repeat) {
      state.repeat = repeat
    },
    updateangle(state, angle) {
      state.angle = angle
    },
    updateposition(state, position) {
      state.position = position
    },
    updatebgSize(state, bgSize) {
      state.bgSize = bgSize
    },
    updateopacity(state, opacity) {
      state.opacity = opacity
    },


    updatestrokeWidth(state, strokeWidth) {
      state.strokeWidth = strokeWidth
    },
    updateoutStrokeWidth(state, outStrokeWidth) {
      state.outStrokeWidth = outStrokeWidth
    },
    updatestroke(state, stroke) {
      state.stroke = stroke
    },
    updateoutStroke(state, outStroke) {
      state.outStroke = outStroke
    },
    updatestrokeDasharray(state, strokeDasharray) {
      state.strokeDasharray = strokeDasharray
    },
    updateanimation(state, animation) {
      state.animation = animation
    },
    updateconnector(state, connector) {
      state.connector = connector
    },
    updateedgeRouter(state, edgeRouter) {
      state.edgeRouter = edgeRouter
    },
    updateedgeOffset(state, edgeOffset) {
      state.edgeOffset = edgeOffset
    },
    updateedgeDirection(state, edgeDirection) {
      state.edgeDirection = edgeDirection
    },
    updatelabel(state, label) {
      state.label = label
    },
    

    updatenodeStroke(state, nodeStroke) {
      state.nodeStroke = nodeStroke
    },
    updatenodeStrokeWidth(state, nodeStrokeWidth) {
      state.nodeStrokeWidth = nodeStrokeWidth
    },
    updatenodeFill(state, nodeFill) {
      state.nodeFill = nodeFill
    },
    // updatenodeImageWidth(state, nodeImageWidth) {
    //   state.nodeImageWidth = nodeImageWidth
    // },
    // updatenodeImageHeight(state, nodeImageHeight) {
    //   state.nodeImageHeight = nodeImageHeight
    // },
    updateportId(state, portId) {
      state.portId = portId
    },
    updateportX(state, portX) {
      state.portX = portX
    },
    updateportY(state, portY) {
      state.portY = portY
    },
    updateportColor(state, portColor) {
      state.portColor = portColor
    },
    updateportFill(state, portFill) {
      state.portFill = portFill
    },
    updateZIndex(state, ZIndex) {
      state.ZIndex = ZIndex
    },
    updatenodeFontSize(state, nodeFontSize) {
      state.nodeFontSize = nodeFontSize
    },
    updatenodeColor(state, nodeColor) {
      state.nodeColor = nodeColor
    },
    updatenodeStatus(state, nodeStatus) {
      state.nodeStatus = nodeStatus
    },
    updatenodePointCode(state, nodePointCode) {
      state.nodePointCode = nodePointCode
    },
    updatenodeFieldName(state, nodeFieldName) {
      state.nodeFieldName = nodeFieldName
    },


    updatenodeType(state, nodeType) {
      state.nodeType = nodeType
    }
  }
}