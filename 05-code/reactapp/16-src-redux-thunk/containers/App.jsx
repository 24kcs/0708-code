// 引入react-redux
import { connect } from 'react-redux'
// 引入action对象
import { increment, decrement, incrementAsync } from '../redux/action-creators.js'
// 引入Counter.jsx
import Counter from '../components/Counter.jsx'

export default connect(
  (state) => ({
    number: state.number

  })
  ,
  {
    increment,
    decrement,
    incrementAsync
  }
)(Counter)

