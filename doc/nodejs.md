<!--
 * @author: ilove523 <wush3w@126.com>
 * @Date: 2020-12-18 13:36:14
 * @LastEditTime: 2020-12-18 13:41:30
 * @LastEditors: ilove523
 * @description: ''
-->

## 在 Node.js 中使用 ES6 模块 import 和 export
要求：
+ Node版本 >= 13
+ 使用 ES6 模块
> https://www.cnblogs.com/wenruo/p/12928950.html

### 在 package.json 中设置 `type`
```json
{
    "type": "module"
}
```

### 使用方法

`src/service/index.js`
```js
import express from 'express';
import graphqlHTTP from 'express-graphql';
import { buildSchema } from 'graphql';

// 使用 GraphQL Schema Language 创建一个 schema
const schema = buildSchema(`
  type Query {
    hello: String
  }
`);

// root 提供所有 API 入口端点相应的解析器函数
const root = {
  hello: () => 'Hello world!',
};

const app = express();
app.use(
  '/graphql',
  graphqlHTTP({
    schema,
    rootValue: root,
    graphiql: true,
  }),
);
app.listen(4000);
console.log('Running a GraphQL API server at http://localhost:4000/graphql');
```

### 直接运行
```sh
node src/service/index.js
```