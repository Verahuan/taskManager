import React from "react"
import { Table ,Tabs } from 'antd'
import styles from './index.less'
import UsersManagement from "@/pages/components/manage/user"
import StateManagement from "@/pages/components/manage/state"
import PriorManagement from "@/pages/components/manage/prior"
import KindsManage from "@/pages/components/manage/kinds"

const { TabPane } = Tabs
const callback=()=>{
  console.log("zhh")
}
const tabBarStyle={
  color:'#595959'
}
const Manage=()=>{
  return(
    <Tabs defaultActiveKey="1" onChange={callback} className={styles.tab} tabBarStyle={tabBarStyle}>
      <TabPane tab="类型管理" key="1" >
        <KindsManage/>
      </TabPane>
      <TabPane tab="优先级管理" key="2">
        <PriorManagement/>
      </TabPane>
      <TabPane tab="状态管理" key="3">
        <StateManagement/>
      </TabPane>
      <TabPane tab="用户管理" key="4">
        <UsersManagement/>
      </TabPane>
    </Tabs>
  )
}
export default Manage
