import React from "react"
import styles from './index.less'
import { Link } from 'umi'

const Tabs=(props)=>{
  return (
    <div className={styles.tab} id={props.id}>
      <a href={`#${props.id}`} className={styles.tabText}  >
        {props.value?props.value:'test'}
      </a>
      <div  className={styles.tabBr}> </div>
    </div>
  )
}

export default Tabs
