import React ,{useEffect}from 'react'
import { Form, Input,Select,Modal,Space} from 'antd'

import BraftEditor from 'braft-editor'
import 'braft-editor/dist/index.css'
import styles from "./index.less"

const { Option } = Select

const controls=[
  'undo', 'redo','headings','font-size','bold','italic','underline','text-align','media']
const children = []
for (let i = 10; i < 36; i++) {
  children.push(<Option key={i.toString(36) + i}>{i.toString(36) + i}</Option>)
}
const data={
  title:"",
  content:"",
  tags:[]
}
const Writing=(props)=>{
  const [form] = Form.useForm()
  const onFinish = (values: any) => {
    console.log(values,"value")
  }
  const EditorChange = (values: any) => {
    data.content=values
  }
  const TitleChange = (e: any) => {
    data.tags=e.target.value
  }

  return (
    <div>
      <Modal
        title="编辑任务"
        width={920}
        visible={props.visible}
        onOk={props.hideModal}
        onCancel={props.hideModal}
        okText="确认"
        cancelText="取消"
        bodyStyle={{
          padding:20
        }}
      >
        <div>
          <Form className={styles.form} form={form} onFinish={onFinish}>
            <Form.Item name='title'>
              <Space size={14}>
                <span>标题</span>
                <Input
                  placeholder="请输入标题" className={styles.title}
                  defaultValue={props.data.title}
                  onChange={(e)=>{
                    TitleChange(e)
                  }}/>
              </Space>

            </Form.Item>
            <Form.Item name='content' className={styles.WritingContent}>
              <Space align="start" size={14}>
                <span>正文</span>
                <BraftEditor
                  controls={controls}
                  className={styles.text}
                  defaultValue={BraftEditor.createEditorState(props.data.content)}
                  placeholder="请输入正文"
                  onChange={(val)=>{
                    EditorChange(JSON.stringify(val.toHTML()))
                  }}
                />
              </Space>
            </Form.Item>
          </Form>
        </div>

      </Modal>
    </div>
  )
}

export default Writing
