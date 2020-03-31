#### 增加 universal 步骤 

 `
 ng add @nguniversal/express-engine --clientProject [projectName]
 `

会增加文件如下：
src/main.server.ts
src/app/app.server.module.ts
tsconfig.server.json 
server.ts

#### 主要矛盾

#### 具体体现
1. Cookie 
修改处：
AppModule 增加依赖 

```provider:[CookieService, CookieModule]```

```import { CookieService, CookieModule } from '@gorniv/ngx-universal';```

serve.ts 修改
使用处修改

2. localStorage, window, document 等对象

3. api 请求地址(get读取 和 post提交会有不同情况)
修改调用处的URL
利用express里的intercetpor

4. 会渲染两次
 #### 一些其他问题
  ng add @nguniversal/express-engine 后需要跟参数 --clientProject 指定项目名称


 版本在 6.0 一下可能会出问题（不确定）