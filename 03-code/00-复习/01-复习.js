/**
 * 
 * refs属性: 用来获取虚拟DOM对象的
 * 1). 直接在标签上 使用ref="名字" 在组件内部通过this.refs.名字.属性名字  获取该标签对象及属性的值
 * 2). 先创建一个refs的容器, name= React.createRef(),然后在标签上 使用ref={this.name} 把标签放在了容器中, 在组件内部,通过: this.name.current.属性名字 获取该标签对象的属性的值
 * 
 * todoList案例: 组件的组合使用:
 * 组件的关系:
 *  组件内部还有组件:父子关系
 *  组件和组件之间是同级关系: 兄弟关系
 * 组件之间的通信: 父子关系的组件通信,兄弟关系的组件通信, 其他关系的组件之间通信
 * props:实现组件之间的通信:
 *  首先在某个组件标签中(<Main name={person.name} />) 传入属性和值的写法,然后需要在Main的这个组件中使用PropTypes(数据类型及是否是必须的) 进行数据的类型的限制,默认值,是否是必须的
 * defaultProps---->默认值
 * 注意: 类型的限制,类型的名字都是小写的, 特殊:func
 * 组件内部的标签中如果使用了类样式和style的方式,那么写法需要注意:
 * class--->不能写,写的是:className
 * style="键:值"--->不能写,写的是: style={{键:值}}---透明度的例子(生命周期的问题)
 * 
 * 受控组件和非受控组件
 * 非受控组件:数据不是实时的, name属性存储的是文本框中输入的数据   name=this.refs.content.value
 * 受控组件:数据会实时的检测到,(文本框中的数据是通过state中的属性来获取的,如果文本框中的数据发生变化,那么state中的属性的值也会自动的变化)配合onChange事件来实现实时的操作
 * 原生DOM事件:
 *  1)事件的名字都是小写的
 *  2)onchange事件,光标离开当前的文本框之后才会触发该事件
 * React的事件:
 *  1)事件的名字首字母是大写的(on是小写的,后面的名字的首字母是大写的)
 *  2)onChange事件,改变文本框中的内容就会自动的触发该事件
 * 
 * 单页面应用程序:SPA
 * 生命周期: 
 * 1.首先执行数据类型及是否是必须的限定ProptTypes及defaultProps(不是生命周期函数)
 * 2.constructor(也不是生命周期函数)
 * componentWillMount()---将要渲染
 * render()----开始渲染
 * componentDidMount()----渲染完毕
 * componentWillReceiveProps(nextProps)-----props数据发生变化
 * componentWillUpdate()----界面将要更新
 * render()------开始渲染
 * componentDidUpdate()----界面更新完毕
 * componentWillUnmount()----卸载之前
 * 
 * 
 * key的问题:
 * 作用:用来渲染虚拟DOM的,key是唯一的标识,
 * 虚拟DOM(内存中)的效率高于真实DOM的渲染
 * 如果key的值发生变化,那么就只更新当前这个key对应的虚拟DOM
 * 如果key的值没有发生变化,那么要看里面的数据是否有变化,如果数据变化了,那么也需要重新渲染
 * key的值最好不要使用索引,而是使用id(是轻易不变的数据)
 * key={person.id}---id一般是数字
 * key={person.name}---name一般是字符串
 * 
 * 脚手架: npx create-react-app 名字 
 * 脚手架中里面包含了各种各样的包---插件,webpack,package等等.....
 * src目录:必须的,而且是程序的入口目录
 * index.js----->入口文件
 * App.jsx--------->App.js----->组件文件
 * component目录----->如果有多个普通组件,此时就会创建该目录
 *  如果组件比较多,每个组件可以单独有自己的一个目录
 * 组件的文件注意: Add组件--->Add目录--->Add.jsx(Add.js/index.js/index.jsx)----组件的文件的名字可以是首字母大写的,也可以是都是小写的
 * 
 * 引入组件:  import 组件名字  from  './components/Add/Add.jsx'
 * 评论的案例:
 * 
 * 
 * jquery---->$对象----jquery对象
 * DOM操作中:document----DOM对象
 * DOM转jquery-----> $(DOM对象)
 * jquery对象转DOM对象--->$('#btn')[0]或者$('#btn').get(0)
 * 包装集:把DOM对象进行包装,变成了jquery的对象,内部看成了是一个数组(数组内部都是DOM对象),如果要获取里面的DOM对象,直接通过索引的方式即可
 * var btnObjs=$([document.getElementById('btn1'),document.getElementById('btn2')])
 * var obj1=btnObjs[0]
 * 
 * 
 */