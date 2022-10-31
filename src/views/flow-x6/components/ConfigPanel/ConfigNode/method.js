import FlowGraph from "../../../graph";
import Store from '../../../../../store'

export function nodeOpt(id){
    let curCel = null;
    if (id) {
        const { graph } = FlowGraph
        const cell = graph.getCellById(id)
        if (!cell || !cell.isNode()) {
            return
        }
        curCel = cell
        Store.commit('flow/updatenodeStroke', cell.attr('body/stroke'))
        Store.commit('flow/updatenodeStrokeWidth', cell.attr('body/strokeWidth'))
        Store.commit('flow/updatenodeFill', cell.attr('body/fill'))
        Store.commit('flow/updatenodeFontSize', cell.attr('text/fontSize'))
        Store.commit('flow/updatenodeColor', cell.attr('text/fill'))
        Store.commit('flow/updateportId', '')
    }
    return curCel;
}
