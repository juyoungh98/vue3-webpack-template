module.exports = {
  env: {
    browser: true,
    node: true,
  },
  extends: [
    // vue
    // 'plugin:vue/vue3-essential', //Lv1
    "plugin:vue/vue3-strongly-recommended", //Lv2
    // 'plugin:vue/vue3-recommended', //Lv3
    // js
    "eslint:recommended",
  ],
  parserOptions: {
    parser: "babel-eslint",
  },
  rules: {}, // extends에서 사용하는 eslint 규칙에 대한 수정
};
