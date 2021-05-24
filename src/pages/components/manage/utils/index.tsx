import { Form, Input } from "antd"
import React from "react"

const EditableCell= (props) => {
  const {editing,dataIndex,title,children}=props
  return (
    <td>
      {editing ? (
        <Form.Item
          name={dataIndex}
          style={{ margin: 0 }}
          rules={[
            {
              required: true,
              message: `Please Input ${title}!`,
            },
          ]}
        >
          <Input/>
        </Form.Item>
      ) : (
        children
      )}
    </td>
  )
}
export default EditableCell
