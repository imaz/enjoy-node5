# enjoy-node5

node-fiveで遊ぶところ

## 遊び方

```sh
$ git clone git@github.com:imaz/enjoy-node5.git
$ cd enjoy-node5
$ npm install .
$ node bubble.js
```

## うまくいかないとき

* 必要なもののインストールを確認
 * https://gist.github.com/2568204
* node-qtがみつからないよと言われる
 * enjoy-node5ディレクトリから以下コマンド

```sh
$ cd node_modules/node-five/
$ npm install git://github.com/arturadib/node-qt.git
```
