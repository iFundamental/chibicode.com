---
issue: 5
title: アダプティブラーニングの「選択肢が多すぎ」問題
permalink: /5-adaptive-learning
date: 2016-09-12
prev_issues:
  - 3
  - 4
next_issues:
  - 6
image: /images/5/alfonzo-2.jpg
tweet_id: 775508957943115776
fb_id: 10200651663433812
---

学校の先生方へ

[前回の記事](/4-too-many-choices)では、アメリカの教育×IT(エドテック)業界における「選択肢が多すぎ」問題をとりあげました。

> エドテックが流行ると教育向けアプリやサービスが大量に生まれますが、それは「選択肢が多すぎ」問題を引き起こします。「(エドテックの)選択が難しいと感じ、無力感にさいなまれる」「選んだ選択肢に不安を持ってしまう」「上がった期待値に届かずがっかりする」「選択に失敗した場合、自分自身を責める」など、選択肢が多いことの負の面が表面化してしまうのです。
>
> そして教育においては、選択に失敗したときのコストが大きいため、これらの負の面が他の分野より目立ちます。ゆえに懐疑派が「やっぱり教育にテクノロジーは合わない」という結論にたどり着くのです。

今回は、アメリカのエドテックにおける「選択肢が多すぎ」問題を、「アダプティブラーニング」を題材に掘り下げてみることにしましょう。

## アダプティブラーニングとは何か

2016年現在、日本の教育現場では「[アクティブラーニング](https://ja.wikipedia.org/wiki/%E3%82%A2%E3%82%AF%E3%83%86%E3%82%A3%E3%83%96%E3%83%BB%E3%83%A9%E3%83%BC%E3%83%8B%E3%83%B3%E3%82%B0)」、すなわち先生ではなく生徒が主体(能動的)になる学習方法が流行っているようですが、アメリカの教育現場ではそれと同じくらい「アダプティブラーニング」が流行っています。ご存知の方も多いかもしれません。

**アダプティブラーニングとは、学習者の得意なこと・苦手なことを学び取り、学習者にとって最適な教材を自動で「おすすめ」してくれるデジタル教材のことを指します。**

ぼくは2015年12月に書いた「[『ニッポンのジレンマ』元日スペシャルに出たとき、カンペに書かれていたこと](http://chibicode.com/nhk-dilemma/)」という記事で、アダプティブラーニングについて以下のように書きました。

> ぼくは教育×テクノロジーの分野で働いているのだが、この分野で人工知能に期待されているのは「[アダプティブラーニング](http://globis.jp/article/1314)」だ。「アダプティブ (adaptive)」とは「順応する」という意味である。手短に説明すると、アダプティブラーニングは特殊なデジタル教材のことで、学習者の得意なこと・苦手なことを学び取り、学習者にとって最適な教材を自動で「おすすめ」してくれるものだ。
>
> Amazonが「おすすめ商品」を表示してくれるように、たとえば子どもが「3桁－2桁=1桁の引き算が苦手」と分かったら、それを克服するための「おすすめ問題」を出題してくれるのがアダプティブラーニングである。あるいは、もし子どもが「百分率」で躓いているとしたら、割合の基礎をチェックする問題を出し、それがダメなら分数や小数の基礎をチェックする問題を出し、それもダメなら割り算の基礎をチェックする問題を出し…と、人工知能が自動で子どもの苦手の原因を追求したりもできる。
>
> アナログ世界だと、これは「上手な先生」が得意とすることだが、人工知能によって同じことがデジタルでも可能になったのだ。
>
> 教育のIT化が進んでいるアメリカでは、すでにアダプティブラーニング教材が学校で使われている。中学2年生までの算数・数学のアダプティブラーニング教材を提供する[Dreambox](http://www.dreambox.com/)は、2015年時点で150万人の生徒と7万5000人の先生が[利用している](http://www.dreambox.com/press-releases/dreambox-learning-secures-10-million-in-series-b-funding)。
>
> また2015年には、同じくアダプティブラーニング業界で先をゆく米[Knewton](https://www.knewton.com/)社が、ベネッセ・ソフトバンクの合弁教育ベンチャーと日本展開のため[提携したりしている](http://itpro.nikkeibp.co.jp/atclact/activer/nkpr/RSP390887_08072015/)。

## Dreamboxのアダプティブラーニング機能のデモ

上に書いたDreamboxのアダプティブラーニング機能を見てみましょう。実際にDreamboxのアプリ画面を使って説明します([ソース](http://www.dreambox.com/reporting/assignfocus))。

たとえば小学校高学年の算数の授業で、生徒たちは最終的に「分数の掛け算」をマスターすることが求められているとします。

まず優等生のAlfonzo君がDreamboxにログインすると、「分数の掛け算」というレッスンが表示されています。

![](/images/5/alfonzo-1.jpg)

クリックすると、「分数の掛け算」をマスターする第一ステップである、「整数×分数」のレッスンが始まります。

![](/images/5/alfonzo-2.jpg)

つぎに、Alfonzo君ほど分数をうまく理解できていないLeannaちゃんの場合、掛け算ではなく「分数の足し算」のレッスンが表示されています。ここに至るまでのレッスンを繰り返すなかで、Dreamboxの人工知能は「Leannaちゃんには、分数の掛け算はまだ早い」と判断したわけですが、その部分は割愛します。

![](/images/5/leanna-1.jpg)

クリックすると、「分母が同じの、仮分数と真分数の足し算」の問題が表示されます。(仮分数=分子が分母より大きい。真分数はその逆)

![](/images/5/leanna-2.jpg)

最後に、同じく分数に苦労しているRosellaちゃんにも、「分数の足し算」のレッスンが表示されています。

![](/images/5/rosella-1.jpg)

しかし、Dreamboxの人工知能はここに至るまでのレッスンを繰り返すなかで、「Rosellaちゃんは、Leannaちゃんほど分数の理解がない」と判断しました。ゆえに、彼女にはさらに易しい「分母が同じの、答えが仮分数にならない分数の足し算」の問題が表示されます。

![](/images/5/rosella-2.jpg)

このように、Dreamboxは生徒の習熟度に応じて最適な教材を提供してくれるのです。また、先生は全生徒の習熟度を一覧形式で見ることができます([画像ソース](http://www.dreambox.com/blog/whats-new-june-2016))。

![](/images/5/progress.png)

Dreamboxは中学2年生までの算数・数学にしか対応していませんが、なんとなくどんなサービスかがお分かりいただけたでしょうか。

## アダプティブラーニングの「選択肢が多すぎ」問題

ここで「選択肢が多すぎ」問題に戻りましょう。

アダプティブラーニングを売りにしているデジタル教材は、Dreamboxだけではありません。[弊社(EdSurge)の調査によると](https://www.edsurge.com/research/special-reports/adaptive-learning/software)、アメリカの教育現場で使われているアダプティブラーニングのアプリ・サービスは現在なんと24種類もあります(2016年2月)。

以下がその一覧(名前順)です。リンク先はEdSurge内のサービス紹介ページです。

- **[ALEKS](https://www.edsurge.com/product-reviews/aleks)** - 小中高の算数・数学のアダプティブラーニング教材。
- **[Brightspace Leap](https://www.edsurge.com/product-reviews/desire2learn-product)** - 小中高から大学、社会人教育までをカバーするデジタル教材の大手で、アダプティブラーニング教材も充実。
- **[CK-12 Platform](https://www.edsurge.com/product-reviews/ck-12-platform)** - 理系科目の教材を無料で提供しているNPO。アダプティブな数学・科学の教材も提供。
- **[Cogbooks](https://www.edsurge.com/product-reviews/cogbooks-product)** - アダプティブな歴史と生物学のデジタル教材を提供中。
- **[DreamBox](https://www.edsurge.com/product-reviews/dreambox-learning)** - 中学2年生までの算数・数学のアダプティブラーニング教材。アダプティブラーニング教材の中では大手。
- **[Fishtree](https://www.edsurge.com/product-reviews/fishtree)** - Khan Academyなどネットにあるフリー教材を使い、先生がアダプティブなカリキュラムを作ることができるサービス。
- **[Fulcrum Labs](https://www.edsurge.com/product-reviews/adapt-courseware)** - 高等教育向けのアダプティブラーニングプラットフォーム。
- **[i-Ready](https://www.edsurge.com/product-reviews/i-ready)** - 中学2年生までの算数・数学、そして国語(英語)のアダプティブラーニング教材。
- **[Istation](https://www.edsurge.com/product-reviews/istation-reading)** - 幼稚園から高校までカバーする算数・数学と国語のアダプティブラーニング教材。
- **[Knewton](https://www.edsurge.com/product-reviews/knewton)** - アダプティブラーニング教材の先駆者的存在。
- **[KnowRe](https://www.edsurge.com/product-reviews/knowre)** - 数学に特化したアダプティブラーニング教材。遅れている生徒の補習向けに使われている。
- **[LearnBop](https://www.edsurge.com/product-reviews/learnbop)** - 小学校高学年から中学生向けの、数学に特化したアダプティブラーニング教材。ぼくの個人的お気に入り。
- **[LearnSmart + SmartBook](https://www.edsurge.com/product-reviews/mcgraw-hill-learnsmart)** - 教育系の大手出版社・McGraw Hillによる、アダプティブラーニングを用いた補習用教材。
- **[Lexia Reading Core 5](https://www.edsurge.com/product-reviews/lexia-reading-core5)** - 幼稚園から5年生までを対象とした国語のアダプティブラーニング教材。
- **[Mastering](https://www.edsurge.com/product-reviews/mastering)** - 教育系の大手出版社・Pearsonによる、科学・工学のアダプティブラーニング教材。高等教育向け。
- **[Mathspace](https://www.edsurge.com/product-reviews/mathspace-product)** - 数式の手書き入力にも対応している算数のアダプティブラーニング教材。
- **[MyLab](https://www.edsurge.com/product-reviews/mylab)** - 教育系の大手出版社・Pearsonによる、国語と社会のアダプティブラーニング教材。高等教育向け。
- **[Redbird Advanced Learning](https://www.edsurge.com/product-reviews/redbird-advanced-learning-courses)** - 小学校向けの国語・算数のアダプティブラーニングカリキュラム。
- **[ScootPad](https://www.edsurge.com/product-reviews/scootpad)** - 中学2年生までの算数・数学、そして国語(英語)のアダプティブラーニング教材。
- **[Smart Sparrow](https://www.edsurge.com/product-reviews/smart-sparrow)** - 先生がアダプティブな教材を自作することができるサービス。
- **[ST Math](https://www.edsurge.com/product-reviews/st-math)** - 小学校から高校までの数学をゲーム感覚で学べるカリキュラム。普及率も高い。
- **[SuccessMaker](https://www.edsurge.com/product-reviews/successmaker)** - 教育系の大手出版社・Pearsonによる、中学2年生までの算数・数学、そして国語(英語)のアダプティブラーニング教材。
- **[Think Through Math](https://www.edsurge.com/product-reviews/think-through-math)** - 数学のアダプティブラーニング教材。詰まったらチューターとも会話することができる。
- **[Waggle](https://www.edsurge.com/product-reviews/waggle)** - 中学2年生までの算数・数学、そして国語(英語)のアダプティブラーニング教材。

## どれを選べばいいのか分からない

アメリカでは公教育の現場でエドテックが使われていますが、アダプティブラーニングだけでもこれだけ種類があると、教材を購入する学校側が「選択肢が多すぎ」問題に悩まされてしまいます。

> エドテックが流行ると教育向けアプリやサービスが大量に生まれますが、それは「選択肢が多すぎ」問題を引き起こします。「(エドテックの)選択が難しいと感じ、無力感にさいなまれる」「選んだ選択肢に不安を持ってしまう」「上がった期待値に届かずがっかりする」「選択に失敗した場合、自分自身を責める」など、選択肢が多いことの負の面が表面化してしまうのです。
>
> そして教育においては、選択に失敗したときのコストが大きいため、これらの負の面が他の分野より目立ちます。ゆえに懐疑派が「やっぱり教育にテクノロジーは合わない」という結論にたどり着くのです。

## 「第三者の厳しい目」が必要だが・・・

選択を難しくしている点は、「第三者によるレビューが少ない」という点です。どのサービスも「お客様(先生・生徒)の声」を載せていますが、辞任した舛添前都知事が抜擢した「第三者」のように、バイアスが無いとは言い切れません。

また、ネット検索で中立的なレビューを見つけることができても、教育というものは、現場によって指導方法が大きく変わります。ある先生が「このアダプティブラーニング教材はひどい」と言い、まったく別な先生が「これは最高の教材だ」と言うことは日常茶飯事です。教え方のスタイル、生徒の能力、学校の大まかな教育方針など、差異が生まれる原因は数えたらキリがありません。

エドテックのレビューはAmazonや食べログなどのレビューよりも一層あてにならないのです。

## じゃあどうするか

解決方法のひとつは、良質な教育系メディアや研究機関が、「この教材はこういう教室・先生向けで、こういう点に長けていて、こういう点は苦手」ということを調べて提示することです。家電やレストランのレビュー、書評や映画の批評などに比べて、「向き不向き」の部分に多くの文字数を割くことが大事です。

## EdSurgeのアダプティブラーニングサービスに対する「第三者の目」

たとえば弊社・EdSurgeは、エドテック市場の研究をスポンサー企業と組んで行っています(貴重な収入源です)。もちろん、[スポンサー企業の意向が反映されないように](https://www.edsurge.com/research/special-reports/adaptive-learning/about)気を配っています。

[弊社はアダプティブラーニング教材の研究](https://www.edsurge.com/research/special-reports/adaptive-learning/)も行っていて、それによると、アダプティブラーニング教材には三種類のタイプがあると判明しました。

1. 生徒の習熟度を把握し、生徒に役に立つヒントや資料を提示するタイプ
2. 生徒の習熟度を把握し、生徒に最も適したドリル問題を提示するタイプ
3. 生徒の習熟度を把握し、生徒ごとに別々のカリキュラムを提示するタイプ

アダプティブラーニングのサービスはどれも一長一短で、たとえば生徒の習熟度に適したドリル問題を提示してくれるものの、生徒が詰まったときに出てくるヒントは分かりにくかったりすることもあります。それぞれのサービスの強みと弱みを弊社が調べてみた結果、以下のような結論に至りました。

1. **生徒の習熟度を把握し、生徒に役に立つヒントや資料を提示するのが強いサービス:** CogBooks, Dreambox, Fulcrum Labs, i-Ready, Istation, Knowre, LearnBop, Lexia, Mastering, MathSpace, MyLab, Redbird Advanced Learning, Smart Sparrow, ST Math, Think Through Math, Waggle
2. **生徒の習熟度を把握し、生徒に最も適したドリル問題を提示するのが強いサービス:** ALEKS, Ck-12 Platform, Fulcrum Labs, i-Ready, Istation, LearnSmart + SmartBook, Mastering, ScootPad, SuccessMaker, Think Through Math
3. **生徒の習熟度を把握し、生徒ごとに別々のカリキュラムを提示するのが強いサービス:** ALEKS, Brightspace Leap, CogBooks, Dreambox, Fishtree, Knewton, Knowre, Learnsmart + Smartbook, Mathspace, MyLab, Redbird Advanced Learning, ScootPad, Smart Sparrow, SuccessMaker, Waggle

このような判断材料があれば、とりあえず先生は1、2、3のどれを求めてるかでサービスを選ぶことが可能になります。

## (1)「生徒の習熟度を把握し、生徒に役に立つヒントや資料を提示するタイプ」LearnBopの例

たとえば、(1)の「生徒の習熟度を把握し、生徒に役に立つヒントや資料を提示するタイプ」には、代表的なものに[LearnBop](http://learnbop.com)があります。小学校高学年から中学生向けの、数学に特化したアダプティブラーニング教材です。

たとえば、以下のような分数の問題が出題されたとします。

![](/images/5/learnbop-1.png)

生徒が答えられなかった場合、次のように適切なヒントが表示されます。

![](/images/5/learnbop-2.png)

それでも分からなかったら、さらに易しいヒントが表示されます。

![](/images/5/learnbop-3.png)

LearnBopのヒントの質は高く、他のアダプティブラーニングサービスに比べ「生徒の習熟度を把握し、生徒に役に立つヒントや資料を提示する」ことに長けていると言えます。

## それでも「選択肢が多すぎ」問題はまだ残る

繰り返しになりますが、エドテックが広まるためには、良質な教育系メディアや研究機関が、「この教材はこういう教室・先生向けで、こういう点に長けていて、こういう点は苦手」ということを調べ、学校側に伝えていかなければなりません。でなければ、「選択肢が多すぎ」問題の負の面が業界に蔓延してしまいます。

ただ、良質な判断材料が増えたとしても、「選択肢が多すぎ」問題は完全には解決できません。よって次回では、もう一歩踏み込んだ「選択肢が多すぎ」問題の解決方法を紹介したいと思います。ぜひ、併せてお読みください。
