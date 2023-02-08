module.exports = {
    "env": {
        "browser": true,
        "es2021": true
    },
    "extends": [
        "eslint:recommended",
        "plugin:react/recommended",
        "plugin:@typescript-eslint/recommended"
    ],
    "overrides": [
    ],
    "parser": "@typescript-eslint/parser",
    "parserOptions": {
        "ecmaVersion": "latest",
        "sourceType": "module"
    },
    "plugins": [
        "react",
        "@typescript-eslint"
    ],
    "rules": {
        'no-unused-vars': 'error', // 사용하지않는 변수 error처리 하겠다.
        'no-console': 0, // 콘솔로그를 사용하수 있게 꺼놓겠다. // 콘솔로그 못쓰게 막을려면 1넣으셈 ^^~
        'no-else-return': ['error', { allowElseIf: false }], // if문에 else 문을 사용하지 규칙을 정의한다.
        semi: [1, 'always'],
    }
};
