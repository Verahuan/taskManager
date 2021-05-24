import React from "react"
import {useEffect} from "react"
import * as echarts from 'echarts/lib/echarts'
import {Space} from 'antd'

import { TooltipComponent } from 'echarts/components'
import { SunburstChart } from 'echarts/charts'
import { LegendComponent } from 'echarts/components'

echarts.use([LegendComponent])
echarts.use([TooltipComponent])
echarts.use([SunburstChart])


const data=[{
  children: [{
    name: '需求功能',
    value: 3,
    itemStyle:{
      color:'rgba(120, 229, 220, 1)'
    },
    children:[
      {
        name:"DONE",
        value:1,
        itemStyle:{
          color:'rgba(188, 247, 239, 1)'
        },
      },{
        name:"TODO",
        value:2,
        itemStyle:{
          color:'rgba(230, 255, 251, 1)'
        },
      }]
  }, {
    name: '开发BUG',
    value: 5,
    itemStyle:{
      color:'rgba(255, 138, 138, 1)'
    },
    children:[
      {
        name:"DONE",
        value:1,
        itemStyle:{
          color:'rgba(255, 197, 194, 1)'
        }
      },{
        name:"TODO",
        value:2,
        itemStyle:{
          color:'rgba(255, 242, 240, 1)'
        }
      }]
  },{
    name: '改进意见',
    value: 6,
    itemStyle:{
      color:'rgba(255, 200, 138, 1)'
    },
    children:[
      {
        name:"DONE",
        value:1,
        itemStyle:{
          color:'rgba(255, 233, 204, 1)'
        }
      },{
        name:"TODO",
        value:2,
        itemStyle:{
          color:'rgba(255, 249, 240, 1)'
        }
      }]
  },{
    name: '运营BUG',
    value: 7,
    itemStyle:{
      color:'rgba(200, 158, 255, 1)'
    },
    children:[
      {
        name:"DONE",
        value:1,
        itemStyle:{
          color:'rgba(228, 204, 255, 1)'
        }
      },{
        name:"TODO",
        value:2,
        itemStyle:{
          color:'rgba(248, 240, 255, 1)'
        }
      }]
  },{
    name: '自主任务',
    value: 4,
    itemStyle:{
      color:'rgba(133, 198, 255, 1)'
    },
    children:[
      {
        name:"DONE",
        value:1,
        itemStyle:{
          color:'rgba(199, 232, 255, 1)'
        }
      },{
        name:"TODO",
        value:2,
        itemStyle:{
          color:'rgba(240, 250, 255, 1)'
        }
      }]
  },{
    name: 'UX走查',
    value: 3,
    itemStyle:{
      color:'rgba(114, 229, 247, 1)'
    },
    children:[
      {
        name:"DONE",
        value:1,
        itemStyle:{
          color:'rgba(194, 251, 255, 1)'
        }
      },{
        name:"TODO",
        value:2,
        itemStyle:{
          color:'rgba(240, 255, 255, 1)'
        }
      }]
  }]
}]

const option = {
  grid: {
    left: 0,
    right: 0,
    top:0,
    bottom: 0,
    containLabel: true
  },
  tooltip: {
    trigger: 'axis'
  },
  series: {
    type: 'sunburst',
    emphasis: {
      focus: 'ancestor'
    },
    highlightPolicy: 'descendant',
    nodeClick:false,
    levels: [
      {

      },
      {
        // 最靠内测的第一层
        itemStyle: {
          color: 'white'
        },
        label: {
          color: 'blue'
        }
      },
      {
        // 第二层 ...
      }
    ],
    data,
    radius: [0, '90%'],
    label: {
      show: false,
    }
  }
}
const Circle=(props)=>{
  return (
    <Space
      size={8} style={{
        width:'64px',
        marginBottom:'12px'
      }}>
      <div style={{
        width:8,
        height:8,
        borderRadius:'50%',
        backgroundColor:props.color
      }}>
      </div>
      <div style={{
        fontSize:'12px',
        color:'#595959',
        height:'18px',
        lineHeight:'18px'
      }}>{props.title}</div>
    </Space>
  )
}
const SunSet=(props)=>{
  useEffect(()=>{
    const myChart = echarts.init(document.getElementById('myChart1'))
    myChart.setOption(option)
  }, [])
  return (
    <div>
      <div id='myChart1' style={{ width: 190, height: 190}} >
      </div>
      <div>
        <div style={{
          padding:8,
          width:190
        }}>
          <Space size={32}>
            <Circle color='rgba(120, 229, 220, 1)' title="需求功能"/>
            <Circle color='rgba(255, 138, 138, 1)' title="开发BUG"/>
          </Space>
          <Space size={32}>
            <Circle color='rgba(255, 200, 138, 1)' title="改进意见"/>
            <Circle color='rgba(200, 158, 255, 1)' title="运营BUG"/>
          </Space>
          <Space size={32}>
            <Circle color='rgba(133, 198, 255, 1)' title="自主任务"/>
            <Circle color='rgba(114, 229, 247, 1)' title="UX走查"/>
          </Space>

        </div>
      </div>
    </div>
  )
}

export default SunSet
