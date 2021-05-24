import React, { useState } from "react"
import styles from "./index.less"
import { Button, Input, Radio, Space } from "antd"

const ADDUser=()=>{
  const [value, setValue] = useState(1)
  const onChange = e => {
    console.log('radio checked', e.target.value)
    setValue(e.target.value)
  }
  return (
    <div className={styles.add}>
      <Space direction={"vertical"} size={26}>
        <Space direction={"vertical"} size={8}>
          <div>用户名称</div>
          <Input
            placeholder="添加用户"
            className={styles.input}
          />
        </Space>
        <Space direction={"vertical"} size={8}>
          <div>用户角色</div>
          <Radio.Group onChange={onChange} value={value}>
            <Space size={24}>
              <Radio value={1}>管理员</Radio>
              <Radio value={2}>普通用户</Radio>
            </Space>
          </Radio.Group>
        </Space>
      </Space>
      <Space className={styles.addBtn} size={16}>
        <Button>取消</Button>
        <Button style={{
          backgroundColor:"#0CCCC3",
          color:"white"
        }}>确认</Button>
      </Space>

    </div>
  )
}

export default ADDUser
