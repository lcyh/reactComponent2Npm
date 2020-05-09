# reactComponent2npm

## 发布 react 组件 的脚手架

相关博客（详细说明）：参考<a href="https://juejin.im/post/5d6760b3e51d453b8b5fa60b">使用 npm 发布一个 react 组件</a>

#### 开发组件

- 安装依赖：

  ```bash
  npm i
  npm start
  ```

* 打包组件

  ```bash
  npm run build
  ```

#### 组件功能测试

- 项目根目录下执行：

  ```bash
  npm link
  cd src/example
  npm link lcyhy-react-component # 此处为package.json中定义的name字段
  ```

* 修改 example/app.js 文件内容（将原本导入开发组件替换成打包后的组件）：

  ```bash
  // import ReactDemo from '../index' // 组件源代码
  import ReactDemo from 'lcyhy-react-component'; // npm link 测试打包组件的功能
  import 'lcyhy-react-component/lib/main.min.css'; // npm link 测试打包组件的功能
  ```

* 根目录执行：

  ```bash
  npm start
  ```

#### 组件发布到 npm

- 查看当前使用的源地址：

  ```bash
  npm config list
  ```

- 如果不是官方源地址，通过下面的命令切换 npm 源：

  ```bash
  npm config set registry http://registry.npmjs.org
  ```

- 组件发布到 npm：

  ```bash
  npm run pub
  # 上面的命令效果与下面的命令效果一样
  npm build
  npm publish
  ```

- 取消发布（最好不要，别人可能下载了你的包）：

  ```bash
  npm unpublish lcyhy-react-component --force # 此处为package.json中定义的name字段
  ```

### npm 包的使用与下载

- 下载：

  ```bash
  npm i lcyhy-react-component # 假设你的包名字叫lcyhy-react-component
  ```

- 使用方法：

  ```bash
  # 组件中引入
  import ReactDemo from 'lcyhy-react-component';
  # 如果给组件写了样式，需要手动导入css文件
  import 'lcyhy-react-component/lib/main.min.css';
  ```
