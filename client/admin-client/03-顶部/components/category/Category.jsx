import React, { Component } from 'react';
import { Card, Table, Button, Icon } from 'antd';
// 引入样式
import './Category.less'
class Category extends Component {
  render() {

    // const columns = [
    //   {
    //     title: 'Name', // 第一列显示的标题
    //     dataIndex: 'name', // 第一列要显示的内容---就是data中的键
    //     className:'xxx', // 设置第一列样式
    //     render: text => <a>{text}</a>, // 以什么格式显示
    //   },
    //   {
    //     title: 'Cash Assets',
    //     // className: 'column-money',
    //     dataIndex: 'money',
    //   },
    //   {
    //     title: 'Address',
    //     dataIndex: 'address',
    //   },
    // ];


    const columns = [
      {
        title: '分类名称', // 第一列显示的标题
        dataIndex: 'name', // 第一列要显示的内容---就是data中的键
      },
      {
        title: '操作', // 第一列显示的标题
        dataIndex: 'operation', // 第一列要显示的内容---就是data中的键
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
        name: 'John Brown',

      },
      {
        key: '2',
        name: 'Jim Green',

      },
      {
        key: '3',
        name: 'Joe Black',

      },
      {
        key: '4',
        name: 'Joe Black2',

      },
    ];
    return (

      <Card size="default" title="分类列表" extra={<Button type="primary"><Icon type="plus" />分类列表</Button>}>
        <Table
          columns={columns}
          dataSource={data}
          bordered
          pagination={{
            showQuickJumper: true, // 跳转某页
            showSizeChanger: true, // 改变个数
            pageSizeOptions: ['3', '6', '9', '12'],
            defaultPageSize: 3
       
          }}
        />,
        </Card>

    );
  }
}

export default Category;