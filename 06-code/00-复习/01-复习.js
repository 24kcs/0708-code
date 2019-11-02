/**
 * redux:用来集中式管理状态数据
 * action对象:放在一个单独的js文件模块中,需要暴露出来,文件中需要分别暴露多个函数,函数可能需要参数,函数内部需要返回一个对象(我们把这个对象叫action对象),对象中两个键值对,一个是type,一个是data
 * type:是数据变化的某个状态类型,这个类型可以做判断,根据判断类型,可以对数据进行不同的操作
 * data:data中存储的是调用该action对象中的方法传入的数据,需要在数据修改或者更新操作的时候传入到reduercs中,进行操作
 * store对象:放在一个js文件模块中,需要引入redux中的createStore,是一个函数,这个函数用来创建store对象的,还需要在该文件中引入reducers.js文件,引入这里的所有的函数,也就是说,如果要创建store对象就需要reducers的所有函数,并且需要把创建的store对象要暴露出去
 * reducers函数:首先也是一个js文件模块,需要向外面暴露这个里面的所有的函数
 * 这理的函数的作用:首先函数中需要传入一个默认值和一个action对象,函数内部会根据action对象的type进行判断,判断的不同就会对数据做不同的操作,一般type可能会比较多,建议使用switch-case语句进行判断,如果没有任何的数据操作,此时应该有default return 默认值
 * 注意:第一个参数:prevState,第二个参数:action,
 *  prevState---->一定要有默认值,界面中默认会调用一次reducers中的函数,进行数据的初始化
 * 一旦prevState的值发生变化后,那么下一次的prevState中就会存储上一次修改后的值
 * 每一次变化后的新值都会作为下一次数据的旧值
 * reducers可以进行合并
 * 需要引入redux中的combineReducers
 * export default combineReducers({
 *  函数名字,
 *  函数名字
 * })
 * 
 * 在组件中如何使用redux
 * 1.直接在组件中引入store.js文件,可以直接使用
 * 2.通过传入标签属性值的方式:<App store={store} />,组件内部需要用到props属性来获取store,做进一步的操作
 * 3.使用一个组件把App.jsx进行包裹,然后把store传入外部的父级组件中,Provider
 * store传入了<Provider store={store} />和<App/> 没有关系
 * 需要在App.jsx组件中使用connect进行连接,会把store对象中的数据,包括相关的方法,直接全部给App组件的props属性,
 * this.props.store.dispatch(action.increment(value))
 * this.props.increment(value)
 * connect设置:
 * export default connect(
 *  状态数据
 * (state)=>({number:state.number}),
 * {
 *  action中的方法
 *  increment,
 *  decrement
 * }
 * )(组件名字)
 * 
 * 容器组件:没有组件代码,没有用到store的数据,但是设置了connect(数据状态,方法)(UI组件)
 * UI组件:有组件代码,用到了store中的数据,在界面中的展示
 * 
 * thunk: 用来进行异步的操作,需要安装, npm install redux-thunk  ,引入 import thunk from 'redux-thunk'
 * redux做异步操作:
 * action-creators.js,原本返回的都是action对象,这些action,叫同步action对象
 *  如果做异步操作,函数的返回值是一个函数,叫异步action函数
 *  异步操作的函数,内部调用的是同步的action
 * 
 * 
 *  课程介绍:
 *  redux-devtools的插件使用
 *  高阶组件、及高阶组件传参,及装饰器的使用
 *  react后台管理项目
 * 
 * 
 * 
 * 
 * 
 */