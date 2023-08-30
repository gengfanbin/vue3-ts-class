import { createStore } from 'vuex'

// 自动导入modules文件夹下的所有js文件
const modulesFiles = require.context("./", true, /\.ts$|.js$/);
const modules = modulesFiles.keys().reduce((modules, modulePath) => {
  const moduleName = modulePath.replace(/^\.\/(.*)\.\w+$/, "$1");

  // 过滤任何类型文件名为index的文件
  if (moduleName == 'index') return modules;

  const value = modulesFiles(modulePath);
  modules[moduleName] = value.default;
  return modules;
}, {});

// 导出状态树
export default createStore({
  modules
})
