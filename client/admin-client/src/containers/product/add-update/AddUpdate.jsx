import React, { Component } from 'react';
import { Card, Input, Button, Icon, Select, InputNumber, Form } from 'antd'
// 引入connect
import {connect} from 'react-redux'
import {getCategories} from '../../../redux/action-creators.js'
// 解构出Option和Item
const { Option } = Select
const { Item } = Form

// 装饰器
@connect((state)=>({categories:state.categories}),{getCategories})
@Form.create()
class AddUpdate extends Component {

  // 表单提交的事件
  submit = (e) => {
    // 阻止事件的默认行为
    e.preventDefault()
    // ===============================坑==================
  }
  // 界面渲染完毕
  componentDidMount(){
    // 发送请求,获取分类信息
    // 判断,如果有数据,就不发送请求
   
    if(this.props.categories.length===0){
      this.props.getCategories()
    }
  }
  render() {
    // 很重要,要做表单的验证
    const { getFieldDecorator } = this.props.form;
    // 解构出categories数据
    const {categories} =this.props
    return (
      <Card
        title={
          <div>
            <Icon onClick={() => { this.props.history.goBack() }} type="arrow-left" />
            <span>添加商品</span>
          </div>
        }
      >
        <Form labelCol={{ span: 2 }} wrapperCol={{ span: 8 }} onSubmit={this.submit}>
          <Item label="商品名称">
            {
              getFieldDecorator('name', {
                rules: [{ required: true, message: '请输入商品名称' }],
              })(
                <Input placeholder="请输入商品名称" />
              )
            }

          </Item>
          <Item label="商品描述">
            {
              getFieldDecorator('desc', {
                rules: [{ required: true, message: '请输入商品描述' }],
              })(
                <Input placeholder="请输入商品描述" />
              )
            }

          </Item>
          <Item label="商品分类">
            {
              getFieldDecorator('categoryId', {
                rules: [{ required: true, message: '请选择商品分类' }],
              })(
                <Select placeholder="请选择商品分类">
                  {
                    categories.map(category=>{
                    return  <Option key={category._id} value={category._id}>{category.name}</Option>
                    })
                  }
                 
                </Select>
              )
            }

          </Item>
          <Item label="商品价格">
            {
              getFieldDecorator('price', {
                rules: [{ required: true, message: '请输入商品价格' }],
              })(
                <InputNumber
                  formatter={value => `￥ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                  parser={value => value.replace(/￥\s?|(,*)/g, '')}
                />
              )
            }

          </Item>
          <Item>
            <Button type="primary" htmlType="submit">提交</Button>
          </Item>
        </Form>
      </Card>
    );
  }
}

export default AddUpdate;