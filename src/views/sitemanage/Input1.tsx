import React, { useRef, forwardRef, useImperativeHandle } from 'react'
import { Input } from 'antd'
const Input1 = forwardRef((props, ref) => {
  const inputRef: any = useRef()
  useImperativeHandle(ref, () => ({
    value: inputRef.current
  }))
  return (
    <div>
      <Input size="large" ref={inputRef} />
    </div>
  )
})
export default Input1
