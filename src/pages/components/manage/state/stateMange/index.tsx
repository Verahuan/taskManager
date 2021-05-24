import React from "react"
import styles from './index.less'
import { Button, Input, Space } from "antd"

const ADDState=()=>{
  return (
    <div className={styles.add}>
      <Space direction={"vertical"} size={12}>
        <Space direction={"vertical"} size={8}>
          <div>用户名称</div>
          <Input
            placeholder="添加状态"
            className={styles.input}
          />
        </Space>
        <Space className={styles.addBtn} size={16}>
          <Button>取消</Button>
          <Button style={{
            backgroundColor:"#0CCCC3",
            color:"white"
          }}>确认</Button>
        </Space>
      </Space>
    </div>
  )
}

export default ADDState
