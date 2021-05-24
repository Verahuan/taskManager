import React from "react"
import styles from './index.less'
import { Link } from 'umi'
import {Space,Affix} from 'antd'

// 自己写的组件
import Tabs from '@/components/Tabs'
// Tabs自己写

import  {
  DownIcon,
  TriangleIcon,
  TriangleReverseIcon,
} from '@/assets/svg'

const Header=()=>{
  const callback=(key)=>{
    console.log(key)
  }
  return (
    <Affix offsetTop={0}>
      <div className={styles.header}>
        <div className={styles.left}>
          <Link to="/" className={styles.logo}>
            <Space align="center" size={8} className="logo" >
              <Space size={-10} align="start">
                <TriangleIcon/>
                <TriangleReverseIcon/>
              </Space>
              <div
                className="logoText"
              >Logo
              </div>
            </Space>
          </Link>
          <Tabs value="任务列表" id='task' onChange={callback}>
          </Tabs>
          <Tabs value="统计数据" id='statistics' onChange={callback}>
          </Tabs>
          <Tabs value="属性管理" id='manage' onChange={callback}>
          </Tabs>
        </div>
        <div className={styles.right}>

        </div>
      </div>
    </Affix>
  )
}
export default Header
