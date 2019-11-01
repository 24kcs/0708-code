// 引入redux
import {combineReducers} from 'redux'
import {UPDATESEARCH} from './action-types.js'
function searchName(prevState='',action){
  switch (action.type) {
    case UPDATESEARCH:
      return action.data
    default:
      return prevState
  }
}
export default combineReducers({
  searchName
})