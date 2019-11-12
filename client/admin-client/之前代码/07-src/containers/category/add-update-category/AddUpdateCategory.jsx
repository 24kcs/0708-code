import React, { Component } from 'react';
import { Form, Input } from 'antd';
import PropTypes from 'prop-types'
@Form.create()
class AddUpdateCategory extends Component {
  static propTypes = {
    setForm: PropTypes.func.isRequired, // 用来传递form对象
    categoryName: PropTypes.string // 用来传入分类名字
  }
  constructor(props) {
    super(props)
    // 初始化的时候,把form对象传入到Category组件中,父级组件就可以进行验证操作了
    this.props.setForm(this.props.form)
  }
  render() {
    const { getFieldDecorator } = this.props.form;
    const { categoryName } = this.props
    return (
      <Form>
        <Form.Item label="分类名称">
          {getFieldDecorator('categoryName', {
            initialValue: categoryName || '', // 手动更改无效
            rules: [{ required: true, message: '需要输入分类名字' }],
          })(
            <Input placeholder="输入分类内容" />
          )}
        </Form.Item>
      </Form>
    );
  }
}

export default AddUpdateCategory;