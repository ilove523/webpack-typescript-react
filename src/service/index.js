/*
 * @author: ilove523 <wush3w@126.com>
 * @Date: 2020-12-17 14:58:08
 * @LastEditTime: 2020-12-17 16:12:28
 * @LastEditors: ilove523
 * @description: 'that script for test graphql!!!'
 */
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
