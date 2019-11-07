import React, { Component } from 'react';
// 引入组件
import { Card, Table, Button, Icon } from 'antd';


// 引入样式
import './Category.less'

class Category extends Component {
  render() {

    const columns = [
      {
        title: '品类名称',
        dataIndex: 'name',
        // render: text => <a>{text}</a>,
      },
      {
        title: '操作',
        dataIndex: 'content',
        render: text => {
          return (
            <div>
              <Button type="link">修改分类</Button>
              <Button type="link">删除分类</Button>
            </div>
          )
        }
      },
    ];

    const data = [
      {
        key: '1',
        name: '家具生活1',
        // content: '修改分类 删除分类'
      },
      {
        key: '2',
        name: '家具生活2',
        // content: '修改分类 删除分类'
      },
      {
        key: '3',
        name: '家具生活3',
        // content: '修改分类 删除分类'
      },
      {
        key: '4',
        name: '家具生活4',
        // content: '修改分类 删除分类'
      },
      {
        key: '5',
        name: '家具生活5',
        // content: '修改分类 删除分类'
      },
    ];


    // const columns = [
    //   {
    //     title: 'Name', // 第一列中的第一个要显示的内容
    //     dataIndex: 'name', // 用来具体显示哪个(data中)键中的数据
    //     className:'showStyle',
    //     // render: text => <a>{text}</a>,
    //   },
    //   {
    //     title: 'Cash Assets',
    //     dataIndex: 'money',
    //   },
    //   {
    //     title: 'Address',
    //     dataIndex: 'address',
    //   },
    // ];

    // const data = [
    //   {
    //     key: '1',
    //     name: 'John Brown',
    //     money: '￥300,000.00',
    //     address: 'New York No. 1 Lake Park',
    //   },
    //   {
    //     key: '2',
    //     name: 'Jim Green',
    //     money: '￥1,256,000.00',
    //     address: 'London No. 1 Lake Park',
    //   },
    //   {
    //     key: '3',
    //     name: 'Joe Black',
    //     money: '￥120,000.00',
    //     address: 'Sidney No. 1 Lake Park',
    //   },
    //   {
    //     key: '4',
    //     name: 'Mr Hua',
    //     money: '￥12',
    //     address: '地球',
    //   },
    // ];
    return (
      <Card title="分类列表" extra={<Button type="primary"><Icon type="plus" />分类列表</Button>} >
        <Table
          columns={columns}
          dataSource={data}
          bordered
          pagination={{
            showSizeChanger:true,
            showQuickJumper:true,
            defaultPageSize:3,
            pageSizeOptions:[
              '3',
              '6',
              '9',
              '12'
            ]
          }}
        />
      </Card>
    )
  }
}

export default Category;