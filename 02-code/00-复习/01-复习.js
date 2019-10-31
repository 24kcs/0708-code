/**
 * 
 * React是什么? 
 *  是一个库,用来构建用户界面的,单向数据流,声明式,组件化
 *  组件:具有特定功能效果的集合
 *  组件化:多个组件进行开发(拆分组件--->静态组件--->动态组件)
 * JSX是什么?
 *  JavaScript XML js代码中遵循xml的规范,嵌入了看起来像html的代码
 * 通过React进行DOM操作,
 * 需要使用React核心库,还需要react-dom操作DOM库,由于是JSX的语法方式,还需要一个babel文件
 * babel作用: ES6转ES5,JSX转JS,
 * 写React代码:
 * 纯JS: 
 *  1).React.createElement('标签的类型',属性的对象,标签中间的内容)
 *  2).渲染界面:ReactDOM.render(虚拟DOM标签对象,存放该虚拟DOM标签的一个容器对象真实的DOM对象)
 * JSX:
 *  ReactDOM.render(虚拟DOM对象,真实的DOM对象容器)
 *  React中所有的标签都要有结束
 *  组件开发:
 *  1).工厂函数组件
 *  function 首字母大写的名字 () { 
 *    return (html标签代码---->虚拟DOM)
 *  }
 *  渲染: ReactDOM.render(<首字母大写的名字/>,真实的DOM对象容器)
 *  2).ES6类组件
 *  class 首字母大写的类名 extends React.Component{
 *    // 初始化的操作
 *    constructor(props){
 *      super(props)
 *    }
 *    render(){
 *      return (
 *        虚拟DOM的标签的代码
 *      )
 *    }
 *  }
 * 渲染组件:ReactDOM.render(<首字母大写的名字/>,真实的DOM对象容器)
 * React中常用的三个属性:
 *  1.state:是组件实例对象的一个属性(对象)
 *  里面存放的是一些状态数据,这些数据的变化,一般都会影响到界面的变化
 *  可以放在constructor中:this.state={数据的名字:数据的值}
 *  简化的写法:
 *   直接在组件内: state={数据的名字:数据的值} 组件内的this就是当前的实例对象
 *  2.props:是组件实例对象的一个属性(对象) 
 *   组件之间的通信:1)使用props
 *   需要通过当前的组件对象使用prop-types进行限定
 *   限定类型及是否是必须的:
 *   组件对象.propTypes={
 *    属性:PropTypes.类型.isRequired
 *   }
 *    限定默认值:
 *   组件对象.defaultProps={
 *    属性名字:默认值
 *   }
 *   上面的写法和组件的创建的代码分开了,不是一个整体
 *   使用static 关键字,把上面的代码中的组件对象干掉,这个位置放static 后面的代码直接书写可以了:例子如下：
 *    class 组件名字 extends React.Component{
 *     static propTypes={
 *        属性名字:PropTypes.类型名字.isRequired
 *     }
 *     static defaultProps={
 *        属性名字:默认值
 *    }
 *   }
 *  3.refs:是组件实例对象的一个属性(对象)
 *   可以获取某个虚拟DOM对象,然后可以获取该对象中的某些的属性值
 * 
 *  注意问题:创建组件的时候,如果涉及到虚拟DOM的事件处理的问题,那么要注意this的指向的问题:
 *  事件处理:
 * 
 *  为某个虚拟DOM对象添加事件: on后面的事件的名字的首字母是大写,后面的值需要使用{}包裹起来
 *  如:
 *  <p onClick={回调函数}></p> 回调函数---->this.回调函数
 *  回调函数会定义在类组件内: 此时的回调函数内部的this不是组件的实例对象
 *  当然:此时函数是这么写的:
 *  函数名(){} 这里的this不是组件实例对象
 *  两种方式:可以改变this的指向
 *  1) 在constructor 中 this.回调函数=this.回调函数.bind(this)
 *  2) 直接使用箭头函数: 函数名字=()=>{}
 * 
 *  注意问题:
 *  1. React中使用类样式的时候: className="值"
 *  2. style设置样式的时候 :  style={{属性名字:值}}
 * 
 * 
 * 课程介绍:
 * 1. refs
 * 2. 组合组件的使用--->例子:todoList来实现
 * 3. 受控组件和非受控组件
 * 4. React的生命周期的钩子----函数
 * 5. React中的key的问题
 * 6. 脚手架
 * 7. 脚手架做案例 
 * 
 * 
 *  
 *  
 * 
 * 
 * 
 * 
 */