---
layout: section
category: CASCADING STYLE SHEETS
---

# Part 3
## CSSで見た目を整える

<!--
目安20分。
-->

---
category: CASCADING STYLE SHEETS
---

# CSSはどこに書く？

<div class="grid grid-cols-3 gap-4 mt-6 text-sm">

<div class="p-4 border rounded opacity-60">
<b>① タグに直接</b>

```html
<h1 style="color: red;">
```

管理しづらい。使わない。
</div>

<div class="p-4 border rounded opacity-60">
<b>② head の中に</b>

```html
<style>
  h1 { color: red; }
</style>
```

小さい練習用ならアリ。
</div>

<div class="p-4 border-2 border-teal-500 rounded">
<b>③ 別ファイル</b>

```html
<link rel="stylesheet"
      href="style.css" />
```

今日はこれ。
中身と見た目を分けられる。
</div>

</div>

<div class="mt-8"/>

`style.css` を作って、`index.html` の `<head>` に読み込む1行を書けば準備完了。

```html
<link rel="stylesheet" href="style.css" />
```

<!--
3つの書き方を見せて、別ファイル方式に決める。
- link 1行を index.html に書いてもらう。ここで全員足並みを揃える
-->

---
category: CASCADING STYLE SHEETS
---

# CSSの文法

<div class="mt-6 flex justify-center">
<div>

```css
h1 {
  color: #2e7d6b;
  font-size: 32px;
}
```

</div>
</div>

<div class="mt-6 grid grid-cols-3 gap-4 text-center">
<div class="p-4 border rounded">
<b class="text-teal-600">セレクタ</b>
<div class="mt-2 text-sm opacity-70">どこを</div>
<code class="text-sm">h1</code>
</div>
<div class="p-4 border rounded">
<b class="text-teal-600">プロパティ</b>
<div class="mt-2 text-sm opacity-70">何を</div>
<code class="text-sm">color</code>
</div>
<div class="p-4 border rounded">
<b class="text-teal-600">値</b>
<div class="mt-2 text-sm opacity-70">どうする</div>
<code class="text-sm">#2e7d6b</code>
</div>
</div>

<div class="mt-8 text-sm opacity-70">
よくあるミス：<b>セミコロン ; の付け忘れ</b> / 全角スペースが混ざる / 波括弧の閉じ忘れ
</div>

<!--
セレクタ／プロパティ／値。
- 「**セミコロンの付け忘れ**」「**全角スペース混入**」が二大エラー。先に言う
-->

---
category: CASCADING STYLE SHEETS
---

# セレクタ — どこを装飾するか

```css
/* ① タグ名で指定 → そのタグ全部 */
p {
  color: #333;
}

/* ② class名で指定 → 「.」を付ける（よく使う） */
.tags {
  display: flex;
}

/* ③ 子孫で指定 → 「.tags の中の li」だけ */
.tags li {
  background-color: #e8f0ed;
}
```

<div class="mt-6 text-sm opacity-70">
③ が使えると書ける幅が広がります。スペースで繋ぐと「〜の中の」という意味。
</div>

<!--
3種類。
- 子孫セレクタ（`.tags li`）はこの後よく使うので、ここは丁寧に
-->

---
category: CASCADING STYLE SHEETS
---

# 色の指定

<div class="grid grid-cols-2 gap-8 mt-6">
<div>

### 書き方は主に2つ

```css
color: red;        /* 色名 */
color: #2e7d6b;    /* 16進数 */
```

実際の制作では 16進数が基本。

<div class="mt-4"/>

`#` の後ろは **RR GG BB**（赤・緑・青）を
それぞれ `00`〜`ff` で表す。

```css
#ff0000  /* 赤 */
#000000  /* 黒 → #000 と略せる */
#ffffff  /* 白 → #fff と略せる */
```

</div>
<div>

### よく使うプロパティ

```css
color: #333333;            /* 文字色 */
background-color: #f5f5f5; /* 背景色 */
```

<div class="mt-5 text-sm opacity-70">
VSCodeで色コードの左の四角をクリックすると、カラーピッカーが出ます。
</div>

<div class="mt-4 text-sm opacity-70">
<b>推奨値</b><br>
・本文の文字色 … 純黒 <code>#000</code> より少し明るい <code>#333</code> 前後がよく使われる<br>
・文字と背景の明暗差（コントラスト比）… <code>4.5:1</code> 以上が推奨（WCAG AA）。
<code>#333</code> と白なら約12:1で十分
</div>

</div>
</div>

<!--
16進数。深入りしない。
- VSCodeのカラーピッカーは実演した方が早い
- 推奨値（#333前後 / コントラスト比4.5:1以上）はスライドに書いてある
-->

---
category: CASCADING STYLE SHEETS
---

# 文字まわり

```css
body {
  font-family: "Hiragino Sans", "Noto Sans JP", sans-serif;  /* フォント */
  font-size: 16px;      /* 文字の大きさ */
  line-height: 1.8;     /* 行間 */
  color: #333333;       /* 文字色 */
}

h2 {
  font-weight: bold;    /* 太字 */
  text-align: center;   /* 中央揃え（left / right / center）*/
}
```

<div class="mt-6 text-sm opacity-70">
<b>推奨値</b><br>
・本文の文字サイズ … <code>16px</code>。ブラウザの初期値で、これより小さいと読みにくい<br>
・行間 … <code>1.5</code> 以上。アクセシビリティ指針の WCAG でも本文1.5以上が推奨。
日本語は文字が詰まりやすいので <code>1.7</code>〜<code>1.8</code> が読みやすい
</div>

<!--
行間の指定は効果が見て分かりやすい。
- 推奨値（16px / 1.5以上）はスライドに書いてある
- 実際に 1.0 と 1.8 を切り替えて見せると早い
-->

---
category: CASCADING STYLE SHEETS
---

# ボックスモデル — CSSの最重要概念

すべての要素は**4重の箱**でできている。

<div class="flex justify-center mt-6">
<div style="background:#fde68a;color:#333;padding:26px;text-align:center;border-radius:4px">
  <div style="font-size:12px;margin-bottom:6px">margin（外側の余白）</div>
  <div style="background:#fca5a5;padding:24px;border-radius:4px">
    <div style="font-size:12px;margin-bottom:6px">border（枠線）</div>
    <div style="background:#a7f3d0;padding:24px;border-radius:4px">
      <div style="font-size:12px;margin-bottom:6px">padding（内側の余白）</div>
      <div style="background:#fff;padding:16px 40px;border-radius:4px">
        <b>content（中身）</b>
      </div>
    </div>
  </div>
</div>
</div>

<div class="mt-6 text-center">
<b>margin = 他の要素との距離</b> ／ <b>padding = 枠線と中身の距離</b>
</div>

<!--
ここは時間をかけていい。以降のCSSがすべてこの上に乗る。
- 図を指しながら「margin=他人との距離／padding=枠と中身の距離」
- ここが分かると以降のCSSが読めるようになる
-->

---
category: CASCADING STYLE SHEETS
---

# margin と padding の書き方

```css
.box {
  margin: 20px;                 /* 上下左右すべて20px */
  margin: 20px 10px;            /* 上下20px、左右10px */
  margin: 10px 20px 30px 40px;  /* 上→右→下→左（時計回り）*/

  margin-top: 20px;             /* 上だけ指定 */
  margin-bottom: 40px;
}
```

<div class="grid grid-cols-2 gap-6 mt-6">
<div>

### 枠線

```css
border: 1px solid #ddd;
/*     太さ 種類  色 */

border-bottom: 2px solid #2e7d6b;
/* 下線だけ引く（見出しに便利）*/
```

</div>
<div>

### 角を丸める

```css
border-radius: 8px;    /* 角丸 */
border-radius: 50%;    /* 正円 */
```

</div>
</div>

<div class="mt-5 text-sm opacity-70">
<b>推奨値</b> … 余白は <code>8</code> の倍数（8 / 16 / 24 / 32 …）で揃えると全体が整って見える。
「8ptグリッド」と呼ばれる、実務でよく使われる決め方。
</div>

<!--
margin/paddingの書き方と枠線。
- 上→右→下→左（時計回り）だけ覚える
- border-bottom で見出しに下線、は完成サイトで使う
-->

---
category: CASCADING STYLE SHEETS
---

# 2つの「おまじない」

<div class="mt-4"/>

### ① box-sizing: border-box

```css
* {
  box-sizing: border-box;
}
```

`*` は「すべての要素」。padding を足しても**幅が広がらなくなる**。
これを書かないと幅の計算でハマります。最初に書いておく。

<div class="mt-6"/>

### ② 中央寄せ

```css
.container {
  max-width: 720px;   /* 最大720px、画面が狭ければ縮む */
  margin: 0 auto;     /* 上下0、左右autoで中央に */
}
```

<div class="mt-3 text-sm opacity-70">
<code>width</code> ではなく <code>max-width</code> にするのがコツ。スマホでも勝手に収まってくれる。
</div>

<div class="mt-3 text-sm opacity-70">
<b>推奨値</b> … 本文の1行は、読みやすさの目安として日本語で 35〜45文字程度。
16px なら <code>700px</code>〜<code>800px</code> がだいたいその範囲になる。
</div>

<!--
理由は深追いしない。「そういうもの」で進める。
- box-sizing は「paddingを足しても幅が広がらなくなる」だけ伝える
- `max-width` + `margin: 0 auto` はよく使う型。覚えて損はないと伝える
-->

---
category: CASCADING STYLE SHEETS
---

# 画像を丸くする

```css
.avatar {
  width: 140px;
  height: 140px;
  border-radius: 50%;   /* 角丸を最大に → 円になる */
  object-fit: cover;    /* 縦横比を保ったまま切り抜く */
}
```

<div class="grid grid-cols-2 gap-8 mt-6">
<div>

`object-fit: cover` を忘れないこと。

これが無いと、長方形の写真を
正方形に押し込んだときに
画像が潰れます。

`cover` = はみ出す部分を切り取って、
比率を保ったまま埋める。

</div>
<div>
<div class="text-center mb-2">
<img src="/photo-wide.svg" style="width:170px;border-radius:6px">
<div class="text-xs mt-1 opacity-60">元の画像（横長）</div>
</div>
<div class="flex gap-6 items-center justify-center">
<div class="text-center">
<img src="/photo-wide.svg" style="width:95px;height:95px;object-fit:fill;border-radius:50%;border:2px solid #ef4444">
<div class="text-xs mt-1 opacity-60">cover なし（潰れる）</div>
</div>
<div class="text-center">
<img src="/photo-wide.svg" style="width:95px;height:95px;object-fit:cover;border-radius:50%;border:2px solid #2e7d6b">
<div class="text-xs mt-1 opacity-60">cover あり</div>
</div>
</div>
</div>
</div>

<!--
border-radius: 50% と object-fit: cover。
- 画面の左右比較（潰れる／潰れない）を指して説明
- 「coverが無いと顔が伸びます」で伝わる
-->

---
category: CASCADING STYLE SHEETS
---

# Flexbox — 横に並べる

要素を横並びにしたいとき、**親要素**に `display: flex` を書く。

<div class="grid grid-cols-2 gap-6 mt-4">
<div>

```html
<ul class="tags">
  <li>HTML</li>
  <li>CSS</li>
  <li>Git</li>
</ul>
```

```css
.tags {
  display: flex;     /* 子を横並びに */
  gap: 10px;         /* すき間 */
  flex-wrap: wrap;   /* 入らなければ折り返す */
  list-style: none;  /* リストの・を消す */
  padding: 0;
}
```

</div>
<div>

<div class="p-4 border rounded bg-white dark:bg-gray-800 text-black dark:text-white">
<div class="text-xs opacity-60 mb-2">display: flex なし</div>
<div class="text-sm">・HTML<br>・CSS<br>・Git</div>
<div class="text-xs opacity-60 mt-4 mb-2">display: flex + gap</div>
<div style="display:flex;gap:10px">
<span style="background:#e8f0ed;color:#333;padding:6px 14px;border-radius:999px;font-size:14px">HTML</span>
<span style="background:#e8f0ed;color:#333;padding:6px 14px;border-radius:999px;font-size:14px">CSS</span>
<span style="background:#e8f0ed;color:#333;padding:6px 14px;border-radius:999px;font-size:14px">Git</span>
</div>
</div>

<div class="mt-3 text-sm opacity-70">
子ではなく<b>親</b>に書くのがポイント。
</div>

</div>
</div>

<!--
**親に書く**のがポイント。ここを間違える人が多い。
- 画面右の before/after を見せる
- list-style: none と padding: 0 もセットで必要と添える
-->

---
category: CASCADING STYLE SHEETS
---

# Flexbox — 並べ方を調整する

```css
.box {
  display: flex;
  justify-content: center;   /* 横方向の配置 */
  align-items: center;       /* 縦方向の配置 */
}
```

<div class="mt-6"/>

### justify-content でよく使う値

<div class="grid grid-cols-4 gap-3 mt-3 text-center text-xs">
<div>
<div style="display:flex;justify-content:flex-start;gap:4px;background:#f3f4f6;padding:8px;border-radius:4px">
<span style="background:#2e7d6b;width:20px;height:20px;border-radius:3px"></span>
<span style="background:#2e7d6b;width:20px;height:20px;border-radius:3px"></span>
</div>
<code class="mt-1 block">flex-start</code>
</div>
<div>
<div style="display:flex;justify-content:center;gap:4px;background:#f3f4f6;padding:8px;border-radius:4px">
<span style="background:#2e7d6b;width:20px;height:20px;border-radius:3px"></span>
<span style="background:#2e7d6b;width:20px;height:20px;border-radius:3px"></span>
</div>
<code class="mt-1 block">center</code>
</div>
<div>
<div style="display:flex;justify-content:space-between;background:#f3f4f6;padding:8px;border-radius:4px">
<span style="background:#2e7d6b;width:20px;height:20px;border-radius:3px"></span>
<span style="background:#2e7d6b;width:20px;height:20px;border-radius:3px"></span>
</div>
<code class="mt-1 block">space-between</code>
</div>
<div>
<div style="display:flex;justify-content:space-around;background:#f3f4f6;padding:8px;border-radius:4px">
<span style="background:#2e7d6b;width:20px;height:20px;border-radius:3px"></span>
<span style="background:#2e7d6b;width:20px;height:20px;border-radius:3px"></span>
</div>
<code class="mt-1 block">space-around</code>
</div>
</div>

<div class="mt-6 text-sm opacity-70">
これだけ覚えれば、ナビゲーションメニューもカード並べも大体できます。
</div>

<!--
justify-content の4つ。
- 全部覚えなくていい。center と space-between が使えれば十分
-->

---
category: CASCADING STYLE SHEETS
---

# マウスを乗せたときの変化 — hover

```css
a {
  color: #2e7d6b;
}

a:hover {
  opacity: 0.7;    /* 少し薄くする */
}
```

<div class="grid grid-cols-2 gap-8 mt-8">
<div>

`:hover` を付けると
「マウスが乗っているとき」の
スタイルを指定できる。

リンクやボタンに付けると
押せる感が出ます。

</div>
<div class="p-6 border rounded bg-white dark:bg-gray-800 text-center">
<a href="#" style="color:#2e7d6b;font-size:20px;text-decoration:underline;transition:opacity .3s" onmouseover="this.style.opacity=0.5" onmouseout="this.style.opacity=1">ここにマウスを乗せてみて</a>
</div>
</div>

<!--
hover。
- 「押せる感が出る」と伝える
- 画面のリンクにマウスを乗せて実演できる
-->

---
category: CASCADING STYLE SHEETS
---

# スマホ対応をちょっとだけ

<div class="mt-4"/>

### ① head にこの1行

```html
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
```

### ② 画面が狭いときだけスタイルを変える

```css
@media (max-width: 600px) {
  .hero h1 {
    font-size: 26px;    /* スマホでは見出しを小さく */
  }
}
```

<div class="mt-6 text-sm opacity-70">
確認方法：Chromeで検証ツールを開き、左上のスマホアイコンをクリック。
</div>

<PlatformTabs :show-switch="false">
<template #mac>

<div class="mt-2 text-sm opacity-70">
<kbd><mdi-apple-keyboard-command class="inline-block inline-icon" width="1em" height="1em" /> Command</kbd> + <kbd><mdi-apple-keyboard-option class="inline-block inline-icon" width="1em" height="1em" /> Option</kbd> + <kbd>I</kbd> で開きます。
</div>

</template>
<template #win>

<div class="mt-2 text-sm opacity-70">
<kbd>F12</kbd>、または <kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>I</kbd> で開きます。
</div>

</template>
</PlatformTabs>

<div class="mt-3 text-sm opacity-70">
<code>max-width</code> と <code>flex-wrap: wrap</code> を使っていれば、スマホでもだいたい崩れません。
</div>

<!--
さらっと。
- Chromeの検証ツール（スマホ表示）を実演すると分かりやすい
- 「max-width と flex-wrap を使っていれば大体崩れない」で安心させる
-->
