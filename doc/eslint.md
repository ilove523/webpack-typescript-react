## 关闭 ESLint 驼峰规则校验
+ 参考：https://blog.csdn.net/zhichaosong/article/details/108237264

### 永久关闭
* `.eslintrc.js`为 ESLint 全局配置
* `rules`字段里面配置如下：
```js
rules: {
  camelcase: 'off',
  '@typescript-eslint/camelcase': 0,
}
```

* 需要注意的是，配置完需要清除缓存才能生效：
  `rm -rf node_modules/.cache/eslint-loader/`
