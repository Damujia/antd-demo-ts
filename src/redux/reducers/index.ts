import { combineReducers } from 'redux'
import todos from './settodo'
import visibility from './visibility'
import tagList from './tagList'
import getmenu from './menus'
import getdetail from './detailinfo'
export default combineReducers({ todos, visibility, tagList, getmenu, getdetail })