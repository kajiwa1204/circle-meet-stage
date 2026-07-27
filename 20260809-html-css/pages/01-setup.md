---
layout: section
category: ENVIRONMENT SETUP
---

# Part 0
## 準備の確認

<!--
目安5分。準備できている人が多ければ次の1枚だけで通過する。
-->

---
category: ENVIRONMENT SETUP
---

# 今日使う道具

<div class="grid grid-cols-2 gap-8 mt-8">
<div class="p-5 border-2 border-teal-500 rounded-lg">
<h3 class="text-teal-600">VSCode</h3>
<b>コードを書くエディタ</b>
<div class="text-sm mt-2 opacity-80">
Microsoft製・無料。世界で一番使われているエディタ。<br>
メモ帳でも書けますが、色分けと入力補完があるだけで書きやすさが違います。
</div>
</div>

<div class="p-5 border-2 border-blue-400 rounded-lg">
<h3 class="text-blue-500">Chrome</h3>
<b>表示を確認するブラウザ</b>
<div class="text-sm mt-2 opacity-80">
検証ツール（デベロッパーツール）が強力。<br>
Safari / Edge でも進められますが、今日はChrome前提で説明します。
</div>
</div>
</div>

<div class="mt-8 p-4 bg-yellow-50 dark:bg-yellow-900 rounded text-sm">
事前案内のとおり、準備はできていますか。
VSCodeを開いて、右下に <b>「Go Live」</b> の文字が見えていればOKです。<br>
まだの人・うまくいかなかった人は、今この場で声をかけてください。
</div>

<!--
ここで**全員の状態を確認**する。
- 「VSCodeを開いて、右下に "Go Live" が見えている人？」と挙手を取る
- 見えていない人がいたら次の数枚へ。全員OKならPart 1へ飛ぶ
-->

---
category: ENVIRONMENT SETUP
---

# VSCodeを入れる

<PlatformTabs>
<template #mac>

1. [code.visualstudio.com](https://code.visualstudio.com/) を開き、**Download for macOS** をクリック
2. ダウンロードされたzipを**ダブルクリックで展開**
3. 出てきた `Visual Studio Code` を **「アプリケーション」フォルダにドラッグ**
4. 初回起動時に確認ダイアログが出たら **「開く」**

<div class="text-sm mt-4 opacity-70">
Homebrewを使っている人はこれだけ：
</div>

```bash
brew install --cask visual-studio-code
```

</template>
<template #win>

1. [code.visualstudio.com](https://code.visualstudio.com/) を開き、**Download for Windows** をクリック
2. ダウンロードされた `.exe` を実行
3. 途中の「追加タスクの選択」で **「PATH への追加」に必ずチェック**
4. 「エクスプローラーのディレクトリ コンテキスト メニューに追加」も入れておくと便利

<div class="text-sm mt-4 opacity-70">
コマンドで入れる場合（PowerShell）：
</div>

```powershell
winget install Microsoft.VisualStudioCode
```

</template>
</PlatformTabs>

<div class="mt-4 text-sm opacity-70">
検索から入る場合、広告の偽サイトに注意。ドメインが <code>code.visualstudio.com</code> か確認してください。
</div>

<!--
未完了者がいる場合のみ。
- 画面上のタブでMac/Windowsを切り替える（一度押せば以降のページも連動）
- ダウンロード中は待たずに先へ進んでよい。後で追いつかせる
-->

---
category: ENVIRONMENT SETUP
---

# 日本語化する（拡張機能の入れ方）

<div class="grid grid-cols-2 gap-8 mt-4">
<div>

VSCodeは初期状態だと英語です。拡張機能を入れると日本語になります。

<div class="mt-4"/>

1. 左のバーの <codicon-extensions class="inline-block inline-icon" width="1em" height="1em" />（Extensions）をクリック
2. 検索欄に `Japanese` と入力
3. **Japanese Language Pack for VS Code** を **Install**
4. 右下に出るボタンで **再起動**

<div class="mt-4 text-sm opacity-70">
ショートカットで開く場合：
</div>

<PlatformTabs>
<template #mac>

<mdi-apple-keyboard-command class="inline-block inline-icon" width="1em" height="1em" /> `Command` + <mdi-apple-keyboard-shift class="inline-block inline-icon" width="1em" height="1em" /> `Shift` + `X`

</template>
<template #win>

`Ctrl` + `Shift` + `X`

</template>
</PlatformTabs>

</div>
<div>

<div class="p-4 border rounded bg-white dark:bg-gray-800 text-black dark:text-white text-sm">
<div class="opacity-60 mb-2">拡張機能ビューのイメージ</div>
<div style="border:1px solid #ccc;border-radius:4px;padding:8px;margin-bottom:8px">
<div style="background:#eee;color:#333;padding:4px 8px;border-radius:3px;font-size:12px"><codicon-search class="inline-block inline-icon" width="1em" height="1em" /> Japanese</div>
</div>
<div style="border:1px solid #2e7d6b;border-radius:4px;padding:8px">
<b>Japanese Language Pack</b><br>
<span style="opacity:.7">Microsoft</span>
<div style="text-align:right"><span style="background:#2e7d6b;color:#fff;padding:2px 10px;border-radius:3px;font-size:12px">Install</span></div>
</div>
</div>

<div class="mt-4 text-sm opacity-70">
この手順が「拡張機能の入れ方」です。
次のLive Serverも、今後入れる他の拡張機能も同じ流れになります。
</div>

</div>
</div>

<!--
日本語化は任意。英語のままでも進行に支障はない。
- ポイントは「**これが拡張機能の入れ方の型**」。次のLive Serverも同じ手順
-->

---
category: ENVIRONMENT SETUP
---

# Live Server を入れる

<div class="grid grid-cols-2 gap-8 mt-4">
<div>

### 何をするもの？

ファイルを保存すると、ブラウザが自動で読み込み直してくれる拡張機能です。

<div class="mt-4"/>

今日はCSSを少し変えて確認、の繰り返しになります。
その都度ブラウザに切り替えてリロードするのは地味に面倒なので、
入れておくのをおすすめします。

</div>
<div>

### 入れ方

1. 拡張機能ビューで `Live Server` を検索
2. **Live Server**（作者：Ritwick Dey）を Install

### 使い方

`index.html` を開いた状態で、
右下の **「Go Live」** をクリック

<div class="mt-2 text-sm opacity-70">
または <code>index.html</code> を右クリック →
<b>Open with Live Server</b>
</div>

<div class="mt-4 text-sm opacity-70">
止めるときは、同じボタン（Port: 5500）をもう一度クリック。
</div>

</div>
</div>

<!--
ここは**できるだけ全員に入れてもらう**。
- 「保存した瞬間にブラウザが更新される」を口頭で強調
- 無いと今日ずっと手動リロードになる、と実感が湧く言い方をする
-->

---
category: ENVIRONMENT SETUP
---

# フォルダを作って開く

<div class="grid grid-cols-2 gap-8 mt-4">
<div>

### ファイル単体ではなく「フォルダ」を開く

VSCodeは**フォルダごと開く**のが基本です。
ここを間違えると、CSSが読み込めない・
Live Serverが動かないなどの事故が起きます。

<div class="mt-4"/>

1. デスクトップに `my-profile` フォルダを作る
2. VSCodeで開く

<PlatformTabs>
<template #mac>

**File → Open Folder…**（ファイル → フォルダーを開く）
またはフォルダをVSCodeのアイコンにドラッグ

</template>
<template #win>

**ファイル → フォルダーを開く**
またはフォルダを右クリック → **Codeで開く**

</template>
</PlatformTabs>

</div>
<div>

### 作るフォルダ構成

```
my-profile/
├── index.html   ← 中身
├── style.css    ← 見た目
└── images/      ← 画像置き場
    └── avatar.png
```

<div class="mt-4 p-3 bg-yellow-50 dark:bg-yellow-900 rounded text-sm">
フォルダ名・ファイル名は<b>半角英数字</b>で。<br>
日本語やスペースが入ると、公開したときに画像が表示されないなどの原因になります。
</div>

<div class="mt-3 text-sm opacity-70">
新規ファイルは、左のエクスプローラーの <codicon-new-file class="inline-block inline-icon" width="1em" height="1em" /> アイコンから作れます。
</div>

</div>
</div>

<!--
**事故が一番多いところ**。念押しする。
- 「ファイル単体ではなく、**フォルダ**を開く」
- ファイルを直接開くとCSSが効かない・Live Serverが動かない
- フォルダ名は半角英数字。日本語やスペースは後で公開時に事故る
-->

---
category: ENVIRONMENT SETUP
---

# 覚えておくと楽なショートカット

<div class="grid grid-cols-2 gap-8 mt-6">
<div>

<PlatformTabs>
<template #mac>

| 操作 | キー |
|------|------|
| **保存** | <mdi-apple-keyboard-command class="inline-block inline-icon" width="1em" height="1em" /> `Command` + `S` |
| 拡張機能 | <mdi-apple-keyboard-command class="inline-block inline-icon" width="1em" height="1em" /> `Command` + <mdi-apple-keyboard-shift class="inline-block inline-icon" width="1em" height="1em" /> `Shift` + `X` |
| コマンドパレット | <mdi-apple-keyboard-command class="inline-block inline-icon" width="1em" height="1em" /> `Command` + <mdi-apple-keyboard-shift class="inline-block inline-icon" width="1em" height="1em" /> `Shift` + `P` |
| ファイル検索 | <mdi-apple-keyboard-command class="inline-block inline-icon" width="1em" height="1em" /> `Command` + `P` |
| 元に戻す | <mdi-apple-keyboard-command class="inline-block inline-icon" width="1em" height="1em" /> `Command` + `Z` |

</template>
<template #win>

| 操作 | キー |
|------|------|
| **保存** | `Ctrl` + `S` |
| 拡張機能 | `Ctrl` + `Shift` + `X` |
| コマンドパレット | `Ctrl` + `Shift` + `P` |
| ファイル検索 | `Ctrl` + `P` |
| 元に戻す | `Ctrl` + `Z` |

</template>
</PlatformTabs>

</div>
<div>

<div class="text-sm opacity-70">
今日いちばん使うのは保存です。保存しないとブラウザに反映されません。<br>
変わらないときは、まず保存したか確認してください。
</div>

<div class="mt-4 text-sm opacity-70">

タブに <codicon-circle-filled class="inline-block inline-icon" width="1em" height="1em" /> が付いていたら未保存のサインです。

</div>

<div class="mt-6 text-sm opacity-70">
これで準備は完了。<br>
ここからHTMLとCSSの話に入ります。
</div>

</div>
</div>

<!--
覚えるのは**保存だけ**でいい。
- 「変わらない」と言われたら、まず保存したか確認させる
- タブの ● が未保存のサイン、と実際に見せると早い
-->
