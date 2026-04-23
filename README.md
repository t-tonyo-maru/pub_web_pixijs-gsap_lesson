# pub_web_pixijs-gsap_lesson

## 概要

PixiJS ＋ GSAP のサンプルコード。

※202404時点で最新バージョンである PixiJS v8 ＋ GSAP v3 を試してみたところ、一応動作はした。  
もしかしたら、うまく動作しない機能や端末があるかもなので、実案件では PixiJS は v7 にバージョンダウンした方が良さそう。

[> zenn の解説記事](https://zenn.dev/t_tonyo_maru/articles/3b82ff07f2d56a)

## サンプルページ

https://t-tonyo-maru.github.io/pub_web_pixijs-gsap_lesson/

## 開発環境

| ツール  | バージョン |
| ------- | ---------- |
| Node.js | 24.x.x     |
| npm     | 11.x.x     |

Node.js は `mise` で `v24` を使う前提です。リポジトリ直下で `mise install` を実行すると利用できます。

## npm ライブラリ

| npm ライブラリ | バージョン |
| -------------- | ---------- |
| typescript     | ^5.2.2     |
| vite           | ^5.2.0     |
| gsap           | ^3.12.5    |
| pixi.js        | ^8.1.0     |

## 主となる TypeScript ファイル

[> src/main.ts](https://github.com/t-tonyo-maru/pub_web_pixijs-gsap_lesson/blob/main/src/main.ts)

## リンク集

- PixiJS
  - https://pixijs.com/
- GSAP
  - https://gsap.com/
- PixiPlugin
  - https://gsap.com/docs/v3/Plugins/PixiPlugin/
