const { override, fixBabelImports, addLessLoader , addDecoratorsLegacy} = require('customize-cra');
module.exports = override(
  // 对babel进行配置
  fixBabelImports('import', {
    libraryName: 'antd', // 对antd进行配置
    libraryDirectory: 'es', // 修改es的目录的位置--不用配置/antd/es/button,省略了es
    //style: 'css', // 对样式的设置---不用引入css
    style: true
  }),
  addLessLoader({
    javascriptEnabled: true,
    modifyVars: { '@primary-color': '#52c41a' },
  }),
  // 设置babel,支持es7语法,简化高阶组件语法


  addDecoratorsLegacy()
);