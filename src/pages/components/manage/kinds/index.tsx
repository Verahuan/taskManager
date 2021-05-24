import React from "react"
import StateManagement from "@/pages/components/manage/state"

const originData: any[] = []
const kind=['需求功能','改进意见','自主任务','开发BUG','运营BUG','UX走查']
for (let i = 0; i < kind.length; i++) {
  originData.push({
    key: i,
    name: kind[i],
    operation: 'delete',
  })
}

const KindsManage=()=>{
  return(
    <StateManagement data={originData}/>
  )
}
export default KindsManage
