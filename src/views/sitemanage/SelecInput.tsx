import React, { useState } from 'react';
import { withRouter } from 'react-router-dom';
import { Input, AutoComplete } from 'antd'
const Selectinput = (val: any) => {
  const {setName} = val
  const tableTit = ['name']
  const searchResult = (query: string) => {
    let a: any[] = []
    val.data.forEach((e: any, idx: number) => {
      tableTit.forEach(key => {
        let sel = {}
        if (e[key].indexOf(query) > -1) {
        
          const category = e.name;
          sel = {
            value: category,
            label: (
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                }}
              >
                <span>
                  测试
                  <span>
                    {category}
                  </span>
                </span>
                <span>{idx}</span>
              </div>
            ),
          };
          a.push(sel)
        }
      })
    });
    return a
  }
interface Op{
  value: string,
  label:HTMLElement
}
  const [options, setOptions] = useState<Op[]>([])
  const onSelect = (value: string) => {
    setName(value)
  }
  const onSearch = (value: string) => {
    setOptions(value ? searchResult(value) : [])
  }
  const getInfo = (value: string) => {
    setName(value)
  }
  return (
    <AutoComplete dropdownMatchSelectWidth={300} style={{ width: 300 }} options={options} onSelect={onSelect} onSearch={onSearch}>
      <Input.Search size="large" enterButton onSearch={getInfo} />
    </AutoComplete>
  )
}
export default withRouter(Selectinput);