import React, { useState } from "react"
import { Select, Divider, Input, Button,Checkbox  } from "antd"

import styles from './index.less'
import { SearchIcon } from "@/assets/svg"

const { Option } = Select

let index = 0


const TableSelect =(props)=>{
  const [name,setName]=useState("")
  const [items,setItems]=useState(['jack', 'lucy'])

  const onNameChange =(event) => {
    setName(event.target.value)
  }

  const addItem = () => {

    const newItems=items
    const newName=name
    setItems([...newItems, newName || `New item ${index++}`])
    setName('')
  }
  return (
    <Select
      className={styles.selection}
      placeholder={props.kind}
      dropdownClassName={styles.dropdown}
      dropdownMatchSelectWidth={200}
      dropdownRender={menu => (
        <div>
          <Input placeholder="请输入" value={name} prefix={<SearchIcon/>} className={styles.input} onChange={onNameChange} />
          <Divider style={{ margin: '4px 0' }} />
          {menu}
          <Divider style={{ margin: '4px 0' }} />
          <div style={{ display: 'flex', justifyContent:"center",flexWrap: 'nowrap', padding: 8 }}>
            <Button
              type={"primary"}
              onClick={addItem}
            >确定
            </Button>
          </div>
        </div>
      )}
    >
      {items.map(item => (
        <Option key={item}><Checkbox>{item}</Checkbox></Option>
      ))}
    </Select>
  )
}
export default TableSelect
