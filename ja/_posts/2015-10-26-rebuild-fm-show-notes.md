---
title: "Rebuild.fm 出演メモ"
date: 2015-10-26
draft: true
---

[Rebuild.fm](http://rebuild.fm/)に急遽出演させてもらうことになったのですが、初出演なので色々と準備していこうと思い、カンニングペーパー的に作ったメモがこちらです。箇条書き的に書いたので、上から順に読む記事ではないですが、誰かの参考になれば。

---

## Redux

[ReactJS](https://facebook.github.io/react/)と組み合わせて使えるFluxフレームワークの中で、現在最も勢いのある[Redux](https://github.com/rackt/redux)について語ろうと思いました。

#### 執筆現在、GitHubで2000以上★がついているFluxライブラリ

reduxが一番後発なのですが、すごい勢いで伸びています。

- [rackt/redux](https://github.com/rackt/redux) (<strong>2015/5/24</strong>から) → <iframe src="https://ghbtns.com/github-btn.html?user=rackt&repo=redux&type=star&count=true" frameborder="0" scrolling="0" width="170px" height="20px"></iframe>
- [facebook/flux](https://github.com/facebook/flux) (2014/7/20から) → <iframe src="https://ghbtns.com/github-btn.html?user=facebook&repo=flux&type=star&count=true" frameborder="0" scrolling="0" width="170px" height="20px"></iframe>
- [reflux/refluxjs](https://github.com/reflux/refluxjs) (2014/6/29から) → <iframe src="https://ghbtns.com/github-btn.html?user=reflux&repo=refluxjs&type=star&count=true" frameborder="0" scrolling="0" width="170px" height="20px"></iframe>
- [goatslacker/alt](https://github.com/goatslacker/alt) (2014/12/7から) → <iframe src="https://ghbtns.com/github-btn.html?user=goatslacker&repo=alt&type=star&count=true" frameborder="0" scrolling="0" width="170px" height="20px"></iframe>

Fluxライブラリの比較は[voranianski/flux-comparison](https://github.com/voronianski/flux-comparison)です。

はじめはRefluxを使っていましたが、最近Reduxに乗り換えました。他のFluxライブラリは使ったことがありません。

#### Reduxについての日本語での言及

これだけ流行ってるのだけれど、日本語の記事はそれほどありません。Qiitaの記事で見つけたのは以下で、括弧内は執筆時のストック数。ポエムはまだない。

- (37) [reduxを試してみた(1日目) - Reduxをざっくり理解する](http://qiita.com/kompiro/items/7ddca41bef00444e14c7) - 2015/8/19
- (36) [Redux初めて触って色々わかったメモ](http://qiita.com/inuscript/items/8dc5af052a858023287f) - 2015/9/8
- (31) [es6+power-assertでreduxのテストコードを書く](http://qiita.com/takashi/items/7c8e0d9942f25a8c3999) - 2015/10/10
- (27) [Reduxにおけるreducer分割とcombineReducersについて](http://qiita.com/kuy/items/59c6d7029a10972cba78) - 2015/8/28
- (26) [react+reduxで非同期処理を含むtodoアプリを作ってみる](http://qiita.com/halhide/items/a45c7a1d5f949596e17d)  - 2015/8/16
- (12) [Reduxさわってみたのでメモ 【とりあえず動くまで】](http://qiita.com/ushisantoasobu/items/7462d8e5904a8c2100b4)  - 2015/9/29
- (3) [超訳 Redux Documentation - アクション(action)](http://qiita.com/kobanyan/items/367850d28a838207e47d) - 2015/10/8

個人ブログだと、見つけたのは以下。

- [人気のFluxフレームワークReduxをさわってみた](http://amagitakayosi.hatenablog.com/entry/2015/07/30/000000) - 2015/7/30
- [fluxフレームワークreduxについてドキュメントを読んだメモ](http://fukajun.org/66) - 2015/8/20
- [ReduxとES6でReact.jsのチュートリアルの写経](http://blog.bokuweb.me/entry/redux-tutorial) - 2015/10/2

####

#### そもそもFluxって何?

- RebuildではNaoyaさんが[Episode 84](http://rebuild.fm/84/) (Reduxが出る前) に話していた

#### Dan Abramovさん

- Crowdfunding
- ヘアスタイルがJustin Bieber
- Used gold macbook, USB C adapter didn't work, used the organizer's laptop, installed sublime, and showed "please purchase" dialog (there's an Atom package for that)

<blockquote class="twitter-tweet" lang="en"><p lang="en" dir="ltr">OH by <a href="https://twitter.com/dan_abramov">@dan_abramov</a> &quot;I used to read calculus math books when I was 5 years old&quot;. That explains it... <a href="https://twitter.com/hashtag/reacteurope?src=hash">#reacteurope</a></p>&mdash; react-europe (@ReactEurope) <a href="https://twitter.com/ReactEurope/status/617781858651254784">July 5, 2015</a></blockquote>

<blockquote class="twitter-tweet" lang="en"><p lang="en" dir="ltr">Also looking forward to joining <a href="https://twitter.com/fbOpenSource">@fbOpenSource</a> to work on React Native tooling in November.</p>&mdash; Dan Abramov (@dan_abramov) <a href="https://twitter.com/dan_abramov/status/650968538564444160">October 5, 2015</a></blockquote>

#### Other Tweets

<blockquote class="twitter-tweet" lang="en"><p lang="en" dir="ltr">Angular 2 supports using Redux and RxJs.</p>&mdash; Joe Eames (@josepheames) <a href="https://twitter.com/josepheames/status/656393992469368832">October 20, 2015</a></blockquote>

#### Reduxのライブラリ

- [omnidan/redux-undo](https://github.com/omnidan/redux-undo) - simple undo/redo functionality for redux state containers → <iframe src="https://ghbtns.com/github-btn.html?user=omnidan&repo=redux-undo&type=star&count=true" frameborder="0" scrolling="0" width="170px" height="20px"></iframe>

続きは[awesome-redux](https://github.com/xgrommx/awesome-redux)でどうぞ。

#### Reduxについての記事

- [State Management with Redux](http://konkle.us/state-management-with-redux/)
- [Single State Tree + Flux](http://merrickchristensen.com/articles/single-state-tree.html)
- [What the Flux? Let's Redux.](https://blog.andyet.com/2015/08/06/what-the-flux-lets-redux)

続きは[awesome-redux](https://github.com/xgrommx/awesome-redux)でどうぞ。
