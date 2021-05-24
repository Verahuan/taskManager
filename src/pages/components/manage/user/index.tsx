// input table 结合网络请求 数据处理过程交给服务端
import { Table, Button, Space, Popconfirm, Tag, Input, LocaleProvider, Form, Popover } from "antd"
import { useState } from 'react'
import zhCN from 'antd/lib/locale-provider/zh_CN'
import { SearchIcon, PlusCircleIcon } from '@/assets/svg'
import styles from './index.less'
import React from 'react'
import EditableCell from "@/pages/components/manage/utils"
import ADDUser from "@/pages/components/manage/user/userManage"

const originData: any[] = []
for (let i = 0; i < 46; i++) {
  originData.push({
    key: i,
    name: `张大大 ${i}`,
    stateFilter: i % 2 ? '管理员' : '普通用户',
    time: `${i}hours`,
    operation: 'delete',
  })
}

const UsersManagement = () => {
  const [form] = Form.useForm()
  const [data, changeDateSource] = useState(originData)
  const [editingKey, setEditingKey] = useState('')

  // 正在编辑的key
  const isEditing = (record) => record.key === editingKey
  // 编辑和取消
  const edit = (record) => {
    form.setFieldsValue({ name: '', ...record })
    setEditingKey(record.key)
  }
  const cancel = () => {
    setEditingKey('')
  }
  // 保存
  const save = async (key) => {
    try {
      const row = await form.validateFields()

      const newData = [...data]
      const index = newData.findIndex(item => key === item.key)
      if (index > -1) {
        const item = newData[index]
        newData.splice(index, 1, {
          ...item,
          ...row,
        })
        changeDateSource(newData)
        setEditingKey('')
      } else {
        newData.push(row)
        changeDateSource(newData)
        setEditingKey('')
      }
    } catch (errInfo) {
      console.log('Validate Failed:', errInfo)
    }
  }
  const columns = [
    {
      title: '标签名称',
      dataIndex: 'name',
      editable:true
    },
    {
      title: '用户角色',
      dataIndex: 'stateFilter',
      filters: [
        { text: '管理员', value: '管理员' },
        { text: '普通用户', value: '普通用户' },
      ],
      onFilter: (value, record) => record.stateFilter.indexOf(value) === 0,
    },
    {
      title: '操作',
      dataIndex: 'operation',
      width: 120,
      render: (_: any, record) => {
        const editable = isEditing(record)
        return editable ? (
          <span style={{
            color:"#0CCCC3"
          }}>
            <a href="javascript:;" onClick={() => save(record.key)} style={{ marginRight: 8,color:"#0CCCC3" }}>
              保存
            </a>
            <Popconfirm title="确认取消吗?" onConfirm={cancel}>
              <a style={{
                color:"#0CCCC3"
              }}>取消</a>
            </Popconfirm>
          </span>
        ) : (
          <Space
            size={16} style={{
              color:"#0CCCC3"
            }}>
            <a
              href="javascript:;"
              style={{
                marginRight: 8,
                color:"#0CCCC3"
              }}
              onClick={() => edit(record)}
            >
              编辑
            </a>
            <Popconfirm
              title="确认删除吗?"
              onConfirm={() => {
                const newDate = [...data]
                console.log(record.key)
                changeDateSource(
                  newDate.filter((item) => item.key !== record.key),
                )
              }}
            >
              <a style={{
                color:"#0CCCC3"
              }}>删除</a>
            </Popconfirm>
          </Space>
        )
      },
    },
  ]
  const mergedColumns = columns.map(col => {
    if (!col.editable) {
      return col
    }
    return {
      ...col,
      onCell: (record) => ({
        record,
        dataIndex: col.dataIndex,
        title: col.title,
        editing: isEditing(record),
      }),
    }
  })
  const [selectedRowKeys, SelectChange] = useState([])
  const [hasSelected, hasSelectedChange] = useState(false)
  const rowSelection = {
    selectedRowKeys,
    onChange: (selectedRowKeys) => {
      SelectChange(selectedRowKeys)
      hasSelectedChange(selectedRowKeys.length > 0)
    },
  }

  return (
    <>
      <Input
        placeholder="搜索标签名称"
        prefix={<SearchIcon />}
        className={styles.input}
      />
      <Popover content={<ADDUser/>} placement="bottom" trigger="click">
        <Button type="primary" icon={<PlusCircleIcon />} className={styles.btn}>
        新增用户
        </Button>
      </Popover>
      <LocaleProvider locale={zhCN}>
        <Form form={form} component={false}>
          <Table
            className={styles.table}
            components={{
              body:{
                cell:EditableCell}
            }
            }
            rowSelection={rowSelection}
            columns={mergedColumns}
            dataSource={data}
            pagination={{
              showQuickJumper: true,
              defaultPageSize: 20,
              showSizeChanger: true,
              onChange: cancel,
            }}
          />
          <div style={{ marginTop: 16 }} className={styles.deleteBtn}>
            <Popconfirm
              title="确定要删除吗？"
              onConfirm={() => {
                const newDate = [...data]
                changeDateSource(
                  newDate.filter((item) => !selectedRowKeys.includes(item.key)),
                )
                hasSelectedChange(false)
              }}
            >
              <Button type="primary" disabled={!hasSelected}>
            批量删除
              </Button>
            </Popconfirm>
            <span style={{ marginLeft: 8 }}>
              {hasSelected ? `选择了 ${selectedRowKeys.length} 项` : ''}
            </span>
          </div>
        </Form>
      </LocaleProvider>
    </>
  )
}
export default UsersManagement
