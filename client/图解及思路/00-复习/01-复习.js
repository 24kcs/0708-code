/**
 * 
 * redux:用来集中式管理状态数据
 * 什么使用使用redux?
 * 老大说了算!
 * 有多个状态数据,而且多个组件之间都需要(组件之间的通信)
 * 总结:
 * React中组件之间通信:
 * 1.props-----父子之间通信
 * 2.pubsub-js---任意组件之间通信---不属于react
 * 3.redux----任意组件之间通信
 * redux中有action对象,store对象,reducers函数
 * 如何使用redux
 * 1)安装
 * npm install redux-----createStore(reducers,applyMiddleware(thunk)),combineReducers用来合并reducers的函数的,暴露的是一个对象
 * npm install react-redux-------(applyMiddleware,connect)
 * npm install redux-thunk-----负责异步操作(redux不能做异步,但是装了包,就可以实现异步操作)
 * npm install redux-devtools-extension-----在浏览器中使用redux的插件,可以查看数据状态,及action的是哪个方法(action-creators中的方法) (composeWithDevTools)
 * action-creators.js文件:里面暴露多个函数,每个函数中都要返回一个对象,这个对象我们叫action对象(一般情况,如果函数中返回的是action对象,是同步action)
 * action对象中有一个type,还有一个data,函数中还会传入参数(要修改的数据的值)
 * 如果函数中的返回值是一个函数,我们叫异步action函数
 * type:用来判断当前的数据操作是哪一种类型(哪个type),根据不同的type做不同的数据操作
 * data:用来传入数据,进行更新操作
 * reducers函数: 也有多个函数,用来做数据更新操作的,需要两个参数,prevState=默认值,action对象,根据action对象的type不同则操作不同的数据更新
 * export defalut combineReducers({函数的名字})---外部获取数据状态的值:store.getState().函数名字
 * store对象:获取状态数据及分发action对象(action函数),并暴露createStore()其实就是store对象
 * store.dispatch(action.方法(值))
 * 直接把store传入到组件中
 * 在组件中如果想要获取状态数据,组件的实例对象:this.props.store.getState().属性名
 * 在组件中如果想要更新状态数据,组件的实例对象:this.props.store.dispatch(action.方法(值))
 * 仅仅是数据状态改变,界面没有重新渲染,需要手动调用store对象.subscribe(()=>{内部修改渲染界面的代码})
 * 
 * 但是,如果直接在组件中传入store,使用起来不方便,而且组件和store之间直接进行通信,最好的方式,组件和store之间不是直接进行通信,而是使用一个父级组件进行包裹,也可以使用高阶组件的方式了,而且还可以使用装饰器了
 * 
 * 首先从react-redux中引入Provider组件,传入store
 * 在组件内部使用高阶组件connect((state)=>({状态数据}),{分发的方法1,分发的方法2})(组件)store中的状态数据和分发的方法直接在组件的props中就存在了
 * connect高阶组件,就是把传入的组件变成了一个子组件,内部产生一个新的父级组件,在父级组件中,把状态数据及分发的方法/或者说store相关的东西全部通过props的方式传入子级组件
 * 
 * 高阶组件:参数是组件,返回值是组件
 * 装饰器:就是高阶组件的简写,es7的语法,需要配置babel(因为配置了antd),在config-overrides.js中引入addDecoratorsLegacy()并调用
 * 装饰器用法:@高阶组件的名字()
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 */