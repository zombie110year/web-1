# web

## 开发流程

1. 所有 Web Team 成员对本仓库仅有 Read 权限；开发前，请先 Fork 本仓库。
2. Clone 您 Fork 的仓库到本地，将本仓库添加为您 Fork 仓库的 upstream repo，具体操作为：打开 Git Bash 并定位到您的本地仓库，执行以下命令：
   ```bash
   git remote add upstream https://github.com/DaShuoWang/web.git
   ```
   如果提示：`fatal: remote upstream already exists` 请忽略，Github可能已经自动为您添加。
   可通过 `git remote -v` 命令查看是否添加成功。
3. 请为每一个 Issue/Task 创建单独的 Branch ，且每个 Branch 原则上都应基于最新的 upstream/master 分支创建（您自己仓库的 master 分支将不会被用到）。
4. 当您在自己的 Branch 上完成工作后，请向本仓库创建一个 Pull Request 。
5. 经过 Team 成员的相互 Review 后，您的工作将被合并。

## Project setup
```
yarn install
```

### Compiles and hot-reloads for development
```
yarn serve
```

### Compiles and minifies for production
```
yarn build
```

### Lints and fixes files
```
yarn lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
