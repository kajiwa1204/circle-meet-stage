---
layout: section
category: READING THE SAMPLE SITE
---

# Part 4
## 完成サイトを読み解く

<!--
目安5分。ここは駆け足でよい。
-->

---
layout: two-cols
layoutClass: gap-6
category: READING THE SAMPLE SITE
---

# 全体の構造

<div class="mt-4 text-sm">

```html
<body>

  <header class="hero">
    画像・名前・肩書き
  </header>

  <main class="container">
    <section>About</section>
    <section>Skills</section>
    <section>Works</section>
    <section>Links</section>
  </main>

  <footer class="footer">
    コピーライト
  </footer>

</body>
```

</div>

::right::

<img src="/profile-site.png" class="rounded-lg shadow-xl max-h-95 mx-auto mt-14">

<!--
左のHTML構造と右の見た目を**対応づけて**指す。
- 「さっきまで書いたタグの組み合わせだけでできている」
-->

---
category: READING THE SAMPLE SITE
---

# 完成HTML（前半）

```html {all|3-7|9-14|16-22}
<body>

  <header class="hero">
    <img class="avatar" src="images/avatar.svg" alt="プロフィール画像" />
    <h1>山田 はな</h1>
    <p class="tagline">情報学部 2年 / Webとコーヒーが好き</p>
  </header>

  <main class="container">

    <section class="section">
      <h2>About</h2>
      <p>大学では情報学を学んでいます。……</p>
    </section>

    <section class="section">
      <h2>Skills</h2>
      <ul class="tags">
        <li>HTML</li>
        <li>CSS</li>
      </ul>
    </section>
```

<!--
クリックでhero → About → Skills と順に対応づける。
-->

---
category: READING THE SAMPLE SITE
---

# 完成HTML（後半）

```html {all|1-9|11-16|18-22}
    <section class="section">
      <h2>Works</h2>
      <ul class="works">
        <li>
          <h3>サークル紹介サイト</h3>
          <p>所属サークルの紹介ページ。</p>
        </li>
      </ul>
    </section>

    <section class="section">
      <h2>Links</h2>
      <ul class="links">
        <li><a href="https://github.com/" target="_blank">GitHub</a></li>
      </ul>
    </section>

  </main>
  <footer class="footer">
    <p>&copy; 2026 Hana Yamada</p>
  </footer>
</body>
```

<!--
Works / Links / 閉じタグ。
- これは**抜粋**。配布ファイルにはもう少し項目がある、と一言添える
-->

---
category: READING THE SAMPLE SITE
---

# 完成CSSの見どころ

<div class="grid grid-cols-2 gap-5 mt-4 text-sm">

<div class="p-4 border rounded">
<b class="text-teal-600">① 全体の土台</b>

```css
* { box-sizing: border-box; }

body {
  margin: 0;
  line-height: 1.8;
  color: #333333;
  background-color: #fbfaf7;
}
```

`margin: 0` で body の初期余白を消す。
背景を真っ白から少しずらすと上品に。
</div>

<div class="p-4 border rounded">
<b class="text-teal-600">② 中央寄せの型</b>

```css
.container {
  max-width: 720px;
  margin: 0 auto;
  padding: 0 20px;
}
```

この3行はよく使う型です。
左右の padding がスマホで効いてくる。
</div>

</div>

<!--
①②。
- `.container` の3行はよく使う型なので、覚えて損はないと言う
-->

---
category: READING THE SAMPLE SITE
---

# 完成CSSの見どころ（つづき）

<div class="grid grid-cols-2 gap-5 mt-4 text-sm">

<div class="p-4 border rounded">
<b class="text-teal-600">③ タグを横並びに</b>

```css
.tags {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  list-style: none;
  padding: 0;
}

.tags li {
  padding: 6px 14px;
  border-radius: 999px;
  background-color: #e8f0ed;
}
```
</div>

<div class="p-4 border rounded">
<b class="text-teal-600">④ 見出しの下線</b>

```css
.section h2 {
  padding-bottom: 8px;
  border-bottom: 2px solid #2e7d6b;
}
```

線を1本引くだけで見出しがはっきりします。
`padding-bottom` で文字と線を離すのがコツ。

<div class="mt-4 text-sm opacity-70">
CSSは上から順に適用される。同じ指定が重なったら、後に書いた方が勝つ。
</div>

</div>

</div>

<!--
③④。
- 「CSSは後に書いた方が勝つ」は質問が出やすいので先に触れておく
-->
