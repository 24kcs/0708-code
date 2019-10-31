/**
 * 
 * 
 * React用于构建用户界面的JavaScript库
 * 构建:搭建,动态显示用户界面,简单理解,直接操作数据,界面就变化
 * 特点:
 * 1.声明式,完成部分编写,就可以显示界面,不用自己操作DOM
 * 2.组件化,具有特定功能效果集合(组件)
 * 3.一次学习,随处编写
 * 4.虚拟化DOM,操作的是虚拟的DOM,真实DOM就会变化(React来完成)
 * 5.DOM Diff算法,最小化页面重绘(内部算法)
 * 6.babel---->以前是es6转es5,现在也可以是jsx转js
 * 7.bootcdn转获取react.development
 * 
 * 问题总结:
 *  1.问题: script标签中的type="text/javascript" 会报错:Uncaught SyntaxError: Unexpected token <
 *  解决: 修改script标签中的type="text/babel" 
 * 
 *  2.问题:div标签中使用class="root1" 
 *  const h1 = React.createElement('h1', { id: myId }, text)
 *  ReactDOM.render(h1, document.getElementById('root1'))
 * 会报错:react-dom.development.js:25173 Uncaught Invariant Violation: Target container is not a DOM element
 *  解决: 把class="root1" 改为:   id="root1"
 * 
 * 虚拟DOM对象: 较轻量级对象(属性比较少) -------不会立即更新DOM界面
 *  查看
 * const h2=<h2 id={myId2}>{text2}</h2>
 *  debugger
 * ReactDOM.render(h2,document.getElementById('root2'))
 * 真实DOM对象: 较重量级对象(属性比较多) -------立即更新DOM界面
 * 查看
 * const test=document.getElement('root2')
 * 
 * babel.min.js:1 You are using the in-browser Babel transformer. Be sure to precompile your scripts for production
 *  浏览器中的警告提示:下面是引入babel的方式,效率低
 * 
 * react.development.js:260 Warning: Each child in a list should have  a unique "key" prop.Check the top-level render call using <ul>. See 
 * 遍历的时候没有使用key
 * const ul=(<ul>{arr.map((item,index)=>{return <li key={index}>{item}</li>})}</ul>)
 * ReactDOM.render(ul,document.getElementById('app'))
 * 
 *  两种方式创建组件
 * 1. 函数方式
 * function MyComponent(){ return <h2>工厂模式创建DOM组件</h2>}
 * ReactDOM.render(<MyComponent/>,document.getElementById('app'))
 * 2. ES6类方式 
 * class MyComponent2 extends React.Component{render(){return <h2>ES6创建类组件</h2>}}
 * ReactDOM.render(<MyComponent2/>,document.getElementById('app2'))
 * 
 * 组件内置的方法中的this为组件对象,但是在组件类中自定义的方法中this为undefind
 * 强制绑定this:通过函数对象的bind或者箭头函数
 * 如果组件类中在state或者方法前加static,则是为组件类对象添加属性或者方法
 * 更新状态数据:this.setState({属性:值})
 * 注意:标签必须有开始和结束,标签中的class必须写className
 * style="font-size:20px" 在React中不行,必须要这么写: style={{fontSize:'20px'}}
 * 如: ReactDOM.render(<h1 className="classA" style={{fontSize:'20px'}}></h1>,document.getElementById('app'))
 * 
 * props属性:设置state中的数据的类型,默认值等等...
 * static PropTypes={} 就相当于Person.PropTypes={}
 * 
 * ref属性:<input type="text" ref="content" /> 方法中直接this.refs可以获取该input标签
 * 推荐使用方式:
 * 1. 创建一个ref容器,保存到组件对象 this.myRef=React.createRef()
 * 2. 将ref容器交给标签,内部就会将标签对象保存在ref容器中 <input ref={this.myRef} />
 * 3. 通过ref容器的current属性获取input标签对象 this.myRef.current
 * 
 * 组件的组合使用:
 * 组件化编程的基本流程:
 * 1.拆分组件
 *    App组件
 *      Add组件
 *      List组件
 * 2.静态组件
 *    静态页面:组件内部搭建html标签,实现静态页面
 * 3.动态组件
 *    动态显示初始化数据
 *    交互
 * 
 * 
 * 非受控组件:表单组件(组件内有表单),输入数据不是实时的收集,点击按钮才收集
 * 受控组件:表单组件(组件内有表单)，输入数据是实时的收集(在state中)
 * 
 * React的生命周期
 * 1.初始化:渲染组件标签 ReactDOM.render(<Component/>,document.getElementById('app'))
 * constructor()
 * componentWillMount()
 * render()
 * componentDidMount()
 * 2.更新:更新状态 this.setState({})
 * componentWillUpdate()
 * render()
 * componentDidUpdate()
 * 3卸载:谢爱组件 ReactDOM.unmountComponentAtNode()
 * componentWillUnMount()
 * 
 * 理解并使用async/await
 * 1.理解
 *  简化promise的使用,不用再通过then()/catch()来指定回调函数
 *  以同步编码实现异步流程
 * 2.使用await
 *  在promist的表达式左侧使用,不想要promise,而是要得到异步执行成功之后的结果
 * 使用try...catcha来处理异步失败的结果
 * 3.使用async
 * await所在的最近函数定义左侧
 * 
 * 
 * 
 *  git管理项目(配置忽略问题件.gitignore文件中:.vscode .idea /node_modules)
 *   
 *    1)创建本地仓库: 
 *    2)创建远程仓库
 *    3)将本地仓库代码推送到远程仓库
 *    4)如果本地代码有修改,推送远程仓库
 *    5)如果远程仓库代码有修改,拉取本地
 *    6)克隆远程仓库
 *  第一步:
 *     初始化工作区: (有.git文件夹就是工作区)：git init 
 *     工作区的代码添加到暂存区: git add .
 *     将暂存区代码提交到版本区: git commit -m "init"
 *  第二步: 打开git网站,然后创建远程仓库
 *    将本地仓库代码推送到远程仓库:git remote add origin 地址
 *    本地主分支添加到远程主分支:git push origin master  
 *    git branch 查看本地的master分支
 *    
 * 
 * 
 * 
 * 
 */