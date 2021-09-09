const {
  override,
  addLessLoader,
  addDecoratorsLegacy,
  fixBabelImports
} = require('customize-cra')

module.exports = override(
  addLessLoader({
    lessOptions: {
      modifyVars: { '@primary-color': '#1DA57A' },
      javascriptEnabled: true
    }
  }),//支持less文件
  addDecoratorsLegacy(),//支持修饰器写法
  fixBabelImports("import", {
    libraryName: "antd",
    libraryDirectory: "es",
    style: true,//或者css, true代表运用less
  })
)