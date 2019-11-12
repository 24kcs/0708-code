import React, { Component } from 'react';
// 引入组件
import { Card, Table, Button, Icon, Modal } from 'antd';

// 引入connect
import { connect } from 'react-redux'
// 引入action-creators.js
import { getCategories, addCategory, updateCategory, delCategory } from '../../redux/action-creators.js'
// 引入组件
import AddUpdateCategory from './add-update-category/AddUpdateCategory.jsx'
// 引入样式
import './Category.less'


@connect((state) => ({ categories: state.categories }), { getCategories, addCategory, updateCategory, delCategory })
class Category extends Component {
  // 生命周期函数
  componentDidMount() {
    this.props.getCategories()
  }
  columns = [
    {
      title: '品类名称',
      dataIndex: 'name',
    },
    {
      title: '操作',
      // dataIndex: 'operation',
      render: (category) => {
        return (
          <div>
            <Button type="link" onClick={() => this.openUpdate(category)}>修改分类</Button>
            <Button type="link" onClick={() => this.delCategory(category._id)}>删除分类</Button>
          </div>
        )
      }
    },
  ];
  // 删除操作
  delCategory = (categoryId) => {
    //this.props.delCategory(categoryId)
    Modal.confirm({
      okText:'确定',
      cancelText:'取消',
      title: '删除分类',
      content: '确定要删除吗',
      onOk:()=> {
        this.props.delCategory(categoryId)
      }
    });
  }

  state = {
    isShowAdd: false, // 切换显示添加分类框
    isShowUpdate: false // 切换显示修改分类
  }

  // 确定添加分类按钮
  addCategory = () => {
    // 验证通过的情况下可以进行添加操作了
    this.form.validateFields((err, values) => {
      if (!err) {
        // 没有错误的情况下,获取表单的数据
        const categoryName = values.categoryName
        // 添加分类操作
        this.props.addCategory(categoryName)
      }
    });
    // 重置清空文本框中的数据
    // this.form.resetFields()
    // this.setState({
    //   isShowAdd: false
    // })
    this.hideCategory()
  }
  // 取消添加分类按钮
  hideCategory = () => {
    // 重置清空文本框中的数据
    this.form.resetFields()
    this.setState({
      isShowAdd: false
    })
  }
  //===========================
  // 打开修改分类对话框
  openUpdate = (category) => {
    // 把分类对象存起来
    this.category = category
    this.setState({
      isShowUpdate: true
    })
  }

  // 确定修改分类按钮
  updateCategory = () => {
    this.form.validateFields((err, values) => {
      if (!err) {
        // 获取categoryName
        const categoryName = values.categoryName
        // 获取id
        const categoryId = this.category._id
        this.props.updateCategory(categoryId, categoryName)
        // 重置清空文本框中的数据
        this.form.resetFields()
        this.setState({
          isShowUpdate: false
        })
      }
    })
  }
  // 取消修改分类按钮
  hideUpdate = () => {
    // 干掉存储的分类对象
    delete this.category
    // 重置清空文本框中的数据
    this.form.resetFields()
    this.setState({
      isShowUpdate: false
    })
  }
  render() {
    const { categories } = this.props
    const { isShowAdd, isShowUpdate } = this.state
    // 如果没有值就是个空对象
    const category = this.category || {}
    return (
      <Card title="分类列表" extra={<Button type="primary" onClick={() => { this.setState({ isShowAdd: true }) }}><Icon type="plus" />分类列表</Button>} >
        <Table
          columns={this.columns}
          dataSource={categories}
          bordered
          rowKey="_id"
          pagination={{
            showSizeChanger: true,
            showQuickJumper: true,
            defaultPageSize: 3,
            pageSizeOptions: ['3', '6', '9', '12']
          }}
        />
        <Modal
          visible={isShowAdd}
          width={300}
          title="添加分类"
          okText="确定"
          cancelText="取消"
          onOk={this.addCategory}
          onCancel={this.hideCategory}
        >
          <AddUpdateCategory setForm={(form) => this.form = form} />
        </Modal>
        <Modal
          visible={isShowUpdate}
          width={300}
          title="修改分类"
          okText="确定"
          cancelText="取消"
          onOk={this.updateCategory}
          onCancel={this.hideUpdate}
        >
          <AddUpdateCategory setForm={(form) => this.form = form} categoryName={category.name} />
        </Modal>
      </Card>
    )
  }
}

export default Category;