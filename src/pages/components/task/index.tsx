// input table 结合网络请求 数据处理过程交给服务端
import { Table, Button, Space, Popconfirm, Tag, Input, LocaleProvider } from "antd"
import {useState} from 'react'
import {SearchIcon,PlusCircleIcon} from '@/assets/svg'
import styles from "./index.less"
import React from 'react'
import zhCN from "antd/lib/locale-provider/zh_CN"
import TableSelect from "@/components/selection"
import ContentShow from "@/components/Drawer"

const data: any[] = []
for (let i = 0; i < 46; i++) {
  data.push({
    key: i,
    title: `视频播放器改造支持弹幕`,
    author:"小欢欢",
    describe: 32,
    prior: i%2?"已发布":(<Tag color='red'>草稿</Tag>),
    state:i%2?"已发布":"草稿",
    kinds:'需求功能',
    operation:"delete"
  })
}

const defaultDate={
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
const TagsManagement=()=>{
  const [dataSource,changeDateSource]=useState(data)
  const [isVisible,changeVisibility]=useState(false)
  const [hasSelected, hasSelectedChange] = useState(false)
  const [selectedKey, selectedKeyChange] = useState(false)

  const Delete=()=>{
    const newDate=[...dataSource]
    changeDateSource(newDate.filter((item) => item.key !== selectedKey))
  }
  const IsShowDrawer=()=>{
    changeVisibility(!isVisible)
    console.log(isVisible,"isAfter")
  }
  const columns = [
    {
      title: '标题',
      dataIndex: 'title',
    },
    {
      title: '描述',
      dataIndex: 'describe',
    },
    {
      title: '类型',
      dataIndex: 'kinds',
      width: 120
    },
    {
      title: '优先级',
      dataIndex: 'prior',
    },
    {
      title: '状态',
      dataIndex: 'state',
    },
    {
      title: '作者',
      dataIndex: 'author',
    },
    {
      title: '操作',
      dataIndex: 'operation',
      width:120,
      fixed:"right",
      render: (_, record) =>
        data.length >= 1 ? (
          <Space size={16}>
            <a
              href="#"
              onClick={IsShowDrawer}
              style={{
                color:"#0CCCC3",
                marginRight: 8,
              }}
            >
              编辑
            </a>
            <Popconfirm
              title="确认删除吗？" onConfirm={() => {
                selectedKeyChange(record.key)
                Delete()
              }}>
              <a style={{
                color:"#0CCCC3"
              }}>删除</a>
            </Popconfirm>
          </Space>
        ) : null,
    },
  ]
  const [selectedRowKeys,SelectChange]=useState([])
  const rowSelection={
    selectedRowKeys,
    onChange: (selectedRowKeys)=>{
      changeVisibility(!isVisible)
      SelectChange(selectedRowKeys)
      hasSelectedChange(selectedRowKeys.length > 0)
    }}
  return (
    <div id="task">
      <div className={styles.content} >
        <div className={styles.title}>任务列表</div>
        <ContentShow
          visible={isVisible}
          data={defaultDate}
          onClose={IsShowDrawer}
          delete={Delete}
          changeVisible={IsShowDrawer}
        />
        <LocaleProvider locale={zhCN}>
          <Space size={24} className={styles.header}>
            <Input placeholder="搜索标签名称" prefix={<SearchIcon/>} className={styles.input}/>
            <TableSelect kind="类型"/>
            <TableSelect kind="优先级"/>
            <TableSelect kind="状态"/>
            <TableSelect kind="作者"/>
          </Space>
          <Button type="primary" icon={<PlusCircleIcon />} className={styles.btn}>
        新键标签
          </Button>
          <Table
            scroll={{ x: 1244 }}
            rowSelection={rowSelection} columns={columns} dataSource={dataSource} pagination={{
              showQuickJumper:true,
              defaultPageSize:20,
              showSizeChanger:true}} />
          <div style={{ marginTop: 16 }} className={styles.deleteBtn}>
            <Popconfirm
              title="确认删除吗?" onConfirm={() => {
                const newDate=[...dataSource]
                changeDateSource(newDate.filter((item) => !selectedRowKeys.includes(item.key)))
                hasSelectedChange(false)
              }}>
              <Button type="primary" disabled={!hasSelected}>
              批量删除
              </Button>
            </Popconfirm>
            <span style={{ marginLeft: 8 }}>
              {hasSelected ? `选择 ${selectedRowKeys.length} 项` : ''}
            </span>
          </div>
        </LocaleProvider>
      </div>
    </div>
  )
}
export default TagsManagement
