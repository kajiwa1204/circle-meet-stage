---
layout: section
category: HYPERTEXT MARKUP LANGUAGE
---

# Part 2
## HTMLを書く

<!--
目安20分。ここから手を動かすパート。
-->

---
category: HYPERTEXT MARKUP LANGUAGE
---

# HTMLの骨組み

これはどのページでも同じ。丸暗記しなくてOK。

```html {all|1|2|3-8|4|6|7|9-11}
<!DOCTYPE html>
<html lang="ja">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>山田 はな | プロフィール</title>
  <link rel="stylesheet" href="style.css" />
</head>
<body>
  <!-- ここに書いたものが画面に表示される -->
</body>
</html>
```

<div class="mt-4 text-sm">

- `head` … ページの**設定**（タイトル、文字コード、CSSの読み込み）。画面には出ない
- `body` … ページの**中身**。ここに書いたものが表示される

</div>

<!--
クリックで上から順に解説。
- 「**暗記しなくていい**。次のページのEmmetで一発で出ます」
- head=設定（画面に出ない）／body=中身、の対比だけ押さえる
-->

---
layout: center
class: text-center
category: HYPERTEXT MARKUP LANGUAGE
---

# 🖐️ 手を動かそう ①

<div class="mt-6 text-left inline-block">

1. `my-profile` フォルダを作る
2. VSCodeでそのフォルダを開く
3. `index.html` を新規作成
4. `!` と打って **Tab** を押す（Emmet という補完機能）
5. `lang="en"` を `lang="ja"` に直す
6. `<title>` を自分の名前に変える
7. Chromeで開いてみる

</div>

<div class="mt-8 opacity-70">
タブに自分の名前が出たら成功です。
</div>

<!--
**全員が終わるまで待つ**。ここは急がない。
- `!` + Tab のEmmetは初見だと驚くので、一度実演して見せる
- 「タブに自分の名前が出たら成功」でゴールが分かりやすい
- lang="en" → "ja" の直し忘れが多い
-->

---
category: HYPERTEXT MARKUP LANGUAGE
---

# 見出し — h1 〜 h6

```html
<h1>大見出し（ページに1つだけ）</h1>
<h2>中見出し</h2>
<h3>小見出し</h3>
```

<div class="grid grid-cols-2 gap-8 mt-6">
<div>

### ポイント

- `h1` が一番大きく、`h6` が一番小さい
- **h1 はページに1つだけ**（＝ページの題名）
- 数字は飛ばさない（h2 の次に h4 はNG）

</div>
<div class="p-4 border rounded bg-white dark:bg-gray-800 text-black dark:text-white">
<div style="font-size:28px;font-weight:bold;margin:8px 0">大見出し</div>
<div style="font-size:21px;font-weight:bold;margin:8px 0">中見出し</div>
<div style="font-size:16px;font-weight:bold;margin:8px 0">小見出し</div>
</div>
</div>

<div class="mt-4 text-sm opacity-70">
「大きい文字にしたいから h1」はNG。大きさはCSSの仕事。タグは意味で選ぶ。
</div>

<!--
h1〜h6。
- 「**h1はページに1つだけ**」
- 「大きい文字にしたいからh1」はNG。大きさはCSSの仕事、と釘を刺す
-->

---
category: HYPERTEXT MARKUP LANGUAGE
---

# 段落と改行 — p / br

<div class="grid grid-cols-2 gap-6 mt-4">
<div>

```html
<p>
  大学では情報学を学んでいます。
  Webサイトを作るのが趣味です。
</p>

<p>
  最近はJavaScriptを勉強中。<br />
  作ったものはLinksから見られます。
</p>
```

</div>
<div>

### 大事なルール

**HTMLでは、書いたとおりに改行されない。**

エディタで改行しても、表示は繋がる。

<div class="mt-4"/>

- 段落を分けたい → `<p>` を分ける
- 段落の中で改行したい → `<br />`

<div class="mt-3 text-sm opacity-70">
<code>&lt;br /&gt;</code> の連打で余白を作るのはNG。<br>余白はCSSで作る。
</div>

</div>
</div>

<!--
ここの肝は「**HTMLは書いた通りに改行されない**」。
- 実際にエディタで改行して、ブラウザで繋がるのを見せると一発
- br連打で余白を作らない（余白はCSS）
-->

---
category: HYPERTEXT MARKUP LANGUAGE
---

# リスト — ul / ol / li

<div class="grid grid-cols-2 gap-6 mt-4">
<div>

```html
<!-- 順番なし（・が付く） -->
<ul>
  <li>HTML</li>
  <li>CSS</li>
  <li>Python</li>
</ul>

<!-- 順番あり（1.2.3.が付く） -->
<ol>
  <li>フォルダを作る</li>
  <li>ファイルを作る</li>
</ol>
```

</div>
<div class="p-4 border rounded bg-white dark:bg-gray-800 text-black dark:text-white">

<div class="text-sm opacity-60 mb-1">ul（unordered list）</div>
<ul class="list-disc ml-6 mb-4">
<li>HTML</li>
<li>CSS</li>
<li>Python</li>
</ul>

<div class="text-sm opacity-60 mb-1">ol（ordered list）</div>
<ol class="list-decimal ml-6">
<li>フォルダを作る</li>
<li>ファイルを作る</li>
</ol>

</div>
</div>

<div class="mt-3 text-sm opacity-70">
<code>li</code> は必ず <code>ul</code> か <code>ol</code> の中に入れる。スキル一覧やメニューによく使う。
</div>

<!--
ul / ol / li。
- liは必ずulかolの中に入れる
- 今日のSkillsセクションで使うので「後で使います」と繋げる
-->

---
category: HYPERTEXT MARKUP LANGUAGE
---

# リンク — a

```html
<a href="https://github.com/yamada">GitHubを見る</a>

<!-- 別タブで開く -->
<a href="https://github.com/yamada" target="_blank">GitHubを見る</a>

<!-- 同じフォルダ内の別ページへ -->
<a href="works.html">作品一覧</a>

<!-- メールを開く -->
<a href="mailto:hana@example.com">メールする</a>
```

<div class="mt-6 grid grid-cols-2 gap-6">
<div>

`href` = リンク先。これが本体。

</div>
<div>

`target="_blank"` = 別タブで開く。
外部サイトへのリンクに付けると親切。

</div>
</div>

<!--
aタグ。
- hrefが本体
- target="_blank" は外部リンクに付けると親切、程度でOK
-->

---
category: HYPERTEXT MARKUP LANGUAGE
---

# 画像 — img

```html
<img src="images/avatar.png" alt="山田はなのプロフィール画像" />
```

<div class="grid grid-cols-2 gap-8 mt-8">
<div>

### src — 画像の場所

`index.html` から見た相対パスで書く。

```
my-profile/
├── index.html     ← 今ここ
└── images/
    └── avatar.png ← images/avatar.png
```

</div>
<div>

### alt — 画像の説明文

- 画像が読み込めなかったときに表示される
- 目が見えない人の読み上げソフトが読む
- **省略しない**

</div>
</div>

<div class="mt-6 text-sm opacity-70">
画像が出ないときの原因はほぼ<b>パスのミス</b>。大文字小文字・拡張子（.png / .jpg）を確認。
</div>

<!--
**画像が出ない相談が必ず来る**。先に潰しておく。
- 原因はほぼパスのミス。大文字小文字・拡張子を確認
- altは省略しない（読み上げソフト・画像が出ないとき）
-->

---
category: HYPERTEXT MARKUP LANGUAGE
---

# まとまりを作る — div とセマンティックタグ

<div class="grid grid-cols-2 gap-6 mt-4">
<div>

### div — 意味のない箱

```html
<div class="card">
  <h3>作品タイトル</h3>
  <p>説明文</p>
</div>
```

「とりあえずまとめたい」ときの箱。
CSSで装飾するために使う。

</div>
<div>

### 意味のある箱

```html
<header>ページ上部</header>
<main>メインの内容</main>
<section>ひとまとまりの区画</section>
<footer>ページ下部</footer>
```

やることは div と同じだが、
役割が名前で分かるので読みやすい。

</div>
</div>

<div class="mt-6 text-sm opacity-70">
迷ったら、役割がはっきりしているものは <code>header</code>/<code>main</code>/<code>section</code>/<code>footer</code>、そうでなければ <code>div</code>。
</div>

<!--
div＝意味のない箱、header/main/section/footer＝役割のある箱。
- 「迷ったらdivでいい」と言っておくと手が止まらない
-->

---
category: HYPERTEXT MARKUP LANGUAGE
---

# class — 要素に名前をつける

CSSで「どこを装飾するか」指定するための目印。

```html
<ul class="tags">
  <li>HTML</li>
</ul>

<section class="section">
  <h2>About</h2>
</section>
```

<div class="grid grid-cols-2 gap-8 mt-6">
<div>

### class

- 何回でも使える
- CSSでは **`.`**（ドット）で指定
- 基本はこっちを使えばOK

</div>
<div>

### id

- ページ内に1つだけ
- CSSでは **`#`** で指定
- 今日は使いません

</div>
</div>

<!--
classはCSFの目印。
- 「**idは今日使いません**」と割り切ると混乱が減る
-->

---
layout: center
category: HYPERTEXT MARKUP LANGUAGE
---

# 🖐️ 手を動かそう ②

<div class="mt-4 text-left inline-block">

`<body>` の中に、以下を自分の内容で書いてみる：

1. `<h1>` で自分の名前
2. `<p>` で一言自己紹介
3. `<h2>Skills</h2>` + `<ul><li>` で得意なこと3つ
4. `<h2>Links</h2>` + `<a>` でGitHubへのリンク

</div>

<div class="mt-8 opacity-70">
まだ見た目はダサくて大丈夫です。次のCSSで整えます。
</div>

<!--
**10分弱の作業時間**。ここが一番差がつく。
- 巡回して手が止まっている人を拾う
- 「見た目はまだダサくて大丈夫」を繰り返す（不安になる人が多い）
- 早く終わった人にはSkillsやLinksを増やしてもらう
-->
