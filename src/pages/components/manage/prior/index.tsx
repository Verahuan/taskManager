// input table 结合网络请求 数据处理过程交给服务端
import { Table, Form, Tag, Input ,LocaleProvider,Popconfirm, Typography} from 'antd'
import { useState } from 'react'
import zhCN from 'antd/lib/locale-provider/zh_CN'
import styles from './index.less'
import EditableCell from '@/pages/components/manage/utils'

import React from 'react'

const originData: any[] = []
const arr=["低","中","高","紧急"]
for (let i = 0; i < 4; i++) {
  originData.push({
    key: i,
    name: arr[i],
    type: i>1?"优先级名称":(<Tag color='red'>优先级名称</Tag>),
    operation:"delete"
  })
}

const PriorManagement = () => {
  const [form] = Form.useForm()
  const [data, changeDateSource] = useState(originData)
  const [editingKey, setEditingKey] = useState('')

  // 正在编辑的key
  const isEditing = (record) => record.key === editingKey
  // 编辑和取消
  const edit = (record) => {
    form.setFieldsValue({ name: '', type: '', ...record })
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
      title: '状态名称',
      dataIndex: 'name',
      editable: true,
    },
    {
      title: '显示样式',
      dataIndex: 'type',
      editable: false,
    },
    {
      title: '操作',
      dataIndex: 'operation',
      width: '10%',
      render: (_: any, record) => {
        const editable = isEditing(record);
        return editable ? (
          <span>
            <a href="javascript:;" onClick={() => save(record.key)} style={{
              marginRight: 8 ,
              color:"#0CCCC3"
            }}>
              保存
            </a>
            <Popconfirm title="Sure to cancel?" onConfirm={cancel} >
              <a style={{
                color:"#0CCCC3"
              }}>取消</a>
            </Popconfirm>
          </span>
        ) : (
          <Typography.Link disabled={editingKey !== ''} onClick={() => edit(record)} style={{
            color:"#0CCCC3"
          }}>
            编辑
          </Typography.Link>
        );
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
        inputType: col.dataIndex === 'age' ? 'number' : 'text',
        dataIndex: col.dataIndex,
        title: col.title,
        editing: isEditing(record),
      }),
    }
  })

  return (
    <>
      <LocaleProvider locale={zhCN}>
        <Form form={form} component={false}>
          <Table
            components={{
              body: {
                cell: EditableCell,
              },
            }}
            bordered
            dataSource={data}
            columns={mergedColumns}
            pagination={false}
          />
        </Form>
      </LocaleProvider>
      <div className={styles.foot}>列表从上至下代表优先级从低至高</div>
    </>
  )
}
export default PriorManagement
