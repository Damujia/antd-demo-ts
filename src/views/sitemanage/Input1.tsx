import React from 'react'
import { Input } from 'antd'
const Input1 = (props: any) => {
  const search = (e: any) => {
    props.callback(e.target.value)
  }
  return (
    <div>
      <Input onChange={search} size="large" />
    </div>
  )
}
export default Input1
