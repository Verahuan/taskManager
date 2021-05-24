import React from "react"
import {Space} from "antd"
import styles from './index.less'

const CardShow=(props)=>{
  const {kind,number}=props
  return (
    <div className={styles.card}>
      <Space size={20} className={styles.content}>
        <div>{props.icon}</div>
        <div>
          <Space direction={'vertical'} size={8}>
            <span className={styles.number}>{number}</span>
            <span className={styles.kind}>{kind}</span>
          </Space>
        </div>
      </Space>
    </div>
  )
}
export default CardShow
