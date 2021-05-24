import React, { useState } from "react"
import { Drawer, Popconfirm, Space } from "antd"
import styles from './index.less'
import Writing from "@/components/writting"

const ContentShow=(props)=>{
  const [visible,changeVisible]=useState(false)
  const {title,name,addTime,freshTime,kinds,prior,state,handler,content}=props.data
  const showWriting=()=>{
    changeVisible(!visible)
  }
  const Delete=()=>{
    props.delete()
    props.changeVisible()
  }
  return (
    <div >
      <Writing visible={visible} hideModal={showWriting} data={props.data}/>
      <Drawer
        title="任务详情"
        placement="right"
        visible={props.visible}
        headerStyle={{
          fontSize: '16px',
          color:"#595959"
        }}
        closable={true}
        mask={false}
        width={800}
        onClose={props.onClose}
        style={{ marginTop:60}}
      >
        <Space size={20} className={styles.edit}>
          <div onClick={showWriting}>编辑</div>
          <Popconfirm
            title="确认删除吗？" onConfirm={Delete}>
            <a style={{
              color:'#0CCCC3'
            }}>删除</a>
          </Popconfirm>
        </Space>
        <div className={styles.full}>
          <div>
            <div className={styles.title}>{title}</div>
            <Space className={styles.info}>
              <div className={styles.auth}>由{name}</div>
              <div className={styles.time}>添加于{addTime}分钟前</div>
              <div className={styles.time}>更新于{freshTime}分钟前</div>
            </Space>
          </div>
          <div className={styles.desc}>
            <div className={styles.item}>
              <div><span className={styles.pre}>类型:</span> <span className={styles.back}>{kinds}</span></div>
              <div><span className={styles.pre}>优先级:</span> <span className={styles.back}>{prior}</span></div>
            </div>
            <div className={styles.item}>
              <div>状态: <span className={styles.back}>{state}</span></div>
              <div>指派给: <span className={styles.back}>{handler}</span></div>
            </div>
          </div>
          <div className={styles.contentTittle}>描述</div>
          <div className={styles.content}>{content}</div>
        </div>
      </Drawer>
    </div>
  )
}
ContentShow.defaultProps={
  title:"React props默认参数",
  name:"张欢欢",
  addTime:"43",
  freshTime:"34",
  kinds:"需求功能",
  prior:"低",
  state:"新建",
  handler:"张小欢",
  content:"视频播放器支持发布弹幕，视频播放器支持发布弹幕，视频播放器支持发布弹幕，视频播放器支持发布弹幕，视频播放器支持发布弹幕，视频播放器支持发布弹幕，视频播放器支持发布弹幕，视频播放器支持发布弹幕，视频播放器支持发布弹幕，视频播放器支持发布弹幕，视频播放器支持发布弹幕，视频播放器支持发布弹幕，视频播放器支持发布弹幕，视频播放器支持发布弹幕"
}

export default ContentShow
