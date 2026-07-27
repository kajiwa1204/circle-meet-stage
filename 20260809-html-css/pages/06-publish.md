---
layout: section
category: STATIC SITE HOSTING
---

# Part 5
## GitHub Pages で公開する

<!--
目安10分。時間が押していたら実習に回してよい。
-->

---
category: STATIC SITE HOSTING
---

# 公開の手順

<div class="grid grid-cols-2 gap-8 mt-6 text-sm">
<div>

<div class="text-xl font-bold mb-2">① リポジトリを作る</div>

GitHubで新しいリポジトリを作成（例：`my-profile`）

**Public** にする ← Private だと公開できない

<div class="text-xl font-bold mt-6 mb-2">② push する（前回やったやつ）</div>

```bash
git init
git add .
git commit -m "first commit"
git branch -M main
git remote add origin \
  git@github.com:ユーザー名/my-profile.git
git push -u origin main
```

</div>
<div>

<div class="text-xl font-bold mb-2">③ Pages を有効にする</div>

リポジトリページ → **Settings** → 左メニューの **Pages**

- **Source** … `Deploy from a branch`
- **Branch** … `main` / `(root)` → **Save**

<div class="text-xl font-bold mt-6 mb-2">④ 1〜2分待つ</div>

ページ上部にURLが出れば公開完了です。

```
https://ユーザー名.github.io/my-profile/
```

</div>
</div>

<!--
**Publicを最初に念押し**（Privateだと公開できない）。
- Gitコマンドは前回やった内容。詰まる人はそこを一緒に見る
- Settings → Pages の場所が分かりにくいので画面共有で見せる
- 反映待ちの1〜2分は次のページを話しながら待つ
-->

---
category: STATIC SITE HOSTING
---

# 公開でハマりがちなポイント

<div class="mt-6 grid grid-cols-2 gap-5 text-sm">

<div class="p-4 border-l-4 border-red-400 bg-red-50 dark:bg-red-900 rounded">
<b>ファイル名は index.html</b><br>
トップページのファイル名は必ず <code>index.html</code>。
<code>Index.html</code> や <code>home.html</code> だと表示されない。
</div>

<div class="p-4 border-l-4 border-red-400 bg-red-50 dark:bg-red-900 rounded">
<b>大文字・小文字が区別される</b><br>
手元のMacでは表示できても、公開すると画像が消えることがある。
<code>Avatar.PNG</code> と <code>avatar.png</code> は別物。
</div>

<div class="p-4 border-l-4 border-yellow-400 bg-yellow-50 dark:bg-yellow-900 rounded">
<b>反映まで数分かかる</b><br>
push してもすぐには変わらない。
1〜2分待ってから<b>スーパーリロード</b>
（<kbd>Shift</kbd> + リロード）。
</div>

<div class="p-4 border-l-4 border-yellow-400 bg-yellow-50 dark:bg-yellow-900 rounded">
<b>公開＝全世界に見える</b><br>
本名・住所・電話番号・学籍番号などは載せない。
載せる情報は自分で選ぶ。
</div>

</div>

<!--
待ち時間に読む想定。
- 大文字小文字の話は**手元で動いたのに公開すると画像が消える**典型例
- 個人情報の話は必ず触れる。本名・住所・学籍番号は載せない
-->
