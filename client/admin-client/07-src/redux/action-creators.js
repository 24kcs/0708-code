// 包含了多个同步及异步的action的creator---包含了多个生产action对象的工厂函数
// 引入action的type
import { SAVE_USER, REMOVE_USER, UPDATE_TITLE, GET_CATEGORIES, ADD_CATEGORY, UPDATE_CATEGORY, DEL_CATEGORY } from './action-types.js'
// 引入api
import { reqGetCategories, reqAddCategory, reqUpdateCategory, reqDelCategory } from '../api/index.js'
// 保存用户信息(的同时也要保存token)
export const saveUser = (value) => ({ type: SAVE_USER, data: value })
// 删除用户信息(的同时也要删除token)
export const removeUser = () => ({ type: REMOVE_USER })
// 更新title的信息
export const updateTitle = (value) => ({ type: UPDATE_TITLE, data: value })

// 获取分类列表数据的同步action
export const getCategoriesSuccess = (categories) => ({ type: GET_CATEGORIES, data: categories })
// 获取分类列表数据的异步action
export const getCategories = () => {
  return async (dispatch) => {
    // 发送异步请求,引入api
    const result = await reqGetCategories()
    if (result.status === 0) {
      dispatch(getCategoriesSuccess(result.data))
    }
  }
}
// 添加分类列表数据的同步action
export const addCategorySuccess = (category) => ({ type: ADD_CATEGORY, data: category })
// 添加分类列表数据的异步action
export const addCategory = (categoryName) => {
  return async (dispatch) => {
    const result = await reqAddCategory(categoryName)
    if (result.status === 0) {
      dispatch(addCategorySuccess(result.data))
    }
  }
}

// 更新分类列表数据的同步action
export const updateCategorySuccesss = (category) => ({ type: UPDATE_CATEGORY, data: category })
export const updateCategory = (categoryId, categoryName) => {
  return async (dispatch) => {
    const result = await reqUpdateCategory(categoryId, categoryName)
    if (result.status === 0) {
      dispatch(updateCategorySuccesss(result.data))
    }
  }
}
// 删除分类列表数据的同步action
export const delCategorySuccess = (categoryId) => ({ type: DEL_CATEGORY, data: categoryId })
export const delCategory = (categoryId) => {
  return async (dispatch) => {
    const result = await reqDelCategory(categoryId)
    if (result.status === 0) {
      dispatch(delCategorySuccess(result.data))
    }
  }
}