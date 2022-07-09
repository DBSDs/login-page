module.exports = {
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
  rules: {
    // 禁止使用 var
    'no-var': 'error',
    // switch 语句必须有 default
    'default-case': 'error',
    // 必须使用 === 或 !==，禁止使用 == 或 !=
    eqeqeq: ['error', 'always'],
    // 回调函数嵌套禁止超过 4 层，多了请用 async await 替代
    'max-nested-callbacks': ['error', 4],
    // 代码块嵌套的深度禁止超过 5 层
    'max-depth': ['error', 5],
    // 函数的参数禁止超过 4 个
    'max-params': ['error', 4],
    // switch 的 case 内有变量定义的时候，必须使用大括号将 case 内变成一个代码块
    'no-case-declarations': 'error',
    // 禁止对使用 const 定义的常量重新赋值
    'no-const-assign': 'error',
    // 禁止使用 debugger
    'no-debugger': 'error',
    // 禁止 if else 的条件判断中出现重复的条件
    'no-dupe-else-if': 'error',
    // 禁止在 switch 语句中出现重复测试表达式的 case
    'no-duplicate-case': 'error',
    // switch 的 case 内必须有 break, return 或 throw，空的 case 除外
    'no-fallthrough': 'error',
    // 禁止在 return 语句里赋值
    'no-return-assign': 'error',
    // 禁止在 return 语句里使用 await
    'no-return-await': 'error',
    // 注释的斜线或 * 后必须有空格
    'spaced-comment': ['error', 'always'],
    // 必须使用 if (foo === 5) 而不是 if (5 === foo)
    yoda: ['error', 'never'],
  },
  parserOptions: {
    ecmaVersion: 6,
    sourceType: 'module',
    ecmaFeatures: {
      modules: true,
    },
  },
}