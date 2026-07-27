<script setup lang="ts">
import { computed } from "vue";
import { useSlideContext } from "@slidev/client";

// 各スライドの frontmatter に書いた category をフッターに出す。
// グローバル層では $frontmatter が空になるため、nav 経由で現在のスライドを参照する。
const { $slidev } = useSlideContext();

const label = computed<string>(
  () => ($slidev as any)?.nav?.currentSlideRoute?.meta?.slide?.frontmatter?.category ?? "",
);
</script>

<template>
  <footer v-if="label" class="deck-footer">
    <span class="deck-footer__label">{{ label }}</span>
    <span class="deck-footer__rule" aria-hidden="true" />
  </footer>
</template>

<style>
.deck-footer {
  position: absolute;
  right: 3.2rem;
  bottom: 0.9rem;
  left: 3.2rem;
  display: flex;
  align-items: center;
  gap: 1.1rem;
  pointer-events: none;
}

.deck-footer__label {
  flex: 0 0 auto;
  opacity: 0.4;
  font-family: ui-monospace, SFMono-Regular, Menlo, Consolas, monospace;
  font-size: 0.6rem;
  font-weight: 700;
  letter-spacing: 0.34em;
  line-height: 1;
  text-transform: uppercase;
  white-space: nowrap;
}

.deck-footer__rule {
  display: block;
  flex: 1 1 auto;
  height: 1px;
  background: currentColor;
  opacity: 0.15;
}
</style>
