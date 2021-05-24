import React from "react"
import {useEffect} from "react"
import * as echarts from 'echarts/lib/echarts'
import 'echarts/lib/chart/bar'

import { GridComponent } from 'echarts/components'
echarts.use([GridComponent])

const Bar=(props)=>{
  useEffect(() => {
    const option = {
      tooltip: {
        trigger: 'item',
        axisPointer: {            // 坐标轴指示器，坐标轴触发有效
          type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
        }
      },
      color:'#0CCCC3',
      grid: {
        left: '3%',
        right: '3%',
        bottom: '3%',
        containLabel: true
      },
      xAxis: [
        {
          type: 'category',
          data: ['新建', '设计中', '设计完成', '评审中', '开发中', '开发完成', '测试中','测试完成','关闭'],
          axisTick: {
            interval:0,
            alignWithLabel: true
          },
          axisLabel:{
            interval:0
          }
        }
      ],
      yAxis: [
        {
          type: 'value'
        }
      ],
      series: [
        {
          name: '直接访问',
          type: 'bar',
          barWidth: '60%',
          data: props.Ydata
        }
      ]
    }
    const myChart = echarts.init(document.getElementById('myChart'))
    myChart.setOption(option)
  }, [])
  return (
    <div id='myChart' style={{ width: 650, height: 281 }} >
    </div>
  )
}

export  default Bar
