/**
 * 评论案例的添加评论和删除评论
 * 添加评论:
 *  数据都在父级组件的App.jsx组件中,所以,真正的添加数据应该在父级组件中进行,
 *  在Add.jsx组件点击按钮的时候,调用父级组件中添加数据的方法,并传入用户名,评论内容,需要设置id----添加一个对象更合适,点击按钮应该是按钮的点击事件中有自己的回调,回调中调用父级组件传过来的方法(添加数据的方法)
 * 删除评论:
 *  数据都在父级组件App.jsx组件中,所以,删除评论的方法应该在父级组件中定义出来,然后通过父级组件把这个回调传入到子级组件中(先传入List.jsx组件中,在List.jsx组件中传到Item.jsx组件中,同时还需要传入索引index),子级组件Item.jsx中点击删除按钮,添加一个回调,在回调中调用父级组件传过来的删除数据的方法,并传入索引即可
 * 细节:删除前先提示,是否删除----提升用户体验
 * 
 * 
 * 发送异步请求:
 * XHR和fetch
 * XHR先有的,fetch是后来的
 * XHR的兼容性超过了fetch
 * jQuery(库)中有发送异步请求的方法,但是jQuery本身并不是只做异步请求的,里面的异步请求的代码很少,几乎都是操作DOM的方法
 * React中要想发送异步请求,如果使用jQuery很不合适
 * 
 * 1.axios:封装了XHR,并且只要调用get(url)方法或者是post方法就会直接返回Promise对象,调用.then((response)=>{}).catch((error)=>{})
 * response对象.data就可以获取到数据(其他的对象中的response要想获取数据,未必一定是.data)-----打印response,查看是什么属性响应的值
 * 实际上,发送请求,应该是获取数据,而不是Promise对象,所以,axios可以简化
 * 直接返回response, 
 * const response = await axios.get()所在的函数的名字前面加async,建议加上try-catch
 * 
 * 
 * fetch()---可以发送异步请求,但是有兼容性问题
 * 可以直接在React中使用fetch()方法,进行异步的请求,但是兼容性的问题,所以,我们会下载相关的包(可以处理兼容性问题),
 * 
 * axios下载
 * fetch下载
 * 
 * 
 * pubsub消息订阅和发布
 * 下载,是独立的,和React无关,和Vue也无关,都可以使用这个东西
 * PubSub是消息的订阅和发布机制
 * 先订阅,后发布
 * const token=PubSub.subscribe('消息的名字',回调函数)
 * 回调函数(消息名字,数据):订阅的时候是不会执行的,发布消息的时候该回调函数才会执行
 * PubSub.publish('消息的名字',数据)异步的
 * PubSub.publishSync('消息的名字',数据)同步的
 * 
 * token:如果想要取消该消息订阅,则需要返回token,将来直接干掉
 * unsubscribe(toekn)
 * 
 * React中组件之间通信:
 * 1.props:父子组件之间
 *    props传递数据的之后:
 *    <Add age={per.age} />
 *    <Add changeAge={changeAge} />
 * 2.PubSub:任何组件之间
 * 
 * 
 * 
 * 1.antd
 * 2.路由
 * 3.React版本的redux
 * 4.redux
 * 
 * 
 * 
 * 
 */