import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { addTag, removeTag } from '../../redux/actions/tagList'
import { withRouter } from 'react-router-dom'
// import { menus } from '@/router/menus'
import { Scrollbars } from 'react-custom-scrollbars'; // 流畅的滚动条

const Tags = (props: any) => {
  const rouclick = (val: any) => {
    props.history.push(val)
  };
  // 关闭标签事件
  const removetag = (event: any, val: string) => {
    let { tagList, location } = props
    event.stopPropagation()
    props.removeTag(val)
    if (location.pathname === val) {
      if (val !== tagList[tagList.length - 1].path) {
        props.history.push(tagList[tagList.length - 1].path)
      } else if (val === tagList[tagList.length - 1].path) {
        props.history.push(tagList[tagList.length - 2].path)
      }
    }
  };
  useEffect(() => {
    getTaginfo()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[])
  const getTaginfo = () => {
    // 渲染页面标签
    let { location, getmenu } = props
    let tags = JSON.parse(sessionStorage.getItem('menu') as string) || []
    props.addTag({
      id: '1',
      authName: '首页',
      path: '/main',
    })
    tags.forEach((e: any) => {
      if (e.authName !== '首页') {
        props.addTag(e)
      }
    })
    getmenu.forEach((e: any) => {
      if (e.children) {
        e.children.forEach((f: any) => {
          if (f.path === location.pathname) {
            props.addTag(f)
          }
        })
      } else {
        if (e.path === location.pathname) {
          props.addTag(e)
        }
      }
    })
  };
  let { tagList, location } = props
  let datas = []
  for (let i = 1; i < 30; i++) {
    datas.push('标签' + i)
  }
  return (
    <div className="tags_sty">
      <div className="tags_sty_demo">
        <Scrollbars style={{ width: '100%', height: 45 }} autoHide universal={true}>
          <ul className="tags_ul">
            {
              tagList.map((e: any) => (
                <li key={e.path} onClick={() => rouclick(e.path)} className={e.path === location.pathname ? 'selcolor' : ''}>
                  <span>{e.authName}</span>
                  <em onClick={event => removetag(event, e.path)}>
                    &times;
                    </em>
                </li>
              ))
            }
          </ul>
        </Scrollbars>
      </div>
    </div>
  )
};
const mapStateToProps = (state: any) => state
const mapDispatchToProps = (dispatch: any) => ({
  addTag: (data: any) => {
    dispatch(addTag(data))
  },
  removeTag: (data: any) => {
    dispatch(removeTag(data))
  }
})
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(Tags));