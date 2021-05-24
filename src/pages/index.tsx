
import React, { useEffect } from "react"
import { history } from 'umi'
import styles from './index.less'

import Header from "@/components/header"
import Statistics from "@/pages/components/Statistics"
import Manage from "@/pages/components/manage"
import TaskView from "@/pages/components/task"


function Notification() {
  switch (history.location.hash) {
    case '#statistics':
      return <Statistics/>
    case '#manage':
      return <Manage/>
    case '#task':
      return <TaskView/>
    default:
      return <TaskView/>
  }
}
export default function IndexPage() {
  useEffect(()=>{
    console.log(history.location.hash);
  })
  return (
    <div className={styles.content}>
      <Header/>
      <div className={styles.main}>
        <Notification/>
      </div>
    </div>
  )
}
