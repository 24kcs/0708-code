import Counter from '../components/Counter'
// 引入connect
import { connect } from 'react-redux'
// 引入action
import { increment, decrement ,incrementAsync} from '../redux/action-creators.js'

// 向外暴露connect即可
export default connect(
 state=>({number:state.number}),
  {
    increment,
    decrement,
    incrementAsync
  }

)(Counter)
// export default App;