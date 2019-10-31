import React, { Component } from 'react';
const allDetails = [
  { id: 1, title: 'message001', content: 'detail--001' },
  { id: 2, title: 'message002', content: 'detail--002' },
  { id: 3, title: 'message003', content: 'detail--003' }
]
class MessageDetail extends Component {
  state = {
    detail: {}
  }
  componentDidMount() {
    const id = this.props.match.params.id * 1
    this.getDetailById(id)
  }
  // 接收新的属性,参数变化了
  componentWillReceiveProps(nextProps) {
    const id = nextProps.match.params.id * 1
    this.getDetailById(id)
  }
  getDetailById = (id) => {
    // 根据id去数组中查找数据
    setTimeout(() => {
      const detail = allDetails.find(detail => detail.id === id)
      this.setState({
        detail
      })
    }, 500);
  }
  render() {
    const { detail } = this.state
    return (
      <ul>
        <li>id:{this.props.match.params.id}</li>
        <li>title:{detail.title}</li>
        <li>content:{detail.content}</li>
      </ul>
    );
  }
}

export default MessageDetail;