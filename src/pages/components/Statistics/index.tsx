import React from "react"
import {Space} from 'antd'
import Card from "@/components/cards"
import Bar from "@/components/chars/Bar"
import Line from "@/components/chars/Line"
import SunSet from "@/components/chars/sunburst"
import {FullNumberSvgIcon,
  CloseNumberSvgSvgIcon,
  WaitCloseNumberSvgIcon,
  FilishedNumberSvgIcon} from '@/assets/svg'

import styles from './index.less'
import InfoTable from "@/components/table"
import CardShow from "@/components/chars/cardShow"

const BarDate=[100,20,34,56,90,78,30,60,80]

const Statistics=(props)=>{
  return (
    <div
      className={styles.content}>
      <div>
        <Space direction={"vertical"} size={20}>
          <Space size={20}>
            <CardShow
              icon={<FullNumberSvgIcon/>}
              number={1200}
              kind={"总单量"}
            />
            <CardShow
              icon={<CloseNumberSvgSvgIcon/>}
              number={300}
              kind={"已关闭单量"}
            />
            <CardShow
              icon={<WaitCloseNumberSvgIcon/>}
              number={900}
              kind={"未关闭单量"}
            />
            <CardShow
              icon={<FilishedNumberSvgIcon/>}
              number={'25%'}
              kind={"完成率"}
            />
          </Space>
          <Space size={20}>
            <Card width="928px" height="444px" title="各状态任务单情况">
              <Bar Ydata={BarDate}/>
            </Card>
            <Card width="296px" height="444px" title="各类型任务单完成情况">
              <SunSet/>
            </Card>
          </Space>
          <Card width="1244px" height="592px" title="各人员完成单量">
            <div>
              <Space>
                <Line/>
                <div style={{
                  width:480,
                  height:432
                }}>
                  <InfoTable/>
                </div>
              </Space>
            </div>

          </Card>
        </Space>

      </div>
    </div>
  )
}

export default Statistics
