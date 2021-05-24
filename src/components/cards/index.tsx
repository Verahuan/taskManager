import React from "react"
import styles from './index.less'

const Card=(props)=>{
  return (
    <div
      className={styles.main}
      style={{
        width:props.width,
        height:props.height
      }}>
      <div className={styles.header}>
        <div className={styles.title}>{props.title?props.title:"标题如下"}</div>
      </div>
      <div className={styles.br}> </div>
      <div style={{
        display:"flex",
        justifyContent:"center",
        alignItems:"center"
      }}>
        {props.children}
      </div>
    </div>
  )
}

export default Card
