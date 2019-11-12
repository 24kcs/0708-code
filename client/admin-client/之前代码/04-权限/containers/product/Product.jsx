import React, { Component } from 'react';
// 引入antd
import { Card, Select, Input, Icon, Button, Table, Modal } from 'antd'
// 引入样式
import './Product.less'

// 引入api/接口
import { reqGetProducts, reqDeleteProduct, reqSearchProduct } from '../../api/index.js'
// 解构出Option
const { Option } = Select
class Product extends Component {
  columns = [
    {
      title: '商品名称',
      dataIndex: 'name'
    },
    {
      title: '商品描述',
      dataIndex: 'desc'
    },
    {
      title: '价格',
      dataIndex: 'price',
      render: (text) => {
        return `￥ ${text} 元`
      }
    },
    {
      title: '状态',
      dataIndex: 'status',
      render: () => {
        return (
          <div>
            <Button type="primary">上架</Button>
            <span>已下架</span>
          </div>
        )
      }
    },
    {
      title: '操作',
      // dataIndex: 'detail',
      render: (product) => {
        return (
          <div>
            <Button type="link">详情</Button>
            <Button type="link" onClick={() => { this.showAddUpdate(product) }}>修改</Button>
            <Button type="link" onClick={() => this.del(product._id)}>删除</Button>
          </div>
        )
      }
    }
  ]
  del = (id) => {
    Modal.confirm({
      title: '确认删除吗',
      okText: '确认',
      cancelText: '取消',
      // 箭头函数
      onOk: async () => {
        await reqDeleteProduct(id)
        // 重新渲染组件即可
        this.getProducts(1, 3)
      }
    })

  }
  // 状态数据
  state = {
    products: [], // 用来存储所有商品的信息的(数组,里面是对象)
    total: 0, // 总数据条数
    searchKey: 'productName', // 搜索的内容要么是productName,要么就是 productDesc productName
    searchValue: '', // 搜素内容
    isSearch: false, // 是否搜索过
    pageNum: 1, // 默认搜索一页
    pageSize: 3, // 默认搜索3条
    prevSearchValue: '' // 初始化的值是空的
  }
  // 发送请求获取商品的信息数据
  getProducts = async (pageNum, pageSize) => {
    const { isSearch, prevSearchValue } = this.state
    let result
    if (isSearch) {
      const { searchKey } = this.state
      // 搜索过,调用搜索的接口
      result = await reqSearchProduct({ searchKey, searchValue: prevSearchValue, pageNum, pageSize })
    } else {
      // 没搜索过,调用正常的接口
      result = await reqGetProducts(pageNum, pageSize)
    }

    if (result.status === 0) {
      // 更新状态数据
      this.setState({
        products: result.data.list, // 商品数组信息
        total: result.data.total, // 总条数
        pageNum,
        pageSize,
        searchValue: prevSearchValue
      })
    }

  }
  // 界面渲染完毕
  componentDidMount() {
    this.getProducts(1, 3) // 目前是这么写======================坑==========
  }

  // 显示添加或者修改的界面
  showAddUpdate = (product) => {
    // 跳转
    this.props.history.push('/product/addupdate', product)
  }
  // 修改搜索的key
  select = (value) => {
    this.setState({
      searchKey: value
    })
  }
  // 修改搜索的内容
  change = (e) => {
    this.setState({
      searchValue: e.target.value
    })
  }
  searchHandle = async () => {

    // 取出要搜索的key和value
    const { searchKey, searchValue, pageNum, pageSize } = this.state
    const result = await reqSearchProduct({ searchKey, searchValue, pageNum, pageSize })
    this.setState({
      products: result.data.list,
      total: result.data.total,
      isSearch: true,
      prevSearchValue: searchValue // 存储这一次搜索的value值
    })
  }
  render() {
    // 解构出products
    const { products, total, searchKey, searchValue } = this.state
    return (
      <Card
        title={
          <div>
            <Select value={searchKey} onChange={this.select}>

              <Option key="productName" value="productName">根据商品名称</Option>
              <Option key="productDesc" value="productDesc">根据商品描述</Option>
            </Select>
            <Input placeholder="关键字" value={searchValue} className="product-input" onChange={this.change} />
            <Button type="primary" onClick={this.searchHandle}>搜索</Button>
          </div>
        }
        extra={
          <Button type="primary" onClick={() => { this.showAddUpdate() }}><Icon type="plus" />添加商品</Button>
        }
      >
        <Table
          columns={this.columns}
          dataSource={products}
          bordered
          rowKey="_id"
          pagination={{
            showSizeChanger: true,
            showQuickJumper: true,
            defaultPageSize: 3,
            pageSizeOptions: ['3', '6', '9', '12'],
            total,
            onChange: this.getProducts,
            onShowSizeChange: this.getProducts
          }}

        />
      </Card>
    );
  }
}

export default Product;