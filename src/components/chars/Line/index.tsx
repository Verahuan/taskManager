import React from "react"
import {useEffect} from "react"
import * as echarts from 'echarts/lib/echarts'
import 'echarts/lib/chart/line'
import { LegendComponent } from 'echarts/components';
echarts.use([LegendComponent]);


const Line=(props)=>{
  useEffect(() => {
    const option =  {
      legend: {
        icon:'roundRect',
        itemHeight: 12,
        itemWidth: 12,
        x: '28px',
        y: '380px',
        data: ['计划单量', '完成单量', '完成率'],
        show:true
      },
      tooltip: {
        trigger: 'axis'
      },
      grid: {
        left: '3%',
        right: '4%',
        top:'3%',
        bottom: '10%',
        containLabel: true
      },
      xAxis: {
        type: 'category',
        boundaryGap: false,
        splitLine:{
          show:true
        },
        data: ['林大欢', '郑小米', '王大志', '小高', '王建', '张大大', '张三丰']
      },
      yAxis: [
        {type: 'value'},
        {
          type: 'value',
          splitLine:{
            show:false
          },
          min: 0,
          max: 100,
          interval: 10
        }
      ],
      series: [
        {
          name: '计划单量',
          type: 'line',
          stack: '总量',
          itemStyle:{
            color: 'rgba(12, 204, 195, 1)'
          },
          lineStyle: {
            color: 'rgba(12, 204, 195, 1)'
          },
          data: [120, 132, 101, 134, 90, 230, 210]
        },
        {
          name: '完成单量',
          type: 'line',
          stack: '总量',
          itemStyle:{
            color: 'rgba(65, 157, 250, 1)'
          },
          lineStyle: {
            color: 'rgba(65, 157, 250, 1)'
          },
          data: [220, 182, 191, 234, 290, 330, 310]
        },
        {
          name: '完成率',
          type: 'line',
          yAxisIndex: 1,
          itemStyle:{
            color: 'rgba(255, 143, 46, 1)',
          },
          lineStyle: {
            color: 'rgba(255, 143, 46, 1)',
          },
          data: [20, 10, 40, 50, 100, 30, 19]
        }
      ]
    }
    const myChart = echarts.init(document.getElementById('myChart2'))
    myChart.setOption(option)
  }, [])
  return (
    <div id='myChart2' style={{ width: 618, height: 400 }} >
    </div>
  )
}
export  default Line
