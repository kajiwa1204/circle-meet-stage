---
layout: section
category: HOW THE WEB WORKS
---

# Part 1
## Webページのしくみ

<!--
目安8分。ここは座学。テンポよく。
-->

---
category: HOW THE WEB WORKS
---

# Webページは3つの言語でできている

<div class="grid grid-cols-3 gap-4 mt-10">

<div class="p-5 border-2 border-teal-500 rounded-lg">
<h3 class="text-teal-600">HTML</h3>
<b>構造・中身</b>
<div class="text-sm mt-2 opacity-80">
見出し、文章、画像、リンク…<br>
「何が書いてあるか」を担当
</div>
</div>

<div class="p-5 border-2 border-blue-400 rounded-lg">
<h3 class="text-blue-500">CSS</h3>
<b>見た目</b>
<div class="text-sm mt-2 opacity-80">
色、大きさ、余白、配置…<br>
「どう見えるか」を担当
</div>
</div>

<div class="p-5 border-2 border-gray-300 rounded-lg opacity-60">
<h3>JavaScript</h3>
<b>動き</b>
<div class="text-sm mt-2 opacity-80">
クリックで開く、通信する…<br>
今日はやりません
</div>
</div>

</div>

<div class="mt-10 text-center text-lg">
家で例えると → HTML = 骨組み / CSS = 内装 / JS = 電気設備
</div>

<!--
家の例え（骨組み／内装／電気設備）で説明。
- 「**JavaScriptは今日やりません**」と明言して安心させる
-->

---
category: HOW THE WEB WORKS
---

# HTMLは「意味」をつける言語

<div class="mt-6"/>

ただの文字の並びに、「これは見出し」「これは段落」 という意味（＝タグ）をつけていく。

<div class="grid grid-cols-2 gap-6 mt-6">
<div>

### タグなし（ただの文字）

```
自己紹介
はじめまして。山田です。
好きなもの
コーヒー
散歩
```

<div class="text-sm mt-2 opacity-70">
人間はなんとなく分かるが、<br>
コンピュータには全部同じ文字列。
</div>

</div>
<div>

### タグあり（構造化されている）

```html
<h1>自己紹介</h1>
<p>はじめまして。山田です。</p>
<h2>好きなもの</h2>
<ul>
  <li>コーヒー</li>
  <li>散歩</li>
</ul>
```

</div>
</div>

<div class="mt-4 text-sm opacity-70">
意味をつけると、ブラウザも検索エンジンも読み上げソフトも内容を理解できる。これが文書の構造化。
</div>

<!--
左右を見比べさせる。
- 「タグは見た目のためではなく、意味をつけるため」がこの回の軸
- 検索エンジンや読み上げソフトが読めるようになる、という実利も添える
-->

---
category: HOW THE WEB WORKS
---

# タグと要素

<div class="mt-10 flex justify-center">
<div class="text-center">
  <div class="text-4xl font-mono">
    <span class="text-red-500">&lt;h1&gt;</span><span>自己紹介</span><span class="text-red-500">&lt;/h1&gt;</span>
  </div>
  <div class="flex justify-center gap-14 mt-3 text-sm opacity-70">
    <span>開始タグ</span>
    <span>内容</span>
    <span>終了タグ</span>
  </div>
  <div class="mt-6 opacity-70">この かたまり全体を「<b>h1要素</b>」と呼ぶ</div>
</div>
</div>

<div class="mt-10 grid grid-cols-2 gap-8">
<div>

### 基本は開始と終了のセット

```html
<p>文章</p>
<h2>見出し</h2>
```

</div>
<div>

### 終了タグがないものもある

```html
<img src="cat.png" />
<br />
```

<div class="text-sm mt-2 opacity-70">
中身を持たないタグ（画像・改行など）。<br>
末尾の <code>/</code> は「ここで閉じている」という目印。<br>
無くても動くが、付ける書き方が一般的。
</div>

</div>
</div>

<!--
開始タグ・内容・終了タグ。
- 終了タグが無いタグ（img / br）もあることに触れる
- 末尾の `/` について聞かれたら「閉じてる目印。無くても動く」でOK
-->

---
category: HOW THE WEB WORKS
---

# 属性 — タグに追加情報を渡す

<div class="mt-8 flex justify-center">
<div class="text-center">
  <div class="text-3xl font-mono">
    <span>&lt;img </span><span class="text-orange-500">src</span><span>=</span><span class="text-green-600">"cat.png"</span><span> /&gt;</span>
  </div>
  <div class="mt-3 text-sm opacity-70">
    <span class="text-orange-500">属性名</span> = <span class="text-green-600">値</span>
  </div>
</div>
</div>

<div class="mt-8"/>

開始タグの中に `属性名="値"` の形で書く。**値はダブルクォートで囲む。**

```html
<a href="https://github.com/">GitHub</a>
<img src="images/avatar.png" alt="プロフィール画像" />
<html lang="ja">
```

<div class="mt-6 text-sm opacity-70">
よく使う属性 → <code>src</code>（画像の場所） / <code>href</code>（リンク先） / <code>alt</code>（画像の説明） / <code>class</code>（CSSでの名前）
</div>

<!--
属性＝タグへの追加情報。
- 「**値は必ずダブルクォートで囲む**」
- src / href / alt / class の4つだけ覚えれば今日は足りる
-->
