import React from "react";
import { Table } from 'antd';
import styles from './index.less'
const dataSource = [
  {
    key: '1',
    name: '张三',
    plan: 32,
    finish: 12,
  },  {
    key: '2',
    name: '李三',
    plan: 32,
    finish: 34,
  },  {
    key: '3',
    name: '王三',
    plan: 32,
    finish: 67,
  },  {
    key: '4',
    name: '张二',
    plan: 32,
    finish: 90,
  },  {
    key: '5',
    name: '王五',
    plan: 32,
    finish: 3,
  },  {
    key: '6',
    name: '张大大大大大大大大',
    plan: 32,
    finish: 12,
  }
];

const columns = [
  {
    title: '用户',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: '计划单量',
    dataIndex: 'plan',
    key: 'name',
  },
  {
    title: '完成单量',
    dataIndex: 'finish',
    key: 'name',
  }
];
const getRowClassName=(record,index)=>{
  let className=''
  className=index%2===0?styles.oddRow:styles.evenRow
  return className
}
const  InfoTable=()=>{
  return (
    <div className={styles.root}>
      <Table dataSource={dataSource} columns={columns} pagination={false} rowClassName={getRowClassName}> </Table>
    </div>
  )
}
export default InfoTable
