# React-native-init-typescript

## Why

This project is a simple `react-native-init`, only with typescript integrated.

No `tsc --watch` (expensive on large projects), the goal here is to use a babel plugin which will strip types so our code can be understood by the compiler.

## How

```bash
yarn
yarn start:ios
yarn start:android
yarn test
```

## TODO

This is a work in progress, and in fact it is currently not working because:

* babel-preset-typescript needs babel-core 7
* react-native needs babel-core 6

Any insight would be appreciated on how to run react-native with babel 7
