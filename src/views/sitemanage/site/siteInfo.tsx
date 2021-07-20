import React from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
const Siteinfo = (props: any) => {
  return (
    <div>{JSON.stringify(props.getdetail)}</div>
  )
}
const mapStateToProps = (state: any) => state
export default connect(mapStateToProps)(withRouter(Siteinfo))