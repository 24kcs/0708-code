function getItem(key){
  return JSON.parse(window.localStorage.getItem(key))
}
function setItem(key,value){
  window.localStorage.setItem(key,JSON.stringify(value))
}
function removeItem(key){
  window.localStorage.removeItem(key)
}
export{
  getItem,
  setItem,
  removeItem
}